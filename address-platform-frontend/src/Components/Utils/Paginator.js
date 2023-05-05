import {Pagination, PaginationItem, PaginationLink} from "reactstrap";

const Paginator = ({links,action}) => {

    const handlePagination = (page) => {
        action(page);
    }
    return (
        <Pagination>
            {links && links.length > 3 && (
                <>
                    {links.map((link, key) => (
                        link.url === null ?
                            (<PaginationItem key={key}><PaginationLink
                                onClick={handlePagination}
                                previous
                            /></PaginationItem>) :

                            (<PaginationItem key={key}>
                                <PaginationLink  onClick={() => handlePagination(link.label)}>
                                    <span dangerouslySetInnerHTML={{__html: link.label}}></span>
                                </PaginationLink>
                            </PaginationItem>)
                    ))}
                </>
            )}
        </Pagination>

    );
};
export default Paginator;