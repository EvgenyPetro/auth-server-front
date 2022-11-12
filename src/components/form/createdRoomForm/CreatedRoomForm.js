import {Box, IconButton, Typography, useTheme} from "@mui/material";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import TextFieldRoom from "../../textField/TextField";
import {CustomButton} from "../../Button/CustomButton";
import ListFrend from "../../listFrend/ListFrend";
import {tokens} from "../../../theme";


const CreatedRoomForm = (props) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (<Box
    >
        <Box sx={{backgroundColor: `${colors.primary[400]}`}}
             position="sticky"
             top="0"
             zIndex="1">
            <Box p="8px" display="flex" justifyContent="space-between" alignItems="center" borderBottom="solid"

            >
                <Typography ml="8px" variant="h4"
                >
                    Create Conversation Room</Typography>
                <IconButton
                    onClick={() => props.setIsCreatedConversationRoom(true)}
                >
                    <CloseOutlinedIcon
                    />
                </IconButton>
            </Box>
            <Box>
                <TextFieldRoom placeholder="Create Room"/>
                <TextFieldRoom placeholder="Search Frend"/>
                <CustomButton sx={{fontSize: 16}} fullWidth>Create Room</CustomButton>
            </Box>
        </Box>
        <Box zIndex="-1">
            <ListFrend/>
        </Box>
    </Box>)
}

export default CreatedRoomForm;