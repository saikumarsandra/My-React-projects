import { useState } from "react";

export default function ListGroup() {
  const items = ["first", "second", "third", "fourth", "fifth"];

 const [selectedItem,setSelectedItemIndex] = useState(-1);
 
return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>no numbers</p>}
      <ul className="list-group">
        {items.map((item,index) => (
          <li
            className={selectedItem === index?"list-group-item active":"list-group-item"}
            key={item}
            onClick={() => {setSelectedItemIndex(index)}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

