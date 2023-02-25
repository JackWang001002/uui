'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utils = require('@c3/utils');
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

const anti = direction => direction === "row" ? "column" : "row";

//TODO:支持hash跳转
const Nav = props => {
  const {
    menuConfig,
    updateConfig,
    direction,
    renderItem,
    renderContent,
    ...restProps
  } = props;
  const Layout = direction === "row" ? Row : Col;
  const nav = React.useMemo(() => /*#__PURE__*/jsxRuntime.jsx(List, {
    as: "u-nav",
    data: menuConfig,
    direction: anti(direction),
    renderItem: (e, idx) => {
      return e.renderItem?.(e, idx) || renderItem?.(e) || /*#__PURE__*/jsxRuntime.jsx(jsxRuntime.Fragment, {});
    },
    updateData: updateConfig
  }), [direction, menuConfig, renderItem, updateConfig]);
  const content = React.useMemo(() => {
    return /*#__PURE__*/jsxRuntime.jsx(List, {
      data: menuConfig,
      direction: anti(direction),
      renderItem: e => e.renderContent?.(e) || renderContent?.(e) || /*#__PURE__*/jsxRuntime.jsx(jsxRuntime.Fragment, {}),
      updateData: utils.noop,
      className: "css-hxukYx"
    });
  }, [direction, menuConfig, renderContent]);
  return /*#__PURE__*/jsxRuntime.jsxs(Layout, {
    as: "u-switcher",
    ...restProps,
    children: [nav, content]
  });
};

const SwitchWithHash = props => {
  const {
    menuConfig,
    updateConfig
  } = props;
  const on = react$1.useExclusive(menuConfig, "active", updateConfig);
  const switchToHash = React.useCallback(() => {
    const hash = window.location.hash;
    if (hash) {
      on(hash.slice(1));
    }
  }, [on]);
  react$1.useEventListener(window, "hashchange", switchToHash);
  react$1.useMount(switchToHash);
  return /*#__PURE__*/jsxRuntime.jsx(Nav, {
    ...props
  });
};

const useSteps = props => {
  const {
    data,
    updateData
  } = props;
  const on = react$1.useExclusive(data, "active", updateData);
  const activeIndex = React.useMemo(() => data.findIndex(e => e.active), [data]);
  const nextIndex = activeIndex < data.length - 1 ? activeIndex + 1 : 0;
  const prevIndex = activeIndex > 0 ? activeIndex - 1 : data.length - 1;
  const goNext = React.useCallback(() => {
    on(data[nextIndex].id);
  }, [nextIndex, data, on]);
  const goPrev = React.useCallback(() => {
    on(data[prevIndex].id);
  }, [prevIndex, data, on]);
  const goTo = React.useCallback(idx => {
    on(data[idx].id);
  }, [data, on]);
  return {
    goNext,
    goPrev,
    goTo,
    activeIndex,
    nextIndex,
    prevIndex
  };
};

const SideBar = props => /*#__PURE__*/jsxRuntime.jsx(Nav, {
  direction: "row",
  ...props
});
const Menus = Nav;
const Tabs = props => /*#__PURE__*/jsxRuntime.jsx(Nav, {
  direction: "column",
  ...props
});

exports.Menus = Menus;
exports.Nav = Nav;
exports.SideBar = SideBar;
exports.SwitchWithHash = SwitchWithHash;
exports.Tabs = Tabs;
exports.useSteps = useSteps;
