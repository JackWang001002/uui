'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var icons = require('@ant-design/icons');
var react = require('@yuejs/react');
var _ = require('lodash');
var React = require('react');
var jsxRuntime = require('react/jsx-runtime');
var react$1 = require('@c3/react');
var ReactDOM = require('react-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var ___default = /*#__PURE__*/_interopDefaultLegacy(_);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

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

const Col = react.styled(Box, {
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
const Responsive = react.styled(Box, {
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

const Abs = react.styled(Box, {}, "baseStyle-bMCfDd", {
  as: "u-abs"
});

const _Relative = react.styled(Box, {}, "baseStyle-cmpvrW", {
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

exports.Abs = Abs;
exports.Box = Box;
exports.Col = Col;
exports.Fixed = Fixed;
exports.Grid = Grid;
exports.List = List;
exports.Responsive = Responsive;
exports.Row = Row;
exports.Stack = Stack;
exports._Relative = _Relative;
