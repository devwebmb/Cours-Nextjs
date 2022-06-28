import React from "react";

export default function cours(props) {
  console.log(props.result.bpi.EUR.rate);
  return (
    <div>
      <h1 className="text-center my-2">
        Le BTC est à : {props.result.bpi.EUR.rate}
      </h1>
    </div>
  );
}

export async function getServerSideProps(context) {
  console.log(context);
  const data = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const result = await data.json();

  return {
    props: {
      result,
    },
  };
}
