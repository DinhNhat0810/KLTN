import { Form, Input } from "antd";

const InputBox = (props) => {
  const {
    stylesLabel,
    label,
    name,
    rules,
    disabled,
    defaultValue,
    dependencies,
    prefix,
    size,
    type,
    value,
    allowClear,
    placeholder,
    stylesItem,
    stylesInput,
    onFocus,
    onBlur,
    hasFeedback,
  } = props;

  return (
    <div>
      <p style={{ ...stylesLabel, fontWeight: "500" }}>{label}</p>
      <Form.Item
        name={name}
        rules={rules}
        style={stylesItem}
        hasFeedback={hasFeedback}
        dependencies={dependencies}
      >
        <Input
          defaultValue={defaultValue}
          disabled={disabled}
          prefix={prefix}
          size={size}
          type={type}
          value={value}
          allowClear={allowClear}
          placeholder={placeholder}
          style={{ ...stylesInput, width: "100%" }}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </Form.Item>
    </div>
  );
};

export default InputBox;
