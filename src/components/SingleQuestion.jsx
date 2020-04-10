import React, { Component } from 'react';

class SingleQuestion extends Component {

    render(){
        const answer = this.props.answer;
        console.log("answer", answer)

        if(!!answer.magic.answer) {
            return (
                <div className="singleQuestion">
                    <p>{answer.magic.question}</p>
                    <p>{answer.magic.answer}</p>
                </div>
            )
        }
        
    }
}

export default SingleQuestion;