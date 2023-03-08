import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StyledSearchbar } from './SearchbarStyled';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleQueryChange = e => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      return toast.warn('Please enter search parameter');
    }
    //при відпраці форми пропсам з App передаємо значення query
    onSubmit(query);
    setQuery('');
  };

  return (
    <StyledSearchbar className="searchbar">
      <form className="form" onSubmit={handleSubmit}>
        <button type="submit" className="button">
          <FaSearch />
        </button>
        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleQueryChange}
          value={query}
        />
      </form>
    </StyledSearchbar>
  );
};
// class Searchbar extends Component {
//   state = {
//     query: '',
//   };

//   handleQueryChange = e => {
//     this.setState({ query: e.target.value.toLowerCase() });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     if (this.state.query.trim() === '') {
//       return toast.warn('Please enter search parameter');
//     }
//     //при відпраці форми пропсам з App передаємо значення query
//     this.props.onSubmit(this.state.query);
//     this.setState({ query: '' });
//   };

//   render() {
//     return (
//       <StyledSearchbar className="searchbar">
//         <form className="form" onSubmit={this.handleSubmit}>
//           <button type="submit" className="button">
//             <FaSearch />
//           </button>
//           <input
//             className="input"
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             onChange={this.handleQueryChange}
//             value={this.state.query}
//           />
//         </form>
//       </StyledSearchbar>
//     );
//   }
// }

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
