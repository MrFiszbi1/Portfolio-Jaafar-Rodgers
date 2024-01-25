import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
interface ContactMeFormData {
    user_name: string;
    user_email: string;
    message: string;
}

const ContactMeForm: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState<ContactMeFormData>({
        user_name: '',
        user_email: '',
        message: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            await emailjs.sendForm('service_7gw2omr', 'template_hj4xuuu', event.currentTarget, 'C9N5HW38g-13pxUFi')
                .then((result) => {
                    console.log('Email sent successfully!', result.text);
                    setFormData({ user_name: '', user_email: '', message: '' });
                    alert('Message sent successfully!');
                })
                .catch((error) => {
                    console.error('Error sending email:', error.text);
                    alert('Error sending message. Please try again later.');
                });
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Error sending message. Please try again later.');
        }
    };

    return (
        <div className="container mx-auto bg-base-300 rounded-lg overflow-auto m-6 p-3 sm:w-1/2 w-11/12 shadow-2xl border">
            <h2 className="mx-auto sm:text-4xl text-3xl flex justify-center">CONTACT ME</h2>
            <form ref={formRef} onSubmit={handleSubmit} className="p-8 pt-6 flex flex-col">
                <div className="mb-4">
                    <label htmlFor="name" className="formName">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="user_name"
                        value={formData.user_name}
                        onChange={handleChange}
                        className="inputArea"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="formName">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="user_email"
                        value={formData.user_email}
                        onChange={handleChange}
                        className="inputArea"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="formName">
                        Message to Jaafar Rodgers
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="inputArea"
                        required
                    />
                </div>
                <div className="flex items-center justify-center mt-3">
                    <button type="submit" className="linkButton sm:w-1/3 w-11/12">
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactMeForm;