import React, {useRef, useState, useEffect} from "react";
import {
    ArrowBackIosRounded,
    ArrowForwardIosRounded,
} from "@material-ui/icons";

const Slider = (props) => {
    const {children} = props;

    const [isOverflow, setIsOverflow] = useState(false);
    const [currentPosition, setCurrentPosition] = useState(0);
    const [widthGap, setWidthGap] = useState(0);

    const slider = useRef(null);
    const slider_container = useRef(null);

    const slideWidth = slider?.current?.offsetWidth / 2;

    useEffect(() => {
        if (slider?.current?.offsetWidth < slider_container?.current?.offsetWidth) {
            setIsOverflow(true);
            setWidthGap(
                slider_container?.current?.offsetWidth - slider?.current?.offsetWidth
            );
        }
    }, []);

    const handleNext = () => {
        if (widthGap - currentPosition > slideWidth) {
            slider_container.current.style.transform = `translateX(${-(
                currentPosition + slideWidth
            )}px)`;
            setCurrentPosition((currentPosition) => currentPosition + slideWidth);
        } else {
            slider_container.current.style.transform = `translateX(${-widthGap}px)`;
            setCurrentPosition(widthGap);
        }
    };

    const handleBack = () => {
        if (currentPosition > slideWidth) {
            slider_container.current.style.transform = `translateX(${
                slideWidth - currentPosition
            }px)`;
            setCurrentPosition((currentPosition) => currentPosition - slideWidth);
        } else {
            slider_container.current.style.transform = `translateX(${0}px)`;
            setCurrentPosition(0);
        }
    };

    return (
        <div className="slider d-flex">
            <div className="slider-arrow d-flex align-items-center justify-content-start">
                {isOverflow && currentPosition !== 0 && (
                    <ArrowBackIosRounded onClick={() => handleBack()}/>
                )}
            </div>
            <div className="slider-container" ref={slider}>
                <div className="slider-container-div d-flex" ref={slider_container} >
                    {children}
                </div>
            </div>
            <div className="slider-arrow d-flex align-items-center justify-content-end">
                {isOverflow && currentPosition !== widthGap && (
                    <ArrowForwardIosRounded onClick={() => handleNext()}/>
                )}
            </div>
        </div>
    );
}

export default Slider;
