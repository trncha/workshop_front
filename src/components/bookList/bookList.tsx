import { getBooks } from "../../lib/data";
import { deleteBook } from "../../lib/actions";

const BookList = async () => {
	const books = await getBooks();

	return (
		<div className="container mx-auto">
			<h1 className="text-4xl font-light mb-8 text-gray-700">Book List V1</h1>
			{books.responseData.map((book: { id: string, name: string, author: string, description: string }) => (
				<div key={book.id} className="bg-white shadow-md rounded-lg p-6 mb-6 relative">
					<div className="flex justify-between items-start">
						<div>
							<div className="mb-4">
								<span className="font-semibold">Name:</span> {book.name}
							</div>
							<div className="mb-4">
								<span className="font-semibold">Author:</span> {book.author}
							</div>
							<div className="mb-4">
								<span className="font-semibold">Description:</span> {book.description}
							</div>
						</div>
						<form action={deleteBook} className="inline">
							<input type="hidden" name="id" value={book.id} />
							<button type="submit" className="text-white bg-red-500 hover:bg-red-700 rounded-full p-2 absolute top-0 right-0 mt-2 mr-2">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
						</form>
					</div>
				</div>
			))}
		</div>
	);
};

export default BookList;
