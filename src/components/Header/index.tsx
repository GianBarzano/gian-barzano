import classNames from "classnames";
import styles from "./index.module.scss";
import { FaWhatsapp } from "react-icons/fa";

interface IProps {
  className?: string;
}

export default function Header({ className = "" }: IProps) {
  const onBtnContactClick = () => {
    const redirect =
      "https://wa.me/5521979343180?text=Gostaria%20de%20agendar%20uma%20conversa";
    window.open(redirect, "_blank");
  };

  return (
    <header
      className={classNames({
        [styles.Header]: true,
        [className]: true,
      })}
    >
      <section className={styles.info}>
        <div className={styles.info__titles}>
          <h1>Gian Barzano</h1>
          <h2>Desenvolvimento de sistemas</h2>
        </div>
      </section>
      <button
        className={classNames({
          [styles.btnContact]: true,
          [styles["btnContact--desktop"]]: true,
        })}
        onClick={onBtnContactClick}
      >
        <i className={styles.btnContact__icon}>
          <FaWhatsapp size={20} />
        </i>
        Entrar em contato
      </button>
      <button
        className={classNames({
          [styles.btnContact]: true,
          [styles["btnContact--mobile"]]: true,
        })}
        onClick={onBtnContactClick}
      >
        <i className={styles.btnContact__icon}>
          <FaWhatsapp size={20} />
        </i>
        Contato
      </button>
    </header>
  );
}
