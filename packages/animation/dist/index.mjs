import { dbg } from '@c3/dbg';
import _anime from 'animejs';
import { placements, anti } from '@c3/utils';

//@ts-ignore
window.__anime = _anime;
const animate = (...animeParams) => {
  const instances = [];
  for (const param of animeParams) {
    instances.push(_anime({
      update: ins => {
        dbg("progress", ins.progress, ins.animations.map(a => `target:${a.animatable.target.tagName}, ${a.property}:${a.currentValue}`));
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
const slides = placements.reduce((acc, cur) => {
  return {
    ...acc,
    [`${cur}-in`]: params => {
      return animate({
        [getScaleKey(cur)]: [0.4, 1],
        opacity: [0, 1],
        begin: e => {
          e.animatables.forEach(e => {
            e.target.style.transformOrigin = anti[cur];
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
            e.target.style.transformOrigin = anti[cur];
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

const zoom = placements.reduce((acc, cur) => {
  return {
    ...acc,
    [`${cur}-in`]: params => {
      return animate({
        scale: [0.5, 1],
        opacity: [0, 1],
        begin: e => {
          e.animatables.forEach(e => e.target.style.transformOrigin = anti[cur]);
        },
        ...params
      });
    },
    [`${cur}-out`]: params => {
      return animate({
        scale: [1, 0],
        opacity: [1, 0],
        begin: e => {
          e.animatables.forEach(e => e.target.style.transformOrigin = anti[cur]);
        },
        ...params
      });
    }
  };
}, {});

//@ts-ignore
window.__zoom = zoom;

export { animate, fades, slides, spin, useAnime, zoom };
