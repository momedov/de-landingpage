import { useState } from "react";
import styled from "./SendUsForm.module.css";
import React from "react";

const SendUsForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isNameError, setIsNameError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [isMessageError, setIsMessageError] = useState(false);

  const changeNameHandler = (event) => {
    setName(event.target.value);
    setIsNameError(false);
  };

  const changeEmailHandler = (event) => {
    setEmail(event.target.value);
    setIsEmailError(false);
  };

  const changeMessageHandler = (event) => {
    setMessage(event.target.value);
    setIsMessageError(false);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    var re = new RegExp(
      "^([a-z0-9_-]+.)*[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$"
    );

    if (
      name.length < 1 ||
      message.length < 1 ||
      !re.test(email.toLowerCase())
    ) {
      if (name.length < 1) {
        setIsNameError(true);
      }

      if (message.length < 1) {
        setIsMessageError(true);
      }

      if (!re.test(email)) {
        setIsEmailError(true);
      }
      return;
    }

    props.onSubmit();

    setName("");
    setEmail("");
    setMessage("");
  };

  //   className={`${classes.control} ${
  //     emailState.isValid === false ? classes.invalid : ""
  //   }`}

  return (
    <>
      <div className={styled.backdrop} onClick={props.onClickBackdrop} />

      <div className={styled.form__container} onClick={props.onClickBackdrop}>
        <div className={styled.form} onClick="none">
          <form
            action="#"
            id="form"
            className={styled.form__body}
            onSubmit={onSubmitHandler}
            noValidate
          >
            <h1 className={styled.form__title}>SEND US MESSAGE</h1>
            <div className={styled.form__item}>
              <label htmlFor="formName" className={styled.form__label}>
                Full Name
              </label>
              <input
                placeholder="Your Name"
                value={name}
                id="formName"
                type="text"
                name="name"
                // className={styled.form__input }

                className={`${styled.form__input} ${
                  isNameError && styled.error
                }`}
                onChange={changeNameHandler}
              ></input>
            </div>

            <div className={styled.form__item}>
              <label htmlFor="formEmail" className={styled.form__label}>
                Email
              </label>
              <input
                placeholder="Your Email"
                value={email}
                id="formEmail"
                type="text"
                name="email"
                onChange={changeEmailHandler}
                className={`${styled.form__input} ${
                  isEmailError && styled.error
                }`}
              ></input>
            </div>

            <div className={styled.form__item}>
              <label htmlFor="formMessage" className={styled.form__label}>
                Message
              </label>
              <textarea
                value={message}
                placeholder="Your Message"
                id="formMessage"
                type="text"
                name="Message"
                className={styled.form__input}
                onChange={changeMessageHandler}
                className={`${styled.form__input} ${
                  isMessageError && styled.error
                }`}
              ></textarea>
            </div>

            <button type="submit" className={styled.form__button}>
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SendUsForm;
