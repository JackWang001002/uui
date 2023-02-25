'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dbg = require('@c3/dbg');
var _anime = require('animejs');
var utils = require('@c3/utils');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _anime__default = /*#__PURE__*/_interopDefaultLegacy(_anime);

//@ts-ignore
window.__anime = _anime__default["default"];
const animate = (...animeParams) => {
  const instances = [];
  for (const param of animeParams) {
    instances.push(_anime__default["default"]({
      update: ins => {
        dbg.dbg("progress", ins.progress, ins.animations.map(a => `target:${a.animatable.target.tagName}, ${a.property}:${a.currentValue}`));
      },
      ...param
    }));
  }
  return instances.length === 1 ? instances[0] : instances;
};
const useAnime = () => animate;

const fades = {
  in: params => {
    animate({
      opacity: [0, 1],
      ...params
    });
  },
  out: params => {
    animate({
      opacity: [1, 0],
      ...params
    });
  }
};

const getScaleKey = placement => {
  switch (placement) {
    case "top":
    case "bottom":
      return "scaleY";
    case "left":
    case "right":
      return "scaleX";
    default:
      throw new Error("not existed");
  }
};

//TODO: zoom type optimization
const slides = utils.placements.reduce((acc, cur) => {
  return {
    ...acc,
    [`${cur}-in`]: params => {
      return animate({
        [getScaleKey(cur)]: [0.4, 1],
        opacity: [0, 1],
        begin: e => {
          e.animatables.forEach(e => {
            e.target.style.transformOrigin = utils.anti[cur];
            e.target.style.pointerEvents = "auto";
          });
        },
        complete: instance => {
          instance.animatables.forEach(e => e.target.style.pointerEvents = "auto");
        },
        ...params
      });
    },
    [`${cur}-out`]: params => {
      return animate({
        [getScaleKey(cur)]: [1, 0.5],
        opacity: [1, 0],
        begin: instance => {
          instance.animatables.forEach(e => {
            e.target.style.transformOrigin = utils.anti[cur];
            e.target.style.pointerEvents = "none";
          });
        },
        complete: instance => {
          instance.animatables.forEach(e => e.target.style.pointerEvents = "none");
        },
        ...params
      });
    }
  };
}, {});

// import { keyframes } from "@uui/core";

// export const spin = keyframes({
//   "0%": { transform: "rotate(0deg)" },
//   "100%": { transform: "rotate(359deg)" },
// });
const spin = "spin";

//TODO: zoom type optimization

const zoom = utils.placements.reduce((acc, cur) => {
  return {
    ...acc,
    [`${cur}-in`]: params => {
      return animate({
        scale: [0.5, 1],
        opacity: [0, 1],
        begin: e => {
          e.animatables.forEach(e => e.target.style.transformOrigin = utils.anti[cur]);
        },
        ...params
      });
    },
    [`${cur}-out`]: params => {
      return animate({
        scale: [1, 0],
        opacity: [1, 0],
        begin: e => {
          e.animatables.forEach(e => e.target.style.transformOrigin = utils.anti[cur]);
        },
        ...params
      });
    }
  };
}, {});

//@ts-ignore
window.__zoom = zoom;

exports.animate = animate;
exports.fades = fades;
exports.slides = slides;
exports.spin = spin;
exports.useAnime = useAnime;
exports.zoom = zoom;
