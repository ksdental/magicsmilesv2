import { Accordion } from '../AccordionPrimitive';
import { DrAccordionItem } from './DrAccordionItem';
import { StaticImage } from 'gatsby-plugin-image';
import { ArrowBtn, PlainBtn } from '@/buttons';
import { CLink } from '@/CLink';
import { css } from '@emotion/react';
import useWindowSize from '@s/hooks/useWindowSize';
import { Fragment, useState } from 'react';
import styled from '@emotion/styled';
import { ReactComponent as ChevronIcon } from '@a/icons/chevron.svg';
import { flexCenter, textStyles } from '@/layout/styles/classes';
import { ReactComponent as CrossIcon } from '@a/icons/cross.svg';
import { getNavLink } from '@/layout/NavLinks';

const Grid = styled.div`
    display: grid;

    > * {
        grid-area: 1/1;
    }
`;

const DView = styled.div<{ value: string }>`
    display: grid;
    isolation: isolate;
    opacity: ${({ value }) => (value === '0' ? 1 : 0)};
    transition: opacity 0.3s ease-in-out;
    visibility: ${({ value }) => (value === '0' ? 'visible' : 'hidden')};
    height: 700px;

    > * {
        grid-area: 1/1;
    }

    > .gatsby-image-wrapper {
        z-index: -1;

        ::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1;
            background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
        }
    }

    @media (min-width: 1600px) {
        height: 900px;
    }
`;

const Flex = styled.div`
    display: flex;
`;

const Btn = styled(PlainBtn)`
    display: flex;
    align-items: stretch;
    flex-direction: column;
    justify-content: flex-end;
    max-width: 20%;
    flex: 1;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    padding: 0 20px 40px;

    > h3 {
        margin: 0 0 48px;

        > strong {
            margin-left: 0.5ch;
        }

        > span {
            ${flexCenter};
            margin: 0 auto 20px;
            border: 2px solid ${({ theme }) => theme.colors.white};
            width: 50px;
            height: 50px;
            border-radius: 50%;
            transition:
                background-color 0.3s ease-in-out,
                transform 0.3s ease-in-out;

            > svg {
                width: 16px;
                height: 16px;
                transform: rotate(-180deg);
                transition: transform 0.3s ease-in-out;

                path {
                    fill: ${({ theme }) => theme.colors.white};
                    transition: fill 0.3s ease-in-out;
                }
            }
        }
    }

    > p {
        ${textStyles};
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
        font-weight: 700;
    }

    :hover,
    :focus {
        > p {
            opacity: 1;
        }

        > h3 {
            > span {
                background-color: ${({ theme }) => theme.colors.white};
                > svg {
                    transform: none;

                    path {
                        fill: ${({ theme }) => theme.colors.gray};
                    }
                }
            }
        }
    }

    :not(:first-of-type) {
        border-left: 1px solid ${({ theme }) => theme.colors.halfWhite};
    }
`;

const CloseButton = styled(PlainBtn)`
    ${flexCenter};
    width: 50px;
    height: 50px;
    position: absolute;
    top: 30px;
    right: 30px;
    border: 2px solid ${({ theme }) => theme.colors.halfWhite};
    border-radius: 50%;
    z-index: 3;

    > svg {
        width: 16px;
        height: 16px;

        path {
            transition: fill 0.3s ease-in-out;
        }
    }

    :hover,
    :focus {
        background-color: ${({ theme }) => theme.colors.white};
        > svg {
            path {
                fill: ${({ theme }) => theme.colors.gray};
            }
        }
    }
`;

const CloseBtn = ({ setValue }: { setValue?: (value: string) => void }) => (
    <CloseButton
        onClick={() => (setValue ? setValue('0') : null)}
        aria-label="Close doctor profile"
    >
        <CrossIcon />
    </CloseButton>
);

const Items = ({ setValue }: { setValue?: (value: string) => void }) => (
    <Fragment>
        <DrAccordionItem
            setValue={setValue}
            value="1"
            t={
                <p>
                    Anatoly Bensianoff,<strong>DDS</strong>
                </p>
            }
        >
            <CloseBtn setValue={setValue} />
            <StaticImage
                src="../../../assets/images/doctors/anatoly.jpg"
                alt="Dr. Anatoly Bensianoff"
                layout="fullWidth"
            />
            <div>
                <p>
                    Dr. Anatoly Bensianoff earned his Doctor of Dental Surgery Degree from the NYU
                    College of Dentistry in 2001 and completed his residency at Staten Island
                    Hospital in 2001. Drawn to dentistry after volunteering as a resident’s
                    assistant in a dental clinic, Dr. Bensianoff loves to help patients alleviate
                    pain and educate them, giving them the tools they need to maintain a healthy
                    mouth for their lifetime.
                </p>

                <p>
                    Dr. Bensianoff is an active member of the International Congress of
                    Implantologists and takes many advanced continuing education courses each year
                    to provide his patients with the highest quality dentistry available.
                </p>

                <p>
                    Dr. Bensianoff enjoys reaching out to the local community and has hosted several
                    free emergency dental treatment events which provides care to underprivileged
                    and uninsured residents of the community.
                </p>

                <ArrowBtn
                    as={CLink}
                    to={getNavLink('meet our doctors')}
                    css={css`
                        margin-top: 20px;
                    `}
                >
                    Meet our doctors
                </ArrowBtn>
            </div>
        </DrAccordionItem>

        <DrAccordionItem
            setValue={setValue}
            value="2"
            t={
                <p>
                    Sviatlana Stsiatsevich,<strong>DDS</strong>
                </p>
            }
        >
            <CloseBtn setValue={setValue} />
            <StaticImage
                src="../../../assets/images/doctors/sviatlana.jpg"
                alt="Dr. Sviatlana Stsiatsevich"
                layout="fullWidth"
            />
            <div>
                <p>
                    Dr. Sviatlana (Dr. Lana) was born and raised in Belarus, small, but beautiful
                    country located in the central part of the Europe. Her first dental degree she
                    received in 2007 from Belarusian State Medical University. She practiced general
                    dentistry at her home country for 4 years, focusing mostly on general dentistry.
                </p>

                <p>
                    In the USA she graduated from Virginia Commonwealth University School of
                    Dentistry. Since then she is practicing general dentistry in NJ.
                </p>

                <p>
                    Dr. Lana joined our office in 2021, and her main focus is comprehensive approach
                    to a dental care with great and long lasting results. She strives to help
                    patients meet their oral health needs and make them confident with their smiles.
                    As a member of Magic Smile Dental team she shares the same values with the rest
                    of the team: compassion, kindness, empathy and professionalism. In her free
                    time, Dr. Lana enjoys traveling and exploring NY and local restaurants as well
                    as spending time with family and friends.
                </p>

                <ArrowBtn
                    as={CLink}
                    to={getNavLink('meet our doctors')}
                    css={css`
                        margin-top: 20px;
                    `}
                >
                    Meet our doctors
                </ArrowBtn>
            </div>
        </DrAccordionItem>

        <DrAccordionItem
            setValue={setValue}
            value="3"
            t={
                <p>
                    Alexandra Burgos,<strong>DMD</strong>
                </p>
            }
        >
            <CloseBtn setValue={setValue} />
            <StaticImage
                src="../../../assets/images/doctors/burgos.jpg"
                alt="Dr. Alexandra Burgos"
                layout="fullWidth"
            />
            <div>
                <p>
                    Dr. Burgos, a New Jersey native, earned her Bachelor’s Degree from Rutgers
                    University-New Brunswick and continued her education at Rutgers School of Dental
                    Medicine (formerly UMDNJ). During her time at Rutgers, she was selected for the
                    Community Oriented Dental Education (CODE) program, providing dental care to
                    underserved populations in South New Jersey. She completed a one-year residency
                    at Hackensack University Medical Center to further enhance her clinical skills.
                    Dr. Burgos is a certified Invisalign provider and a current American Academy of
                    Clear Aligners member. She is also dedicated to advancing her expertise through
                    continuing education, ensuring she stays updated with the latest advancements in
                    dentistry.
                </p>

                <ArrowBtn
                    as={CLink}
                    to={getNavLink('meet our doctors')}
                    css={css`
                        margin-top: 20px;
                    `}
                >
                    Meet our doctors
                </ArrowBtn>
            </div>
        </DrAccordionItem>

        <DrAccordionItem
            setValue={setValue}
            value="4"
            t={
                <p>
                    Yakov Yakubov,<strong>DMD</strong>
                </p>
            }
        >
            <CloseBtn setValue={setValue} />
            <StaticImage
                src="../../../assets/images/doctors/placeholder.jpg"
                alt="Dr. Yakov Yakubov"
                layout="fullWidth"
            />
            <div>
                <p>
                    Dr. Yakubov is a board-certified Oral and Maxillofacial Surgeon who earned his
                    dental and medical degrees from Columbia University, where he was awarded prizes
                    in Oral Surgery and Oral Pathology. He completed specialty training in Oral and
                    Maxillofacial Surgery at New York-Presbyterian Hospital, Columbia University
                    Medical Center, including a year of general surgery training. In his final year,
                    he served as chief resident.
                </p>

                <p>
                    Dr. Yakubov has published in the Journal of Oral and Maxillofacial Surgery, the
                    Journal of Oral Surgery, Oral Medicine, Oral Pathology, and Oral Radiology. He
                    holds BLS, ACLS, PALS, and ATLS certifications and is a member of the American
                    Association of Oral and Maxillofacial Surgeons.
                </p>

                <ArrowBtn
                    as={CLink}
                    to={getNavLink('meet our doctors')}
                    css={css`
                        margin-top: 20px;
                    `}
                >
                    Meet our doctors
                </ArrowBtn>
            </div>
        </DrAccordionItem>

        <DrAccordionItem
            setValue={setValue}
            value="5"
            t={
                <p>
                    Valeriia Ivanova,<strong>DMD</strong>
                </p>
            }
        >
            <CloseBtn setValue={setValue} />
            <StaticImage
                src="../../../assets/images/doctors/valeriia.jpg"
                alt="Dr. Valeria Ivanova"
                layout="fullWidth"
            />
            <div>
                <p>
                    Dr. Valeriia Ivanova has been helping people smile with confidence since 1999.
                    After graduating with honors from Kharkiv Medical University in Ukraine, she
                    dedicated her career to restorative dentistry—bringing back not only healthy
                    teeth, but also the joy and confidence that comes with a great smile. For over
                    15 years, Dr. Ivanova ran her own dental clinic in Kharkiv, where patients knew
                    her for her gentle touch, attention to detail, and genuine care. In 2025, she
                    completed her training at Rutgers School of Dental Medicine and earned her
                    license to practice in New Jersey, bringing her decades of experience to our
                    community. Whether you’re coming in for a check-up, a restoration, or a complete
                    smile makeover, she’s here to help you feel welcome, understood, and cared for
                    every step of the way.
                </p>

                <ArrowBtn
                    as={CLink}
                    to={getNavLink('meet our doctors')}
                    css={css`
                        margin-top: 20px;
                    `}
                >
                    Meet our doctors
                </ArrowBtn>
            </div>
        </DrAccordionItem>
    </Fragment>
);

const DesktopView = ({ value, setValue }: { value: string; setValue: (value: string) => void }) => (
    <DView value={value}>
        <StaticImage src="../../../assets/images/doctors/bg.jpg" alt="Magic Smile Dental office interior" layout="fullWidth" />
        <Flex>
            <Btn onClick={() => setValue('1')}>
                <h3>
                    <span>
                        <ChevronIcon />
                    </span>
                    Anatoly Bensianoff, <strong>DDS</strong>
                </h3>
                <p>read more</p>
            </Btn>
            <Btn onClick={() => setValue('2')}>
                <h3>
                    <span>
                        <ChevronIcon />
                    </span>
                    Sviatlana Stsiatsevich, <strong>DDS</strong>
                </h3>
                <p>read more</p>
            </Btn>
            <Btn onClick={() => setValue('3')}>
                <h3>
                    <span>
                        <ChevronIcon />
                    </span>
                    Alexandra Burgos, <strong>DMD</strong>
                </h3>
                <p>read more</p>
            </Btn>
            <Btn onClick={() => setValue('4')}>
                <h3>
                    <span>
                        <ChevronIcon />
                    </span>
                    Yakov Yakubov, <strong>DMD</strong>
                </h3>
                <p>read more</p>
            </Btn>
            <Btn onClick={() => setValue('5')}>
                <h3>
                    <span>
                        <ChevronIcon />
                    </span>
                    Valeria Ivanova, <strong>DMD</strong>
                </h3>
                <p>read more</p>
            </Btn>
        </Flex>
    </DView>
);

export const MeetDrAccordion = () => {
    const { width } = useWindowSize();
    const [value, setValue] = useState('0');
    console.log(value);
    return (
        <Fragment>
            {width < 1023 ? (
                <Accordion type="single" collapsible={true} defaultValue="1">
                    <Items />
                </Accordion>
            ) : (
                <Grid>
                    <DesktopView setValue={setValue} value={value} />
                    <Accordion
                        type="single"
                        orientation="horizontal"
                        css={theme => css`
                            background-color: ${theme.colors.darkBlue};
                            transition: opacity 0.3s ease-in-out;
                            visibility: ${value === '0' ? 'hidden' : 'visible'};
                            opacity: ${value === '0' ? 0 : 1};
                        `}
                        value={value}
                    >
                        <Items setValue={setValue} />
                    </Accordion>
                </Grid>
            )}
        </Fragment>
    );
};
