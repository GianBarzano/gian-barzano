import styles from "./index.module.scss";
import classNames from "classnames";

interface IProps {
  children: React.ReactNode;
  title: string;
  className?: string;
}

export default function Section({ children, title, className = "" }: IProps) {
  return (
    <section
      className={classNames({
        [styles.Section]: true,
        [className]: true,
      })}
    >
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  );
}
