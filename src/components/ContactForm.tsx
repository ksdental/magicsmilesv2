import { useState } from 'react';
import { PatternFormat } from 'react-number-format';
import { Error, Form, FormFlex, Input, Label, Thanks } from '@/FormComponents';
import { BigArrowBtn } from './buttons';
import { siteInfo } from './layout/NavLinks';
import { CLink } from './CLink';

export const ContactForm = () => {
    const [submit, setSubmit] = useState<'init' | 'submitting' | 'submitted' | 'error'>('init');

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmit('submitting');

        const data = Object.fromEntries(new FormData(e.currentTarget));

        await fetch(`https://api.${window.location.host}/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(() => {
                setSubmit('submitted');
                e.target.reset();
            })
            .catch(() => {
                setSubmit('error');
            });
    };

    return (
        <Form
            onSubmit={handleSubmit}
            submit={submit === 'submitted' || submit === 'error'}
            id="contact-form"
        >
            <h2>Contact Us</h2>

            <p>
                To book an <CLink to={siteInfo.appointmentLink}>appointment</CLink>, Click{' '}
                <CLink to={siteInfo.appointmentLink}>here</CLink>.
            </p>
            <FormFlex>
                <Label htmlFor="firstName">
                    <span>
                        First Name<strong>*</strong>
                    </span>
                    <Input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        required
                    />
                </Label>
                <Label htmlFor="lastName">
                    <span>
                        Last Name<strong>*</strong>
                    </span>
                    <Input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        required
                    />
                </Label>
            </FormFlex>

            <FormFlex>
                <Label htmlFor="email">
                    <span>
                        Email<strong>*</strong>
                    </span>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="your-email@email.com"
                    />
                </Label>
                <Label htmlFor="phone">
                    <span>
                        Phone<strong>*</strong>
                    </span>
                    <PatternFormat
                        type="tel"
                        format="+1 (###) ###-####"
                        customInput={Input}
                        placeholder="123 456-7890"
                        id="phone"
                        name="phone"
                        required
                        pattern="^(\+1)[ ](\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$"
                    />
                </Label>
            </FormFlex>

            <Label htmlFor="message">
                <span>Your message</span>
                <Input
                    as="textarea"
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="your message..."
                    required
                />
            </Label>
            <BigArrowBtn disabled={submit === 'submitting'} type="submit">
                {submit === 'submitting' ? 'Sending...' : 'Submit'}
            </BigArrowBtn>
            <Thanks submit={submit === 'submitted'} setSubmit={setSubmit} />
            <Error error={submit === 'error'} />
            <p style={{ margin: '40px 0 0', fontStyle: 'italic', fontSize: '85%' }}>
                I understand the information disclosed in this form may be subject to re-disclosure
                and may no longer be protected by HIPAA privacy regulations and the HITECH Act.
            </p>
        </Form>
    );
};
