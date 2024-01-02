import { useState } from "react";
import { Input, Textarea } from "../ui";

function CreateArticle() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [body, setBody] = useState("");
	return (
		<div>
			<h1 className="fs-2 text-center">Create Article</h1>
			<div className="w-50 mx-auto">
				<form>
					<Input label={"Title"} state={title} setState={setTitle} />
					<Textarea
						label={"Description"}
						state={description}
						setState={setDescription}
					/>
					<Textarea
						label={"Body"}
						state={body}
						setState={setBody}
						height={"300px"}
					/>
					<button className="btn btn-primary w-100 py-2 mt-2" type="submit">
						Create
					</button>
				</form>
			</div>
		</div>
	);
}
export default CreateArticle;
