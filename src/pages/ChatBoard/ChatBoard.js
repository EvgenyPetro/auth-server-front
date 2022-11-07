import React, { useState } from "react";
import { Box, IconButton, useTheme, InputBase } from "@mui/material";
import { tokens } from "../../theme";
import ConversationList from "../../components/conversationList/ConversationList";
import ConversationRoom from "../../components/conversationRoom/ConversationRoom";
import SearchIcon from "@mui/icons-material/Search";
import AddIcCallOutlinedIcon from "@mui/icons-material/AddIcCallOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import Header from "../../components/headers/Header";
import { Route, Routes } from "react-router-dom";
import { users } from "../../mock";

const ChatBoard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [listConversationRoom, setListConversationRoom] = useState(
    users[0]?.conversationRoom
  );
  return (
    <Box>
      <Box m="5px">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="300px"
        >
          <Header title="Chat" subTitle="Welcom chat board" />
        </Box>
      </Box>
      <Box m="20px" display="flex" height="80%" justifyContent="center">
        <Box
          borderRadius="10px 0 0 10px"
          sx={{ background: `${colors.primary[400]}`, width: 300 }}
          height="83vh"
          overflow="auto"
        >
          <Box
            borderBottom="solid"
            display="flex"
            justifyContent="space-between"
            p={1}
          >
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
            <Box display="flex">
              <IconButton>
                <AddIcCallOutlinedIcon />
              </IconButton>
              <IconButton>
                <PersonAddAlt1OutlinedIcon />
              </IconButton>
            </Box>
          </Box>
          <ConversationList
            divivdet="true"
            conversationRoom={listConversationRoom}
          />
        </Box>
        <Box
          marginLeft={1}
          borderRadius="0 10px 10px 0"
          sx={{
            overflowY: "scroll",
            "&::-webkit-scrollbar": {
              width: 0,
            },
            background: `${colors.primary[400]}`,
            width: 1050,
          }}
          height="83vh"
          overflow="auto"
        >
          <Routes>
            <Route
              path=":id"
              element={
                <ConversationRoom conversationRoom={listConversationRoom} />
              }
            ></Route>
          </Routes>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatBoard;
