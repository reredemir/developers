import React, { useState, useMemo, useCallback } from 'react';
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

  // Init state with an array depends on datas' array length filled with false as default value for checkboxes checked status
  const [isChecked, setIsChecked] = useState(
    new Array(items.length).fill(false)
  );

  // Function to handle the change on checkbox of our items depends on position (index) received in argument, 
  // then if received position (index) matches with map index so reverse boolean of our item and update the state
  const handleIsCheckChange = useCallback(
    (position) => {
      const updatedIsChecked = isChecked.map((item, index) =>
        index === position ? !item : item
      );

      setIsChecked(updatedIsChecked);
    },
    [isChecked]
  );

  // Function to check on each render if our array of boolean are all on true, if it is then return true to send it to our selectAll checkbox attribute 'checked'
  const isCheckedAll = useMemo(
    () => isChecked.every((i) => i === true),
    [isChecked]
  );

  // Function to handle the change on checkbox select all / unselect all, it will fill our state array with the reverse boolean returned by isCheckedAll
  const toggleCheckedAll = useCallback(() => {
    setIsChecked(new Array(items.length).fill(!isCheckedAll));
  }, [isCheckedAll]);

  return {
    handleIsCheckChange,
    isChecked,
    toggleCheckedAll,
    isCheckedAll,
  };
};

export default function Checkboxes() {
  const { handleIsCheckChange, isChecked, toggleCheckedAll, isCheckedAll } =
    useCheckboxes();

  return (
    <div className='container-checkboxes'>
      {/* Checkbox for select / unselect All */}
      <Checkbox
        label={isCheckedAll ? 'Unselect all' : 'Select all'}
        checked={isCheckedAll}
        onClick={toggleCheckedAll}
      />

      {/* Checkboxes mapped on items' datas */}
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
