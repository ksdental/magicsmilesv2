import { useState } from 'react';
import { PatternFormat } from 'react-number-format';
import { Error, Form, Input, Label, Thanks } from '@/FormComponents';
import { BigArrowBtn } from './buttons';

export const DownloadForm = ({ downloadLink }: { downloadLink: string }) => {
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
                window.open(downloadLink, '_blank');
            })
            .catch(() => {
                setSubmit('error');
            });
    };

    return (
        <Form onSubmit={handleSubmit} submit={submit === 'submitted' || submit === 'error'}>
            <h2>Download “5 Mistakes To Avoid When Considering Dental Implants”</h2>

            <Label htmlFor="fullName">
                <span>
                    Full Name<strong>*</strong>
                </span>
                <Input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="First & Last Name"
                    required
                />
            </Label>
            <Label htmlFor="email">
                <span>
                    Email<strong>*</strong>
                </span>
                <Input type="email" id="email" name="email" required placeholder="Email Address" />
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

            <BigArrowBtn disabled={submit === 'submitting'} type="submit">
                {submit === 'submitting' ? 'Opening Link...' : 'Download PDF'}
            </BigArrowBtn>
            <Thanks submit={submit === 'submitted'} setSubmit={setSubmit} />
            <Error error={submit === 'error'} />
        </Form>
    );
};
