import NASwitchImg from "./public/images/NieR-Automata-The-End-of-YoRHa-Edition-Nintendo-Switch.jpg";
import NAPCImg from "./public/images/nierautomata.jpg";
import NAPS5Img from "./public/images/NA_PS5.webp";
import NAXBOXImg from "./public/images/NA_XBOX.jpg";
import PikminImg from "./public/images/pikmin.jpg";
import FF16Img from "./public/images/FF16.jpg";
import HaloImg from "./public/images/halo.jpg";
import FTLImg from "./public/images/FTL.jpg";

export var dataJS = [{
    "id" : 1,
    "img" : {
        "switch" : NASwitchImg,
        "PC" : NAPCImg,
        "PS5" : NAPS5Img,
        "XBOX" : NAXBOXImg },
    "nom" : "Nier Automata",
    "disposur" : ["switch", "PC", "PS5", "XBOX"],
    "prix" : {
        "PC" : 5,
        "XBOX" : 10,
        "PS5" : 15,
        "switch" : 20 },
    "desc":"Nier Automata est un jeu d'action de type RPG jouable en solo. Le titre amène le joueur dans un futur lointain où la Terre a été envahie par des formes extra-terrestres armées de \"bio-machines\". Après s'être réfugiée sur la lune, l'humanité envoie sur leur planète natale des androïdes capable de lutter avec les extra-terrestres et reconquérir la planète."
},{
    "id" : 2,
    "img" : {
        "switch" : PikminImg },
    "nom" : "Pikmin 4",
    "disposur" : ["switch"],
    "prix" : {
        "switch" : 40 },
    "desc":"Pikmin 4 est un jeu d'aventure et de stratégie prévu pour Nintendo Switch. Menez des dizaines de petites créatures toutes faites de feuilles et de fleurs à la victoire en les faisant travailler ensemble, et surmontez tous les obstacles qui se dresseront sur votre chemin !"
},{
    "id" : 3,
    "img" : {
        "PS5" : FF16Img },
    "nom" : "Final Fantasy XVI",
    "disposur" : ["PS5"],
    "prix" : {
        "PS5" : 60 },
    "desc":"Final Fantasy XVI est un Action RPG qui a été annoncé au cours de la conférence présentant les jeux, le prix et la date de sortie de la PlayStation 5. Celui-ci se déroule dans un univers medieval fantastique bien plus proche de l'Heroic Fantasy que ne l'était son prédécesseur."
},{
    "id" : 4,
    "img" : {
        "XBOX" : HaloImg },
    "nom" : "Halo Infinite",
    "disposur" : ["XBOX"],
    "prix" : {
        "XBOX" : 20 },
    "desc":"Halo Infinite est un FPS développé par 343 Industries. L'épisode fait la suite directe de Halo 5. On suit les aventures de Master Chief, qui est récupéré dans l'espace par un personnage, avant de découvrir le Halo détruit."
},{
    "id" : 5,
    "img" : {
        "PC" : FTLImg },
    "nom" : "Faster Than  Light",
    "disposur" : ["PC"],
    "prix" : {
        "PC" : 15 },
    "desc":"Mêlant stratégie, gestion et jeu de rôle (RPG), FTL : Faster than Light prend place dans un univers de science-fiction. Le joueur a pour objectif de conduire son vaisseau d'un point A à un point B de la galaxie, en faisant face aux situations critiques qui se présentent à lui (attaques de pirates, dangers environnements), sur un mode aléatoire. Intégrant le concept de mort permanente, le jeu a également une dimension scoring."
}
]