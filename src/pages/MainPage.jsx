import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BicycleForm from 'components/BicycleForm/BicycleForm';
import BicyclesList from 'components/BicyclesList/BicyclesList';
import Statistics from 'components/Statistics/Statistics';
import { getBicycles, getStats } from 'store/operations';
import { selectBicycles, selectIsLoading } from 'store/selectors';

import styles from './MainPage.module.scss';
import Loader from 'components/Loader/Loader';

const MainPage = () => {
  const bicycles = useSelector(selectBicycles);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBicycles());
  }, [dispatch]);
    
    useEffect(() => {
      dispatch(getStats());
    }, [bicycles, dispatch]);
    
  return (
    <main className={styles.main}>
      <div className={styles.main__bicycles}>
        {bicycles.length ? (
          <BicyclesList bicycles={bicycles} />
        ) : (
          <p className={styles.main__empty}>No data</p>
        )}
      </div>

      <div className={styles.main__form}>
        <BicycleForm />
        <Statistics />
      </div>
      {isLoading && <Loader />}
    </main>
  );
};

export default MainPage;
