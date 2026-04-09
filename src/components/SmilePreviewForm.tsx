import { useState } from 'react';
import { Error, Form, Input, Label, Thanks } from '@/FormComponents';
import { BigArrowBtn } from './buttons';

export interface FileInfo {
    name: string;
    size: number;
    content: string;
    type: string;
}
export const extractFileInfo = async (file: File): Promise<FileInfo> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            if (!reader.result) {
                return reject('Failed reading file.');
            }
            resolve({
                name: file.name,
                size: file.size,
                content: reader.result.toString(),
                type: file.type,
            });
        };
        reader.onerror = error => reject(error);
    });
};
export const SmilePreviewForm = () => {
    const [submit, setSubmit] = useState<'init' | 'submitting' | 'submitted' | 'error'>('init');

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmit('submitting');

        const formData = new FormData(e.currentTarget);
        const data: Record<string, string | FileInfo> = {};

        for (const [name, value] of formData.entries()) {
            if (value instanceof File) {
                if (value.size) data[name] = await extractFileInfo(value);
            } else {
                data[name] = value;
            }
        }

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

        setSubmit('submitted');
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            if (e.target.files[0].size > 6291457) {
                alert('File is larger than 6mb!');
                e.target.value = '';
            }
        }
    };

    return (
        <Form onSubmit={handleSubmit} submit={submit === 'submitted' || submit === 'error'}>
            <h2>Smile Design Preview</h2>
            <p>Upload a recent photo of yourself and we’ll be in touch as soon as possible.</p>
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
            <Label htmlFor="file">
                <span>
                    Upload Photo<strong>*</strong>
                </span>
                <input
                    type="file"
                    id="file"
                    name="file"
                    accept=".pdf,.doc,.docx,.jpg,.png,.heic"
                    onChange={handleFileUpload}
                    required
                />
                <p style={{ margin: 0 }}>
                    <i>6mb max file size limit</i>
                </p>
            </Label>
            <BigArrowBtn disabled={submit === 'submitting'} type="submit">
                {submit === 'submitting' ? 'Submitting...' : 'Submit'}
            </BigArrowBtn>
            <Thanks submit={submit === 'submitted'} setSubmit={setSubmit} />
            <Error error={submit === 'error'} />
        </Form>
    );
};
