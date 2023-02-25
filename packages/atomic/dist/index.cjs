'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var icons = require('@ant-design/icons');
var react = require('@yuejs/react');
var _ = require('lodash');
var React = require('react');
var jsxRuntime = require('react/jsx-runtime');
var react$1 = require('@c3/react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var ___default = /*#__PURE__*/_interopDefaultLegacy(_);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
const Button = react.styled(_Button, {}, "baseStyle-PJLV");

const useButton = (btn, option) => {
  const {
    useLoading
  } = option;
  const [loading, showLoading, hideLoading] = react$1.useSwitch(false);
  const onClick = React.useCallback(async e => {
    try {
      useLoading && showLoading();
      await btn.props.onClick?.(e);
    } finally {
      useLoading && hideLoading();
    }
  }, [btn.props, hideLoading, showLoading, useLoading]);
  return /*#__PURE__*/React__default["default"].cloneElement(btn, {
    loading,
    onClick
  });
};

const Link = react.styled(Atomic, {}, "baseStyle-fGLCmB", {
  as: "a"
});

const Text = react.styled(Atomic, {
  "variants-gradient-dynamic": "variants-gradient-dynamic-ivDDh",
  "variants-rows-dynamic": "variants-rows-dynamic-LOOSj"
}, "baseStyle-PJLV", {
  as: "p"
});

const Title = react.styled(Text, {}, "baseStyle-PJLV", {
  as: "h1"
});
const SubTitle = react.styled(Text, {}, "baseStyle-PJLV", {
  as: "h2"
});
const Description = react.styled(Text, {}, "baseStyle-PJLV", {
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
// export const Image: React.FC<ImageProps> = props => {
//   const [isError, errorOn] = useSwitch(false);
//   const [isLoading, loadingOff] = useSwitch(true);
//   const {
//     fallbackSrc = '',
//     src,
//     onLoad,
//     onError,
//     ...restProps
//   } = props;

//   const handleLoad = useCallback(
//     (e: any) => {
//       errorOn();
//       loadingOff();
//       onLoad && onLoad(e);
//     },
//     [errorOn, loadingOff, onLoad]
//   );
//   const handleError = useCallback(
//     (e: any) => {
//       loadingOff();
//       onError && onError(e);
//     },
//     [loadingOff, onError]
//   );

//   return (
//     <_Image
//       as="img"
//       // onError={handleError}
//       // onLoad={handleLoad}
//       src={isError ? fallbackSrc : src}
//       {...restProps}
//     />
//   );
// };

const Icon = Image;
const Avatar = react.styled(Image, {}, "baseStyle-moRr");

const Space = react.styled(Atomic, {
  "variants-size-dynamic": "variants-size-dynamic-dQwCki"
}, "baseStyle-dPWzRY");

exports.Atomic = Atomic;
exports.Avatar = Avatar;
exports.Button = Button;
exports.Description = Description;
exports.Icon = Icon;
exports.Image = Image;
exports.Link = Link;
exports.Space = Space;
exports.SubTitle = SubTitle;
exports.Text = Text;
exports.Title = Title;
exports._Button = _Button;
exports.useButton = useButton;
