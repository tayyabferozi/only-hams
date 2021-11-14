const About = () => {
  return (
    <div id="about">
      {/* <div className="our-story-text">
        <div
          style={{ border: "1.4625px solid #FFFFFF", filter: "blur(0.4875px)" }}
        >
          Our Story
        </div>
        <div
          style={{ border: "2.925px solid #C882FF", filter: "blur(0.73125px)" }}
        >
          Our Story
        </div>
        <div
          style={{
            mixBlendMode: "hard-light",
            border: "4.75313px solid rgba(97, 0, 255, 0.2)",
            textShadow:
              "0px 7.3125px 9.50625px #8300C1, 0px 4.75313px 3.65625px rgba(14, 0, 21, 0.7)",
          }}
        >
          Our Story
        </div>
        <div
          style={{
            mixBlendMode: "hard-light",
            border: "6.21562px solid #CC00FF",
            filter: "blur(7.3125px)",
          }}
        >
          Our Story
        </div>
        <div
          style={{
            mixBlendMode: "hard-light",
            border: "4.75313px solid #CC00FF",
            filter: "blur(21.9375px)",
          }}
        >
          Our Story
        </div>
      </div> */}
      <img
        className="d-block mx-auto our-story"
        src="./assets/img/our-story.png"
        alt="our-story"
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <img
              className="left-img"
              src="./assets/img/about.svg"
              alt="about"
            />
          </div>
          <div className="col-md-6 right-text">
            <p>
              We welcome you to the flavoursome town of ‘
              <span className="text-purple">The Hamtons</span>”, set in the
              great metropolis of New Pork. Here is the home to a unique
              community of pigs, who love nothing more than standing out with
              their wacky dress sense and quirky personalities.
            </p>
            <p>
              It is the place to be seen and somewhere you are guaranteed to
              never get boared.
            </p>
            <p>
              Accommodation matches the unique style of each resident pig, from
              small houses to the super sky risers! There really is{" "}
              <span className="text-purple">something for everyone.</span>
            </p>
          </div>
          <div className="col-md-12">
            <div className="mtop"></div>
            <div className="right-img-container">
              <img src="./assets/img/about-right.png" alt="story-2" />
            </div>
            <div>
              <p className="mt-3 mb-0">
                <span className="text-orange">Our story</span> starts some years
                back, when the original Founder of New Pork, Mr JP Morham,
                revealed on his death bed, that instead of depositing his{" "}
                <span className="text-orange">crypto coins</span> into the
                City’s PYG Bank savings corporation,
              </p>
              <p>
                he’d cleverly hidden it in a secret location buried beneath the
                city of The Hamtons.
              </p>
              <p className="lefted">
                Sadly, before he had time to snort the location, he died,
                leaving behind the story of the missing fortune. This quickly
                became an old pig’s ‘tail’ passed down from generation to
                generation, with many trying, without luck to find the
                <span className="text-orange"> missing treasures.</span>
              </p>
              <p className="lefted">
                That is until one day, a pig cunning and ruthless and so
                desperate to get his trotters on the fortune, set about a
                dastardly plan to claim it, intent on becoming the most
                <span className="text-orange"> powerful pig</span> in New Pork
              </p>
            </div>
          </div>
          <div className="btns d-flex justify-content-center">
            <button>
              <img src="./assets/img/read-more.png" alt="see-more" />
            </button>
            <button>
              <img src="./assets/img/watch-video.png" alt="watch-video" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
