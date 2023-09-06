import styled from "styled-components";

export default function Input({ type, name, id }) {
  return (
    <>
      <Container>
        <label htmlFor={id}>{name}</label>
        <input type={type} id={id}></input>
      </Container>
    </>
  );
}

export function Component() {
  return (
    <Ca>
      <Input type="text" name="name" id="id" />
      <Input type="text" name="name2" id="id2" />
    </Ca>
  );
}

const Ca = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Container = styled.div`
  padding: 32px 16px;
  input[type="test"] {
    width: 100%;
  }
`;
