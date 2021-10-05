// WeatherTypes
import { WeatherTypes } from '../../../bus/days/types';

// Images
import cloudyImg from '../../../assets/images/weather-icon-cloudy.png';
import rainyImg from '../../../assets/images/weather-icon-rainy.png';
import sunnyImg from '../../../assets/images/weather-icon-sunny.png';

type WeatherImgType = {
    [key in WeatherTypes]: string
}

export const WeatherIcons: WeatherImgType = {
    cloudy: cloudyImg,
    rainy:  rainyImg,
    sunny:  sunnyImg,
};
