import { render, screen } from '@testing-library/react';
import React from 'react';
import { ModalBlock } from '../../components/modal/Modal';

const handelClick = jest.fn();

describe('Modal Test', () => {
  test('INPUT CREATE', async () => {
    const { asFragment } = render(
            <ModalBlock open={true} setOpen={() => false}/>,
    );
    const inputName = await screen.findByTestId('name-input');
    const inputUserName = await screen.findByTestId('username-input');
    const update = await screen.findByTestId('update');
    expect(update)
      .toBeInTheDocument();
    expect(inputName)
      .toBeInTheDocument();
    expect(inputUserName)
      .toBeInTheDocument();
    expect(asFragment())
      .toMatchSnapshot();
  });
  test('Update Click', async () => {
    render(
            <ModalBlock open={true} setOpen={() => false} updateUser={handelClick} id={1}/>,
    );
    const update = await screen.findByTestId('update');
    expect(update)
      .toBeInTheDocument();
    update.click();
    expect(handelClick)
      .toBeCalled();
  });
  test('Create click', async () => {
    render(
            <ModalBlock open={true} setOpen={() => false} create={handelClick}/>,
    );
    const create = await screen.findByTestId('create');
    expect(create)
      .toBeInTheDocument();
    create.click();
    expect(handelClick)
      .toBeCalled();
  });
});
