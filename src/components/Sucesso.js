import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Sucesso({
  form,
  setForm,
  seat,
  setSeat,
  nameAssento,
  setNameAssento,
}) {
  function zerar() {
    setForm({ ids: "", name: "", cpf: "" });
    setNameAssento([]);
    setSeat([]);
  }

  return (
    <SucessPage>
      <SpanSucesso>Pedido feito com sucesso!</SpanSucesso>
      <Ingresso>
        <Filme>
          <Categoria>Filme e sessão</Categoria>
          <Paragrafo>{seat.movie.title}</Paragrafo>
          <Paragrafo>
            {seat.day.date} - {seat.name}
          </Paragrafo>
        </Filme>
        <Lugares>
          <Categoria>Ingressos</Categoria>
          {nameAssento.map((assento) => (
            <Paragrafo>Assento {assento}</Paragrafo>
          ))}
        </Lugares>
        <Info>
          <Categoria>Comprador</Categoria>
          <Paragrafo>Nome: {form.name} </Paragrafo>
          <Paragrafo>Cpf: {form.cpf}</Paragrafo>
        </Info>
      </Ingresso>
      <DivVoltar>
        <Link to="/">
          <Voltar onClick={zerar}>Voltar pra Home</Voltar>
        </Link>
      </DivVoltar>
    </SucessPage>
  );
}

const SucessPage = styled.div`
  background-color: #ffffff;
`;

const SpanSucesso = styled.span`
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: #247a6b;
`;

const Ingresso = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Filme = styled.div`
  width: 100%;
  height: 110px;
  margin-bottom: 10px;
`;
const Lugares = styled.div`
  width: 100%;
  height: 110px;
  margin-bottom: 40px;
`;
const Info = styled.div`
  width: 100%;
  height: 110px;
  margin-bottom: 10px;
`;
const DivVoltar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 62px;
`;
const Voltar = styled.button`
  width: 225px;
  height: 42px;
  background-color: #e8833a;
  color: #ffffff;
  border-radius: 3px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 18px;
`;

const Categoria = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 10px;
  color: #293845;
`;
const Paragrafo = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 22px;
  color: #293845;
  margin-bottom: 5px;
`;
