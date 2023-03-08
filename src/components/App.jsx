import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import Searchbar from './Searchbar/Searchbar';
import { requestImages } from './services/pixabayAPI';

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(null);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleSearchbarSubmit = query => {
    setQuery(query);
    setImages([]);
    setPage(1);
  };

  const checkLoadMore = (page, totalHits) => {
    return page < Math.ceil(totalHits / 12);
  };

  useEffect(() => {
    if (query === '') return;

    const fetchImages = async () => {
      try {
        setIsLoading(true);
        const data = await requestImages(query, page);
        const { hits, totalHits } = data;

        if (!totalHits) {
          return toast.error('No images. Please try again');
        }

        if (page === 1) {
          toast.success(`We found ${totalHits} images`);
        }

        // this.setState({ images });
        setImages(prevImages => [...prevImages, ...hits]);
        setTotalHits(totalHits);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
  }, [query, page]);

  return (
    <div>
      <Searchbar onSubmit={handleSearchbarSubmit} />
      <ImageGallery images={images} />
      {checkLoadMore(page, totalHits) ? (
        <Button onLoadMore={handleLoadMore} />
      ) : (
        ''
      )}
      {isLoading && <Loader />}
      {error && <p>Oops, something went wrong {error}</p>}
      <ToastContainer autoClose={4000} />
    </div>
  );
};

// export class App extends Component {
//   state = {
//     images: [],
//     query: '',
//     isLoading: false,
//     error: null,
//     page: 1,
//     totalHits: null,
//   };

//   handleLoadMore = () => {
//     this.setState(prev => ({ page: prev.page + 1 }));
//   };

//   //початкові значення при відправці запиту
//   handleSearchbarSubmit = query => {
//     this.setState({
//       query,
//       images: [],
//       page: 1,
//     });
//   };

//   checkLoadMore = (page, totalHits) => {
//     return page < Math.ceil(totalHits / 12);
//   };

//   componentDidUpdate(_, prevState) {
//     const { query, page } = this.state;
//     if (prevState.query !== query || prevState.page !== page) {
//       // console.log(this.state.query, this.state.page);

//       const fetchImages = async () => {
//         try {
//           this.setState({ isLoading: true });
//           const data = await requestImages(query, page);
//           const images = data.hits;
//           const totalHits = data.totalHits;
//           // console.log(images);
//           // console.log(totalHits);

//           if (!totalHits) {
//             return toast.error('No images. Please try again');
//           }

//           if (page === 1) {
//             toast.success(`We found ${totalHits} images`);
//           }

//           // this.setState({ images });
//           this.setState(prevState => ({
//             images: [...prevState.images, ...images],
//             totalHits,
//           }));
//         } catch (error) {
//           this.setState({ error: error.message });
//         } finally {
//           this.setState({ isLoading: false });
//         }
//       };
//       fetchImages();
//     }
//   }

//   render() {
//     const { error, totalHits, page, isLoading } = this.state;
//     return (
//       <div>
//         <Searchbar onSubmit={this.handleSearchbarSubmit} />
//         <ImageGallery images={this.state.images} />
//         {this.checkLoadMore(page, totalHits) ? (
//           <Button onLoadMore={this.handleLoadMore} />
//         ) : (
//           ''
//         )}
//         {isLoading && <Loader />}
//         {error && <p>Oops, something went wrong {error}</p>}
//         <ToastContainer autoClose={4000} />
//       </div>
//     );
//   }
// }
