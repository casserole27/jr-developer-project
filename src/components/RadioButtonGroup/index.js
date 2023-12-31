export default function RadioButtonGroup({ selectedValue, options, onChange }) {
  
  const handleRadioChange = e => {
    onChange(e.target.value);
  };

  const handleRadioKeyDown = (e, el) => {
    if (e.key === 'Enter') {
      onChange(el.label);
    }
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
        style={styles}
        onKeyDown={e => handleRadioKeyDown(e, el)}>
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
    )
  });

  return (
    <div className="radio-container">
      <fieldset className="radio-field">
        <legend className="radio-legend">Select an option</legend>
        {radioEls}
      </fieldset>
    </div>
  )
};