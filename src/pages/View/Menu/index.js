import { RightOutlined } from "@ant-design/icons";
import { useState } from "react";
import "./menu.css";

const Menu = () => {
  const MenuItem = (props) => {
    const { menuName, subMenu } = props;
    const [active, setActive] = useState(false);

    const handleActiveItem = () => {
      setActive(!active);
    };

    return (
      <div onClick={handleActiveItem} className="menu-item">
        <div className="menu-item__heading">
          <p
            style={{
              marginBottom: "0",
              fontSize: "16px",
              color: active && "cornflowerblue",
            }}
          >
            {menuName}
          </p>
          {subMenu && (
            <RightOutlined
              style={{
                transform: active ? "rotate(90deg)" : "rotate(0)",
                transition: "transform 0.2s linear",
                color: active && "cornflowerblue",
              }}
            />
          )}
        </div>
        <div
          className="menu-item__sub-menu"
          style={{
            display: active ? "block" : "none",
          }}
        >
          {subMenu?.map((item, index) => {
            return <p key={index}>{item?.name}</p>;
          })}
        </div>
      </div>
    );
  };

  const submenu = [
    {
      name: "Dau dat",
    },
    {
      name: "Dau dat",
    },
    {
      name: "Dau dat",
    },
    {
      name: "Dau dat",
    },
    {
      name: "Dau dat",
    },
    {
      name: "Dau dat",
    },
  ];

  return (
    <div
      style={{
        boxShadow: "0 0 4px rgba(0, 0, 0, 0.2)",
        padding: "10px",
        maxHeight: "506px",
        height: "506px",
        overflowY: "auto",
      }}
    >
      <h2 style={{ borderBottom: "1px solid #000", padding: "10px 0 10px 0" }}>
        Danh mục sách
      </h2>
      <MenuItem menuName={"Sach dau dat"} subMenu={submenu} />
      <MenuItem menuName={"Sach dau dat"} subMenu={submenu} />
      <MenuItem menuName={"Sach dau dat"} subMenu={submenu} />
      <MenuItem menuName={"Sach dau dat"} subMenu={submenu} />
      <MenuItem menuName={"Sach dau dat"} />
      <MenuItem menuName={"Sach dau dat"} />
    </div>
  );
};

export default Menu;
