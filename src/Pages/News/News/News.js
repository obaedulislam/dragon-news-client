import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Button, Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const News = () => {
    const news = useLoaderData();

    const { _id, title, image_url, details, author, rating, total_view } = news;

    return (
      <div>
        <Card className="mb-4 shadow-sm">

          <Card.Body >
            <Card.Img variant="top" src={image_url}/>
            <Card.Title className='mt-3'><h5 className="text-black">{title}</h5></Card.Title>
              <Card.Text>{<p>{details}</p>}</Card.Text>
              <Button className="fw-bold" variant="primary">All News In This Category</Button>
          </Card.Body>

        <div className='d-flex justify-content-between align-items-center bg-light '>
        <Card.Header className="d-flex justify-content-between align-items-center bg-transparent border-0">
              <div className="d-flex align-items-center">
                  <div className='d-flex align-items-center'>
                      <h6 className="mb-0 ms-1"><span className='fw-bold'>Author:</span> {author.name}</h6>
                      <h6 className="mb-0 ms-4"><span className='fw-bold'>Publish Date: </span>{author.published_date}</h6>
                  </div>
              </div>
          </Card.Header>
          <Card.Footer className="text-muted d-flex justify-content-between bg-transparent border-0">
              <div>
                  <FaStar className="text-warning"></FaStar>
                  <span className="ms-2 fw-bold text-black"><small>4.5</small></span>
              </div>
              <div className='ms-3'>
                  <FaEye className="text-warning "></FaEye>
                  <span className="ms-2 fw-bold text-black"><small>{total_view}</small></span>
              </div>
          </Card.Footer>
        </div>
        </Card>
      </div>
    );
   
};

export default News;