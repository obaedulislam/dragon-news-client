import React from "react";
import { Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsSummaryCard = ({ news }) => {
  console.log(news);
  const { _id, title, image_url, details, author, rating, total_view } = news;

  return (
    <div>
      <Card className="mb-4 shadow-sm">
        <Card.Header className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
                <div>
                    <Image
                        roundedCircle
                        src={author.img}
                        style={{height: '50px'}}
                    ></Image>
                </div>
                <div className="ms-2">
                    <h6 className="mb-0 fw-bold">{author.name}</h6>
                    <p className="mb-0">{author.published_date}</p>
                </div>
            </div>
            <div>
                <FaRegBookmark className="me-2 h5 mb-0"></FaRegBookmark>
                <FaShareAlt className="h5 mb-0"></FaShareAlt>
            </div>
        </Card.Header>
        <Card.Body>
          <Card.Title><h5 className="text-black">{title}</h5></Card.Title>
          <Card.Img variant="top" src={image_url}/>
            <Card.Text>
                {
                    details.length> 250 ? 
                    <p>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read More</Link></p>:
                    <p>{details}</p>
                }
            </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex justify-content-between">
            <div>
                <FaStar className="text-warning"></FaStar>
                <span className="ms-2 fw-bold text-black"><small>4.5</small></span>
            </div>
            <div>
                <FaEye className="text-warning"></FaEye>
                <span className="ms-2 fw-bold text-black"><small>{total_view}</small></span>
            </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsSummaryCard;
