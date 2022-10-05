import { Col, Row } from "antd";
import Sliders from "./Contents/Sliders";
import Introduce from "./Introduce";
import Menu from "./Menu";

const View = () => {
  return (
    <div style={{ marginTop: "120px", zIndex: "-200", padding: "20px 30px" }}>
      <Row gutter={[24, 24]}>
        <Col span={6}>
          <Menu
            style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;" }}
          />
        </Col>
        <Col span={18}>
          <Introduce />
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <Sliders title="Sach ban chay" showMore />
          <Sliders title="Sach ban dat" showMore />
          <Sliders title="Sach ban lo" />
          
        </Col>
      </Row>
    </div>
  );
};

export default View;
