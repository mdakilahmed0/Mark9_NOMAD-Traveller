import React from "react";
import "./styles.css";
import { useState } from "react";

import indonesia1 from "./images/bali1_Beaches of Bali.jpg";
import indonesia2 from "./images/bali2_Borobudur.jpeg";
import indonesia3 from "./images/bali3_Gili Islands.jpeg";
import indonesia4 from "./images/bali4_Mount_bromo.jpg";
import brazil1 from "./images/brazil_RioDeJaneiro.jpg";
import brazil2 from "./images/brazil_Iguazu-falls.jpg";
import brazil3 from "./images/brazil_Copacabana.jpg";
import brazil4 from "./images/brazil_Carnaval.jpg";

const bestPlacesDB = {
  Indonesia: [
    {
      name: "Beaches of Bali",
      description:
        "Arguably Indonesia's most popular vacation spot, Bali has a number of cultural landmarks and traditions that make a visit here worthwhile. But, for many people, Bali is about the island's beautiful beaches.",
      rating: "5/5",
      image: indonesia1
    },
    {
      name: "Borobudur",
      description:
        "This ancient temple is one of the most famous and culturally significant landmarks in Indonesia. Borobudur was built in the 8th century and constructed in the shape of a traditional Buddhist mandala.",
      rating: "4/5",
      image: indonesia2
    },
    {
      name: "Gili Islands",
      description:
        "The Gili Islands are a major draw in Lombok, which has risen in popularity among backpackers and tourists over the years. These picturesque islands offer beaches that rival those of Bali in their beauty, as well as opportunities for diving and even snorkeling at a turtle sanctuary.",
      rating: "4/5",
      image: indonesia3
    },
    {
      name: "Mount Bromo",
      description:
        "ndonesia sits on the Ring of Fire, an area with some of the most active volcanoes in the world. Many of the country's volcanoes, such as Mount Merapi, are famous for their violent eruptions and their stunning, but dangerous beauty.",
      rating: "3.5/5",
      image: indonesia4
    }
  ],
  Brazil: [
    {
      name: "Rio de Janeiro",
      description:
        "With arms outstretched 28 meters, as if to encompass all of humanity, the colossal Art Deco statue of Christ, called Cristo Redentor (Christ the Redeemer), gazes out over Rio de Janeiro and the bay from the summit of Corcovado.",
      rating: "5/5",
      image: brazil1
    },
    {
      name: "Iguaçu Falls",
      description:
        "At the point where Brazil, Paraguay, and Argentina meet, the Iguaçu river drops spectacularly in a semicircle of 247 waterfalls that thunder down into the gorge below. Just above the falls, the river is constricted to one-fourth of its usual width, making the force of the water even stronger.",
      rating: "4.5/5",
      image: brazil2
    },
    {
      name: "Copacabana",
      description:
        "Downtown Rio's most fashionable and famous section follows Avenida Nossa Senhora de Copacabana and is bordered all along one side by four kilometers of white sand and breaking surf. ",
      rating: "4/5",
      image: brazil3
    },
    {
      name: "Carnaval",
      description:
        "Few shows match Rio's pre-Lenten Carnaval (Carnival) extravaganza for color, sound, action, and exuberance. Make no mistake, this is not just another rowdy street party, but a carefully staged showpiece, where spectators can watch the parades of competing samba dancers from a purpose-built stadium designed by none other than Brazil's best-known architect, Oscar Niemeyer.",
      rating: "5/5",
      image: brazil4
    }
  ]
};

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState("Indonesia");
  function genreClickHandler(genre) {
    setSelectedGenre(genre);
  }
  return (
    <div className="App">
      <img
        className="logoImg"
        src="./nomad-trans.ico"
        alt="Didgital Nomad logo"
      />
      <h1 className="header" style={{ textDecoration: "underline" }}>
        NOMAD Traveller
      </h1>

      <div>
        {Object.keys(bestPlacesDB).map((genre) => (
          <button
            key={genre}
            className="genreBtn"
            onClick={() => {
              genreClickHandler(genre);
            }}
          >
            {genre}
          </button>
        ))}
      </div>

      <hr className="hr" />
      <div style={{ textAlign: "left" }}>
        <ul>
          {bestPlacesDB[selectedGenre].map((places) => (
            <li key={places.name}>
              {" "}
              <div style={{ fontSize: "2rem", textDecoration: "underline" }}>
                {places.name}
              </div>
              <div style={{ fontSize: "1.3rem", padding: "1rem 0rem" }}>
                Rating: {places.rating}{" "}
                <img
                  className="imgDiv"
                  src={places.image}
                  height={300}
                  width={300}
                  alt=""
                />
              </div>
              <div style={{ fontSize: "1.1rem", padding: "1rem 0rem" }}>
                {places.description}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
