
import SITE_CONFIG from "./data.js";

// ======================================================
// Rehabilitation - Website Application
// ======================================================

const $ = (id) => document.getElementById(id);


// 避免資料中的特殊字元破壞 HTML
function safe(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);
}


// ======================================================
// 1. PDF 文章及搜尋
// ======================================================

function renderArticles() {

    const list = $("articleList");
    const search = $("articleSearch");
    const category = $("articleCategory");
    const empty = $("articleEmpty");

    const categories = [
        ...new Set(
            SITE_CONFIG.pdfArticles.map(item => item.category)
        )
    ];

    category.innerHTML =
        '<option value="">全部分類</option>' +
        categories.map(item =>
            `<option value="${safe(item)}">${safe(item)}</option>`
        ).join("");


    function updateArticles() {

        const keyword = search.value.trim().toLowerCase();
        const selected = category.value;

        const results = SITE_CONFIG.pdfArticles.filter(item => {

            const text =
                `${item.title} ${item.description} ${item.category}`
                .toLowerCase();

            return (
                (!selected || item.category === selected) &&
                text.includes(keyword)
            );

        });


        list.innerHTML = results.map(item => `

            <article class="content-card">

                <span class="card-tag">
                    ${safe(item.category)}
                </span>

                <h3>${safe(item.title)}</h3>

                <p>${safe(item.description)}</p>

                <div class="card-actions">

                    <button data-open-pdf="${safe(item.id)}">
                        線上閱讀
                    </button>

                    <a class="secondary"
                       href="${safe(item.filePath)}"
                       target="_blank"
                       rel="noopener">
                        開啟 PDF
                    </a>

                </div>

            </article>

        `).join("");


        empty.hidden = results.length !== 0;


        list.querySelectorAll("[data-open-pdf]").forEach(button => {

            button.addEventListener("click", () => {

                const item = SITE_CONFIG.pdfArticles.find(
                    entry => entry.id === button.dataset.openPdf
                );

                if (item) {
                    openViewer(
                        item.title,
                        `<iframe src="${safe(item.filePath)}"
                         title="${safe(item.title)}"></iframe>`
                    );
                }

            });

        });

    }


    search.addEventListener("input", updateArticles);
    category.addEventListener("change", updateArticles);

    updateArticles();
}


// ======================================================
// 2. MP4 影音播放
// ======================================================

function renderVideos() {

    const list = $("videoList");

    list.innerHTML = SITE_CONFIG.mediaItems.map(item => `

        <article class="content-card">

            <span class="card-tag">MP4 影音分享</span>

            <h3>${safe(item.title)}</h3>

            <p>${safe(item.description)}</p>

            <div class="card-actions">

                <button data-open-video="${safe(item.id)}">
                    播放影片
                </button>

                <a class="secondary"
                   href="${safe(item.filePath)}"
                   target="_blank"
                   rel="noopener">
                    開啟影片
                </a>

            </div>

        </article>

    `).join("");


    list.querySelectorAll("[data-open-video]").forEach(button => {

        button.addEventListener("click", () => {

            const item = SITE_CONFIG.mediaItems.find(
                entry => entry.id === button.dataset.openVideo
            );

            if (!item) return;

            openViewer(
                item.title,

                `<video controls autoplay playsinline preload="metadata">

                    <source src="${safe(item.filePath)}"
                            type="video/mp4">

                    您的瀏覽器不支援 MP4 播放。

                </video>`
            );

        });

    });

}


// ======================================================
// 3. PPT 簡報列表
// ======================================================

let currentPages = [];
let currentPage = 0;


function renderPresentations() {

    const list = $("presentationList");

    list.innerHTML = SITE_CONFIG.pptSlides.map(item => `

        <article class="content-card">

            <span class="card-tag">PPT 簡報</span>

            <h3>${safe(item.title)}</h3>

            <p>共 ${item.pages.length} 頁</p>

            <div class="card-actions">

                <button data-open-ppt="${safe(item.id)}">
                    開始播放
                </button>

            </div>

        </article>

    `).join("");


    list.querySelectorAll("[data-open-ppt]").forEach(button => {

        button.addEventListener("click", () => {

            const item = SITE_CONFIG.pptSlides.find(
                entry => entry.id === button.dataset.openPpt
            );

            if (!item) return;

            currentPages = item.pages;
            currentPage = 0;

            $("slideTitle").textContent = item.title;

            updateSlide();

            $("slideDialog").showModal();

        });

    });

}


// ======================================================
// 4. PPT 翻頁控制
// ======================================================

function updateSlide() {

    if (!currentPages.length) return;

    const page = currentPages[currentPage];

    $("slideImage").src = page.imgUrl;

    $("slideImage").alt = page.caption;

    $("slideCaption").textContent = page.caption;

    $("slideCounter").textContent =
        `${currentPage + 1} / ${currentPages.length}`;

    $("prevSlide").disabled = currentPage === 0;

    $("nextSlide").disabled =
        currentPage === currentPages.length - 1;

}


function previousSlide() {

    if (currentPage > 0) {

        currentPage--;

        updateSlide();

    }

}


function nextSlide() {

    if (currentPage < currentPages.length - 1) {

        currentPage++;

        updateSlide();

    }

}


// ======================================================
// 5. PDF / MP4 共用檢視視窗
// ======================================================

function openViewer(title, content) {

    $("viewerTitle").textContent = title;

    $("viewerContent").innerHTML = content;

    $("viewerDialog").showModal();

}


function closeViewer() {

    $("viewerDialog").close();

    // 關閉視窗時停止影片播放
    $("viewerContent").innerHTML = "";

}


// ======================================================
// 6. 版主介紹、免責聲明及外部資源
// ======================================================

function renderInformation() {

    const author = SITE_CONFIG.author;

    $("authorName").textContent = author.name;

    $("authorBio").textContent = author.bio;

    $("authorMotto").textContent = author.motto;


    $("nonProfitText").textContent =
        SITE_CONFIG.disclaimer.nonProfitText;

    $("medicalText").textContent =
        SITE_CONFIG.disclaimer.medicalText;


    $("resourceList").innerHTML =
        SITE_CONFIG.externalLinks.map(item => `

            <article class="content-card">

                <span class="card-tag">
                    ${safe(item.tag)}
                </span>

                <h3>${safe(item.title)}</h3>

                <p>${safe(item.desc)}</p>

                <a class="resource-link"
                   href="${safe(item.url)}"
                   target="_blank"
                   rel="noopener noreferrer">

                    前往網站 →

                </a>

            </article>

        `).join("");

}


// ======================================================
// 7. 網站統計
// ======================================================

function renderStatistics() {

    $("pdfCount").textContent =
        SITE_CONFIG.pdfArticles.length;

    $("videoCount").textContent =
        SITE_CONFIG.mediaItems.length;

    $("pptCount").textContent =
        SITE_CONFIG.pptSlides.length;

    $("year").textContent =
        new Date().getFullYear();

}


// ======================================================
// 8. 手機版導覽選單
// ======================================================

function initNavigation() {

    const toggle = $("menuToggle");
    const nav = $("mainNav");

    toggle.addEventListener("click", () => {

        const opened = nav.classList.toggle("open");

        toggle.setAttribute(
            "aria-expanded",
            String(opened)
        );

    });


    nav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("open");

            toggle.setAttribute("aria-expanded", "false");

        });

    });

}


// ======================================================
// 9. 視窗及鍵盤操作
// ======================================================

function initDialogs() {

    $("closeViewer").addEventListener(
        "click",
        closeViewer
    );

    $("closeSlides").addEventListener(
        "click",
        () => $("slideDialog").close()
    );

    $("prevSlide").addEventListener(
        "click",
        previousSlide
    );

    $("nextSlide").addEventListener(
        "click",
        nextSlide
    );


    // 點擊視窗外部關閉
    $("viewerDialog").addEventListener("click", event => {

        if (event.target === $("viewerDialog")) {
            closeViewer();
        }

    });


    $("slideDialog").addEventListener("click", event => {

        if (event.target === $("slideDialog")) {
            $("slideDialog").close();
        }

    });


    // 鍵盤左右方向鍵翻頁
    document.addEventListener("keydown", event => {

        if (!$("slideDialog").open) return;

        if (event.key === "ArrowLeft") {
            previousSlide();
        }

        if (event.key === "ArrowRight") {
            nextSlide();
        }

    });

}


// ======================================================
// 10. 網站啟動
// ======================================================

function initWebsite() {

    renderStatistics();

    renderArticles();

    renderVideos();

    renderPresentations();

    renderInformation();

    initNavigation();

    initDialogs();

    console.log("Rehabilitation Website Loaded Successfully.");

}


// 啟動網站
initWebsite();
