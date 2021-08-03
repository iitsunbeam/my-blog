import React from 'react'
import { Grid, Chip } from "@material-ui/core"

import Heading from '../Heading'
import Section from '../Section'

import "./index.css"
import HeadShot from "./pawan.PNG"



const About = () => {

    const skills = [ 
        "Java", "Python", "JavaScript", "Angular", "React","Spring Boot", "Oracle", "MySQL", "MongoDB", "Kubernetes", "Docker",
        "Kafka", "SSL", "Pivotal Cloud Foundry","Redhat Opeshift","AWS","Apache","Tomcat","Glassfish","Websphere"
    ]

    return <Section>
        <Grid container spacing={0}>
            <Grid item xs={12}>
                <Heading text="Hey there! I'm Pawan" align="right" />
            </Grid>
            <Grid item xs={12} sm={5}>
                <img src={HeadShot} className="portrait-photo img-center" alt="Pawan Patil"/>
            </Grid>
            <Grid item xs={12} sm={7}>
        
                <div className="about-text">
                    {
                        `
                        I'm a Fullstack Software Developer from Pune, India. I have a strong passion for building Scalable 
                        Software Platforms that add value to the End Users.
                        `
                    }
                </div>
                <div className="skill-tags">
                    {
                        skills.map(tag => <Chip 
                            variant="outlined" 
                            size="medium" label={tag}
                            clickable
                            className="skill-tag"
                        />)
                    }
                </div>
            </Grid>
        </Grid>
    </Section>
}
  
export default About;