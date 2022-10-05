import { Form } from "antd";
import { useState } from "react";
import ThemeButton from "../../../components/Button";
import Input from "../../../components/Input";
import { Link } from "react-router-dom";
import "./register.css";
import ThemeCheckbox from "../../../components/Checkbox";

const Register = () => {
  const [form] = Form.useForm();
  const [formData, setFormData] = useState({ accountType: "customer" });
  const [typeAccount, setTypeAccount] = useState("customer");

  const RenderInput = (props) => {
    const { label, placeholder, name, rules, hasFeedback, dependencies, type } =
      props;
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
          dependencies={dependencies}
          rules={rules}
          hasFeedback={hasFeedback}
          label={label}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          name={name}
          type={type}
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

  const onChangeCheckbox = (e, field) => {
    setTypeAccount(field);
    setFormData({ ...formData, accountType: field });
  };

  const onFinish = (values) => {
    setFormData({ ...formData, ...values });
  };
  console.log(formData);

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
          onFinish={onFinish}
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
            hasFeedback
          />

          <RenderInput
            label={"Nhập lại mật khẩu"}
            placeholder="Nhập lại mật khẩu..."
            dependencies={["password"]}
            type={"password"}
            hasFeedback
            name="confirmPassword"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập lại đúng mật khẩu!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    new Error("Mật khẩu không trùng khớp!")
                  );
                },
              }),
            ]}
          />

          <div>
            <p
              style={{
                fontSize: "18px",
                marginBottom: "12px",
                fontWeight: "500",
              }}
            >
              Loại tài khoản
            </p>
            <div className="register-container__checkboxs">
              <ThemeCheckbox
                label={"Người mua"}
                stylesCheckbox={{ margin: "0 8px" }}
                onChange={(e) => onChangeCheckbox(e, "customer")}
                checked={"customer" === typeAccount}
              />
              <ThemeCheckbox
                label={"Người bán"}
                stylesCheckbox={{ margin: "0 8px" }}
                stylesLabel={{ marginLeft: "40px" }}
                onChange={(e) => onChangeCheckbox(e, "salesPerson")}
                checked={"salesPerson" === typeAccount}
              />
            </div>
          </div>

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
                width: "100%",
              }}
              content={"Đăng ký"}
              onClick={() => form.submit()}
            />
          </div>

          <div className="register-container__link">
            <div>
              Bạn đã có tài khoản / <Link>Đăng nhập ngay</Link>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
