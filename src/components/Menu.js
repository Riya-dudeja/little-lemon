import logo from "./icons_assets/logo.png";
import items, {desserts, drinks} from "./items.js"
const Menu = () => {
  return (
    <article className="menu">
        <img src={logo} id="logo" alt="Restaurant's logo"/>
        <h1 >Our Menu</h1>
        <article className="menu-items">
          <section className="menu-section">
            {
                items.map(item => (
                  <section key={item.id} className="menu-item">
                      <h2>{item.title} {item.id % 2 === 0 && <span>NEW</span>}</h2>
                      <p>{item.ingredients}</p>
                  </section>
                )
            )}
          </section>
          <section className="menu-section">
            {
                desserts.map(dessert => (
                  <section key={dessert.id} className="menu-item">
                      <h2>{dessert.title} {dessert.id % 2 === 0 && <span>NEW</span>}</h2>
                      <p>{dessert.ingredients}</p>
                  </section>
                )
            )}
          </section>
          <section className="menu-section">
            {
                drinks.map(drink => (
                  <section key={drink.id} className="menu-item">
                      <h2>{drink.title} {drink.id % 2 === 0 && <span>NEW</span>}</h2>
                      <p>{drink.ingredients}</p>
                  </section>
                )
            )}
          </section>
        </article>
        <p id="copy" style={{textAlign: "center"}}> &copy; Copyright Little lemon</p>
    </article>
  )
}
export default Menu;