import {Box, Button, IconButton, Input, Modal, TableCell, TableRow} from "@mui/material";
import {useState} from "react";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";


function ModalUser({row,deleteItem,setUserTitle,setTitle,updateUser}:any) {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const ariaLabel = { 'aria-label': 'description' };

    return (
        <TableRow key={row.id}>
            <TableCell>{row.id}</TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.username}</TableCell>
            <TableCell>
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
                                '& > :not(style)': { m: 1 },
                            }}
                            autoComplete="off"
                        >
                            <Input placeholder="Enter new Name" inputProps={ariaLabel} onChange={(e)=>setTitle(e.target.value)}/>
                            <Input placeholder="Enter new Username" inputProps={ariaLabel} onChange={(e)=>setUserTitle(e.target.value)}/>
                            <Button onClick={()=>{
                                updateUser(row.id)
                                handleClose()
                            }}>Change User</Button>
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
    box:{
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
