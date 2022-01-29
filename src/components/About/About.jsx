import React from 'react';
import './About.css';
import {SiHiveBlockchain, SiStrapi, SiFsecure} from "react-icons/si";
import {VscServerProcess} from "react-icons/vsc";
import AboutCard from "./AboutCard";

const About = () => {
    const data = [
        {
            id: 1,
            icon: <SiHiveBlockchain/>,
            title: 'Reliable, tamper-proof network',
            subtitle: "Use decentralization, trusted nodes, premium data, and cryptographic proofs to connect highly accurate and available data/APIs to any smart contract",
        },
        {
            id: 2,
            icon: <SiStrapi/>,
            title: 'Seamless connection to any API',
            subtitle: "Build on a flexible framework that can retrieve data from any API, connect with existing systems, and integrate with any current or future blockchain",
        },
        {
            id: 3,
            icon: <SiFsecure/>,
            title: "Proven, ready-made solutions",
            subtitle: "Integrate pre-built, time-tested oracle solutions that already secure tens of billions in smart contract value for market-leading decentralized applications."
        },
        {
            id: 4,
            icon: <VscServerProcess/>,
            title: 'Secure off-chain computation',
            subtitle: "'Use a decentralized network of DeFi Keeper nodes to automate contracts, mitigating risk of manual interventions and centralized servers",
        }
    ]

    return (
        <div className="about">
            <div className="container">
                <div>
                    <h2>A Growing Protocol Ecosystem</h2>
                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi
                        distinctio ea soluta
                        voluptatibus? Aperiam at deserunt dolore iusto quaerat quis quos unde, vero voluptatem
                        voluptatibus?
                        Commodi magni nesciunt optio.
                    </p>
                </div>
                <div className="card-container">
                    {
                        data.map(((card, key)=> {
                            return (
                                <div className='card' key={key.id}>
                                    <AboutCard title={card.title} subtitle={card.subtitle} icon={card.icon}/>
                                </div>
                            )
                        }))
                    }
                </div>
                <a href="#" className="btn">Use DeFI</a>
            </div>
        </div>
    );
};

export default About;