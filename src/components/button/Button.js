import "./Button.scss";
 const Button =({
    label = "Cliccami",
    size = "S",
    bgColor,
    handleClick,

 })=>{
    const buttonSize= size === "S" ? "small" : size === "M" ? "medium": "large";
    
    return(
        <div>
              <div 
              style={{backgroundColor:bgColor }} 
              className={`base ${buttonSize}`} 
              onClick={handleClick}>{label}</div>
        </div>
    )
 }
 export default Button;