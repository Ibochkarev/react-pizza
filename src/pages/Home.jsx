import React from "react";
import { Categories, SortPopup, PizzaBlock } from '../components';

function Home() {
  const [items, setItems] = React.setState([])

  fetch('https://62a4571647e6e40063909617.mockapi.io/items')
    .then((res) => {
      return res.json();
    }).then((arr) => {
      setItems(arr);
    });

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={['Всё', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
        />
        <SortPopup
          items={['популярности', 'цене', 'алфавит']}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((obj) => (
          <PizzaBlock {... obj} key={obj.id} />
        ))}
      </div>
    </div>
  )
}

export default Home;