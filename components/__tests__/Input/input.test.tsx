import * as React from 'react';
import Input from '../../Input';
import { shallow } from "enzyme";

it('Select component rendering', () => {
  const result: any = shallow(
    <Input
      label='test'
    />).contains(
      <label>
        test
      </label>
    );
  expect(result).toBeTruthy();
});
