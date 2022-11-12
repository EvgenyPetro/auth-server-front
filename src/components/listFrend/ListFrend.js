import {users} from "../../mock";
import FrendField from "./FrendField";
import {Box} from "@mui/material";

const ListFrend = () => {

    return (<Box marginTop="10px"

    >

        {users[0].frends.map((frend) => (
            <FrendField key={frend.id}
                        frend={frend}
            />
        ))}
    </Box>);
}
export default ListFrend;