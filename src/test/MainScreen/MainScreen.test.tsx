import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import MainScreen from '../../components/MainScreen/MainScreen';
import { renderWithProviders } from '../utils/test-utils';

const store = {};
describe('MainScreen Test', () => {
  test('MainScreen snapshots', async () => {
    const { asFragment } = renderWithProviders(<MemoryRouter>
            <MainScreen/>
        </MemoryRouter>, store);
    expect(asFragment())
      .toMatchSnapshot();
  });
});
