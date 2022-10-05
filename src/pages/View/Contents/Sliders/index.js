import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliders.css";
import ThemeButton from "../../../../components/Button";

const RenderItem = (props) => {
  const { content, cac } = props;
  return (
    <div className="sliders-item">
      <div className="sliders-item__img">
        <img src={content.img} alt={content.name} />
        <div className="sliders-item__img-btns">
          <p>Thêm vào giỏ</p>
          <p>Mua ngay</p>
        </div>
      </div>
      <p className="sliders-item__title">{content.name}</p>
      <p className="sliders-item__author">{content.author}</p>
      <div className="sliders-item__price">
        <p className="sliders-item__price-old">{content.price}</p>
        <p className="sliders-item__price-new">{content.discount}</p>
      </div>
    </div>
  );
};

const PreBtn = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "#114543" }}
      onClick={onClick}
    />
  );
};

const NextBtn = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "#114543" }}
      onClick={onClick}
    />
  );
};

const Sliders = (props) => {
  const { title, showMore } = props;
  const contents = [
    {
      name: "Titans of War",
      img: "https://cdn.waterstones.com/bookjackets/large/9781/8387/9781838776329.jpg",
      author: "Wilbur Smith",
      price: "400.000vnd",
      discount: "500.000vnd",
    },
    {
      name: "Titans of War",
      img: "https://cdn.waterstones.com/bookjackets/large/9781/8387/9781838776329.jpg",
      author: "Wilbur Smith",
      price: "400.000vnd",
      discount: "500.000vnd",
    },
    {
      name: "Titans of War",
      img: "https://cdn.waterstones.com/bookjackets/large/9781/8387/9781838776329.jpg",
      author: "Wilbur Smith",
      price: "400.000vnd",
      discount: "500.000vnd",
    },
    {
      name: "Titans of War",
      img: "https://cdn.waterstones.com/bookjackets/large/9781/8387/9781838776329.jpg",
      author: "Wilbur Smith",
      price: "400.000vnd",
      discount: "500.000vnd",
    },
    {
      name: "Titans of War",
      img: "https://cdn.waterstones.com/bookjackets/large/9781/8387/9781838776329.jpg",
      author: "Wilbur Smith",
      price: "400.000vnd",
      discount: "500.000vnd",
    },
    {
      name: "Titans of War",
      img: "https://cdn.waterstones.com/bookjackets/large/9781/8387/9781838776329.jpg",
      author: "Wilbur Smith",
      price: "400.000vnd",
      discount: "500.000vnd",
    },
    {
      name: "Titans of War",
      img: "https://cdn.waterstones.com/bookjackets/large/9781/8387/9781838776329.jpg",
      author: "Wilbur Smith",
      price: "400.000vnd",
      discount: "500.000vnd",
    },
    {
      name: "Titans of War",
      img: "https://cdn.waterstones.com/bookjackets/large/9781/8387/9781838776329.jpg",
      author: "Wilbur Smith",
      price: "400.000vnd",
      discount: "500.000vnd",
    },
    {
      name: "Titans of War",
      img: "https://cdn.waterstones.com/bookjackets/large/9781/8387/9781838776329.jpg",
      author: "Wilbur Smith",
      price: "400.000vnd",
      discount: "500.000vnd",
    },
    {
      name: "Titans of War",
      img: "https://cdn.waterstones.com/bookjackets/large/9781/8387/9781838776329.jpg",
      author: "Wilbur Smith",
      price: "400.000vnd",
      discount: "500.000vnd",
    },
    {
      name: "Titans of War",
      img: "https://cdn.waterstones.com/bookjackets/large/9781/8387/9781838776329.jpg",
      author: "Wilbur Smith",
      price: "400.000vnd",
      discount: "500.000vnd",
    },
    {
      name: "Titans of War",
      img: "https://cdn.waterstones.com/bookjackets/large/9781/8387/9781838776329.jpg",
      author: "Wilbur Smith",
      price: "400.000vnd",
      discount: "500.000vnd",
    },
    {
      name: "Titans of War",
      img: "https://cdn.waterstones.com/bookjackets/large/9781/8387/9781838776329.jpg",
      author: "Wilbur Smith",
      price: "400.000vnd",
      discount: "500.000vnd",
    },
    {
      name: "Titans of War",
      img: "https://cdn.waterstones.com/bookjackets/large/9781/8387/9781838776329.jpg",
      author: "Wilbur Smith",
      price: "400.000vnd",
      discount: "500.000vnd",
    },
  ];

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: <NextBtn />,
    prevArrow: <PreBtn />,
  };

  return (
    <div className="sliders">
      <div className="sliders-title">
        <h2>{title}</h2>
        {showMore && (
          <ThemeButton className="sliders-title__showmore" content="Xem thêm" />
        )}
      </div>
      <Slider {...settings}>
        {contents.map((item, index) => {
          return <RenderItem key={index} content={item} />;
        })}
      </Slider>
    </div>
  );
};

export default Sliders;
