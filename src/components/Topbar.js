const Topbar = ({ logo }) => {
  return (
    <div className="top-bar">
      <div className="big-wrapper">
        <img src={logo} alt="The Deliveroo's logo" />
      </div>
    </div>
  );
};

export default Topbar;
