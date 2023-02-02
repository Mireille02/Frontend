import React from "react";

const Imagen = ({}) => {
    const logo = {
        url: "https://reactnative.dev/img/tiny_logo.png",
        width: 64,
        heigth: 64,
    }
    return (<Image source = {logo} />)
}
export default Imagen;