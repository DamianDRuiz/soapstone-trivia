import { render } from '@testing-library/react';

import Score from './Score';

describe('Score', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Score />);
    expect(baseElement).toBeTruthy();
  });
});
