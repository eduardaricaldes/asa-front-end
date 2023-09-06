import styled from "styled-components";
import lupa from "../../assets/lupa.svg";

export default function SeachBarHome() {
  return (
    <>
      <ContainerSeach>
        <SeachBar>
          <div className="divseachbar">
            <input type="text" name="q" placeholder="Pesquisar..." />
            <img className="lupa" src={lupa} alt="seach" />
          </div>
        </SeachBar>
      </ContainerSeach>
    </>
  );
}

const ContainerSeach = styled.div`
  background-color: #fff;
  padding: 32px 16px;
`;

const SeachBar = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid #a9a9a9;
  padding: 10px;
  position: relative; /* Adicione position: relative para posicionar elementos filhos absolutos */

  input {
    width: 100%;
    padding: 10px;
    border: none;
    outline: none;
    background-color: transparent;
  }

  input::placeholder {
    color: #999;
  }

  .lupa {
    width: 20px;
    cursor: pointer;
    position: absolute; /* Adicione position: absolute para posicionar a lupa sobre o input */
    right: 10px; /* Ajusta a posição da lupa à direita do input */
    top: 50%; /* Centraliza verticalmente a lupa */
    transform: translateY(-50%); /* Centraliza verticalmente a lupa */
  }
`;
