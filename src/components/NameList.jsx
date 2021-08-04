import React, { Component } from 'react';
import PersonList from './personList';

class NameList extends Component {
  constructor() {
    super();
  }

  render() {
    const nameList = [
      {
        id: 1,
        name: 'Asif',
        Age: 25,
        Skill: 'React'
      },
      {
        id: 2,
        name: 'Balaji',
        Age: 26,
        Skill: 'Node'
      },
      {
        id: 3,
        name: 'Manjunathan',
        Age: 29,
        Skill: 'MongoDB'
      }
    ];
    let personsList = nameList.map(name => (
      <PersonList person={name} key={name.id} />
    ));
    return <div>{personsList}</div>;
  }
}

export default NameList;
