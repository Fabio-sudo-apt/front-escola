import * as styled from './style'
import { Input } from './input';
import { IProfessor } from '../../interfaces/IPessoa';
import apiAxios from '../../util/apiAxios';
import Select from './select';
import { useNavigate, useParams } from "react-router-dom";
import { useState } from 'react';
import { Scope } from '@unform/core'

export function EditDeleteProf() {
    const navigate = useNavigate()

    const { id } = useParams()

    const [dataUser, setDataUser] = useState({
        data: {
            name: '',
            email: '',
            idade: '',
            password: '',
            genero: '',
            turma: '',
            turno: ''
        },
        disciplina: '',
        rua: '',
        bairro: '',
    })

    const data = async () => {
        await apiAxios.get(`/getProfessor/${id}`).then((doc) => {
            const newData = doc.data
            setDataUser({
                data: {
                    name: newData.data.name,
                    email: newData.data.email,
                    idade: newData.data.idade,
                    password: newData.data.password,
                    genero: newData.data.genero,
                    turma: newData.data.turma,
                    turno: newData.data.turno,
                },
                disciplina: newData.disciplina,
                rua: newData.rua,
                bairro: newData.bairro,
            })
        })
    }
    const calcelarBtn = () => {
        navigate('/')
    }
    const docFrom = async (doc: IProfessor) => {
        const newData = {
            data: {
                id: id,
                name: doc.name,
                email: doc.email,
                idade: doc.idade,
                password: doc.password,
                genero: doc.genero,
                turma: doc.turma,
                turno: doc.turno,
            },
            disciplina: doc.disciplina,
            rua: doc.rua,
            bairro: doc.bairro,
        }
        await apiAxios.put("/updateProf", newData).then((doc) => {
            navigate('/')
        }).catch((e)=>{
            console.log(e)
        })
    }
    const deleteUser = async (id?: string) => {
        await apiAxios.delete(`/deleteProf/${id}`).then(() => {
            navigate('/')
        })
    }

    data()

    let disciplinas = ["Matematica", "Português", "Historia", "Geografia", "Fisica", "Quimica", "Artes"]
    return (
        <styled.divPricipal>
            <styled.divH3>
                <h2>Edita</h2>
            </styled.divH3>
            <styled.divFrom>
                <styled.form onSubmit={(doc)=>{docFrom(doc)}} initialData={dataUser}>
                    <styled.div>
                        <Scope path="data">
                            <Input placeholder='Nome' type="text" name='name' />
                            <Input placeholder='Senha' type="text" name='password' />
                            <Input placeholder='Email' type="email" name='email' />
                        </Scope>
                        <Input placeholder='Rua' type="text" name='rua' />
                        <Input placeholder='Bairro' type="text" name='bairro' />
                    </styled.div>
                    <styled.div>
                        <Scope path="data">
                            <Input placeholder='Idade' type="text" name='idade' />
                            <Input placeholder='Turma' type="text" name='turma' />
                            <Select label='Genêro' name='genero'>
                                <option value="Masculino">Masculino</option>
                                <option value="Feminino">Feminino</option>
                                <option value="Outros">Outros</option>
                            </Select>

                            <Select label='Turno' name='turno'>
                                <option value="Manha">Manhã</option>
                                <option value="Tarde">Tarde</option>
                            </Select>
                        </Scope>
                        <Select label='Disciplina' name='disciplina'>
                            {disciplinas.map((item) => {
                                return <option value={item}>{item}</option>
                            })}
                        </Select>
                    </styled.div>
                    <styled.divButton>
                        <styled.btnCancelar onClick={() => calcelarBtn()}>Cancelar</styled.btnCancelar>
                        <styled.btnDelete onClick={() => deleteUser(id)}>Delete</styled.btnDelete>
                        <styled.btnSalvar type="submit">Salvar</styled.btnSalvar>
                    </styled.divButton>
                </styled.form>
            </styled.divFrom>
        </styled.divPricipal>

    );
}