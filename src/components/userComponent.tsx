import axios from "axios";
import {
    Table,
    TableContainer,
    TableHead,
    TableBody,TableRow,
    TableCell,
    Paper,
} from "@mui/material";
import {useEffect} from "react";
import {useDispatch} from "react-redux";

const UserComponent=()=> {
    const dispatch = useDispatch()

    // @ts-ignore
    useEffect(()=>{
        fetchData()
        },[])
    const fetchData =async ()=>{
        const {data}=await axios('https://jsonplaceholder.typicode.com/users')
        dispatch()
        console.log(data)
    }


    return (
      <TableContainer component={Paper}>
          <Table>
              <TableHead></TableHead>
              <TableBody></TableBody>
          </Table>
      </TableContainer>
    );
}

export default UserComponent;
