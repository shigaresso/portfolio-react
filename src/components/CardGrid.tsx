import { card, datas, firstSearchText } from "../data"
import { Card } from "./Card"
import "../CardGrid.scss"

type cardGrid = {
    filterText: string,
}

export const CardGrid = ({filterText}: cardGrid) => {
    // 表示するリポジトリのフィルタ機能
    const cardNodes: card[] = filterText != firstSearchText ? datas.filter(
        (data) => {
            // langages 配列で props.filterText 要素を持つもののみ要素として返す
            return data.languages.includes(filterText)
        }
    ) : datas

    return (
        <div className="CardGrid">
            {cardNodes.map((data) =>
                <Card key={data.projectName} projectName={data.projectName} heading={data.heading} languages={data.languages} />
            )}
        </div>
    )
}