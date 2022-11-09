import {Box, Button, IconButton, Input, Modal, TableCell, TableRow, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {Controller, SubmitHandler, useForm, useFormState} from "react-hook-form";
import { nameValidation, usernameValidation} from "./validation";
import {Navigate, NavLink, useNavigate, useParams} from "react-router-dom"
interface ISignInForm {
    name: string;
    username: string;
}


function ModalUser({row, deleteItem, setUserTitle, setTitle, updateUser}: any) {
    const {id} = useParams();
    console.log(id)
    const {handleSubmit, control} = useForm<ISignInForm>({
        mode: 'onChange',
    });


    const {errors} = useFormState({
        control
    })
    console.log(!errors)
    const onSubmit: SubmitHandler<ISignInForm> = data => console.log(data);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const ariaLabel = {'aria-label': 'description'};

    // @ts-ignore
    return (
        <TableRow key={row.id} >
            <TableCell align='center'>{row.id}</TableCell>
            <TableCell align='center'>{row.name}</TableCell>
            <TableCell align='center'>{row.username}</TableCell>
            <TableCell align='center'>
                <IconButton onClick={handleOpen}><CreateOutlinedIcon/></IconButton>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style.box}>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': {m: 1},
                            }}
                            autoComplete="off"
                        >
                            <Controller
                                control={control}
                                name="name"
                                rules={nameValidation}
                                render={({field}) => (
                                    <TextField
                                        label="Name"
                                        onChange={(e) => {
                                            field.onChange(e)
                                            setTitle(e.target.value)
                                        }
                                        }
                                        value={field.value}
                                        fullWidth={true}
                                        size="small"
                                        margin="normal"
                                        className="auth-form__input"
                                        error={!!errors.name?.message}
                                        helperText={errors?.name?.message}
                                    />
                                )}
                            />
                            <Controller
                                control={control}
                                name="username"
                                rules={usernameValidation}
                                render={({field}) => (
                                    <TextField
                                        label="UserName"
                                        onChange={(e) => {
                                            field.onChange(e)
                                            setUserTitle(e.target.value)
                                        }}
                                        fullWidth={true}
                                        size="small"
                                        margin="normal"
                                        className="auth-form__input"
                                        error={!!errors?.username?.message}
                                        helperText={errors?.username?.message}
                                    />
                                )}
                            />
                            <Button onClick={() => updateUser(row.id)}>Change User</Button>
                        </Box>
                    </Box>
                </Modal>
                {/*<IconButton onClick={()=>updateUser(row.id)}><CreateOutlinedIcon/></IconButton>*/}
                <IconButton onClick={() => deleteItem(row.id)}><DeleteOutlineOutlinedIcon/></IconButton>
            </TableCell>
        </TableRow>
    );
}

const style = {
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

