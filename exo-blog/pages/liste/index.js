import React from "react";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

export default function index(props) {
  return (
    <div className="container col-10 col-xl-6 mx-auto">
      <h1 className="text-center my-3">La liste des utilisateurs</h1>
      <div className="row row-cols-1 g-4">
        {props.usersArray.map((item) => (
          <div className="col" key={uuidv4()}>
            <div className="card d-flex flex-row p-2">
              <div className="col-6">
                <h5 className="card-title">{ item.username}</h5>
              </div>
              <div className="col-6 text-end">
                <Link href={`/liste/${item.id}`}><a >Contacter</a></Link>
              </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const usersArray = await fetch(
    `https://jsonplaceholder.typicode.com/users`
  ).then((res) => res.json());

  return {
    props: {
      usersArray,
    },
  };
}
