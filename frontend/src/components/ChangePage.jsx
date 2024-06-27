import { Button, Stack } from "react-bootstrap";
import PropTypes from "prop-types";

export default function ChangePage({
  pagination,
  setPagination,
  availablePageNumber,
}) {
  function handleNextPage() {
    if (
      availablePageNumber === 1 ||
      pagination.page === availablePageNumber - 1
    )
      return;
    setPagination({ ...pagination, page: pagination.page + 1 });
  }
  function handlePreviousPage() {
    if (pagination.page === 0) return;
    setPagination({ ...pagination, page: pagination.page - 1 });
  }

  ChangePage.propTypes = {
    pagination: PropTypes.object,
    setPagination: PropTypes.func,
    availablePageNumber: PropTypes.number,
  };

  return (
    <Stack direction="horizontal" gap={3} className="justify-content-center m-2" >
      <Button disabled={pagination.page == 0} onClick={handlePreviousPage}>
        PREVIOS PAGE
      </Button>
      <div>
        {pagination.page + 1 + "/" + (availablePageNumber || pagination.page)}
      </div>
      <Button
        disabled={
          availablePageNumber === 1 ||
          pagination.page === availablePageNumber - 1
        }
        onClick={handleNextPage}
      >
        NEXT PAGE
      </Button>
    </Stack>
  );
}
