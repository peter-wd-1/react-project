import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();
export default function ThemeContextProvider({ children }) {
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    // NOTE 1034 is avg for landspace
    // I targeted landspace to cover both landscape and portrait
    // Since there are no landscape specification for design,
    // I decide not to seperate landscape from portrait design.
    const media = window.matchMedia("(max-width: 1034px)");
    console.log("This page is mobile : ", media.matches);

    const onChangeWidth = (event) => {
      setIsMobile(event.matches);
    };
    setIsMobile(media.matches);
    media.addEventListener("change", onChangeWidth);
    return () => media.removeEventListener("cahnge", onChangeWidth);
  }, []);

  useEffect(() => {
    console.log("State in  theme", { isMobile });
  }, [isMobile]);

  return (
    <ThemeContext.Provider
      value={{
        isMobile,
        themeColor: {
          mustard: "#D8B243",
          red: "#CB0007",
          baige: "#F4F2EB",
        },
        themeFont: {
          primary: "Noto Serif Display",
          sub: "Niveau Grotesk",
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
