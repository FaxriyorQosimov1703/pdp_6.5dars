import React, { Component } from 'react';
import My from './myComponent'

export default class App extends Component {
    state = {
        active: true
    }

    onClicked = () => {
            this.setState({
                active: true
            })
    }

    onsClicked = () => {
            this.setState({
                active: false
            })
    }

    render() {
        const {active} = this.state
        return (
            <div className="container">
                <div className="border mt-5">
                    <div className="row">
                        <div className="col-4">
                            <button className="border p-3 m-3" onClick={this.onClicked}>show</button>
                            <button className="border p-3 m-3" onClick={this.onsClicked}>hide</button>

                        </div>
                        <div className="col-8">
                            <div className="border p-5 m-4">

                                {
                                    active?<My  />: ''
                                }
                                
                                
                                
                                <hr/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
