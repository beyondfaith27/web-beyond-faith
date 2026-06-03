/**
 * Honeycomb
 * @component
 * @param {Object} props
 * @param {{image: string, text: string}[]} props.imageObjs - Array of image URLs objs.
 * @param {number} [props.hexSize=120] - Width of each hexagon in pixels.
 */
"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useHoverHighlightContext } from "@/app/(site)/home/HoverHighlightProvider";
import { cj } from "@/lib/utils";

export default function Honeycomb({ imageObjs }) {
  const [hexSize, setHexSize] = useState(160);

  useEffect(() => {
    function updateHexSize() {
      if (window.innerWidth > 1000) setHexSize(160);
      else if (window.innerWidth > 500) setHexSize(120);
      else setHexSize(64);
    }

    updateHexSize();
    window.addEventListener("resize", updateHexSize);

    return () => window.removeEventListener("resize", updateHexSize);
  }, []);
  const rows = buildRows(imageObjs, 4);

  const spacing = 10;
  const hexHeight = hexSize * 1.1547;
  const verticalStep = hexHeight * 0.8;
  const horizontalOffset = (hexSize + spacing) / 2;

  return (
    <div className="w-full flex justify-center">
      <div className="relative">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex concern opacity-0"
            style={{
              marginTop: rowIndex === 0 ? 0 : -(hexHeight - verticalStep),
              marginLeft: rowIndex % 2 === 0 ? horizontalOffset : 0,
              gap: spacing,
            }}
          >
            {row.map((imageObj, index) => (
              <Hex key={index} size={hexSize} imageObj={imageObj} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Hex
 *
 * Renders a single flat-topped hexagon with
 * ultra-smooth hover scale animation.
 *
 * @param {Object} props
 * @param {{image: string, text: string}} props.imageObj - Image URL.
 * @param {number} props.size - Hexagon width.
 */
function Hex({ imageObj, size }) {
  const [hoveredItem, setHoveredItem] = useHoverHighlightContext()

  const isItemHovered = hoveredItem === imageObj.text

  return (
    <motion.div
      onMouseEnter={() => setHoveredItem(imageObj.text)}
      onMouseLeave={() => setHoveredItem(null)}
      animate={{
        scale: isItemHovered ? 1.6 : 1,
        zIndex: isItemHovered ? 10 : 1,
        filter: isItemHovered
          ? "drop-shadow(0px 18px 30px rgba(0,0,0,0.45))"
          : "drop-shadow(0px 0px 0px rgba(0,0,0,0))",
      }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative flex items-center justify-center will-change-transform"
      style={{
        width: size,
        height: size * 1.1547,
      }}
    >
      <div
        className="flex items-center justify-center bg-colored-background
          [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]"
        style={{ width: "100%", height: "100%" }}
      >
        <div
          className="flex items-center justify-center bg-background
            [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]"
          style={{
            width: "calc(100% - 1px)",
            height: "calc(100% - 1px)",
          }}
        >
          <div className={cj("relative w-[75%] h-[75%] transition ease-in-out",
            hoveredItem !== imageObj.text && hoveredItem !== null && "opacity-30")}>
            <Image src={imageObj.image} alt="" fill sizes="(min-width: 1000px) 120px, 90px" className="object-contain" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/**
 * buildRows
 *
 * Distributes images into interleaved rows
 * with a maximum number of rows.
 *
 * @param {any[]} items
 * @param {number} maxRows
 * @returns {string[][]}
 */
function buildRows(items, maxRows) {
  const count = items.length;
  const rows = Math.min(maxRows, Math.ceil(Math.sqrt(count)));
  const perRow = Math.ceil(count / rows);

  const result = [];
  let index = 0;

  for (let i = 0; i < rows; i++) {
    const remaining = count - index;
    const take = i === rows - 1 ? remaining : Math.min(perRow, remaining);
    result.push(items.slice(index, index + take));
    index += take;
  }

  return result;
}
