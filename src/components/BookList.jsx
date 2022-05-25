import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import arrayOfBooks from "../books/history.json"
import SingleBook from './SingleBook'

export class BookList extends Component {
    render() {
        return (
            <Container className='col-12 d-flex flex-wrap justify-content-between align-items-center bg-dark'>
                {arrayOfBooks.map((book) => (
                    <SingleBook
                        key={book.asin}
                        image={book.img}
                        name={book.title}
                        price={book.price}
                        asin={book.asin}
                        category={book.category}
                    />
                ))}

            </Container>

        )
    }
}

export default BookList