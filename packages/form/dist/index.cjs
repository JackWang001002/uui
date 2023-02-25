'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('@yuejs/react');
var icons = require('@ant-design/icons');
var _ = require('lodash');
var React = require('react');
var jsxRuntime = require('react/jsx-runtime');
var react$1 = require('@c3/react');
var ReactDOM = require('react-dom');
var utils = require('@c3/utils');
var reactDomInteractions = require('@floating-ui/react-dom-interactions');
var dbg = require('@c3/dbg');
var _anime = require('animejs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var ___default = /*#__PURE__*/_interopDefaultLegacy(_);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);
var _anime__default = /*#__PURE__*/_interopDefaultLegacy(_anime);

const Atomic = react.styled("div", {
  "variants-shape-round": "variants-shape-round-dtVMWK",
  "variants-shape-rect": "variants-shape-rect-iydAuT"
}, "baseStyle-kZRiXr");

const __Button = react.styled(Atomic, {}, "baseStyle-fzwWap", {
  as: "button"
});
const _Button = props => {
  const {
    preventDefault,
    onClick,
    loading,
    loadingIcon,
    children,
    disabled,
    debounce: _debounce = 400,
    ...restProps
  } = props;
  const debounce = typeof _debounce === "boolean" ? _debounce ? 400 : 0 : _debounce;
  const handleClick = React.useCallback(async e => {
    if (preventDefault) {
      e.preventDefault();
    }
    if (loading) {
      return;
    }
    await onClick?.(e);
  }, [loading, onClick, preventDefault]);
  const DebouncedClick = React.useMemo(() => debounce > 0 ? ___default["default"].debounce(handleClick, debounce, {
    leading: true,
    trailing: false
  }) : handleClick, [debounce, handleClick]);
  return /*#__PURE__*/jsxRuntime.jsxs(__Button, {
    onClick: DebouncedClick,
    disabled: disabled || loading,
    ...restProps,
    children: [loading && (loadingIcon || /*#__PURE__*/jsxRuntime.jsx(icons.LoadingOutlined, {
      className: "loading-icon"
    })), children]
  });
};
react.styled(_Button, {}, "baseStyle-PJLV");

react.styled(Atomic, {}, "baseStyle-fGLCmB", {
  as: "a"
});

const Text = react.styled(Atomic, {
  "variants-gradient-dynamic": "variants-gradient-dynamic-ivDDh",
  "variants-rows-dynamic": "variants-rows-dynamic-LOOSj"
}, "baseStyle-PJLV", {
  as: "p"
});

react.styled(Text, {}, "baseStyle-PJLV", {
  as: "h1"
});
react.styled(Text, {}, "baseStyle-PJLV", {
  as: "h2"
});
react.styled(Text, {}, "baseStyle-PJLV", {
  as: "p"
});

// export type ImageProps = CSSProps & {
//   fallbackSrc?: URL;
//   loadingIndicator?: URL;
// } & React.ImgHTMLAttributes<HTMLImageElement>;

const _Image = react.styled(Atomic, {}, "baseStyle-grJXBd", {
  as: "img"
});
const Image = _Image;
react.styled(Image, {}, "baseStyle-moRr");

react.styled(Atomic, {
  "variants-size-dynamic": "variants-size-dynamic-dQwCki"
}, "baseStyle-dPWzRY");

const Box = react.styled(Atomic, {
  "variants-dbg-true": "variants-dbg-true-cjqOyh"
}, "baseStyle-dhzjXW", {
  as: "u-box"
});
Box.displayName = "Box";

const Row = react.styled(Box, {
  "variants-gap-dynamic": "variants-gap-dynamic-hJEYEx",
  "variants-fx-dynamic": "variants-fx-dynamic-hDAmCf",
  "variants-fy-dynamic": "variants-fy-dynamic-yrjGO"
}, "baseStyle-jwtIMV", {
  as: "u-row"
});

react.styled(Box, {
  "variants-gap-dynamic": "variants-gap-dynamic-iCYOfC",
  "variants-fx-dynamic": "variants-fx-dynamic-byhcxn",
  "variants-fy-dynamic": "variants-fy-dynamic-fBSwba"
}, "baseStyle-eVKEMs", {
  as: "u-col"
});

/**
 * Responsive
 * column on mobile, row on desktop
 */
react.styled(Box, {
  "variants-fx-dynamic": "variants-fx-dynamic-bduvFY",
  "variants-fy-dynamic": "variants-fy-dynamic-iiDvRI"
}, "baseStyle-lhuref");

const __Fixed = react.styled(Box, {}, "baseStyle-dguCHI", {
  as: "u-fixed"
});
const Fixed = /*#__PURE__*/React__default["default"].forwardRef((props, ref) => {
  const portal = /*#__PURE__*/ReactDOM__default["default"].createPortal( /*#__PURE__*/jsxRuntime.jsx(__Fixed, {
    ...props,
    ref: ref
  }), document.body);
  return portal;
});
Fixed.displayName = "Fixed";

const __Grid = react.styled("u-grid", {}, "baseStyle-bKdkJy");
const Grid = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    data,
    renderItem,
    ...restProps
  } = props;
  return /*#__PURE__*/jsxRuntime.jsx(__Grid, {
    ...restProps,
    ref: ref,
    children: data.map((item, index) => {
      return renderItem?.(item, index) || item.renderItem?.(item, index) || /*#__PURE__*/jsxRuntime.jsx(jsxRuntime.Fragment, {});
    })
  });
});
Grid.displayName = "Grid";

const __Stack = react.styled(Box, {}, "baseStyle-iXFdhL", {
  as: "u-stack"
});
const Stack = /*#__PURE__*/React__default["default"].forwardRef((props, ref) => {
  const {
    body,
    children,
    ...restProps
  } = props;
  return /*#__PURE__*/jsxRuntime.jsxs(__Stack, {
    ...restProps,
    ref: ref,
    children: [body, children]
  });
});
Stack.displayName = "Stack";
// export const Stack = styled(_Stack, {});

react.styled(Box, {}, "baseStyle-bMCfDd", {
  as: "u-abs"
});

react.styled(Box, {}, "baseStyle-cmpvrW", {
  as: "u-relative"
});

const __List = react.styled(Box, {
  "variants-direction-column": "variants-direction-column-dUzzmp",
  "variants-direction-row": "variants-direction-row-ejCoEP"
}, "baseStyle-gNbevc", {
  as: "u-ul"
});
const List = /*#__PURE__*/React__default["default"].forwardRef((props, ref) => {
  const {
    data,
    renderItem,
    direction = "column",
    updateData,
    onClick: _onClick,
    ...restProps
  } = props;
  const on = react$1.useExclusive(data, "active", updateData);
  const onClick = React.useCallback(async e => {
    await _onClick?.(e);
  }, [_onClick]);
  return /*#__PURE__*/jsxRuntime.jsx(__List, {
    onClick: onClick,
    direction: direction,
    ...restProps,
    ref: ref,
    children: data.map((e, idx) => {
      const item = e.renderItem?.(e, idx) || renderItem?.(e, idx) || /*#__PURE__*/jsxRuntime.jsx(jsxRuntime.Fragment, {});
      if (! /*#__PURE__*/React__default["default"].isValidElement(item)) {
        return item;
      }
      return /*#__PURE__*/React__default["default"].cloneElement(item, {
        //@ts-ignore
        onClick: async event => {
          on(e.id);
          //@ts-ignore
          await item.props.onClick?.(event);
        },
        "data-active": e.active
      });
    })
  });
});
List.displayName = "List";

const _Input$1 = react.styled("input", {}, "baseStyle-cyFWxL");

const __Row = react.styled(Row, {}, "baseStyle-hJWExS");
const _Input = (props, ref) => {
  const {
    prefix,
    suffix,
    className,
    ...restProps
  } = props;
  return /*#__PURE__*/jsxRuntime.jsxs(__Row, {
    className: className,
    disabled: restProps.disabled,
    children: [prefix, /*#__PURE__*/jsxRuntime.jsx(_Input$1, {
      ...restProps,
      ref: ref,
      onKeyPress: e => {
        e.key === "Enter" && e.currentTarget.blur();
      }
    }), suffix]
  });
};
const Input = /*#__PURE__*/React__default["default"].forwardRef(_Input);

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
  const prev = react$1.usePrev(visible);
  const overlayId = react$1.useGId();
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

const Select = props => {
  const {
    selectBox,
    children,
    ...restProps
  } = props;
  if (! /*#__PURE__*/React__default["default"].isValidElement(children)) {
    throw new Error("Select children must be a valid react element");
  }
  return /*#__PURE__*/jsxRuntime.jsx(Dropdown, {
    overlay: children,
    ...restProps,
    children: selectBox
  });
};

exports.Input = Input;
exports.Select = Select;
