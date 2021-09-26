import styled from 'styled-components';

type dayProps = {
    img: string,
};

export const StyledDay = styled.div<dayProps>`
    position: relative;
    width: 130px;
    height: 160px;
    background-color: #C486BB;
    color: #fff;
    padding-top: 30px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        display: inline-block;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 18px;
        margin-bottom: 90px;
    }
    
    span {
        position: relative;
        font-family: 'Roboto', sans-serif;
        font-weight: 200;
        font-size: 30px;

        ::after {
            margin-left: 5px;
            transform: translateY(-15px);
            content: '';
            display: inline-block;
            width: 5px;
            height: 6px;
            border: solid 1px #fff;
            border-radius: 50%;
        }
    }

    &.selected {
        background-color: #D9A9CE;
    }
    

    ::before{
        position: absolute;
        top: 70px;
        content: '';
        display: block;
        width: 62px;
        height: 37px;
        background-image: url(${ (props) => props.img });
        background-size: contain;
        background-repeat: no-repeat;
    }

    :hover {
        background-color: #D9A9CE;
    }

`;
