import React from "react";

export default function user(props) {
  return (
    <div className="col-10 col-xl-4 mx-auto">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.userChoisi.name}</h5>
          <h5 className="card-subtitle mb-3 text-muted">
            Username : {props.userChoisi.username}
          </h5>
          <div className="card">
            <div className="card-text border-bottom p-1">
              Username : {props.userChoisi.username}
            </div>
            <div className="card-text border-bottom p-1">Email : {props.userChoisi.email}</div>
            <div className="card-text border-bottom p-1">
              Site Web : {props.userChoisi.website}
            </div>
            <div className="card-text p-1">
              Téléphone : {props.userChoisi.phone}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const slug = context.params.user;
  const data = await fetch(`https://jsonplaceholder.typicode.com/users`).then(
    (res) => res.json()
  );

  const userChoisi = data.find((user) => user.id.toString() === slug);

  return {
    props: {
      userChoisi,
    },
  };
}

export async function getStaticPaths() {
  const data = await fetch(`https://jsonplaceholder.typicode.com/users`).then(
    (res) => res.json()
  );

  const paths = data.map((item) => ({
    params: { user: item.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}
