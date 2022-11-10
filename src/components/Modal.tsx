import {Box, Button,Modal,TextField} from "@mui/material";
import { useState} from "react";
import ReactDom from "react-dom";
import {Controller, SubmitHandler, useForm, useFormState} from "react-hook-form";
import {nameValidation, usernameValidation} from "./validation";

interface ISignInForm {
    name: string;
    username: string;
}


function ModalBlock({open,setUserTitle, setTitle, updateUser,setOpen,id}: any) {
    const {control} = useForm<ISignInForm>({
        mode: 'onChange',
    });

    const {errors} = useFormState({
        control
    })

    const handleClose = (e:any) =>{


        setOpen(false)
    }

    const portalDiv = document.getElementById('portal')!;

    return ReactDom.createPortal(
        <Modal
            onClick={event =>event.stopPropagation()}
            open={open}
            onClose={(e:any)=>handleClose(e)}
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
                    <Button onClick={(e) =>{
                        updateUser(id)}
                    }>Change User</Button>
                </Box>
            </Box>
        </Modal>,portalDiv
)
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
export default ModalBlock;

