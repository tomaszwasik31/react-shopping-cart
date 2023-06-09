import data from "../../data.json";
import Category from "../Category";

export default function Merchandise() {
  return (
    <Category
      data={data.categories.find(
        (category) => category.name === "Coffee Merchandise"
      )}
    />
  );
}
