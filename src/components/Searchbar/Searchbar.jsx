import { FaSearch } from 'react-icons/fa';
import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StyledSearchbar } from './SearchbarStyled';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleQueryChange = e => {
    this.setState({ query: e.target.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.query.trim() === '') {
      return toast.warn('Please enter search parameter');
    }
    //при відпраці форми пропсам з App передаємо значення query
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <StyledSearchbar className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <FaSearch />
          </button>
          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleQueryChange}
            value={this.state.query}
          />
        </form>
      </StyledSearchbar>
    );
  }
}

export default Searchbar;
