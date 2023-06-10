// import { Formic } from 'formik';
import { Component } from 'react';
import css from './Searchbar.module.css'

export class SearchBar extends Component {
  state = {
    listName: '',
  };
  handleListSubmit = evt => {
    evt.preventDefault();
    if (this.state.listName.trim() === '') {
      alert('Заповніть поле пошуку і тоді ми знайдем для Вас зображення')
      return
    }
    this.props.onSubmit(this.state.listName);
    this.setState({ listName: '' });
  };
  handleListChange = evt => {
    this.setState({ listName: evt.currentTarget.value.toLowerCase() });
  };
  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.searchform} onSubmit={this.handleListSubmit}>
          <button type="submit" className={css.searchformbutton}>
            <span className={css.searchformbuttonlabel}>Search</span>
          </button>

          <input
            name="title"
            className={css.searchforminput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleListChange}
            value={this.state.listName}
          />
        </form>
      </header>
    );
  }
}
