import main from "./icons_assets/main.jpg";
import {NavLink} from "react-router-dom";

function Main(){
  return (
    <main>
      <section className="main-container">
      <article className="main">
        <h1 className="title">Little Lemon</h1>
        <h3>Chicago</h3>
        <p className="main-info">We are a charming neighborhood bistro that serves good food and classic drinks in a lively but casual environment. The restaurant features a locally sourced menu with daily specials.</p>
        <NavLink to="booking">
          <button aria-label="On Click">Reserve a table</button>
        </NavLink>
      </article>
      <aside>
        <img src= {main} className="main-img" alt="Chef holding a serving of our famous sliders"/>
      </aside>
    </section>
    </main>
  );
}
export default Main;