import cn from "../../utils/cn";
import low from "../../utils/low";
import styles from "./toastDue.module.scss";

const ToastDue = ({
  icon,
  title,
  subTitle,
  strong,
  button,
  variant = "", // filled | outline
  type = "", // error | warning | info | success
  classes = {
    toastDue: "",
    subTitle: "",
    title: "",
    strong: "",
    button: "",
  },
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={cn(
        styles["container-toast-due"],
        styles[low(type, "type")],
        variant && styles[low(variant, "variant")],

        classes?.toastDue
      )}
    >
      <div className={styles["icon-container"]}>
        {icon && <span className={cn(classes.icon)}>{icon}</span>}
      </div>

      <div className={styles["text-container"]}>
        {title && <strong className={cn(classes.title)}>{title}</strong>}
        <div>
          {subTitle && (
            <span className={cn(styles["container-sub-title"])}>
              {subTitle}
              {strong && (
                <span
                  className={cn(styles["strong"],classes.strong, title && styles["text-strong"])}
                >
                  {strong}
                </span>
              )}
            </span>
          )}
        </div>
      </div>
      <div className={styles["button-container"]}>
        {button && <span className={cn(classes.button)}>{button}</span>}
      </div>
    </div>
  );
};
export default ToastDue;
