import React, { Component } from "react";
import Glider from "glider-js/glider";

export default class Header extends Component {
  componentDidMount() {
    document
      .querySelector(".glider")
      .addEventListener("glider-slide-visible", function(event) {
        var glider = Glider(this);
        console.log("Slide Visible %s", event.detail.slide);
      });
    document
      .querySelector(".glider")
      .addEventListener("glider-slide-hidden", function(event) {
        console.log("Slide Hidden %s", event.detail.slide);
      });
    document
      .querySelector(".glider")
      .addEventListener("glider-refresh", function(event) {
        console.log("Refresh");
      });
    document
      .querySelector(".glider")
      .addEventListener("glider-loaded", function(event) {
        console.log("Loaded");
      });

    window._ = new Glider(document.querySelector(".glider"), {
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      scrollLock: true,
      dots: "#dots",
      rewind: true
    });
  }

  render() {
    return (
      <div className="container-fluid p-0">
        <div class="glider-contain">
          <div class="glider">
            <div>
              <img alt="Test" src="http://placehold.it/300x300?text=1" />
            </div>
            <div>
              <img alt="Test" src="http://placehold.it/300x300?text=2" />
            </div>
            <div>
              <img alt="Test" src="http://placehold.it/300x300?text=3" />
            </div>
            <div>
              <img alt="Test" src="http://placehold.it/300x300?text=4" />
            </div>
            <div>
              <img alt="Test" src="http://placehold.it/300x300?text=5" />
            </div>
            <div>
              <img alt="Test" src="http://placehold.it/300x300?text=6" />
            </div>
            <div>
              <img alt="Test" src="http://placehold.it/300x300?text=7" />
            </div>
            <div>
              <img alt="Test" src="http://placehold.it/300x300?text=8" />
            </div>
            <div>
              <img alt="Test" src="http://placehold.it/300x300?text=9" />
            </div>
            <div>
              <img alt="Test" src="http://placehold.it/300x300?text=10" />
            </div>
            <div>
              <img alt="Test" src="http://placehold.it/300x300?text=11" />
            </div>
            <div>
              <img alt="Test" src="http://placehold.it/300x300?text=12" />
            </div>
            <div>
              <img alt="Test" src="http://placehold.it/300x300?text=13" />
            </div>
            <div>
              <img alt="Test" src="http://placehold.it/300x300?text=14" />
            </div>
            <div>
              <img alt="Test" src="http://placehold.it/300x300?text=15" />
            </div>
            <div>
              <img alt="Test" src="http://placehold.it/300x300?text=16" />
            </div>
          </div>

          <div id="dots"></div>
        </div>
      </div>
    );
  }
}
