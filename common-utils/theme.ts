import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      color: "#333",
      marginBottom: "1rem",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      color: "#444",
      marginBottom: "1rem",
    },
    h3: {
      fontSize: "1.8rem",
      fontWeight: 600,
      color: "#555",
      marginBottom: "1rem",
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
      color: "#666",
      marginBottom: "1rem",
    },
    body1: {
      fontSize: "1rem",
      color: "#777",
      lineHeight: 1.6,
    },
  },
});

export default theme;
