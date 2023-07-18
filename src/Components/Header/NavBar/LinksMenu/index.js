import { Link } from "react-router-dom";
import styles from './LinksMenu.module.css'

export default function LinksMenu({to, children}){

    return(
        <Link className={styles.link} to={to}>
            {children}
        </Link>
    )
}