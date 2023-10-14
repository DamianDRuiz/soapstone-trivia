import { render } from '@testing-library/react';

import FuturePlans from './FuturePlans';

describe('FuturePlans', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FuturePlans />);
    expect(baseElement).toBeTruthy();
  });
});
