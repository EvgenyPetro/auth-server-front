import React, {useState} from "react";
import {Box, IconButton, useTheme} from "@mui/material";
import {tokens} from "../../theme";
import ConversationList from "../../components/conversationList/ConversationList";
import ConversationRoom from "../../components/conversationRoom/ConversationRoom";
import AddIcCallOutlinedIcon from "@mui/icons-material/AddIcCallOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import Header from "../../components/headers/Header";
import {Route, Routes} from "react-router-dom";
import {users} from "../../mock";
import Search from "../../components/search/Search";
import CreatedRoomForm from "../../components/form/createdRoomForm/CreatedRoomForm";

const ChatBoard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [listConversationRoom, setListConversationRoom] = useState(
        users[0]?.conversationRoom
    );
    const [isCreatedConversationRoom, setIsCreatedConversationRoom] = useState(true);
    return (
        <Box>
            <Box m="5px">
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    width="300px"
                >
                    <Header title="Chat" subTitle="Welcom chat board"/>
                </Box>
            </Box>
            <Box m="20px" display="flex" height="80%" justifyContent="center">
                <Box
                    borderRadius="10px 0 0 10px"
                    sx={{
                        background: `${colors.primary[400]}`, width: 300, overflowY: "scroll",
                        "&::-webkit-scrollbar": {
                            width: 0,
                        },
                    }}
                    height="83vh"
                    overflow="auto"
                >
                    {isCreatedConversationRoom ? <>
                        <Box
                            borderBottom="solid"
                            display="flex"
                            justifyContent="space-between"
                            p={1}
                        >
                            <Search/>
                            <Box display="flex">
                                <IconButton>
                                    <AddIcCallOutlinedIcon/>
                                </IconButton>
                                <IconButton
                                    onClick={() => setIsCreatedConversationRoom(!isCreatedConversationRoom)}
                                >
                                    <PersonAddAlt1OutlinedIcon/>
                                </IconButton>
                            </Box>
                        </Box>
                        <ConversationList

                            divivdet="true"
                            conversationRoom={listConversationRoom}
                        />
                    </> : <CreatedRoomForm 
                        isCreatedConversationRoom={isCreatedConversationRoom}
                        setIsCreatedConversationRoom={setIsCreatedConversationRoom}

                    />}
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
                                <ConversationRoom conversationRoom={listConversationRoom}/>
                            }
                        ></Route>
                    </Routes>
                </Box>
            </Box>
        </Box>
    );
};

export default ChatBoard;
