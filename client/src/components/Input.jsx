import PropTypes from 'prop-types';

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
      <label>{textLabel}</label>
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

Input.propTypes = {
  type: PropTypes.node,
  className: PropTypes.node,
  children: PropTypes.node,
  onChange: PropTypes.func,
  placeholder: PropTypes.node,
  name: PropTypes.node,
  value: PropTypes.node,
  textLabel: PropTypes.node,
};

export default Input;