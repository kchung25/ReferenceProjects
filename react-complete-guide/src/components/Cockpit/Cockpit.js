import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import Auxiliary from '../../hoc/Auxillary';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
    const toggleButtonRef = useRef(null);
    const authContext = useContext(AuthContext);
    // useEffect(() => {
    //   console.log('[Cockpit.js] useEffect')

    //   setTimeout(() => {
    //     alert('Saved data to cloud!');
    //   }, 1000 )
    // }, [props.persons]);

    //componentWillUnmount
    useEffect(() => {
      console.log('[Cockpit.js] useEffect')

      //Mock HTTP
      // setTimeout(() => {
      //   alert('Saved data to cloud!');
      // }, 1000 )
      // return () => {
      //   console.log('[Cockpit.js] cleanup work in useEffect')
      // }
      toggleButtonRef.current.click();
    }, []);
    //componentDidMount
    // useEffect(() => {
    //   console.log('[Cockpit.js] useEffect')

    //   setTimeout(() => {
    //     alert('Saved data to cloud!');
    //   }, 1000 )
    // }, []);

    const assignedClasses = [];
    let btnClass = '';
    if(props.showPersons) {
        btnClass = classes.red;
    }
    if ( props.personsLength <= 2 ) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( props.personsLength <= 1 ) {
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }

    return (
      <Auxiliary>
          <h1>{props.title}</h1>
          <p className={assignedClasses.join( ' ' )}>This is really working!</p>
          <button
            ref={toggleButtonRef}
            className={btnClass}
            onClick={props.clicked}>
              Toggle Persons
          </button>

          <button onClick={authContext.login}>Login</button>

            
      </Auxiliary>
    );
}

export default React.memo(Cockpit);