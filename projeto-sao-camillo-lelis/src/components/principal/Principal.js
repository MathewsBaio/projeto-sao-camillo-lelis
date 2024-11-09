import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Principal() {
  const [size, setSize] = useState(100);
  const { ref, inView } = useInView({
    threshold: 0.1, // Zoom começa quando 10% do componente é visível
  });

  useEffect(() => {
    if (inView) {
      const handleScroll = () => {
        const newSize = 100 + window.scrollY * 0.05; // Ajuste a velocidade do zoom conforme necessário
        setSize(newSize);
      };

      // Adiciona o evento de rolagem enquanto o componente está visível
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll); // Limpeza
      };
    } else {
      setSize(100); // Reseta o zoom ao sair da visualização
    }
  }, [inView]);
  return (
    <div
      ref={ref}
      className="principal-container"
      style={{ backgroundSize: `${size}vw ${size}vh` }}
    >
      {/* <img src="/img/fototodos4.jpg" alt="Foto de todos 2024" /> */}
    </div>
  );
}
