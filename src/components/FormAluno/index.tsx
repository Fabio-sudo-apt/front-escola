import * as styled from './style'
import { Input } from './input';
import { IAluno, IAlunoCreate } from '../../interfaces/IPessoa';
import apiAxios from '../../util/apiAxios';
import Select from './select';
import { useNavigate } from "react-router-dom";

export function FormAluno() {
    const navigate = useNavigate()
    const calcelarBtn = () => {
        navigate('/')
    }
    const docFrom = async (doc: IAlunoCreate) => {
        const newUser = {
            data: {
                name: doc.name,
                email: doc.email,
                idade: doc.idade,
                password: doc.password,
                genero: doc.genero,
                turma: doc.turma,
                turno: doc.turno,
              },
              n1: doc.n1,
              n2: doc.n1,
              rua: doc.rua,
              bairro: doc.bairro,
        }
        await apiAxios.post("/createAluno", newUser)
        navigate('/')
    }

    return (
        <styled.divPricipal>
            <styled.divH3>
                <h2>Cadastro Aluno(a)</h2>
            </styled.divH3>
            <styled.divFrom>
                <styled.form onSubmit={docFrom} action="/">
                    <styled.div>
                        <Input placeholder='Nome' type="text" name='name' />
                        <Input placeholder='Senha' type="text" name='password' />
                        <Input placeholder='Email' type="email" name='email' />
                        <Input placeholder='Rua' type="text" name='rua' />
                        <Input placeholder='Bairro' type="text" name='bairro' />
                    </styled.div>
                    <styled.div>
                        <Input placeholder='Idade' type="text" name='idade' />
                        <Input placeholder='Turma' type="text" name='turma' />

                        <Input placeholder='Nota 01' type="number" name='n1' max={10} min={0}/>
                        <Input placeholder='Nota 02' type="number" name='n2' max={10} min={0}/>

                        <Select label='Gen??ro' name='genero'>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                            <option value="Outros">Outros</option>
                        </Select>

                        <Select label='Turno' name='turno'>
                            <option value="Manha">Manh??</option>
                            <option value="Tarde">Tarde</option>
                        </Select>
                    </styled.div>
                    <styled.divButton>
                        <styled.btnCancelar onClick={() => calcelarBtn()}>Cancelar</styled.btnCancelar>
                        <styled.btnSalvar type="submit">Salvar</styled.btnSalvar>
                    </styled.divButton>
                </styled.form>
            </styled.divFrom>
        </styled.divPricipal>

    );
}