import React from 'react'
import { Button, Card } from 'react-bootstrap'

const SingleBook = ({ image, name, price }) => {
    return (
        <Card className='col-3 m-1 d-inline-block p-0' >
            <Card.Img variant="top" src={image} style={{ width: '10rem', height: "15rem" ,backgroundImage:"cover"}} />
            <Card.Body>
                <Card.Text>{name}</Card.Text>
                <Card.Title>$ {price}</Card.Title>
                <Button variant="primary">ADD TO CARD</Button>
            </Card.Body>
        </Card>
    )
}

export default SingleBook