import { usePrev, useGId } from '@c3/react';
import { placements, anti, toArray, isNullish } from '@c3/utils';
import { useFloating, flip, shift, offset, autoUpdate, useClick, useHover, useDismiss, useInteractions, FloatingPortal } from '@floating-ui/react-dom-interactions';
import { dbg } from '@c3/dbg';
import _anime from 'animejs';
import React, { useState, useEffect } from 'react';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';

//@ts-ignore
window.__anime = _anime;
const animate$2 = (...animeParams) => {
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
      return animate$2({
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
      return animate$2({
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

//TODO: zoom type optimization

const zoom = placements.reduce((acc, cur) => {
  return {
    ...acc,
    [`${cur}-in`]: params => {
      return animate$2({
        scale: [0.5, 1],
        opacity: [0, 1],
        begin: e => {
          e.animatables.forEach(e => e.target.style.transformOrigin = anti[cur]);
        },
        ...params
      });
    },
    [`${cur}-out`]: params => {
      return animate$2({
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
  if (! /*#__PURE__*/React.isValidElement(children)) {
    throw new Error("TypeError:children must be reactElement");
  }
  const prev = usePrev(visible);
  const overlayId = useGId();
  const [visibility, setVisibility] = useState("hidden");
  const {
    x,
    y,
    reference,
    floating,
    strategy,
    context
  } = useFloating({
    open: visible,
    onOpenChange: onToggle,
    middleware: [_flip && flip(), shift(), offset(_offset)],
    whileElementsMounted: autoUpdate,
    placement
  });
  const triggers = toArray(trigger);
  const click = useClick(context, {
    enabled: triggers.includes("click")
  });
  const hover = useHover(context, {
    enabled: triggers.includes("hover")
  });
  const dismiss = useDismiss(context);
  const {
    getReferenceProps,
    getFloatingProps
  } = useInteractions([dismiss, click, hover]);
  useEffect(() => {
    if (!isNullish(prev) && prev !== visible) {
      setVisibility("visible");
      anime?.(visible, placement, `#${overlayId}`);
    }
  }, [placement, visible, overlayId, prev, anime]);
  const overlay = /*#__PURE__*/React.cloneElement(_overlay, {
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
  const actionBtn = /*#__PURE__*/React.cloneElement(children, {
    //@ts-ignore
    ref: reference,
    ...getReferenceProps()
  });
  return /*#__PURE__*/jsxs(Fragment, {
    children: [actionBtn, /*#__PURE__*/jsx(FloatingPortal, {
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
  const [visible, setVisible] = React.useState(false);
  if (! /*#__PURE__*/React.isValidElement(children)) {
    throw new Error("TypeError:trigger must be reactElement");
  }
  const overlay = /*#__PURE__*/React.cloneElement(_overlay, {
    onClick: async e => {
      setVisible(false); //disappear when selected
      onToggle?.(false);
      await _overlay.props.onClick?.(e);
    }
  });
  return /*#__PURE__*/jsx(Floating, {
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

export { Dropdown, Floating, Popover, Tooltip };
