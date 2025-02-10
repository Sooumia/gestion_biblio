// Contact.js
import React, { useState } from 'react';
import { Send, CheckCircle, User, Mail, MessageSquare, FileText } from 'lucide-react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import image1 from '../images/contact.jpg';  // Importation de l'image

import './Contact.css';  // Importation du fichier CSS

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
        <div className="contact-form-container custom-form-container">
            <div className="text">
                <div className='contact-page__content'>
                    <img src={image1} alt="contact" className='img_contact'/>
                    <div class="contact-page__right">
                        <div class="section-title text-left">
                            <h2 class="section-title__title">Contactez-nous</h2>
                        </div>
                        <p class="contact-page__text"> Questions, rapports de bugs, retours, demandes de fonctionnalités - nous sommes là pour tout cela.
                            Utilisez-vous déjà Slack ? Connectez-vous pour que nous puissions personnaliser votre expérience de support.
                            Si ce n'est pas possible, nous aimerions toujours avoir de vos nouvelles.
                        </p>
                        <ul class="list-unstyled contact-page__contact-list">
                            <li>
                                <div class="icon">
                                    <FaPhone />
                                </div>
                                <div class="content">
                                    <p>Des Questions?</p>
                                    <h4><a href="tel:0635628450">06 35 62 84 50</a></h4>
                                </div>
                            </li>
                            <li>
                                <div class="icon">
                                    <FaEnvelope />
                                </div>
                                <div class="content">
                                    <p>Ecrire un e-mail</p>
                                    <h4><a href="mailto:info@ville-marrakech.ma">info@Biblio-marrakech.ma</a></h4>
                                </div>
                            </li>
                            <li>
                                <div class="icon">
                                    <FaMapMarkerAlt />
                                </div>
                                <div class="content">
                                    <p>Bibliothéque de ville</p>
                                    <h4>Bibliothéque de Ville, Avenue Mohammed V, Marrakech</h4>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='p'>
                <h1 className="h1">Ecrivez nous un message</h1>
                <div className="form-card custom-form-card">
                    <div className="form-content">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Champ Nom */}
                            <div>
                                <label htmlFor="name" className="input-label">
                                    <User className="icon" /> Nom
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`input-field ${errors.name ? 'input-error' : ''}`}
                                />
                                {errors.name && <p className="error-text">{errors.name}</p>}
                            </div>

                            {/* Champ Email */}
                            <div>
                                <label htmlFor="email" className="input-label">
                                    <Mail className="icon" /> Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`input-field ${errors.email ? 'input-error' : ''}`}
                                />
                                {errors.email && <p className="error-text">{errors.email}</p>}
                            </div>

                            {/* Champ Sujet */}
                            <div>
                                <label htmlFor="subject" className="input-label">
                                    <FileText className="icon" /> Sujet
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className={`input-field ${errors.subject ? 'input-error' : ''}`}
                                />
                                {errors.subject && <p className="error-text">{errors.subject}</p>}
                            </div>

                            {/* Champ Message */}
                            <div>
                                <label htmlFor="message" className="input-label">
                                    <MessageSquare className="icon" /> Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`input-field ${errors.message ? 'input-error' : ''}`}
                                />
                                {errors.message && <p className="error-text">{errors.message}</p>}
                            </div>

                            <div className="flex items-center justify-end">
                                <button
                                    type="submit"
                                    className="submit-btn"
                                >
                                    {submitted ? (
                                        <>
                                            <CheckCircle className="h-5 w-5 mr-2" />
                                            Envoyé !
                                        </>
                                    ) : (
                                        <>
                                            <Send className="h-5 w-5 mr-2" />
                                            Envoyer le message
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                        {submitted && (
                            <div className="success-message">
                                <p>Merci pour votre message ! Nous vous répondrons bientôt.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;