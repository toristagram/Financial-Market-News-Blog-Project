import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Records from "../records.json";

function Cards() {
  return (
    <>
      <div className="card-container">
        {Records.map((record, index) => (
          <Card key={index} style={{ border: "none", borderRadius: "0px" }}>
            <Link to={"/article/" + record.id}>
              <Card.Img
                variant="top"
                src={record.imageUrl}
                style={{ borderRadius: "0px" }}
              />
              <Card.Body>
                <Card.Text>
                  {record.title}
                  <p>
                    <a
                      style={{ color: "#fff" }}
                      href={"https://www.reuters.com/article"}
                    >
                      https://www.reuters.com/article
                    </a>
                  </p>
                </Card.Text>
              </Card.Body>
            </Link>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Cards;
