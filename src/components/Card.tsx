import "../Card.scss";
import GitHubImage from "../GitHub-Mark-32px.png"

type card = {
    title: string
    text: string
    gitHubLink?: string
}

export const Card = (props: card) => {
    return (
        <div className="card">
            <div className="card__body">
                <img src="" />
                <h2 className="card__title">{props.title}</h2>
                <p className="card__text">{props.text}</p>
            </div>
            <div className="card__detail">
                <button className="card__detail__button">プロジェクトの内容</button>
                <a href={props.gitHubLink}>
                    <img src={GitHubImage} className="card__detail__repository" />
                </a>
            </div>
        </div>
    )
}