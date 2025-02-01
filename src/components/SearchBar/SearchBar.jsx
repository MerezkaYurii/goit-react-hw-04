import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import s from './SearchBar.module.css';
import toast from 'react-hot-toast';
const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) {
      toast("I'm waiting for your request");
      return;
    }

    onSubmit(value.trim());
    // setValue('');
  };

  return (
    <header className={s.header}>
      <form className={s.form} onSubmit={handleSubmit}>
        <button className={s.btn} type="submit">
          <FaSearch />
        </button>

        <input
          className={s.input}
          onChange={e => {
            setValue(e.target.value.trim());
          }}
          value={value}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default SearchBar;
