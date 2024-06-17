
import Style from '../components/Button.module.css'

function Button({onClick}) {
    return(
        <div><button type="text" className={Style.button} onClick={onClick}>BUSCAR</button></div>
    )
}
export default Button