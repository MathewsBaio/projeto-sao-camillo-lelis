export default function InfoDoacoes() {
  return (
    <div className="container-doacoes" id="doar">
      <div className="container-doacoes-info">
        <h1 className="container-doacoes-titulo">
          Ajude a transformar vidas com a sua doação!
        </h1>
        <p className="container-doacoes-texto">
          Acesse o App da sua instituição financeira e faça a leitura do QR Code
          ao lado e participe dessa causa solidária. Você também pode realizar
          depósitos, pix ou transferência para a conta abaixo:
        </p>
        <p className="container-doacoes-texto">
          Banco do Brasil - Agência: 2995-5
        </p>
        <p className="container-doacoes-texto">Conta Corrente: 177.181-7</p>
        <p className="container-doacoes-texto">CNPJ: 17.143.512/0001-00</p>
      </div>

      <img src="/img/pix.png" />
    </div>
  );
}
