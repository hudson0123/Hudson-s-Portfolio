import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        if (!formSubmitted) {
            document.getElementById("submitInput").innerHTML = 'Loading';
            e.preventDefault();

            emailjs.send('service_nvez149', 'template_pfysblt', formData, '7Xniu4oQAodcmMsLw')
                .then((result) => {
                    console.log(result.text);
                    document.getElementById("nameInput").value = '';
                    document.getElementById("subjectInput").value = '';
                    document.getElementById("emailInput").value = '';
                    document.getElementById("messageInput").value = '';
                    document.getElementById("submitInput").innerHTML = 'Email Sent.';
                }, (error) => {
                    console.log(error.text);
                    document.getElementById("submitInput").innerHTML = 'Email Sent.';
                });
            setFormSubmitted(true)
        } else {
            
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="grid sm:grid-cols-2 items-start gap-16 p-4 py-80 mx-auto max-w-4xl bg-white font-[sans-serif]">
            <div>
                <h1  id="contact" className="text-[#48E5C2] drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,2)] text-3xl font-extrabold">Send me a message.</h1>
                <p className="text-sm text-gray-500 mt-4">Feel free to reach out with any questions, comments, or requests, and I&apos;ll get back to you as soon as possible!</p>

                <div className="mt-12">
                    <h2 className="text-gray-800 text-base font-bold">Email</h2>
                    <ul className="mt-4">
                        <li className="flex items-center">
                            <div className="h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <img src="/mail-svgrepo-com.png" alt="mail" />
                            </div>
                            <a href="mailto:hudsonodonnell2004@gmail.com" className="text-black text-md ml-4 mt-1">
                                <strong className='underline'>hudsonodonnell2004@gmail.com</strong>
                            </a>
                        </li>
                    </ul>
                </div>
                <hr className='my-10' />
                <div className="mt-12">
                    <h2 className="text-gray-800 text-base font-bold">Socials</h2>
                    <ul className="flex mt-4 space-x-4">
                        <li className="transition delay-150 duration-300 ease-in-out animate-bounce h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <a href="https://www.linkedin.com/in/hudsonlo/" target='_blank' rel="noopener noreferrer">
                                <img src="/linkedin-svgrepo-com.png" alt="linkedin" />
                            </a>
                        </li>
                        <li className="animate-bounce delay-400 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <a href="https://github.com/hudson0123" target='_blank' rel="noopener noreferrer">
                                <img src="/github-svgrepo-com2.png" alt="github" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <form className="ml-auto space-y-4 border-black border-1">
                <input 
                    id="nameInput"
                    type='text' 
                    name='name' 
                    placeholder='Name'
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-[#48E5C2] focus:bg-transparent" 
                    required
                />
                <input 
                    id="emailInput"
                    type='email' 
                    name='email' 
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-[#48E5C2] focus:bg-transparent" 
                    required
                />
                <input 
                    id="subjectInput"
                    type='text' 
                    name='subject' 
                    placeholder='Subject'
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-[#48E5C2] focus:bg-transparent" 
                    required
                />
                <textarea 
                    id="messageInput"
                    name='message'
                    placeholder='Message' 
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-md px-4 bg-gray-100 text-gray-800 text-sm pt-3 outline-[#48E5C2] focus:bg-transparent" 
                    required
                />
                <button 
                    onClick={handleSubmit}
                    id="submitInput"
                    type='submit'
                    className="text-white bg-[#48E5C2] tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6"
                >
                    Send
                </button>
            </form>
        </div>
    );
}
