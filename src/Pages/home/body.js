import { styled } from "styled-components";

export default function BodyPage() {
  return (
    <>
      <ContainerBody>
        <StyledRectangular>
          <StyleInformation>
            <div className="divname">
              <p className="name">nome </p>
              <p className="surname">sobrenome</p>
            </div>
            <div className="div-cpf">
              <p className="title">cpf </p>
              <p className="number">000.000.000-00</p>
            </div>
            <div className="donation-status">
              <p className="status">disponibilidade </p>
              <p className="data">00/00/00</p>
            </div>
          </StyleInformation>
        </StyledRectangular>
      </ContainerBody>
    </>
  );
}

const ContainerBody = styled.div`
  padding: 32px 16px;
`;
const StyledRectangular = styled.div`
  border-radius: 3px;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
  background: #fffcff;
`;
const StyleInformation = styled.div`
  padding: 32px 16px;
  display: flex;
  justify-content: space-between;
  p:first-child {
    font-weight: bold;
    margin-bottom: 6px;
  }
`;
