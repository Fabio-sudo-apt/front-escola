import styled from "styled-components";

export const divPricipal = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  flex: 4;
  height: 100vh;
  padding: 17px;
  background-color: #ffffff;
`;

export const titleHome = styled.h1`
  margin: 10px 0;
  color: #000;
`;

export const divElement = styled.div`
  display: flex;
  height: 90vh;
  flex-direction: row;
  justify-content: space-between;
  color: white;
  background-color: #f6f6f6;
  border-radius: 3px;
  border-top: 3px solid #3f00f3;
`;

export const divItems = styled.div`
  flex: 1;
`;

export const titleh3 = styled.h3`
  color: #3f00f3;
  font-size: 20px;
  font-weight: 500;
  /* margin: 10px; */
`;

export const tbl = styled.table`
  width: 100%;
`;
export const thead = styled.thead`
    width: 100%;
    display: flex;
`;

export const trhead = styled.tr`
    display: flex;
    width: 100%;
    align-items: center;
    color: #3f00f3;
`;

export const th = styled.th`
    flex: 1 1 20%;
    text-align: center;
`

export const tbody = styled.tbody`
    display: flex;
    flex-direction: column;
    width: 100%;
    cursor: pointer;
`;

export const td = styled.td`
   flex: 1 1 10%;
    text-align: center;
`;

export const trbody = styled.tr`
    display: flex;
    width: 100%;
    align-items: center;
    border-radius: 10px;
    background-color: #3f00f3;
    color: #fff;
    padding: 10px;
    margin: 10px 0 0 0;
`