import React, { useEffect } from 'react';
import BicycleItem from 'components/BicycleItem/BicycleItem';

import styles from './BicyclesList.module.scss';


const bicycles = [
  {
    name: 'name',
    type: 'type',
    color: 'color',
    id: '123',
    status: 'Available',
    price: '50',
  },
  {
    name: 'name',
    type: 'type',
    color: 'color',
    id: '12533',
    status: 'Available',
    price: '50',
  },
];

const BicyclesList = () => {

    useEffect(() => {
     
    }, [])
    
  return (
    <ul className={styles.list}>
      {bicycles.map(bike => (
        <BicycleItem key={bike._id} bicycle={bike} />
      ))}
    </ul>
  );
};

export default BicyclesList;
