import classNames from "classnames";
import styles from "./index.module.scss";

interface IProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export default function Item({ children, title, className = "" }: IProps) {
  return (
    <article
      className={classNames({
        [styles.Item]: true,
        [className]: true,
      })}
    >
      {title != null ? <h3 className={styles.title}>{title}</h3> : null}
      {children}
    </article>
  );
}
