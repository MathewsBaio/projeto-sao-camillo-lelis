import Btn from "./components/base/btn";
import InfoDoacoes from "./components/doacoes/InfoDoacoes";
import NossasHistorias from "./components/historias/NossasHistorias";
import Menu from "./components/menu/Menu";
import SobreNos from "./components/SobreNos/SobreNos";
import NossosValores from "./components/valores/NossosValores";
import "./styles/styles.css";

export default function App() {
  const handleNav = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Menu />
      <InfoDoacoes />
      <SobreNos />
      <NossosValores />
      <NossasHistorias />
      <div className="side-menu">
        <Btn action={handleNav} alt="teste" logo="/icons/arrow.png" />
        <Btn
          action={() => {
            console.log("teste");
          }}
          alt="teste"
          logo="/icons/WhatsApp.webp"
        />
      </div>
    </div>
  );
}
