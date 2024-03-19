// CSS Style
import Social from "../Social";
import "./landingPage.css";

// import React
import React, { useEffect } from "react";

// import
import { ReactTyped } from "react-typed";

const myAsset =[
    {
    id: "1",
    img: "/images/shapes/1x/Asset 1.png",
    dataSpeed: "1",
},
    {
    id: "2",
    img: "/images/shapes/1x/Asset 4.png",
    dataSpeed: "-1",
},
    {
    id: "3",
    img: "/images/shapes/1x/Asset 4.png",
    dataSpeed: "2",
},
    {
    id: "4",
    img: "/images/shapes/1x/Asset 9.png",
    dataSpeed: "-2",
},{
    id: "5",
    img: "/images/shapes/1x/Asset 9.png",
    dataSpeed: "1",
},
    {
    id: "6",
    img: "/images/shapes/1x/Asset 8.png",
    dataSpeed: "-1",
},
    {
    id: "7",
    img: "/images/shapes/1x/Asset 5.png",
    dataSpeed: "2",
},
    {
    id: "8",
    img: "/images/shapes/1x/Asset 5.png",
    dataSpeed: "-2",
},
    {
    id: "9",
    img: "/images/shapes/1x/Asset 5.png",
    dataSpeed: "1",
},{
    id: "10",
    img: "/images/shapes/1x/Asset 10.png",
    dataSpeed: "-1",
},
    {
    id: "11",
    img: "/images/shapes/1x/Asset 7.png",
    dataSpeed: "2",
},
    {
    id: "12",
    img: "/images/shapes/1x/Asset 6.png",
    dataSpeed: "-2",
},
    {
    id: "13",
    img: "/images/shapes/1x/Asset 6.png",
    dataSpeed: "1",
},
    {
    id: "14",
    img: "/images/shapes/1x/Asset 10.png",
    dataSpeed: "-1",
},{
    id: "15",
    img: "/images/shapes/1x/Asset 10.png",
    dataSpeed: "2",
},
]

const myAsset2 =[
    {
    id: "1",
    img: "/images/shapes/2x/Asset 1.png",
    dataSpeed: "1",
},
    {
    id: "2",
    img: "/images/shapes/2x/Asset 1.png",
    dataSpeed: "-1",
},
    {
    id: "3",
    img: "/images/shapes/2x/Asset 2.png",
    dataSpeed: "2",
},
    {
    id: "4",
    img: "/images/shapes/2x/Asset 4.png",
    dataSpeed: "-2",
},{
    id: "5",
    img: "/images/shapes/2x/Asset 4.png",
    dataSpeed: "1",
},
    {
    id: "6",
    img: "/images/shapes/2x/Asset 3.png",
    dataSpeed: "-1",
},
    {
    id: "7",
    img: "/images/shapes/2x/Asset 3.png",
    dataSpeed: "2",
},
    {
    id: "8",
    img: "/images/shapes/2x/Asset 6.png",
    dataSpeed: "-2",
},
    {
    id: "9",
    img: "/images/shapes/2x/Asset 5.png",
    dataSpeed: "1",
}
]


export default function LandingPage() {

    useEffect(() => {
        const parallax = (e) => {
            document.querySelectorAll(".asset").forEach((layer) => {
                const speed = layer.getAttribute("data-speed");
                const x = (window.innerWidth - e.pageX * speed) / 100;
                const y = (window.innerHeight - e.pageY * speed) / 100;
                layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
            });
        };
        document.addEventListener("mousemove", parallax);
        return () => {
            document.removeEventListener("mousemove", parallax);
        };
    }, []);

    return (
        <div className="landingPage" id="Home">
             {myAsset2.map((x)=>{
                        return(
                            <img key={x.id} className={`asset asset-2-${x.id}`} data-speed={x.dataSpeed} src={x.img} alt="" />
                        )
                    })}
            <div className="container">
                <span className="rectangle">
                    {myAsset.map((x)=>{
                        return(
                            <img key={x.id} className={`asset asset-${x.id}`} data-speed={x.dataSpeed} src={x.img} alt="" />
                        )
                    })}
                </span>

                <div className="image-info">
                    <div className="image-container">
                        <div className="image">
                            <img src="/images/avatar3.png" />
                        </div>
                    </div>

                    <div className="info-container">
                        <div className="info">
                            <h1 className="name">
                                <span>Hey there !</span> <br /> I'm, devin
                            </h1>
                            <h2 className="skills">
                                <ReactTyped
                                    className="text-color"
                                    strings={
                                        (["Graphic designer"], ["Animator"], ["Video editor"])
                                    }
                                    typeSpeed={120}
                                    backSpeed={140}
                                    loop
                                ></ReactTyped>
                            </h2>
                        </div>
                    </div>
                </div>


                <Social />


            </div>
        </div>
    );
}
