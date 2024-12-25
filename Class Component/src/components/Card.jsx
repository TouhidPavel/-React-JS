import PropTypes from "prop-types"
import { Component } from "react"

class Card extends Component {
    render() {
        const { profileImage, fullName, designation, phones, email } = this.props
        return(
            <div className="card">
                <img src={ profileImage } alt={`${fullName}'s Profile`} className="profile-image"/>
                <div className="card-content">
                    <h2 className="full-name">{ fullName }</h2>
                    <p className="designation">{ designation }</p>
                    <div className="contact">
                        {
                            phones.map((phone, index) => 
                                <p key={index}>Phone: {phone.home} <br/> Work: {phone.work}</p>
                            )
                        }
                    </div>
                    <p className="email">{ email }</p>
                    <button className="view-details-button">View Details</button>
                </div>
            </div>
        )
    }
}

Card.propTypes = {
    profileImage: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
    phones: PropTypes.arrayOf(
        PropTypes.shape({
            home: PropTypes.string.isRequired,
            work: PropTypes.string.isRequired
        })
    ).isRequired,
    email: PropTypes.string.isRequired
}
export default Card