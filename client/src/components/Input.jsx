/* eslint-disable react/prop-types */
const Input = ({
  type,
  placeholder,
  name,
  className,
  value,
  onChange,
  children,
  textLabel,
}) => {
  return (
    <div>
      <label >{textLabel}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className={className}
        value={value}
        onChange={onChange}
      />
      {children}
    </div>
  );
};

export default Input;
