"use client";

import React, { useState } from "react";
import styles from "../styles/game.module.css"; // 스타일링을 위한 CSS 모듈 파일
import { useRouter } from "next/navigation";

const scenarios = {
  start: {
    description:
      "당신은 달력을 보고 알아낸 숫자들을 독방 문에 입력해봅니다. 삐리릭- 문은 손쉽게 열렸네요. 문을 열고 밖으로 나가면 위로 이어진 계단이 나옵니다.",
    options: [
      {
        text: "올라간다",
        nextScene: "start2",
      },
    ],
  },
  start2: {
    description:
      "망설임 없이 당신은 계단을 오릅니다. 얼마나 올랐을까, 당신은 바닥에 떨어진 종이를 발견했습니다.",
    options: [
      {
        text: "줍는다",
        nextScene: "cell",
      },
    ],
  },
  cell: {
    description:
      "당신은 종이를 줍고 쭉 올라갑니다. 계단의 끝에 다다르면 또다시 문이네요.",
    options: [
      {
        text: "",
        nextScene: "bed",
      },
      {
        text: "",
        nextScene: "desk",
      },
      {
        text: "",
        nextScene: "phone",
      },
      {
        text: "천장을 본다",
        nextScene: "up",
      },
    ],
  },
  bed: {
    description: "여전히 푹신푹신한 침대입니다. 아무것도 없네요.",
    options: [
      {
        text: "다시 돌아간다",
        nextScene: "cell",
      },
    ],
  },
  desk: {
    description: "책상 위는 깔끔합니다.",
    options: [
      {
        text: "다시 돌아간다",
        nextScene: "cell",
      },
    ],
  },
  phone: {
    description: "붉은 색의 전화기입니다. 또 입력 할 필요는 없겠죠?",
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
    description: "종이를 살펴보니 아무런 정보도 없습니다.",
    options: [
      {
        text: "다시 돌아간다",
        nextScene: "cell",
      },
    ],
  },
  dial: {
    description: "다시 누를 필요 없대도요!",
    options: [
      {
        text: "다시 돌아간다",
        nextScene: "cell",
      },
    ],
  },
  up: {
    description: "천장을 보니 달력이 하나 보입니다.",
    options: [
      {
        text: "자세히 본다",
        nextScene: "go",
      },
      {
        text: "다시 돌아간다",
        nextScene: "cell",
      },
    ],
  },
};
export default () => {
  const [currentScene, setCurrentScene] = useState("start");
  const router = useRouter();

  const handleOptionClick = (nextScene) => {
    if (nextScene === "go") {
      router.push("/puzzle2");
    }
    setCurrentScene(nextScene);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <header className={styles.title}>
          <h1>지하 독방</h1>
        </header>
        <div className={styles.description}>
          {scenarios[currentScene]?.description}
        </div>
        <div className={styles.options}>
          {scenarios[currentScene]?.options.map((option, index) => (
            <button
              key={index}
              className={styles.optionButton}
              onClick={() => handleOptionClick(option.nextScene)}
            >
              {option.text}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};
