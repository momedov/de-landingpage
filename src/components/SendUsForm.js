import styled from "./SendUsForm.module.css";

const SendUsForm = (props) => {
  //   const Backdrop = (props) => {
  //     return <div className={styled.backdrop} onClick={props.onClick} />;
  //   };

  return (
    <>
      <div className={styled.backdrop} onClick={props.onClickBackdrop} />

      <div className={styled.form__container} onClick={props.onClickBackdrop}>
        <div className={styled.form} onClick="none">
          <div className={styled.form__body}>
            <form
              action="#"
              id="form"
              className={styled.form__body}
              onSubmit={props.onSubmit}
              noValidate
            >
              <h1 className={styled.form__title}>SEND US MESSAGE</h1>
              <div className={styled.form__item}>
                <label htmlFor="formName" className={styled.form__label}>
                  Full Name
                </label>
                <input
                  id="formName"
                  type="text"
                  name="name"
                  className={styled.form__input}
                ></input>
              </div>

              <div className={styled.form__item}>
                <label htmlFor="formEmail" className={styled.form__label}>
                  Email
                </label>
                <input
                  id="formEmail"
                  type="text"
                  name="email"
                  className={styled.form__input}
                ></input>
              </div>

              <div className={styled.form__item}>
                <label htmlFor="formMessage" className={styled.form__label}>
                  Message
                </label>
                <textarea
                  id="formMessage"
                  type="text"
                  name="Message"
                  className={styled.form__input}
                ></textarea>
              </div>

              <button type="submit" className={styled.form__button}>
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SendUsForm;
