import {Table} from "reactstrap";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Paginator from "../Utils/Paginator";

const AddressBookTable = ({getAddressBooks,handleSearch,handleDelete}) => {

    const dispatch = useDispatch();

    const {addressBooks} = useSelector((state) => state.addressBook);
    useEffect(() => {
        getAddressBooks();
    }, [])


    return (
        <>
                <Table bordered>
                    <thead>
                    <tr>
                        <th>Sl No</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>WebSite</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Nationality</th>
                        <th>Created By</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr onInput={(e) => handleSearch(e)}>
                        <th>&nbsp; </th>
                        <th> <input className="form-control" name="name"/></th>
                        <th> <input className="form-control" name="phone"/></th>
                        <th> <input className="form-control" name="email"/></th>
                        <th> <input className="form-control" name="website"/></th>
                        <th> <input className="form-control" name="gender"/></th>
                        <th> <input className="form-control" name="age"/></th>
                        <th> <input className="form-control" name="nationality"/></th>
                        <th> <input className="form-control" name="created_by"/> </th>
                        <th>  &nbsp;</th>
                    </tr>
                    {addressBooks.data && addressBooks.data.map((addressBook, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{addressBook?.name}</td>
                                <td>{addressBook?.phone}</td>
                                <td>{addressBook?.email}</td>
                                <td>{addressBook?.website}</td>
                                <td>{addressBook?.gender.toUpperCase()}</td>
                                <td>{addressBook?.age}</td>
                                <td>{addressBook?.nationality}</td>
                                <td>{addressBook?.created_by?.name}</td>
                                <td>
                                    <button onClick={() => handleDelete(addressBook.id)} className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </Table>
            <Paginator class="mt-6" links={addressBooks.links} action={getAddressBooks} />
        </>
    );
};

export default AddressBookTable;