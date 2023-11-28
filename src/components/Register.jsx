import { useState } from "react";
import { registerLogo } from "../constants";
import { Input } from "../ui";
import { useDispatch, useSelector } from "react-redux";
import {
	registerUserFailure,
	registerUserStart,
	registerUserSuccess
} from "../slice/auth";
import AuthService from "../service/auth";

// const initialState = {
// 	username: "",
// 	email: "",
// 	password: ""
// };

function Register() {
	// const [name] = useState(initialState);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch(state => state.auth);
	const { isLoading } = useSelector(state => state.auth);

	const registerHandler = async e => {
		e.preventDefault();
		dispatch(registerUserStart());

		const user = {
			username: name,
			email,
			password
		};

		try {
			const response = await AuthService.userRegister(user);
			console.log(response);
			console.log(user);
			dispatch(registerUserSuccess());
		} catch (error) {
			dispatch(registerUserFailure());
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
					<h1 className="h3 mb-3 fw-normal">Please register</h1>

					<Input label={"Username"} state={name} setState={setName} />
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
						onClick={registerHandler}
						disabled={isLoading}
					>
						{isLoading ? "Loading..." : "Register"}
					</button>
				</form>
			</main>
		</div>
	);
}
export default Register;
