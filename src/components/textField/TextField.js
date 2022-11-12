import {TextField} from "@mui/material";

const TextFieldRoom = (props) => {
    return (<TextField
        sx={{"& .MuiInputBase-input": {fontSize: "large", border: "none"}, "& fieldset": {border: 'none'}}}
        fullWidth
        id="filled-basic"
        placeholder={props.placeholder}
        variant="outlined"/>);
}

export default TextFieldRoom;