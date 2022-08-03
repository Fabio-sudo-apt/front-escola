
import * as styled from './style'

export function Nav() {
    return (
        <nav>
            <styled.navUl>

                <styled.li to="/">Dashboard</styled.li>


                <styled.li to="/cProfessor">Cadastra Professor</styled.li>


                <styled.li to="/cAluno">Cadastra Aluno</styled.li>

            </styled.navUl>
        </nav>
    );
}