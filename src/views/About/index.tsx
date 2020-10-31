import React from 'react';
import { Slide } from 'react-slideshow-image';
import './About.scss';
import 'react-slideshow-image/dist/styles.css'

const imageUrls = [
    'https://media.familyminded.com/3b/0d/3b0d80ed89394877a47899a513ca04bd.jpeg',
    'https://media.familyminded.com/ce/39/ce39903185b44964b9db839467e92260.jpg',
    'https://thumbs-prod.si-cdn.com/ttQ_J3nAhFMEyzSgmZOkfIEOzzs=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/5b/3e/5b3eefc6-3a12-45ad-8a46-f3ab1ab28901/istock-953069774.jpg',
];

export class About extends React.Component<IProps, IState> {
    public render() {
        return (
            <div>
                <Slide easing="ease">
                    {imageUrls.map(url => (
                        <div key={url} className="each-slide">
                            <div style={{'backgroundImage': `url(${url})`}}>
                                <span>Slide 1</span>
                            </div>
                        </div>
                    ))}
                </Slide>
            </div>
        );
    }
}

interface IProps {
}

interface IState {
}
