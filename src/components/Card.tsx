import "../Card.scss";
import GitHubImage from "../GitHub-Mark-32px.png"
import { card } from "../data";


export const Card = ({projectName, heading, gitHubLink}: card) => {
    return (
        <div className="card">
            <div className="card__body">
                <img src="" />
                <h2 className="card__projectName">{projectName}</h2>
                <p className="card__heading">{heading}</p>
            </div>
            <div className="card__detail">
                <button className="card__detail__button">プロジェクトの内容</button>
                <a href={gitHubLink}>
                    <img src={GitHubImage} className="card__detail__repository" />
                </a>
            </div>
        </div>
    )
}