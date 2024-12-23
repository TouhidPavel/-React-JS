import PropTypes from "prop-types"

const Card = (props) => {
    const { cardImage, cardTitle, cardDescription, cardButton } = props
    return(
        <>
            <div className="card">
                <img src={ cardImage } alt="Card Image" className="card-image"/>
                <div className="card-content">
                    <h2 className="card-title">{ cardTitle }</h2>
                    <p className="card-description">{ cardDescription }</p>
                    <button className="card-button">{ cardButton }</button>
                </div>
            </div>
        </>
    )
}

Card.propTypes = {
    cardImage: PropTypes.string.isRequired,
    cardTitle: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardButton: PropTypes.string.isRequired
}
export default Card