import { useEffect, useRef } from "react";
import { mountFigure } from "../../vendor/hairline/mount.js";

type HairlineFigureModule = Parameters<typeof mountFigure>[1];

export function HairlineFigure({
  figure,
  label,
}: {
  figure: HairlineFigureModule;
  label: string;
}) {
  const stageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    return mountFigure(stage, figure, label);
  }, [figure, label]);

  return (
    <div className="hairline-art">
      <div ref={stageRef} />
    </div>
  );
}
