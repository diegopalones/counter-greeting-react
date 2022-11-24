import React, { useEffect, useState }  from 'react'

const Greeting = (props) => {
    const [name, setName] = useState(props.person.name);
    
useEffect(() => {
      setTimeout(() => {
      setName("Alfonsina");
    }, 3000);
  }, []);
       return (
        <p>Hola {name}</p>
      );
    };

    export default Greeting