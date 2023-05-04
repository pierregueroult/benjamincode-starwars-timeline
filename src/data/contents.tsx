import newHope from "../images/newhope.png";
import empireStrikeBack from "../images/empirestrikeback.png";
import returnJedi from "../images/returnofthejedi.png";

import empire from "../svg/empire.svg";
import jedi from "../svg/jedi.svg";
import resistance from "../svg/resistance.svg";

type dataType = {
  id: number;
  title: string;
  content: string;
  date: string;
  image: string;
  logo: string;
}[];

const data: dataType = [
  {
    id: 0,
    title: "Un Nouvel Espoir",
    content:
      "C'est le premier opus de la saga Star Wars par sa date de sortie, mais le quatrième selon l'ordre chronologique de l'histoire.",
    date: "1977",
    image: newHope,
    logo: resistance,
  },
  {
    id: 1,
    title: "L'Empire contre-attaque",
    content:
      "La guerre entre le maléfique Empire galactique et son antagoniste, l’Alliance rebelle, bat son plein.",
    date: "1980",
    image: empireStrikeBack,
    logo: empire,
  },
  {
    id: 2,
    title: "Le Retour du Jedi",
    content:
      "Le maléfique Empire galactique construit une nouvelle station spatiale Étoile de la mort pour anéantir définitivement l'Alliance rebelle.",
    date: "1983",
    image: returnJedi,
    logo: jedi,
  },
];

export default data;
