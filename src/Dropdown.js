function Dropdown(props) {
  return (
    <label htmlFor={props.id}>
      {props.name}
      <select 
      id={props.id} 
      value={props.value}
      >
        <option disabled>Select one</option>
        {props.dataArray.map((dataVariable) => (
          <option key={dataVariable} value={dataVariable}>
            {dataVariable}
          </option>
        ))}
      </select>
    </label>
  );
}

export default Dropdown;
