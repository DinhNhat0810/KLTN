import { Button } from "antd";

const ThemeButton = (props) => {
  const { styles, content, type, disabled, ghost, onClick, className } = props;
  return (
    <Button
      style={styles}
      type={type}
      disabled={disabled}
      ghost={ghost}
      onClick={onClick}
      className={className}
    >
      {content}
    </Button>
  );
};

export default ThemeButton;
