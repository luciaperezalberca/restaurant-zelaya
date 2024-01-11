import './CheckoutForm.css'
import { useState } from 'react'

const CheckoutForm = ({onConfirm}) => {
        const [name, setName] = useState('')
        const [phone, setPhone] = useState('')
        const [email, setEmail] = useState('')
        const [emailConfirmation, setEmailConfirmation] = useState('')

        const handleConfirm = (event) => {

                event.preventDefault()

                if (email !== emailConfirmation) {
                        alert('Los correos electrónicos no coinciden. Intente nuevamente.')
                        return
                }

                const userData = {
                        name, phone, email
                }

                onConfirm(userData)
        }

        return (
                <div className='containerCheckout'>
                        <form onSubmit={handleConfirm} className='formCheckout'>
                                <label className='labelCheckout'>
                                        Nombre*
                                        <input className='inputCheckout' name='name' type='text' placeholder="Ingresá tu nombre" required value={name} onChange={({ target }) => setName(target.value)} />
                                </label>
                                <label className='labelCheckout'>
                                        Telefono
                                        <input className='inputCheckout' name='phone' type='number' placeholder="Ingresá tu teléfono" value={phone} onChange={({ target }) => setPhone(target.value)} />
                                </label>
                                <label className='labelCheckout'>
                                        Email*
                                        <input className='inputCheckout' name='email' type='text' placeholder="Ingresá tu email" required value={email} onChange={({ target }) => setEmail(target.value)} />
                                </label>
                                <label className='labelCheckout'>
                                        Confirmar Email*
                                        <input className='inputCheckout' name='confirmEmail' type='text' placeholder='Confirmá tu email' required value={emailConfirmation} onChange={({ target }) => setEmailConfirmation(target.value)} />
                                </label>
                                <div>
                                        <button type='submit' className='btnCheckout'> GENERAR ORDEN </button>
                                </div>
                        </form>
                </div>
        )
}

export default CheckoutForm