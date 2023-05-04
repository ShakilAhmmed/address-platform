import {useState} from "react";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import AddressBookForm from "../../Components/AddressBook/AddressBookForm";

const Home = () => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

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
                    <AddressBookForm toggle={toggle}/>
                </Modal>
            </div>
        </>
    );
};

export default Home;