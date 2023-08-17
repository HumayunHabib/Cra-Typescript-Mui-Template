// import { toast } from "react-hot-toast";

// export const successToast = (message) => {
//   toast.success(message, {
//     style: {
//       padding: "14px",
//       color: "#013EB7",
//       animation: "none",
//       transition: "none",
//     },
//     iconTheme: {
//       primary: "green",
//       secondary: "#FFFAEE",
//     },
//   });
// };
// export const errorToast = (message) => {
//   toast.error(message, {
//     style: {
//       padding: "14px",
//       color: "#013EB7",
//       animation: "none",
//       transition: "none",
//     },
//   });
// };
import { toast } from "react-hot-toast";

interface ToastConfig {
  style: {
    padding: string;
    color: string;
    animation: string;
    transition: string;
  };
  iconTheme?: {
    primary: string;
    secondary: string;
  };
}

export const showToast = (
  message: string,
  type: "success" | "error" = "success"
): void => {
  const toastConfig: ToastConfig = {
    style: {
      padding: "14px",
      color: "#013EB7",
      animation: "none",
      transition: "none",
    },
  };

  if (type === "success") {
    toastConfig.iconTheme = {
      primary: "green",
      secondary: "#FFFAEE",
    };
    toast.success(message, toastConfig);
  } else if (type === "error") {
    toast.error(message, toastConfig);
  }
};
