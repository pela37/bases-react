import {createContext} from "react";

export const initialPanier = {"nbArticle": 0, "prixTotal": 0, "jeux":[]};

export function panierReducer(draft, action) {
    switch(action.type) {
        case "ajouter" : {
            let jeuTrouve = draft.jeux.findIndex((jeu) => jeu.consoleJeu == action.consoleJeu && jeu.jeu.id == action.jeu.id)
            if(jeuTrouve != -1)
                draft.jeux[jeuTrouve].qte += action.qte;
            else
                draft.jeux.push({"consoleJeu":action.consoleJeu, "jeu":action.jeu, "qte":action.qte});
            break; }
        case "supprimer" :
            draft.jeux = draft.jeux.filter((jeu) => !(jeu.consoleJeu == action.consoleJeu && jeu.jeu.id == action.jeu.id));
            break;
        case "setQte" :
            let jeuTrouve = draft.jeux.findIndex((jeu) => jeu.consoleJeu == action.consoleJeu && jeu.jeu.id == action.jeu.id);
            if(jeuTrouve != -1)
                draft.jeux[jeuTrouve].qte = action.qte;
            else
                console.error("action setQte de reducer setPanier vise un jeu qui n'est pas dans le panier");
            break;
    }
    draft.nbArticle=0;
    draft.prixTotal=0;
    for (let jeu of draft.jeux) {
        draft.nbArticle += jeu.qte;
        draft.prixTotal += jeu.jeu.prix[jeu.consoleJeu] * jeu.qte;
    }
}

export const PanierContext = createContext(initialPanier);
export const SetPanierContext = createContext(null);