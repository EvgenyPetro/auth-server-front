import React, { useState } from "react";
import {
  List,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemButton,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import { Link } from "react-router-dom";

const FrendList = () => {
  const ListItemButtona = ({
    to,
    username,
    message,
    selected,
    setSelected,
  }) => {
    return (
      <ListItemButton
        disableTouchRipple="true"
        divider="true"
        sx={{
          "&.Mui-selected": {
            backgroundColor: `${colors.primary[450]} `,
          },
        }}
        selected={selected === username}
        style={{
          color: colors.grey[100],
        }}
        onClick={() => setSelected(username)}
      >
        <ListItemAvatar>
          <Avatar alt={username} src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={username}
          secondary={<React.Fragment>"{message}""</React.Fragment>}
        />
        <Link to={to} />
      </ListItemButton>
    );
  };

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState();

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        background: `${colors.primary[400]} !important`,
      }}
    >
      <ListItemButtona
        username="Volodimir"
        message="hi frend"
        selected={selected}
        setSelected={setSelected}
        to="/Volodimir"
      />
      <ListItemButtona
        username="Petrovich"
        message="hi Volodimir"
        selected={selected}
        setSelected={setSelected}
        to="/Petrovich"
      />
    </List>
  );
};

export default FrendList;
