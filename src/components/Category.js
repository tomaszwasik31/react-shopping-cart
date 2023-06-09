import Products from "./Products";

export default function Category(props) {
  return (
    <>
      <div className="shop-top-container">
        <h2 className="category-name">{props.data.name}</h2>
        <div className="shop-category-desc">
          <p>{props.data.desc}</p>
        </div>
      </div>
      <Products items={props.data.items} />
    </>
  );
}
