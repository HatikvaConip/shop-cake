const getBorderRadius= (borderRadius)=>{
    switch(borderRadius.length){
        case 1: {
            return `${borderRadius[0]}px`;
            break;
        }
        case 2: {
            return `${borderRadius[0]}px ${borderRadius[1]}px`;
            break;
        }
        case 3:{
            return  `${borderRadius[0]}px ${borderRadius[1]}px ${borderRadius[2]}px`;
            break;
        }
        case 4:{
            return `${borderRadius[0]}px ${borderRadius[1]}px ${borderRadius[2]}px ${borderRadius[3]}px`;
        }
        // eslint-disable-next-line no-unused-expressions
      default: "unset";
    }
    
}
export {getBorderRadius};