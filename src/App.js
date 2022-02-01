import { useState, useEffect } from "react";
import SendUsForm from "./components/SendUsForm";
import Header from "./components/Header";
import WhatWeDo from "./components/WhatWeDo";
import OurClients from "./components/OurClients";
import Footer from "./components/Footer";

function App() {
  const [isFormShown, setIsFormShown] = useState(false);

  const onClickLetsTalk = () => {
    setIsFormShown(true);
  };

  const hideFormHandler = () => {
    setIsFormShown(false);
  };

  const onSubmitHandler = () => {
    setIsFormShown(false);
  };

  useEffect(() => {
    document.body.style.overflow = `${isFormShown ? "hidden" : "auto"}`;
  }, [isFormShown]);

  return (
    <>
      {isFormShown && (
        <SendUsForm
          onClickBackdrop={hideFormHandler}
          onSubmit={onSubmitHandler}
        />
      )}
      <Header />
      <WhatWeDo />
      <OurClients />
      <Footer onClickSubmit={onClickLetsTalk} />
    </>
  );
}

export default App;
