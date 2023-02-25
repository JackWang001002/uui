'use strict';

var utils = require('@c3/utils');

const px = x => {
  if (utils.isString(x) && !x.endsWith("px") || utils.isNumber(x)) {
    return `${x}px`;
  }
  if (x.endsWith("px")) {
    return x;
  }
  throw new Error("px:error");
};

const KeepPxReg = /^_-?\d+\.?\d*/;

const isDevice = device => {
  if (!globalThis.matchMedia) {
    throw new Error("not browser enviroment in isDevice()");
  }
  const {
    matches
  } = globalThis.matchMedia(device);
  return matches;
};
const isMobile = isDevice("(max-width:768px)");

//TODO: fixme
const mobileDesignWidth = 750;
const desktopDesignWidth = 1366;
const pxToVw = (px, refWidth) => `${px / refWidth * 100}vw`;
const vw = (px, refWidth) => {
  if (typeof px === "number") {
    return pxToVw(px, refWidth);
  }
  if (typeof px === "string") {
    if (KeepPxReg.test(px)) {
      return px.replace("_", "");
    }
    //if there is no px,it will keep original string
    return px.replace(/(\d+)px/g, (m, p) => pxToVw(+p, refWidth));
  }
  throw new Error(`px is ${JSON.stringify(px)}`);
};
const fontVw = (px, refWidth) => {
  const base = 12;
  return `calc(${base}px + ${vw(px - base, refWidth)})`;
};
const rvw = px => {
  return isMobile ? vw(px, mobileDesignWidth) : vw(px, desktopDesignWidth);
};
const origin = x => {
  if (typeof x === "string") {
    if (KeepPxReg.test(x)) {
      return x.replace("_", "");
    }
    return x;
  }
  if (utils.isNumber(x)) {
    return `${x}px`;
  }
  throw new Error(`invalid args:${typeof x}`);
};

exports.desktopDesignWidth = desktopDesignWidth;
exports.fontVw = fontVw;
exports.isMobile = isMobile;
exports.mobileDesignWidth = mobileDesignWidth;
exports.origin = origin;
exports.px = px;
exports.pxToVw = pxToVw;
exports.rvw = rvw;
exports.vw = vw;
