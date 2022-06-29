import styles from "../styles/Home.module.css";
import Head from "next/head";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";

export default function Home(props) {
  const [state, setState] = useState("");

  useEffect(() => {
    newWord();
  }, []);

  const newWord = () => {
    fetch("api/vocapi")
      .then((res) => res.json())
      .then((data) => setState(data));
  };
  console.log(state);

  let ramdomWord;
  if (state) {
    const array = state.englishList[0].data;
    ramdomWord = array[Math.floor(Math.random() * array.length)].en;
    console.log(ramdomWord);
  }
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Titre</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.titre}>Mot au hazard</h1>
        {/* <table className={styles.tableau}>
          <tbody>
            {props.array.map((el) => (
              <tr key={uuidv4()}>
                <td>{el.en}</td>
                <td>{el.fr}</td>
              </tr>
            ))}
          </tbody>
        </table> */}
        <button onClick={newWord} className="btn btn-primary d-block m-auto">
          Get random word
        </button>
        <h2 className="text-center mt-3">{ramdomWord }</h2>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await import(`/data/vocabulary.json`);
  const array = data.vocabulary;
  // if (array.lenght === 0) {
  //   return {
  //     redirect: {
  //       destination: "/isr",
  //     },
  //   };
  // }
  // if (array.lenght === 0) {
  //   return {
  //     notFound: true,
  //   };
  // }
  return {
    props: {
      array,
    },
  };
}
