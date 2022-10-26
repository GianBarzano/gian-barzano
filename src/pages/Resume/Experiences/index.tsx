import styles from "./index.module.scss";
import classNames from "classnames";
import Section from "components/Section";
import SectionItem from "components/Section/Item";

interface IProps {
  className?: string;
}

export default function Experiences({ className = "" }: IProps) {
  return (
    <Section
      title="Experiência"
      className={classNames({
        [styles.Experiences]: true,
        [className]: true,
      })}
    >
      <SectionItem title="Grupo Gera - atual" className={styles.experience}>
        <p>
          Desenvolvedor Web FullStack
          <span className={styles.experience__duration}> - 11 meses</span>
        </p>
      </SectionItem>
      <SectionItem title="Nasajon Sistemas">
        <p>
          Desenvolvedor Web FullStack com PHP, PostgreSQL e Angular
          <span className={styles.experience__duration}>
            {" "}
            - 3 anos e 3 meses
          </span>
        </p>
      </SectionItem>
      <SectionItem title="Neosyx Desenvolvimento">
        <p>
          Desenvolvedor Delphi com SQL Server
          <span className={styles.experience__duration}> - 1 ano</span>
        </p>
      </SectionItem>
      <SectionItem title="ASC Solutions">
        <p>
          Desenvolvedor Delphi com MySQL e SQL Server
          <span className={styles.experience__duration}>
            {" "}
            - 2 anos e 8 meses
          </span>
        </p>
      </SectionItem>
    </Section>
  );
}
