import React from "react";
import {Helmet} from "react-helmet" 

function Footer(){
    return (
        <footer className="footer container-fluid bg-dark text-white py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a className="border-bottom text-secondary" href="#">Your Site Name</a>, All Right Reserved.
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        {/* <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/}
                        Designed By <a className="border-bottom text-secondary" href="https://htmlcodex.com">HTML Codex</a>
                        <br/>Distributed By: <a className="border-bottom" href="https://themewagon.com" target="_blank">ThemeWagon</a>
                    </div>
                </div>
            </div>
        </footer>    
    )
}

export default Footer;