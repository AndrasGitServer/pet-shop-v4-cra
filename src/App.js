import React, { useState } from 'react';
import './App.css';
import PetComponent from './components/PetComponents';
import Messages_pets from './components/Message_pets';
import PetForm from './components/PetForm';


const name = "Andrew";
// App can receive a prop from the file: index.js !
// then change the line App to App(props)


const pets_ara = [
  { species: 'Dingo',   noise: 'noise awooooo',       backgroundColor:'darkorange', color: 'white' },
  { species: 'Turtle',  noise: 'noise eating grapes', backgroundColor:'olive', color: 'yellow' },
  { species: 'Penguin', noise: 'noise kikiki',        backgroundColor:'yellow', color: 'blue' }
];



function App()  {
  
  const [messages_ara, setMessages_ara] = useState(['Starting messages !']);
  const [species, setSpecies] = useState('');
  const [noise, setNoise] = useState('');
  const [backgroundColor, setBC] = useState('');
  const [color, setColor] = useState('');

  // A new array of pets (new_pets) we will be adding our hard-coded pets_ara 
  // Our starting value array.
  const [new_pets, setNew_pets] = useState( pets_ara );


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

    setNew_pets( [...new_pets, newPet] );

    setNoise('');
    setSpecies('');
    setBC('#ffffff');
    setColor('#000000');

  }


  function makePets() {
  
    const response_pets_ara = [];
    let j = 10;
  
    for (let pet of new_pets) {
      response_pets_ara.push(
        <PetComponent
          key={j}
          species={pet.species} 
          noise={pet.noise}
          color={pet.color}
          backgroundColor={pet.backgroundColor}
          infoToParent={ petInfoFromChild }
        />
      );
      j++;
    }
    console.log(response_pets_ara);
    return response_pets_ara;
  }


  const petInfoFromChild = info => {
    console.log('=> info =', info );
    console.log('=> Function in App component.' );
    console.log('=> messages_ara array =', messages_ara);
    setMessages_ara([...messages_ara, info ]);
  }


  const youveGotPet = dataFromPetForm => {
          
    setNew_pets( [...new_pets, dataFromPetForm ] );

  } // ** youveGotPet => function



  
    return (
      <div>

        <h2>&nbsp;&nbsp; Welcome to {name}'s petshop !</h2>

        <hr />

        <Messages_pets message_to_display={ messages_ara } />
        

        {/* *** way 1 *** */}
        <p> * way 1 *</p>

        <PetComponent species='Dingo' noise='noise awooooo' backgroundColor='yellow' color='darkorange' infoToParent={ petInfoFromChild }/>
        <PetComponent species='Turtle' noise='noise eating grapes' backgroundColor='tomato' color='olive' infoToParent={ petInfoFromChild }/>
        <PetComponent 
          species='Penguin' 
          noise='noise kikiki' 
          backgroundColor='blue'
          color='yellow'
          

          infoToParent={ petInfoFromChild }
        />

        {/* *** way 2 *** */}
        <p> * way 2 *</p>

        {
          makePets()
        }

        {/* *** way 3 *** */}
        <p> * way 3 *</p>

        {
            new_pets.map( (pet, i) => 
            <PetComponent 
              key={i}
              species={pet.species} 
              noise={pet.noise}
              color={pet.color}
              backgroundColor={pet.backgroundColor}
              infoToParent={ petInfoFromChild }
          />
          )
        }

        {/* When the user finally is ready to submit this form with onSubmit, I get to tell it what i want it to do. */}
        {/* I get to tell it what function i want it to run  */}

        <form onSubmit={ addPet }>
          <p>Form-1</p>
          <p>Species <input type="text" onChange={ event => setSpecies( event.target.value ) }  value={species}/>  </p>
          <p>Noise <input type="text" onChange={ event => setNoise( event.target.value ) } value={noise}/>  </p>
          <p>Background <input type="color" onChange={ event => setBC( event.target.value ) } value={backgroundColor}/>  </p>
          <p>Text Color <input type="color" onChange={ event => setColor( event.target.value ) } value={color}/></p>
          <input type="submit" />
        </form>

        <PetForm giveAPetToTheParent={ youveGotPet }  />

      </div>
    );
  
} // App ***


export default App;
