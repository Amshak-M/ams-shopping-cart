import React, { useState, useEffect } from 'react'
import Rating from '../components/Rating'
import products from '../products'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Button, Card, Image, ListGroupItem} from 'react-bootstrap'
import axios from 'axios'

const ProductScreen = ({match}) => {
    const [product, setproduct] = useState([])
    useEffect(() => {
        const fetchProduct = async() => {
            const {data} = await axios.get(`/api/products/${match.params.id}`)
            setproduct(data)
        }
        fetchProduct()
    }, [match])
    /*const product = products.find((p) => p._id === match.params.id)*/
    return (
        <>
            <Link className = 'btn btn-dark my-3' to = '/'> Go Back</Link>
            <Row>
                <Col md ={6}>
                    <Image src = {product.image} alt={product.name} fluid />
                </Col>
                <Col md = {3}>
                    <ListGroup variant = 'flush' >
                        <ListGroupItem>
                            <h3> {product.name} </h3>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                        </ListGroupItem>
                        <ListGroupItem>
                            {product.description}
                        </ListGroupItem>
                    </ListGroup>               
                </Col>
                <Col>
                <Card>
                    <ListGroup variant = 'flush'>
                    <ListGroupItem>
                        <Row>
                            <Col>
                                Price:
                            </Col>
                            <Col>
                                <strong>{product.price}</strong>
                            </Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Row>
                            <Col>
                                Status:
                            </Col>
                            <Col>
                                {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                            </Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem>                        
                        <Button className='btn-block' type='button' dissabled={product.countInStock === 0}>
                            Add to Cart
                        </Button>
                        
                    </ListGroupItem>
                    </ListGroup>                    
                </Card>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen
