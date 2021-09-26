import styled from 'styled-components';

// Images
// import cloudyImg from '../../../assets/images/weather-icon-cloudy.png';
// import rainyImg from '../../../assets/images/weather-icon-rainy.png';
// import sunnyImg from '../../../assets/images/weather-icon-sunny.png';

export const FilterContainer = styled.div`
    position: absolute;
    top: 2%;
    right: 2%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const Checkbox = styled.span`
    position: relative;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    text-transform: uppercase;
    color: #fff;
    display: inline-flex;
    align-items: center;
    margin-bottom: 25px;

    :hover {
    cursor: pointer;
    }

    ::after {
    content: '';
    display: inline-block;
    width: 25px;
    height: 25px;
    border: solid 1px #fff;
    border-radius: 3px;
    margin-left: 14px;
    }

    &.selected {
        ::before{
            content: '✓';
            position: absolute;
            right: 7px;
        }
    }
`;

export const CustomFieldsBox = styled.p`
    margin-bottom: 26px;
`;

export const CustomLabel = styled.label`
    display: inline-block;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    text-transform: uppercase;
    color: #fff;
    margin-right: 14px;
`;

export const CustomInput = styled.input`
    border-bottom: solid 1px #fff;
    border-top: none;
    border-right: none;
    border-left: none;
    background: transparent;
    width: 40px;
    outline: none;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
`;

export const FilterButton = styled.button`
    background-color: #C584BC;
    border: none;
    padding: 10px 15px;
    border-radius: 8px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 1px;
    color: #fff;
    text-transform: uppercase;

    :hover {
        cursor: pointer;
        background-color: #9665
    }
`;
