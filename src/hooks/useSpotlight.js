import { useCallback } from "react";

// Returns an onPointerMove handler that feeds cursor coords into the
// `.spotlight` CSS radial gradient via custom properties (no re-renders).
const useSpotlight = () =>
  useCallback((event) => {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }, []);

export default useSpotlight;
