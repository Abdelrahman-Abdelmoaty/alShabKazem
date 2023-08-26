import { useState } from "react";
import { customersImages, foodImages } from "./images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import menu from "../public/assets/menu.jpg";
import { Map } from "@googlemaps/react-wrapper";

const Body = () => {
  return (
    <section style={{ width: "100%" }}>
      <div>
        <div className="carousel">
          {/* <FontAwesomeIcon icon={faArrowLeft} />
          <FontAwesomeIcon icon={faArrowRight} /> */}
          {customersImages.map((img, index) => {
            return (
              <img
                className={"carousel-image "}
                key={crypto.randomUUID()}
                src={img.url}
                alt=""
              />
            );
          })}
        </div>
      </div>
      <p className="slogan">
        <span className="o">ع</span>
        <span className="b">الحلو </span>
        <span className="o">والحادق </span>
        <span className="b">معاك</span>
      </p>
      <div className="container">
        {foodImages.map((img) => {
          return (
            <img
              key={crypto.randomUUID()}
              src={img.url}
              className="img"
              alt=""
            />
          );
        })}
      </div>
      <p className="o" style={{ margin: "15px 0 0" }}>
        الفرع الرئيسي
      </p>
      <div className="map">
        <div className="mapdiv">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16223.061342558829!2d30.012101024797932!3d31.262856081694974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5dbba6c110aa7%3A0x4f494eab35dd7a2d!2z2KfZhNi02KfYqCDZg9in2LjZhQ!5e0!3m2!1sar!2seg!4v1693050832997!5m2!1sar!2seg"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <p id="menu" className="b">
        المنيو
      </p>
      <img
        style={
          ({ padding: "0 100px" },
          {
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
          })
        }
        src={menu}
        alt=""
      />
      <div id="adds">
        <p className="b">عناوين الفروع</p>
        <p className="add o">
          ميامي - الأكاديمية - خلف بنزينة ميامى شارع ابوالنواس
        </p>
        <p className="o add">
          سيدي بشر البحري - ش محمد نجيب - بجوار كارت احمر و بازار مكة
        </p>
        <p className="o add">
          سيدي بشر الترام - امام الميدان و بجوار قهوة الشيخ مسكين
        </p>
        <p className="o add">
          محرم بك - ش الرصافة بجوار مطعم كاركي و معهد خدمة اجتماعية
        </p>
      </div>
      <p id="c" className="b">
        تصميم وتنفيذ{" "}
        <a href="https://www.facebook.com/abdelrhman.abdelmoaty.1/">
          <span className="o">عبدالرحمن</span>
        </a>
      </p>
    </section>
  );
};

export default Body;
