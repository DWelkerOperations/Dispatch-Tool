import { createContext, useContext } from "react";

export const TimelineScaleContext = createContext(1);

export function useTimelineScale() {
  return useContext(TimelineScaleContext);
}
