import Card from "./Card";

const cardsTop = [
  {
    titulo: "Apoio Comunitário",
    paragrafo: "aaaaa",
  },
  {
    titulo: "Acompanhamento Médico",
    paragrafo: "",
  },
  {
    titulo: "Um Lar",
    paragrafo: "",
  },
];
const cardsBot = [
  {
    titulo: "Bazar",
    paragrafo: "",
  },
  {
    titulo: "Oficina de Artesanato",
    paragrafo: "",
  },
];

export default function Cards() {
  return (
    <div className="cards" id="programas">
      <div className="cards-line">
        {cardsTop.map((c) => {
          return <Card titulo={c.titulo} paragrafo={c.paragrafo} />;
        })}
      </div>
      <div className="cards-line">
        {cardsBot.map((c) => {
          return <Card titulo={c.titulo} paragrafo={c.paragrafo} />;
        })}
      </div>
    </div>
  );
}
