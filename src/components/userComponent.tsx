import axios from "axios";
import {
    Table,
    TableContainer,
    TableHead,
    TableBody, TableRow,
    TableCell,
    Paper,
} from "@mui/material";
import {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {useTypeSelector} from "../hooks/useTypeSelector";
import {addItem, fetchItem, removeTodo, updateItem} from "../redux/store/users/userReducer";
import {User} from "../type/types";
import ModalUser from "./ModalUser";
import SearchAppBar from "./searchAppBar";


// @ts-ignore
// export const Context =React.createContext()
const UserComponent = () => {
    const dispatch = useDispatch()
    const items = useTypeSelector((state) => state.reducer.item);
    const [open, setOpen] = useState(false);
    const handleOpen = (e: any) => {
        e.stopPropagation()
        setOpen(true)
    };
    const handleClose = (e: any) => {
        setOpen(false)
    }
    const inputEl = useRef(null);

    const [title, setTitle] = useState('');
    const [userTitle, setUserTitle] = useState('');
    const [set, setSet] = useState('')

    const fetchData = async () => {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
        await dispatch(fetchItem(data))
    }
    const create = async () => {
        if (title.trim() !== '' && userTitle.trim() !== '') {
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
                if (data) {
                    data.id = items[items.length - 1].id + 1
                    dispatch(addItem(data))
                    setTitle("")
                    setUserTitle("")
                    setOpen(false)
                }
            } catch (e) {
                throw e
            }
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
        if (title.trim() !== '' && userTitle.trim() !== '') {
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
                    setTitle("")
                    setUserTitle("")
                    setOpen(false)
                    // @ts-ignore
                    inputEl.current.style.background='red'
                    console.log(inputEl.current)
                    // @ts-ignore
                }
            } catch (e) {
                throw e
            }
        }
    }


    return (
        <TableContainer component={Paper} sx={style.table}>
            <SearchAppBar setSet={setSet} setOpen={setOpen} handleOpen={handleOpen} open={open} create={create}
                          setUserTitle={setUserTitle} setTitle={setTitle}></SearchAppBar>
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell align='center'>ID</TableCell>
                        <TableCell align='center'>Name</TableCell>
                        <TableCell align='center'>UserName</TableCell>
                        <TableCell align='center'>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        items.filter((obj: User) => {
                            if (obj.name.toLowerCase().includes(set.toLowerCase())) {
                                return true
                            } else if (obj.username.toLowerCase().includes(set.toLowerCase())) {
                                return true
                            } else if (obj.id.toString() === set) {
                                return true
                            }
                            return false
                        }).map((row: User) => (
                            <ModalUser  key={row.id} row={row} deleteItem={deleteItem} setTitle={setTitle}
                                       setUserTitle={setUserTitle} updateUser={updateUser} open={open}
                                       handleOpen={handleOpen}
                                       handleClose={handleClose} setOpen={setOpen} inputEl={inputEl}
                            />
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}
const style = {
    table: {
        maxHeight: '700px'
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
    }
};
export default UserComponent;
