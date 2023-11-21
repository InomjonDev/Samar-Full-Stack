import { useState } from "react";

function Input({ label, state, setState, type = "text" }) {
	return (
		<div class="form-floating mb-2">
			<input
				type={type}
				class="form-control"
				id="floatingInput"
				placeholder={label}
				value={state}
				onChange={e => setState(e.target.value)}
			/>
			<label for="floatingInput">{label}</label>
		</div>
	);
}
export default Input;
