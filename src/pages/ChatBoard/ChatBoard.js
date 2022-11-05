import React from "react";
import {
  Box,
  IconButton,
  useTheme,
  InputBase,
  Avatar,
  Typography,
} from "@mui/material";
import { tokens } from "../../theme";
import ConversationList from "../../components/conversationList/ConversationList";
import SearchIcon from "@mui/icons-material/Search";
import AddIcCallOutlinedIcon from "@mui/icons-material/AddIcCallOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import CallIcon from "@mui/icons-material/Call";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Header from "../../components/headers/Header";

const ChatBoard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
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
          height="100%"
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
          <ConversationList />
        </Box>
        <Box
          marginLeft={1}
          borderRadius="0 10px 10px 0"
          sx={{ background: `${colors.primary[400]}`, width: 1050 }}
          height="100%"
        >
          <Box
            borderBottom="solid"
            display="flex"
            justifyContent="space-between"
            p={1}
          >
            <Box display="flex" backgroundColor={colors.primary[400]}>
              <Avatar
                sx={{ width: 36, height: 36 }}
                alt="VOLODINIR"
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
                  VOLODINIR
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
                  <CallIcon />
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
        </Box>
      </Box>
    </>
  );
};

export default ChatBoard;
