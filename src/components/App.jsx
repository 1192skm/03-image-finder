import { Component } from 'react';
import { BtnLoadMore } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import { Loader } from './Loader/Loader';
import { SearchBar } from './Searchbar/Searchbar';
import { getImages } from 'services/api';
import css from './App.module.css';

export class App extends Component {
  abortCtrl;
  state = {
    listName: '',
    list: [],
    isLoading: false,
    error: null,
    page: 1,
    totalHits: null,
  };

  async componentDidUpdate(_, prevState) {
    const { listName, page } = this.state;
    if (prevState.listName !== this.state.listName) {
      this.abortCtrl = new AbortController();
      try {
        this.setState({ list: [], isLoading: true, error: null });
        const images = await getImages(listName, page, {
          signal: this.abortCtrl.signal,
        });
        if (images.hits.length) {
          this.setState({ list: images.hits, totalHits: images.totalHits });
        } else {
          this.setState({
            error: `Зображення по запиту ${listName} не знайдені!`,
          });
        }
      } catch (error) {
        this.setState({ error: error.message });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleBtnMoreClick = async () => {
    const { listName, page } = this.state;
    this.abortCtrl = new AbortController();
    try {
      this.setState(prevState => ({
        isLoading: true,
        error: null,
        page: prevState + 1,
      }));
      const images = await getImages(listName, page, {
        signal: this.abortCtrl.signal,
      });
      this.setState(prevState => ({
        list: [...prevState.list, ...images],
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleListNameSubmit = listName => {
    this.setState({ listName });
  };

  render() {
    const { list, isLoading, error, totalHits } = this.state;
    return (
      <div className={css.app}>
        <SearchBar
          className={css.searchbar}
          onSubmit={this.handleListNameSubmit}
        />
        {error && <h1>{error}</h1>}
        {isLoading && <div>Loading...</div>}
        {!isLoading && <ImageGallery list={list} />}
        {!isLoading && totalHits > 12 && !error && (
          <BtnLoadMore onClick={this.handleBtnMoreClick} />
        )}
      </div>
    );
  }
}
