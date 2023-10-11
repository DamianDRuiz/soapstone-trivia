import { render } from '@testing-library/react';

import Trivia from './Trivia';

describe('Trivia', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Trivia />);
    expect(baseElement).toBeTruthy();
  });
});
