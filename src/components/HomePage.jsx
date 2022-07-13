import { useEffect, useState } from "react";

async function wait(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

let greeting = ['', 'N', 'Na', 'Nam', 'Nama', 'Namas', 'Namast', 'Namaste', 'Namaste,', 'Namaste, ', 'Namaste, W', 'Namaste, Wo', 'Namaste, Wor', 'Namaste, Worl', 'Namaste, World', 'Namaste, World!'];

function HomePage(props) {
    let idx = 0;
    let [loading, setLoading] = useState(true);
    let [greet, setGreet] = useState(greeting[idx]);
    let [select, setSelect] = useState(false);

    useEffect(() => {
        async function start() {
            for (let i = 0; i < greeting.length; i++) {
                if (i === 4) setSelect('twitter');
                if (i === 8) setSelect('linkedin');
                if (i === 12) setSelect('github');
                if (i === greeting.length - 1) setSelect(false);
                setGreet(greeting[i]);
                await wait(300);
            }
        }
        start();
    }, [loading]);

    return (
        <div className="home-page">
            <div className="greeting">
                {greet}
                <div className="line">|</div>
            </div>
            <div className="name">I'm Erick!</div>
            <div className="container-icons">
                <img src="/twitter-icon.png" className="twitter-icon" style={{ transform: select === 'twitter' ? 'scale(1.5)' : 'scale(1)' }} alt="twitter icon" />
                <img src="/linkedin-icon.png" className="linkedin-icon" style={{ transform: select === 'linkedin' ? 'scale(1.5)' : 'scale(1)' }} alt="linkedin icon" />
                <img src="/github-icon.png" className="github-icon" style={{ transform: select === 'github' ? 'scale(1.5)' : 'scale(1)' }} alt="github icon" />
            </div>
            <div className="container-button">
                <div className="container-emoji">👋🏻</div>
                <button className="touch">Get in Touch</button>
            </div>
        </div>
    )
}

export default HomePage;