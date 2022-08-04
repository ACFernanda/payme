import styled from "styled-components";

const Container = styled.div`
  font-family: "Raleway", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin-top: 14vh;

  form {
    display: flex;
    flex-direction: column;
  }
  input {
    width: 100%;
    height: 45px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    font-size: 20px;
    padding: 5px;
    line-height: 25px;
    color: #666666;
    margin-bottom: 8px;
  }
  input:placeholder {
    color: #dbdbdb;
  }
  input:disabled {
    background-color: #f2f2f2;
  }
  button {
    font-family: "Recursive";
    font-weight: 600;
    font-size: 23px;
    color: #ffffff;
    width: 100%;
    height: 45px;
    background-color: #fd227c;
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    font-family: "Recursive";
    font-weight: 400;
    font-size: 18px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: none;
    color: #ffffff;
    margin-top: 25px;
  }
`;

export { Container };
