import styled from "styled-components"
import BarathAvatar from './imgs/BarathAvatar.jpeg'

export const Titles = () => {
    return (
        <Wrapper>
            <div className="flex-row">
                <h1>Barath Sundar</h1>
            </div>
            <div className="margin-top titles-container">
                <div>Chief Executive Officer</div>
                <div>MechMonkey</div>
            </div>
            <img src={BarathAvatar} alt='a young man in a suit standing in front of the ocean'/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
width: 100%;
background: linear-gradient(var(--dark-orange) 50%, var(--black));
height: 40%;
color: var(--black);

h1 {
    padding: 0;
    margin: 0;
    font-size: 28px;
}

.education-title {
    font-size: 16px;
    opacity: 0.8;
}
.flex-row {
    padding: 60px 40px 30px 40px;
    display: flex;
    align-items: center;
}

.titles-container {
    opacity: 0.8;
    padding: 0 40px;
    display: flex;
    flex-direction: column;
    gap: 4px;

}
div {
    font-weight: 300;
}
img {
    height: 140px;
    width: 140px;
    border-radius: 50%;
    position: absolute;
    right: 0px;
    top: 100px;
}
`