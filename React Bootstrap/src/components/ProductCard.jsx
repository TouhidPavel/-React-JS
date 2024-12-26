import "bootstrap/dist/css/bootstrap.min.css"
import PropTypes from "prop-types"
import { Button, Card } from "react-bootstrap"

const ProductCard = ({ productImage, productTitle, productDescription, productButton }) => {
    return(
        <>
            <Card className="shadow-sm" style={{ width: "18rem" }}>
                <Card.Img
                    variant="top"
                    src={ productImage }
                    alt={`Image of ${productTitle}`}
                    className="img-fluid"
                    style={{ objectFit: "cover", height: "200px" }}
                />
                <Card.Body>
                    <Card.Title>{ productTitle }</Card.Title>
                    <Card.Text>{ productDescription }</Card.Text>
                    <Button variant="outline-primary">{ productButton }</Button>
                </Card.Body>
            </Card>
        </>
    )
}

ProductCard.propTypes = {
    productImage: PropTypes.string.isRequired,
    productTitle: PropTypes.string.isRequired,
    productDescription: PropTypes.string.isRequired,
    productButton: PropTypes.string.isRequired
}
export default ProductCard