import { createContext, useContext, useEffect, useState } from "react";

const ModalContext = createContext();
export const useModalContext = () => {
  return useContext(ModalContext);
};

const ModalProvider = ({ children }) => {
  const [isShowing, setIsShowing] = useState(false);
  const [content, setContent] = useState();

  useEffect(() => {
    if (isShowing) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isShowing]);

  return (
    <ModalContext.Provider value={{ setIsShowing, setContent }}>
      {children}
      {isShowing && (
        <div className="fixed inset-0 z-[2]">
          <div
            className="absolute inset-0 flex items-center justify-center bg-slate-600/60"
            onClick={() => setIsShowing(false)}
          >
            {content}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};
export default ModalProvider;
