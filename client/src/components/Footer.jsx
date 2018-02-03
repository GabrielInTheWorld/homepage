import React, {Component} from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

class Footer extends Component{
    render(){
        return(
            <div id="footer">
                <Grid>
                    <Row>
                        <Col xs={4} md={2} lg={2}>
                            <a className="foot-link" href="https://icons8.com/" target="_blank" rel="noopener noreferrer">Link zu icons8</a>
                        </Col>
                        <Col xs={4} md={2} lg={2}>
                            <a className="foot-link" href="https://unsplash.com/" target="-blank" rel="noopener noreferrer">Link zu Unsplash</a>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Footer