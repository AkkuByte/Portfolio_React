import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './hoverbar.css';

function Hoverbar() {
    const pillRef = useRef();

    useGSAP(() => {
        gsap.fromTo(pillRef.current, 
            {
                opacity: 0,
                scale: 0.1,
            },
            {
                opacity: 1,
                scale: 1,
                duration: 1,
                delay: 0.5, // Slightly reduced delay/duration for a snappier feel
                ease: 'back.out(1.7)',
            }
        );
    }, []);

    return (
        <div className="hover_bar_wrapper">
            <div ref={pillRef} className="hover_bar" id='Pill'>
                <a href="#Home">Home </a>
                <a href="#About">About</a>
                <a href="#Project">Project</a>
                <a href="#Contact">Contact</a>
            </div>
        </div>
    );
}

export default Hoverbar;