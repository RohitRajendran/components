/** @module ProfileCircleIllustration */
import React, {FC, memo} from 'react';
import {colors} from '~constants/js/colors';

type ProfileCircleIllustrationProps = {
  /** The width of the illustration with unit sizing (px, rem, etc). */
  width?: string;
  /** The height of the illustration with unit sizing (px, rem, etc). */
  height?: string;
  /** The color of the illustration. */
  fill?: string;
  /** Additional class names to apply to the container. */
  className?: string;
  /** Additional inline styles to apply to the container. */
  style?: React.CSSProperties;
  /** Allows you to adjust the id of the SVG, this can be useful when using multiple of the same SVG on the same page. */
  id?: string;
};

/** Renders a profile illustration. */
const ProfileCircleIllustration: FC<ProfileCircleIllustrationProps> = ({
  fill,
  width,
  height,
  className,
  style,
  id,
}) => {
  const elementProps = {
    className,
    style: {
      /**
       * Workaround svg height and width attributes not supporting rems in Firefox and IE by passing it through style
       * https://www.w3.org/TR/SVG11/types.html#DataTypeLength
       * */
      width,
      height,
      ...style,
    },
  };

  return (
    <svg
      {...elementProps}
      viewBox="0 0 232 232"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-labelledby={`${id}-title ${id}-description`}
      data-testid="default"
    >
      <title id={`${id}-title`}>Profile Circle Illustration</title>
      <desc id={`${id}-description`}>Person silhouette</desc>
      <defs>
        <circle id="path-1" cx="116" cy="116" r="116" />
      </defs>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-604.000000, -140.000000)">
          <g transform="translate(604.000000, 140.000000)">
            <mask id="mask-2" fill="white">
              <use xlinkHref="#path-1" />
            </mask>
            <use id="Mask" fill={colors.midnight} xlinkHref="#path-1" />
            <g
              id="Illustration-/-Source-/-Persona"
              opacity="0.800000012"
              mask="url(#mask-2)"
            >
              <g transform="translate(-11.000000, 16.000000)">
                <g transform="translate(53.308642, 0.000000)">
                  <g>
                    <path
                      d="M51.7130554,148.153148 C58.8669765,154.582855 66.4173885,158.55464 73.691358,158.55464 C81.1469422,158.55464 88.8929453,154.382046 96.2047604,147.666969 C98.6134167,194.050522 146.381524,194.023306 146.381524,194.023306 C146.934467,194.039125 147.382716,194.49839 147.382716,195.053132 L147.382716,230.481596 C147.382716,231.034535 146.933388,231.48278 146.382827,231.48278 L0.999889466,231.48278 C0.447665762,231.48278 0,231.036338 0,230.481596 L0,195.053132 C0,194.500194 0.448122376,194.043758 1.0006664,194.023809 C1.0006664,194.023809 48.9665523,194.05036 51.7130554,148.153148 Z"
                      fill="#584D82"
                    />
                    <path
                      d="M51.7130554,148.153148 C58.8669765,154.582855 66.4173885,158.55464 73.691358,158.55464 L73.691358,231.48278 L0.999794498,231.48278 C0.447623244,231.48278 7.10542736e-15,231.036338 7.10542736e-15,230.481596 L7.10542736e-15,195.053132 C7.10542736e-15,194.500194 0.448122376,194.043758 1.0006664,194.023809 C1.0006664,194.023809 48.9665523,194.05036 51.7130554,148.153148 Z"
                      fill={fill}
                      opacity="0.15"
                    />
                    <path
                      d="M113.784517,125.508412 C102.554422,143.99897 87.6163415,158.55464 73.691358,158.55464 C59.6188287,158.55464 44.5116194,143.688879 33.2424794,124.919335 C33.2106941,124.941683 33.178642,124.963737 33.146323,124.985495 C28.8390022,127.885324 21.421844,124.427486 16.5796364,117.262199 C11.7374288,110.096912 11.3038173,101.937524 15.6111381,99.037696 C17.0585341,98.0632621 18.8570844,97.8067182 20.7910866,98.1675053 C17.5563407,88.652245 15.6790123,79.3701419 15.6790123,71.4908141 C15.6790123,39.5120925 41.6520242,13.5882167 73.691358,13.5882167 C105.730692,13.5882167 131.703704,39.5120925 131.703704,71.4908141 C131.703704,79.327552 129.846615,88.5519415 126.643964,98.0132295 C128.015884,97.9871271 129.282636,98.3149379 130.3562,99.037696 C134.66352,101.937524 134.229909,110.096912 129.387701,117.262199 C124.88965,123.918219 118.169665,127.375069 113.78452,125.508408 Z"
                      fill="#6F6693"
                    />
                    <path
                      d="M33.2424794,124.919335 C33.2106941,124.941683 33.178642,124.963737 33.146323,124.985495 C28.8390022,127.885324 21.421844,124.427486 16.5796364,117.262199 C11.7374288,110.096912 11.3038173,101.937524 15.6111381,99.037696 C17.0585341,98.0632621 18.8570844,97.8067182 20.7910866,98.1675053 C17.5563407,88.652245 15.6790123,79.3701419 15.6790123,71.4908141 C15.6790123,39.5120925 41.6520242,13.5882167 73.691358,13.5882167 C113.67284,13.5882167 128.404445,76.6818182 113.67284,76.6818182 C90.0287664,76.6818182 82.6345617,81.0548219 81.7758488,81.3735669 C76.7115542,83.2533784 81.7758488,99.4289169 81.7758488,110.462409 C81.7758488,115.183194 73.691358,113.592279 73.691358,113.592279 C65.2669512,126.765853 96.5399986,158.55464 73.691358,158.55464 C59.6188287,158.55464 44.5116194,143.688879 33.2424794,124.919335 Z"
                      fill={fill}
                      opacity="0.15"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

ProfileCircleIllustration.defaultProps = {
  height: '14rem',
  width: '14.4rem',
  fill: '#ffffff',
  id: 'income-circle-illustration',
};

export default memo(ProfileCircleIllustration);
export {ProfileCircleIllustration as PureProfileCircleIllustration};
