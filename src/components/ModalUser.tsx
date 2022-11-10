import {Box, Button, IconButton, Input,  TableCell, TableRow, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {Controller, SubmitHandler, useForm, useFormState} from "react-hook-form";
import {nameValidation, usernameValidation} from "./validation";
import {useNavigate} from "react-router-dom";
import ModalBlock from "./Modal";

interface ISignInForm {
    name: string;
    username: string;
}


function ModalUser({row, deleteItem, setUserTitle, setTitle, updateUser,inputEl}: any) {
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const handleOpen = (e:any) => {
        e.stopPropagation()
        setOpen(true)
    };
    const handleClose = (e:any) =>{
        setOpen(false)
    }



    return (

        <TableRow
            id='style'
            key={row.id}
            onClick={(e) =>{ navigate(`/user/${row.id}`)}}
            ref={inputEl}
        >
            <TableCell align='center'>{row.id}</TableCell>
            <TableCell align='center'>{row.name}</TableCell>
            <TableCell align='center'>{row.username}</TableCell>
            <TableCell align='center'>
                <IconButton onClick={(e)=> handleOpen(e)}><CreateOutlinedIcon/></IconButton>
                <ModalBlock open={open} setOpen={setOpen} id={row.id} updateUser={updateUser} setTitle={setTitle} setUserTitle={setUserTitle}/>
                {/*<IconButton onClick={()=>updateUser(row.id)}><CreateOutlinedIcon/></IconButton>*/}
                <IconButton onClick={(e:any) => {
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
export default ModalUser;

