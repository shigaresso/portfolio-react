export type card = {
    projectName: string
    heading: string
    gitHubLink?: string
    languages: string[]
}

export const datas: card[] = [
    {
        projectName: "このポートフォリオ",
        heading: "React, TypeScript を用いた Web サイトです",
        gitHubLink: "https://github.com/shigaresso/portfolio-react",
        languages: ["TypeScript", "React"],
    },
    {
        projectName: "ニコニコ風コメントアプリ",
        heading: "配信サイトのコメントをニコニコ風にします",
        gitHubLink: "https://github.com/shigaresso/comment-flow-server",
        languages: ["HTML", "CSS", "JavaScript"],
    },
    {
        projectName: "OPENREC のコメント保存プログラム",
        heading: "OPENREC の配信アーカイブから過去コメントを CSV 形式で保存します",
        gitHubLink: "https://github.com/shigaresso/get-openrec-archive-comment",
        languages: ["Python"],
    },
    {
        projectName: "配信アーカイブ コメント分析ソフト",
        heading: "CSV 形式のコメントを単位時間当たりのコメント量のグラフに変換し、可視化します",
        gitHubLink: "https://github.com/shigaresso/per-time-comment-graph",
        languages: ["Python"],
    }
]

export const firstSearchText = "開発フィルター"