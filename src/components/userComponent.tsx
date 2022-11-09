import axios from "axios";
import {
    Table,
    TableContainer,
    TableHead,
    TableBody, TableRow,
    TableCell,
    Paper,
    IconButton,
    Button,
    Modal,
    Box,
    Input,
} from "@mui/material";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useTypeSelector} from "../hooks/useTypeSelector";
import {addItem, fetchItem, removeTodo, updateItem} from "../redux/store/userReducer";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { User } from "../type/types";
import ModalUser from "./ModalUser";

const UserComponent = () => {
    const dispatch = useDispatch()
    const items = useTypeSelector((state) => state.reducer.item);
    const [title, setTitle] = useState(false);
    const [userTitle, setUserTitle] = useState(false);
    useEffect(() => {
        if (!items[0]) {
            fetchData()
        }
    }, [])
    const fetchData = async () => {
        const {data} = await axios('https://jsonplaceholder.typicode.com/users')
        console.log(data)
        await dispatch(fetchItem(data))
    }
    const create = async () => {
        try {
            const {data} = await axios.post('https://jsonplaceholder.typicode.com/users', {
                name: `${title}`,
                username: `${userTitle}`,
                email: "Sincere@april.biz",
                address: {
                    street: "Kulas Light",
                    suite: "Apt. 556",
                    city: "Gwenborough",
                    zipcode: "92998-3874",
                    geo: {
                        lat: "-37.3159",
                        lng: "81.1496"
                    }
                },
                phone: "1-770-736-8031 x56442",
                website: "hildegard.org",
                company: {
                    name: "Romaguera-Crona",
                    catchPhrase: "Multi-layered client-server neural-net",
                    bs: "harness real-time e-markets"
                }
            })
            if (data){
                data.id = items[items.length - 1].id + 1
                dispatch(addItem(data))
            }
        } catch (e) {
            throw e
        }
    }
    const deleteItem = async (id: number) => {
        try {
            const {data} = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`, {
                headers: {
                    'Content-type': 'application/json',
                },
            });
            if (data) {
                dispatch(removeTodo(id))
            }
        } catch (e) {
            throw e
        }
    }
    const updateUser = async (id: number) => {
        try {
            const {data} = await axios.patch(`https://jsonplaceholder.typicode.com/users/${id}`, {
                name: `${title}`,
                username: `${userTitle}`,


                headers: {
                    'Content-type': 'application/json',
                },
            });
            if (data) {
               dispatch(updateItem(data))
            }
        } catch (e) {
            throw e
        }
    }


    return (
        <TableContainer component={Paper}  sx={style.table}>
            {/*<IconButton onClick={handleOpen}><CreateOutlinedIcon/></IconButton>*/}

            <Table stickyHeader >
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>UserName</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        items.map((row: User) => (
                            <ModalUser key={row.id} row={row} deleteItem={deleteItem} setTitle={setTitle} setUserTitle={setUserTitle} updateUser={updateUser}/>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}
const style = {
    table:{
        maxHeight: '500px'
    },
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
};
export default UserComponent;
