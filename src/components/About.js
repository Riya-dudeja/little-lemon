import brothers from  "./icons_assets/mario-adrian.jpg";
import chefs from  "./icons_assets/adrian-mario.jpg";

function About(){
  return (
    <article className="about-us">
      <div className="about-container">
        <section className="about-wrap">
          <section className="about-text">
            <h1 className="title">Little Lemon</h1>
            <h3>Chicago</h3>
            <p className="about">We are a family owned restaurant by two Italian brothers, Mario and Adrian, focused on serving traditional recipes with a modern twist. Join us at Little Lemon and indulge in a memorable dining experience where Mediterranean flavors take center stage.</p>
            <p className="about">
            To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
            </p>
          </section>
           <section className="img-wrap">
              <img src={chefs} alt="brothers cooking something in the kitchen" />
              <img src={brothers} alt="Owner brothers laughing in kitchen" />
            </section>
        </section>
      </div>
    </article>
  )
}
export default About;