"use client";
import React from "react";
import "./Homepage.css";
import Link from "next/link";
import Image from "next/image";
import profileimg from "../Assets/profile.png"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import work from "../Assets/work.png";


function Home() {
    return (
        <>
            <div className="home-container">
                <div className="home-banner">
                    <div className="home-bnr-text-sec">
                        <h1>Hi, I am <br /><span>Robert Garcia</span>.</h1>
                        <p>
                            A Sydney-based front-end developer passionate about building
                            accessible and user-friendly websites.
                        </p>
                        <div className="home-bnr-buttons">
                            <button className="home-contact-btn">Contact Me</button>
                            <div className="home-social-links">
                                <Link href="#" className="home-social-icon"><LinkedInIcon /></Link>
                                <Link href="#" className="home-social-icon"><GitHubIcon /></Link>
                            </div>
                        </div>
                    </div>

                    <div className="home-image-section">
                        <Image
                            src={profileimg} alt="Robert Garcia" className="home-profile-image"
                        />
                    </div>
                </div>

                <div className="home-features">
                    <div className="home-feature-heading">
                        <h1>Featured Projects</h1>
                        <p>Here are some of the selected projects that showcase my passion for front-end development.</p>
                    </div>

                    <div className="home-projects">
                        <div className="home-each-project">
                            <div className="home-prjt-img">
                                <Image src={work} alt="work" />
                            </div>
                            <div className="home-prjt-details">
                                <h1>Promotional landing page for our favorite show</h1>
                                <p>Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.</p>
                                <h4>PROJECT INFO</h4>
                                <div className="home-prjt-role role" >
                                    <p>Year</p>
                                    <p>2023</p>
                                </div>
                                <div className="home-prjt-role">
                                    <p>Role</p>
                                    <p>Front-end Developer</p>
                                </div>
                                <div className="home-prjt-live">
                                    <p>LIVE DEMO<ArrowOutwardIcon /> </p>
                                    <p>SEE ON GITHUB<GitHubIcon /></p>
                                </div>


                            </div>

                        </div>
                        <div className="home-each-project">
                            <div className="home-prjt-img">
                                <Image src={work} alt="work" />
                            </div>
                            <div className="home-prjt-details">
                                <h1>Blog site for World News</h1>
                                <p>Mastered CSS Grid complexities in building an innovative news homepage, navigating intricate design decisions for a seamless user experience. Leveraged the challenge to enhance skills in  front-end development.</p>
                                <h4>PROJECT INFO</h4>
                                <div className="home-prjt-role role" >
                                    <p>Year</p>
                                    <p>2023</p>
                                </div>
                                <div className="home-prjt-role">
                                    <p>Role</p>
                                    <p>Front-end Developer</p>
                                </div>
                                <div className="home-prjt-live">
                                    <p>LIVE DEMO<ArrowOutwardIcon /> </p>
                                    <p>SEE ON GITHUB<GitHubIcon /></p>
                                </div>


                            </div>

                        </div>
                        <div className="home-each-project">
                            <div className="home-prjt-img">
                                <Image src={work} alt="work" />
                            </div>
                            <div className="home-prjt-details">
                                <h1>E-commerce product page</h1>
                                <p>Successfully crafted an engaging product page featuring a dynamic lightbox gallery and seamless cart functionality, showcasing proficiency in JavaScript development.</p>
                                <h4>PROJECT INFO</h4>
                                <div className="home-prjt-role role" >
                                    <p>Year</p>
                                    <p>2023</p>
                                </div>
                                <div className="home-prjt-role">
                                    <p>Role</p>
                                    <p>Front-end Developer</p>
                                </div>
                                <div className="home-prjt-live">
                                    <p>LIVE DEMO<ArrowOutwardIcon /> </p>
                                    <p>SEE ON GITHUB<GitHubIcon /></p>
                                </div>


                            </div>

                        </div>

                    </div>
                </div>

                <div className="home-aboutme">
                    <div className="home-abtme-heading">
                        <h1> ABOUT ME</h1>
                    </div>
                    <div className="home-abtme-content">
                        <h1>I am a front-end developer based in Sydney. Has Mechanical Engineering background. </h1>
                        <p>
                            I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill.
                        </p>
                        <Link href="./aboutus"><h4>MORE ABOUT ME</h4></Link>
                    </div>

                </div>

                <div className="homeConnect">
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

    );
}

export default Home;
