import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from '../../App';

describe('App Test', () => {
  test('should Main render', () => {
    const { asFragment } = render(
            <MemoryRouter initialEntries={['/error404']}>
                <App/>
            </MemoryRouter>,
    );
    expect(screen.getByTestId('not-found-page'))
      .toBeInTheDocument();
    expect(asFragment())
      .toMatchSnapshot();
  });
});
