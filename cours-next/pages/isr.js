import React from "react";

export default function contact(props) {
  return (
    <div>
      <h1>Citations</h1>
      <p>{props.data.title}</p>
    </div>
  );
}

/*https://goquotes-api.herokuapp.com/api/v1/random?count=*/

export async function getStaticProps() {
  const user = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
  const data = await user.json();

  return {
    props: {
      data,
    },
    revalidate: 3
  };
}
