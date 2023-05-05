import {useState} from "react";
import {Modal} from "reactstrap";
import AddressBookForm from "../../Components/AddressBook/AddressBookForm";
import AddressBookTable from "../../Components/AddressBook/AddressBookTable";
import getAddressBookAction from "../../Actions/addressBook/getAddressBookAction";
import {getAddressBookDispatch} from "../../Redux/Dispatch/addressBook/addressBookDispatch";
import {useDispatch} from "react-redux";
import {debounce} from "lodash";
import deleteAddressBookAction from "../../Actions/addressBook/deleteAddressBookAction";
import {toast} from "react-toastify";

const Home = () => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const dispatch = useDispatch();
    const getAddressBooks = (page = 1, data = {}) => {

        const payload = {...data, page}
        getAddressBookAction(payload)
            .then((response) => {
                getAddressBookDispatch(dispatch, response?.data);
            })
            .catch((error) => {
                console.log(error);
            })
    };

    const handleSearch = (e) => {
        const debouncedFilter = debounce(() => {
            getAddressBooks(1, {[e.target.name]: e.target.value})
        }, 1000)
        debouncedFilter()
    }

    const handleDelete = (id) => {
        deleteAddressBookAction(id)
            .then((response) => {
                toast.success("Address deleted successfully.");
                getAddressBooks();
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <>
            <div>
                {/* Page Heading */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Address Book</h1>
                    <a onClick={toggle} className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                        <i className="fas fa-download fa-sm text-white-50"/> Add New Address
                    </a>
                </div>
                <Modal isOpen={modal} toggle={toggle}>
                    <AddressBookForm toggle={toggle} getAddressBooks={getAddressBooks}/>
                </Modal>
                <AddressBookTable getAddressBooks={getAddressBooks} handleSearch={handleSearch}
                                  handleDelete={handleDelete}/>
            </div>
        </>
    );
};

export default Home;