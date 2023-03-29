import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme/colors";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box my="1em" sx={{
      display: 'flex',
      flexDirection: "column",
      alignItems: 'center',
      justifyContent: "center",
    }}
    >
      <Typography
        variant="h4"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ my: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h8" color={colors.greenAccent[200]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
