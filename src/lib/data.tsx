export const getBooks = async () => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api-workshop/books`)
	if (!response.ok) {
		throw new Error('cannot fetch book')
	}

	return response.json()
};