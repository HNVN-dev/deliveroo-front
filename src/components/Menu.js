const Menu = ({ datacategories }) => {
  return (
    <div className="left-menu-container">
      {datacategories.map((category, index) => {
        return (
          category.name &&
          category.meals.length > 0 && (
            <div className="big-wrapper">
              <h3>{category.name}</h3>
              <div className="menu-card-container">
                {category.meals.map((meal, index) => {
                  return (
                    <div className="menu-card">
                      <div className="menu-item-left">
                        <h4>{meal.title}</h4>
                        {meal.description && <p>{meal.description}</p>}
                        <div className="menu-box-details">
                          <span className="price">{meal.price} €</span>
                          {meal.popular && <span>* Populaire</span>}
                        </div>
                      </div>
                      {meal.picture && (
                        <div className="menu-item-right">
                          <img src={meal.picture} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};
export default Menu;
