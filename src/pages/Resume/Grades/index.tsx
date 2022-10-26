import styles from "./index.module.scss";
import classNames from "classnames";
import Section from "components/Section";
import SectionItem from "components/Section/Item";

interface IProps {
  className?: string;
}

export default function Grades({ className = "" }: IProps) {
  return (
    <Section
      title="Formação"
      className={classNames({
        [styles.Grades]: true,
        [className]: true,
      })}
    >
      <SectionItem title="Estácio" className={styles.grade}>
        <p>
          Curso Superior de Tecnologia (CST), ANÁLISE E DESENVOLVIMENTO DE
          SISTEMAS
          <span className={styles.grade__duration}> - 2022 a 2023</span>
        </p>
      </SectionItem>
      <SectionItem title="UEZO - Centro Universitário Estadual da Zona Oeste">
        <p>
          Curso Superior de Tecnologia (CST), ANÁLISE E DESENVOLVIMENTO DE
          SISTEMAS
          <span className={styles.grade__duration}> - 2014 a 2022</span>
        </p>
      </SectionItem>
      <SectionItem title="FAETEC - E.T.E. Santa Cruz">
        <p>
          Ensino médio/técnico, INFORMÁTICA
          <span className={styles.grade__duration}> - 2011 a 2013</span>
        </p>
      </SectionItem>
    </Section>
  );
}
