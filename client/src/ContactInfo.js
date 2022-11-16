import styled from "styled-components"
import {AiOutlinePhone, AiOutlineMail} from 'react-icons/ai'
import { ImLocation } from 'react-icons/im'
import { BsGlobe  }  from 'react-icons/bs'

export const ContactInfo = () => {
    return (
        <Wrapper>
            <h2>Contact</h2>
            <div>
                <AiOutlinePhone/> <span>+1(709)986-7390</span>
            </div>
            <div>
                <AiOutlineMail/> <span>barath.sundar@mechmonkey.io</span>
            </div>
            <div>
                <BsGlobe/> <span>www.mechmonkey.io</span>
            </div>
            <div>
                <ImLocation/><span>100 Signal Hill Rd #0100 St. John's, NL A1A1B3</span>
            </div>
        </Wrapper>

    )
}

const Wrapper = styled.div`
width: 85%;
display: flex;
flex-direction: column;
gap: 8px;
opacity: 0.8;

h2 {
    padding: 0;
    margin: 12px 0;
}

div {
    display: flex;
    align-items: center;
    gap: 8px;
}
`