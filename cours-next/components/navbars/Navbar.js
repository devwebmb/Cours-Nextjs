import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css"

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/blog/article">
        <a>Blog</a>
      </Link>
      <Link href="/">
        <a>&nbsp;&nbsp;Accueil</a>
      </Link>
      <Link href="/contact">
        <a>&nbsp;&nbsp;Contact</a>
      </Link>
    </nav>
  );
}
