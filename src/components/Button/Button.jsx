import React from 'react'
import css from './Button.module.css'

const Button = ({onClick}) => {
  return (
    <div className={css.buttonContainer}>
         <button type='button' className={css.showbutton} onClick={onClick}>Load more</button>
    </div>
  )
}

export default Button