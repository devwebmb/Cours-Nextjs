import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto col-10 col-xl-8 mt-5">
      <h1>Bienvenue sur code.io</h1>
      <p>Le blog communautaire des afficionados de développement web.</p>
      <div className="row row-cols-1 row-cols-xl-2 g-4 ">
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Lisez les articles</h5>
              <h6 className="card-subtitle my-2 text-muted">Maximisez votre culture web</h6>
              <p className="card-text">
                Chaque auteur tente de vous apporter le plus de valeur possible
                par article.
              </p>
            </div>
            <div className="card-footer bg-transparent border-0 pt-0">
              <Link href="/blog">
                <a className="card-link">Visitez le blog</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">
                Faites un tour vers la liste des membres
              </h5>
              <h6 className="card-subtitle my-2">Faîtes vous des amis</h6>
              <p className="card-text">
                Ajoutez, invitez et discutez avec les différents membres.
              </p>
            </div>
            <div className="card-footer bg-transparent border-0 pt-0">
              <Link href="/liste">
                <a className="card-link ">Découvrez la liste des membres</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
