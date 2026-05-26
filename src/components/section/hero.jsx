import GsapTypewriter from "../UI/typewriter"
import './hero.css'
function Hero(){
    return (
        <section className="hero">
            <div className="tag">
                <GsapTypewriter/>
               <h1 className='second'>this is web development journey</h1>
            </div>
            <div className="image">
                image
            </div>
        </section> 
    );
}

export default Hero;