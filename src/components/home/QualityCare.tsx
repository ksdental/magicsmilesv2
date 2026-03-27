import { CircledDigit } from '@/CircledDigit';
import { CircleImgSection } from '@/CircleImgSection';
import useWindowSize from '@s/hooks/useWindowSize';
import { StaticImage } from 'gatsby-plugin-image';
import { Fragment } from 'react';

export const QualityCare = () => {
    const { width } = useWindowSize();
    return (
        <CircleImgSection
            title={
                <h2>
                    Quality Care in <strong>Total Comfort</strong>
                </h2>
            }
        >
            {width < 1023 ? (
                <Fragment>
                    <div>
                        <StaticImage
                            src="../../../assets/images/home/quality/1.png"
                            alt="dr anatoly shaking hands with a patient in dental office"
                            width={415}
                            height={432}
                        />
                        <CircledDigit>1</CircledDigit>
                        <h3>High-Quality Care</h3>
                        <p>
                            Affordable dentistry should never mean sacrificing quality. We use the
                            highest quality materials and most advanced techniques to ensure you
                            always get the best possible outcomes.
                        </p>
                    </div>

                    <div>
                        <StaticImage
                            src="../../../assets/images/home/quality/2.png"
                            alt="patient in dental office"
                            width={415}
                            height={432}
                        />
                        <CircledDigit>2</CircledDigit>
                        <h3>Comprehensive Services</h3>
                        <p>
                            Whether you need routine care or specialty procedures, we provide
                            everything you need in the comfort of a dental office you already know
                            and love.
                        </p>
                    </div>
                </Fragment>
            ) : (
                <StaticImage
                    src="../../../assets/images/home/quality/3.jpg"
                    alt="premium care and comprehensive services"
                    width={1300}
                    height={650}
                />
            )}
        </CircleImgSection>
    );
};
