import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('Should render the title', async () => {
    render(<App />);
    screen.getByText('Loading...');

    await waitForElementToBeRemoved(await screen.findByText('Loading...'), {
      timeout: 5000,
    });

    const name = screen.getAllByRole('heading', { level: 2 });
    expect(name.length).toEqual(10);
    const images = screen.getAllByRole('img');

    expect(images.length).toEqual(10);
  });
});
