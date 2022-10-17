const getFontSize = (size) => {
    switch (size) {
      case "XS": {
        return "0,8rem";
        break;
      }
      case "S": {
        return "0.9rem";
        break;
      }
      case "M": {
        return "1.1rem";
        break;
      }
      case "L": {
        return "1.3rem";
        break;
      }
      case "XL": {
        return "1.6rem";
        break;
      }
    }
};

export {getFontSize};