import main from "./icons_assets/main.jpg"

function Main(){
  return (
    <section className="main-container">
      <article className="main">
        <h1 className="title">Little Lemon</h1>
        <h3>Chicago</h3>
        <p className="main-info">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. Join us at little lemon anytime to have a good time.</p>
        <button>Reserve a table</button>
      </article>
      <aside>
        <img src= {main} className="main-img" alt="Chef holding a serving of our famous sliders"/>
      </aside>
    </section>
  );
}
export default Main;