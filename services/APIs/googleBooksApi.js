
const GOOGLE_BOOKS_API_KEY = 'AIzaSyCByAzohkCj60_H3Tmk9TmPVYEEJgmQhJI';
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

export const searchBookByISBN = async (isbn) => {
  try {
    const response = await fetch(
      `${BASE_URL}?q=isbn:${isbn}&key=${GOOGLE_BOOKS_API_KEY}`
    );
    const data = await response.json();
    
    if (data.items && data.items.length > 0) {
      const book = data.items[0].volumeInfo;
      return {
        thumbnail: book.imageLinks?.thumbnail || null,
        title: book.title,
        authors: book.authors,
        description: book.description,
        categories: book.categories || [], 
        pageCount: book.pageCount,        
        publishedDate: book.publishedDate,
      };
    }
    return null;
  } catch (error) {
    console.error('Erro ao buscar livro:', error);
    return null;
  }
};

export const searchBookByTitle = async (title) => {
  try {
    const response = await fetch(
      `${BASE_URL}?q=intitle:${encodeURIComponent(title)}&key=${GOOGLE_BOOKS_API_KEY}`
    );
    const data = await response.json();
    
    if (data.items && data.items.length > 0) {
      const book = data.items[0].volumeInfo;
      return {
        thumbnail: book.imageLinks?.thumbnail || null,
        title: book.title,
        authors: book.authors,
        description: book.description,
        categories: book.categories || [], 
        pageCount: book.pageCount,        
        publishedDate: book.publishedDate,
      };
    }
    return null;
  } catch (error) {
    console.error('Erro ao buscar livro:', error);
    return null;
  }
};