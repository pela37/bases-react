import style from "../styles/listeJeux.module.css";
import Image from 'next/image';
import { useState } from 'react';

export function PageAdmin({ data }) {
    let newId = 1;

    let jeux = [];
    for(let jeu of data) {
        for(let cons of jeu.disposur) {
            jeux.push({ "newId":newId,
                        "id":jeu.id,
                        "img":jeu.img[cons],
                        "nom":jeu.nom,
                        "cons":cons,
                        "prix":jeu.prix[cons],
                        "prixTot":jeu.prix,
                        "desc":jeu.desc });
            newId++;
        }
    }

    let listeJeux = jeux.map((unJeu) => <li key={unJeu.newId}><JeuSolo jeu={unJeu} /></li>);

    return (<>
    <ul className={style.ulJeux}>{listeJeux}</ul>
    </>);
}

let ancienNom;
let ancienPrix;
function JeuSolo ( {jeu} ) {
    let [modifEnCours, setModif] = useState(false);

    return (
        <div className={style.jeu}>
            <Image src={jeu.img} width={225} height={225} alt="jaquette" className={style.imgJeu} />
            {modifEnCours?<input type="text" defaultValue={jeu.nom} onChange={(e) => jeu.nom=e.target.value} />:<p>{jeu.nom}</p>}
            {modifEnCours?<input type="number" defaultValue={jeu.prix} onChange={(e) => jeu.prix=e.target.value} />:<p>{jeu.prix}€</p>}

            <button onClick={modifEnCours?() => {
                jeu.prixTot[jeu.cons]=jeu.prix;
                fetch("http://localhost:3000/api/jeux/"+jeu.id,
                    {"method":"POST", "headers":{"Content-Type": "application/json"}, "body":JSON.stringify({"nom":jeu.nom,"prix":jeu.prixTot})});
                setModif(false);}
            :() => {
                ancienNom=jeu.nom;
                ancienPrix=jeu.prix;
                setModif(true);}}
            >{modifEnCours?"Enregistrer":"Modifier"}</button>
            {modifEnCours && <button onClick={() => {setModif(false);jeu.nom=ancienNom;jeu.prix=ancienPrix;}}>Annuler</button>}
        </div>
    );
}