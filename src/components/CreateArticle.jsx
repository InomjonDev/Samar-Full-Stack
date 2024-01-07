import { useState } from "react";
import ArticleForm from "./ArticleForm";
import ArticleService from "../service/article";
import { useDispatch } from "react-redux";
import {
	postArticleFailure,
	postArticleStart,
	postArticleSuccess
} from "../slice/article";
import { useNavigate } from "react-router-dom";

function CreateArticle() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [body, setBody] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const formSubmit = async e => {
		e.preventDefault();
		const article = { title, description, body };

		dispatch(postArticleStart());
		try {
			await ArticleService.postArticle(article);
			dispatch(postArticleSuccess());
			navigate("/");
		} catch (error) {
			dispatch(postArticleFailure());
		}
	};

	const formProps = {
		title,
		setTitle,
		body,
		setBody,
		description,
		setDescription,
		formSubmit
	};
	return (
		<div>
			<h1 className="fs-2 text-center">Create Article</h1>
			<div className="w-50 mx-auto">
				<ArticleForm {...formProps} />
			</div>
		</div>
	);
}
export default CreateArticle;
