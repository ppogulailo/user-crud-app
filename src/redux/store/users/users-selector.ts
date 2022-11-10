import {User} from "../../../type/types";

const getUser = (id: number) => (state: {
    reducer: {
        item: User[]
    }
}) => state.reducer.item.find((user:User) => user?.id === id);

export {getUser}
