import React from 'react';

import { Header, Categories, SortPopup, PizzaBlock } from './components';

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch('https://62a4571647e6e40063909617.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
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
      </div>
    </div>
  );
}

export default App;
