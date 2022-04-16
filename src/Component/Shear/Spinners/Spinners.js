import React from "react";
import { Button, Spinner } from "react-bootstrap";

const Spinners = () => {
  return (
    <div>
      <div className="container text-center p-5">
        <div>
          <Button variant="danger" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Spinners;
