import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

type FormData = {
  name: string;
  address: string;
  email: string;
  phone: string;
  userId: string;
};

const UserDataForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { isDirty },
    reset,
  } = useForm<FormData>();

  // const [ setUserId] = useState<string | null>(null);
  const navigate = useNavigate();
  const generateUserId = () => {
    return `user_${Date.now()}`;
  };

  const saveDataToLocalStorage = (data: FormData) => {
    const userData = { ...data };
    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Data saved successfully!");
    reset();
    // setUserId(null);
    navigate("/user-data", { state: userData }); 
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const newUserId = generateUserId();
    // setUserId(newUserId);
    saveDataToLocalStorage({ ...data, userId: newUserId });
  };

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isDirty]);

  return (
    <Container maxWidth="xs">
      <Box mt={4}>
        <Typography variant="h4" align="center" gutterBottom>
          User Data Form
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            label="Name"
            margin="normal"
            {...register("name", { required: "Name is required" })}
          />
          <TextField
            fullWidth
            label="Address"
            margin="normal"
            {...register("address", { required: "Address is required" })}
          />
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            type="email"
            {...register("email", { required: "Email is required" })}
          />
          <TextField
            fullWidth
            label="Phone"
            margin="normal"
            type="tel"
            {...register("phone", { required: "Phone is required" })}
          />
          <Box mt={2} display="flex" justifyContent="space-between" gap={3}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
            <Button
              type="button"
              variant="outlined"
              color="secondary"
              onClick={() => reset()}
            >
              Reset
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default UserDataForm;