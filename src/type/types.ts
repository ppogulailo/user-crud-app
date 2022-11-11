import { Dispatch } from 'react';

// Redux

export interface User {
  id: number
  name: string
  username: string
  email: string
  nameChanged: boolean
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

export interface ActionReducerFetch {
  type: string
  payload: User[]
}
export interface ActionReducerAdd {
  type: string
  payload: User
}
export interface IState {
  item: User[]
}
export interface ActionReducerRemove {
  type: string
  payload: number
}
export interface ActionReducerUpdate {
  type: string
  payload: User
}

// Components

export interface ISignInForm {
  name: string
  username: string
}

export interface IModalUser {
  row: User
}

export interface IModal {
  open: boolean
  updateUser?: (id: number) => void
  setOpen: Dispatch<boolean>
  create?: () => void
  id?: number
}

export interface IMyContext {
  deleteItem: (id: number) => void
  updateUser: (id: number) => void
  setSet: Dispatch<string>
  create: () => void
  setUserTitle: Dispatch<string>
  setTitle: Dispatch<string>
  title: string
  userTitle: string
}
