import styles from "./styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>TEXTY</h1>
        <div className={styles.grid}>
          <button className={styles.card}>
            <h2 className="title">
              <a href="/test">게임시작</a> &rarr;
            </h2>
          </button>
          <button className={styles.card}>
            <h2>나가기 &rarr;</h2>
          </button>
        </div>
      </main>
    </div>
  );
}
