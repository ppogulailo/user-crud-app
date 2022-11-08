import axios from "axios";
import {
    Table,
    TableContainer,
    TableHead,
    TableBody,TableRow,
    TableCell,
    Paper,
    IconButton,
} from "@mui/material";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useTypeSelector} from "../hooks/useTypeSelector";
import {addItem} from "../redux/store/userReducer";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
const UserComponent=()=> {
    const dispatch = useDispatch()
    const items= useTypeSelector((state) => state.reducer.item);
    console.log(items)
    useEffect(()=>{
        fetchData()
        },[])
    const fetchData =async ()=>{
        const {data}=await axios('https://jsonplaceholder.typicode.com/users')
        console.log(data)
        await dispatch(addItem(data))
    }




    return (
      <TableContainer component={Paper} sx={{maxHeight:'500px'}}>
          <Table stickyHeader>
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
                        items.map((row:any) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.username}</TableCell>
                                <TableCell>
                                    <IconButton  onClick={create}><CreateOutlinedIcon /></IconButton>
                                    <IconButton ><DeleteOutlineOutlinedIcon /></IconButton>
                                </TableCell>
                            </TableRow>
                        ))
                  }
              </TableBody>
          </Table>
      </TableContainer>
    );
}

export default UserComponent;
