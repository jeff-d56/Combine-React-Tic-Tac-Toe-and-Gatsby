// test if Next Player renders on screen
import React from "react";
import { shallow } from "enzyme";
import DisplayNextPlayer from "../TicTacToe/displayNextPlayer"
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

let status = "Next player: X" ; // send in status since game has not set its value yet

it('test if Next player renders right', () => {
	const wrapper = shallow(<DisplayNextPlayer name = {status}/>);
	const nextplayerTitle = wrapper.find('h2.title').text();
	expect(nextplayerTitle).toBe("Next player: X");
	
});