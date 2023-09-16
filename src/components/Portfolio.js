import React from 'react';
import Placeholder from './images/Placeholder.png';
import ParkTalk from './images/ParkTalk.png';
import Hyperion from './images/Hyperion.png';
import StudyBuddy from './images/StudyBuddy.png';

function Portfolio() {
    return(
        <figure class="portfolio">
            <section id="project1" class="big-projects">
            <h4><a className="ProjectGitHub" href="https://github.com/Marinah1031/StudyBuddy">StudyBuddy</a></h4>
                <a href="https://github.com/Marinah1031/StudyBuddy"><img src={StudyBuddy} alt="Project1" /></a>
            </section>
            <section id="project2" class="small-projects">
            <h5><a className="ProjectGitHub" href="https://github.com/monstergog/Park-Talk">Park Talk</a></h5>
                <a href="https://park-talk-f4bac6c63267.herokuapp.com/"><img src={ParkTalk} alt="Project2" /></a>
            </section>
            <section id="project3" class="small-projects">
            <h5><a className="ProjectGitHub" href="https://github.com/monstergog/Project-Hyperion">Hyperion</a></h5>
                <a href="https://monstergog.github.io/Project-Hyperion/"><img src={Hyperion} alt="Project3" /></a>
            </section>
        </figure>
    );
}

export default Portfolio;