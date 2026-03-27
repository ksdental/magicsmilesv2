import { BasicHero } from '@/BasicHero';
import { BottomBannerConsult } from '@/BottomBannerConsult';
import { CircledDigit } from '@/CircledDigit';
import { CircleImgSection } from '@/CircleImgSection';
import { StaticImage } from 'gatsby-plugin-image';
import { Fragment } from 'react';
export { Head } from '..';
export default function Page() {
    return (
        <Fragment>
            <BasicHero
                text="Meet Our Team - Linden, NJ
"
                title={
                    <h2>
                        Meet Our{' '}
                        <strong style={{ display: 'inline' }}> Excellent Dental Team</strong>
                    </h2>
                }
                image={
                    <StaticImage
                        src="../../../assets/images/about-us/hero.jpg"
                        alt="magic smiles dental staff"
                        layout="fullWidth"
                    />
                }
            />

            <CircleImgSection title={<h2>Meet The Team</h2>}>
                <div style={{ maxWidth: '295px' }}>
                    <StaticImage
                        src="../../../assets/images/about-us/meet-the-team/miguel.png"
                        alt="miguel"
                        width={415}
                        height={432}
                    />
                    <CircledDigit>1</CircledDigit>
                    <h3>Miguel</h3>
                    <p style={{ textTransform: 'uppercase' }}>REGISTERED DENTAL HYGIENIST</p>
                </div>

                <div style={{ maxWidth: '295px' }}>
                    <StaticImage
                        src="../../../assets/images/about-us/meet-the-team/dr.png"
                        alt="jackie"
                        width={415}
                        height={432}
                    />
                    <CircledDigit>1</CircledDigit>
                    <h3>Jackie</h3>
                    <p style={{ textTransform: 'uppercase' }}>REGISTERED DENTAL HYGIENIST</p>
                </div>
            </CircleImgSection>

            <BottomBannerConsult
                title={
                    <h2>
                        Get On The Path To<strong> Better Dental Health!</strong>
                    </h2>
                }
            >
                <StaticImage
                    src="../../../assets/images/about-us/meet-the-doctors/banner.jpg"
                    alt="happy couple sitting and smiling"
                    width={560}
                    height={380}
                />
            </BottomBannerConsult>
        </Fragment>
    );
}
