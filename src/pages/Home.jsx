import React from "react";
import { Categories, SortPopup, PizzaBlock } from '../components';

import pizzas from '../assets/pizzas.json'

function Home() {
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
        {pizzas.map((obj) => (
          <PizzaBlock {... obj} key={obj.id} />
        ))}
      </div>
    </div>
  )
}

export default Home;