import { useContext } from "react";
import { ThemeContext } from "./ThemeContext.tsx";

export default function useTheme() {
    return useContext(ThemeContext);
}