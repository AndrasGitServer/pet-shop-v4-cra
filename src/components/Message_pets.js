import React from 'react';



const Messages_pets = props => {


    return(
        <>
            <h3> &nbsp;&nbsp; In Messages_pets ! </h3>
            <h4> &nbsp;&nbsp; { props.message_to_display } </h4>
            {
                props.message_to_display.map( (mes, i) => 
                    <li key={i}> {mes} </li>
                )
            }

        </>
    );

} // ** Messages Components



export default Messages_pets;
