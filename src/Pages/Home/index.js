import SectionsArticle from "Components/SectionsArticle"
import styles from "./Home.module.css"
import Header from "Components/Header"
import SectionTopics from "Components/SectionTopcs"

export default function Home(){
    return(
        <main className={styles.main}>
            <Header/>
            <SectionsArticle/>
            <SectionTopics/>
        </main>
    )
}