import { useEffect, useRef } from "react";
import { customersImages, foodImages } from "./images";
import menu from "../public/assets/menu.jpg";

const Body = () => {
  const ref = useRef();
  const handleScroll = () => {
    const scroll = Math.abs(
      ref.current.getBoundingClientRect().top - ref.current.offsetTop
    );
    const isSmallDevice = window.innerWidth <= 768;
    if (isSmallDevice) {
      if (scroll > 2000) {
        window.removeEventListener("scroll", handleScroll);
        for (let i = 0; i < ref.current.children.length; i++) {
          setTimeout(() => {
            ref.current.children[i].classList.add("animate");
            ref.current.children[i].style.opacity = 1;
          }, (i + 1) * 500);
        }
      }
    } else {
      if (scroll > 4100) {
        window.removeEventListener("scroll", handleScroll);
        for (let i = 0; i < ref.current.children.length; i++) {
          setTimeout(() => {
            ref.current.children[i].classList.add("animate");
            ref.current.children[i].style.opacity = 1;
          }, (i + 1) * 500);
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <section style={{ width: "100%" }}>
      <div>
        <div className="carousel">
          {customersImages.map((img, index) => {
            return (
              <img
                className={"carousel-image "}
                key={index}
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
        {foodImages.map((img, index) => {
          return <img key={index} src={img.url} className="img" alt="" />;
        })}
      </div>
      <p className="heading o">الفرع الرئيسي</p>
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
      <p id="menu" className="heading b">
        المنيو
      </p>
      <img
        className="menu"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
        }}
        src={menu}
        alt=""
      />

      <div id="adds" ref={ref}>
        <p className="addtitle b">للطلبات</p>
        <p className="add o">02 21246777</p>
        <p className="add o">012 0547 4591</p>
        <p className="add o">012 0547 4591</p>
        <p className="addtitle b">عناوين الفروع</p>
        <p className="add o">
          ميامي - الأكاديمية - خلف بنزينة ميامى شارع ابوالنواس
        </p>
        <p className="add o">
          سيدي بشر البحري - ش محمد نجيب - بجوار كارت احمر و بازار مكة
        </p>
        <p className="add o">
          سيدي بشر الترام - امام الميدان و بجوار قهوة الشيخ مسكين
        </p>
        <p className="add o">
          محرم بك - ش الرصافة بجوار مطعم كاركي و معهد خدمة اجتماعية
        </p>
      </div>
      <p id="c" className="b">
        Designed by{" "}
        <a
          target="_blank"
          href="https://www.facebook.com/abdelrhman.abdelmoaty.1/"
        >
          <span className="o">Eng/Abdelrhman</span>
        </a>
      </p>
    </section>
  );
};

export default Body;
