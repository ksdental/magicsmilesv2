import { useState } from 'react';
import { PatternFormat } from 'react-number-format';
import {
    Error,
    Form,
    FormFlex,
    Input,
    Label,
    RadioBtn,
    RadioBtns,
    Select,
    Thanks,
} from '@/FormComponents';
import { BigArrowBtn } from './buttons';

// not being used instead link is used

export const AppointmentForm = () => {
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
            id="appointment-form"
        >
            <h2>
                Schedule An <strong>Appointment</strong>
            </h2>

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

            <FormFlex>
                <Label>
                    <span>Desired Consult Date</span>
                    <FormFlex>
                        <Select name="consultDateMonth" id="consultDateMonth">
                            <option value="" hidden>
                                {' '}
                            </option>
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">January</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                        </Select>
                        <Select name="consultDateDay" id="consultDateDay">
                            <option value="" hidden>
                                {' '}
                            </option>

                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                        </Select>
                    </FormFlex>
                </Label>
                <RadioBtns>
                    <p>Preferred Method of Communication</p>
                    <div>
                        <RadioBtn>
                            <input
                                type="radio"
                                id="communication1"
                                name="communication"
                                value="Text"
                                required
                            />
                            <span>Text</span>
                        </RadioBtn>
                        <RadioBtn>
                            <input
                                type="radio"
                                id="communication2"
                                name="communication"
                                value="Phone"
                                required
                            />
                            <span>Phone</span>
                        </RadioBtn>
                        <RadioBtn>
                            <input
                                type="radio"
                                id="communication3"
                                name="communication"
                                value="Email"
                                required
                            />
                            <span>Email</span>
                        </RadioBtn>
                    </div>
                </RadioBtns>
            </FormFlex>

            <FormFlex>
                <RadioBtns>
                    <p>Are You an Existing or a New Patient?</p>
                    <div>
                        <RadioBtn>
                            <input
                                type="radio"
                                id="type1"
                                name="patient"
                                value="Existing Patient"
                                required
                            />
                            <span>Existing Patient</span>
                        </RadioBtn>

                        <RadioBtn>
                            <input
                                type="radio"
                                id="type2"
                                name="patient"
                                value="New Patient"
                                required
                            />
                            <span>New Patient</span>
                        </RadioBtn>
                    </div>
                </RadioBtns>
                <Label>
                    <span>Service Needed</span>
                    <Select name="services" id="services">
                        <option value="" hidden>
                            {' '}
                        </option>
                        <option value="New Patient Consult">New Patient Consult</option>
                        <option value="Cosmetic Dentistry: Veneers, Whitening, Orthodontics/Invisalign">
                            Cosmetic Dentistry: Veneers, Whitening, Orthodontics/Invisalign
                        </option>
                        <option value="Restorative Dentistry: Fillings, Bridge, Root Canal">
                            Restorative Dentistry: Fillings, Bridge, Root Canal
                        </option>
                        <option value="Dental Implants">Dental Implants</option>
                        <option value="Referral">Referral</option>
                        <option value="Emergency">Emergency</option>
                        <option value="Other">Other</option>
                    </Select>
                </Label>
            </FormFlex>

            <Label htmlFor="reason">
                <span>Reason for your visit</span>
                <Input
                    as="textarea"
                    id="reason"
                    name="reason"
                    rows={6}
                    placeholder="Reason for your visit..."
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
