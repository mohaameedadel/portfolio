import { createContext, useState } from "react";

export let DarkContext = createContext();

export default function DarkContextProvider({ children }) {
  const [dark, setDark] = useState(null);

  return (
    <DarkContext.Provider value={{ setDark, dark }}>
      {children}
    </DarkContext.Provider>
  );
}
