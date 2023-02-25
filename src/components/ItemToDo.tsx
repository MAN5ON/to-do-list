import { useState } from "react";

interface Props {
	todo: ToDos;
	toggleToDo: ToggleToDo;
	updateToDo: UpdateToDo;
	deleteToDo: DeleteToDo;
}

export const ItemToDo = ({
	todo,
	toggleToDo,
	updateToDo,
	deleteToDo,
}: Props) => {
	const [editable, setEditable] = useState(false);
	const [value, setValue] = useState(todo.text);

	const EditHandler = () => {
		updateToDo(todo, value);
		setEditable(false);
	};

	const activeStyle =
		"flex items-center flex-row justify-between text-white mt-2 rounded bg-slate-700 cursor-pointer hover:bg-slate-800";
	const doneStyle =
		"flex items-center flex-row justify-between text-gray-700 mt-2 rounded bg-zinc-800 cursor-pointer hover:bg-zinc-900";

	return (
		<div className={todo.done ? doneStyle : activeStyle}>
			{todo.done ? (
				<span className="bg-green-500 m-1 ml-2 px-2 py-1 rounded font-bold">
					Done!
				</span>
			) : null}
			{editable ? (
				<input
					type="text"
					className="bg-slate-700 p-2 w-full rounded m-2"
					value={value}
					onChange={(event) => setValue(event.target.value)}
				/>
			) : (
				<span
					className={
						!todo.done
							? "font-bold w-full p-1 m-2"
							: "font-bold w-full m-2 p-1 line-through"
					}
					onClick={() => toggleToDo(todo)}
				>
					{todo.text}
				</span>
			)}
			<div className="flex flex-row">
				{!todo.done && !editable ? (
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded m-1"
						onClick={() => setEditable(true)}
					>
						Edit
					</button>
				) : !todo.done && editable ? (
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded m-1"
						onClick={EditHandler}
					>
						Save
					</button>
				) : null}

				<button
					className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded m-1 mr-2"
					onClick={() => deleteToDo(todo)}
				>
					Delete
				</button>
			</div>
		</div>
	);
};
