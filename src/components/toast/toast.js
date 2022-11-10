

import cn from "../../utils/cn";
import styles from "./toast.module.scss";

const Toast = ({ 
    component: Component = "div",
    classes = {},
    ...rest
}) => {
  return (
    <Component {...rest} className={styles.root}>
      <div className={cn(styles.rootContainer, classes.root) }>ciao</div>
    </Component>
  );
};

export default Toast;
