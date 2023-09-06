import styled from "styled-components";

import Input from "../../components/Input";
import NaveBar from "../../components/Navbar";

export default function RegisterFamily() {
  return (
    <>
      <NaveBar />
      <Form>
        <InputGroup>
          <Input type="text" name="name" id="id" />
          <Input className="meu-input" type="text" name="name2" id="id2" />
        </InputGroup>
        <Input type="text" name="name3" id="id" />
      </Form>
    </>
  );
}

const Form = styled.form``;

const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  input {
    background-color: green;
  }
`;
