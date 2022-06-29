import React from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className="bg-primary text-center py-3 px-0">
        <Link href="/">
          <a>Accueil</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/liste">
          <a>Liste</a>
        </Link>
      </ul>
    </nav>
  );
}
