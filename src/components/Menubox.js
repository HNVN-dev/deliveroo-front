const Menubox = ({ datacategories }) => {
  return (
    <>
      {datacategories.map((category, index) => {
        return category.meals.map((meal, index) => {
          return (
            <div className="box-item-left">
              <h4>{meal.title}</h4>
              <p>{meal.description}</p>
              <div className="menu-box-details">
                <span className="price">{meal.price} €</span>
                <span className="special-tag"></span>
              </div>
              <div className="box-item-right">
                <img src={meal.picture} />
              </div>
            </div>
          );
        });
      })}
    </>
  );
};

export default Menubox;
