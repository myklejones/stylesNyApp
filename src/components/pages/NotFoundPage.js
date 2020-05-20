import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

class NotFoundPage extends Component {
    render() {
        return (
          <NotFoundPage  className="container">
              <div className="row">
                  <div className="col-md-12">
                      <div className="error-template">
                          <h1>Ops!</h1>
                          <h2>Error 404 Not Found</h2>
                          <div className="error-details">
                              Sorry, an error occured. The requested page was not found!
                          </div>
                          <div className="error-actions">
                              <Link to="/" className="btn btn-outline-primary btn-lg">
                                  <i className="fas fa-home"/>&nbsp;Back To Main
                              </Link>
                              <Link className="btn btn-outline-secondary btn-lg">
                                  <i className="fas fa-envelope"/>&nbsp;Support
                              </Link>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque perspiciatis quis veritatis minus deserunt at officia amet! Quasi inventore vero, cupiditate harum vel dignissimos similique ab laudantium nostrum magni fuga aliquam odit nam architecto!
                          </div>
                      </div>
                  </div>
              </div>
          </NotFoundPage >
        )
    }
}

const NotFoundPage = styled.div`
.error-template {
    padding: 40px 15px;
    text-align: center;   
}

.error-actions {
    margin-top: 15px;
    margin-bottom: 15 px;
}

.btn{
    margin-right: 10px;
}
`


export default NotFoundPage;