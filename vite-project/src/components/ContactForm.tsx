import React, { useState } from 'react';

interface ContactMeFormData {
    name: string;
    email: string;
    message: string;
}

const ContactMeForm: React.FC = () => {
    const [formData, setFormData] = useState<ContactMeFormData>({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Handle form submission logic here (e.g., send an email)
        console.log('Form data:', formData);
    };

    return (
        <div className="container mx-auto bg-black rounded-lg overflow-auto m-6 p-3 sm:w-1/2 w-11/12">
            <h2 className="mx-auto sm:text-4xl text-3xl mb-3 text-white flex justify-center">CONTACT ME</h2>
            <form onSubmit={handleSubmit} className="rounded-lg shadow-md p-8 flex flex-col">
                <div className="mb-4">
                    <label htmlFor="name" className="formName">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="inputArea"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="formName">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="inputArea"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="formName">
                        Message to Jaafar Rodgers
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="inputArea"
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