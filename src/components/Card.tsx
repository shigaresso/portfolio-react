import "../Card.css";

type card = {
    title: string
    text: string
}

export const Card = (props: card) => {
    return (
        <div className="card">
            <div className="card_body">
                <img src="" />
                <h2 className="card_title">{props.title}</h2>
                <p className="card_text">{props.text}</p>
            </div>
            <button className="card_button">詳細を見る</button>
        </div>
    )
}