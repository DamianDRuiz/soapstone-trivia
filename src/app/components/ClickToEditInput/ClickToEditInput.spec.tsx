import { render } from '@testing-library/react';

import ClickToEditInput from './ClickToEditInput';

describe('ClickToEditInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ClickToEditInput />);
    expect(baseElement).toBeTruthy();
  });
});
