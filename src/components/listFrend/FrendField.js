import {Avatar, Box, Checkbox, Typography} from "@mui/material";
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

const FrendField = (props) => {
    return (<Box display="flex" justifyContent="space-between" sx={{borderBottom: "1px grey solid"}}>
            <Box display="flex" alignItems="center">
                <Avatar sx={{width: 32, height: 32}}>{props.frend.userId}</Avatar>
                <Typography marginLeft="8px" variant="h4">{props.frend.userId}</Typography>
            </Box>
            <Checkbox icon={<RadioButtonUncheckedIcon/>} checkedIcon={<RadioButtonCheckedIcon color="secondary"/>}/>
        </Box>
    );
}

export default FrendField;