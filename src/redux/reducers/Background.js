const background = (state = "Home", action) => {
  switch (action.type) {
    case "home":
      return (state = "Home");
    case "destination":
      return (state = "Destination");
    case "crew":
      return (state = "Crew");
    case "technology":
      return (state = "Technology");
    default:
      return state;
  }
};

export default background;
