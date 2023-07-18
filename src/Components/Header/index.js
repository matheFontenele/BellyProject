import NavBar from 'Components/Header/NavBar'
import styles from './Header.module.css'
import Formulario from './Formulario'

export default function Header(){
    return(
        <header className={styles.header}>
            <NavBar/>
            
            <div className={styles.secondChild}>
                <img src='people.png' alt='people'/>
                <Formulario/>    
            </div>
            
        </header>
    )
}