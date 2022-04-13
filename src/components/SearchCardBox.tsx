type searchCardBox = {
  setFilterText: React.Dispatch<React.SetStateAction<string>>,
}

export const SearchCardBox = ({setFilterText}: searchCardBox) => {

    return (
        <select onChange={(e) => setFilterText((prev: string) => prev = e.target.value)}>
          <option value="">利用言語フィルター</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
        </select>
    )
}