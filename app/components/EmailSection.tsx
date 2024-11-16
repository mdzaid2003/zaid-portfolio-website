'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import GithubIcon from '../../public/github-icon.svg'
import LinkedinIcon from '../../public/linkedin-icon.svg'
import { Boxes } from './background-boxes'
import axios from 'axios'

export default function EmailSection() {
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message: '',
    });
    const [error, setError] = useState({
        email: '',
        subject: '',
    });

    const handleChange = (event: any) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
        setError({ ...error, [event.target.name]: '' }); // Clear error when user types
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        let valid = true;
        let errors = { email: '', subject: '' };

        if (!formData.email) {
            errors.email = 'Email is required';
            valid = false;
        }
        if (!formData.subject) {
            errors.subject = 'Subject is required';
            valid = false;
        }

        if (!valid) {
            setError(errors);
            return;
        }

        try {
            const res = await axios.post('/api/send', formData);
            setFormData({
                email: '',
                subject: '',
                message: '',
            })
        } catch (error: any) {
            console.log(error);
        }
    };

    return (
        <div id='contact' className="relative py-20 lg:py-36 overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
            <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            <Boxes />

            <section className='grid md:grid-cols-2 z-20 gap-10 mx-4'>
                <div className="">
                    <h5 className="text-xl font-bold text-white my-2">
                        Let's Connect
                    </h5>
                    <p className="text-[#ADB7BE] mb-4 max-w-md">
                        I'm currently looking for new opportunities, my inbox is always open.
                        Whether you have a question or just want to say hi, I'll try my best
                        to get back to you!
                    </p>
                    <div className="socials flex flex-row gap-2">
                        <Link href={'https://www.instagram.com/zaiddd_3?igsh=ZTgyOWd0Y2IwY3N1&utm_source=qr'}>
                            <Image
                                src={GithubIcon}
                                alt='Github' />
                        </Link>
                        <Link href={'https://www.linkedin.com/in/mohd-zaid-b3b782322/'}>
                            <Image
                                src={LinkedinIcon}
                                alt='LinkedIn' />
                        </Link>
                    </div>
                </div>
                <div className="">
                    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                        <div>
                            <label htmlFor="email" className='text-white block mb-2 text-sm font-medium'>
                                Your email
                            </label>
                            <input
                                name='email'
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                id='email'
                                className='bg-[#18191E] border border-[#33353E] placeholder-[#9CA2AS] text-gray-100 rounded-lg block w-full p-2.5'
                                placeholder='example@yahoo.com'
                            />
                            {error.email && <span className="text-red-500 text-sm">{error.email}</span>}
                        </div>
                        <div className="">
                            <label htmlFor="subject" className='text-white block text-sm mb-2 font-medium'>
                                Subject
                            </label>
                            <input
                                name='subject'
                                type="text"
                                value={formData.subject}
                                id='subject'
                                onChange={handleChange}
                                className='bg-[#18191E] border border-[#33353E] placeholder-[#9CA2AS] text-gray-100 rounded-lg block w-full p-2.5'
                                placeholder='Just say Hi'
                            />
                            {error.subject && <span className="text-red-500 text-sm">{error.subject}</span>}
                        </div>
                        <div className="">
                            <label htmlFor="message" className='text-white block text-sm mb-2 font-medium'>
                                Message
                            </label>
                            <textarea
                                name='message'
                                id='message'
                                value={formData.message}
                                onChange={handleChange}
                                className='bg-[#18191E] border border-[#33353E] placeholder-[#9CA2AS] text-gray-100 rounded-lg block w-full p-2.5'
                                placeholder='Drop your message'
                            />
                        </div>
                        <button type="submit" className='bg-orange-500 hover:bg-red-500 text-white rounded-lg font-medium px-5 py-2.5 w-full'>Send Message</button>
                    </form>
                </div>
            </section>
        </div>
    )
}
