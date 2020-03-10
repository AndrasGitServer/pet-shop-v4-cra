import React, {useState} from 'react';


const PetForm = props => {


    const [species, setSpecies] = useState('');
    const [noise, setNoise] = useState('');
    const [backgroundColor, setBC] = useState('');
    const [color, setColor] = useState('');


    const addPet = event => {

        event.preventDefault();
    
        // it can be written also:  let newPet = { color, noise, backgroundColor, species };
        // in JS if the keys and the values are the same ! 
        let newPet = {
          color: color,
          noise: noise,
          backgroundColor: backgroundColor,
          species: species
        }
    
        console.log( newPet );

        // setNew_pets is not going to be used in this component in another file
        // setNew_pets( [...new_pets, newPet] );

        // Lifting State
        props.giveAPetToTheParent ( newPet );
    
        setNoise('');
        setSpecies('');
        setBC('#ffffff');
        setColor('#000000');
    }


    return(

        <form onSubmit={ addPet } className='form-2'>
          <p>Form-2</p>
          <p>Species <input type="text" onChange={ event => setSpecies( event.target.value ) }  value={species}/>  </p>
          <p>Noise <input type="text" onChange={ event => setNoise( event.target.value ) } value={noise}/>  </p>
          <p>Background <input type="color" onChange={ event => setBC( event.target.value ) } value={backgroundColor}/>  </p>
          <p>Text Color <input type="color" onChange={ event => setColor( event.target.value ) } value={color}/></p>
          <input type="submit" />
        </form>

    );


} // PerForm component *************


export default PetForm;


