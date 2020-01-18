import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import {
  gsap,
  TweenMax,
  TimelineMax,
  Elastic,
  ScrollToPlugin,
  Draggable,
  MotionPathPlugin
} from "gsap/all";

import * as ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import "debug.addIndicators";
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

export default class App extends Component {
  componentDidMount() {
    var controller = new ScrollMagic.Controller();

    var tl = new TimelineMax();

    tl.from("#second-text", 1.25, {
      scale: 0,
      x: -100,
      ease: Elastic.easeOut
    });
    tl.pause();

    var scene = new ScrollMagic.Scene({
      triggerElement: "#second-text",
      triggerHook: 0.5,
      reverse: false
    })
      .on("start", () => {
        console.log("Hello");
      })
      .addIndicators()

      .setTween(tl.play())
      .addTo(controller);
  }

  render() {
    return (
      <>
        <Navbar />
        <Header />
      </>
    );
  }
}
