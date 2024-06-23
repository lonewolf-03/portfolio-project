import "./Home.scss";
import MLogo from "../../assets/images/m-logo.png";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = ['o', 'h', 'a', 'm', 'e', 'd']
    const jobArray = [
      'c',
      'o',
      'm',
      'p',
      'u',
      't',
      'e',
      'r',
      ' ',
      'e',
      'n',
      'g',
      'i',
      'n',
      'e',
      'e',
      'r',
      'i',
      'n',
      'g',
      ' ',
      's',
      't',
      'u',
      'd',
      'e',
      'n',
      't',
      '.',
    ]
  
    useEffect(() => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000);
    }, [])
    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={letterClass}>i</span>
                        <br/>
                        <span className={letterClass}>I</span>
                        <img src={MLogo} alt="m-logo"/>
                        <AnimatedLetters letterClass={letterClass} idx={15} strArr={nameArray}/>
                        <br/>
                        <AnimatedLetters letterClass={letterClass} idx={22} strArr={jobArray}/>
                    </h1>
                    <Link to="/contact" className="flat-button">CONTACT ME</Link>
                </div>
            </div>
        </>
    );
}

export default Home;