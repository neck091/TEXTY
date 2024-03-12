"use client";

import React, { useState } from "react";
import styles from "../styles/game.module.css"; // 스타일링을 위한 CSS 모듈 파일
import { useRouter } from "next/navigation";
import Inventory from "../inventory/Inventory";

const scenarios = {
  cell: {
    description: "주변을 둘러본다.",
    options: [
      {
        text: "벽",
        nextScene: "wall",
      },
      {
        text: "탁자",
        nextScene: "desk",
      },
    ],
  },
  wall: {
    description: "하얀 벽.",
    options: [
      {
        text: "벽의 구멍",
        nextScene: "wall2",
      },
      {
        text: "다시 돌아간다",
        nextScene: "cell",
      },
    ],
  },
  wall2: {
    description: "사람 하나가 들어갈 수 있을 정도의 통로.",
    options: [
      {
        text: "들어가자.",
        nextScene: "vent",
      },
    ],
  },
  desk: {
    description: "더 이상의 볼 일은 없습니다.",
    options: [
      {
        text: "다시 돌아간다.",
        nextScene: "cell",
      },
    ],
  },
};
export default () => {
  const [currentScene, setCurrentScene] = useState("cell");
  const router = useRouter();

  const handleOptionClick = (nextScene) => {
    if (nextScene === "vent") {
      router.push("/puzzle4");
    }
    setCurrentScene(nextScene);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <header className={styles.title}>
          <h1>하얀 방</h1>
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
        <div>
          <Inventory />
        </div>
      </main>
    </div>
  );
};
