import { useState } from "react";

interface Props {
	addToDo: AddToDo;
}

export const InputToDo = ({ addToDo }: Props) => {
	const [text, setText] = useState("");

	return (
		<form className="flex items-center flex-row justify-between w-full m-auto p-auto bg-slate-700 rounded hover:bg-slate-800">
			<input
				type="text"
				placeholder="Add To Do"
				className="bg-slate-700 p-2 w-full rounded m-2"
				value={text}
				onChange={(event) => setText(event.target.value)}
			/>
			<button
				type="submit"
				className="bg-blue-500 hover:bg-blue-700 font-bold py-2 mr-2 px-4 rounded"
				onClick={(event) => {
					event.preventDefault();
					addToDo(text);
					setText("");
				}}
			>
				Add
			</button>
		</form>
	);
};
