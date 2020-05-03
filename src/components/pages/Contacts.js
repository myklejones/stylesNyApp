import React, { Component } from 'react'

class Contacts extends Component {
    render() {
        return (
            <section className="my-5 py-5">
                <div className="container">
                    <div className="well well-sm">
                        <h3><strong>Our Location</strong></h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <h1 className="container">
                        <iframe 
                        src="https://www.google.com/maps/d/embed?mid=12ZH7uGx2XupW7pmZ24hZ521TdhxL5NuR"
                         style={{
                        border:'0',
                         width: '100%',
                         height: '315px',
                         frameborder: '0'
                         }} allowFullScreen ></iframe>
                        </h1>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contacts; 