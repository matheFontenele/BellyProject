import Topics from 'Assets/Json/topcs'

export default function TopctisMode({classe}){
    return(
        <>
            {Topics.map((topics) => (
                <div key={topics.id} className={classe}>
                    <img src={topics.icon} alt={topics.name}/>
                    <h1>{topics.name}</h1>
                    <p>{topics.text}</p>
                </div>
            ))}
        </>
    )
}