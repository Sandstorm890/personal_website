import React from 'react'

class AboutBody extends React.Component {
    render () {
        return (
            <div>
                <h3>About Me</h3>
                <img src={'images/zayne_photo.JPG'} className="img-fluid max-width: 100%"alt="Zayne"></img>
                <p>I worked in the event production industry as a production managerfor 6 years before leaving to pursue 
                    a career in technology. I got my feet wet in the field of web development over the course of a year of 
                    self-directed learning, and decided to dive in with Flatiron's full-time course in software engineering. 
                    I graduated in March of 2021 with a passion for creating beautiful and intuitive web-apps. 
                </p>
            </div>
        )
    }
}

export default AboutBody