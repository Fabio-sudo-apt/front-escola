import { Form } from "@unform/web";
import styled from "styled-components";

export const divPricipal = styled.div`
  width: 100%;
  background-color: #FFFFFF;
`;

export const divH3 = styled.h3`
  padding: 15px;
  margin: 15px;
  color: #000;
`;

export const divFrom = styled.div`
  padding: 20px;
  height: 75%;
  `;

export const form = styled(Form)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  padding: 15px;
  height: 100%;
  background-color: #F6F6F6;
  border-top: 3px solid #3F00F3;
  border-radius: 2px;
`;
export const div = styled.div`
  display: flex;
  /* width: 100%; */
  /* height: 100%; */
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: flex-start;
`;

export const input1 = styled.input`
  width: 30rem;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  border: none;
  background-color: #3F00F3;
  color: white;
  ::placeholder{
    color: #FFFFFF;
  }
`;

export const divButton = styled.div`
  display: flex; 
  justify-content: end;
`

export const btnSalvar = styled.button`
  margin: 0 10px;
  padding: 10px;
  width: 7rem;
  border-radius: 10px;
  color: #FFFFFF;
  background-color: #05E700;
  border: none;
  cursor: pointer;
`
export const btnCancelar = styled.button`
  margin: 0 10px;
  padding: 10px;
  width: 7rem;
  border-radius: 10px;
  color: #FFFFFF;
  background-color: #E40000;
  border: none;
  cursor: pointer;
`

export const divSelect = styled.div`
  margin: 8px;
`