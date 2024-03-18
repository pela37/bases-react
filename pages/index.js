import Head from 'next/head';
import Image from 'next/image';
import { useContext, useState } from 'react';
import { useImmerReducer } from 'use-immer';
import { panierReducer, initialPanier, PanierContext, SetPanierContext } from "../panier.js";
import style from "../styles/listeJeux.module.css";
import { recupData } from '../db.js';
import { PageAdmin } from './admin.js';
import { dataJS } from '../data.js';
const utiliserDB = false;

export const getStaticProps = async function() {
  const data = utiliserDB ? await recupData() : dataJS;
  return { props: { data } };
}

export default function Page ({ data }) {
  let [consoleState, setConsole] = useState("XBOX");
  let [panier, setPanier] = useImmerReducer(panierReducer, initialPanier);

  function ajoutPanier(jeu, consoleIn=consoleState, qte=1) {
    setPanier({"type":"ajouter", "consoleJeu":consoleIn, "jeu":jeu, "qte":qte});
  }

  let listeProduit = data.filter((produit) => produit.disposur.find((produit2) => produit2 == consoleState) != undefined);
  listeProduit = listeProduit.map((produit) => <li key={produit.id}><Produit prod={produit} consoleProp={consoleState}
  ajoutPanier={ajoutPanier} /></li>);

  return ( <>
  <Head>
    <title>Pélag-e commerce</title>
  </Head>
  <ContextProvider panier={panier} setPanier={setPanier}>
    <header><BarreNav setConsole={setConsole} /></header>
    {consoleState != "panier" && consoleState != "admin" && <ul className={style.ulJeux}>{listeProduit}</ul>}
    {consoleState == "panier" && <PagePanier/>}
    {consoleState == "admin" && <PageAdmin data={data}/>}
  </ContextProvider>
  </>);
}

function Produit({prod, consoleProp, ajoutPanier}) {
  return (
    <div className={style.jeu}>
      <Image src={prod.img[consoleProp]} width={225} height={225} alt="jaquette" className={style.imgJeu} />
      <p>{prod.nom}</p>
      <p>{prod.prix[consoleProp]}€</p>

      <button onClick={() => ajoutPanier(prod)}>Ajouter au panier</button>
    </div>
  );
}

function ProduitPanier({prod, consoleProp}) {
  let setPanier = useContext(SetPanierContext);
  let panier = useContext(PanierContext);
  let produit = panier.jeux.find((jeu) => jeu.consoleJeu == consoleProp && jeu.jeu.id == prod.id);

  function suppPanier(jeu, consoleIn) {
    setPanier({"type":"supprimer", "consoleJeu":consoleIn, "jeu":jeu});
  }

  function setQte(jeu, consoleIn, qte) {
    setPanier({"type":"setQte", "consoleJeu":consoleIn, "jeu":jeu, "qte":qte})
  }

  return (
    <tr>
      <td>
        <Image src={prod.img[consoleProp]} width={225} height={225} alt="jaquette" className={style.imgJeu} />
      </td>
      <td>
        <p>{prod.nom}</p>
        <p>{consoleProp}</p>
        <p>{prod.prix[consoleProp]}€</p>
        <input type="number" value={produit.qte} min="1"
        onChange={(e) => setQte(prod, consoleProp, parseInt(e.target.value))} />
        <button onClick={() => suppPanier(prod, consoleProp)}>Supprimer</button>
      </td>
    </tr>
  );
}

function BarreNav({setConsole}) {
  let panier = useContext(PanierContext);
  return (
    <nav><ul className = {style.ulNav}>
      <span className={style.leftNav}>
      <li key="switch" onClick={() => setConsole("switch")}>Switch</li> 
      <li key="PS5" onClick={() => setConsole("PS5")}>PS5</li> 
      <li key="XBOX" onClick={() => setConsole("XBOX")}>XBOX</li> 
      <li key="PC" onClick={() => setConsole("PC")}>PC</li> 
      { utiliserDB && <li key="admin" onClick={() => setConsole("admin")}>Admin</li> }
      </span><span className={style.endNav}>
      <li key="panier" id={style.panierLi} onClick={() => setConsole("panier")}><Panier panier={panier} /></li>
      </span>
    </ul></nav>
  )
}

function Panier() {
  let panier = useContext(PanierContext);
  return (
    <div className={style.panierDiv}>
    <Image src="/images/panier.png" width={30} height={30} alt="icône panier" />
    <p>{panier.nbArticle} articles - {panier.prixTotal}€</p>
    </div>
  )
}

function PagePanier() {
  let panier = useContext(PanierContext);
  let listePanier = panier.jeux.map((jeu) => <ProduitPanier prod={jeu.jeu} consoleProp={jeu.consoleJeu} />)
  return (
    <tbody>
      <thead>
        <tr><th colspan="2">
          Votre panier  
        </th></tr>
      </thead>
      {listePanier}
    </tbody>
  )
}

function ContextProvider({panier, setPanier, children}) {
  return (
    <PanierContext.Provider value={panier}>
      <SetPanierContext.Provider value={setPanier}>
        {children}
      </SetPanierContext.Provider>
    </PanierContext.Provider>
  )
}