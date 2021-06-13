import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";




const Footer = () => {
    return (
        <section className="container-fluid footer-section"  >
            <MDBFooter className="font-small pt-4 mt-4">
                <MDBContainer fluid className="text-center text-md-left">
                    <MDBRow>
                        <MDBCol md="3">
                            <h5 className="title">Footer Content</h5>
                            <p>
                                Here you can use rows and columns here to organize your footer
                                content.
            </p>
                        </MDBCol>
                        <MDBCol md="3">
                           
                            <ul class="footerLi" >
                            <h5 className="title text-center">Service</h5>
                                <li className="list-unstyled">
                                    <a href="#!">Dry Cleaning</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Faster Cleaning</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">quick Delivered</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Quick Received</a>
                                </li>
                            </ul>
                        </MDBCol>
                        <MDBCol md="3">
                        <ul class="" >
                            <h5 className="title text-center">Service</h5>
                                <li className="list-unstyled">
                                    <a href="#!">Dry Cleaning</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Faster Cleaning</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">quick Delivered</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Quick Received</a>
                                </li>
                            </ul>
                        </MDBCol>
                        <MDBCol md="3">
                        <ul class="" >
                            <h5 className="title text-center">Service</h5>
                                <li className="list-unstyled">
                                    <a href="#!">Dry Cleaning</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Faster Cleaning</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">quick Delivered</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Quick Received</a>
                                </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MD Abir Khan </a>
                    </MDBContainer>
                </div>
            </MDBFooter>
        </section>
    );
};

export default Footer;