import React from 'react';
import { render } from '@testing-library/react';
import Button from '../Button';

describe('测试 Button 组件', () => {
  it('default Button', () => {
    const wrapper = render(<Button>Nice</Button>);
    const element = wrapper.getByText('Nice');
    expect(element);
    expect(element.tagName).toEqual('BUTTON');
    expect(element).toHaveClass('hs-button');
  });
});
