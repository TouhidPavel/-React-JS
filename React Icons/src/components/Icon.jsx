import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoTwitter, BiLogoYoutube } from "react-icons/bi"
function Icon(){
    return(
        <>
            <div style={{display: "flex", gap: "10px"}}>
                <button className="facebook">
                    <BiLogoFacebook className="icon" />
                    Facebook
                </button>

                <button className="twitter">
                    <BiLogoTwitter className="icon" />
                    Twitter
                </button>
                
                <button className="instagram">
                    <BiLogoInstagram className="icon" />
                    Instagram
                </button>

                <button className="linkedin">
                    <BiLogoLinkedin className="icon" />
                    LinkedIn
                </button>

                <button className="youtube">
                    <BiLogoYoutube className="icon" />
                    YouTube
                </button>
            </div>
        </>
    )
}

export default Icon