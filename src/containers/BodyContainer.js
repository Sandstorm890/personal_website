import React from 'react'
import AboutBlurb from '../components/AboutBlurb'
import AboutBody from '../components/AboutBody'
import Header from '../components/Header'

class Body extends React.Component {
    render () {
        return (
            <div className="mt-5">
                <AboutBlurb />
                <AboutBody />
            </div>
        )
    }
}

export default Body