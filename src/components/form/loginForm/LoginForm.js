import {Box, Typography} from "@mui/material";
import Header from "../../headers/Header";
import LoginUsernameField from "./field/LoginUsernameField";
import LoginPasswordField from "./field/LoginPasswordField";
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {CustomButton} from "../../Button/CustomButton";
import {loginUser} from "../../../Server/AuthUserServer";

const LoginForm = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onSubmit = async (data) => {
        try {
            await loginUser(data).then((res) => {
                sessionStorage.setItem("refresh_token", res.data.refresh_token);
                sessionStorage.setItem("access_token", res.data.access_token);
            });
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Box m="20px" height="90vh">
            <Header title="LOGIN USER" subTitle="Login to your profile"/>
            <Box display="flex" justifyContent="center" sx={{mt: 14}}>
                <form style={{width: "60%"}} onSubmit={handleSubmit(onSubmit)}>
                    <Box display="grid" gap="30px">
                        <LoginUsernameField register={register} error={errors.username}/>
                        <LoginPasswordField register={register} error={errors.password}/>
                        <Box display="flex" justifyContent="end" mt="10px">
                            <CustomButton fullWidth>Login User</CustomButton>
                        </Box>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Typography variant="h6" component="span">
                            Don't have an account?
                        </Typography>
                        <Link to="/signup">
                            <Typography ml="5px" variant="h6" component="span" color="gray">
                                Create
                            </Typography>
                        </Link>
                    </Box>
                </form>
            </Box>
        </Box>
    );
};

export default LoginForm;
