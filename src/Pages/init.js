import asalogo from "../assets/asa.svg";
import styled from "styled-components";

export default function PageInit() {
  return (
    <Container>
      <Logo>
        <div className="logodiv">
          <img src={asalogo} alt="logo" />
        </div>
      </Logo>
    </Container>
  );
}

const Container = styled.div`
  background-color: #247356;
`;
const Logo = styled.div`
  padding: 196px 97px 196px 97px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  .logodiv {
    width: 300px;
    img {
      width: 100%;
    }
  }
`;
