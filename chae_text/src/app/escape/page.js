// pages/game.escape.js

"use client";

import React, { useState } from "react";
import styles from "./game.module.css"; // 스타일링을 위한 CSS 모듈 파일
import { useRouter } from "next/navigation";
import Inventory from "../comps/Inventory";

const scenarios = {
  start: {
    description:
      "깨어난 당신은 넓은 들판의 하늘을 바라보고 있습니다.",
    options: [
      {
        text: "갑자기?",
        nextScene: "dumy",
      },
      {
        text: "웬 들판?",
        nextScene: "dumy",
      },
      {
        text: "무슨 소릴 하는거야",
        nextScene: "dumy",
      },
    ],
  },
  dumy: {
    description: "아.",
    options: [
      {
        text: "아?",
        nextScene: "dumy2",
      },
    ],
  },
  dumy2: {
    description:
      "잘못말했습니다. 당신은 꽉 막힌 지하 독방에서 일어납니다.",
    options: [
      {
        text: "주변을 둘러본다.",
        nextScene: "cell",
      },
    ],
  },
  cell: {
    description: "주변을 둘러본다.",
    options: [
      {
        text: "침대를 본다",
        nextScene: "bed",
      },
      {
        text: "책상을 본다",
        nextScene: "desk",
      },
      {
        text: "전화기를 살펴본다",
        nextScene: "phone",
      },
    ],
  },
  bed: {
    description: "푹신푹신한 침대입니다. 아무것도 없네요.",
    options: [
      {
        text: "다시 돌아간다",
        nextScene: "cell",
      },
    ],
  },
  desk: {
    description: "침대에는 전화 번호가 적힌 종이가 있습니다.",
    options: [
      {
        text: "종이를 살펴본다",
        nextScene: "paper",
      },
      {
        text: "다시 돌아간다",
        nextScene: "cell",
      },
    ],
  },
  phone: {
    description:
      "붉은 색의 전화기입니다. 입력 할 수 있을 것 같습니다.",
    options: [
      {
        text: "전화를 입력해본다",
        nextScene: "dial",
      },
      {
        text: "다시 돌아간다",
        nextScene: "cell",
      },
    ],
  },
  paper: {
    description:
      "종이를 살펴보니 숫자가 적혀있습니다. '010 - 9462 - 5221' - 전화해♥ ",
    options: [
      {
        text: "가져간다",
        nextScene: "cell",
      },
    ],
  },
  dial: {
    description: "전화",
    options: [
      {
        text: "다시 돌아간다",
        nextScene: "cell",
      },
    ],
  },
  error: {
    description: "올바르지 않은 선택입니다. 다시 시도하세요.",
    options: [
      {
        text: "돌아가기",
        nextScene: "start",
      },
    ],
  },
};
export default () => {
  const [currentScene, setCurrentScene] = useState("start");
  const [paperTaken, setPaperTaken] = useState(false); // 종이를 가져갔는지 여부를 나타내는 상태
  const router = useRouter();

  const handleOptionClick = (nextScene) => {
    if (nextScene === "dial") {
      router.push("/puzzle1");
    } else {
      setCurrentScene(nextScene);
    }
  };

  const handleDeskClick = () => {
    if (currentScene === "cell" && paperTaken) {
      setCurrentScene("deskEmpty"); // 책상에 종이를 가져갔고, cell 씬에서 클릭했을 때
    } else {
      setCurrentScene("desk"); // 기본 책상 씬
    }
  };

  // 책상을 클릭할 때 호출되는 함수
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <header className={styles.title}>
          <h1>지하 독방</h1>
        </header>
        <div className={styles.description}>
          {scenarios[currentScene].description}
        </div>
        <div className={styles.options}>
          {scenarios[currentScene].options.map((option, index) => (
            <button
              key={index}
              className={styles.optionButton}
              onClick={() => handleOptionClick(option.nextScene)}
            >
              {option.text}
            </button>
          ))}
        </div>
        <div className={styles.desk} onClick={handleDeskClick}>
          {/* 책상 이미지 */}
        </div>
        <div>
          <Inventory />
        </div>
      </main>
    </div>
  );
};
