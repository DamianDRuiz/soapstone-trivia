import { render } from '@testing-library/react';

import TeamName from './TeamName';

describe('TeamName', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TeamName />);
    expect(baseElement).toBeTruthy();
  });
});
