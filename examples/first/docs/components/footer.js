import React, { Component } from 'react'
import styled from 'styled-components'

const Section = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #FFF;
    border-top: ${p => p.active ? `1px solid ${p.theme.colors.N500}` : 'none'};
    box-sizing: border-box;
`

const Container = styled.div`
    width: 100%;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 24px 32px;
    box-sizing: border-box;
    @media ${p => p.theme.device.tablet} {
        padding: 24px 64px;
        max-width: 1140px;
    }
    @media ${p => p.theme.device.desktop} {
        padding: 24px 56px;
        max-width: 1140px;
    }
`

const Rows = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
`
const Column = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    @media screen and (min-width: 768px) {
        width: 50%;
        align-items: unset;
    }
`

const Social = styled.div`
    margin: 10px 0 14px 0;
    display: flex;
    @media screen and (min-width: 768px) {
        margin: 10px 0 0 0;
        display: flex;
        justify-content: flex-end;
    }
`
const SocialItem = styled.a`
    margin: 0 12px 0 0;
    cursor: pointer;
    padding: 0;
    &:last-child {
        margin-right: 0px;
    }
`

const Copyrights = styled.p`
    font-size: 14px;
    font-weight: 200;
    margin: 10px 0 0 0;
    padding: 0;
`
const Item = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

`;

const Footer = (props) => {
        return (
            <Section>
                <Container>
                    <Rows>
                        <Column>
                            <Copyrights>Hamza Shahbaz © {new Date().getFullYear()}</Copyrights>
                        </Column>
                        <Column>
                            <Item>
                                <Social>
                                    <SocialItem href="http://linkedin.com/in/hamzashahbaz" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18px" height="18px" viewBox="0 0 430.117 430.118">
                                        <g>
                                            <path id="LinkedIn__x28_alt_x29_" d="M398.355,0H31.782C14.229,0,0.002,13.793,0.002,30.817v368.471
                                                c0,17.025,14.232,30.83,31.78,30.83h366.573c17.549,0,31.76-13.814,31.76-30.83V30.817C430.115,13.798,415.904,0,398.355,0z
                                                M130.4,360.038H65.413V165.845H130.4V360.038z M97.913,139.315h-0.437c-21.793,0-35.92-14.904-35.92-33.563
                                                c0-19.035,14.542-33.535,36.767-33.535c22.227,0,35.899,14.496,36.331,33.535C134.654,124.415,120.555,139.315,97.913,139.315z
                                                M364.659,360.038h-64.966V256.138c0-26.107-9.413-43.921-32.907-43.921c-17.973,0-28.642,12.018-33.327,23.621
                                                c-1.736,4.144-2.166,9.94-2.166,15.728v108.468h-64.954c0,0,0.85-175.979,0-194.192h64.964v27.531
                                                c8.624-13.229,24.035-32.1,58.534-32.1c42.76,0,74.822,27.739,74.822,87.414V360.038z M230.883,193.99
                                                c0.111-0.182,0.266-0.401,0.42-0.614v0.614H230.883z"/>
                                        </g>
                                        </svg>
                                    </SocialItem>
                                    <SocialItem href="http://github.com/hamzashahbaz" target="_blank">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22.3901 6.1221C21.3397 4.26181 19.8339 2.71905 18.0236 1.64843C16.195 0.552275 14.1146 -0.0169094 11.9999 0.000382574C9.88538 -0.0159626 7.80543 0.554177 5.97755 1.65118C4.16705 2.7208 2.66081 4.26261 1.60976 6.1221C0.540873 7.99003 -0.0154056 10.1228 0.000508655 12.292C-0.0231781 14.8943 0.780994 17.4328 2.28973 19.5183C3.75321 21.61 5.82505 23.1656 8.20411 23.959C8.30942 23.9918 8.42072 23.9987 8.52908 23.9791C8.63744 23.9595 8.73985 23.914 8.82808 23.8462C8.89366 23.7864 8.94587 23.7126 8.9811 23.63C9.01632 23.5473 9.03371 23.4577 9.03207 23.3675L9.02407 22.5022C9.01873 21.9583 9.01607 21.4837 9.01607 21.0783L8.65742 21.1416C8.3709 21.1885 8.08074 21.2074 7.79079 21.198C7.42665 21.1911 7.06367 21.1534 6.70551 21.0852C6.32331 21.0125 5.96352 20.8465 5.65623 20.601C5.33547 20.3525 5.09591 20.0088 4.9696 19.616L4.81361 19.2487C4.68206 18.9573 4.51687 18.6834 4.32163 18.4329C4.14572 18.1762 3.91189 17.9675 3.64033 17.8249L3.531 17.7451C3.45618 17.6896 3.38813 17.6249 3.32835 17.5525C3.27041 17.4857 3.22275 17.41 3.18702 17.3283C3.15635 17.254 3.18702 17.1907 3.26568 17.1439C3.40946 17.0845 3.56457 17.06 3.71899 17.0724L4.03098 17.1206C4.30999 17.1968 4.57241 17.327 4.80427 17.5044C5.11338 17.718 5.37253 17.9999 5.5629 18.3298C5.76965 18.7302 6.06692 19.0732 6.42953 19.3299C6.73026 19.5467 7.08667 19.6664 7.45348 19.6738C7.7522 19.6783 8.0506 19.6516 8.3441 19.594C8.58668 19.5432 8.82254 19.4629 9.04673 19.3546C9.09857 18.7266 9.37068 18.1396 9.81203 17.7038C9.27247 17.6497 8.73764 17.5536 8.21211 17.4163C7.70003 17.2717 7.20738 17.0619 6.74551 16.7918C6.26199 16.5225 5.83437 16.1579 5.48691 15.7187C5.11693 15.2195 4.839 14.6543 4.66695 14.0514C4.4417 13.2729 4.33378 12.4633 4.34696 11.6509C4.32066 10.4255 4.76436 9.23892 5.58157 8.3493C5.19734 7.28872 5.23666 6.11417 5.6909 5.08347C6.14974 5.00737 6.62015 5.08297 7.03483 5.29945C7.48387 5.47079 7.91975 5.6768 8.33877 5.91575C8.6152 6.08633 8.83741 6.23032 9.0054 6.34771C10.9692 5.79353 13.0413 5.79353 15.0051 6.34771L15.5984 5.9639C16.0549 5.68285 16.5361 5.44702 17.0357 5.25956C17.4287 5.06389 17.8718 5.00223 18.3009 5.08347C18.5311 5.59351 18.6603 6.14582 18.6809 6.70803C18.7015 7.27024 18.6131 7.83104 18.4209 8.35756C19.2383 9.24709 19.682 10.4337 19.6555 11.6592C19.668 12.4742 19.5601 13.2864 19.3356 14.0679C19.1667 14.678 18.8856 15.2487 18.5076 15.749C18.1545 16.1829 17.7253 16.5442 17.2423 16.8138C16.7804 17.0838 16.2878 17.2936 15.7757 17.4383C15.2502 17.5758 14.7154 17.6724 14.1758 17.7272C14.4653 18.0208 14.6882 18.3767 14.8286 18.7697C14.9689 19.1626 15.0233 19.5827 14.9878 19.9998V23.3771C14.9857 23.4667 15.002 23.5557 15.0358 23.6382C15.0696 23.7208 15.12 23.7949 15.1838 23.8558C15.2703 23.9238 15.3714 23.9695 15.4785 23.9891C15.5856 24.0088 15.6958 24.0017 15.7997 23.9686C18.179 23.1756 20.251 21.62 21.7141 19.528C23.2236 17.4389 24.0265 14.8962 23.9993 12.2906C24.0145 10.122 23.4582 7.98985 22.3901 6.1221V6.1221Z" fill="#0C1C3A"/>
                                        </svg>
                                    </SocialItem>
                                    <SocialItem href="http://instagram.com/hamzashahbaz.me" target="_blank">
                                        <svg width="18" height="18" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512">
                                            <g>
                                                <path d="M352,0H160C71.648,0,0,71.648,0,160v192c0,88.352,71.648,160,160,160h192c88.352,0,160-71.648,160-160V160
                                                        C512,71.648,440.352,0,352,0z M464,352c0,61.76-50.24,112-112,112H160c-61.76,0-112-50.24-112-112V160C48,98.24,98.24,48,160,48
                                                        h192c61.76,0,112,50.24,112,112V352z"/>
                                            </g>
                                            <g>
                                                <path d="M256,128c-70.688,0-128,57.312-128,128s57.312,128,128,128s128-57.312,128-128S326.688,128,256,128z M256,336
                                                        c-44.096,0-80-35.904-80-80c0-44.128,35.904-80,80-80s80,35.872,80,80C336,300.096,300.096,336,256,336z"/>
                                            </g>
                                            <g>
                                                <circle cx="393.6" cy="118.4" r="17.056"/>
                                            </g>
                                        </svg>
                                    </SocialItem>
                                </Social>
                            </Item>
                        </Column>
                    </Rows>
                </Container>
            </Section>
        )
}

export default Footer;

