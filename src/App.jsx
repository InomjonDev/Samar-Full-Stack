import { Route, Routes } from "react-router-dom";
import {
	Login,
	Main,
	Register,
	Navbar,
	ArticleDetail,
	CreateArticle
} from "./components";
import { useEffect } from "react";
import AuthService from "./service/auth";
import { useDispatch } from "react-redux";
import { signUserSuccess } from "./slice/auth";
import { getItem } from "./helpers/persistance-storage";
import ArticleService from "./service/article";
import { getArticlesStart, getArticlesSuccess } from "./slice/article";

function App() {
	const dispatch = useDispatch();

	const getUser = async () => {
		try {
			const response = await AuthService.getUser();
			dispatch(signUserSuccess(response.user));
		} catch (error) {
			console.log(error);
		}
	};

	const getArticles = async () => {
		dispatch(getArticlesStart());
		try {
			const response = await ArticleService.getArticles();
			dispatch(getArticlesSuccess(response.articles));
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		const token = getItem("token");
		if (token) getUser();
	}, []);

	return (
		<div>
			<Navbar />
			<div className="container">
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/article/:slug" element={<ArticleDetail />} />
					<Route path="/create-article" element={<CreateArticle />} />
				</Routes>
			</div>
		</div>
	);
}
export default App;
