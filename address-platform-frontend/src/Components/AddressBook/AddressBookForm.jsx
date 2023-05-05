import {Button, Col, Form, FormGroup, Label, ModalBody, ModalFooter, ModalHeader, Row} from "reactstrap";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import AddressBookSchema from "../../SchemaValidation/AddressBookSchema";
import postAddressBookAction from "../../Actions/addressBook/postAddressBookAction";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";

const AddressBookForm = ({toggle,getAddressBooks}) => {

    const dispatch = useDispatch();

    const closeBtn = (
        <button className="close" onClick={toggle} type="button">
            &times;
        </button>
    );

    const {register, handleSubmit, setError, formState: {errors}} = useForm({
        mode: "onChange",
        resolver: yupResolver(AddressBookSchema)
    });
    const onSubmit = (data) => {
        postAddressBookAction(data)
            .then((response) => {
                toast.success("Address Added Successfully.");
                toggle();
                getAddressBooks();
            })
            .catch((error) => {
                if (error.errors) {
                    Object.keys(error.errors).forEach((e) => {
                        setError(e, {type: 'custom', message: error.errors[e]})
                    })

                }
            })
    };

    return (
        <>
            <ModalHeader toggle={toggle} close={closeBtn}>Add New Address</ModalHeader>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <ModalBody>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <input
                                    id="name"
                                    name="name"
                                    placeholder="Enter Name"
                                    className={`form-control ${errors?.name && 'invalid-input'}`}
                                    {...register("name")}
                                ></input>
                                <span className="text-danger">{errors?.name?.message}</span>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="phone">Phone</Label>
                                <input
                                    id="phone"
                                    name="phone"
                                    className={`form-control ${errors?.phone && 'invalid-input'}`}
                                    placeholder="Enter Phone"
                                    {...register("phone")}
                                ></input>
                                <span className="text-danger">{errors?.phone?.message}</span>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <input
                                    id="email"
                                    name="email"
                                    placeholder="Enter Email"
                                    className={`form-control ${errors?.email && 'invalid-input'}`}
                                    type="email"
                                    {...register("email")}
                                ></input>
                                <span className="text-danger">{errors?.email?.message}</span>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="website">Website</Label>
                                <input
                                    id="website"
                                    name="website"
                                    className={`form-control ${errors?.website && 'invalid-input'}`}
                                    placeholder="Enter Website"
                                    {...register("website")}
                                ></input>
                                <span className="text-danger">{errors?.website?.message}</span>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="gender">Gender</Label>
                                <select
                                    id="gender"
                                    name="gender"
                                    className={`form-control ${errors?.gender && 'invalid-input'}`}
                                    {...register("gender")}
                                >
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                                <span className="text-danger">{errors?.gender?.message}</span>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="age">Age</Label>
                                <input
                                    id="age"
                                    name="age"
                                    placeholder="Enter Age"
                                    defaultValue="0"
                                    className={`form-control ${errors?.age && 'invalid-input'}`}
                                    {...register("age")}
                                ></input>
                                <span className="text-danger">{errors?.age?.message}</span>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="nationality">Nationality</Label>
                                <input
                                    id="nationality"
                                    name="nationality"
                                    placeholder="Enter Nationality"
                                    className={`form-control ${errors?.nationality && 'invalid-input'}`}
                                    {...register("nationality")}
                                ></input>
                                <span className="text-danger">{errors?.nationality?.message}</span>
                            </FormGroup>
                        </Col>
                    </Row>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" type="submit">
                        Save
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Form>
        </>
    );
};

export default AddressBookForm;