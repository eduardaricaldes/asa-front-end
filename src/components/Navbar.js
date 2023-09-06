import styled from "styled-components";
import menu from "../assets/menu.svg";
import asalogo from "../assets/asalogo.svg";

export default function NaveBar() {
  return (
    <>
      <Container>
        <Style>
          <div className="menu">
            <img src={menu} alt="menu" />
          </div>
          <div className="namechurch">
            <h1>INGLESES</h1>
          </div>
          <div className="logodiv">
            <img src={asalogo} alt="logo" />
          </div>
        </Style>
      </Container>
    </>
  );
}

const Container = styled.div`
  background: #247356;
  padding: 32px 16px;
`;
const Style = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 51px;

  .menu {
    width: 35px;

    img {
      width: 100%;
    }
  }
  .logodiv {
    width: 35px;
    img {
      width: 100%;
    }
  }
  .namechurch {
    h1 {
      font-size: 20px;
      color: #fff;
      font-weight: 700;
    }
  }
`;
