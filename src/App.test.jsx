import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('Should render the title', async () => {
    render(<App />);

    screen.getByText(/Compendium/i);

    await screen.findByRole('img', { timeout: 5000 });

    screen.debug();
  });
});
