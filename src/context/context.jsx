import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextWord) => {};

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(input);
    const response = await run(input);
    // start-  when there is a star make it bold
    let responseArray = response.split("*");
    let newResponse;
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }

    // after removing star if single star available then replace it with new line
    let newResponse2 = newResponse.split("*").join("</br>");

    // end when there is a star make it bold
    setResultData(newResponse2);
    setLoading(false);
    setInput("");
  };

  const contextValue = {
    prevPrompts,
    setPrevPrompt,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    setShowResult,
    loading,
    setLoading,
    resultData,
    setResultData,
    input,
    setInput,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
