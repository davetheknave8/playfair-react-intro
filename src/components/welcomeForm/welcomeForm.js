import React, { Component } from 'react';

class WelcomeForm extends Component {

    handleChange = event => {
        console.log(event.target.value);
    }


    render(){
        return(
        <div>
            <p>Welcome welcome welcome</p>
            <input type="text" onChange={this.handleChange} />
        </div>
        )
    }
}


export default WelcomeForm;
