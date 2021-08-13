import useLocalStorage from "./useLocalStorage";

//lets make useDarkmode function

const useDarkmode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode");

  return [darkMode, setDarkMode];
};

export default useDarkmode;
