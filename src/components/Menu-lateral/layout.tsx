
import * as styled from './style'
import { Nav } from './Nav';
export function Layout() {
    return (
        <styled.divPricipal>
            <styled.logoMenu>
                <div>
                    <styled.titleh1>Bem vindo!</styled.titleh1>
                </div>
                <Nav />
            </styled.logoMenu>
        </styled.divPricipal>
    );
}