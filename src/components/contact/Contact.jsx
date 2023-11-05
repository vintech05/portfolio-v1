import '/src/index.css'
import { useRef } from 'react';
import { useState } from 'react';
import { LiaHandshake } from 'react-icons/lia'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setMessage('');

    // Submit the form
    sendEmail();

    emailjs.sendForm('service_n7d5ska', 'template_ju1gm48', form.current, 'wtOFdbDtNxITIJv_a')
        .then((result) => {
            console.log(result.text);
            console.log('success');
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className='grid place-items-center h-screen'>
            <div className='pb-24 lg:pb-8 grid place-items-center'>
                <h1 className='font-serif text-4xl text-button-clr uppercase'>lets connect!</h1>
                <LiaHandshake className='font-Manrope text-3xl text-button-clr uppercase'/>
            </div>
            <div className='font-Manrope -mt-40'>
            <form className='flex flex-col w-[20em] md:w-[30em] lg:w-[40em] text-button-clr' onSubmit={sendEmail}>
                <label className='pb-2'>Name</label>
                <input
                className='mb-8 p-2 border-2 border-button-clr caret-button-clr text-button-clr'
                type="text"
                name="user_name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder='John Doe'
                required
                />
                <label className='pb-2'>Email</label>
                <input
                className='mb-8 p-2 border-2 border-button-clr caret-button-clr text-button-clr'
                type="email"
                name="user_email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder='johndoe123@gmail.com'
                required
                />
                <label className='pb-2'>Message</label>
                <textarea
                className='border-2 border-button-clr pl-2 pt-2 pb-24 resize-none caret-button-clr text-button-clr'
                name="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder='This is great!'
                required
                />
                <input
                className='cursor-pointer mt-8 border-2 font-semibold border-button-clr bg-button-clr w-auto text-bg-clr p-2 hover:bg-bg-clr hover:text-button-clr transition-all'
                type="submit"
                value="Send"
                />
            </form>
        </div>
    </div>
    );
}

export default Contact