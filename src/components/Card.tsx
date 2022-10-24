import "../Card.scss";
import GitHubImage from "../GitHub-Mark-32px.png";
import { card } from "../data";
import { useState } from "react";
import { Modal } from "./Modal";

export const Card = ({ projectName, heading, gitHubLink, content }: card) => {
  const [showModal, setShowModal] = useState(false);

  const ShowModal = () => {
    setShowModal(true);
  };
  return (
    <div className="card">
      <div className="card__body">
        <img src="" />
        <h2 className="card__projectName">{projectName}</h2>
        <p className="card__heading">{heading}</p>
      </div>
      <div className="card__detail">
        {/* <button className="card__detail__button" onClick={ShowModal}>プロジェクトの内容</button> */}
        <a href={gitHubLink}>
          <img src={GitHubImage} className="card__detail__repository" />
        </a>
      </div>
      <Modal
        showFlag={showModal}
        setShowModal={setShowModal}
        content={content}
      />
    </div>
  );
};
