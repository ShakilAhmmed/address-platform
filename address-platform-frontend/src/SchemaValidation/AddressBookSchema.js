import {object, string, number} from "yup";

const AddressBookSchema = object({
    name: string().required('Name is required').label('Name'),
    phone: string().required('Phone is required').label('Phone'),
    email: string().email().required('Email is required').label('Email'),
    website: string().url().required('Website is required').label('Website'),
    gender: string().required('Gender is required').label('Gender'),
    age: number().positive('Must be a number').integer('Must be a number').required('Age is required').label('Age'),
    nationality: string().required('Nationality is required').label('Nationality'),
});

export default AddressBookSchema;