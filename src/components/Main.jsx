import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../ui";
import { useNavigate } from "react-router-dom";
import { getArticlesStart, getArticlesSuccess } from "../slice/article";
import { useEffect } from "react";
import ArticleService from "../service/article";

function Main() {
	const { articles, isLoading } = useSelector(state => state.article);
	const navigate = useNavigate();
	const dispatch = useDispatch();

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
		getArticles();
	}, []);

	return (
		<>
			{isLoading && <Loader />}
			<div className="album py-5 ">
				<div>
					<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
						{articles.map(item => (
							<div className="col " key={item.id}>
								<div className="card h-100 shadow-sm">
									<svg
										className="bd-placeholder-img card-img-top"
										width="100%"
										height="225"
										xmlns="http://www.w3.org/2000/svg"
										role="img"
										preserveAspectRatio="xMidYMid slice"
										focusable="false"
									>
										<title>Placeholder</title>
										<rect width="100%" height="100%" fill="#55595c"></rect>
									</svg>
									<div className="card-body">
										<p className="card-text fw-bold m-0">{item.title}</p>
										<p className="card-text">{item.description}</p>
									</div>
									<div className="card-footer d-flex justify-content-between align-items-center">
										<div className="btn-group">
											<button
												type="button"
												className="btn btn-sm btn-outline-success"
												onClick={() => navigate(`/article/${item.slug}`)}
											>
												View
											</button>
											<button
												type="button"
												className="btn btn-sm btn-outline-secondary"
											>
												Edit
											</button>
											<button
												type="button"
												className="btn btn-sm btn-outline-danger"
											>
												Edit
											</button>
										</div>
										<small className="text-body-secondary fw-bold text-capitalize">
											{item.author.username}
										</small>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
export default Main;
