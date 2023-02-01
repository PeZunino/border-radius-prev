import React, { useCallback, useEffect, useState } from "react";
import { Container, Viewer, Wrap } from "./styles";

interface RadiusValues {
  top: number[];
  right: number[];
  bottom: number[];
  left: number[];
}

const Edition: React.FC = () => {
  const [capturedBorderValues, setCapturedBorderValues] = useState();

  const [rangeValue, setRangeValue] = useState<RadiusValues>({
    top: [0, 100],
    right: [0, 100],
    bottom: [100, 0],
    left: [100, 0],
  });

  useEffect(() => {
    const imageElement = document.getElementById("image") as HTMLElement;
    const borderRadiusValues = getComputedStyle(imageElement) as any;
    setCapturedBorderValues(borderRadiusValues["border-radius"]);
  }, [rangeValue]);

  const handleRangeChange = useCallback(
    (element: React.ChangeEvent<HTMLInputElement>) => {
      const position = element.target.id;
      const value = parseInt(element.target.value);

      rangeValue[position as keyof RadiusValues][0] = value;
      rangeValue[position as keyof RadiusValues][1] = 100 - value;

      setRangeValue({ ...rangeValue });
    },
    []
  );

  const handleCopyButton = useCallback(async () => {
    const displayedValue = document.getElementById(
      "attr_display"
    ) as HTMLElement;
    await navigator.clipboard.writeText(displayedValue.innerText);
  }, []);
  return (
    <>
      <Container>
        <Wrap value={rangeValue}>
          <span id="image" />
        </Wrap>

        <input
          type="range"
          id="top"
          defaultValue={rangeValue.top[0]}
          onChange={(element) => {
            handleRangeChange(element);
          }}
        />
        <input
          type="range"
          id="right"
          defaultValue={rangeValue.right[0]}
          onChange={(element) => {
            handleRangeChange(element);
          }}
        />
        <input
          type="range"
          id="left"
          defaultValue={rangeValue.left[0]}
          onChange={(element) => {
            handleRangeChange(element);
          }}
        />
        <input
          type="range"
          id="bottom"
          defaultValue={rangeValue.bottom[0]}
          onChange={(element) => {
            handleRangeChange(element);
          }}
        />
      </Container>
      <Viewer>
        <button onClick={handleCopyButton}>Copy</button>
        <span id="attr_display">{capturedBorderValues}</span>
      </Viewer>
    </>
  );
};

export default Edition;
