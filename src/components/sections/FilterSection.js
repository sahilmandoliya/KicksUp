import { useState } from "react";
import { Card, Form, Button, Image } from "react-bootstrap";

const FilterSection = ({ filters, setFilters }) => {
  const [cost, setCost] = useState({ value: "", checked: false });
  const [type, setType] = useState({ value: "", checked: false });

  const applyFiltersHandler = () => {
    const updatedFilters = {};

    if (cost.checked) {
      const costLimits = cost.value.split("-");
      const minLimit =
        costLimits.length === 2
          ? parseInt(costLimits[0])
          : parseInt(costLimits[0].split("+")[0]);
      const maxLimit =
        costLimits.length === 2 ? parseInt(costLimits[1]) : Infinity;

      updatedFilters.cost = { min: minLimit, max: maxLimit };
    }

    if (type.checked) {
      updatedFilters.type = type.value;
    }

    if (JSON.stringify(updatedFilters) !== JSON.stringify(filters)) {
      setFilters(updatedFilters);
    }
  };

  return (
    <Card className="border-0 shadow w-100 px-4 pt-3">
      <Card.Body className="px-0 py-2">
        <Card.Title className="d-flex justify-content-between">
          FILTERS
          <i className="fa-solid fa-filter"></i>
        </Card.Title>

        <Card.Title className="mt-4">Cost</Card.Title>
        <Form>
          {["1500-4000", "4001-7000", "7001+"].map((label) => (
            <Form.Check
              key={label}
              type="checkbox"
              label={`Rs. ${label}`}
              disabled={cost.checked && cost.value !== label}
              onChange={() => {
                setCost({
                  checked: !cost.checked,
                  value: !cost.checked ? label : "",
                });
              }}
            />
          ))}
        </Form>

        <Card.Title className="mt-4">Colour</Card.Title>
        <Form>
          {["red", "blue", "yellow", "green", "gold"].map((color) => (
            <Image
              key={color}
              src={`${process.env.PUBLIC_URL}/assets/images/colors/${color}.png`}
              className="me-3 mb-3"
              width="30px"
              role="button"
            />
          ))}
        </Form>

        <Card.Title className="mt-3">Design templates</Card.Title>
        <Form>
          {["2", "3", "3+"].map((label) => (
            <Form.Check key={label} type="checkbox" label={label} />
          ))}
        </Form>

        <Card.Title className="mt-4">Type</Card.Title>
        <Form>
          {["Loafers", "Sneakers"].map((label) => (
            <Form.Check
              key={label}
              type="checkbox"
              label={label}
              disabled={type.checked && type.value !== label}
              onChange={() => {
                setType({
                  checked: !type.checked,
                  value: !type.checked ? label : "",
                });
              }}
            />
          ))}
        </Form>

        <Button
          variant="dark"
          size="sm"
          className="d-block mb-2 mx-auto"
          style={{ marginTop: "3.3rem" }}
          onClick={applyFiltersHandler}
        >
          Apply
        </Button>
      </Card.Body>
    </Card>
  );
};

export default FilterSection;
