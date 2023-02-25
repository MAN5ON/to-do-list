interface ToDos {
	text: string;
	done: boolean;
}

type AddToDo = (text: string) => void;

type ToggleToDo = (selected: ToDos) => void;

type UpdateToDo = (selected: ToDos, value: string) => void;

type DeleteToDo = (selected: ToDos) => void;
