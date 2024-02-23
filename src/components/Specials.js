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
                <img src={recipe.image} alt={recipe.alt} />
                <section className="specials-content">
                  <section className="specials-heading">
                    <h3>{recipe.title}</h3>
                    <h4 style={{
                      fontWeight: "bold"
                    }}>${recipe.price}</h4>
                    </section>
                    <p>{recipe.description}</p>
                    <button>Order now</button>
                </section>
              </section>
          )}
        </article>
      </article>
  );
}