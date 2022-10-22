import { Box, Typography } from "@mui/material";
import Header from "../../headers/Header";
import FirstNameField from './field/FirsNameField';
import LastNameField from "./field/LastNameField";
import RegisterUsernameField from "./field/RegisterUsernameField";
import RegisterPasswordField from "./field/RegisterPasswordField";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { CustomButton } from "../../Button/CustomButton";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <Box m="20px" height="90vh">
      <Header title="CREATE USER" subTitle="Create a New User Profile" />
      <Box display="flex" justifyContent="center" sx={{ mt: 14 }}>
        <form style={{ width: "60%" }} onSubmit={handleSubmit(onSubmit)}>
          <Box display="grid" gap="30px">
            <FirstNameField register={register} error={errors.firsName} />
            <LastNameField register={register} error={errors.lastName} />

            <RegisterUsernameField
              register={register}
              error={errors.username}
            />
            <RegisterPasswordField
              register={register}
              error={errors.password}
            />
            <Box display="flex" justifyContent="end" mt="10px">
              <CustomButton fullWidth>Create new User</CustomButton>
            </Box>
          </Box>
          <Box display="flex" justifyContent="center">
            <Typography variant="h6" component="span">
              Alredy hawe an account?
            </Typography>
            <Link to="/login">
              <Typography ml="5px" variant="h6" component="span" color="gray">
                Login
              </Typography>
            </Link>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default RegisterForm;
