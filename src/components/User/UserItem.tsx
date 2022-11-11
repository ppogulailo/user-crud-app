import { IconButton, Input,  TableCell, TableRow} from "@mui/material";
import React, {Dispatch, FC, useState} from "react";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {useNavigate} from "react-router-dom";
import {ModalBlock} from "../modal/Modal";
import {IModalUser} from "../../type/types";



export const UserItem:FC<IModalUser>=({row, deleteItem, setUserTitle, setTitle, updateUser}) =>{
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const handleOpen = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        setOpen(true)
    };
    return (

        <TableRow
            id='style'
            key={row.id}
            onClick={() =>{ navigate(`/user/${row.id}`)}}

        >
            <TableCell align='center'>{row.id}</TableCell>
            <TableCell align='center'>{row.name}</TableCell>
            <TableCell align='center'>{row.username}</TableCell>
            <TableCell align='center'>
                <IconButton onClick={(e)=> handleOpen(e)}><CreateOutlinedIcon/></IconButton>
                <ModalBlock open={open} setOpen={setOpen} id={row.id} updateUser={updateUser} setTitle={setTitle} setUserTitle={setUserTitle} />
                <IconButton onClick={(e:React.MouseEvent<HTMLButtonElement>) => {
                    e.stopPropagation()
                    deleteItem(row.id)}}><DeleteOutlineOutlinedIcon/></IconButton>
            </TableCell>
        </TableRow>
    );
}

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
    }
}


