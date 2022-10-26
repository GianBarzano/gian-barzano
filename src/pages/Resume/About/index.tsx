import styles from "./index.module.scss";
import classNames from "classnames";
import Section from "components/Section";
import SectionItem from "components/Section/Item";

interface IProps {
  className?: string;
}

export default function About({ className = "" }: IProps) {
  return (
    <Section
      title="Sobre"
      className={classNames({
        [styles.About]: true,
        [className]: true,
      })}
    >
      <SectionItem>
        <p>
          Me chamo Gian Barzano e atuo na análise e desenvolvimento de sistemas,
          nas camadas de Front-end e Back-end desde 2015.
        </p>
        <p>
          Tenho paixão pela minha área, e aproveito qualquer chance de me
          especializar e encarar novos desafios.
        </p>
        <p>Trabalho no modelo de prestação de serviços.</p>
      </SectionItem>
    </Section>
  );
}
