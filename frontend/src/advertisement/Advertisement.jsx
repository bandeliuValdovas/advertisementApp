import { useNavigate } from "react-router-dom";
import Col from "react-bootstrap/Col";
import { Button, Card } from "react-bootstrap";
import PropTypes from "prop-types";

const Advertisement = ({ advertisement }) => {
  const { id, title, price, description, city } = advertisement;
  const onShowDetailsButton = useNavigate();

  Advertisement.propTypes = {
    advertisement: PropTypes.object,
  };

  return (
    <>
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>Price {price}</Card.Text>
            <Card.Text>city {city}</Card.Text>
            <Button
              variant="primary"
              onClick={() => onShowDetailsButton(`/advertisement/${id}`)}
            >
              Details
            </Button>
            {/* <Button
                            variant='danger'
                            onClick={() => onDeleteButtonClick(donor)}>Delete</Button> */}
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};
export default Advertisement;