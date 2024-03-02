import { Suspense } from "react";
import BookList from '../components/bookList/bookList'
import BookForm from '../components/bookForm/bookForm'

const Page = () => {
	return (
		<div className="flex justify-center space-x-10 p-10 bg-gray-100">
			<div className="w-1/2">
				<Suspense fallback={<div>Loading...</div>}>
					<BookList />
				</Suspense>
			</div>
			<div className="w-1/2">
				<BookForm />
			</div>
		</div>
	);
};

export default Page;