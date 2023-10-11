import { render } from '@testing-library/react';

import AddPlayer from './AddPlayer';

describe('AddPlayer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddPlayer />);
    expect(baseElement).toBeTruthy();
  });
});
