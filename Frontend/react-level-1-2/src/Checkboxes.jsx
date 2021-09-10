import React, { useState, useMemo,useCallback } from 'react';
import { Checkbox } from 'semantic-ui-react';
import './styles/checkboxes.scss';

// Datas for checkboxes
const items = [
  { id: 1, value: 'Item 1' },
  { id: 2, value: 'Item 2' },
  { id: 3, value: 'Item 3' },
  { id: 4, value: 'Item 4' },
];

const useCheckboxes = () => {
    // Hook for select one by one each checkbox
    const [isChecked, setIsChecked] = useState(
      new Array(items.length).fill(false)
    );
  
    // Function to handle changes on items checkboxes 
    const handleIsCheckChange = useCallback((position) => {
      const updatedIsChecked = isChecked.map((item, index) =>
        index === position ? !item : item
      );
  
      setIsChecked(updatedIsChecked);
    }, [isChecked])
  
    // Function to handle changes on select / unselect checkbox
    const isCheckedAll = useMemo(() => 
    isChecked.every((i) => i === true), 
    [isChecked]);
  
    const toggleCheckedAll = useCallback(() => {
      setIsChecked(new Array(items.length).fill(!isCheckedAll))
    }, [isCheckedAll])

    return {
      handleIsCheckChange,
      isChecked,
      toggleCheckedAll,
      isCheckedAll
    }
}

export default function Checkboxes() {
  const {
    handleIsCheckChange,
    isChecked,
    toggleCheckedAll,
    isCheckedAll
  } = useCheckboxes()

  return (
    <div className='container-checkboxes'>
      <Checkbox
        label={isCheckedAll ? 'Unselect all' : 'Select all'}
        checked={isCheckedAll}
        onClick={toggleCheckedAll}
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
