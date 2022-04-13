export const SearchCardBox = (props: any) => {

    return (
        <select onChange={(e) => props.setFilterText((prev: string) => prev = e.target.value)}>
          <option value="">利用言語フィルター</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
        </select>
    )
}