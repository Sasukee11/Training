import { Link } from "react-router-dom"

function Navigation() {
    return (
        <ul className=" flex flex-row justify-between align-middle px-8 py-4 bg-teal-50">
            <li key="1"><Link to="/">Home</Link></li>
            <li key="2"><Link to="/Blog">Blog</Link></li>
            <li key="3"><Link to="/ContactUs">Contact Us</Link></li>
        </ul>
    )
}

export default Navigation
