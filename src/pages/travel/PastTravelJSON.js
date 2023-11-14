import image1 from "../../components/img/WWkrk.png"
import image2 from "../../components/img/BerlinLondon.png"
import image3 from "../../components/img/CairRome.png"
import image4 from "../../components/img/lisbonbuk.png"
import image5 from "../../components/img/hamhague.png"

const pastTravels = {
  travels: [
    {
      id: 1,
      from: "Cracow",
      to: "Warsaw",
      CO2: 122,
      type: "train",
      date: "12.12.2022",
      distance: 250,
      image: image1
    },
    {
      id: 2,
      from: "Berlin",
      to: "London",
      CO2: 437,
      type: "plane",
      date: "12.10.2022",
      distance: 980,
      image: image2
    },
    {
      id: 3,
      from: "Cairo",
      to: "Rome",
      CO2: 1408,
      type: "plane",
      date: "13.05.2023",
      distance: 1800,
      image: image3
    },
    {
      id: 4,
      from: "Lisbon",
      to: "Bukarest",
      CO2: 1579,
      type: "plane",
      date: "01.01.2023",
      distance: 2370,
      image: image4
    },
    {
      id: 5,
      from: "Hamburg",
      to: "Hague",
      CO2: 12,
      type: "bike",
      date: "21.08.2023",
      distance: 870,
      image: image5
    },
  ],
};

export default pastTravels;
