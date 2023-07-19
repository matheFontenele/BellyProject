export default function Post({capaImg, name, text, btnImg, btnText}){
    return(
        <div>
            <img src={capaImg} alt={name}/>
            <p>{text}</p>
            <button><img src={btnImg} alt={name}/>{btnText}</button>
        </div>
    )
}