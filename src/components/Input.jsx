
import Style from '../components/Input.module.css'

function Input({ value, onChange }) {
    return (
        <div>
            <input
                className={Style.input}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}
export default Input