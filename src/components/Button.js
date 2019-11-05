import React from 'react'
import "./button.css"

const Button = ({ isWhite, value }) => {
    return (
        <div data-value={value} className={isWhite ? "button white" : "button"}>
            <span role="img">{value}</span>
        </div>
    )
}
export default Button;