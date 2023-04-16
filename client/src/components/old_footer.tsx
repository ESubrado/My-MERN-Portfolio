import React from "react";
import {Helmet} from "react-helmet" 

function Footer(){
    return (
        <Helmet>
            <script src = "https://code.jquery.com/jquery-3.4.1.min.js" type = "text/javascript" />
            <script src = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" type = "text/javascript" />  
        </Helmet>
    )
}

export default Footer;