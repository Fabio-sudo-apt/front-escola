import * as styled from './style'
import { Input } from './input';
import { IProfessor } from '../../interfaces/IPessoa';
import apiAxios from '../../util/apiAxios';
import Select from './select';
import { useNavigate } from "react-router-dom"; 

export function FormProf() {
    const navigate = useNavigate()

    const calcelarBtn = ()=>{
        navigate('/')
    }
    const docFrom = async (doc: IProfessor) => {
        
        const newUser = {
            data: {
                name: doc.data.name,
                email: doc.data.email,
                idade: doc.data.idade,
                password: doc.data.password,
                genero: doc.data.genero,
                turma: doc.data.turma,
                turno: doc.data.turno,
              },
              disciplina: doc.disciplina,
              rua: doc.rua,
              bairro: doc.bairro,
        }
        console.log(newUser)
       await apiAxios.post("/createProf", newUser).then(()=>{
        navigate('/')
       }).catch((e)=>{
        console.log(e.response.data.messages)
       })
      
    }
    let disciplinas = ["Matematica", "Português", "Historia", "Geografia", "Fisica", "Quimica", "Artes"]

    return (
        <styled.divPricipal>
            <styled.divH3>
                <h2>Cadastro Professor(a)</h2>
            </styled.divH3>
            <styled.divFrom>
                <styled.form onSubmit={docFrom}>
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

                        <Select label='Genêro' name='genero'>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                            <option value="Outros">Outros</option>
                        </Select>

                        <Select label='Turno' name='turno'>
                            <option value="Manha">Manhã</option>
                            <option value="Tarde">Tarde</option>
                        </Select>

                        <Select label='Disciplina' name='disciplina'>
                            {disciplinas.map((item) => {
                                return <option value={item}>{item}</option>
                            })}
                        </Select>
                    </styled.div>
                    <styled.divButton>
                        <styled.btnCancelar onClick={()=>calcelarBtn()}>Cancelar</styled.btnCancelar>
                        <styled.btnSalvar type="submit">Salvar</styled.btnSalvar>
                    </styled.divButton>
                </styled.form>
            </styled.divFrom>
        </styled.divPricipal>

    );
}