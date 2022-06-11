import React from "react";

function Categories({ items, onClickItem }) {
  const [activeItem, setActiveItem] = React.useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index)
  }

  return (
    <div className="categories">
      <ul>
        {items.map((name, index) => (
          <li
            onClick={() => onSelectItem(index)}
            className={activeItem === index? 'active' : ''}
            key={`${name}_${index}`}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories;