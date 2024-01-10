import './CheckoutForm.css'
import { useState } from 'react'

const CheckoutForm = ({onConfirm}) => {
        const [surname, setSurname] = useState('')
        const [phone, setPhone] = useState('')
        const [email, setEmail] = useState('')

        const handleConfirm = (event) => {

                event.preventDefault()

                const userData = {
                        surname, phone, email
                }

                onConfirm(userData)
        }

        return (
                <div className='containerCheckout'>
                        <form onSubmit={handleConfirm} className='formCheckout'>
                                <label className='labelCheckout'>
                                        Nombre*
                                        <input className='inputCheckout' type='text' placeholder="Ingresá tu nombre" required value={surname} onChange={({ target }) => setSurname(target.value)} />
                                </label>
                                <label className='labelCheckout'>
                                        Telefono
                                        <input className='inputCheckout' type='number' placeholder="Ingresá tu teléfono" value={phone} onChange={({ target }) => setPhone(target.value)} />
                                </label>
                                <label className='labelCheckout'>
                                        Email*
                                        <input className='inputCheckout' type='text' placeholder="Ingresá tu email" required value={email} onChange={({ target }) => setEmail(target.value)} />
                                </label>
                                <div>
                                        <button type='submit' className='btnCheckout'> GENERAR ORDEN </button>
                                </div>
                        </form>
                </div>
        )
}

export default CheckoutForm