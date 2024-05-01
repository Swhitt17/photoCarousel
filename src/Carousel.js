import React, {useState} from "react";
import Card from "./Card"
import "./Carousel.css"


const Carousel = ({photos, title}) => {
    const [currCardInd, setCurrCardInd] = useState(0);
 

    const currCard = photos[currCardInd];
    const total = photos.length;

    function goForward(){
        setCurrCardInd(currCardInd + 1);
    }

    function goBackward(){
        setCurrCardInd(currCardInd - 1);
    }


    return (
        <div className="Carousel">
            <h1>{title}</h1>
            <div className="Carousel=main"> 
            
            <i
            className={currCardInd === 0 ? "bi bi-hidden-left-arrow-left-circle" : "bi bi-arrow-left-circle"}
            onClick={goBackward}
            />
            <Card 
             caption={currCard.caption}
             src={currCard.src}
             currNum={currCardInd + 1}
             totalNum={total}
            />
            
            <i 
            className={currCardInd === 2 ? "bi bi-hidden-right-arrow-right-circle" : "bi bi-arrow-right-circle"}
            onClick={goForward}
            />
           
            </div>
        </div>
    );
}

export default Carousel;