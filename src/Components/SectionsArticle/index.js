import styles from './SectionsArticle.module.css'

export default function SectionsArticle(){
    return(
        <section className={styles.section}>
            <div>
                <h1>5 discas para contratar proficionais de tecnologia</h1>
                <p>Esse material é para você que deseja conhecer as melhores técnicas para contratar profissionais de TI.</p>

                <span>
                    <button className={styles.sistema}>Ver sistema</button>
                    <button className={styles.saber}>Saber mais</button>
                </span>

                <h3>Saiba tudo sobre o  sistema que as grandes empresas de sucesso estão utilizando para diminuir gastros e alavancar seus resultados!</h3>
            </div>

            <img  src='corno.png' alt='corno'/>
        </section>
    )
}