
import * as styled from "./style"
import { IpropsArray } from "../../interfaces/IPessoa"
import { NavigateOptions, useNavigate } from "react-router-dom"
export function Card({dataArray}: IpropsArray) {
    const nav = useNavigate()
    const media = (a: number, b: number): number => {
        return (a + b) / 2
    }

    const editDeleteProf = (id: string) => {
        nav(`/editProf/${id}`)
    }
    const editDeleteAluno = (id: string) => {
        nav(`/editAluno/${id}`)
    }

    return (
        <styled.tbody>
            {dataArray.map((item) => {
                return item.disciplina ? <styled.trbody key={item.data.id} 
                onClick={() => editDeleteProf(item.data.id)}>
                    <styled.td>{item.data.name}</styled.td>
                    <styled.td>{item.data.turno}</styled.td>
                    <styled.td>{item.disciplina}</styled.td>
                </styled.trbody >
                    : <styled.trbody key={item.data.id} onClick={() => editDeleteAluno(item.data.id)}>
                        <styled.td>{item.data.name}</styled.td>
                        <styled.td>{item.data.turno}</styled.td>
                        <styled.td>{media(Number(item.n1), Number(item.n2))}</styled.td>
                    </styled.trbody>
            })}
        </styled.tbody>
    );
}