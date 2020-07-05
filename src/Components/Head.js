import React, { useState, useEffect } from "react";
const Head = () => {
  const [adj, setAdj] = useState("Amazing");

  var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  useEffect(() => {
    var elements = document.getElementsByClassName("txt-rotate");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-rotate");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #ccc }";
    document.body.appendChild(css);
  }, []);
  return (
    <div>
      <div
        class="h-screen w-full bg-cover text-center flex flex-col items-center justify-center bg-center bg-no-repeat"
        style={{
          background: `url(https://source.unsplash.com/random/1920x1080)`,
        }}
      >
        <h3
          class=" text-white mx-auto mt-2 leading-normal  "
          id="heading"
        >
          We make{" "}
          <span
            class="txt-rotate"
            data-period="2000"
            data-rotate='[ "amazing", "custom", "fast", "pretty", "functional" ]'
          ></span>
        </h3 >
        <h3 class=" text-white mx-auto mt-2 leading-normal  " id="heading"> websites</h3>
      </div>
    </div>
  );
};

export default Head;
