import React from "react";
import "./header.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
import ThemeButton from "../../components/Button";

const Header = () => {
  return (
    <>
      <div className="header">
        <div
          style={{
            background: "linear-gradient(to right, #44a08d, #093637)",
            color: "#fff",
            display: "flex",
            justifyContent: "space-between",
            padding: "0 20px",
            height: "40px",
          }}
        >
          <div style={{ color: "#fff", display: "flex" }}>
            <p
              style={{
                padding: "6px 10px",
                fontSize: "14px",
                cursor: "pointer",
                lineHeight: "28px",
              }}
            >
              Quà tặng
            </p>
            <p
              style={{
                padding: "6px 10px",
                fontSize: "14px",
                cursor: "pointer",
                lineHeight: "28px",
              }}
            >
              Trung tâm hỗ trợ
            </p>
            <p
              style={{
                padding: "6px 10px",
                fontSize: "14px",
                cursor: "pointer",
                lineHeight: "28px",
              }}
            >
              Mã giảm giá
            </p>
          </div>
          <div>
            <p
              style={{
                padding: "6px 10px",
                fontWeight: 700,
                lineHeight: "28px",
              }}
            >
              Sale 20% Today
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "24px 30px",
            backgroundColor: "#fff",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
            zIndex: "100",
          }}
        >
          <div className="header-logo">Bookbook</div>
          <div className="header-search">
            <div className="header-search__box">
              <input placeholder="Nhập vào tên sách..." type="text" />
              <ThemeButton
                content={"Tìm kiếm"}
                className="header-search__icon"
              />
            </div>
            <div className="header-search__result">
              <ul className="header-search__result-list">
                <li className="header-search__result-item">
                  <p
                    className="header-search__result-item-name"
                    style={{ fontWeight: "500" }}
                  >
                    Nghệ Thuật Tập Trung: Nâng Cao Năng Suất, Tối Ưu Thời Gian,
                    Hiệu Quả Bất Ngờ
                  </p>
                  <p style={{ fontStyle: "italic" }}>Tác giả: Daigo</p>
                  <p style={{ fontSize: "14px" }}>
                    Giá: <span style={{ color: "red" }}>700.000đ</span>{" "}
                  </p>
                </li>

                <li className="header-search__result-item">
                  <p
                    className="header-search__result-item-name"
                    style={{ fontWeight: "500" }}
                  >
                    Nghệ Thuật Tập Trung: Nâng Cao Năng Suất, Tối Ưu Thời Gian,
                    Hiệu Quả Bất Ngờ
                  </p>
                  <p style={{ fontStyle: "italic" }}>Tác giả: Daigo</p>
                  <p style={{ fontSize: "14px" }}>
                    Giá: <span style={{ color: "red" }}>700.000đ</span>{" "}
                  </p>
                </li>

                <li className="header-search__result-item">
                  <p
                    className="header-search__result-item-name"
                    style={{ fontWeight: "500" }}
                  >
                    Nghệ Thuật Tập Trung: Nâng Cao Năng Suất, Tối Ưu Thời Gian,
                    Hiệu Quả Bất Ngờ
                  </p>
                  <p style={{ fontStyle: "italic" }}>Tác giả: Daigo</p>
                  <p style={{ fontSize: "14px" }}>
                    Giá: <span style={{ color: "red" }}>700.000đ</span>{" "}
                  </p>
                </li>

                <li className="header-search__result-item">
                  <p
                    className="header-search__result-item-name"
                    style={{ fontWeight: "500" }}
                  >
                    Nghệ Thuật Tập Trung: Nâng Cao Năng Suất, Tối Ưu Thời Gian,
                    Hiệu Quả Bất Ngờ
                  </p>
                  <p style={{ fontStyle: "italic" }}>Tác giả: Daigo</p>
                  <p style={{ fontSize: "14px" }}>
                    Giá: <span style={{ color: "red" }}>700.000đ</span>{" "}
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="header-user">
            <div className="header-user__cart">
              <ShoppingCartOutlined className="header-user__cart-icon" />
              <span className="header-user__cart-count">5</span>
            </div>
            <div className="header-user__auth">
              <div className="header-user__auth-login">Đăng nhập</div>
              <span>/</span>
              <div className="header-user__auth-register">Đăng ký</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

// #1890ff
