import React, { useState } from 'react';
import { Send, CheckCircle, User, Mail, FileText, MessageSquare } from 'lucide-react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

import './Contact.scss';
import './img.jpg';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    // Validation du formulaire
    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Le nom est requis';
        if (!formData.email.trim()) {
            newErrors.email = 'L\'email est requis';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Format d\'email invalide';
        }
        if (!formData.subject.trim()) newErrors.subject = 'Le sujet est requis';
        if (!formData.message.trim()) newErrors.message = 'Le message est requis';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);
        try {
            // Simuler l'envoi du formulaire (vous pouvez ajouter ici votre appel API)
            await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulation de délai
            console.log('Formulaire soumis:', formData);
            setSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error('Erreur lors de l\'envoi du formulaire:', error);
        } finally {
            setLoading(false);
            setTimeout(() => setSubmitted(false), 3000);
        }
    };

    // Gestion des changements dans les champs du formulaire
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    return (
        <div className="contact-form-container" id="contact">
            <div className="contact-page__content">
                {/* Section gauche : Informations de contact */}
                <div className="contact-page__left">
                    <h2>Contactez-Nous</h2>
                    <p>Pour toute question, n'hésitez pas à nous contacter. Nous sommes là pour vous aider !</p>
                    <div className="contact-info">
                        <ul>
                            <li><FaPhone /> <a href="tel:0635628450">06 35 62 84 50</a></li>
                            <li><FaEnvelope /> <a href="mailto:info@Biblio-marrakech.ma">info@Biblio-marrakech.ma</a></li>
                            <li><FaMapMarkerAlt /> Bibliothèque de Ville, Avenue Mohammed V, Marrakech</li>
                        </ul>
                    </div>
                </div>

                {/* Section droite : Formulaire de contact */}
                <div className="form-card animate__animated animate__fadeInUp animate__delay-6s">
                    <h1 className="h1 animate__animated animate__fadeIn animate__delay-5s">Écrivez-nous un message</h1>
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
                </div>

                {/* Message de succès */}
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