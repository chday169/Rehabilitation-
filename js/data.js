
const SITE_CONFIG = {

    // ① 網站基本資料
    site: {
        title: "Rehabilitation",
        subtitle: "復健資訊分享園地",
        description: "分享復健資訊、文章、影音、簡報與個人經驗。"
    },

    
	// ② 非營利及醫療免責聲明
    disclaimer: {
        nonProfitText:
            "【非營利與無對價宣告】本網站為個人復健經驗整理與紀錄，完全基於公益及經驗分享，不含任何商業廣告或盈利行為。本站未接受任何醫療機構、廠商或個人的贊助、合作、酬勞或其他對價關係；不販售產品，也不推薦特定廠商。",

        medicalText:
            "【醫療免責聲明】本站所有內容（包含文章、影片、簡報、訓練單）僅供經驗交流與參考，絕非個人化醫療診斷、治療處方或療效保證。每位中風患者的病灶位置、嚴重程度、年齡、共病與恢復潛能皆不同，進行任何復健訓練或生活照護變更前，請務必諮詢您的主治醫師或專業物理、職能、語言治療師。文中提及醫療人員或機構，僅為記錄個人就醫歷程與表達感謝，不是推薦、背書、廣告或招攬，也不代表任何機構優於其他機構。練習過程中如有疼痛、暈眩、呼吸困難、腫脹、意識改變等情形，請立即停止並就醫。若出現疑似中風症狀（臉歪、手無力、說話不清），請記下發作時間，立即撥打119。"
    },
	    // ③ 版主介紹
    author: {
        name: "戴清河 (C.H. Day)",
        avatarText: "復健紀錄者",

        bio:
            "我是一位土木水利技師，曾任台灣省水利技師公會創會理事長、台灣省土木技師公會創會理事。2025年6月，我太太中風，右側手腳癱瘓、左腦受損。陪病與復健的過程中，我發現工程力學的思考方式，竟能幫助我理解復健動作、步態與跌倒風險。於是我開始把這些筆記整理下來，分享給病友與家屬。我不是醫師，也不是治療師；這裡寫的，是我個人的陪伴經驗與力學觀點，不是醫療建議。在這段路上，我們受到許多醫療人員的幫助。謝謝復健科醫師、物理治療師、職能治療師、語言治療師、護理師與個案管理師，在我們最慌亂的時候，一步一步教我們怎麼做。這份感謝，是對「人與專業」的感謝，不是對任何機構的推薦或背書。願這些筆記，能讓下一個家庭少走一點冤枉路。",

        motto:
            "「病手病腳，不用則廢。能自己做的，一定讓她自己做。一步一腳印，持之以恆，重建生活的節奏。」"
    },

    
    // ④ 外部網站
    externalLinks: [

        {
            title: "版主 YouTube 頻道",
            url: "https://www.youtube.com/@chday7919",
            desc: "分享復健日常與練習影片",
            tag: "個人頻道"
        },

        {
            title: "衛生福利部",
            url: "https://www.mohw.gov.tw",
            desc: "官方健康照護與衛教資訊",
            tag: "醫療衛教"
        },

        {
            title: "中華民國腦中風關懷協會",
            url: "http://www.stroke.org.tw",
            desc: "病友關懷與交流資源",
            tag: "社福支援"
        }

    ],

    // ⑤ PDF 文章
    pdfArticles: [

        {
            id: "pdf1",
            title: "腦中風全方位復健與生活重建完整指南",
            category: "生活起居指南",
            fileName: "pdf1.pdf",
            filePath: "./pdfs/pdf4.pdf",
            description: "腦中風全方位復健與生活重建完整指南。"			
        },

        {
            id: "pdf2",
            title: "大腦的重生奇蹟",
            category: "復健訓練指南",
            fileName: "pdf2.pdf",
            filePath: "./pdfs/pdf2.pdf",
            description: "大腦的重生。"			
        },

        {
            id: "pdf3",
            title: "復健力學及心理建設",
            category: "復健訓練指南",
            fileName: "pdf3.pdf",
            filePath: "./pdfs/pdf3.pdf",
            description: "中風復健訓練、復健力學及心理建設。"
        },

        {
            id: "pdf4",
            title: "中風後三階段完整指南",
            category: "復健訓練指南",
            fileName: "pdf4.pdf",
            filePath: "./pdfs/pdf4.pdf",
            description: "腦中風全方位復健與生活重建完整指南。"
        },

        {
            id: "pdf5",
            title: "請給病手病腳機會",
            category: "復健訓練指南",
            fileName: "pdf5.pdf",
            filePath: "./pdfs/pdf5.pdf",
            description: "腦中風復健經驗分享。"
        },
		
		{
            id: "pdf6",
            title: "Whole_Brain_Awakening",
            category: "復健訓練指南",
            fileName: "pdf6.pdf",
            filePath: "./pdfs/pdf6.pdf",
            description: "腦中風復健經驗分享。"
        },
		
		{
            id: "pdf7",
            title: "Post-Stroke_Movement_Blueprint",
            category: "復健訓練指南",
            fileName: "pdf7.pdf",
            filePath: "./pdfs/pdf7.pdf",
            description: "腦中風復健經驗分享。"
        }

    ],

    // ⑥ MP4 影音
    mediaItems: [

        {
            id: "mp1",
            title: "中風72小時黃金救援：急診室自救指南錄",
            fileName: "mp1.mp4",
            filePath: "./media/mp1.mp4",
            description: "語言發音與音樂旋律復健相關分享。"
        },

        {
            id: "mp2",
            title: "工程親人的復健經驗",
            fileName: "mp2.mp4",
            filePath: "./media/mp2.mp4",
            description: "中風急性期相關資訊分享。"
        },

        {
            id: "mp3",
            title: "拐杖拿在好腿侧",
            fileName: "mp3.mp4",
            filePath: "./media/mp3.mp4",
            description: "影片分享。"
        },

        {
            id: "mp4",
            title: "哈佛腦科學家的中風涅槃",
            fileName: "mp4.mp4",
            filePath: "./media/mp4.mp4",
            description: "輔具使用與行走相關資訊分享。"
        },

        {
            id: "mp5",
            title: "九十五歲牙醫飆破短跑紀錄",
            fileName: "mp5.mp4",
            filePath: "./media/mp5.mp4",
            description: "腦科學與中風復健相關資訊分享。"
        },

        {
            id: "mp6",
            title: "生涯規劃的退休攻略",
            fileName: "mp6.mp4",
            filePath: "./media/mp6.mp4",
            description: "語言發音與音樂旋律復健相關分享。"
        },

        {
            id: "mp7",
            title: "破解中風復健的大腦安全模式",
            fileName: "mp7.mp4",
            filePath: "./media/mp7.mp4",
            description: "語言發音與音樂旋律復健相關分享。"
        },
		
		{
            id: "mp8",
            title: "改寫潛意識程式",
            fileName: "mp8.mp4",
            filePath: "./media/mp8.mp4",
            description: "語言發音與音樂旋律復健相關分享。"
        },
				
       ],

    // ⑦ PPT 簡報
    pptSlides: [

        {
            id: "ppt1",
            title: "復健階段里程碑與目標設定簡報",

            pages: Array.from({ length: 15 }, (_, i) => ({
                pageNum: i + 1,
                imgUrl: `./ppts/ppt1_page${i + 1}.jpg`,
                caption: `第 ${i + 1} 頁`
            }))
        },

        {
            id: "ppt2",
            title: "復健簡報（二）",

            pages: Array.from({ length: 15 }, (_, i) => ({
                pageNum: i + 1,
                imgUrl: `./ppts/ppt2_page${i + 1}.jpg`,
                caption: `第 ${i + 1} 頁`
            }))
        }

    ]

};

export default SITE_CONFIG;
