import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "./constant";

const Slider = () => {
    const [slideImg, setSlideImg] = useState([]);  // Images ko store karne ke liye state
    const [currentIndex, setCurrentIndex] = useState(0); // Current image index track karne ke liye state
    const [autoSlide, setAutoSlide] = useState(true); // Auto slide ko control karne ke liye state

    useEffect(() => {
        const fetchData = async () => {
            
            try {
                const response = await axios.get(API_URL); // API call
                setSlideImg(response.data.hits); // Response se images ko set karo
            } catch (err) {
                console.log("ERROR.......", err); // Agar error aaye to console me show hoga
            }
        };

        fetchData();
    }, []);


    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slideImg.length - 1 ? 0 : prevIndex + 1 // Agar last image pe hai to pehle waale image pe jao
        );
    };


    useEffect(() => {
        if (autoSlide && slideImg.length > 0) {
            const interval = setInterval(nextSlide, 1000); // 1 second baad next image
            return () => clearInterval(interval); // Clean up, agar component destroy ho toh interval clear ho
        }
    }, [autoSlide, slideImg]); // AutoSlide aur slideImg ke change hone pe effect chalega


    const handleMouseEnter = () => {
        setAutoSlide(false); // Hover karne par autoSlide false
    };


    const handleMouseLeave = () => {
        setAutoSlide(true); // Hover se hatane par autoSlide true
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="h-[15rem] w-[30rem] flex items-center justify-between px-4">

                <div onClick={nextSlide} className="cursor-pointer">
                    <i className="ri-arrow-left-line text-white text-2xl"></i>
                </div>


                <div
                    className="border-1 rounded-md border-white h-[18rem] w-[20rem] overflow-hidden flex items-center justify-center"
                    onMouseEnter={handleMouseEnter} // Stop slider on hover
                    onMouseLeave={handleMouseLeave} // Start slider when mouse leaves
                >
                    {slideImg.length > 0 ? (
                        <img
                            src={slideImg[currentIndex].webformatURL}
                            alt="Image"
                            className="h-full w-full object-cover rounded-lg"
                        />
                    ) : (
                        <p>Loading...</p> // Loading text jab tak images nahi aati
                    )}
                </div>


                <div onClick={nextSlide} className="cursor-pointer">
                    <i className="ri-arrow-right-line text-white text-2xl"></i>
                </div>
            </div>
        </div>
    );
};

export default Slider;

