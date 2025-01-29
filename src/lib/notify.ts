import toast from "react-hot-toast";

export const notify = {
  error: toast.error,
  success: toast.success,
} as const;
