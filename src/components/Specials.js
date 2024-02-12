import recipes from "./recipes";
export function Specials(){
  return (
      <article className="specials-container">
        <section className="specials-header">
          <h2>This weeks specials!</h2>
          <button>Online Menu</button>
        </section>
        <article className="cards">
          {
            recipes.map(recipe =>
              <section key={recipe.id} className="special-items">
                <img src={recipe.image} />
                <section className="specials-content">
                  <section className="specials-heading">
                    <h5>{recipe.title}</h5>
                    <p>{recipe.price}</p>
                  </section>
                </section>
                <p>{recipe.description}</p>
                <button>Order now</button>
              </section>
          )}
        </article>
      </article>
  );
}