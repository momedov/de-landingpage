import { useState, useEffect } from "react";
import SendUsForm from "./components/SendUsForm";
import Header from "./components/Header";
import WhatWeDo from "./components/WhatWeDo";
import OurClients from "./components/OurClients";
import Footer from "./components/Footer";
import CommitMessage from "./components/CommitMessage";

function App() {
  const [isFormShown, setIsFormShown] = useState(false);
  const [isCommited, setIsCommited] = useState(false);

  const onClickLetsTalk = () => {
    setIsFormShown(true);
  };

  const hideFormHandler = () => {
    setIsFormShown(false);
  };

  const onClose = () => {
    setIsCommited(false);
  };

  const onSubmitHandler = () => {
    setIsFormShown(false);
    setIsCommited(true);
  };

  useEffect(() => {
    document.body.style.overflowY = `${isFormShown ? "hidden" : "auto"}`;
  }, [isFormShown]);

  return (
    <>
      {isCommited && <CommitMessage onClose={onClose} />}

      {isFormShown && (
        <SendUsForm
          onClickBackdrop={hideFormHandler}
          onSubmit={onSubmitHandler}
        />
      )}
      <div id="homepage">
        <Header />
        <WhatWeDo />
        <OurClients />
        <Footer onClickSubmit={onClickLetsTalk} />
      </div>
    </>
  );
}

export default App;
