import { render } from '@testing-library/react';

import Players from './Players';

describe('Players', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Players />);
    expect(baseElement).toBeTruthy();
  });
});
