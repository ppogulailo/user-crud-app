import {
  Table,
  TableContainer,
  TableHead,
  TableBody, TableRow,
  TableCell,
  Paper,
} from '@mui/material';
import React, {
  FC, useEffect, useState,
} from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import {
  addItem, fetchItem, removeTodo, updateItem,
} from '../../redux/store/users/userReducer';
import { IMyContext, User } from '../../type/types';
import { UserItem } from '../User/UserItem';
import { SearchAppBar } from '../material/searchAppBar';
import { nameValidation, usernameValidation } from '../validation/validation';

const style = {
  table: {
    maxHeight: '700px',
  },
  box: {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  },
};

export const MyContext = React.createContext<IMyContext>({
  deleteUser: () => {},
  updateUser: () => {},
  setSet: () => {},
  createUser: () => {},
  title: '',
  userTitle: '',
  setTitle: () => {},
  setUserTitle: () => {},
});
const MainScreen: FC = () => {
  const dispatch = useDispatch();
  const users = useTypeSelector((state) => state.reducer.item);
  const [title, setTitle] = useState<string>('');
  const [userTitle, setUserTitle] = useState<string>('');
  const [set, setSet] = useState('');
  const fetchUser = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
    const newList = data.map((item: User) => ({ ...item, nameChanged: false }));
    await dispatch(fetchItem(newList));
  };
  useEffect(() => {
    if (!users[0]) {
      fetchUser();
    }
  }, [users]);
  const createUser = async () => {
    if (!nameValidation.validate(title) && !usernameValidation.validate(userTitle)) {
      try {
        const { data } = await axios.post('https://jsonplaceholder.typicode.com/users', {
          name: `${title}`,
          username: `${userTitle}`,
          email: 'Sincere@april.biz',
          address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
              lat: '-37.3159',
              lng: '81.1496',
            },
          },
          phone: '1-770-736-8031 x56442',
          website: 'hildegard.org',
          company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets',
          },
        });
        if (data) {
          data.id = users[users.length - 1].id + 1;
          dispatch(addItem(data));
          setTitle('');
          setUserTitle('');
        }
      } catch (e) {
        throw e;
      }
    }
  };
  const deleteUser = async (id: number) => {
    try {
      const { data } = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`, {
        headers: {
          'Content-type': 'application/json',
        },
      });
      if (data) {
        dispatch(removeTodo(id));
      }
    } catch (e) {
      throw e;
    }
  };
  const updateUser = async (id: number) => {
    if (!nameValidation.validate(title) && !usernameValidation.validate(userTitle)) {
      try {
        const { data } = await axios.patch(`https://jsonplaceholder.typicode.com/users/${id}`, {
          name: `${title}`,
          username: `${userTitle}`,
          id,
          headers: {
            'Content-type': 'application/json',
          },
        });
        if (data) {
          dispatch(updateItem(data));
          setTitle('');
          setUserTitle('');
        }
      } catch (e) {
        throw e;
      }
    }
  };
  const searchUser =()=>{
    return users.filter((obj: User) => {
      if (obj.name.toLowerCase().includes(set.toLowerCase())) {
        return true;
      } if (obj.username.toLowerCase().includes(set.toLowerCase())) {
        return true;
      } if (obj.id.toString() === set) {
        return true;
      }
      return false;
    }).map((row: User) => (
        <UserItem data-testid='user-item' key={row.id} row={row}/>
    ))
  }

  return (
        <MyContext.Provider value={{
          setSet, createUser, setUserTitle, setTitle, updateUser, deleteUser, title, userTitle,
        }}>
            <TableContainer component={Paper} sx={style.table}>
                <SearchAppBar></SearchAppBar>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'>ID</TableCell>
                            <TableCell align='center'>Name</TableCell>
                            <TableCell align='center'>UserName</TableCell>
                            <TableCell align='center'>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody id='usersblock'>
                        {
                          searchUser()
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </MyContext.Provider>
  );
};
export default MainScreen;
