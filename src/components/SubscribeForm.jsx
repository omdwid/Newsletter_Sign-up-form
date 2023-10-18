import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SubscribeForm = () => {
	const [email, setEmail] = useState('')
	const [isActive, setIsActive] = useState(0)
	const navigate = useNavigate();

	const handleChange = (event) => {
		const text = event.target.value;
		if (/\S+@\S+\.\S+/.test(text)) {
			setIsActive(1);
		}
		else{
			setIsActive(0);
		}
		setEmail(text);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate('/thankyou')
	}
	return (
		<div>
			<form action="#" className='my-form' onSubmit={handleSubmit}>
				<label htmlFor="email-input">Email address</label>
				{/* <span className='error-message hidden'>enter valid email address</span> */}
				<input type="email" placeholder='email@comany.com' value={email} onChange={handleChange} />
				<button type='submit' className={isActive ? 'active' : 'inactive disabled'}>Subscibe to monthly newsletter</button>
			</form>
		</div>
	)
}

export default SubscribeForm
