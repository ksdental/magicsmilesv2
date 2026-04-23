import BgArticle, { BgArticleBox } from '@/BgArticle';
import { BigArrowBtn } from '@/buttons';
import { scrollToSection } from '@/layout/Nav';
import { StaticImage } from 'gatsby-plugin-image';

export const Technology = () => {
    return (
        <BgArticle centerImage>
            <div>
                <StaticImage
                    src="../../../assets/images/home/tech.png"
                    alt="Doctor pointing at a screen displaying teeth structure"
                    layout="fullWidth"
                />
                <BgArticleBox>
                    <h2>
                        <strong>State-of-the-Art Technology</strong> for Precision Care{' '}
                    </h2>
                    <p>
                        Our practice is equipped with the latest technology to provide you with the
                        highest standard of care right here in-house.
                    </p>

                    <p>
                        From digital imaging to laser treatments, our advanced tools help us achieve
                        precise results, reduce treatment time, and ensure comfort. Experience
                        modern dentistry with a personalized touch.
                    </p>
                </BgArticleBox>
            </div>
            <BigArrowBtn onClick={() => scrollToSection('/about-us/#module-3')} iconFirst>
                Learn More
            </BigArrowBtn>
        </BgArticle>
    );
};
