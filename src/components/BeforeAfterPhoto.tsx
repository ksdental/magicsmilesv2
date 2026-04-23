import styled from '@emotion/styled';
import * as Slider from '@radix-ui/react-slider';
import { ReactNode, useState } from 'react';
import { titleFontStyles } from './layout/styles/classes';

const Wrapper = styled.div<{ finalValue: string }>`
    display: grid;
    max-width: max-content;
    overflow: hidden;

    > .gatsby-image-wrapper {
        grid-area: 1/1;

        :first-of-type {
            z-index: 2;
            clip-path: ${({ finalValue }) => `inset(0 calc(100% - (${finalValue})) 0px 0px)`};

            ::before {
                ${titleFontStyles};
                line-height: 1;
                font-size: 12px;
                content: 'BEFORE';
                position: absolute;
                top: 50%;
                left: 10px;
                transform: translateY(-50%);
                z-index: 1;
                background-color: rgb(0, 16, 30);
                padding: 5px 12px;
                color: ${({ theme }) => theme.colors.white};
            }
        }

        :last-of-type {
            z-index: 1;

            ::before {
                ${titleFontStyles};
                line-height: 1;
                font-size: 12px;
                content: 'AFTER';
                position: absolute;
                top: 50%;
                right: 10px;
                transform: translateY(-50%);
                z-index: 1;
                background-color: rgb(0, 16, 30);
                padding: 5px 12px;
                color: ${({ theme }) => theme.colors.white};
            }
        }
    }
`;

const Root = styled(Slider.Root)`
    grid-area: 1/1;
    z-index: 3;
    position: relative;
    display: flex;
    align-items: center;
    user-select: none;
    touch-action: none;
    width: 100%;

    > span {
        height: 38px;
        width: 38px;
        border: 3px solid ${({ theme }) => theme.colors.white};
        border-radius: 50%;
        z-index: 3;
        cursor: grab;
        position: relative;

        :active {
            cursor: grabbing;
        }

        ::before,
        ::after {
            content: '';
            display: block;
            background-color: ${({ theme }) => theme.colors.white};
            position: absolute;
            left: 50%;
            width: 3px;
            transform: translateX(-50%);
            height: 1000px;
        }

        ::before {
            bottom: 100%;
        }

        ::after {
            top: 100%;
        }

        > span {
            display: block;
            width: 38px;
            height: 38px;
            position: relative;
            outline: none !important;
            transform: translate(-3px, -3px);

            ::before,
            ::after {
                content: '';
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                width: 0;
                height: 0;
                border: 6px inset transparent;
            }

            ::before {
                border-right: 6px solid ${({ theme }) => theme.colors.white};
                left: 3px;
            }

            ::after {
                border-left: 6px solid ${({ theme }) => theme.colors.white};
                right: 3px;
            }
        }
    }
`;

export const BeforeAfterPhoto = ({ children }: { children: ReactNode }) => {
    const [value, setValue] = useState(50);

    const handleValueChange = (number: number[]) => {
        setValue(number[0]);
    };

    // thumb offset due to width of slider thumb 38px;
    let offset = (19 - value * 0.38).toString();
    if (value === 0 || value === 100) offset = `0`;

    const finalValue = `${value}% + ${offset}px`;

    return (
        <Wrapper finalValue={finalValue}>
            {children}
            <Root value={[value]} onValueChange={handleValueChange} max={100}>
                <Slider.Thumb aria-label="before and after image comparison" />
            </Root>
        </Wrapper>
    );
};

/*

usage

<BeforeAfter>
    <StaticImage
        src="../../../../assets/images/services/advanced-facial-esthetics/platelet/before.jpg"
        alt="PRP treatment before photo"
        width={434}
        height={640}
    />
    <StaticImage
        src="../../../../assets/images/services/advanced-facial-esthetics/platelet/after.jpg"
        alt="PRF treatment after photo"
        width={434}
        height={640}
    />
</BeforeAfter>

*/
