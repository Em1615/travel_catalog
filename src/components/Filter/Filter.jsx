import styles from './Filter.module.css';

const Filter = ({ countries, filterCountry, onFilterChange }) => {
  return (
    <div className={styles.filter}>
      <label htmlFor="country-filter">Фильтр по стране: </label>
      <select
        id="country-filter"
        value={filterCountry}
        onChange={(e) => onFilterChange(e.target.value)}
        className={styles.select}
      >
        <option value="">Все страны</option>
        {countries.map(country => (
          <option key={country} value={country}>{country}</option>
        ))}
      </select>
    </div>
  );
};

export default Filter;