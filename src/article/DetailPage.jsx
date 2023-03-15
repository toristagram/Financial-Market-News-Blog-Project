import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Records from "../records.json";

function DetailPage() {
  const { id } = useParams();
  const record = Records[id];

  console.log(record);

  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="detail-container">
          <h3 style={{fontSize:"36px", fontWeight:"700"}}>{record.title}</h3>
          <img src={record.imageUrl} />

          <p style={{fontSize:"17px", fontWeight:"500"}}>{record.description}</p>
          <div className="comment-box">
            <div className="comment-text">
              <h5 style={{ marginBottom: "30px", fontWeight:"700", fontSize:"20px" }}>Experts Comment</h5>
              <p style={{ width: "950px", fontWeight:"700", fontSize:"14px" }}>{record.expertComment}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailPage;
