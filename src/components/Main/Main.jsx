import React, { useContext } from "react";
import "./main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  } = useContext(Context);

  return (
    <>
      <div className="main">
        <div className="nav">
          <p>Gemini</p>
          <img src={assets.user_icon} alt="user-icon" />
        </div>

        <div className="main-container">
          {!showResult ? (
            <>
              <div className="greet">
                <p>
                  <span>Hello, Coderbunny.</span>
                </p>
                <p>How can I help you today?</p>
              </div>
              <div className="cards">
                <div className="card">
                  <p>Explain about the Mahakumbh Mela 2025</p>
                  <img src={assets.question_icon} alt="" />
                </div>

                <div className="card">
                  <p>Briefly summerize this concept: Event Loop</p>
                  <img src={assets.bulb_icon} alt="" />
                </div>

                <div className="card">
                  <p>Suggest top 10 places to visit in summer in India</p>
                  <img src={assets.compass_icon} alt="" />
                </div>

                <div className="card">
                  <p>Improve the readability of the following code</p>
                  <img src={assets.code_icon} alt="" />
                </div>
              </div>
            </>
          ) : (
            <div className="result">
              <div className="result-title">
                <img src={assets.user_icon} alt="use" />
                <p>{recentPrompt}</p>
              </div>
              <div className="result-data">
                <img src={assets.geminiS_icon} alt="gemini" />
                <p dangerouslySetInnerHTML={{ __html: resultData }}>
                 
                </p>
              </div>
            </div>
          )}

          <div className="main-bottom">
            <div className="search-box">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Gemini"
              />
              <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
              </div>
            </div>

            <p className="bottom-info">
              Gemini may display inaccurate info, including about people, so
              double check its response. Your privacy and Gemini Apps
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
