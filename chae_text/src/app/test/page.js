"use client";

import React, { useState } from "react";
import styles from "./Test.module.css"; // 스타일링을 위한 CSS 모듈 파일

const questions = [
  {
    question: "질문 1",
    answers: ["답변 1", "답변 2", "답변 3"],
  },
  {
    question: "질문 2",
    answers: ["답변 1", "답변 2", "답변 3"],
  },

  // 추가 질문들...
];

export default function TEST() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswerClick = (index) => {
    // 마지막 질문이 아니라면 다음 질문으로 이동
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(index + 1);
    } else {
      // 마지막 질문에 답변한 경우 결과 처리 로직 구현
      // 예: 결과 페이지로 이동
    }
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <header className={styles.title}>
          <h1 className={styles.title}>심리테스트</h1>
        </header>
        <div className="name">
          <span>플레이어 이름</span>
        </div>
        <div className={styles.quizSub}>
          <h2 className={styles.question}>
            {questions[currentQuestionIndex].question}
          </h2>
        </div>
        <div className={styles.quizCard}>
          <div className={styles.answers}>
            {questions[currentQuestionIndex].answers.map(
              (answer, index) => (
                <button
                  key={index}
                  className={styles.answerButton}
                  onClick={() => handleAnswerClick(index)}
                >
                  {answer}
                </button>
              )
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
