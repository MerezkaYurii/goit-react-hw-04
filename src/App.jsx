import SearchBar from './components/SearchBar/SearchBar';
import toast, { Toaster } from 'react-hot-toast';
import { useState, useEffect } from 'react';

import './App.css';
import { fetchPictures } from './services/Api';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';

function App() {
  const [pictures, setPictures] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchPictures(query, page);
        if (data.length === 0) {
          toast.error('No images found');
        }

        setPictures(prev => [...prev, ...data]);
      } catch {
        setIsError(true);
        toast.error('Error! please try again later');
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleQuery = newQuery => {
    setQuery(newQuery);
    setPictures([]);
    setPage(1);
  };
  const countPage = () => {
    setPage(prev => prev + 1);
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <SearchBar onSubmit={handleQuery} />

      {isLoading && <Loader />}

      {pictures.length > 0 && <ImageGallery pictures={pictures} />}
      {pictures.length > 0 && <LoadMoreBtn onClick={countPage} />}
    </>
  );
}

export default App;
