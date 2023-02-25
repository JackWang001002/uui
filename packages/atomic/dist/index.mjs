import { LoadingOutlined } from '@ant-design/icons';
import { styled } from '@yuejs/react';
import _ from 'lodash';
import React, { useCallback, useMemo } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useSwitch } from '@c3/react';

const Atomic = styled("div", {
  "variants-shape-round": "variants-shape-round-dtVMWK",
  "variants-shape-rect": "variants-shape-rect-iydAuT"
}, "baseStyle-kZRiXr");

const __Button = styled(Atomic, {}, "baseStyle-fzwWap", {
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
  const handleClick = useCallback(async e => {
    if (preventDefault) {
      e.preventDefault();
    }
    if (loading) {
      return;
    }
    await onClick?.(e);
  }, [loading, onClick, preventDefault]);
  const DebouncedClick = useMemo(() => debounce > 0 ? _.debounce(handleClick, debounce, {
    leading: true,
    trailing: false
  }) : handleClick, [debounce, handleClick]);
  return /*#__PURE__*/jsxs(__Button, {
    onClick: DebouncedClick,
    disabled: disabled || loading,
    ...restProps,
    children: [loading && (loadingIcon || /*#__PURE__*/jsx(LoadingOutlined, {
      className: "loading-icon"
    })), children]
  });
};
const Button = styled(_Button, {}, "baseStyle-PJLV");

const useButton = (btn, option) => {
  const {
    useLoading
  } = option;
  const [loading, showLoading, hideLoading] = useSwitch(false);
  const onClick = useCallback(async e => {
    try {
      useLoading && showLoading();
      await btn.props.onClick?.(e);
    } finally {
      useLoading && hideLoading();
    }
  }, [btn.props, hideLoading, showLoading, useLoading]);
  return /*#__PURE__*/React.cloneElement(btn, {
    loading,
    onClick
  });
};

const Link = styled(Atomic, {}, "baseStyle-fGLCmB", {
  as: "a"
});

const Text = styled(Atomic, {
  "variants-gradient-dynamic": "variants-gradient-dynamic-ivDDh",
  "variants-rows-dynamic": "variants-rows-dynamic-LOOSj"
}, "baseStyle-PJLV", {
  as: "p"
});

const Title = styled(Text, {}, "baseStyle-PJLV", {
  as: "h1"
});
const SubTitle = styled(Text, {}, "baseStyle-PJLV", {
  as: "h2"
});
const Description = styled(Text, {}, "baseStyle-PJLV", {
  as: "p"
});

// export type ImageProps = CSSProps & {
//   fallbackSrc?: URL;
//   loadingIndicator?: URL;
// } & React.ImgHTMLAttributes<HTMLImageElement>;

const _Image = styled(Atomic, {}, "baseStyle-grJXBd", {
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
const Avatar = styled(Image, {}, "baseStyle-moRr");

const Space = styled(Atomic, {
  "variants-size-dynamic": "variants-size-dynamic-dQwCki"
}, "baseStyle-dPWzRY");

export { Atomic, Avatar, Button, Description, Icon, Image, Link, Space, SubTitle, Text, Title, _Button, useButton };
