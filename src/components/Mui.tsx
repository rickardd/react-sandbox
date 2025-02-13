import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Customize your primary color
    },
    secondary: {
      main: "#dc004e", // Customize your secondary color
    },
  },
});

const MyMuiComponent = () => {
  return (
    <Container style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100vh" }}>
      <Typography variant="h4" gutterBottom>
        Some Typography
      </Typography>
      <Button variant="contained" style={{ backgroundColor: "red", color: "white", marginBottom: "20px" }}>
        Button
      </Button>
      <Button variant="outlined">Button outline</Button>

      <br />

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
            <Typography variant="h6">Item 1</Typography>
            <Typography>This is a grid item.</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
            <Typography variant="h6">Item 2</Typography>
            <Typography>This is a grid item.</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export const Mui = () => {
  return (
    <ThemeProvider theme={theme}>
      <MyMuiComponent />
    </ThemeProvider>
  );
};
