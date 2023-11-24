import { useState } from "react";

function Input({ label, state, setState, type = "text" }) {
	return (
		<div className="form-floating mb-2">
			<input
				type={type}
				className="form-control"
				id="floatingInput"
				placeholder={label}
				value={state}
				onChange={e => setState(e.target.value)}
			/>
			<label htmlFor="floatingInput">{label}</label>
		</div>
	);
}
export default Input;
