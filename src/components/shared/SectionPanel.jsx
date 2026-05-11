import React from "react";

const joinClassNames = (...classes) => classes.filter(Boolean).join(" ");

const sectionGridClassName =
  "pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)]";

export const sectionBadgeClassName =
  "rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-secondary";

const buildGlowBackground = ({
  glow,
  secondaryGlow,
  glowPosition,
  secondaryPosition,
  glowStop,
  secondaryStop,
}) => {
  const layers = [];

  if (glow) {
    layers.push(
      `radial-gradient(circle at ${glowPosition}, ${glow} 0%, transparent ${glowStop})`
    );
  }

  if (secondaryGlow) {
    layers.push(
      `radial-gradient(circle at ${secondaryPosition}, ${secondaryGlow} 0%, transparent ${secondaryStop})`
    );
  }

  return layers.join(", ");
};

const SectionPanel = ({
  children,
  className = "",
  innerClassName = "",
  backgroundClassName = "bg-black-100",
  glow,
  secondaryGlow,
  glowPosition = "top right",
  secondaryPosition = "bottom right",
  glowStop = "35%",
  secondaryStop = "32%",
  glowOpacityClassName = "opacity-70",
  gridSize = 20,
}) => {
  const glowBackground = buildGlowBackground({
    glow,
    secondaryGlow,
    glowPosition,
    secondaryPosition,
    glowStop,
    secondaryStop,
  });

  return (
    <div
      className={joinClassNames(
        "green-pink-gradient rounded-[24px] p-[1px] shadow-card",
        className
      )}
    >
      <div
        className={joinClassNames(
          "relative overflow-hidden rounded-[24px]",
          backgroundClassName,
          innerClassName
        )}
      >
        {glowBackground ? (
          <div
            className={joinClassNames(
              "pointer-events-none absolute inset-0",
              glowOpacityClassName
            )}
            style={{ background: glowBackground }}
          />
        ) : null}

        <div
          className={sectionGridClassName}
          style={{ backgroundSize: `${gridSize}px ${gridSize}px` }}
        />

        <div className='relative'>{children}</div>
      </div>
    </div>
  );
};

export default SectionPanel;
