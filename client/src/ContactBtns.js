import styled from "styled-components"
import {BsFillPersonPlusFill, BsPenFill}  from 'react-icons/bs'
import VCFDownload from './downloads/Barath_Sundar.vcf'

export const ContactBtns = ({setMenuOpen}) => {
    return (
        <Wrapper>
            <DownloadLink href={VCFDownload} download>Save Contact<BsFillPersonPlusFill/></DownloadLink>
            <Button onClick={()=>{setMenuOpen(true)}}>Get in Touch<BsPenFill/></Button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: auto;
    margin-top: 30px;
    padding: 0 40px;
    gap: 10px;

`
const DownloadLink = styled.a`    
    font-family: inherit;
    font-size: inherit;
    background: inherit;
    color: var(--soft-white);
    opacity: 0.8;
    border: 1px solid;
    padding: 10px 25px;
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none
`


const Button = styled.button`
    padding: 10px 25px;
    font-family: inherit;
    background: inherit;
    font-size: inherit;
    color: var(--soft-white);
    opacity: 0.8;
    border: 1px solid;
    display: flex;
    align-items: center;
    gap: 8px;
`
