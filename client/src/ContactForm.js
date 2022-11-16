import styled from "styled-components"
import { EmailForm } from "./EmailForm"
import {BsArrowRightCircle} from 'react-icons/bs'

export const ContactForm = ({menuOpen, setMenuOpen}) => {
    return (
        <Wrapper open={menuOpen}>
            <div className="content">
                <h2>Get in Touch.</h2>
                <EmailForm/>
            </div>
            <button className='back-btn' onClick={()=>{setMenuOpen(false)}}><BsArrowRightCircle/></button>
        </Wrapper>

    )
}

const Wrapper = styled.div`
    visibility: ${props=>(props.open ? 'visible' : 'hidden')};
    transform: translateX(${props=>props.open ? 0 : 100}vw);
    width: 100%;
    max-height: 900px;
    position: fixed;
    top: 0px;
    bottom: 0px;
    right: 0px;
    box-shadow: -10px 0px 30px -15px rgba(2,12,27,0.7);
    z-index: 10;
    transition: all .5s ease-in-out;
    margin: 0;
    background: var(--black);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;

    .content {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 40px 0 0 40px;
        gap: 36px;
    }
    .back-btn {
        position: absolute;
        top: 40px;
        right: 20px;
        font-size: 24px;
        background: inherit;
        color: var(--soft-white);
        border: none;
    }

`