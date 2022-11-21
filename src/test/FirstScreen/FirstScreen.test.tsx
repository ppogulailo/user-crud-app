import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import SignInSide from '../../components/FirstScreen/FirstScreen';

describe('FirstScreen Test', () => {
  test('should Main render', () => {
    const { asFragment } = render(<MemoryRouter><SignInSide/></MemoryRouter>);
    expect(asFragment())
      .toMatchSnapshot();
  });
});
