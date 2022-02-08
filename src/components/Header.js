import Restaurantintro from "./Restaurantintro";
import Topbar from "./Topbar";

const Header = ({
  logo,
  restaurantname,
  restaurantdescription,
  restaurantpicture,
}) => {
  return (
    <header>
      <Topbar logo={logo} />

      <Restaurantintro
        restaurantname={restaurantname}
        restaurantdescription={restaurantdescription}
        restaurantpicture={restaurantpicture}
      />
    </header>
  );
};

export default Header;
