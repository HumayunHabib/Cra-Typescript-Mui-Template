export default function TextField() {
  return {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label": {
            color: "rgba(13, 7, 53, 0.7)",
            fontFamily: "Roboto",
          },
          "& label.Mui-focused": {
            color: "rgba(13, 7, 53, 0.7)",
            fontFamily: "Roboto",
          },

          "& .MuiOutlinedInput-root": {
            backgroundColor: "#fff",
            height: 43,

            "& fieldset": {
              color: "black",
            },
            "&:hover fieldset": {
              borderColor: "#013eb7",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#013eb7",
              outline: "none",
            },
            "& .MuiOutlinedInput-input": {
              padding: "10px 14px !important", // Remove padding
            },

            "@media (max-width: 500px)": {
              "& .MuiOutlinedInput-input": {
                padding: "12.5px 0px 12.5px 18px",
              },
            },

            color: "#0D0735",
            fontSize: "16px",

            fontWeight: 500,
            borderRadius: "10px",
            "& ::placeholder": {
              color: "#090909",
              fontFamily: "Roboto",
              fontWeight: 400,
              fontSize: "16px",
              textAlign: "left",
              opacity: 0.5,
            },
          },

          "& .MuiFormHelperText-root": {
            fontWeight: 500,
            fontSize: "12px",
            backgroundColor: "transparent",
          },
          "&  .MuiFormHelperText-root.Mui-error": {
            backgroundColor: "transparent",
            margin: 0,
            paddingLeft: 10,
          },
        },
      },
    },
  };
}
