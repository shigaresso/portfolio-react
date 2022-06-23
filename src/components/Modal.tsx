import "../Modal.scss";

export const Modal = (props: any) => {

    const closeModal = () => {
        props.setShowModal(false)
    }

    
    return (
        <>
            {props.showFlag ? (
                <div id="overlay">
                    <div id="modalContent">
                        <p>{props.content.using}</p>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    )

}