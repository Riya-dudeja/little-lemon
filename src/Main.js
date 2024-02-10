import main from"./icons_assets/main.jpg"

function Main(){
  return (
    <section className="main-container">
      <article className="main-info">
        <h1 className="title">Little Lemon</h1>
        <h3>Chicago</h3>
        <p className="about-us">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
        <button> Reserve a table </button>
      </article>
      <aside>
        <img src= {main} className="main-img" alt="Main Image"/>
      </aside>
    </section>
  );
}
export default Main;