"use client";
import React from "react";
import "../Homepage.css";
import "./aboutus.css";
import Link from "next/link";
import Image from "next/image";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import pic from "../../Assets/image (2).png";
import Navbar from "../../Components/Navbar/navbar";

function Aboutus() {

    return (
        <>
         <Navbar/>
            <div className="aboutus-container">
                <div className="home-aboutme">
                    <div className="home-abtme-heading">
                        <h1> ABOUT ME</h1>
                    </div>
                    <div className="home-abtme-content">
                        <h1>I am a front-end developer based in Sydney. Has Mechanical Engineering background. </h1>
                        <p>
                            I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill.
                        </p>
                        <div className="home-bnr-buttons">
                            <button className="home-contact-btn">Download Resume</button>
                            <div className="home-social-links">
                                <Link href="#" className="home-social-icon"><LinkedInIcon /></Link>
                                <Link href="#" className="home-social-icon"><GitHubIcon /></Link>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="aboutus-pic">
                    <Image src={pic} alt="pic" />
                </div>

                <div className="home-aboutme">
                    <div className="home-abtme-heading">
                        <h1> MY CAPABILITIES</h1>
                    </div>
                    <div className="home-abtme-content">
                        <p>
                            I am always looking to add more skills.Morbi egestas neque eu blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at purus faucibus tristique ut et dolor.
                        </p>
                        <div className="aboutus-skills">
                            <button>HTML</button>
                            <button>CSS</button>
                            <button>JAVASCRIPT</button>
                            <button>REACTJS</button>
                            <button>NEXTJS</button>
                            <button>TAILWIND CSS</button>
                            <button>FIGMA</button>
                            <button>JQUERY</button>
                            <button>PYTHON</button>

                        </div>
                    </div>

                </div>

                <div className="home-aboutme">
                    <div className="home-abtme-heading">
                        <h1>MY EXPERIENCE</h1>
                    </div>
                    <div className="home-abtme-content">
                        <div className="aboutus-role">
                            <h2>Freelance Developer</h2>
                            <p>Nov 2023 — Present </p>
                        </div>
                        <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <div className="aboutus-role">
                            <h2>Freelance Developer <br/><span>Roos Tech</span></h2>
                            <p>Nov 2023 — Present </p>
                        </div>
                        <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>

                </div>

                <div className="homeConnect" id="contact-us">
                    <div className="homeConnectDetails">
                        <h1>LETS CONNECT</h1>
                        <p>
                            Say hello at <span className="highlight">robertgarcia@gmail.com</span>
                        </p>
                        <p>
                            For more info, heres my <span className="highlight">resume</span>
                        </p>
                        <div className="homeConnectSocial">
                            <Link href="#" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon/>
                            </Link>
                            <Link href="#" target="_blank" rel="noopener noreferrer">
                                <GitHubIcon/>
                            </Link>
                            
                        </div>
                    </div>

                    <div className="homeConnectForm">
                        <form action="#" method="post">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="John Doe" required />

                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email" required />

                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" name="subject" placeholder="Enter subject" required />

                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="5" placeholder="Enter your message" required></textarea>

                            <button type="submit">SUBMIT</button>
                        </form>
                    </div>

                </div>


            </div>

        </>
    )

}

export default Aboutus;