export type card = {
  projectName: string;
  heading: string;
  content: {
    using: string;
    learningContent: string;
    improvement: string;
  };
  gitHubLink: string;
  languages: string[];
};

enum Languages {
  CSS = "CSS",
  HTML = "HTML",
  JavaScript = "JavaScript",
  Python = "Python",
  React = "React",
  TypeScript = "TypeScript",
}

export const datas: card[] = [
  {
    projectName: "このポートフォリオ",
    heading: "React, TypeScript を用いた Web サイトです。",
    content: {
      using: "動くかの確認",
      learningContent: `・React を用いたモジュール単位の Web サイト制作
            ・TypeScript によって Web フロントエンドに型を導入
            ・絞り込み検索の作り方
            ・CSS を用いたデザイン`,
      improvement: `・利用ユーザーが理解しやすいデザイン力`,
    },
    gitHubLink: "https://github.com/shigaresso/portfolio-react",
    languages: [Languages.TypeScript, Languages.React],
  },
  {
    projectName: "ニコニコ風コメントアプリ",
    heading: "配信サイトのコメントをニコニコ風にします。",
    content: {
      using: "OBS Studio などと用いて動画画面にコメントを合成出来ます。",
      learningContent: `Web で利用できる様々な描画方法を学んだ。
            その描画方法は、
            ・CSS
            ・GSAP (JavaScript ライブラリ)
            ・Web Worker を用いたマルチスレッドによる負荷分散`,
      improvement: "画面が覆い尽くされる程のコメント量だとカクつく。",
    },
    gitHubLink: "https://github.com/shigaresso/comment-flow-server",
    languages: [Languages.CSS, Languages.HTML, Languages.JavaScript],
  },
  {
    projectName: "OPENREC のコメント保存プログラム",
    heading: "OPENREC の配信アーカイブから過去コメントを CSV 形式で保存します",
    content: {
      using: "動くかの確認",
      learningContent: "正しく変更できていますか？",
      improvement: "c",
    },
    gitHubLink: "https://github.com/shigaresso/get-openrec-archive-comment",
    languages: [Languages.Python],
  },
  {
    projectName: "配信アーカイブ コメント分析ソフト",
    heading:
      "CSV 形式のコメントを単位時間当たりのコメント量のグラフに変換し、可視化します",
    content: {
      using: "aaaaa",
      learningContent: "b",
      improvement: "c",
    },
    gitHubLink: "https://github.com/shigaresso/per-time-comment-graph",
    languages: [Languages.Python],
  },
];

export const firstSearchText = "開発フィルター";
