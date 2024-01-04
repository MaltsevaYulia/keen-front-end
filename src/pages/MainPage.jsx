import React from 'react';
import BicycleForm from 'components/BicycleForm/BicycleForm';
import BicyclesList from 'components/BicyclesList/BicyclesList';
import Statistics from 'components/Statistics/Statistics';

import styles from './MainPage.module.scss';

const MainPage = () => {
  return (
    <main className={styles.main}>
      <BicyclesList />
      <div className={styles.wrapper}>
        <BicycleForm />
        <Statistics />
      </div>
    </main>
  );
};

export default MainPage;
