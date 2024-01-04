import React from 'react';
import BicycleItem from 'components/BicycleItem/BicycleItem';

const BicyclesList = ({ bicycles }) => {
  return (
    <ul>
      {[...bicycles]
        .sort((bike1, bike2) => bike1.status.localeCompare(bike2.status))
        .map(bike => (
          <BicycleItem key={bike._id} bicycle={bike} />
        ))}
    </ul>
  );
};

export default BicyclesList;
