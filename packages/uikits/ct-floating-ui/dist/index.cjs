'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('@c3/react');
var utils = require('@c3/utils');
var reactDomInteractions = require('@floating-ui/react-dom-interactions');
var dbg = require('@c3/dbg');
var _anime = require('animejs');
var React = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _anime__default = /*#__PURE__*/_interopDefaultLegacy(_anime);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

//@ts-ignore
window.__anime = _anime__default["default"];
const animate$2 = (...animeParams) => {
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
      return animate$2({
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
      return animate$2({
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

//TODO: zoom type optimization

const zoom = utils.placements.reduce((acc, cur) => {
  return {
    ...acc,
    [`${cur}-in`]: params => {
      return animate$2({
        scale: [0.5, 1],
        opacity: [0, 1],
        begin: e => {
          e.animatables.forEach(e => e.target.style.transformOrigin = utils.anti[cur]);
        },
        ...params
      });
    },
    [`${cur}-out`]: params => {
      return animate$2({
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

//FIXME: SSR
globalThis?.CSS?.supports?.("translate", "0px");

const Floating = props => {
  const {
    trigger = "click",
    visible = false,
    onToggle,
    overlay: _overlay,
    placement = "bottom",
    offset: _offset = 10,
    flip: _flip = true,
    children,
    anime = animate$1
  } = props;
  if (! /*#__PURE__*/React__default["default"].isValidElement(children)) {
    throw new Error("TypeError:children must be reactElement");
  }
  const prev = react.usePrev(visible);
  const overlayId = react.useGId();
  const [visibility, setVisibility] = React.useState("hidden");
  const {
    x,
    y,
    reference,
    floating,
    strategy,
    context
  } = reactDomInteractions.useFloating({
    open: visible,
    onOpenChange: onToggle,
    middleware: [_flip && reactDomInteractions.flip(), reactDomInteractions.shift(), reactDomInteractions.offset(_offset)],
    whileElementsMounted: reactDomInteractions.autoUpdate,
    placement
  });
  const triggers = utils.toArray(trigger);
  const click = reactDomInteractions.useClick(context, {
    enabled: triggers.includes("click")
  });
  const hover = reactDomInteractions.useHover(context, {
    enabled: triggers.includes("hover")
  });
  const dismiss = reactDomInteractions.useDismiss(context);
  const {
    getReferenceProps,
    getFloatingProps
  } = reactDomInteractions.useInteractions([dismiss, click, hover]);
  React.useEffect(() => {
    if (!utils.isNullish(prev) && prev !== visible) {
      setVisibility("visible");
      anime?.(visible, placement, `#${overlayId}`);
    }
  }, [placement, visible, overlayId, prev, anime]);
  const overlay = /*#__PURE__*/React__default["default"].cloneElement(_overlay, {
    style: {
      visibility: visibility,
      position: strategy,
      top: y ?? 0,
      left: x ?? 0,
      width: "max-content"
    },
    id: overlayId,
    ref: floating,
    ...getFloatingProps()
  });

  //@ts-ignore
  const actionBtn = /*#__PURE__*/React__default["default"].cloneElement(children, {
    //@ts-ignore
    ref: reference,
    ...getReferenceProps()
  });
  return /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [actionBtn, /*#__PURE__*/jsxRuntime.jsx(reactDomInteractions.FloatingPortal, {
      children: overlay
    })]
  });
};

//=====================================================================================================
// animate
//=====================================================================================================

const animate$1 = (visible, placement, targets) => {

  const key = `${placement}-${visible ? "in" : "out"}`;
  zoom[key]({
    targets
  });
};

const Dropdown = props => {
  const {
    overlay: _overlay,
    children,
    onToggle,
    ...restProps
  } = props;
  const [visible, setVisible] = React__default["default"].useState(false);
  if (! /*#__PURE__*/React__default["default"].isValidElement(children)) {
    throw new Error("TypeError:trigger must be reactElement");
  }
  const overlay = /*#__PURE__*/React__default["default"].cloneElement(_overlay, {
    onClick: async e => {
      setVisible(false); //disappear when selected
      onToggle?.(false);
      await _overlay.props.onClick?.(e);
    }
  });
  return /*#__PURE__*/jsxRuntime.jsx(Floating, {
    visible: visible,
    trigger: "click",
    onToggle: async isOpen => {
      await onToggle?.(isOpen);
      setVisible(isOpen);
    },
    placement: "bottom",
    anime: animate,
    flip: false,
    overlay: overlay,
    ...restProps,
    children: children
  });
};

//================================================================================================
// animate
//================================================================================================

function animate(visible, placement, targets) {
  // if (!supportIndivideTransform) {
  // return;
  // }
  const key = `bottom-${visible ? "in" : "out"}`;
  //@ts-ignore
  slides[key]({
    targets
  });
}

const Popover = Floating;

//TODO:只支持hover
const Tooltip = Floating;

exports.Dropdown = Dropdown;
exports.Floating = Floating;
exports.Popover = Popover;
exports.Tooltip = Tooltip;
