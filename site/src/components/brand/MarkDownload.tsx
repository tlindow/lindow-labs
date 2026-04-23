"use client";

import { useRef } from "react";
import { Download } from "lucide-react";
import { brandMarks } from "./marks";

const PNG_SIZE = 1024;

function triggerDownload(href: string, filename: string) {
  const a = document.createElement("a");
  a.href = href;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(href), 1000);
}

export default function MarkDownload({ markId }: { markId: string }) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const mark = brandMarks.find((m) => m.id === markId);
  if (!mark) return null;
  const { Component } = mark;

  function serialize(size?: number): string | null {
    const svg = containerRef.current?.querySelector("svg");
    if (!svg) return null;
    const clone = svg.cloneNode(true) as SVGSVGElement;
    clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    if (size) {
      clone.setAttribute("width", String(size));
      clone.setAttribute("height", String(size));
    } else {
      clone.removeAttribute("width");
      clone.removeAttribute("height");
    }
    return `<?xml version="1.0" encoding="UTF-8"?>\n${new XMLSerializer().serializeToString(clone)}`;
  }

  function downloadSvg() {
    const str = serialize();
    if (!str) return;
    const url = URL.createObjectURL(new Blob([str], { type: "image/svg+xml" }));
    triggerDownload(url, `${markId}.svg`);
  }

  async function downloadPng() {
    const str = serialize(PNG_SIZE);
    if (!str) return;
    const svgUrl = URL.createObjectURL(
      new Blob([str], { type: "image/svg+xml" }),
    );
    const img = new Image();
    img.src = svgUrl;
    await new Promise<void>((resolve, reject) => {
      img.onload = () => resolve();
      img.onerror = () => reject(new Error("svg load failed"));
    });
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = PNG_SIZE;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.drawImage(img, 0, 0, PNG_SIZE, PNG_SIZE);
    URL.revokeObjectURL(svgUrl);
    canvas.toBlob((pngBlob) => {
      if (!pngBlob) return;
      triggerDownload(URL.createObjectURL(pngBlob), `${markId}-${PNG_SIZE}.png`);
    }, "image/png");
  }

  const btn =
    "inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-border bg-surface hover:border-violet/40 hover:text-violet transition-colors cursor-pointer";

  return (
    <div className="flex items-center gap-2">
      <span
        ref={containerRef}
        className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0"
        aria-hidden
      >
        <Component width={64} height={64} />
      </span>
      <button type="button" onClick={downloadSvg} className={btn} aria-label={`Download ${mark.name} as SVG`}>
        <Download size={12} />
        SVG
      </button>
      <button type="button" onClick={downloadPng} className={btn} aria-label={`Download ${mark.name} as ${PNG_SIZE}px PNG`}>
        <Download size={12} />
        PNG · {PNG_SIZE}
      </button>
    </div>
  );
}
