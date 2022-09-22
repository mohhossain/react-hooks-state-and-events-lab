import {React, useState} from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false)

  const handleClick = () => {
    console.log(isInCart, 'before update')
    setIsInCart(!isInCart)
  }
  console.log(isInCart, 'after update')

  return (

    <div>
      <li className={isInCart? "in-cart" : ""}>
        <span>{name}</span>
        <span className="category">{category}</span>
        <button onClick={handleClick} className="add">{!isInCart? "Add to Cart" : "Remove from cart"}</button>
      </li>
    </div>
    
  );
}

export default Item;
