"use client";

import { useEffect, useState } from "react";

export default function Stat({ label, value }: { label: string; value: number }) {
  const [v, setV] = useState(0);

  useEffect(() => {
    let start = 0;
    const dur = 1200;
    const step = Math.max(1, Math.floor(value / (dur / 16)));
    const iv = setInterval(() => {
      start += step;
      if (start >= value) {
        setV(value);
        clearInterval(iv);
      } else {
        setV(start);
      }
    }, 16);
    return () => clearInterval(iv);
  }, [value]);

  return (
    <div className="flex flex-col items-center">
      <div className="text-3xl font-semibold text-(--grid-blue) tabular-nums">{v}</div>
      <div className="text-sm muted">{label}</div>
    </div>
  );
}
