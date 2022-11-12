import React, {useState} from "react";
import {List, useTheme} from "@mui/material";
import {tokens} from "../../theme";
import ConversationItem from "./ConversationItem";

const ConversationList = ({conversationRoom, divivdet}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [selected, setSelected] = useState();


    return (
        <List
            divivdet={divivdet}
            sx={{
                width: "100%",
                maxWidth: 360,
                background: `${colors.primary[400]} !important`,

            }}
        >
            {conversationRoom?.map((room) => (
                <ConversationItem
                    onClick={() => console.log(room.id)}
                    listConversation={room}
                    key={room.id}
                    selected={selected}
                    setSelected={setSelected}
                />
            ))}
        </List>
    );
};

export default ConversationList;

