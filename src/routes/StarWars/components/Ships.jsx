import React from "react";

export const Ship01Text =
  "X-wing First Appearance: A New Hope Since the starship battles in A New Hope were modeled after real-world dogfights, X-wings fit the  role of the quick, darting fighter planes that fought in them. Their maneuverability and the split wings that match the X in their name make them one of the coolest starship designs in Star Wars, utilized by the heroes of both the Original Trilogy and The Force Awakens. Poe Dameron’s black-and-orange T-70 is the evolution of the classic T-65, with the same sharp ferocity. The X-wing is the ship of heroes, and it looks the part.";
export const Ship01Img ="https://www.denofgeek.com/wp-content/uploads/2019/12/x-wing.jpg?w=1024";

export const Ship02Text =
  "Corellian Engineering Corp. YT-1200 Transport (Modified) Millennium Falcon - The classy tramp freighter that was a prominent character in all the Star Wars movies (so far). This ship is heavily modified from the 'stock' version - including uprated weapons, shields liberated from the Imperials, and a class 5 hyperdrive that makes it almost twice as fast as Imperial warships.  The Falcon has been the subject of a number of kits, collectibles and toys - in a wide variety of scales. The most popular (or at least most widely available) models were a (roughly) 1/72 kit produced by MPC (later AMT/ERTL) in both cut-away and non-cutaway variants, and by Fine Molds in both 1/72 and 1/144 scales";
export const Ship02Img ="https://www.denofgeek.com/wp-content/uploads/2016/01/millennium-falcon.jpg";
  
export const Ship03Text =
  "Zonama Sekotan Shuttle.  First Appearance: The New Jedi Order series. Speaking of living ships, some of the fastest ships in the galaxy came from a living planet. The New Jedi Order series was full of all kinds of biological weirdness, starting with the Yuuzhan Vong’s bioengineered technology. The living planet Zonama Sekot is like an inverse reflection of these villains, and so it has its own living weapons—ones that can be sculpted into ships that create a psychic connection to their pilots. Obi-Wan and Anakin got to know Zonama Sekot during the Prequel era as well, before the planet disappeared for decades, taking its technology with it.";
export const Ship03Img ="https://www.denofgeek.com/wp-content/uploads/2020/06/star-wars-outrider.jpg?fit=1024%2C552&resize=1024%2C552";
  
export const Ship04Text =
  "Star Wars Correllian Scout Ship by jonnygray on DeviantArt DeviantArt is the world's largest online social community for artists and art enthusiasts, allowing people to connect through the creation and sharing of art.";
export const Ship04Img ="https://i.pinimg.com/originals/11/88/db/1188db42dbd335db38b1110ce70ca8e0.jpg";

export const Ship = (Ship, ShipText, ShipImg) => {
  return (
    <div>
      {/* <div className="col-md-5 d-flex align-self-stretch ftco-animate"> */}
      <div className="services">
        <div className="p-4">
          <div className="media-body">
            <h3 id={Ship} className="heading mb-3">
              {Ship}
            </h3>
            <p>{ShipText}</p>
          </div>
        </div>
        <div
          className="img"
          style={{
            backgroundImage: `url(${ShipImg})`,
            backgroundSize: "cover",
            height: 400,
          }}
        >
          <a
            href="index.html#"
            className="btn-custom d-flex align-items-center justify-content-center"
          >
            <span className="fa fa-chevron-right" />
          </a>
        </div>
      </div>
    </div>
    // </div>
  );
};
