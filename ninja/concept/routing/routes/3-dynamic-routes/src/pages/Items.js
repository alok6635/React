import { Link } from "react-router-dom";

function Items() {
  return (
    <>
      <ul className="itemDetails">
        <Link to="/items/item-1"><li>Item-1</li></Link>
        <Link to="/items/item-2"><li>Item-2</li></Link>
        <Link to="/items/item-3"><li>Item-3</li></Link>
        <Link to="/items/item-4"><li>Item-4</li></Link>
      </ul>
    </>
  );
}

export default Items;
