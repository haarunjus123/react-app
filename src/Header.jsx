import React from "react";
import  './ Header.css'

const Header = () => {
    return(
        <div className="header">
            <h2>Claas CA204</h2>
            <div className="items">

                <ul>
                    <li><a href="#"> Home</a></li>
                    <li><a href="#"> Find Work</a></li>
                    <li><a href="#">  Career opp</a></li>
                    <li><a href="#"> About</a></li>
                </ul>
            </div>

        </div>
    )

}
export default Header;