import { useParams } from "react-router-dom";
import { ITEMS } from "../data/itemData";

function ItemDetails() {
  const { id } = useParams();
  console.log(id);
  const finalItem = ITEMS.find((result) => result.id === id);
  return (
    <>
      <main>
        <h1>ItemDetails</h1>
      </main>
      <h2>{finalItem.title}</h2>
      <h3>{finalItem.detail} </h3>
    </>
  );
}

export default ItemDetails;
