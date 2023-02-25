import { InputToDo } from "./components/InputToDo";
import { ItemToDo } from "./components/ItemToDo";
import { useState } from "react";

const initialState: ToDos[] = [
	{
		text: "Buy me a coffe",
		done: false,
	},
	{
		text: "Create To Do List",
		done: true,
	},
];

function App() {
	const [todos, setTodos] = useState(initialState);

	const toggleToDo = (selected: ToDos) => {
		const newTodos = todos.map((todo) => {
			if (todo === selected) {
				return {
					...todo,
					done: !todo.done,
				};
			}
			return todo;
		});
		setTodos(newTodos);
	};

	const addToDo: AddToDo = (text: string) => {
		const newTodo = { text, done: false };
		setTodos([...todos, newTodo]);
	};

	const updateToDo: UpdateToDo = (selected: ToDos, value: string) => {
		const newTodo = todos.map((todo) => {
			if (todo === selected) {
				return {
					...todo,
					text: value,
				};
			}
			return todo;
		});
		setTodos(newTodo);
	};

	const deleteToDo: DeleteToDo = (selected: ToDos) => {
		const newTodo = todos.filter((todo) => todo !== selected);
		setTodos(newTodo);
	};

	return (
		<div className="m-auto flex flex-col content-center lg:w-1/2 md:w-3/4 sm:w-full mt-15 text-white">
			<h1 className="font-bold text-center text-3xl m-5">
				What I need{" "}
				<a
					href="https://hh.ru/resume/0c4166e4ff09aef6630039ed1f5273344b4732"
					className="text-gray-500 hover:text-gray-700"
				>
					To Do
				</a>
			</h1>
			<InputToDo addToDo={addToDo} />
			{todos
				.map((item, index) => (
					<ItemToDo
						key={index}
						todo={item}
						toggleToDo={toggleToDo}
						updateToDo={updateToDo}
						deleteToDo={deleteToDo}
					/>
				))
				.reverse()}
		</div>
	);
}

export default App;
