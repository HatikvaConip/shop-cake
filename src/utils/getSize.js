const getSize = (size = "") => {
      switch (size?.toUpperCase()) {
        case "S":
          return "small";
        case "M":
          return "medium";
        case "L":
          return "large";
        default:
          return "";
      }
  };

  export default getSize;