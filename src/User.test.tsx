import User from './User';
import { render, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';

describe('<User />', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('fetches and display user data', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: () => Promise.resolve({ id: 2, name: 'Aurelio', email: 'aurelio@gmail.com' })
    });

    render(<User userId={2} />);

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /Aurelio/i })).toBeInTheDocument();
      expect(screen.getByText('aurelio@gmail.com')).toBeInTheDocument();
    })
  });
});

/* describe('<User />', () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('fetches and displays user data', async () => {
    global.fetch.mockResolvedValue({
      json: async () => ({ id: 4, name: 'John', email: 'john@gmail.com' })
    });

    render(<User userId={4} />);

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /John/i })).toBeInTheDocument();
      expect(screen.getByText(/john@gmail.com/i)).toBeInTheDocument();
    });
  });
}); */