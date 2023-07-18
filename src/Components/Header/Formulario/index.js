import FormInputs from './FormInpus'
import styles from './Formulario.module.css'

export default function Formulario(){
    return(
        <form className={styles.formulario}>
            <h1>Campo de preenchimento</h1>

            <FormInputs 
                legend='Nome' 
                placeholder='Digite aqui' 
                inputtype='text'
            />

            <FormInputs 
                legend='E-mail corporativo' 
                placeholder='email.seuemail@.com.br' 
                inputtype='email'
            />

            <FormInputs 
                legend='WhatsApp' 
                placeholder='( ) 9 9999 9999' 
                inputtype='number'
            />

            <FormInputs 
                legend='Nome da empresa' 
                placeholder='Nome da empresa' 
                inputtype='text'
            />

            <FormInputs 
                legend='possui setor de TI' 
                placeholder='Resposta aqui' 
                inputtype='text'
            />

            <FormInputs 
                legend='Já possui OTS na equipe?' 
                placeholder='Resposta aqui' 
                inputtype='text'
            />

            <FormInputs 
                legend='Numero de funcionarios' 
                placeholder='Resposta aqui' 
                inputtype='number'
            />

            <button type='submit'>Enviar Formulario</button>
            
        </form>
    )
}