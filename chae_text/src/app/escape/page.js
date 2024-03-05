"use client";
import React, { useState, useEffect } from "react";
import styles from "./game.module.css"; // 스타일 파일 경로는 상황에 맞게 조정해주세요

export default function escape() {
  const narrations = [
    "자, 당신은 넓은 들판의 하늘을 바라보고 있습니다.",
    "아",
    "잘못말했습니다. 당신은 꽉 막힌 지하 독방에서 일어납니다.",
    // 여기에 추가 나레이션을 넣을 수 있습니다.
  ];

  const [currentNarrationIndex, setCurrentNarrationIndex] =
    useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Enter") {
        const nextIndex = currentNarrationIndex + 1;
        if (nextIndex < narrations.length) {
          setCurrentNarrationIndex(nextIndex);
        } else {
          setGameStarted(true); // 모든 나레이션이 끝나면 게임 시작
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentNarrationIndex, narrations.length]);

  if (!gameStarted) {
    return (
      <div className={styles.narration}>
        <p>{narrations[currentNarrationIndex]}</p>
      </div>
    );
  }

  <div className={styles.gameStart}>
    return redirect("/test");
    {/* <TEST /> */}
    {/* 게임 시작 후의 화면 또는 컴포넌트 */}
  </div>;
}
