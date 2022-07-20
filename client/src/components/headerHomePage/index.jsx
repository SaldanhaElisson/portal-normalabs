import "./styles.css";
import { LogoEliLab } from "../logo";
import { NavHomePage } from "../navMenu";

export const HeaderHomePage = () => {
  return (
    <div className={"headerHome"}>
      <div className="contentLog">
        <LogoEliLab />
      </div>
      <div className="contentNav">
        <h2 className="bemVindo"> Seja bem vindo, ELISSON MONTEIRO SALDANHA</h2>
        <NavHomePage />
        <div className="lineBlue"></div>
      </div>
    </div>
  );
};
