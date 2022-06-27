import { useRouter } from "next/router";
import React from "react";

export default function index() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>Votre profil {router.query.profil}</h1>
    </div>
  );
}
