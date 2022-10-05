import { Carousel, Col, Row } from "antd";
import "./introduce.css";
import images from "../../../assets/images";

const mainSlider = [
  images.introduceSlider1,
  images.introduceSlider2,
  images.introduceSlider3,
  images.introduceSlider4,
];

const Introduce = () => {
  return (
    <div style={{ maxHeight: "506px" }}>
      <Row gutter={[6, 6]} style={{ marginBottom: "6px" }}>
        <Col span={24}>
          <Carousel
            autoplaySpeed={2500}
            dotPosition={"right"}
            autoplay
            style={{ width: "100%", height: "300px" }}
          >
            {mainSlider.map((item, index) => {
              return (
                <div key={index}>
                  <img
                    src={item}
                    alt=""
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </div>
              );
            })}
          </Carousel>
        </Col>
      </Row>

      <Row gutter={[6, 6]}>
        <Col span={12}>
          <img
            src={images?.subIntroduceLeft1}
            alt=""
            style={{
              height: "200px",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </Col>
        <Col span={12}>
          <img
            src={images?.subIntroduceRight1}
            alt=""
            style={{ height: "200px", width: "100%", objectFit: "cover" }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Introduce;
