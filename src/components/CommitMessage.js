import styled from "./CommitMessage.module.css";

const CommitMessage = (props) => {
  return (
    <>
      <div className={styled.backdrop} />

      <div className={styled.form__container}>
        <div className={styled.form}>
          <button
            onClick={props.onClose}
            type="submit"
            className={styled.form__button}
          >
            Сообщение отправлено
          </button>
        </div>
      </div>
    </>
  );
};

export default CommitMessage;
