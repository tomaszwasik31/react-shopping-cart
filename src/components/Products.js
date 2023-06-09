import coffeeMachine from "../img/coffeeMachine.webp";
import coffeeBag from "../img/coffeeBag.webp";
import coffeeAccessories from "../img/coffeeAccessories.webp";
import gift from "../img/gift.webp";
import merchandise from "../img/merchandise.webp";
import subscription from "../img/subscription.webp";
import tea from "../img/tea.webp";

export default function Products(props) {
  const data = props.items;

  if (!data || data.length === 0) {
    return null; // or render a loading indicator, error message, or fallback UI
  }

  const products = data.map((product) => (
    <div className="product-container" key={product.id} id={product.id}>
      <div className="small-product-img-container">
        <img src={getImagePath(product.img)} alt="" className="product-img" />
        <button className="btn btn-add">Add to basket</button>
      </div>
      <div className="product-desc">
        <p className="product-name">{product.name}</p>
        <p>Price: {product.price}</p>
      </div>
    </div>
  ));

  return (
    <div className="shop-bottom-container">
      <div className="all-products-container">{products}</div>
    </div>
  );
}

function getImagePath(img) {
  switch (img) {
    case "coffeeMachine":
      return coffeeMachine;
    case "coffeeBag":
      return coffeeBag;
    case "coffeeAccessories":
      return coffeeAccessories;
    case "gift":
      return gift;
    case "merchandise":
      return merchandise;
    case "subscription":
      return subscription;
    case "tea":
      return tea;
    default:
      return "";
  }
}
