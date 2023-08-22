export default function RadioButtonGroup({ selectedValue, options, onChange }) {
  
  const handleRadioChange = e => {
    const selectedValue = e.target.value;
    onChange(selectedValue); 
  };

  const radioEls = options.map(el => {
    const styles = {
      backgroundColor: selectedValue === el.label ? '#2c9e2c' : 'lightgray',
      color: selectedValue === el.label ? 'white' : 'black',
      fontWeight: selectedValue === el.label ? '700' : '400',
    };
    
    return (
      <div key={el.value}>
        <label 
          tabIndex={0}
          style={styles}>
          <input
            type="radio"
            id={el.value}
            name="options"
            value={el.label}
            checked={selectedValue === el.label}
            onChange={handleRadioChange}>           
          </input>
          {el.label}
        </label>
      </div>
    );
  });

  return (
    <div className="radio-container">
      <fieldset className="radio-field">
        <legend className="radio-legend">Select an option</legend>
        {radioEls}
      </fieldset>
      </div>
  );
};