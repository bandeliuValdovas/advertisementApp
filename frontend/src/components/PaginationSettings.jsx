import { useState } from "react";
import { Button, Stack } from "react-bootstrap";
import PropTypes from "prop-types";

export default function PaginationSettings({
  pagination,
  setPagination,
  limitObjectName,
  sortFieldOptions,
  searchByFieldName,
}) {
  const [searchedField, setSearchedField] = useState("");

  function handleLimitChange(e) {
    setPagination({ ...pagination, limit: e.target.value, page: 0 });
  }
  function handleSortByChange(e) {
    setPagination({ ...pagination, sortBy: e.target.value });
  }
  function handleSortDescChange(e) {
    setPagination({ ...pagination, sortDesc: e.target.value });
  }
  function handleSearchFieldChange(e) {
    setSearchedField(e.target.value);
  }

  function handleSearchFieldKeydown(e) {
    if (e.key !== "Enter") return;
    handleSearchClick();
  }
  function handleSearchClick() {
    setPagination({ ...pagination, searchedField });
  }

  PaginationSettings.propTypes = {
    pagination: PropTypes.object,
    setPagination: PropTypes.func,
    limitObjectName: PropTypes.string,
    sortFieldOptions: PropTypes.any,
    searchByFieldName: PropTypes.any,
  };

  return (
    <>
      <Stack direction="horizontal" gap={3} className="justify-content-center m-1">
        <section>
          <label>{limitObjectName} on page </label>
          <select
            className=""
            onChange={handleLimitChange}
            value={pagination.limit}
          >
            <option value={10}>10 {limitObjectName}</option>
            <option value={25}>25 {limitObjectName}</option>
            <option value={50}>50 {limitObjectName}</option>
            <option value={100}>100 {limitObjectName}</option>
          </select>
        </section>
        <section className="">
          <label>Sort By</label>
          <select
            className=""
            onChange={handleSortByChange}
            value={pagination.sortBy}
          >
            {sortFieldOptions}
          </select>
        </section>
        <section className="">
          <label>Sorting</label>
          <select
            className=""
            onChange={handleSortDescChange}
            value={pagination.sortDesc}
          >
            <option value="true">sort desc</option>
            <option value="false">sort asc</option>
          </select>
        </section>
      </Stack>
      <section className="">
        {/* <label> {searchByFieldName}</label> */}
        <div className="">
          <input
            className=""
            placeholder={`search ${searchByFieldName}`}
            onKeyDown={handleSearchFieldKeydown}
            onChange={handleSearchFieldChange}
            value={searchedField}
          />
          <Button onClick={handleSearchClick}>search</Button>
        </div>
      </section>
    </>
  );
}
