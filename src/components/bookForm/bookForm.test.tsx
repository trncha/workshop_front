import { render, screen } from "@testing-library/react";
import BookForm from "./bookForm";
import React from "react";

jest.mock('../../lib/actions', () => ({
	addBook: jest.fn(),
}));

jest.mock("react-dom", () => ({
	...jest.requireActual("react-dom"),
	useFormState: () => [() => { }, null],
}));

describe("BookForm Component", () => {
	beforeEach(() => {
		render(<BookForm />);
	});

	it("should render BookForm", () => {
		expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('Author')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('Description')).toBeInTheDocument();
		expect(screen.getByText('Add New Book')).toBeInTheDocument();
	});

	it('handles useEffect correctly', async () => {
		const mockSetState = jest.fn();
		React.useState = jest.fn(() => [{ name: "", author: "", description: "" }, mockSetState]);
		render(<BookForm />);
	});
});
