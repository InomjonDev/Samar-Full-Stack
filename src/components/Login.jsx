import { useState } from "react";
import { registerLogo } from "../constants";
import { Input } from "../ui";
import { useDispatch, useSelector } from "react-redux";
import { signUserFailuer, signUserStart, signUserSuccess } from "../slice/auth";
import AuthService from "../service/auth";

// const initialState = {
// 	username: "",
// 	email: "",
// 	password: ""
// };

function Login() {
	// const [name] = useState(initialState);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const { isLoading } = useSelector(state => state.auth);

	const loginHandler = async e => {
		e.preventDefault();
		dispatch(signUserStart());

		const user = { email, password };

		try {
			const response = await AuthService.userLogin(user);
			console.log(response);
			dispatch(signUserSuccess(response.user));
		} catch (error) {
			// console.log(error.response.data);
			dispatch(signUserFailuer(error.response.data.errors));
		}
	};

	return (
		<div className="text-center mt-5">
			<main className="form-signin w-25 m-auto">
				<form>
					<img
						className="mb-2"
						src={registerLogo}
						alt=""
						width="72"
						height="60"
					/>
					<h1 className="h3 mb-3 fw-normal">Please login</h1>
					<Input
						label={"Email address"}
						state={email}
						setState={setEmail}
						type={"email"}
					/>
					<Input
						label={"Password"}
						state={password}
						setState={setPassword}
						type={"password"}
					/>

					<button
						className="btn btn-primary w-100 py-2 mt-2"
						type="submit"
						onClick={loginHandler}
						disabled={isLoading}
					>
						{isLoading ? "Loading..." : "Login"}
					</button>
				</form>
			</main>
		</div>
	);
}
export default Login;
