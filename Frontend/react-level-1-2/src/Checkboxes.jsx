import React, { useState } from 'react';
import { Checkbox } from 'semantic-ui-react';
import './styles/checkboxes.scss';

export default function Checkboxes() {
  // Datas for checkboxes
  const items = [
    { id: 1, value: 'Item 1' },
    { id: 2, value: 'Item 2' },
    { id: 3, value: 'Item 3' },
    { id: 4, value: 'Item 4' },
  ];

  // Hook for select one by one each checkbox
  const [isChecked, setIsChecked] = useState(
    new Array(items.length).fill(false)
  );

  // Function to handdle changes on items checkboxes 
  const handleIsCheckChange = (position) => {
    const updatedIsChecked = isChecked.map((item, index) =>
      index === position ? !item : item
    );

    setIsChecked(updatedIsChecked);
  };

  // Function to handdle changes on select / unselect checkbox
  const updateIsCheckedAll = isChecked.every((i) => i === true) ? true : false;

  return (
    <div className='container-checkboxes'>
      <Checkbox
        label={updateIsCheckedAll ? 'Unselect all' : 'Select all'}
        checked={updateIsCheckedAll}
        onClick={
          isChecked.every(i => i === true)
            ? () => {
                setIsChecked(new Array(items.length).fill(false));
              }
            : () => {
                setIsChecked(new Array(items.length).fill(true));
              }
        }
      />

      {items.map((item, index) => (
        <Checkbox
          key={item.id}
          label={item.value}
          name={item.value}
          checked={isChecked[index]}
          onClick={() => {
            handleIsCheckChange(index);
          }}
        />
      ))}
    </div>
  );
}
