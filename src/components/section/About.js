    import React from 'react'
    import Skills from '../layouts/Skills'
    import { about, languages, frontend, backend, db_cloud_container, section2title } from '../../profile'
    import serverGif from '../../styles/server.gif'
    import webGif from '../../styles/webGif.gif'
    import dbGif from '../../styles/dbGif.gif'

    const About = () => {
        return (
            <div id="about" className="effect2">
                <div data-aos="zoom-in-up" data-aos-once="true" className="row">
                <div className="" id="not-dark2"></div>
                <div className="text-center">
                    <div className="">
                    <h1 id="About" className="red-line">{section2title}</h1>
                    </div>
                    <p className="lead w-70 text-center mx-auto">
                        {about.paragraph}  
                    </p>
                </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div id="Skills"> 

                    <div className='row d-flex justify-content-left' style={{fontSize: '20px', fontWeight: '600', position: 'relative'}}>
                        <img style={{width: 'fit-content', height: 'fit-content', position: 'inherit', left: '0px', top: '-10px'}} src={serverGif}></img>
                        Backend 
                    </div>
                    <div className="row d-flex justify-content-center skills">
                        {backend.map((x) => 
                            <Skills key={x.name} faClass={x.faClass} svg={x.svg} label={x.name} source={x.source}/>
                        )}
                    </div> 

                    <div className='row d-flex justify-content-left' style={{fontSize: '20px', fontWeight: '600', position: 'relative'}}>
                    <img style={{width: 'fit-content', height: 'fit-content', position: 'inherit', left: '0px', top: '-10px'}} src={webGif}></img>
                        Frontend
                    </div>
                    <div className="row d-flex justify-content-center skills">
                        {frontend.map((x) => 
                            <Skills key={x.name} faClass={x.faClass} svg={x.svg} label={x.name} source={x.source}/>
                        )}
                    </div> 

                    <div className='row d-flex justify-content-left' style={{fontSize: '20px', fontWeight: '600'}}>
                        <img style={{width: 'fit-content', height: 'fit-content', position: 'inherit', left: '0px', top: '-10px'}} src={dbGif}></img>
                        Database, Cloud & Container Technologies
                    </div>
                    <div className="row d-flex justify-content-center skills">
                        {db_cloud_container.map((x) => 
                            <Skills key={x.name} faClass={x.faClass} svg={x.svg} label={x.name} source={x.source}/>
                        )}
                    </div> 

                </div>

            </div>

        )
    }

    export default About
