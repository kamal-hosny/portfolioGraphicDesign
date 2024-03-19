// import React
import React from "react";
// import Icons MUI
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";


export default function Social() {
    return (
        <div className="social">
            <a href="abdullahmahmoud2424@gmail.com" target="_blank">
                <EmailOutlinedIcon className="icon email" />
            </a>
            <a href="https://www.instagram.com/abdullah.mahmoud.official/?hl=ar" target="_blank">
                <InstagramIcon className="icon instagram" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100039570159394&locale=ar_AR" target="_blank">
                <FacebookOutlinedIcon className="icon facebook" />
            </a>
            <a href="https://wa.link/84qspt" target="_blank">
                <WhatsAppIcon className="icon whatsapp" />
            </a>
        </div>
    )
}
