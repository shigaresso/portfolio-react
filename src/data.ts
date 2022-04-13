export type card = {
    projectName: string
    heading: string
    gitHubLink?: string
    languages: string[]
}

export const datas: card[] = [
    {
        projectName: "ニコニコ風コメントアプリ",
        heading: "配信サイトのコメントをニコニコ風にします",
        gitHubLink: "https://github.com/shigaresso/comment-flow-server",
        languages: ["HTML", "CSS", "JavaScript"],
    },
    {
        projectName: "アプリ 2",
        heading: "アプリ 2 の見出しです",
        gitHubLink: "aaa",
        languages: ["Python"],
    },
]