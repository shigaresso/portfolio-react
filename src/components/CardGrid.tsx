import { card, datas } from "../data"
import { Card } from "./Card"
import "../CardGrid.scss"

export const CardGrid = (props: any) => {
    // 表示するリポジトリのフィルタ機能
    const cardNodes: card[] = props.textFilter ? datas.filter(
        (data) => {
            return data.languages.includes(props.textFilter)
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