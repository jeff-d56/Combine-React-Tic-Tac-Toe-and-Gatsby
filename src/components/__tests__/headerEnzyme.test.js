import { PureHeader as Header } from "../header"
import React from "react";
import { shallow } from "enzyme";
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });



it('test header with enzyme', () => {
	const data = {
      site: {
        siteMetadata: {
          title: "Test header with enzyme",
        },
      },
    }
	
	const wrapper = shallow(<Header data = {data}/>);
	const testHeaderEnzyme = wrapper.find('h1.title').text();
	expect(testHeaderEnzyme).toBe("Test header with enzyme");
	
});