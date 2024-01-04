import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import statuses from 'constants/statuses';
import { deleteBicycle, updateBicycleStatus, getStats } from 'store/operations';
import styles from './BicycleItem.module.scss';

const BicycleItem = ({ bicycle }) => {
  const { name, type, color, id, status, price, _id } = bicycle;
  const dispatch = useDispatch();
  const [isStatListOpen, setIsStatListOpen] = useState(false);

  const onBikeStatusChange = (id, newStatus) => {
    setIsStatListOpen(false);
    if (newStatus !== status) {
      dispatch(updateBicycleStatus({ id, status: newStatus }));
    }
  };
  const onDeleteBicycle = id => {
    dispatch(deleteBicycle(id));
    dispatch(getStats());
  };

  return (
    <li className={`${styles.bicycle} ${styles[status.toLowerCase()]}`}>
      <div className={styles.bicycle__info}>
        <p>
          <strong className={styles.bicycle__name}>{name.toUpperCase()}</strong>
          <span>{` - ${type.toUpperCase()} (${color.toUpperCase()})`}</span>
        </p>
        <p className={styles.bicycle__id}>{`ID: ${id}`}</p>
        <div className={` ${styles.bicycle__status} ${styles.status}`}>
          <span>STATUS:</span>
          <div className={styles.status__optionsBox}>
            <button
              className={styles.status__arrow}
              onClick={() => setIsStatListOpen(!isStatListOpen)}
              arial-label="open bicycle status dropdown"
            >
              <span>{status}</span>
              <div
                className={`${styles.status__iconBox} ${
                  isStatListOpen ? styles.status__iconBoxOpen : ''
                }`}
              >
                <svg
                  width="10"
                  height="5"
                  viewBox="0 0 10 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M0 0L5 5L10 0H0Z" fill="black" />
                </svg>
              </div>
            </button>
            {isStatListOpen && (
              <div className={styles.status__options}>
                {statuses.map(stat => (
                  <button
                    key={stat}
                    className={styles.status__btn}
                    onClick={() => onBikeStatusChange(_id, stat)}
                    arial-label="change bicycle status"
                  >
                    {stat}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={styles.bicycle__price}>
        <p>{price} UAH/hr.</p>
      </div>
      <div className={styles.bicycle__cross}>
        <button
          className={styles.bicycle__crossBtn}
          onClick={() => onDeleteBicycle(_id)}
          arial-label="delete bicycle advertisement"
        />
      </div>
    </li>
  );
};

export default BicycleItem;
