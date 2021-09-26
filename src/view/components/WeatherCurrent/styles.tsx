import styled from 'styled-components';

//Images
import rainyImg from '../../../assets/images/rainy.png';
import humidityImg from '../../../assets/images/humidity.png';


export const CurrentWeatherContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 38px;
`;

export const Temperature = styled.p`
    position: relative;
    font-family: 'Roboto', sans-serif;
    font-weight: 200;
    font-size: 250px;
    line-height: 1;
    color: #fff;
    margin-bottom: 45px;

    ::after {
        position: absolute;
        /* top: 53px; */
        right: -55px;
        content: '';
        display: inline-block;
        width: 30px;
        height: 30px;
        border: solid 5px #fff;
        border-radius: 50%;
    }
`;

export const Meta = styled.p`
    span {
        font-family: 'Roboto', sans-serif;
        font-weight: 200;
        font-size: 19px;
        color: #fff;
        display: inline-flex;
        align-items: flex-start;

        :first-child {
            margin-right: 81px;
        }
    }
`;

export const Rainy = styled.span`
    ::before {
        content: '';
        display: inline-block;
        width: 26px;
        height: 26px;
        background-image: url(${rainyImg});
        margin-right: 11px;
    }
`;

export const Humidity = styled.span`
    ::before {
        content: '';
        display: inline-block;
        width: 19px;
        height: 28px;
        background-image: url(${humidityImg});
        margin-right: 11px;
    }
`;

