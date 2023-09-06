import styled from "styled-components";

export default function Input({
  type = "text",
  name,
  id,
  value,
  classInput,
  onChange = () => {},
}) {
  return (
    <>
      <Container>
        <label htmlFor={id}>{name}</label>
        <input
          className={classInput}
          type={type}
          id={id}
          value={value}
          onChange={onChange}
        />
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: 32px 16px;

  .custom-input {
    background-color: red;
  }
`;
