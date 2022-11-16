
import styled from "styled-components"
import { useState, useRef } from "react";
import emailjs from 'emailjs-com'
import { MUISnackbar } from "./MUISnackbar";
export const EmailForm = () => {
    const [inputFocus, setInputFocus] = useState(false);
    const [emailSuccess, setEmailSuccess] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const emailForm = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_b32ugi9', 'template_mtwb7c4', emailForm.current, 'CMupmoA-oclsNxE4f')
        .then(res=>{
            console.log(res);
            setEmailSuccess(true);
            e.target.reset();
        }).catch(err=>{
            setEmailError(true);
            console.log(err)
        })
    }
    return (
        <>
        <Form ref={emailForm} onSubmit={sendEmail}>
            <InputGrid>
                <div>
                    <Label htmlFor='phone' inputFocus={inputFocus}>Phone (required)</Label>
                    <Input name='phone' id='phone' type='tel' required onFocus={()=>{
                        setInputFocus(true)
                    }}/>
                </div>
                <div>
                    <Label htmlFor='email' inputFocus={inputFocus}>Email (required)</Label>
                    <Input name='email' id='email' type='email' required onFocus={()=>{
                            setInputFocus(true)
                        }}/>
                </div>
                <div className="grid-span-2">
                    <Label htmlFor="name" inputFocus={inputFocus}>Name (required)</Label>
                    <Input name='name' id='name' type='text' required onFocus={()=>{
                        setInputFocus(true)
                    }}/>
                </div>
                <div className="grid-span-2">
                    <Label htmlFor='message' inputFocus={inputFocus}>Message <span className="align-right">(required)</span></Label>
                    <textarea name='message' id='message' required style={{width: '100%'}} onFocus={()=>{
                        setInputFocus(true)}}/>
                </div>
            </InputGrid>
            <SubmitBtn type='submit'>Send</SubmitBtn>
        </Form>
        <MUISnackbar emailSuccess={emailSuccess} emailError={emailError} setEmailSuccess={setEmailSuccess} setEmailError={setEmailError}/>
        </>
    )

}

const Form = styled.form`

    display: flex;
    flex-direction: column;
    grid-template-columns: repeat(2, 1fr);
    gap: 4px;
    color: var(--soft-white);
    width: 80%;


    @media screen and (max-width: 900px) {
        width: 80%;
    }

    textarea {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    resize: none;
    height: 100px;
    border: none;
    border-bottom: 1px solid #fff;
    background: inherit;
    outline: none;
    }
    `

const InputGrid = styled.div`
    display: grid;
    gap: 40px;
    width: 100%;
    .grid-span-2 {
        grid-column: span 2
    }
    `

const Input = styled.input`
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    width: 100%;
    background: inherit;
    border: none;
    border-bottom: 1px solid var(--soft-white);
    outline: none;
`

const Label = styled.label`
    position: absolute;
    transition: all 0.1s ease-in-out;
    transform: ${props=>props.inputFocus === true ? 'translateY(-120%)' : 'translateY(-10%)'};
    color: ${props=>props.inputFocus ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.8)'};
    .align-right {
    }`

const SubmitBtn = styled.button`
    font-family: inherit;
    background: inherit;
    border: 1px solid var(--soft-white);
    color: var(--soft-white);
    cursor: pointer;
    padding: 6px 15px;
    margin-top: 6px;
    width: 200px;
    font-size: inherit;
    transition: all 0.1s ease-in-out;
        &:hover,
        &:focus {
            transform: scale(1.01);
        }`