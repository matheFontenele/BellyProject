import Topics from 'Assets/Json/topcs'

export default function TopctisMode(){
    return(
        <div>
            {Topics.map((topics) => (
                <div key={topics.id}>
                    <img src={topics.icon} alt={topics.name}/>
                    <h1>{topics.name}</h1>
                    <p>{topics.text}</p>
                </div>
            ))}
        </div>
    )
}