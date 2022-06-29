import React from "react";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

export default function index(props) {
  return (
    <div className="container mx-auto col-10 col-xl-8">
      <h1 className="text-center">Bienvenue sur le blog</h1>
      <p className="text-center">voici les articles</p>

      <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
        {props.postsArray.map((item) => (
          <div className="col" key={uuidv4()}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.body.substr(0, 25)}...</p>
              </div>
              <div className="card-footer bg-transparent border-0">
                <Link href={`/blog/${item.id}`}>
                  <a>Lire cet article</a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const postsArray = await fetch(
    `https://jsonplaceholder.typicode.com/posts`
  ).then((res) => res.json());

  return {
    props: {
      postsArray,
    },
  };
}
