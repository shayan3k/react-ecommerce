module.exports = options => ({
  resolve: {
    alias: {
      TweenMax: "gsap/src/uncompressed/TweenMax.js",
      TimelineMax: "gsap/src/uncompressed/TimelineMax.js",
      ScrollToPlugin: "gsap/src/uncompressed/plugins/ScrollToPlugin.js",
      ScrollMagic: "scrollmagic/scrollmagic/uncompressed/ScrollMagic.js",
      ScrollMagicAddIndicators:
        "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js",
      ScrollMagicGSAP:
        "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js"
    }
  }
});
