export default function RadioButtonGroup({ selectedValue, options, onChange }) {
  
  const radioEls = options.map(el => {
    const styles = {
      backgroundColor: selectedValue === el.label ? '#2c9e2c' : 'lightgray',
      color: selectedValue === el.label ? 'white' : 'black',
      fontWeight: selectedValue === el.label ? '700' : '400',
    };
    
    return (
    <div key={el.value}>
      <button
        type="button"
        style={styles}
        role="radio"
        value={el.label}
        aria-checked={selectedValue === el.label}
        onClick={e => onChange(e.target.value)}>
        {el.label}
      </button>
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