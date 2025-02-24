import React, { useState } from 'react';
import { Send, CheckCircle, User, Mail, MessageSquare, FileText } from 'lucide-react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import image1 from '../images/contact.jpg';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const validateForm = () => {
        const newErrors = {
            name: '',
            email: '',
            subject: '',
            message: ''
        };

        if (!formData.name.trim()) newErrors.name = 'Le nom est requis';
        if (!formData.email.trim()) {
            newErrors.email = 'L\'email est requis';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Format d\'email invalide';
        }
        if (!formData.subject.trim()) newErrors.subject = 'Le sujet est requis';
        if (!formData.message.trim()) newErrors.message = 'Le message est requis';

        setErrors(newErrors);
        return !Object.values(newErrors).some(error => error);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Formulaire soumis:', formData);
            setSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setSubmitted(false), 3000);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    return (
        <div className="contact-form-container">
            <div className="contact-page__content">
                <div className="contact-page__left">
                    <img src={image1} alt="contact" className="img_contact"/>
                </div>
                <div className="contact-page__right">
                    <h2 className="section-title">Contactez-nous</h2>
                    <p className="contact-page__text">Des questions ? Nous sommes là pour vous aider. Contactez-nous maintenant!</p>
                    <ul className="contact-page__contact-list">
                        <li>
                            <FaPhone className="icon" />
                            <p>Des Questions?</p>
                            <h4><a href="tel:0635628450">06 35 62 84 50</a></h4>
                        </li>
                        <li>
                            <FaEnvelope className="icon" />
                            <p>Ecrire un e-mail</p>
                            <h4><a href="mailto:info@Biblio-marrakech.ma">info@Biblio-marrakech.ma</a></h4>
                        </li>
                        <li>
                            <FaMapMarkerAlt className="icon" />
                            <p>Bibliothèque de Ville</p>
                            <h4>Bibliothèque de Ville, Avenue Mohammed V, Marrakech</h4>
                        </li>
                    </ul>
                </div>
            </div>

            <h1 className="h1">Écrivez-nous un message</h1>
            <div className="form-card">
                <form onSubmit={handleSubmit} className="contact-form">
                    <div>
                        <label htmlFor="name" className="input-label">
                            <User className="icon" /> Nom
                        </label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="input-field" />
                        {errors.name && <p className="error-text">{errors.name}</p>}
                    </div>
                    <div>
                        <label htmlFor="email" className="input-label">
                            <Mail className="icon" /> Email
                        </label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="input-field" />
                        {errors.email && <p className="error-text">{errors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="subject" className="input-label">
                            <FileText className="icon" /> Sujet
                        </label>
                        <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="input-field" />
                        {errors.subject && <p className="error-text">{errors.subject}</p>}
                    </div>
                    <div>
                        <label htmlFor="message" className="input-label">
                            <MessageSquare className="icon" /> Message
                        </label>
                        <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="input-field" />
                        {errors.message && <p className="error-text">{errors.message}</p>}
                    </div>
                    <button type="submit" className="submit-btn">
                        {submitted ? <CheckCircle className="h-5 w-5 mr-2" /> : <Send className="h-5 w-5 mr-2" />}
                        {submitted ? 'Envoyé!' : 'Envoyer le message'}
                    </button>
                </form>
                {submitted && (
                    <div className="success-message">
                        <p>Merci pour votre message ! Nous vous répondrons bientôt.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Contact;
