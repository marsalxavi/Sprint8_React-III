import React from "react";

const JumboWelcome = () => {
  return (
    <div>
      <span className="subheading">Benvinguts a MON TRAVEL</span>
      <h1 className="mb-4">
        Experiencies
        <br />
        arreu del Mon !!!
      </h1>
      <p className="mb-4">Descobreis el mon amb nosaltres</p>
    </div>
  );
};

export const BodySection1 = () => {
  return (
    <div>
      <section className="hero-wrap js-fullheight">
        <div className="overlay" />
        <div className="overlay-2" />
        <div className="container">
          <div
            className="row no-gutters slider-text js-fullheight align-items-center justify-content-center"
            data-scrollax-parent="true"
          >
            <div className="col-md-8 text-center ftco-animate">
              <div className="mb-5">
                <JumboWelcome />

                {/* <ButonsLoginRegister /> */}
              </div>
            </div>
          </div>
        </div>

        <div className="home-slider owl-carousel js-fullheight">
          <div
            className="slider-item js-fullheight"
            style={{
              backgroundImage:
                "url(https://fluoptics.com/wp-content/uploads/2018/08/Ship01-Fluoptics.jpg)",
            }}
            data-stellar-background-ratio="0.5"
          ></div>
          <div
            className="slider-item js-fullheight"
            style={{
              backgroundImage:
                "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.flightexpert.com%2Fblog%2Fwp-content%2Fuploads%2F2018%2F02%2FInteresting-facts-about-New-York.jpg&f=1&nofb=1)",
            }}
            data-stellar-background-ratio="0.5"
          ></div>
          <div
            className="slider-item js-fullheight"
            style={{
              backgroundImage:
                "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.princess.com%2Fimages%2Fglobal%2Flearn%2Fcruise-destinations%2Fports-shared%2Fsan-francisco-california%2Fsan_francisco_header_large_1600.jpg&f=1&nofb=1)",
            }}
            data-stellar-background-ratio="0.5"
          ></div>
          <div
            className="slider-item js-fullheight"
            style={{
              backgroundImage:
                "url(https://images.ctfassets.net/bth3mlrehms2/2cCxpmVnFuv9cwMkr2NsqO/0f41647ab438ea7efa23b0d260123a50/Japan_Tokio_Skyline_und_Mt._Fuji.jpg?w=1600&q=50)",
            }}
            data-stellar-background-ratio="0.5"
          ></div>
        </div>
      </section>
    </div>
  );
};
