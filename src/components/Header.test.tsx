import * as React from "react";
import { shallow } from 'enzyme';
import Header from "./Header";

describe("Header", () => {
	let wrapper = shallow(<Header />);
    let HTMLText = <div>Hello World, am from Header....</div>;
    
    it('should have component', () => {
      expect(wrapper.exists()).toBe(true);
    });
});
