import React from 'react';
import { create } from 'react-test-renderer';

// COMPONENTS
import Square from './square';

describe('Square component', () => {
  test('Matches th snapshot', () => {
    const number: number = 2;

    const square = create(<Square number={number}/>);
    expect(square.toJSON()).toMatchSnapshot();
  });

  test('show expected number', () => {
    const number: number = 5;

    const component = create(<Square number={number}/>);
    const instance = component.root;
    console.log(instance)

    expect(instance.props.number).toBe(5);
  });
});
