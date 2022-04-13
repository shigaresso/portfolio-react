import { datas, firstSearchText } from "../data"

type searchCardBox = {
  setFilterText: React.Dispatch<React.SetStateAction<string>>,
}

export const SearchCardBox = ({ setFilterText }: searchCardBox) => {
  // 開発言語を保存する配列
  const searchKeyWords: string[] = []

  // ポートフォリオのリポジトリオブジェクトから検索フィルタ用の配列を作成する
  datas.map((data) => {
    data.languages.map((language) => {
      searchKeyWords.push(language)
    })
  })

  // Set を用いて配列から重複を削除する
  // その後、プログラミング言語の順番をアルファベット順にしたいので配列に変換する
  const uniqueSearchKeyWords = Array.from(new Set(searchKeyWords)).sort()
  uniqueSearchKeyWords.unshift(firstSearchText)

  return (
    <select onChange={(e) => setFilterText((prev: string) => prev = e.target.value)}>
      {uniqueSearchKeyWords.map((searchKeyWord) => {
        return <option key={searchKeyWord} value={searchKeyWord}>{searchKeyWord}</option>
      })}
    </select>
  )
}