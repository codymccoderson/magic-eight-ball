import React from 'react';
import SingleQuestion from './SingleQuestion';

const QuestionList = props => {
    const { answers } = props;

    return(
        <div>
           { answers.map(answer => (
               <SingleQuestion answer={answer}
               />
           ))}    
        </div>
    )
    
}

export default QuestionList;