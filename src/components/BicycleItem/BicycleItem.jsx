import React, { useState } from 'react';
import statuses from 'constants/statuses';
import styles from './BicycleItem.module.scss';

const BicycleItem = ({ bicycle }) => {
  const { name, type, color, id, status, price,  } =
    bicycle;

  const [isStatListOpen, setIsStatListOpen] = useState(false);

    const onBikeStatusChange = () => {
      setIsStatListOpen(false);
  };
  const deleteBicycle = () => {};

  return (
    <li className={` ${styles.bicycle} ${styles.status}`}>
      <div className={styles.bicycle__info}>
        <p>
          <strong className={styles.bicycle__name}>{name.toUpperCase()}</strong>
          <span>{` - ${type.toUpperCase()} (${color.toUpperCase()})`}</span>
        </p>
        <p className={styles.bicycle__id}>{`ID: ${id}`}</p>
        <div className={` ${styles.bicycle__status} ${styles.status}`}>
          <span className={styles.status__title}>STATUS:</span>
          <span className={styles.status__value}>{status}</span>
          <button
            className={styles.status__arrow}
            onClick={() => setIsStatListOpen(!isStatListOpen)}
          ></button>
          {isStatListOpen && (
            <div className={styles.status__options}>
              {statuses.map(stat => (
                <button
                  key={stat}
                  className={styles.status__btn}
                  onClick={() => onBikeStatusChange(stat)}
                >
                  {stat}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className={styles.bicycle__price}>
        <p>{price} UAH/hr.</p>
      </div>
      <div className={styles.bicycle__cross}>
        <button className={styles.bicycle__crossBtn} onClick={deleteBicycle} />
      </div>
    </li>
  );
};

export default BicycleItem;
