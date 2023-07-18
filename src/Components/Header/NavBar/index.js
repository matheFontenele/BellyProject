import LinksMenu from 'Components/Header/NavBar/LinksMenu'
import styles from './NavBar.module.css'

export default function NavBar(){
    return(
        <nav className={styles.navMenu}>
            <ul>
                <LinksMenu to='/'>
                    Home
                </LinksMenu>

                <LinksMenu to='/formulario'>
                    Formulario
                </LinksMenu>

                <LinksMenu to='/topicos'>
                    Tópicos
                </LinksMenu>

                <LinksMenu to='/nossosistema'>
                    Nosso Sistema
                </LinksMenu>


            </ul>

            <p><i className="fa-brands fa-telegram"></i>Compartilhe nosso material</p>
        </nav>
    )
}