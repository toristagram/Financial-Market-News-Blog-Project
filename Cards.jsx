import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";
import Card from "react-bootstrap/Card";

function Cards() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setPosts([]);
      const data = snapshot.val();
      if (data != null) {
        Object.values(data).map((post) => {
          setPosts((oldArray) => [...oldArray, post]);
        });
      }
    });
  }, []);

  return (
    <>
      <div className="card-container">
        {posts.map((post) => (
          <Card key={post.id} style={{ border: "none", borderRadius: "0px" }}>
            <Link to={"/article/" + post.id}>
              <Card.Img
                variant="top"
                src={post.imageUrl}
                style={{ borderRadius: "0px" }}
              />
              <Card.Body>
                <Card.Text>
                  {post.title}
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
