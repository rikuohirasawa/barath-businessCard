import { useState } from "react"
import styled from "styled-components"
import { Titles } from "./Titles";
import { ContactBtns } from "./ContactBtns";
import { About } from "./About";
import { ContactInfo } from "./ContactInfo";
import { Socials } from "./Socials";
import { ContactForm } from "./ContactForm";
export const BusinessCard = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <Wrapper>
            <Titles/>
            <ContactBtns setMenuOpen={setMenuOpen}/>
            <About/>
            <ContactInfo/>
            <Socials/>
            <ContactForm menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        </Wrapper>
    )   
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    max-width: 450px;
    max-height: 900px;

    @media only screen and (min-width: 500px) {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }

    `
    