import {React, useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState("All")
  const handleChange = (e) => {

    console.log(selectedCategory, 'before selecting')
    setSelectedCategory(e.target.value)
  }
  const filteredItem = items.filter(item =>{ 
    if(selectedCategory === "All") {
      return true
    } else {
      return item.category === selectedCategory
    }
  })
  console.log(filteredItem)
  console.log(selectedCategory, 'after selecting')

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItem.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
