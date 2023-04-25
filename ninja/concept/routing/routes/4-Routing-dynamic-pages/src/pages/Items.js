import { Link } from "react-router-dom";
import { ITEMS } from "../data/itemData";
function Items() {
  return (
    <>
      <main>
        <h5>Items Page</h5>
      </main>
      <ul>
        {ITEMS.map((getItem) => (
          <Link to={`/items/${getItem.id}`}>
            <li>{getItem.id}</li>
          </Link>
        ))}
      </ul>
    </>
  );
}

export default Items;
