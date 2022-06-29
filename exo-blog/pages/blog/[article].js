import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function article(props) {
    return <div className="container col-10  mx-auto">
        <h1 className="text-center mt-5 mb-3">{props.articleChoisi.title}</h1>
        <p>{ props.articleChoisi.body}</p>
  </div>;
}

export async function getStaticProps(context) {
  const slug = context.params.article;
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts`).then(
    (res) => res.json()
  );

    const articleChoisi = data.find((article) => article.id.toString() === slug);

  return {
    props: {
        articleChoisi,
    },
  };
}

export async function getStaticPaths() {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts`).then(
    (res) => res.json()
  );

  const paths = data.map((item) => ({
    params: { article: item.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}
