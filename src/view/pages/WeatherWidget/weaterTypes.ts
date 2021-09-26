// WeatherTypes
import { WeatherTypes } from '../../../bus/days/types';

// Images
import cloudyImg from '../../../assets/images/weather-icon-cloudy.png';
import rainyImg from '../../../assets/images/weather-icon-rainy.png';
import sunnyImg from '../../../assets/images/weather-icon-sunny.png';


type WeatrerImgType = {
    [key in WeatherTypes]: string
}

export const WeatrerImg: WeatrerImgType = {
    cloudy: cloudyImg,
    rainy:  rainyImg,
    sunny:  sunnyImg,
};
