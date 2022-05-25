import React from 'react'
import { Button, Card } from 'react-bootstrap'

const SingleBook = ({ image, name, price, asin, category }) => {
    return (
        <Card
            className='col-6 col-sm-4 col-md-3 m-1 d-inline-block p-0'
            style={{
                maxWidth: '13rem',
                height: "25rem",
                backgroundSize: "contain",
            }}>
            <Card.Img
                variant="top"
                src={image}
                style={{ width: '100%', maxHeight: "17rem", backgroundSize: "contain" }} />
            <Card.Body
                style={{
                    position: "absolute",
                    maxWidth: "13rem",
                    height: "8rem",
                    bottom: 0,
                    lineHeight: "10px",
                    backgroundColor: "white"
                }}
            >
                <Card.Title className='text-truncate text-secondary'>{name}</Card.Title>
                <Card.Title>$ {price}</Card.Title>
                <Card.Text className='text-truncate'>
                    <small className='font-weight-bold text-secondary'>Id : {asin}</small><br></br>
                    <small className='font-weight-bold  text-secondary' >Category : {category}</small>
                </Card.Text>
                {/* <Button variant="primary">ADD TO CARD</Button> */}
            </Card.Body>
        </Card >
    )
}

export default SingleBook