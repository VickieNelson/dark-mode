import React, { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const UseDarkMode = (initialValue) => {
  //const[whatmodeis,settingthemode] = useLocalStorage(c,d)
  //const test = document.querySelector('body')
  //useEffect to set the state
  // useEffect(()=>{
  //     // if statement that adds dark
  //     if (){

  //     } else{ //removes dark
  //     }
  // }, [f])
  // return [whatmodeis,settingthemode]

  const [mode, setMode] = useLocalStorage("lightMode", initialValue);
  const isBody = document.querySelector("body");

  useEffect(() => {
    if (mode) {
      isBody.classList.add("darkMode");
    } else {
      isBody.classList.remove("darkMode");
    }
  }, [mode]);
  return [mode, setMode];
};
