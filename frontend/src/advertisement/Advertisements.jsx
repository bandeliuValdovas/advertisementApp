import { useEffect, useState } from "react";
import axiosInstance from "../authentication/axiosInstance";
import Advertisement from "./Advertisement";
import PaginationSettings from "../components/PaginationSettings";
import ChangePage from "../components/ChangePage";
import { Container, Row } from "react-bootstrap";

const defaultPagination = {
  page: 0,
  limit: 5,
  sortBy: "title",
  sortDesc: "true",
  searchedField: null,
};

const Advertisements = () => {
  const [advertisementsArray, setAdvertisementsArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [paginationSettings, setPaginationSettings] =
    useState(defaultPagination);
  const [firstPage, setFirstPage] = useState();
  const [lastPage, setLastPage] = useState();
  const [totalPages, setTotalPages] = useState();

  useEffect(() => {
    axiosInstance
      .get(
        `/api/v1/advertisements?page=${
          paginationSettings.page
        }&listSize=${paginationSettings.limit}&sortBy=${
          paginationSettings.sortBy
        }&sortDesc=${paginationSettings.sortDesc}${
          paginationSettings.searchedField
            ? "&contains=" + paginationSettings.searchedField
            : ""
        }`
      )
      .then((data) => {
        setFirstPage(data.data.first);
        setLastPage(data.data.last);
        setTotalPages(data.data.totalPages);
        setAdvertisementsArray(data.data.content);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [
    paginationSettings.page,
    paginationSettings.limit,
    paginationSettings.sortBy,
    paginationSettings.sortDesc,
    paginationSettings.searchedField,
  ]);

  if (isLoading) {
    return <div>DATA IS LOADING</div>;
  }

  return (
    <div>
      <div>
        <div>
          <ChangePage
            pagination={paginationSettings}
            setPagination={setPaginationSettings}
            availablePageNumber={totalPages}
          />
        </div>
        <PaginationSettings
          pagination={paginationSettings}
          setPagination={setPaginationSettings}
          availablePageNumber={totalPages}
          limitObjectName={"advertisemetns"}
          sortFieldOptions={
            <>
              <option value="title">advertisement title</option>
              <option value="price">price</option>
              <option value="city">city</option>
            </>
          }
          searchByFieldName=""
          firstPage={firstPage}
          lastPage={lastPage}
        />
      </div>
      <Container>
        <Row>
          {advertisementsArray.map((advertisement) => {
            return <Advertisement key={advertisement.id} advertisement={advertisement} />;
          })}
        </Row>
      </Container>
      <div>
        <ChangePage
          pagination={paginationSettings}
          setPagination={setPaginationSettings}
          availablePageNumber={totalPages}
        />
      </div>
    </div>
  );
};
export default Advertisements;