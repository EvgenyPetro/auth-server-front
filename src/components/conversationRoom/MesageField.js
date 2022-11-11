import {Box, IconButton, InputAdornment, TextField, useTheme} from "@mui/material";
import {tokens} from "../../theme";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import {useState} from "react";

const MessageField = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [message, setMessage] = useState("");
    const newMessage = (e) => {
        e.preventDefault()
        setMessage(e.target.value)
    }

    const sendMessage = () => {
        console.log(message)
    }

    const handleKeypress = (e) => {
        if (e.ctrlKey && e.keyCode === 13) {
            sendMessage();
        }
    }

    return (<Box sx={{margin: "3px", width: 600, minWidth: 600, background: `${colors.primary[400]}`}}
    >

        <TextField
            onChange={newMessage}

            fullWidth
            id="outlined-multiline-static"
            multiline
            placeholder="Message"
            margin="dense"
            onKeyDown={handleKeypress}

            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            onClick={sendMessage}

                            aria-label="toggle password visibility"
                        >
                            {!message ? <MicOutlinedIcon/> : <SendOutlinedIcon/>}
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    </Box>)
}
export default MessageField;