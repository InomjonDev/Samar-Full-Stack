import { Route, Routes } from "react-router-dom";
import { Login, Main, Register, Navbar } from "./components";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</div>
	);
}
export default App;
