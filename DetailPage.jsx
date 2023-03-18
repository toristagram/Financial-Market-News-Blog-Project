import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";
import Header from "../components/Header";

function DetailPage() {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const article = posts.find((post) => post.id === Number(id));

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data != null) {
        const postsArray = Object.values(data);
        setPosts(postsArray);
        console.log(postsArray);
      }
    });
  }, []);

  return (
    <>
      <div className="wrapper">
        <Header />
        {article && (
          <div className="detail-container" key={article.id}>
            <h3 style={{ fontSize: "36px", fontWeight: "700" }}>
              {article.title}
            </h3>
            <img src={article.imageUrl} />

            <p style={{ fontSize: "17px", fontWeight: "500" }}>
              {article.description}
            </p>
            <div className="comment-box">
              <div className="comment-text">
                <h5
                  style={{
                    marginBottom: "30px",
                    fontWeight: "700",
                    fontSize: "20px",
                  }}
                >
                  Experts Comment
                </h5>
                <p
                  style={{
                    width: "950px",
                    fontWeight: "700",
                    fontSize: "14px",
                  }}
                >
                  {article.expertComment}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default DetailPage;
