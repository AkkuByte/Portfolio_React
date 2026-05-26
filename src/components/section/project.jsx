import './project.css'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.from("#box", {
    x: 1000,
    duration: 2,
    delay: 1,
});



function Project() {
    return (
        <section id="Project">
            hello i am Project Section.
            <div id="box">i am box.</div>
        </section>
    );
}
export default Project;