"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "motion/react";
import type { Transition } from "motion/react";

const scoreValues = ["65", "78", "82", "95"];

const transition: Transition = {
  duration: 2.65,
  ease: [0.76, 0, 0.24, 1],
  times: [0, 0.27, 0.56, 0.82, 1],
};

export function NhScoreGauge() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.45, margin: "0px 0px -10% 0px" });
  const arcControls = useAnimation();
  const dotControls = useAnimation();
  const numberControls = useAnimation();
  const crownControls = useAnimation();

  useEffect(() => {
    if (!inView) {
      arcControls.set({ strokeDashoffset: 0.86, stroke: "rgb(255, 68, 51)", filter: "drop-shadow(0 0 18px rgba(255, 68, 51, 0.45))" });
      dotControls.set({ cx: 54, cy: 206, fill: "rgb(255, 68, 51)", filter: "drop-shadow(0 0 14px rgba(255, 68, 51, 0.75))" });
      numberControls.set({ y: 0 });
      crownControls.set({ color: "rgb(191, 191, 191)", scale: 0.96 });
      return;
    }

    arcControls.start({
      strokeDashoffset: [0.86, 0.66, 0.45, 0.22, 0.07],
      stroke: ["rgb(255, 68, 51)", "rgb(255, 68, 51)", "rgb(255, 211, 51)", "rgb(85, 225, 43)", "rgb(85, 225, 43)"],
      filter: [
        "drop-shadow(0 0 18px rgba(255, 68, 51, 0.45))",
        "drop-shadow(0 0 18px rgba(255, 68, 51, 0.45))",
        "drop-shadow(0 0 20px rgba(255, 211, 51, 0.42))",
        "drop-shadow(0 0 22px rgba(85, 225, 43, 0.48))",
        "drop-shadow(0 0 22px rgba(85, 225, 43, 0.48))",
      ],
      transition,
    });
    dotControls.start({
      cx: [54, 83, 140, 229, 286],
      cy: [206, 144, 102, 122, 206],
      fill: ["rgb(255, 68, 51)", "rgb(255, 68, 51)", "rgb(255, 211, 51)", "rgb(85, 225, 43)", "rgb(85, 225, 43)"],
      filter: [
        "drop-shadow(0 0 14px rgba(255, 68, 51, 0.75))",
        "drop-shadow(0 0 14px rgba(255, 68, 51, 0.75))",
        "drop-shadow(0 0 16px rgba(255, 211, 51, 0.58))",
        "drop-shadow(0 0 18px rgba(85, 225, 43, 0.75))",
        "drop-shadow(0 0 18px rgba(85, 225, 43, 0.75))",
      ],
      transition,
    });
    numberControls.start({ y: [0, -66, -132, -198, -198], transition });
    crownControls.start({
      color: ["rgb(191, 191, 191)", "rgb(191, 191, 191)", "rgb(255, 211, 51)", "rgb(255, 68, 51)", "rgb(255, 68, 51)"],
      scale: [0.96, 0.96, 1, 1.06, 1],
      transition,
    });
  }, [arcControls, crownControls, dotControls, inView, numberControls]);

  return (
    <div ref={ref} className="relative mx-auto h-[268px] max-w-[348px] overflow-hidden rounded-[22px] border border-white/10 bg-[#151414]">
      <div className="absolute left-7 top-7 z-10 flex items-center gap-3 text-[19px] font-semibold text-[#bfbfbf]">
        <span className="relative flex size-3.5 items-center justify-center">
          <span className="absolute size-3.5 animate-ping rounded-full bg-[#55e12b]/40" />
          <span className="size-3.5 rounded-full bg-[#55e12b] shadow-[0_0_12px_rgba(85,225,43,0.75)]" />
        </span>
        Sleep
      </div>

      <svg className="absolute inset-x-0 top-16 mx-auto h-[220px] w-[340px]" viewBox="0 0 340 240" aria-hidden="true">
        <defs>
          <linearGradient id="nh-score-fade" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="currentColor" stopOpacity="0" />
            <stop offset="0.18" stopColor="currentColor" stopOpacity="0.58" />
            <stop offset="0.92" stopColor="currentColor" stopOpacity="1" />
          </linearGradient>
        </defs>
        <path d="M54 206 A116 116 0 0 1 286 206" pathLength="1" fill="none" stroke="rgb(255 255 255 / 0.15)" strokeWidth="19" strokeLinecap="round" />
        <motion.path
          d="M54 206 A116 116 0 0 1 286 206"
          pathLength="1"
          fill="none"
          stroke="currentColor"
          strokeWidth="19"
          strokeLinecap="round"
          strokeDasharray="1"
          initial={{ strokeDashoffset: 0.86, color: "rgb(255, 68, 51)", filter: "drop-shadow(0 0 18px rgba(255, 68, 51, 0.45))" }}
          animate={arcControls}
        />
        <motion.circle r="15.5" initial={{ cx: 54, cy: 206, fill: "rgb(255, 68, 51)", filter: "drop-shadow(0 0 14px rgba(255, 68, 51, 0.75))" }} animate={dotControls} />
      </svg>

      <div className="absolute left-1/2 top-[116px] z-10 -translate-x-1/2 text-center">
        <motion.svg width="54" height="54" viewBox="0 0 41 41" className="mx-auto mb-1" initial={{ color: "rgb(191, 191, 191)", scale: 0.96 }} animate={crownControls}>
          <path d="M31.217 32.822H9.333c-.262.002-.517-.079-.73-.232a1.25 1.25 0 0 1-.453-.618L2.833 15.755a1.25 1.25 0 0 1 .367-1.333c.187-.164.419-.268.666-.297.247-.03.497.015.717.13l9.7 4.834 5.001-9.7c.115-.194.278-.354.474-.465a1.29 1.29 0 0 1 1.284 0c.196.111.359.271.475.465l5 9.716 9.716-4.833c.219-.113.466-.158.71-.129.244.03.473.133.657.296.16.175.266.391.308.624.041.233.015.473-.074.692L32.4 31.955c-.078.253-.236.473-.449.629a1.25 1.25 0 0 1-.734.238ZM10.333 30.322h20.001l4.183-12.483-8.117 4.033c-.145.074-.304.119-.467.132a1.25 1.25 0 0 1-.903-.298 1.25 1.25 0 0 1-.296-.384l-4.4-8.633-4.384 8.633a1.25 1.25 0 0 1-1.2.682 1.25 1.25 0 0 1-.467-.132l-8.15-4.083 4.2 12.533Z" fill="currentColor" />
        </motion.svg>
        <div className="h-[66px] w-[126px] overflow-hidden">
          <motion.div initial={{ y: 0 }} animate={numberControls}>
            {scoreValues.map((score) => (
              <div key={score} className="h-[66px] bg-gradient-to-b from-white via-[#bfbfbf] to-[#6e6e6e] bg-clip-text text-[78px] font-semibold leading-[66px] tracking-[-0.08em] text-transparent">
                {score}
              </div>
            ))}
          </motion.div>
        </div>
        <div className="mt-1 text-[16px] font-semibold text-[#6e6e6e]">Optimal</div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[92px] bg-gradient-to-t from-[#151414] via-[#151414]/95 to-transparent" />
    </div>
  );
}
