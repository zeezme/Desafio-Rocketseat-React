import React from 'react'
import './userRegistration.css'

export default function UserRegistration(props) {
  return (
    <div className={'user-registration-container' + (props.buttonStates ? '-active' : '') }>
      <form className='user-registration-form'>
        <h2 id='user-registration-form-title'>Registre-se</h2>

        <p className='user-registration-form-tag'>Nome</p>
        <input className='user-registration-form-input' type='text' required></input>
        <p className='user-registration-form-tag'>E-mail</p>
        <input className='user-registration-form-input' type='email' required></input>

        <button className='user-registration-form-button' type='submit'>Enviar</button>

      </form>
    </div>
  )
}
