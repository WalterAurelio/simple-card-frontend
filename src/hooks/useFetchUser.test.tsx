import { renderHook, waitFor } from '@testing-library/react';
import { useFetchUser } from './useFetchUser';
import { vi } from 'vitest';

describe('useFetchUser', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  
  it('fetches user data', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: () => Promise.resolve({ id: 1, name: 'John', email: 'john@gmail.com' })
    });

    const { result } = renderHook(() => useFetchUser(1));

    // expect(result.current.loading).toBe(true);
    expect(result.current.user).toBe(null);

    await waitFor(() => {
      // expect(result.current.loading).toBe(false);
      expect(result.current.user?.name).toBe('John');
    });
  })
});