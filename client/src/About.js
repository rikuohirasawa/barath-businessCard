import styled from "styled-components"
export const About = () => {
    return (
        <Wrapper>
            <p>Since 2021, I have lead a team of developer and business strategists in creating automotive
                solutions for both businesses and customers.
            </p>
            <a href='https://mechmonkey.io/' target='_blank' rel='noreferrer' className="hover-btn">About MechMonkey</a>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    font-weight: 300;
    opacity: 0.8;
    width: 85%;

    .hover-btn {
    background: var(--black);
    font-size: inherit;
    color: var(--soft-white);
    border: 1px solid var(--soft-white);
    padding: 10px 25px;
    cursor: pointer;
    display: inline-block;
    transition: all .2s ease-in-out;

    &:hover,
    &:focus {
        transform: scale(1.02);
    }


}
`