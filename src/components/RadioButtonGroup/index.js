export default function RadioButtonGroup({ selectedValue, options, onChange }) {
  
  const radioEls = options.map(el => {
    return (
      <div>
        <label>
          <input
            type="radio"
            id={el.value}
            name="options"
            value={el.label}>
          </input>
          {el.label}
        </label>
      </div>
    )
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