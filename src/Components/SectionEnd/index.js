import Post from './Post'
import styles from './SectionEnd.module.css'

export default function SectionEnd(){
    return(
        <section className={styles.section}>
            <Post 
                capaImg='posts/system.png' 
                name='system' 
                text='Aprenda o passo a passo que as grandes empresas estão executando para contratar grandes talentos da tecnologia de forma rápida e assertiva.'
                btnImg='icons/download.png'
                btnText='Download'
            />

            <Post 
                capaImg='posts/uxui.png' 
                name='uxui' 
                text='Compartilhe esse material com quem também está precisando contratar profissionais de tecnologia'
                btnImg='icons/zap.png'
                btnText='Compartilhar'
            />

            <img className={styles.muie} src='desgracada.png' alt='desgracada'/>

        </section>
    )
}