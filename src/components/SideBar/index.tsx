import classNames from "classnames";
import Section from "components/Section";
import styles from "./index.module.scss";
import { FaLinkedinIn, FaWhatsapp, FaEnvelope } from "react-icons/fa";

interface IProps {
  className?: string;
}

export default function SideBar({ className = "" }: IProps) {
  return (
    <aside
      className={classNames({
        [styles.SideBar]: true,
        [className]: true,
      })}
    >
      <div className={styles.Container}>
        <Section
          title="Contato"
          className={classNames({
            [styles.contacts]: true,
          })}
        >
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/gian-barzano-1815a549"
                target="_blank"
              >
                <FaLinkedinIn size={20} />
                <h3>Linkedin</h3>
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/5521979343180?text=Gostaria%20de%20agendar%20uma%20conversa"
                target="_blank"
              >
                <FaWhatsapp size={20} />
                <h3>Celular</h3>
              </a>
            </li>
            <li>
              <a href="mailto:gianbarzano@gmail.com?subject=Proposta de trabalho&body=Olá, Gian! Gostaria de conversar sobre uma proposta de trabalho, qual o melhor horário para entrar em contato?">
							<FaEnvelope size={20} />
                <h3>E-mail</h3>
              </a>
            </li>
          </ul>
        </Section>
        <Section
          title="Principais Habilidades"
          className={classNames({
            [styles.skills]: true,
          })}
        >
          <ul>
            <li>
              <h3>Layouts responsivos com HTML 5 e CSS 3</h3>
            </li>
            <li>
              <h3>Front-end dinâmico com Angular, React e Typescript</h3>
            </li>
            <li>
              <h3>Back-end APIs com NodeJS e PHP Symfony</h3>
            </li>
            <li>
              <h3>Banco de dados PostgreSQL, MySQL, SQL Server e MongoDB</h3>
            </li>
            <li>
              <h3>Trabalho em equipe e proatividade</h3>
            </li>
          </ul>
        </Section>
        <Section
          title="Idiomas"
          className={classNames({
            [styles.languages]: true,
          })}
        >
          <ul>
            <li>
              <h3>Português</h3>
            </li>
            <li>
              <h3>Inglês intermediário</h3>
            </li>
          </ul>
        </Section>
      </div>
    </aside>
  );
}
