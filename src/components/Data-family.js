import styled from "styled-components";

export default function DataFamily() {
  return (
    <>
      <Container>
        <StyleListHelp>
          <div className="listhelp">
            <ul>
              <li className="familyhelp">
                <span class="title">Famílias ajudadas:</span>
                <span class="number">340 pessoas</span>
              </li>
              <li className="peoplehelp">
                <span class="title">Pessoas ajudadas:</span>
                <span class="number">340 pessoas</span>
              </li>
              <li className="validationhelp">
                <span class="title">Pessoas em reavaliação:</span>
                <span class="number">30 pessoas</span>
              </li>
            </ul>
          </div>
          <div className="divstyled">
            <p>Pessoas assistidas:</p>
          </div>
        </StyleListHelp>
      </Container>
    </>
  );
}

const Container = styled.div`
  background-color: #247356;
  display: flex;
  color: #fff;
  padding: 32px 16px;
  /* margin-bottom: 40px; */
  li {
    font-size: 20px;
    margin-bottom: 14px;
    .title {
      font-weight: 700;
      margin-right: 4px;
    }
    .number {
      font-weight: 400;
    }
  }

  .divstyled {
    background-color: #fff;
    box-shadow: 50%;
    width: 289px;
    text-align: center;
    p {
      padding: 18px;
      font-size: 20px;
      color: #1c6147;
      font-weight: 700;
    }
  }
`;
const StyleListHelp = styled.div``;
