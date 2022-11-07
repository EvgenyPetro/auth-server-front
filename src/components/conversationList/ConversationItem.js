import React from "react";
import {
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemButton,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import { useNavigate } from "react-router-dom";

const ConversationItem = ({ listConversation, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  return (
    <ListItemButton
      sx={{
        "&.Mui-selected": {
          backgroundColor: `${colors.primary[450]} `,
        },
      }}
      style={{
        color: colors.grey[100],
      }}
      selected={selected === listConversation.roomName}
      onClick={() => {
        setSelected(listConversation.roomName);
        navigate(`/chat/${listConversation.id}`);
      }}
    >
      <ListItemAvatar>
        <Avatar
          alt={listConversation.username}
          src="/static/images/avatar/1.jpg"
        />
      </ListItemAvatar>
      <ListItemText
        primary={listConversation.roomName}
        secondary={
          <React.Fragment>
            "
            {
              listConversation.messages[listConversation.messages.length - 1]
                .message
            }
            "
          </React.Fragment>
        }
      />
    </ListItemButton>
  );
};

export default ConversationItem;
