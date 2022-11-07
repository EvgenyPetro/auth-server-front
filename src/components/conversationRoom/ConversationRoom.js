import {
  Box,
  IconButton,
  InputBase,
  Avatar,
  Typography,
  useTheme,
} from "@mui/material";
import { useParams } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { tokens } from "../../theme";
import React from "react";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import MessageList from "./MessageList";

const ConversationRoom = ({ conversationRoom }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { id } = useParams();
  const currentRoom = conversationRoom.filter((room) => room.id == id)[0];

  return (
    <>
      <Box
        borderBottom="solid"
        display="flex"
        justifyContent="space-between"
        p={1}
        position="sticky"
        top="0"
        backgroundColor={colors.primary[400]}
        zIndex="3"
      >
        <Box display="flex" backgroundColor={colors.primary[400]}>
          <Avatar
            sx={{ width: 36, height: 36 }}
            alt={currentRoom.roomName}
            src="/public/assets/1.jpeg"
          />
          <Box
            display="flex"
            backgroundColor={colors.primary[400]}
            borderRadius="3px"
            p={1}
          >
            <Typography
              sx={{
                "&.MuiTypography-root": {
                  cursor: "pointer",
                },
              }}
            >
              {currentRoom.roomName}
            </Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          borderRadius="3px"
        >
          <Box display="flex">
            <IconButton>
              <CallOutlinedIcon />
            </IconButton>
            <IconButton>
              <MoreHorizIcon />
            </IconButton>
          </Box>
          <Box
            display="flex"
            backgroundColor={colors.primary[400]}
            borderRadius="3px"
          >
            <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
            <IconButton type="button" sx={{ p: 1 }}>
              <SearchIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Box display="grid" justifyContent="center">
        {currentRoom.messages.map((message) => (
          <MessageList key={message.id} message={message} />
        ))}
      </Box>
    </>
  );
};

export default ConversationRoom;
