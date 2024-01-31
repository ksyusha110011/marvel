import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.flex}>
        <div>
          <h2 className={styles.txt1}>
            <b>Find</b> all your<br />
            favorite<br />
            <b>Character</b><br />
          </h2>
          <h3 className={styles.txt2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h3>
          <button className={styles.btn}>See Character</button>
        </div>
        <img className={styles.img1} src="https://img.freepik.com/free-vector/superhero-in-different-actions-costume-superhero-polygonal-geometric-man-woth-cloak-vector-illustration-set_1284-46991.jpg?w=740&t=st=1706699105~exp=1706699705~hmac=81155c1ae462a806b0701e5494dcff65266834373233c08f9b34d00eff829948" alt="" />
      </div>
        
    </>
  );
};
