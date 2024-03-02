"use server";
import { revalidatePath } from "next/cache";

export type FormStateBook = {
	name: string,
	author: string,
	description: string,
};
export async function addBook(prevState: any, formData: FormData) {
	const { name, author, description } = Object.fromEntries(formData);
	const bookData = { name, author, description };
	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api-workshop/books`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(bookData)
		})

		if (!response.ok) {
			throw new Error("cannot fetch book");

		}

		revalidatePath("/");
		return {
			success: true,
			errors: {
				text: undefined,
			},
		};

	} catch (error) {
		return { error: "Something went wrong!" };
	}
};

export const deleteBook = async (formData: FormData) => {
	const { id } = Object.fromEntries(formData);

	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api-workshop/books/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-type': 'application/json'
			}
		})

		if (!response.ok) {
			throw new Error("cannot fetch book");

		}

		revalidatePath("/");

	} catch (error) {
		return { error: "Something went wrong!" };
	}
};
