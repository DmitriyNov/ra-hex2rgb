import { useState } from "react";

function Converter () {
    const [rgb, setRGB] = useState({r: "255", g: "136", b: "112", fault: false}); // Цвет года 2024
    const [hex, setHex] = useState("#ff8870");
    const body = document.querySelector("html");

    const onValueTyped = (event) => {
        const {value} = event.target;
        const currentRGB = {...rgb};
        setHex(value);

        if (value.length < 7) {
            return
        }

        if (value.length > 7) {
            setRGB({...rgb, fault: true});
            body.style.backgroundColor = "red"
            return
        }

        const currentHex = {
            r: value.slice(1, 3),
            g: value.slice(3, 5),
            b: value.slice(5, 7),
        }

        currentRGB.r = parseInt(currentHex.r, 16);
        currentRGB.g = parseInt(currentHex.g, 16);
        currentRGB.b = parseInt(currentHex.b, 16);

        console.log(currentRGB);

        if (!currentRGB.r || !currentRGB.g || !currentRGB.b) {
            setRGB({...rgb, fault: true});
            body.style.backgroundColor = "red"
        } else {
            setRGB({...currentRGB, fault: false});
            body.style.backgroundColor = value;
        }
    };

    return (
        <div className="converter">
            <input type="text" name="hex" className="hex" value={hex} onChange={onValueTyped}></input>
            <div className="rgb">
                <p className={rgb.fault ? "rgb-text fault-text" : "rgb-text"}>
                    {rgb.fault ? "АААААААААААААААААААААААААААААААААААААААAAAАААААААAAAAAAАААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААAAAAAAAAААААААААААААААААААААААА" : "rgb(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ")"}
                </p>
            </div>
        </div>
    )
}

export default Converter
