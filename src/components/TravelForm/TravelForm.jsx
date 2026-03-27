import { useState } from 'react';
import styles from './TravelForm.module.css';

const TravelForm = ({ onAddTravel }) => {
  const [country, setCountry] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!country.trim() || !title.trim() || !description.trim()) {
      alert('Заполните все поля');
      return;
    }
    onAddTravel({ country, title, description });
    setCountry('');
    setTitle('');
    setDescription('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.title}>Добавить новое путешествие</h3>
      <input
        type="text"
        placeholder="Страна"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className={styles.input}
      />
      <input
        type="text"
        placeholder="Название"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={styles.input}
      />
      <textarea
        placeholder="Краткое описание"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={styles.textarea}
      />
      <button type="submit" className={styles.button}>
        Добавить
      </button>
    </form>
  );
};

export default TravelForm;