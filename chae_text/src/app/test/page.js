"use client";

import { useRouter } from "next/router"; // useRouter 훅을 불러옵니다.
import React, { useState } from "react";
import styles from "./Test.module.css"; // 스타일링을 위한 CSS 모듈 파일

const questions = [
  {
    question: "새로운 도전에 대한 태도는 어떠신가요?",
    answers: ["두렵다", "설렌다", "두렵고도 설렌다"],
  },

  // 추가 질문들...
];

export default function Test() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswerClick = (index) => {
    // 마지막 질문이 아니라면 다음 질문으로 이동
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(index + 1);
    } else {
      const router = useRouter();
      router.push(`/escape`);
    }
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <header className={styles.title}>
          <h1>심리테스트</h1>
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
