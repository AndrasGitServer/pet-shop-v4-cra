import React, {useState} from 'react';



const PetComponent = props => {

  // useState is a Hook function that will give back an array
  // The array contains a primitive variable or an object
  // depending how we initialize it
  // and also will give back a function to update the state.
  // (the primitive variable or an object).

  const [petsReceived, setPetsReceived] = useState(1);

 
  const pet_fun = event => {
    console.log(event);         // Synthetic event
    console.log(event.target);
    event.target.style["backgroundColor"] =  props.backgroundColor ;
    event.target.style.color = props.color;
    //event.target.style.color = "white";

    setPetsReceived( petsReceived + 1);

    // *** Lifting State ***
    console.log('*** props =',props);

    // *** The last props.infoToParent() call is the one that counts,
    // *** in other words is the one that is going to be in state
    // (added in the array in App.js)

    // props.infoToParent(props.species);
    // props.infoToParent( [ {animal:'dog'}, { animal: 'Rabbit'} ] );    
    // props.infoToParent("=> This is a string message from the pet!!!");

    props.infoToParent(`* ${props.noise} -> The ${props.species} has been petted ${petsReceived} time(s)`);
  }



  return(

    <fieldset>
      <legend> { props.species } </legend>
      <button onClick={ pet_fun  }>Pet the { props.species }</button>
    </fieldset>
  
  );

} // PetComponent functional component ***


export default PetComponent;

