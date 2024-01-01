import { useEffect } from "react";
import { isRouteErrorResponse, useParams } from "react-router-dom";
import ArticleService from "../service/article";
import { useDispatch } from "react-redux";
import {
	getArticleDetailFailure,
	getArticleDetailStart,
	getArticleDetailSuccess
} from "../slice/article";

function ArticleDetail() {
	const { slug } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		const getArticleDetail = async () => {
			dispatch(getArticleDetailStart());
			try {
				const response = await ArticleService.getArticleDetail(slug);
				dispatch(getArticleDetailSuccess(response.article));
			} catch (error) {
				dispatch(getArticleDetailFailure());
			}
		};

		getArticleDetail();
	}, [slug]);

	return (
		<div>
			<p>id: {slug}</p>
		</div>
	);
}
export default ArticleDetail;
