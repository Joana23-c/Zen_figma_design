import { createContext, useState } from "react";


const Context = createContext({
  scroll: true,
  setScroll: () => {}
});

function Ctx({ children }) {
  const [scroll, setScroll] = useState(true);

  return (
    <Context.Provider value={{ scroll, setScroll }}>
      {children}
    </Context.Provider>
  );
}

export default Ctx;
export { Context }; 