const Restaurantintro = ({
  restaurantname,
  restaurantdescription,
  restaurantpicture,
}) => {
  return (
    <div className="restaurant-intro-container">
      <div className="restaurant-intro-left">
        <h2>{restaurantname}</h2>
        <p>{restaurantdescription}</p>
      </div>
      <div className="restaurant-intro-right">
        <img src={restaurantpicture} alt={restaurantname} />
      </div>
    </div>
  );
};

export default Restaurantintro;
