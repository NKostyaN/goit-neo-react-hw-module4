import SearchBar from "./components/SearchBar/SearchBar";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ImageModal from "./components/ImageModal/ImageModal";

const App = () => {
  return (
    <>
      <SearchBar />
      <ImageGallery />
      <ErrorMessage />
      <Loader />
      <LoadMoreBtn />
      <ImageModal />
    </>
  );
};

export default App;
