import main from "./icons_assets/main.jpg"

function Main(){
  return (
    <main>
      <section className="main-container">
      <article className="main">
        <h1 className="title">Little Lemon</h1>
        <h3>Chicago</h3>
        <p className="main-info">We are a charming neighborhood bistro that serves good food and classic drinks in a lively but casual environment. The restaurant features a locally sourced menu with daily specials.</p>
        <button>Reserve a table</button>
      </article>
      <aside>
        <img src= {main} className="main-img" alt="Chef holding a serving of our famous sliders"/>
      </aside>
    </section>
    </main>
  );
}
export default Main;