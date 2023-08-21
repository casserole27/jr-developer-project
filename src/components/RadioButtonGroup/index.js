export default function RadioButtonGroup({ selectedValue, options, onChange }) {
  
  onChange = e => {
    selectedValue = e.target.value;
    document.getElementById('selection').textContent = `You have chosen ${selectedValue}`;
  };

  const radioEls = options.map(el => {
    return (
      <div>
        <label 
          tabIndex={0}
          >
          <input
            type="radio"
            id={el.value}
            name="options"
            value={el.label}
            checked={selectedValue}
            onChange={onChange}>           
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
      <p className="selection" id="selection"></p>
    </div>
  );
};