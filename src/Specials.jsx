import bruchetta from "./icons_assets/bruchetta.svg"

export function Specials(){
  return (
    <>
      <article className="specials">
        {/* <h2>This weeks specials!</h2> */}
        {/* <button>Online Menu</button> */}
        <section className="card">
          <img src={bruchetta} className="sec-img" />
        </section>
        <section className="card">
          <img src={bruchetta} className="sec-img"/>
        </section>
        <section className="card">
          <img src={bruchetta} className="sec-img"/>
        </section>
      </article>
    </>
  );
}