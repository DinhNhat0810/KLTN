import { Checkbox } from "antd";

const ThemeCheckbox = (props) => {
  const {
    autoFocus,
    checked,
    defaultChecked,
    disabled,
    indeterminate,
    onChange,
    stylesCheckbox,
    stylesLabel,
    label,
  } = props;
  return (
    <>
      {label && <p style={stylesLabel}>{label}</p>}
      <Checkbox
        style={stylesCheckbox}
        autoFocus={autoFocus}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        indeterminate={indeterminate}
        onChange={onChange}
      ></Checkbox>
    </>
  );
};

export default ThemeCheckbox;
