import "./style.css";
import logoImg from "../../assets/img/undraw_handcrafts_user.svg";

export const LogoEliLab = () => {
  return (
    <div className="boxLogo">
      <p className="texLogo">EliLab</p>
      <img src={logoImg} alt="" className="imgLogo" />
    </div>
  );
};
