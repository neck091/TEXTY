"use client";
import React, { useState, useEffect } from "react";
import { redirect } from "next/navigation";
import "./puzzle1.css";

export default function Telephone() {
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = (number) => {
    setInputValue((prev) => prev + number);
  };

  const handleReset = () => {
    setInputValue("");
  };

  useEffect(() => {
    // inputValue가 변경될 때마다 전화번호를 확인하여 페이지 이동
    if (inputValue === "0101234") {
      redirect("/main");
    }
  }, [inputValue]);

  return (
    <>
      <div>
        <button
          className="square"
          onClick={() => handleButtonClick("1")}
        >
          　
        </button>
        <button
          className="square"
          onClick={() => handleButtonClick("2")}
        >
          　
        </button>
        <button
          className="square"
          onClick={() => handleButtonClick("3")}
        >
          　
        </button>
      </div>
      <div>
        <button
          className="square"
          onClick={() => handleButtonClick("4")}
        >
          　
        </button>
        <button
          className="square"
          onClick={() => handleButtonClick("5")}
        >
          　
        </button>
        <button
          className="square"
          onClick={() => handleButtonClick("6")}
        >
          　
        </button>
      </div>
      <div>
        <button
          className="square"
          onClick={() => handleButtonClick("7")}
        >
          　
        </button>
        <button
          className="square"
          onClick={() => handleButtonClick("8")}
        >
          　
        </button>
        <button
          className="square"
          onClick={() => handleButtonClick("9")}
        >
          　
        </button>
      </div>
      <div>
        <button
          className="square"
          onClick={() => handleButtonClick("*")}
        >
          　
        </button>
        <button
          className="square"
          onClick={() => handleButtonClick("0")}
        >
          　
        </button>
        <button
          className="square"
          onClick={() => handleButtonClick("#")}
        >
          　
        </button>
      </div>
      <div className="inputs">
        <input type="hidden" value={inputValue} readOnly />
        <input
          className="input"
          type="text"
          value={inputValue.replace(/\d/g, "#")}
          readOnly
        />
        <input
          className="button"
          type="reset"
          value="리셋"
          onClick={handleReset}
        />
      </div>
    </>
  );
}
