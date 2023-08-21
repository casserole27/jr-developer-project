export default function RadioButtonGroup({ selectedValue, options, onChange }) {
  
  onChange = e => {
    selectedValue = e.target.value;
    document.getElementById('selection').textContent = `You have chosen ${selectedValue}`;
  };

  const radioEls = options.map(el => {
    return (
      <div>
        <label>
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
    <div>
      <fieldset>
        <legend>Select an option</legend>
        {radioEls}
        <p id="selection"></p>
      </fieldset>
    </div>
  );
};