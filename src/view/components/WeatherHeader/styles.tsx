import styled from 'styled-components';

// Images
// import cloudyImg from '../../../assets/images/weather-icon-cloudy.png';
// import rainyImg from '../../../assets/images/weather-icon-rainy.png';
// import sunnyImg from '../../../assets/images/weather-icon-sunny.png';

type weatherProps = {
    imgWeather?: string,
};

export const Head = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 60px;
`;

export const Icon = styled.div`
    margin-right: 30px;
    background-size: contain;
    background-repeat: no-repeat;
    height: 88px;
`;

export const CurrentIcon = styled(Icon)<weatherProps>`
    width: 90px;
    ${({ imgWeather }) => imgWeather && {
        backgroundImage: `url(${imgWeather})`,
    } }
`;

export const CurrentDate = styled.div`
    display: flex;
    flex-direction: column;
`;

export const WeekDay = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 25px;
    color: #fff;
    display: inline-block;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const MonthDay = styled.span`
    font-family: 'Roboto', sans-serif;
    font-weight: 200;
    font-size: 14px;
    color: #fff;
    text-transform: uppercase;
`;
