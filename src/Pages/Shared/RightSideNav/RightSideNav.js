import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLinkedin, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical className='w-100'>
                <Button className='mb-2 ' variant="outline-primary rounded"><FaGoogle></FaGoogle> Login With Google</Button>
                <Button variant="outline-dark rounded"><FaGithub></FaGithub>  Login With GitHub</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h5>Find Us On:</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'> <FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaLinkedin></FaLinkedin> Linked In</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaYoutube></FaYoutube> Youtube</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch></FaTwitch> Twitch </ListGroup.Item>
                </ListGroup>
            </div>
            <div className='mt-3'>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;