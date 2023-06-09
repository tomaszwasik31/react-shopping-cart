import data from "../../data.json";
import Category from "../Category";

export default function TeaSelection() {
  return (
    <Category
      data={data.categories.find(
        (category) => category.name === "Tea Selection"
      )}
    />
  );
}
