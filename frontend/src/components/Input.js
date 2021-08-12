import React from 'react';

function Input({type,Icon,placeholder}){
    return(
        <div className="form_input_container">
            <Icon></Icon>
            <input className="form_input" type={type} placeholder={placeholder} />
        </div>
    );
}

export default Input;