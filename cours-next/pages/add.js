import React from "react";
import { useRef, useState, useEffect } from "react";

export default function add() {
  const enWord = useRef();
  const frWord = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newWord = {
      en: enWord.current.value,
      fr: frWord.current.value,
    };

    fetch("/api/vocapi", {
      method: "post",
      body: JSON.stringify(newWord),
      headers: {
        "content-Type": "application/json",
      },
    }).then((res) =>
      res.json().then((data) => {
        console.log(data);
      })
    );
    enWord.current.value = "";
    frWord.current.value = "";
  };

  return (
    <div className="container p-4">
      <form onSubmit={handleSubmit}>
        <label htmlFor="addEn" className="form-label">
          Ajouter un mot en anglais
        </label>
        <input ref={enWord} type="text" className="form-control" id="addEn" />
        <label htmlFor="addFR" className="form-label">
          Ajouter un mot en français
        </label>
        <input ref={frWord} type="text" className="form-control" id="addFr" />
        <button className="btn btn-primary mt-4">Ajouter</button>
      </form>
    </div>
  );
}
