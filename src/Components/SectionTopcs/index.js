import stylus from './SectionsTopics.module.css'
import TopctisMode from './TopcisMode'

export default function SectionTopics(){
    return(
        <section className={stylus.section}>
            <h1>O que você vai encontrar aqui?</h1>
                <div className={stylus.ulTopics}>
                    <TopctisMode classe={stylus.topicDivs}/>
                </div>  
        </section>
    )
}