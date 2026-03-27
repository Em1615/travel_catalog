import styles from './TravelCard.module.css';

const TravelCard = ({ id, country, title, description, likes, onLike }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.country}>{country}</p>
      <p className={styles.description}>{description}</p>
      <div className={styles.likeContainer}>
        <span className={styles.likesCount}>❤️ {likes}</span>
        <button className={styles.likeButton} onClick={() => onLike(id)}>
          Нравится
        </button>
      </div>
    </div>
  );
};

export default TravelCard;