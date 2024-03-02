"use client";

import { addBook } from "../../lib/actions";
import { useFormState } from "react-dom";
import { useEffect, useState } from "react";

const BookForm = () => {
	const [bookState, SetBookState] = useState({
		name: "",
		author: "",
		description: ""
	})
	
	const [state, formAction] = useFormState(addBook, undefined);

	const handleChange = (event: any) => {
		const { name, value } = event.target;
		SetBookState(prevState => ({ ...prevState, [name]: value }));
	};

	useEffect(() => {
		if (state?.success) {
			SetBookState({ name: "", author: "", description: "" })
		}
	}, [state]);
	return (
		<div className="container mx-auto">
			<form action={formAction} className="bg-white shadow-md rounded-lg p-4">
				<h1 className="text-4xl font-light mb-8 text-gray-700">Add New Book</h1>
				<div className="mb-4">
					<input type="text" value={bookState.name} onChange={handleChange} name="name" placeholder="Name" className="border border-gray-300 p-2 rounded-md w-full" />
				</div>
				<div className="mb-4">
					<input type="text" value={bookState.author} onChange={handleChange}  name="author" placeholder="Author" className="border border-gray-300 p-2 rounded-md w-full" />
				</div>
				<div className="mb-4">
					<input type="text" value={bookState.description} onChange={handleChange}  name="description" placeholder="Description" className="border border-gray-300 p-2 rounded-md w-full" />
				</div>
				<div className="mb-4">
					<button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Add</button>
				</div>
				{state?.error && <div className="text-red-500">{state.error}</div>}
			</form>
		</div>
	);
};

export default BookForm;