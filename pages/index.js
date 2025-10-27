import { useEffect } from "react";

function Home() {
  useEffect(() => {
    // remove margens e preenchimentos padrão do body
    document.body.style.margin = "0";
    document.body.style.padding = "0";
  }, []);

  return (
    <div
      style={{
        height: "100dvh", // ocupa a tela inteira
        display: "flex", // ativa o flexbox
        justifyContent: "center", // centraliza horizontalmente
        alignItems: "center", // centraliza verticalmente
      }}
    >
      <h1>Em construção</h1>
    </div>
  );
}

export default Home;
