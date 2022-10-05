import { Form } from "antd";
import { useState } from "react";
import ThemeButton from "../../../components/Button";
import Input from "../../../components/Input";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [form] = Form.useForm();

  const RenderInput = (props) => {
    const { label, placeholder, name } = props;
    const [firstUnderline, setFirstUnderline] = useState(false);

    const handleFocus = () => {
      setFirstUnderline(true);
    };

    const handleBlur = () => {
      setFirstUnderline(false);
    };

    return (
      <>
        <Input
          stylesLabel={{ fontSize: "18px", marginBottom: "0" }}
          stylesItem={{ marginBottom: "0" }}
          stylesInput={{
            border: "none",
            outline: "none",
            padding: "12px",
            boxShadow: "none",
          }}
          label={label}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          name={name}
        />
        <div
          style={{
            backgroundColor: "#ccc",
          }}
        >
          <span
            style={{
              height: "2px",
              backgroundColor: "#7f7f7f",
              display: "block",
              marginBottom: "20px",
              transition: "width 0.15s linear",
              width: firstUnderline ? "100%" : 0,
            }}
          ></span>
        </div>
      </>
    );
  };

  return (
    <div className="register-container">
      <div>
        <h2>Đăng ký</h2>
        <Form
          form={form}
          name="basic"
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
          <RenderInput
            label={"Tên đăng nhập"}
            placeholder="Tên đăng nhập..."
            name="username"
            rules={[
              {
                required: true,
                message: "Vui lòng điền tên đăng nhập!",
              },
            ]}
          />

          <RenderInput
            label={"Mật khẩu"}
            placeholder="Mật khẩu..."
            name="password"
            type={"password"}
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mật khẩu!",
              },
            ]}
          />

          <div className="register-container__btn">
            <div className="register-container__btn-background"></div>
            <ThemeButton
              styles={{
                color: "#fff",
                border: "none",
                backgroundColor: "transparent",
                textTransform: "uppercase",
                fontWeight: "500",
                fontSize: "16px",
              }}
              content={"Đăng nhập"}
            />
          </div>

          <div className="register-container__link">
            <div>
              Bạn chưa có tài khoản / <Link>Đăng ký ngay</Link>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
