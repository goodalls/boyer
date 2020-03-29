import React from 'react';
import "./Navigation.scss";
import {
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function () {
    return (
        <div className="Navigation">
            <div align="center"><a href="index.htm" class="style4">HOME</a></div>
            <div align="center"><a href="about.htm" class="style4">ABOUT ME</a></div>
            <div align="center"><a href="services.htm" class="style4">SERVICES</a></div>
            <div align="center"><a href="faq.htm" class="style4">FAQ</a></div>
            <div align="center"><a href="contact.htm" class="style4">CONTACT ME</a></div>
        </div> /*NAVIGATION*/
    )
};
