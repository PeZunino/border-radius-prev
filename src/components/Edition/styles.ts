import styled, { css } from "styled-components";

interface RadiusValues {
  value: {
    top: number[];
    right: number[];
    bottom: number[];
    left: number[];
  };
}

const sliderButtonStyles = {
  cursor: "pointer",
  width: "10px",
  height: "10px",
  background: "#227cf0",
};

const Container = styled.div`
  height: 200px;
  width: 200px;
  position: relative;

  input {
    bottom: -3%;
    position: absolute;
    align-items: center;
    width: 100%;
    height: 17px;
    border: 0px;
    cursor: pointer;
    background-color: transparent;

    ::-webkit-slider-thumb {
      -webkit-appearance: none; /* Override default look */
      appearance: none;
      cursor: ${sliderButtonStyles.cursor};
      width: ${sliderButtonStyles.width};
      height: ${sliderButtonStyles.height};
      background: ${sliderButtonStyles.background};
    }

    ::-moz-range-thumb {
      cursor: ${sliderButtonStyles.cursor};
      width: ${sliderButtonStyles.width};
      height: ${sliderButtonStyles.height};
      background: ${sliderButtonStyles.background};
    }
  }

  #top {
    top: -3%;
  }

  #right {
    transform: rotate(90deg);
    bottom: 46%;
    left: 49%;
  }

  #left {
    transform: rotate(90deg);
    bottom: 46%;
    right: 49%;
  }
`;

const Wrap = styled.div<RadiusValues>`
  height: 100%;
  width: 100%;
  border: white dashed 2px;
  position: relative;

  span {
    display: block;
    height: 100%;
    background: #55abb0;
    ${(props) => {
      const { bottom, left, right, top } = props.value;
      return css`
        border-radius: ${top[0]}% ${top[1]}% ${bottom[1]}% ${bottom[0]}% /
          ${left[0]}% ${right[0]}% ${right[1]}% ${left[1]}%;
      `;
    }}
  }
`;

const Viewer = styled.div`
  max-width: fit-content;
  max-height: 50px;
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  align-items: center;

  button {
    width: 100px;
    height: 100%;
    border: 0px;
    background-color: #54c394;

    :hover {
      filter: brightness(120%);
    }
  }

  span {
    text-align: center;
    padding: 5px;
    width: 100%;
    font-family: "Roboto", sans-serif;
    word-spacing: 5px;
  }
`;
export { Container, Wrap, Viewer };
