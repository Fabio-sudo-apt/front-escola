import { Card } from "./Card";
import * as styled from "./style"
import api from '../../util/apiAxios'
import { useState, useEffect } from "react";
import { IPessoa } from "../../interfaces/IPessoa"
export function Dashboard() {

    const [profAll, setProfAll] = useState<IPessoa[]>([])
    const [alunoAll, setAlunoAll] = useState<IPessoa[]>([])

    useEffect(() => {
        api.get("/admProfAll").then((response) => {
            setProfAll(response.data)
        })
        
        api.get("/admAlunoAll").then((response) => {
            setAlunoAll(response.data)
        })
    }, [])

    return (
        <styled.divPricipal>
            <styled.titleHome>Dashboard</styled.titleHome>
            <styled.divElement>
                <styled.divItems>
                    <styled.titleh3>Professores</styled.titleh3>
                    <styled.tbl>
                        <styled.thead>
                            <styled.trhead>
                                <styled.th>Nome</styled.th>
                                <styled.th>Turno</styled.th>
                                <styled.th>Disciplina</styled.th>
                                
                            </styled.trhead>
                        </styled.thead>
                        <Card dataArray={profAll}/>
                    </styled.tbl>
                </styled.divItems>
                <styled.divItems>
                    <styled.titleh3>Alunos</styled.titleh3>
                    <styled.tbl>
                        <styled.thead>
                            <styled.trhead>
                                <styled.th>Nome</styled.th>
                                <styled.th>Turno</styled.th>
                                <styled.th>Media</styled.th>
                            </styled.trhead>
                        </styled.thead>
                        <Card dataArray={alunoAll}/>
                    </styled.tbl>
                </styled.divItems>
            </styled.divElement>
        </styled.divPricipal>
    );
}