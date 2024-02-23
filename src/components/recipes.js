import greeksalad from  "./icons_assets/greeksalad.jpg"
import bruchetta from  "./icons_assets/bruchetta.svg"
import lemonDessert from  "./icons_assets/lemon-dessert.jpg"

const recipes = [
  {
    id: 1,
    title: "Greek salad",
    price: 12.99,
    image: greeksalad,
    alt: "greek-salad",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons",
  },
  {
    id: 2,
    title: "Bruchetta",
    price: 5.99,
    image: bruchetta,
    alt: "bruchetta",
    description:
      "Our Bruchetta is made from grilled bread that has been smeared with garlic, some garnished cherry tomatoes seasoned with salt and olive oil.",
  },
  {
    id: 3,
    title: "Lemon Dessert",
    price: 4.78,
    image: lemonDessert,
    alt: "lemon-dessert",
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },

];

export default recipes;