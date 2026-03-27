import TravelCard from '../TravelCard/TravelCard';
import styles from './TravelList.module.css';

const TravelList = ({ travels, onLike }) => {
  if (!travels.length) {
    return <p className={styles.empty}>Нет путешествий для отображения.</p>;
  }
  return (
    <div className={styles.list}>
      {travels.map(travel => (
        <TravelCard
          key={travel.id}
          id={travel.id}
          country={travel.country}
          title={travel.title}
          description={travel.description}
          likes={travel.likes}
          onLike={onLike}
        />
      ))}
    </div>
  );
};

export default TravelList;