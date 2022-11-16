import styled from "styled-components";
import { BsLinkedin, BsInstagram, BsFacebook, BsTwitter }  from 'react-icons/bs'
import MechMonkeyIMG from './imgs/MechMonkey-LOGO.png'
export const Socials = () => {
    return (
        <Wrapper>
            <div className="social-container">
                <a className="social-link" href="https://www.linkedin.com/in/barathsundar/" target='_blank' rel='noreferrer'><BsLinkedin/></a>
                <a className="social-link" href='https://www.facebook.com/mechmonkey.io' target='_blank' rel='noreferrer'><BsFacebook/></a>
                <a className="social-link" href='https://www.instagram.com/mechmonkey.io/?igshid=YmMyMTA2M2Y%3D' target='_blank' rel='noreferrer'><BsInstagram/></a>
                <a className="social-link" href='https://twitter.com/mechmonkey_io'target='_blank' rel='noreferrer'><BsTwitter/></a>
                <a className="soocial-link" href="https://mechmonkey.io/" target='_blank' rel='noreferrer'><img src={MechMonkeyIMG} alt='the MechMonkey logo'/></a>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 85%;
    font-weight: 300;
    transform: translateY(-50px);

    img {
        height: 30px;
        margin-left: -6px;
    }

    .social-container {
    display: flex;
    align-items: center;
    gap: 24px;
    margin: 8px 0;
    }

    .social-link {
    opacity: 0.8;
    font-size: 24px;
    cursor: pointer;
    color: inherit;
    transition: all .2s ease-in-out;
    &:hover,
    &:focus {
        transform: scale(1.2);
    }
}
    img {
        transition: all .2s ease-in-out;
    &:hover,
    &:focus {
        transform: scale(1.2);
    }
}`