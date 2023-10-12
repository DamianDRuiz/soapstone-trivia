import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useSwitchTeam from './useSwitchTeam';

describe('useSwitchTeam', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useSwitchTeam());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
