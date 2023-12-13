import { buttonProps } from '../../Types/types'
import './Button.scss'



const Button = ({type, children, onClick}: buttonProps) => {
    return (
        <button className='button' type={type} onClick={onClick}>
            {children}
      </button>
  )
}

export default Button