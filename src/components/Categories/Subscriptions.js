import data from "../../data.json";
import Category from "../Category";

export default function Subscriptions() {
  return (
    <Category
      data={data.categories.find(
        (category) => category.name === "Coffee Subscriptions"
      )}
    />
  );
}
