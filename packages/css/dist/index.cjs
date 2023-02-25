'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utils = require('@c3/utils');

//FIXME: SSR
const supportIndivideTransform = globalThis?.CSS?.supports?.("translate", "0px");
const xCenter = position => ypos => {
  return {
    top: ypos?.top,
    bottom: ypos?.bottom,
    left: "50%",
    position,
    ...(supportIndivideTransform ? {
      translate: "-50% 0%"
    } //FIXME: 0% maybe override the original value
    : {
      transform: "translateX(-50%)"
    })
  };
};
const yCenter = postion => xpos => {
  return {
    left: xpos?.left,
    right: xpos?.right,
    position: postion,
    top: "50%",
    ...(supportIndivideTransform ? {
      translate: "0% -50%"
    } : {
      transform: "translateY(-50%)"
    })
  };
};
const xyCenter = position => () => {
  return {
    position,
    left: "50%",
    top: "50%",
    ...(supportIndivideTransform ? {
      translate: "-50% -50%"
    } : {
      transform: "translate(-50%,-50%)"
    })
  };
};
const absXCenter = xCenter("absolute");
const absYCenter = yCenter("absolute");
const absXYCenter = xyCenter("absolute");
const abs = ({
  left,
  top,
  right,
  bottom
}) => {
  return {
    position: "absolute",
    left,
    right,
    top,
    bottom
  };
};
const leftTopCorner = {
  left: 0,
  top: 0
};
const rightTopCorner = {
  top: 0,
  right: 0
};
const rightBottomCorner = {
  bottom: 0,
  right: 0
};
const leftBottomCorner = {
  bottom: 0,
  left: 0
};

/**
 * NOTE: the parent element must be relative
 *
 * @param ele :the action element
 * @param placement
 * @returns
 */

const getPopoverPos = (placement, parentBoxW = "100%", parentBoxH = "100%") => {
  switch (placement) {
    case "bottom":
      return absXCenter({
        top: parentBoxH
      });
    case "top":
      return absXCenter({
        bottom: parentBoxH
      });
    case "left":
      return absYCenter({
        right: parentBoxW
      });
    case "right":
      return absYCenter({
        left: parentBoxW
      });
    default:
      throw new Error("TypeError:placement must be one of top, bottom, left, right");
  }
};

const arrow = direction => {
  let polygon;
  switch (direction) {
    case "top":
      polygon = "50% 0%, 0% 100%, 100% 100%";
      break;
    case "bottom":
      polygon = "0% 0%, 50% 100%, 100% 0%";
      break;
    case "left":
      polygon = "100% 0%, 0% 50%, 100% 100%";
      break;
    case "right":
      polygon = "0% 0%, 0% 100%, 100% 50%";
      break;
    default:
      throw new Error("TypeError:direction must be one of top, bottom, left, right");
  }
  return {
    clipPath: `polygon(${polygon})`
  };
};

//=====================================================================================================
// pseudoArrow:
// color of border of arrow is same as the border color of parent element
//=====================================================================================================

const pseudoArrow = (direction, width, height, css) => {
  const {
    border,
    ...restCss
  } = css || {};
  if (!border) {
    return {
      _before: {
        w: width,
        h: height,
        ...getPopoverPos(direction),
        ...arrow(direction),
        background: "inherit",
        ...css
      }
    };
  }
  const res = border.match(/(?<size>\d+?)p?x? (?<type>\w+?) (?<color>.+)/);
  // only support solid
  if (!res) {
    throw new Error(`invalid border: ${border}`);
  }
  //@ts-ignore
  const {
    size = 1,
    color
  } = res.groups;
  const w = width - +size - 1;
  const h = height - +size - 1;
  return {
    _before: {
      w: width,
      h: height,
      ...getPopoverPos(direction),
      ...arrow(direction),
      background: color,
      ...restCss
    },
    _after: {
      w: w,
      h: h,
      ...getPopoverPos(direction),
      ...arrow(direction),
      background: "inherit",
      ...restCss
    }
  };
};

const bgImg = (url, css = {}) => ({
  backgroundImage: `url(${url})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  ...css
});

const borderRadiusForGroup = (borderRadius, direction) => {
  const isVertical = direction === "vertical";
  const firstElementProp = isVertical ? {
    borderTopRightRadius: borderRadius,
    borderTopLeftRadius: borderRadius
  } : {
    borderTopLeftRadius: borderRadius,
    borderBottomLeftRadius: borderRadius
  };
  const lastElementProp = isVertical ? {
    borderBottomLeftRadius: borderRadius,
    borderBottomRightRadius: borderRadius
  } : {
    borderBottomRightRadius: borderRadius,
    borderTopRightRadius: borderRadius
  };
  return {
    "& > *:first-child": firstElementProp,
    "& > *:last-child": lastElementProp
  };
};
const gradientRoundedBorder = (bgColor, gradient) => {
  return {
    border: "1px solid transparent",
    backgroundImage: `linear-gradient(${bgColor}, ${bgColor}),${gradient}`,
    backgroundOrigin: "border-box",
    backgroundClip: "content-box, border-box"
  };
};
const roundBorderValue = height => {
  return height / 2;
};
const gradientBorder = gradient => ({
  borderStyle: "solid",
  borderImageWidth: "1px",
  borderImageSlice: 1,
  borderImageSource: gradient
});

const alpha = (alpha, isWhite = true) => isWhite ? `rgba(255,255,255,${alpha})` : `rgba(0,0,0,${alpha})`;

// export const opacify = (opacity:number) => css`
//   &:
// `

const col = (fx = "flex-start", fy = "flex-start") => {
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: fx,
    justifyContent: fy
  };
};

const cover = (x = 0) => ({
  left: x,
  top: x,
  right: x,
  bottom: x
});

/**
 * child div height can not be 100% when height of parent is auto
 * @returns
 */
const eqHeight = () => ({
  display: "flex",
  alignItems: "stretch",
  "&& > *": {
    height: "auto"
  }
});

const fixed = pos => ({
  position: "fixed",
  top: pos.top,
  left: pos.left,
  right: pos.right,
  bottom: pos.bottom
});
const fixedXCenter = xCenter("fixed");
const fixedYCenter = yCenter("fixed");
const fixedXYCenter = xyCenter("fixed");

const flexCenter = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
const flexYCenter = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center"
};

const rgap = gap => ({
  "& > :where(:not(:last-child))": {
    marginRight: gap
  }
});
const vgap = gap => ({
  "& > :where(:not(:last-child))": {
    marginBottom: gap
  }
});

const nCol = (_num, _cellWidth, cellHeight, rowGap = 0, columnGap = 0) => {
  const nums = utils.toArray(_num);
  const cellWidths = utils.toArray(_cellWidth);
  if (nums.length !== cellWidths.length) {
    throw new Error("must have same length");
  }
  return {
    display: "grid",
    justifyContent: "center",
    gridAutoRows: cellHeight,
    gridTemplateColumns: nums.map((e, idx) => `repeat(${e}, ${cellWidths[idx]})`),
    rowGap,
    columnGap
  };
};

const row = (fx = "flex-start", fy = "center") => ({
  display: "flex",
  alignItems: fy,
  justifyContent: fx,
  flexWrap: "nowrap"
});

//divider and borderradius
const list = (isCol, css = {}) => ({
  ...(isCol ? col("stretch") : row()),
  "& > *": {
    width: isCol ? "100%" : "auto",
    //FIXME: 没必要了把？
    flexShrink: 0
  },
  ...css
});

// https://www.zhangxinxu.com/wordpress/2015/01/css-page-scrollbar-toggle-center-no-jumping/
const addLeftPaddingInOrderXCenter = () => ({
  paddingLeft: "calc(100vw - 100%)",
  background: "#151E2B"
});

const divider = color => ({
  "& > *:not(:last-child)": {
    borderBottom: `1px solid ${color}`
  }
});
const divider_p = color => ({
  "& > *:not(:last-child)::after": {
    width: "1px",
    backgroundColor: `${color}`,
    height: "100%"
  }
});
const dividerAt = (placement, css) => {
  const geo = {};
  switch (placement) {
    case "top":
    case "bottom":
      geo.height = "1px";
      geo.width = "100%";
      break;
    case "left":
    case "right":
      geo.width = "1px";
      geo.height = "100%";
      break;
    default:
      throw new Error("TypeError:placement must be one of top, bottom, left, right");
  }
  return {
    _after: {
      ...getPopoverPos(placement),
      ...geo,
      ...css
    }
  };
};

const toggleDisplay = show => ({
  display: show ? "flex" : "none"
});
const hidden = {
  display: "none"
};
const toggleVisibility = visibility => ({
  visibility: visibility ? "visible" : "hidden"
});

const textIndent = {
  listStylePosition: "outside"
};

const mask = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const pseudoElement = (pse, properties = {}) => {
  return {
    [`&::${pse}`]: {
      position: "absolute",
      content: `attr('data-${pse}')`,
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      ...properties
    },
    "&": {
      position: "relative",
      overflow: "hidden"
    }
  };
};

const linearGradientText = bg => ({
  background: bg,
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"
});
const typo = ({
  fontSize,
  fontWeight,
  lineHeight,
  fontFamily,
  letterSpacing
}) => {
  //TODO: type
  return {
    fontSize,
    fontWeight,
    lineHeight,
    fontFamily,
    letterSpacing
  };
};

exports.abs = abs;
exports.absXCenter = absXCenter;
exports.absXYCenter = absXYCenter;
exports.absYCenter = absYCenter;
exports.addLeftPaddingInOrderXCenter = addLeftPaddingInOrderXCenter;
exports.alpha = alpha;
exports.arrow = arrow;
exports.bgImg = bgImg;
exports.borderRadiusForGroup = borderRadiusForGroup;
exports.col = col;
exports.cover = cover;
exports.divider = divider;
exports.dividerAt = dividerAt;
exports.divider_p = divider_p;
exports.eqHeight = eqHeight;
exports.fixed = fixed;
exports.fixedXCenter = fixedXCenter;
exports.fixedXYCenter = fixedXYCenter;
exports.fixedYCenter = fixedYCenter;
exports.flexCenter = flexCenter;
exports.flexYCenter = flexYCenter;
exports.getPopoverPos = getPopoverPos;
exports.gradientBorder = gradientBorder;
exports.gradientRoundedBorder = gradientRoundedBorder;
exports.hidden = hidden;
exports.leftBottomCorner = leftBottomCorner;
exports.leftTopCorner = leftTopCorner;
exports.linearGradientText = linearGradientText;
exports.list = list;
exports.mask = mask;
exports.nCol = nCol;
exports.pseudoArrow = pseudoArrow;
exports.pseudoElement = pseudoElement;
exports.rgap = rgap;
exports.rightBottomCorner = rightBottomCorner;
exports.rightTopCorner = rightTopCorner;
exports.roundBorderValue = roundBorderValue;
exports.row = row;
exports.supportIndivideTransform = supportIndivideTransform;
exports.textIndent = textIndent;
exports.toggleDisplay = toggleDisplay;
exports.toggleVisibility = toggleVisibility;
exports.typo = typo;
exports.vgap = vgap;
exports.xCenter = xCenter;
exports.xyCenter = xyCenter;
exports.yCenter = yCenter;
