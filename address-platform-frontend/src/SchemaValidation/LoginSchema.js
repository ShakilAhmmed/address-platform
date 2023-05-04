import {object, string} from "yup";

const LoginSchema = object({
    email: string().required().email().label('Email'),
    password: string().required().label('Password')
});

export default LoginSchema;
