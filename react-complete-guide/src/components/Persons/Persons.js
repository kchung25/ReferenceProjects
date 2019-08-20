import React, {PureComponent} from 'react';
import Person from './Person/Person';
class Persons extends PureComponent {

      // static getDerivedStateFromProps(props, state) {
      //       console.log('[Persons.js] getDerivedStateFromProps');
      //       return state;
      // }

      // componentWillReceiveProps(props) {
      //       console.log('[Persons.js] componentWillReceiveProps', props);
      // }

      // componentWillUpdate() {

      // }

      //Use PureComponent instead
      // shouldComponentUpdate(nextProps, nextState) {
      //       console.log('[Persons.js] shouldComponentUpdate');
      //       return nextProps.persons !== this.props.persons ||
      //             nextProps.changed !== this.props.changed ||
      //             nextProps.clicked !== this.props.clicked

      // }

      getSnapshotBeforeUpdate(prevProps, prevState) {
            console.log('[Persons.js] getSnapshotBeforeUpdate');
            return { message: 'Snapshot!' }
      }

      componentDidUpdate(prevProps, prevState, snapshot) {
            console.log('[Persons.js] componentDidUpdate');
            console.log(snapshot);
      }

      componentWillUnmount() {
            console.log('[Persons.js] componentWillUnmount');
      }

      render() {
            return this.props.persons.map( ( person, index ) => {
                  return (
                        <Person
                              click={() => this.props.clicked( index )}
                              name={person.name}
                              age={person.age}
                              changed={( event ) => this.props.changed( event, person.id )} 
                               />
                  )
            } );
      }
}

export default Persons