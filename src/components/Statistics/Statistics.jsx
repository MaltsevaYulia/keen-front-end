import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStats } from 'store/operations';
import { selectStats } from 'store/selectors';
import styles from './Statistics.module.scss';

const Statistics = () => {
  const stats = useSelector(selectStats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStats());
  }, [dispatch]);

  return (
    <div className={styles.stats}>
      <h2 className={styles.stats__title}>{'Statistics'.toUpperCase()}</h2>
      <p className={styles.stats__string}>
        <span>Total Bikes:</span>
        <strong className={styles.stats__value}>{` ${stats.total}`}</strong>
      </p>
      <p className={styles.stats__string}>
        <span>Available Bikes :</span>
        <strong className={styles.stats__value}>{` ${stats.available}`}</strong>
      </p>
      <p className={styles.stats__string}>
        <span>Booked Bikes:</span>
        <strong className={styles.stats__value}>{` ${stats.booked}`}</strong>
      </p>
      <p className={styles.stats__string}>
        <span>Average bike cost:</span>
        <strong
          className={styles.stats__value}
        >{` ${stats.averagePrice} `}</strong>
        <span>UAH/hr.</span>
      </p>
    </div>
  );
};

export default Statistics;
