import React from 'react';
import avatar from './images/Avatar.png'

function Main() {
    return(
        <main id="introduction">
            <aside id="about-contact-nav" class="transparent">
                <h2>About me:</h2>
                <p>
                    My name is Alex Nguyen and I graduated from University of California San Diego with a B.S. in Cognitive Science,
                    focusing on Design and Interaction, which is an interdisciplinary field with an emphasis on statistics,
                    computer science, and psychology with the goals of understanding human cognition in order to improve artificial
                    intelligence and how people interact with technology.
                </p>

                <section id="contact">
                    <img src={avatar} alt="SelfPhoto"></img>
                    <ul>
                        <h3>Contact:</h3>
                        <li>Phone: <a href="#">805-405-4245</a></li>
                        <li>Email: <a href="#">amn002@ucsd.edu</a></li>
                        <li>Github: <a href="https://github.com/monstergog">https://github.com/monstergog</a></li>
                    </ul>
                </section>
            </aside>
            <nav id="project-navigation" class="transparent">
                <ul>
                    <li><a href="#project1">Project 1</a></li>
                    <li><a href="#project2">Project 2</a></li>
                    <li><a href="#project3">Project 3</a></li>
                </ul>
            </nav>
        </main>
    );
}

export default Main;