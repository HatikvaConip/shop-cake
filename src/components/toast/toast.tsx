
/* 
import React from 'react';
import {FC} from 'react';
import cn from "../../utils/cn";
import styles from "./toast.module.scss";

type TSeverity = "error" | "warning" | "info" | "success";

interface IToastProps {
  component?: any;
  severity?: TSeverity   
  classes?: {
    root?: string;
  }
};

const Toast: FC = ({ 
    component: Component = "div",
    severity = "info",
    classes = {},
    ...rest
}: IToastProps) => {
  return (
    <Component {...rest} className={styles.root}>
      <div className={cn(styles.rootContainer, classes.root) }>ciao</div>
    </Component>
  );
};

export default Toast;
 */