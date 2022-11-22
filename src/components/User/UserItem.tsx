import {
  IconButton, TableCell, TableRow, Typography,
} from '@mui/material';
import React, {
  FC, useContext, useState,
} from 'react';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ModalBlock } from '../modal/Modal';
import { IModalUser } from '../../type/types';
import { MyContext } from '../MainScreen/MainScreen';

export const    UserItem: FC<IModalUser> = ({ row }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setOpen(true);
  };

  const { updateUser, deleteUser } = useContext(MyContext);
  const theme = createTheme({
    typography: {
      subtitle1: {
        fontFamily: 'Ubuntu',
        color: '#c62828',
      },
    },

  });
  return (
<ThemeProvider theme={theme}>
        <TableRow
            id='style'
            key={row.id}
            onClick={() => { navigate(`/user/${row.id}`) }}
        >
            {
            row?.nameChanged
              ? <>
                    <TableCell align='center'><Typography variant='subtitle1'>{row.id}</Typography></TableCell>
                    <TableCell align='center'><Typography variant='subtitle1'>{row.name}</Typography></TableCell>
                    <TableCell align='center'><Typography variant='subtitle1'>{row.username}</Typography></TableCell>
                </> : <>
                    <TableCell align='center'>{row.id}</TableCell>
                    <TableCell align='center'>{row.name}</TableCell>
                    <TableCell align='center'>{row.username}</TableCell>
                </>
        }

            <TableCell align='center'>
                <IconButton id='updatauser' onClick={(e) => handleOpen(e)}><CreateOutlinedIcon/></IconButton>
                <ModalBlock open={open} setOpen={setOpen} id={row.id} updateUser={updateUser}/>
                <IconButton id='remove' onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation();
                  deleteUser(row.id);
                }}><DeleteOutlineOutlinedIcon/></IconButton>
            </TableCell>
        </TableRow>
</ThemeProvider>
  );
};

export const style = {
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
