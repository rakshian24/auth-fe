import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Stack, Typography } from "@mui/material";
import { InitialLoginFormValues } from "./helpers";
import { emailRegex, textInputRegex } from "../../utils";
import CustomInput from "../CustomInput";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";

const Login = () => {
  const { control, formState, handleSubmit } = useForm({
    defaultValues: { ...InitialLoginFormValues },
    mode: "onChange",
  });

  const { errors } = formState;
  const COMMON_PROPS = { control: control, errors: errors };

  const onSubmitHandler = (formValues) => {
    console.log("formValuesformValues = ", formValues);
  };

  return (
    <Stack gap={2}>
      <Typography fontSize={24} fontWeight={600}>
        Login
      </Typography>
      <Stack>
        <form noValidate onSubmit={handleSubmit(onSubmitHandler)}>
          <Stack gap={2}>
            <Controller
              name="email"
              {...COMMON_PROPS}
              rules={{
                required: true,
                pattern: {
                  value: emailRegex,
                  message: "Invalid characters",
                },
              }}
              render={({ field, fieldState: { error } }) => (
                <CustomInput
                  {...field}
                  error={error !== undefined}
                  styles={{ width: "100%" }}
                  placeholder="Enter email"
                  label="Email"
                />
              )}
            />

            <Controller
              name="password"
              {...COMMON_PROPS}
              rules={{
                required: true,
                pattern: {
                  value: textInputRegex,
                  message: "Invalid characters",
                },
              }}
              render={({ field, fieldState: { error } }) => (
                <CustomInput
                  {...field}
                  error={error !== undefined}
                  styles={{ width: "100%" }}
                  placeholder="Enter password"
                  label="Password"
                  type="password"
                />
              )}
            />

            <Stack
              display={"flex"}
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              mt={1}
            >
              <Typography>
                Don't have an account?
                <Link
                  to={ROUTES.REGISTER}
                  style={{
                    marginLeft: "4px",
                    fontWeight: 500,
                  }}
                >
                  Register here
                </Link>
              </Typography>
              <Button
                onClick={() => onSubmitHandler}
                variant="contained"
                type="submit"
                sx={{ width: "120px" }}
              >
                Login
              </Button>
            </Stack>
          </Stack>
        </form>
      </Stack>
    </Stack>
  );
};

export default Login;
