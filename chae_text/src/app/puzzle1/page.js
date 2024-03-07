"use client";
import React, { useState } from "react";

import { useRouter } from "next/navigation";
import "./puzzle1.css";
import Inventory from "../inventory/Inventory";

export default function Telephone() {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  const handleButtonClick = (number) => {
    setInputValue((prev) => prev + number);
  };

  const handleReset = () => {
    setInputValue("");
  };

  const handleSubmit = () => {
    if (inputValue === "01094625221") {
      router.push("/escape-sub");
    } else {
      alert("전화가 연결되지 않습니다.");
      setInputValue("");
    }
  };

  return (
    <main>
      <section className="dial">
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
      </section>
      <div className="inputs">
        <input type="hidden" value={inputValue} readOnly />
        <input
          className="input"
          type="text"
          value={inputValue}
          readOnly
        />
        <input
          className="button"
          type="reset"
          value="리셋"
          onClick={handleReset}
        />
        <input
          className="button"
          type="submit"
          value="입력"
          onClick={handleSubmit}
        />
      </div>
      <Inventory className="inventory" />
    </main>
  );
}
