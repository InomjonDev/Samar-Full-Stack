import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
	const { loggedIn, user } = useSelector(state => state.auth);
	return (
		<div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-3">
			<Link
				to="/"
				className="d-flex align-items-center link-body-emphasis text-decoration-none"
			>
				<img src={logo} alt="" />
				<span className="fs-4">Pricing example</span>
			</Link>

			<nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
				{loggedIn ? (
					<>
						<p className="me-3 py-2 m-0 text-dark text-decoration-none">
							{user.username}
						</p>
						<button className="btn btn-outline-danger">Logout</button>
					</>
				) : (
					<>
						<Link
							to="/login"
							className="me-3 py-2 link-body-emphasis text-decoration-none"
						>
							Login
						</Link>
						<Link
							to="/register"
							className="me-3 py-2 link-body-emphasis text-decoration-none"
						>
							Register
						</Link>
					</>
				)}
			</nav>
		</div>
	);
}
export default Navbar;
