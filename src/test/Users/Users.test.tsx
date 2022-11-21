import { MemoryRouter } from 'react-router-dom';
import UserCard from '../../components/User/userCard';
import { renderWithProviders } from '../utils/test-utils';

describe('UserCard', () => {
  const store = {};
  test('should Main render', () => {
    const { asFragment } = renderWithProviders(
            <MemoryRouter>
                <UserCard/>
            </MemoryRouter>,
            store,
    );

    expect(asFragment())
      .toMatchSnapshot();
  });
});
