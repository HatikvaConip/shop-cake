
 const getMargin = (margin)=> {
    switch (margin.length) {
      case 1: {
        return `${margin[0]}px`;
        break;
      }
      case 2: {
        return `${margin[0]}px ${margin[1]}px`;
        break;
      }
      case 3: {
        return `${margin[0]}px ${margin[1]}px ${margin[2]}px` ;
        break;
      }
      case 4: {
        return `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`;
      }
      // eslint-disable-next-line no-unused-expressions
      default: "unset";
    }
};

export {getMargin};