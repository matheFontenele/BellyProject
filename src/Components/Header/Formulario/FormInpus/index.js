export default function FormInputs({legend, placeholder, inputtype}){
    return(
        <fieldset>
            <legend>{legend}</legend>
            <input type={inputtype} placeholder={placeholder}/>
        </fieldset>
    )
}