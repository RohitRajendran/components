/** @module UmbrellaCircleIllustration */
import React, {FC, memo, useState} from 'react';

type UmbrellaCircleIllustrationProps = {
  /** The width of the illustration with unit sizing (px, rem, etc). */
  width?: string;
  /** The height of the illustration with unit sizing (px, rem, etc). */
  height?: string;
  /** Determines if the illustration should default to the illuminated state. */
  illuminate?: boolean;
  /** Determines if the color variant should be shown or not. */
  color?: boolean;
  /** Determines if the draft variant should be shown or not. */
  draft?: boolean;
  /** Additional class names to apply to the container. */
  className?: string;
  /** Additional inline styles to apply to the container. */
  style?: React.CSSProperties;
  /** Allows you to adjust the id of the SVG, this can be useful when using multiple of the same SVG on the same page. */
  id?: string;
};

/** Renders an umbrella illustration. */
const UmbrellaCircleIllustration: FC<UmbrellaCircleIllustrationProps> = ({
  illuminate,
  color,
  draft,
  width,
  height,
  className,
  style,
  id,
}) => {
  const [illuminated, setIlluminated] = useState(false);

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
    onClick: (): void => setIlluminated(!illuminated),
  };

  if (illuminate || illuminated) {
    return (
      <svg
        {...elementProps}
        viewBox="0 0 140 140"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        aria-labelledby={`${id}-title ${id}-description`}
        data-testid="illuminated"
      >
        <title id={`${id}-title`}>Umbrella Circle Illustration</title>
        <desc id={`${id}-description`}>
          Umbrella illustration with rain hitting it
        </desc>
        <clipPath id={`${id}`}>
          <path fill="none" d="M70.07,100.45" />
        </clipPath>
        <clipPath id={`${id}-2`}>
          <rect fill="none" x="68.94" y="99.14" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-3`}>
          <path
            fill="none"
            d="M57.43,100.45c0,3.26,1.28,7.32,5.79,7.32s6.85-2.83,6.85-7.32V94.71H68.6v6.17c0,3.83-1.91,5.59-5,5.59s-5-2.5-5-5.59a2.81,2.81,0,0,0,0-.29,1.44,1.44,0,0,0-1.17-1.41v1.27Z"
          />
        </clipPath>
        <clipPath id={`${id}-4`}>
          <rect fill="none" x="68.94" y="91.14" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-5`}>
          <rect fill="none" x="68.94" y="95.14" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-7`}>
          <rect fill="none" x="68.94" y="103.14" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-8`}>
          <rect fill="none" x="68.94" y="107.14" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-9`}>
          <rect fill="none" x="64.94" y="91.14" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-10`}>
          <rect fill="none" x="64.94" y="95.14" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-11`}>
          <rect fill="none" x="64.94" y="99.14" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-12`}>
          <rect fill="none" x="64.94" y="103.14" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-13`}>
          <rect fill="none" x="64.94" y="107.14" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-14`}>
          <rect fill="none" x="60.94" y="91.14" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-15`}>
          <rect fill="none" x="60.94" y="95.14" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-16`}>
          <rect fill="none" x="60.94" y="99.14" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-17`}>
          <rect fill="none" x="60.94" y="103.14" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-18`}>
          <rect fill="none" x="60.94" y="107.14" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-19`}>
          <rect fill="none" x="56.94" y="91.14" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-20`}>
          <rect fill="none" x="56.94" y="95.14" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-21`}>
          <rect fill="none" x="56.94" y="99.14" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-22`}>
          <rect fill="none" x="56.94" y="103.14" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-23`}>
          <rect fill="none" x="56.94" y="107.14" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-24`}>
          <path
            fill="none"
            clipRule="evenodd"
            d="M70.24,30h0a1.17,1.17,0,0,1,1.17,1.18V100a1.17,1.17,0,0,1-1.17,1.18h0A1.18,1.18,0,0,1,69.06,100V31.18A1.18,1.18,0,0,1,70.24,30Z"
          />
        </clipPath>
        <clipPath id={`${id}-25`}>
          <rect fill="none" x="68.94" y="27.14" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-26`}>
          <rect fill="none" x="68.94" y="31.14" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-27`}>
          <rect fill="none" x="68.94" y="35.14" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-28`}>
          <rect fill="none" x="68.94" y="39.14" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-29`}>
          <rect fill="none" x="68.94" y="43.14" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-30`}>
          <rect fill="none" x="68.94" y="47.14" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-31`}>
          <rect fill="none" x="68.94" y="51.14" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-32`}>
          <rect fill="none" x="68.94" y="55.14" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-33`}>
          <rect fill="none" x="68.94" y="59.14" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-34`}>
          <rect fill="none" x="68.94" y="63.14" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-35`}>
          <rect fill="none" x="68.94" y="67.14" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-36`}>
          <rect fill="none" x="68.94" y="71.14" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-37`}>
          <rect fill="none" x="68.94" y="75.14" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-38`}>
          <rect fill="none" x="68.94" y="79.14" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-39`}>
          <rect fill="none" x="68.94" y="83.14" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-40`}>
          <rect fill="none" x="68.94" y="87.14" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-44`}>
          <path fill="none" d="M70,100.45" />
        </clipPath>
        <g data-name="Source Colors">
          <g clipPath={`url(#${id})`}>
            <g clipPath={`url(#${id}-2)`}>
              <circle fill="#f17732" cx="71.94" cy="103.14" r="0.35" />
              <circle fill="#f17732" cx="69.94" cy="103.14" r="0.35" />
              <circle fill="#f17732" cx="72.94" cy="101.14" r="0.35" />
              <circle fill="#f17732" cx="70.94" cy="101.14" r="0.35" />
              <circle fill="#f17732" cx="68.94" cy="101.14" r="0.35" />
              <circle fill="#f17732" cx="71.94" cy="99.14" r="0.35" />
              <circle fill="#f17732" cx="69.94" cy="99.14" r="0.35" />
            </g>
          </g>
          <path
            fill="#f17732"
            d="M72.13,94.71H70.07v5.74c0,4.49-2.33,7.32-6.85,7.32s-5.79-4.06-5.79-7.32V99.18a1.45,1.45,0,0,0-.3-.06,1.47,1.47,0,0,0-1.47,1.47.28.28,0,0,0,0,.09,1.34,1.34,0,0,0,0,.2c0,4.06,2.33,9.12,7.94,9.12s8.53-3.53,8.53-9.12Z"
          />
          <g clipPath={`url(#${id}-3)`}>
            <g clipPath={`url(#${id}-4)`}>
              <circle fill="#f17732" cx="71.94" cy="95.14" r="0.35" />
              <circle fill="#f17732" cx="69.94" cy="95.14" r="0.35" />
              <circle fill="#f17732" cx="72.94" cy="93.14" r="0.35" />
              <circle fill="#f17732" cx="70.94" cy="93.14" r="0.35" />
              <circle fill="#f17732" cx="68.94" cy="93.14" r="0.35" />
              <circle fill="#f17732" cx="71.94" cy="91.14" r="0.35" />
              <circle fill="#f17732" cx="69.94" cy="91.14" r="0.35" />
            </g>
            <g clipPath={`url(#${id}-5)`}>
              <circle fill="#f17732" cx="71.94" cy="99.14" r="0.35" />
              <circle fill="#f17732" cx="69.94" cy="99.14" r="0.35" />
              <circle fill="#f17732" cx="72.94" cy="97.14" r="0.35" />
              <circle fill="#f17732" cx="70.94" cy="97.14" r="0.35" />
              <circle fill="#f17732" cx="68.94" cy="97.14" r="0.35" />
              <circle fill="#f17732" cx="71.94" cy="95.14" r="0.35" />
              <circle fill="#f17732" cx="69.94" cy="95.14" r="0.35" />
            </g>
            <g clipPath={`url(#${id}-2)`}>
              <circle fill="#f17732" cx="71.94" cy="103.14" r="0.35" />
              <circle fill="#f17732" cx="69.94" cy="103.14" r="0.35" />
              <circle fill="#f17732" cx="72.94" cy="101.14" r="0.35" />
              <circle fill="#f17732" cx="70.94" cy="101.14" r="0.35" />
              <circle fill="#f17732" cx="68.94" cy="101.14" r="0.35" />
              <circle fill="#f17732" cx="71.94" cy="99.14" r="0.35" />
              <circle fill="#f17732" cx="69.94" cy="99.14" r="0.35" />
            </g>
            <g clipPath={`url(#${id}-7)`}>
              <circle fill="#f17732" cx="71.94" cy="107.14" r="0.35" />
              <circle fill="#f17732" cx="69.94" cy="107.14" r="0.35" />
              <circle fill="#f17732" cx="72.94" cy="105.14" r="0.35" />
              <circle fill="#f17732" cx="70.94" cy="105.14" r="0.35" />
              <circle fill="#f17732" cx="68.94" cy="105.14" r="0.35" />
              <circle fill="#f17732" cx="71.94" cy="103.14" r="0.35" />
              <circle fill="#f17732" cx="69.94" cy="103.14" r="0.35" />
            </g>
            <g clipPath={`url(#${id}-8)`}>
              <circle fill="#f17732" cx="71.94" cy="111.14" r="0.35" />
              <circle fill="#f17732" cx="69.94" cy="111.14" r="0.35" />
              <circle fill="#f17732" cx="72.94" cy="109.14" r="0.35" />
              <circle fill="#f17732" cx="70.94" cy="109.14" r="0.35" />
              <circle fill="#f17732" cx="68.94" cy="109.14" r="0.35" />
              <circle fill="#f17732" cx="71.94" cy="107.14" r="0.35" />
              <circle fill="#f17732" cx="69.94" cy="107.14" r="0.35" />
            </g>
            <g clipPath={`url(#${id}-9)`}>
              <circle fill="#f17732" cx="67.94" cy="95.14" r="0.35" />
              <circle fill="#f17732" cx="65.94" cy="95.14" r="0.35" />
              <circle fill="#f17732" cx="68.94" cy="93.14" r="0.35" />
              <circle fill="#f17732" cx="66.94" cy="93.14" r="0.35" />
              <circle fill="#f17732" cx="64.94" cy="93.14" r="0.35" />
              <circle fill="#f17732" cx="67.94" cy="91.14" r="0.35" />
              <circle fill="#f17732" cx="65.94" cy="91.14" r="0.35" />
            </g>
            <g clipPath={`url(#${id}-10)`}>
              <circle fill="#f17732" cx="67.94" cy="99.14" r="0.35" />
              <circle fill="#f17732" cx="65.94" cy="99.14" r="0.35" />
              <circle fill="#f17732" cx="68.94" cy="97.14" r="0.35" />
              <circle fill="#f17732" cx="66.94" cy="97.14" r="0.35" />
              <circle fill="#f17732" cx="64.94" cy="97.14" r="0.35" />
              <circle fill="#f17732" cx="67.94" cy="95.14" r="0.35" />
              <circle fill="#f17732" cx="65.94" cy="95.14" r="0.35" />
            </g>
            <g clipPath={`url(#${id}-11)`}>
              <circle fill="#f17732" cx="67.94" cy="103.14" r="0.35" />
              <circle fill="#f17732" cx="65.94" cy="103.14" r="0.35" />
              <circle fill="#f17732" cx="68.94" cy="101.14" r="0.35" />
              <circle fill="#f17732" cx="66.94" cy="101.14" r="0.35" />
              <circle fill="#f17732" cx="64.94" cy="101.14" r="0.35" />
              <circle fill="#f17732" cx="67.94" cy="99.14" r="0.35" />
              <circle fill="#f17732" cx="65.94" cy="99.14" r="0.35" />
            </g>
            <g clipPath={`url(#${id}-12)`}>
              <circle fill="#f17732" cx="67.94" cy="107.14" r="0.35" />
              <circle fill="#f17732" cx="65.94" cy="107.14" r="0.35" />
              <circle fill="#f17732" cx="68.94" cy="105.14" r="0.35" />
              <circle fill="#f17732" cx="66.94" cy="105.14" r="0.35" />
              <circle fill="#f17732" cx="64.94" cy="105.14" r="0.35" />
              <circle fill="#f17732" cx="67.94" cy="103.14" r="0.35" />
              <circle fill="#f17732" cx="65.94" cy="103.14" r="0.35" />
            </g>
            <g clipPath={`url(#${id}-13)`}>
              <circle fill="#f17732" cx="67.94" cy="111.14" r="0.35" />
              <circle fill="#f17732" cx="65.94" cy="111.14" r="0.35" />
              <circle fill="#f17732" cx="68.94" cy="109.14" r="0.35" />
              <circle fill="#f17732" cx="66.94" cy="109.14" r="0.35" />
              <circle fill="#f17732" cx="64.94" cy="109.14" r="0.35" />
              <circle fill="#f17732" cx="67.94" cy="107.14" r="0.35" />
              <circle fill="#f17732" cx="65.94" cy="107.14" r="0.35" />
            </g>
            <g clipPath={`url(#${id}-14)`}>
              <circle fill="#f17732" cx="63.94" cy="95.14" r="0.35" />
              <circle fill="#f17732" cx="61.94" cy="95.14" r="0.35" />
              <circle fill="#f17732" cx="64.94" cy="93.14" r="0.35" />
              <circle fill="#f17732" cx="62.94" cy="93.14" r="0.35" />
              <circle fill="#f17732" cx="60.94" cy="93.14" r="0.35" />
              <circle fill="#f17732" cx="63.94" cy="91.14" r="0.35" />
              <circle fill="#f17732" cx="61.94" cy="91.14" r="0.35" />
            </g>
            <g clipPath={`url(#${id}-15)`}>
              <circle fill="#f17732" cx="63.94" cy="99.14" r="0.35" />
              <circle fill="#f17732" cx="61.94" cy="99.14" r="0.35" />
              <circle fill="#f17732" cx="64.94" cy="97.14" r="0.35" />
              <circle fill="#f17732" cx="62.94" cy="97.14" r="0.35" />
              <circle fill="#f17732" cx="60.94" cy="97.14" r="0.35" />
              <circle fill="#f17732" cx="63.94" cy="95.14" r="0.35" />
              <circle fill="#f17732" cx="61.94" cy="95.14" r="0.35" />
            </g>
            <g clipPath={`url(#${id}-16)`}>
              <circle fill="#f17732" cx="63.94" cy="103.14" r="0.35" />
              <circle fill="#f17732" cx="61.94" cy="103.14" r="0.35" />
              <circle fill="#f17732" cx="64.94" cy="101.14" r="0.35" />
              <circle fill="#f17732" cx="62.94" cy="101.14" r="0.35" />
              <circle fill="#f17732" cx="60.94" cy="101.14" r="0.35" />
              <circle fill="#f17732" cx="63.94" cy="99.14" r="0.35" />
              <circle fill="#f17732" cx="61.94" cy="99.14" r="0.35" />
            </g>
            <g clipPath={`url(#${id}-17)`}>
              <circle fill="#f17732" cx="63.94" cy="107.14" r="0.35" />
              <circle fill="#f17732" cx="61.94" cy="107.14" r="0.35" />
              <circle fill="#f17732" cx="64.94" cy="105.14" r="0.35" />
              <circle fill="#f17732" cx="62.94" cy="105.14" r="0.35" />
              <circle fill="#f17732" cx="60.94" cy="105.14" r="0.35" />
              <circle fill="#f17732" cx="63.94" cy="103.14" r="0.35" />
              <circle fill="#f17732" cx="61.94" cy="103.14" r="0.35" />
            </g>
            <g clipPath={`url(#${id}-18)`}>
              <circle fill="#f17732" cx="63.94" cy="111.14" r="0.35" />
              <circle fill="#f17732" cx="61.94" cy="111.14" r="0.35" />
              <circle fill="#f17732" cx="64.94" cy="109.14" r="0.35" />
              <circle fill="#f17732" cx="62.94" cy="109.14" r="0.35" />
              <circle fill="#f17732" cx="60.94" cy="109.14" r="0.35" />
              <circle fill="#f17732" cx="63.94" cy="107.14" r="0.35" />
              <circle fill="#f17732" cx="61.94" cy="107.14" r="0.35" />
            </g>
            <g clipPath={`url(#${id}-19)`}>
              <circle fill="#f17732" cx="59.94" cy="95.14" r="0.35" />
              <circle fill="#f17732" cx="57.94" cy="95.14" r="0.35" />
              <circle fill="#f17732" cx="60.94" cy="93.14" r="0.35" />
              <circle fill="#f17732" cx="58.94" cy="93.14" r="0.35" />
              <circle fill="#f17732" cx="56.94" cy="93.14" r="0.35" />
              <circle fill="#f17732" cx="59.94" cy="91.14" r="0.35" />
              <circle fill="#f17732" cx="57.94" cy="91.14" r="0.35" />
            </g>
            <g clipPath={`url(#${id}-20)`}>
              <circle fill="#f17732" cx="59.94" cy="99.14" r="0.35" />
              <circle fill="#f17732" cx="57.94" cy="99.14" r="0.35" />
              <circle fill="#f17732" cx="60.94" cy="97.14" r="0.35" />
              <circle fill="#f17732" cx="58.94" cy="97.14" r="0.35" />
              <circle fill="#f17732" cx="56.94" cy="97.14" r="0.35" />
              <circle fill="#f17732" cx="59.94" cy="95.14" r="0.35" />
              <circle fill="#f17732" cx="57.94" cy="95.14" r="0.35" />
            </g>
            <g clipPath={`url(#${id}-21)`}>
              <circle fill="#f17732" cx="59.94" cy="103.14" r="0.35" />
              <circle fill="#f17732" cx="57.94" cy="103.14" r="0.35" />
              <circle fill="#f17732" cx="60.94" cy="101.14" r="0.35" />
              <circle fill="#f17732" cx="58.94" cy="101.14" r="0.35" />
              <circle fill="#f17732" cx="56.94" cy="101.14" r="0.35" />
              <circle fill="#f17732" cx="59.94" cy="99.14" r="0.35" />
              <circle fill="#f17732" cx="57.94" cy="99.14" r="0.35" />
            </g>
            <g clipPath={`url(#${id}-22)`}>
              <circle fill="#f17732" cx="59.94" cy="107.14" r="0.35" />
              <circle fill="#f17732" cx="57.94" cy="107.14" r="0.35" />
              <circle fill="#f17732" cx="60.94" cy="105.14" r="0.35" />
              <circle fill="#f17732" cx="58.94" cy="105.14" r="0.35" />
              <circle fill="#f17732" cx="56.94" cy="105.14" r="0.35" />
              <circle fill="#f17732" cx="59.94" cy="103.14" r="0.35" />
              <circle fill="#f17732" cx="57.94" cy="103.14" r="0.35" />
            </g>
            <g clipPath={`url(#${id}-23)`}>
              <circle fill="#f17732" cx="59.94" cy="111.14" r="0.35" />
              <circle fill="#f17732" cx="57.94" cy="111.14" r="0.35" />
              <circle fill="#f17732" cx="60.94" cy="109.14" r="0.35" />
              <circle fill="#f17732" cx="58.94" cy="109.14" r="0.35" />
              <circle fill="#f17732" cx="56.94" cy="109.14" r="0.35" />
              <circle fill="#f17732" cx="59.94" cy="107.14" r="0.35" />
              <circle fill="#f17732" cx="57.94" cy="107.14" r="0.35" />
            </g>
          </g>
          <path
            fill="#10004c"
            d="M103.24,8.38l-1.87,7a.5.5,0,0,1-.48.37.3.3,0,0,1-.13,0,.49.49,0,0,1-.35-.61l1.92-7.16a67.2,67.2,0,0,0-6.74-3.07l-.2.74A.49.49,0,0,1,94.9,6h-.13a.52.52,0,0,1-.35-.62l.23-.85a68.11,68.11,0,0,0-7-2.22L85.33,11a.49.49,0,0,1-.48.37h-.13a.51.51,0,0,1-.36-.62L86.71,2A71.44,71.44,0,0,0,79.51.66l-.17.63a.49.49,0,0,1-.48.37h-.13A.5.5,0,0,1,78.38,1l.13-.5A72.78,72.78,0,0,0,71.08,0l-1.8,6.71a.49.49,0,0,1-.48.37h-.13a.51.51,0,0,1-.35-.62L70.05,0h0A70.14,70.14,0,0,0,53.36,2l-.12.43a.49.49,0,0,1-.48.37h-.13a.5.5,0,0,1-.36-.53,69.45,69.45,0,0,0-7.36,2.38l-.65,2.43a.5.5,0,0,1-.48.37l-.13,0a.5.5,0,0,1-.36-.61l.46-1.71a70,70,0,1,0,59.49,3.27ZM41.5,13.51l.43-1.61a.51.51,0,0,1,.61-.35.5.5,0,0,1,.36.61l-.43,1.61a.51.51,0,0,1-.49.37l-.13,0A.5.5,0,0,1,41.5,13.51ZM35.59,39.44l-2.51,9.35a.49.49,0,0,1-.48.37h-.13a.51.51,0,0,1-.36-.62l2.51-9.35a.5.5,0,0,1,1,.26ZM37.31,33l-.43,1.61a.51.51,0,0,1-.49.37l-.13,0a.5.5,0,0,1-.35-.61l.43-1.61a.5.5,0,0,1,.61-.35A.5.5,0,0,1,37.31,33Zm.88-4.71-.13,0a.5.5,0,0,1-.36-.61l2.51-9.36a.5.5,0,0,1,.61-.35.5.5,0,0,1,.36.61l-2.51,9.35A.5.5,0,0,1,38.19,28.31Zm2.9,19.48-.43,1.61a.5.5,0,0,1-.49.37l-.12,0a.5.5,0,0,1-.36-.61l.43-1.61a.5.5,0,0,1,1,.26Zm3.48-13-2.51,9.35a.5.5,0,0,1-.48.37.27.27,0,0,1-.13,0,.5.5,0,0,1-.36-.61l2.51-9.35a.5.5,0,1,1,1,.26Zm2.11-7.88-.43,1.61a.51.51,0,0,1-.49.37l-.13,0a.5.5,0,0,1-.35-.61l.43-1.6a.51.51,0,0,1,.61-.36A.5.5,0,0,1,46.68,26.93ZM47,23.66a.51.51,0,0,1-.36-.62l2.51-9.35a.5.5,0,0,1,1,.26L47.65,23.3a.49.49,0,0,1-.48.37Zm3.79,19.86-2.51,9.36a.5.5,0,0,1-.48.37l-.13,0a.49.49,0,0,1-.35-.61l2.5-9.35a.52.52,0,0,1,.62-.36A.5.5,0,0,1,50.83,43.52Zm0-36.1.43-1.6a.5.5,0,1,1,1,.26l-.43,1.6a.51.51,0,0,1-.49.37l-.13,0A.5.5,0,0,1,50.87,7.42Zm1.68,29.69-.43,1.6a.5.5,0,0,1-.48.37l-.13,0a.5.5,0,0,1-.36-.61l.43-1.6a.5.5,0,1,1,1,.26Zm6-26.21L61,1.55a.5.5,0,1,1,1,.26L59.5,11.16a.5.5,0,0,1-.48.37.3.3,0,0,1-.13,0A.48.48,0,0,1,58.54,10.9Zm-1.8,6.69.43-1.6a.5.5,0,1,1,1,.26l-.43,1.6a.5.5,0,0,1-.48.37H57.1A.51.51,0,0,1,56.74,17.59Zm-3.31,14.8-.13,0a.49.49,0,0,1-.35-.61l2.5-9.35a.51.51,0,0,1,.61-.36.5.5,0,0,1,.36.61L53.91,32A.5.5,0,0,1,53.43,32.39Zm3.7,19.7L56.7,53.7a.5.5,0,0,1-.48.37l-.13,0a.5.5,0,0,1-.35-.61l.43-1.61a.5.5,0,0,1,.61-.35A.49.49,0,0,1,57.13,52.09Zm3.48-13-2.5,9.35a.51.51,0,0,1-.49.37l-.13,0a.5.5,0,0,1-.35-.61l2.51-9.35a.51.51,0,0,1,.61-.36A.52.52,0,0,1,60.61,39.11Zm2.11-7.88-.43,1.61a.5.5,0,0,1-.48.37l-.13,0a.48.48,0,0,1-.35-.61l.43-1.6a.5.5,0,1,1,1,.25Zm3.48-13L63.69,27.6a.5.5,0,0,1-.48.37.32.32,0,0,1-.13,0,.5.5,0,0,1-.35-.61L65.23,18a.51.51,0,0,1,.62-.35A.5.5,0,0,1,66.2,18.25Zm2.11-7.87L67.88,12a.5.5,0,0,1-.48.37l-.13,0a.5.5,0,0,1-.36-.61l.43-1.6A.52.52,0,0,1,68,9.76.51.51,0,0,1,68.31,10.38ZM72.46,27,70,36.32a.5.5,0,0,1-.49.37l-.13,0a.5.5,0,0,1-.35-.61l2.51-9.35a.51.51,0,0,1,.61-.36A.5.5,0,0,1,72.46,27Zm1.72-6.42-.43,1.6a.5.5,0,0,1-.48.37h-.13a.51.51,0,0,1-.35-.62l.43-1.6a.5.5,0,1,1,1,.26Zm.88-4.72-.13,0a.5.5,0,0,1-.35-.61l2.51-9.35a.51.51,0,0,1,.61-.36.52.52,0,0,1,.35.62l-2.5,9.35A.51.51,0,0,1,75.06,15.83Zm3.71,19.7-.43,1.61a.51.51,0,0,1-.49.37l-.13,0a.5.5,0,0,1-.35-.61l.43-1.61a.5.5,0,0,1,1,.26Zm3.48-13L79.74,31.9a.5.5,0,0,1-.48.37.27.27,0,0,1-.13,0,.5.5,0,0,1-.36-.61l2.51-9.35a.5.5,0,1,1,1,.26Zm2.11-7.88-.44,1.61a.5.5,0,0,1-.48.37l-.13,0A.5.5,0,0,1,83,16l.43-1.61a.51.51,0,0,1,.61-.35A.5.5,0,0,1,84.36,14.67Zm4.15,16.59L86,40.62a.5.5,0,0,1-.48.37l-.13,0a.48.48,0,0,1-.35-.61L87.54,31a.51.51,0,0,1,.61-.36A.5.5,0,0,1,88.51,31.26Zm1.72-6.41-.43,1.6a.5.5,0,0,1-.48.37.27.27,0,0,1-.13,0,.5.5,0,0,1-.36-.61l.43-1.6a.5.5,0,1,1,1,.26Zm.88-4.72-.13,0a.48.48,0,0,1-.35-.61l2.5-9.35a.51.51,0,0,1,.61-.36.5.5,0,0,1,.36.61l-2.51,9.36A.5.5,0,0,1,91.11,20.13Zm3.7,19.7-.43,1.61a.5.5,0,0,1-.48.37l-.13,0a.49.49,0,0,1-.35-.61l.42-1.61a.52.52,0,0,1,.62-.35A.5.5,0,0,1,94.81,39.83Zm3.48-13L95.78,36.2a.5.5,0,0,1-.48.37l-.13,0a.49.49,0,0,1-.35-.61l2.5-9.35a.52.52,0,0,1,.62-.36A.52.52,0,0,1,98.29,26.85ZM100.4,19,100,20.58a.5.5,0,0,1-.48.37l-.13,0a.5.5,0,0,1-.36-.61l.43-1.61a.52.52,0,0,1,.62-.35A.5.5,0,0,1,100.4,19Zm5,16.81-2.51,9.35a.5.5,0,0,1-.48.37.27.27,0,0,1-.13,0,.5.5,0,0,1-.36-.61l2.51-9.35a.5.5,0,0,1,1,.26Zm1.71-6.42-.42,1.6a.51.51,0,0,1-.49.38l-.13,0a.5.5,0,0,1-.35-.61l.43-1.61a.5.5,0,0,1,.61-.35A.48.48,0,0,1,107.07,29.36Zm3.87-14.44-2.5,9.35a.49.49,0,0,1-.48.37h-.13a.51.51,0,0,1-.36-.62L110,14.66a.5.5,0,0,1,.61-.35A.48.48,0,0,1,110.94,14.92Z"
          />
          <path
            fill="#f8f7f4"
            d="M93.74,9.79a.51.51,0,0,0-.61.36l-2.5,9.35a.48.48,0,0,0,.35.61l.13,0a.5.5,0,0,0,.48-.37L94.1,10.4A.5.5,0,0,0,93.74,9.79Z"
          />
          <path
            fill="#f8f7f4"
            d="M110.59,14.31a.5.5,0,0,0-.61.35L107.47,24a.51.51,0,0,0,.36.62H108a.49.49,0,0,0,.48-.37l2.5-9.35A.48.48,0,0,0,110.59,14.31Z"
          />
          <path
            fill="#f8f7f4"
            d="M77.7,5.49a.51.51,0,0,0-.61.36L74.58,15.2a.5.5,0,0,0,.35.61l.13,0a.51.51,0,0,0,.49-.37l2.5-9.35A.52.52,0,0,0,77.7,5.49Z"
          />
          <path
            fill="#f8f7f4"
            d="M58.89,11.51a.3.3,0,0,0,.13,0,.5.5,0,0,0,.48-.37L62,1.81a.5.5,0,1,0-1-.26l-2.5,9.35A.48.48,0,0,0,58.89,11.51Z"
          />
          <path
            fill="#f8f7f4"
            d="M43.65,7.43l.13,0a.5.5,0,0,0,.48-.37l.65-2.43-1.16.46-.46,1.71A.5.5,0,0,0,43.65,7.43Z"
          />
          <path
            fill="#f8f7f4"
            d="M84.72,11.4h.13a.49.49,0,0,0,.48-.37l2.35-8.78c-.32-.09-.65-.16-1-.24l-2.35,8.76A.51.51,0,0,0,84.72,11.4Z"
          />
          <path
            fill="#f8f7f4"
            d="M100.76,15.69a.3.3,0,0,0,.13,0,.5.5,0,0,0,.48-.37l1.87-7-.91-.46-1.92,7.16A.49.49,0,0,0,100.76,15.69Z"
          />
          <path
            fill="#f8f7f4"
            d="M68.67,7.1h.13a.49.49,0,0,0,.48-.37L71.08,0c-.34,0-.68,0-1,0L68.32,6.48A.51.51,0,0,0,68.67,7.1Z"
          />
          <path
            fill="#f8f7f4"
            d="M52.63,2.8h.13a.49.49,0,0,0,.48-.37L53.36,2l-1.09.26A.5.5,0,0,0,52.63,2.8Z"
          />
          <path
            fill="#f8f7f4"
            d="M84,14.06a.51.51,0,0,0-.61.35L83,16a.5.5,0,0,0,.35.61l.13,0a.5.5,0,0,0,.48-.37l.44-1.61A.5.5,0,0,0,84,14.06Z"
          />
          <path
            fill="#f8f7f4"
            d="M100.05,18.36a.52.52,0,0,0-.62.35L99,20.32a.5.5,0,0,0,.36.61l.13,0a.5.5,0,0,0,.48-.37L100.4,19A.5.5,0,0,0,100.05,18.36Z"
          />
          <path
            fill="#f8f7f4"
            d="M68,9.76a.52.52,0,0,0-.62.36l-.43,1.6a.5.5,0,0,0,.36.61l.13,0a.5.5,0,0,0,.48-.37l.43-1.6A.51.51,0,0,0,68,9.76Z"
          />
          <path
            fill="#f8f7f4"
            d="M51.35,8.05a.51.51,0,0,0,.49-.37l.43-1.6a.5.5,0,1,0-1-.26l-.43,1.6a.5.5,0,0,0,.35.61Z"
          />
          <path
            fill="#f8f7f4"
            d="M78.73,1.65h.13a.49.49,0,0,0,.48-.37l.17-.63-1-.13-.13.5A.5.5,0,0,0,78.73,1.65Z"
          />
          <path
            fill="#f8f7f4"
            d="M94.77,6h.13a.49.49,0,0,0,.49-.37l.2-.74-.94-.37-.23.85A.52.52,0,0,0,94.77,6Z"
          />
          <path
            fill="#f8f7f4"
            d="M88.15,30.65a.51.51,0,0,0-.61.36L85,40.36a.48.48,0,0,0,.35.61l.13,0a.5.5,0,0,0,.48-.37l2.51-9.36A.5.5,0,0,0,88.15,30.65Z"
          />
          <path
            fill="#f8f7f4"
            d="M105,35.17a.5.5,0,0,0-.61.35l-2.51,9.35a.5.5,0,0,0,.36.61.27.27,0,0,0,.13,0,.5.5,0,0,0,.48-.37l2.51-9.35A.5.5,0,0,0,105,35.17Z"
          />
          <path
            fill="#f8f7f4"
            d="M72.11,26.35a.51.51,0,0,0-.61.36L69,36.06a.5.5,0,0,0,.35.61l.13,0a.5.5,0,0,0,.49-.37L72.46,27A.5.5,0,0,0,72.11,26.35Z"
          />
          <path
            fill="#f8f7f4"
            d="M81.89,21.93a.51.51,0,0,0-.61.36l-2.51,9.35a.5.5,0,0,0,.36.61.27.27,0,0,0,.13,0,.5.5,0,0,0,.48-.37l2.51-9.35A.51.51,0,0,0,81.89,21.93Z"
          />
          <path
            fill="#f8f7f4"
            d="M97.94,26.23a.52.52,0,0,0-.62.36l-2.5,9.35a.49.49,0,0,0,.35.61l.13,0a.5.5,0,0,0,.48-.37l2.51-9.35A.52.52,0,0,0,97.94,26.23Z"
          />
          <path
            fill="#f8f7f4"
            d="M78.41,34.92a.5.5,0,0,0-.61.35l-.43,1.61a.5.5,0,0,0,.35.61l.13,0a.51.51,0,0,0,.49-.37l.43-1.61A.5.5,0,0,0,78.41,34.92Z"
          />
          <path
            fill="#f8f7f4"
            d="M94.46,39.22a.52.52,0,0,0-.62.35l-.42,1.61a.49.49,0,0,0,.35.61l.13,0a.5.5,0,0,0,.48-.37l.43-1.61A.5.5,0,0,0,94.46,39.22Z"
          />
          <path
            fill="#f8f7f4"
            d="M73.83,19.93a.51.51,0,0,0-.61.36l-.43,1.6a.51.51,0,0,0,.35.62h.13a.5.5,0,0,0,.48-.37l.43-1.6A.51.51,0,0,0,73.83,19.93Z"
          />
          <path
            fill="#f8f7f4"
            d="M89.87,24.23a.51.51,0,0,0-.61.36l-.43,1.6a.5.5,0,0,0,.36.61.27.27,0,0,0,.13,0,.5.5,0,0,0,.48-.37l.43-1.6A.51.51,0,0,0,89.87,24.23Z"
          />
          <path
            fill="#f8f7f4"
            d="M106.72,28.75a.5.5,0,0,0-.61.35l-.43,1.61a.5.5,0,0,0,.35.61l.13,0a.51.51,0,0,0,.49-.38l.42-1.6A.48.48,0,0,0,106.72,28.75Z"
          />
          <path
            fill="#f8f7f4"
            d="M56.06,22.05a.51.51,0,0,0-.61.36L53,31.76a.49.49,0,0,0,.35.61l.13,0a.5.5,0,0,0,.48-.37l2.51-9.36A.5.5,0,0,0,56.06,22.05Z"
          />
          <path
            fill="#f8f7f4"
            d="M40.82,18a.5.5,0,0,0-.61.35L37.7,27.68a.5.5,0,0,0,.36.61l.13,0a.5.5,0,0,0,.48-.38l2.51-9.35A.5.5,0,0,0,40.82,18Z"
          />
          <path
            fill="#f8f7f4"
            d="M65.85,17.64a.51.51,0,0,0-.62.35l-2.5,9.35a.5.5,0,0,0,.35.61.32.32,0,0,0,.13,0,.5.5,0,0,0,.48-.37l2.51-9.35A.5.5,0,0,0,65.85,17.64Z"
          />
          <path
            fill="#f8f7f4"
            d="M47.65,23.3,50.16,14a.5.5,0,0,0-1-.26L46.68,23a.51.51,0,0,0,.36.62h.13A.49.49,0,0,0,47.65,23.3Z"
          />
          <path
            fill="#f8f7f4"
            d="M62.37,30.62a.51.51,0,0,0-.61.36l-.43,1.6a.48.48,0,0,0,.35.61l.13,0a.5.5,0,0,0,.48-.37l.43-1.61A.5.5,0,0,0,62.37,30.62Z"
          />
          <path
            fill="#f8f7f4"
            d="M46.32,26.32a.51.51,0,0,0-.61.36l-.43,1.6a.5.5,0,0,0,.35.61l.13,0a.51.51,0,0,0,.49-.37l.43-1.61A.5.5,0,0,0,46.32,26.32Z"
          />
          <path
            fill="#f8f7f4"
            d="M57.1,18.21h.13a.5.5,0,0,0,.48-.37l.43-1.6a.5.5,0,1,0-1-.26l-.43,1.6A.51.51,0,0,0,57.1,18.21Z"
          />
          <path
            fill="#f8f7f4"
            d="M41.85,14.12l.13,0a.51.51,0,0,0,.49-.37l.43-1.61a.5.5,0,0,0-.36-.61.51.51,0,0,0-.61.35l-.43,1.61A.5.5,0,0,0,41.85,14.12Z"
          />
          <path
            fill="#f8f7f4"
            d="M50.48,42.91a.52.52,0,0,0-.62.36l-2.5,9.35a.49.49,0,0,0,.35.61l.13,0a.5.5,0,0,0,.48-.37l2.51-9.36A.5.5,0,0,0,50.48,42.91Z"
          />
          <path
            fill="#f8f7f4"
            d="M35.23,38.83a.5.5,0,0,0-.61.35l-2.51,9.35a.51.51,0,0,0,.36.62h.13a.49.49,0,0,0,.48-.37l2.51-9.35A.5.5,0,0,0,35.23,38.83Z"
          />
          <path
            fill="#f8f7f4"
            d="M60.26,38.49a.51.51,0,0,0-.61.36L57.14,48.2a.5.5,0,0,0,.35.61l.13,0a.51.51,0,0,0,.49-.37l2.5-9.35A.52.52,0,0,0,60.26,38.49Z"
          />
          <path
            fill="#f8f7f4"
            d="M44.21,34.19a.51.51,0,0,0-.61.36L41.09,43.9a.5.5,0,0,0,.36.61.27.27,0,0,0,.13,0,.5.5,0,0,0,.48-.37l2.51-9.35A.51.51,0,0,0,44.21,34.19Z"
          />
          <path
            fill="#f8f7f4"
            d="M56.78,51.48a.5.5,0,0,0-.61.35l-.43,1.61a.5.5,0,0,0,.35.61l.13,0a.5.5,0,0,0,.48-.37l.43-1.61A.49.49,0,0,0,56.78,51.48Z"
          />
          <path
            fill="#f8f7f4"
            d="M40.73,47.18a.5.5,0,0,0-.61.35l-.43,1.61a.5.5,0,0,0,.36.61l.12,0a.5.5,0,0,0,.49-.37l.43-1.61A.5.5,0,0,0,40.73,47.18Z"
          />
          <path
            fill="#f8f7f4"
            d="M52.2,36.49a.52.52,0,0,0-.62.36l-.43,1.6a.5.5,0,0,0,.36.61l.13,0a.5.5,0,0,0,.48-.37l.43-1.6A.52.52,0,0,0,52.2,36.49Z"
          />
          <path
            fill="#f8f7f4"
            d="M37,32.41a.5.5,0,0,0-.61.35l-.43,1.61a.5.5,0,0,0,.35.61l.13,0a.51.51,0,0,0,.49-.37L37.31,33A.5.5,0,0,0,37,32.41Z"
          />
          <path
            fill="#f8f7f4"
            d="M106.12,46.09A.38.38,0,0,1,106,46a.5.5,0,0,1,.1-.7l1.33-1a.52.52,0,0,1,.7.1.5.5,0,0,1-.1.7l-1.33,1A.5.5,0,0,1,106.12,46.09Z"
          />
          <circle fill="#f8f7f4" cx="109.19" cy="43.49" r="0.5" />
          <circle fill="#f8f7f4" cx="108.26" cy="47.17" r="0.5" />
          <path
            fill="#f8f7f4"
            d="M30,49.92a.2.2,0,0,0,.09-.09.5.5,0,0,0-.1-.7l-1.33-1a.5.5,0,0,0-.7.1.51.51,0,0,0,.1.7l1.33,1A.5.5,0,0,0,30,49.92Z"
          />
          <circle fill="#f8f7f4" cx="26.88" cy="47.33" r="0.5" />
          <circle fill="#f8f7f4" cx="27.81" cy="51" r="0.5" />
          <g>
            <path
              fill="#f8f7f4"
              fillRule="evenodd"
              d="M70.24,30h0a1.17,1.17,0,0,1,1.17,1.18V100a1.17,1.17,0,0,1-1.17,1.18h0A1.18,1.18,0,0,1,69.06,100V31.18A1.18,1.18,0,0,1,70.24,30Z"
            />
          </g>
          <g data-name="path-1">
            <g clipPath={`url(#${id}-24)`}>
              <g clipPath={`url(#${id}-25)`}>
                <circle fill="#fde5cb" cx="71.94" cy="31.14" r="0.35" />
                <circle fill="#fde5cb" cx="69.94" cy="31.14" r="0.35" />
                <circle fill="#fde5cb" cx="72.94" cy="29.14" r="0.35" />
                <circle fill="#fde5cb" cx="70.94" cy="29.14" r="0.35" />
                <circle fill="#fde5cb" cx="68.94" cy="29.14" r="0.35" />
                <circle fill="#fde5cb" cx="71.94" cy="27.14" r="0.35" />
                <circle fill="#fde5cb" cx="69.94" cy="27.14" r="0.35" />
              </g>
              <g clipPath={`url(#${id}-26)`}>
                <circle fill="#fde5cb" cx="71.94" cy="35.14" r="0.35" />
                <circle fill="#fde5cb" cx="69.94" cy="35.14" r="0.35" />
                <circle fill="#fde5cb" cx="72.94" cy="33.14" r="0.35" />
                <circle fill="#fde5cb" cx="70.94" cy="33.14" r="0.35" />
                <circle fill="#fde5cb" cx="68.94" cy="33.14" r="0.35" />
                <circle fill="#fde5cb" cx="71.94" cy="31.14" r="0.35" />
                <circle fill="#fde5cb" cx="69.94" cy="31.14" r="0.35" />
              </g>
              <g clipPath={`url(#${id}-27)`}>
                <circle fill="#fde5cb" cx="71.94" cy="39.14" r="0.35" />
                <circle fill="#fde5cb" cx="69.94" cy="39.14" r="0.35" />
                <circle fill="#fde5cb" cx="72.94" cy="37.14" r="0.35" />
                <circle fill="#fde5cb" cx="70.94" cy="37.14" r="0.35" />
                <circle fill="#fde5cb" cx="68.94" cy="37.14" r="0.35" />
                <circle fill="#fde5cb" cx="71.94" cy="35.14" r="0.35" />
                <circle fill="#fde5cb" cx="69.94" cy="35.14" r="0.35" />
              </g>
              <g clipPath={`url(#${id}-28)`}>
                <circle fill="#fde5cb" cx="71.94" cy="43.14" r="0.35" />
                <circle fill="#fde5cb" cx="69.94" cy="43.14" r="0.35" />
                <circle fill="#fde5cb" cx="72.94" cy="41.14" r="0.35" />
                <circle fill="#fde5cb" cx="70.94" cy="41.14" r="0.35" />
                <circle fill="#fde5cb" cx="68.94" cy="41.14" r="0.35" />
                <circle fill="#fde5cb" cx="71.94" cy="39.14" r="0.35" />
                <circle fill="#fde5cb" cx="69.94" cy="39.14" r="0.35" />
              </g>
              <g clipPath={`url(#${id}-29)`}>
                <circle fill="#fde5cb" cx="71.94" cy="47.14" r="0.35" />
                <circle fill="#fde5cb" cx="69.94" cy="47.14" r="0.35" />
                <circle fill="#fde5cb" cx="72.94" cy="45.14" r="0.35" />
                <circle fill="#fde5cb" cx="70.94" cy="45.14" r="0.35" />
                <circle fill="#fde5cb" cx="68.94" cy="45.14" r="0.35" />
                <circle fill="#fde5cb" cx="71.94" cy="43.14" r="0.35" />
                <circle fill="#fde5cb" cx="69.94" cy="43.14" r="0.35" />
              </g>
              <g clipPath={`url(#${id}-30)`}>
                <circle fill="#fde5cb" cx="71.94" cy="51.14" r="0.35" />
                <circle fill="#fde5cb" cx="69.94" cy="51.14" r="0.35" />
                <circle fill="#fde5cb" cx="72.94" cy="49.14" r="0.35" />
                <circle fill="#fde5cb" cx="70.94" cy="49.14" r="0.35" />
                <circle fill="#fde5cb" cx="68.94" cy="49.14" r="0.35" />
                <circle fill="#fde5cb" cx="71.94" cy="47.14" r="0.35" />
                <circle fill="#fde5cb" cx="69.94" cy="47.14" r="0.35" />
              </g>
              <g clipPath={`url(#${id}-31)`}>
                <circle fill="#fde5cb" cx="71.94" cy="55.14" r="0.35" />
                <circle fill="#fde5cb" cx="69.94" cy="55.14" r="0.35" />
                <circle fill="#fde5cb" cx="72.94" cy="53.14" r="0.35" />
                <circle fill="#fde5cb" cx="70.94" cy="53.14" r="0.35" />
                <circle fill="#fde5cb" cx="68.94" cy="53.14" r="0.35" />
                <circle fill="#fde5cb" cx="71.94" cy="51.14" r="0.35" />
                <circle fill="#fde5cb" cx="69.94" cy="51.14" r="0.35" />
              </g>
              <g clipPath={`url(#${id}-32)`}>
                <circle fill="#fde5cb" cx="71.94" cy="59.14" r="0.35" />
                <circle fill="#fde5cb" cx="69.94" cy="59.14" r="0.35" />
                <circle fill="#fde5cb" cx="72.94" cy="57.14" r="0.35" />
                <circle fill="#fde5cb" cx="70.94" cy="57.14" r="0.35" />
                <circle fill="#fde5cb" cx="68.94" cy="57.14" r="0.35" />
                <circle fill="#fde5cb" cx="71.94" cy="55.14" r="0.35" />
                <circle fill="#fde5cb" cx="69.94" cy="55.14" r="0.35" />
              </g>
              <g clipPath={`url(#${id}-33)`}>
                <circle fill="#fde5cb" cx="71.94" cy="63.14" r="0.35" />
                <circle fill="#fde5cb" cx="69.94" cy="63.14" r="0.35" />
                <circle fill="#fde5cb" cx="72.94" cy="61.14" r="0.35" />
                <circle fill="#fde5cb" cx="70.94" cy="61.14" r="0.35" />
                <circle fill="#fde5cb" cx="68.94" cy="61.14" r="0.35" />
                <circle fill="#fde5cb" cx="71.94" cy="59.14" r="0.35" />
                <circle fill="#fde5cb" cx="69.94" cy="59.14" r="0.35" />
              </g>
              <g clipPath={`url(#${id}-34)`}>
                <circle fill="#fde5cb" cx="71.94" cy="67.14" r="0.35" />
                <circle fill="#fde5cb" cx="69.94" cy="67.14" r="0.35" />
                <circle fill="#fde5cb" cx="72.94" cy="65.14" r="0.35" />
                <circle fill="#fde5cb" cx="70.94" cy="65.14" r="0.35" />
                <circle fill="#fde5cb" cx="68.94" cy="65.14" r="0.35" />
                <circle fill="#fde5cb" cx="71.94" cy="63.14" r="0.35" />
                <circle fill="#fde5cb" cx="69.94" cy="63.14" r="0.35" />
              </g>
              <g clipPath={`url(#${id}-35)`}>
                <circle fill="#fde5cb" cx="71.94" cy="71.14" r="0.35" />
                <circle fill="#fde5cb" cx="69.94" cy="71.14" r="0.35" />
                <circle fill="#fde5cb" cx="72.94" cy="69.14" r="0.35" />
                <circle fill="#fde5cb" cx="70.94" cy="69.14" r="0.35" />
                <circle fill="#fde5cb" cx="68.94" cy="69.14" r="0.35" />
                <circle fill="#fde5cb" cx="71.94" cy="67.14" r="0.35" />
                <circle fill="#fde5cb" cx="69.94" cy="67.14" r="0.35" />
              </g>
              <g clipPath={`url(#${id}-36)`}>
                <circle fill="#fde5cb" cx="71.94" cy="75.14" r="0.35" />
                <circle fill="#fde5cb" cx="69.94" cy="75.14" r="0.35" />
                <circle fill="#fde5cb" cx="72.94" cy="73.14" r="0.35" />
                <circle fill="#fde5cb" cx="70.94" cy="73.14" r="0.35" />
                <circle fill="#fde5cb" cx="68.94" cy="73.14" r="0.35" />
                <circle fill="#fde5cb" cx="71.94" cy="71.14" r="0.35" />
                <circle fill="#fde5cb" cx="69.94" cy="71.14" r="0.35" />
              </g>
              <g clipPath={`url(#${id}-37)`}>
                <circle fill="#fde5cb" cx="71.94" cy="79.14" r="0.35" />
                <circle fill="#fde5cb" cx="69.94" cy="79.14" r="0.35" />
                <circle fill="#fde5cb" cx="72.94" cy="77.14" r="0.35" />
                <circle fill="#fde5cb" cx="70.94" cy="77.14" r="0.35" />
                <circle fill="#fde5cb" cx="68.94" cy="77.14" r="0.35" />
                <circle fill="#fde5cb" cx="71.94" cy="75.14" r="0.35" />
                <circle fill="#fde5cb" cx="69.94" cy="75.14" r="0.35" />
              </g>
              <g clipPath={`url(#${id}-38)`}>
                <circle fill="#fde5cb" cx="71.94" cy="83.14" r="0.35" />
                <circle fill="#fde5cb" cx="69.94" cy="83.14" r="0.35" />
                <circle fill="#fde5cb" cx="72.94" cy="81.14" r="0.35" />
                <circle fill="#fde5cb" cx="70.94" cy="81.14" r="0.35" />
                <circle fill="#fde5cb" cx="68.94" cy="81.14" r="0.35" />
                <circle fill="#fde5cb" cx="71.94" cy="79.14" r="0.35" />
                <circle fill="#fde5cb" cx="69.94" cy="79.14" r="0.35" />
              </g>
              <g clipPath={`url(#${id}-39)`}>
                <circle fill="#fde5cb" cx="71.94" cy="87.14" r="0.35" />
                <circle fill="#fde5cb" cx="69.94" cy="87.14" r="0.35" />
                <circle fill="#fde5cb" cx="72.94" cy="85.14" r="0.35" />
                <circle fill="#fde5cb" cx="70.94" cy="85.14" r="0.35" />
                <circle fill="#fde5cb" cx="68.94" cy="85.14" r="0.35" />
                <circle fill="#fde5cb" cx="71.94" cy="83.14" r="0.35" />
                <circle fill="#fde5cb" cx="69.94" cy="83.14" r="0.35" />
              </g>
              <g clipPath={`url(#${id}-40)`}>
                <circle fill="#fde5cb" cx="71.94" cy="91.14" r="0.35" />
                <circle fill="#fde5cb" cx="69.94" cy="91.14" r="0.35" />
                <circle fill="#fde5cb" cx="72.94" cy="89.14" r="0.35" />
                <circle fill="#fde5cb" cx="70.94" cy="89.14" r="0.35" />
                <circle fill="#fde5cb" cx="68.94" cy="89.14" r="0.35" />
                <circle fill="#fde5cb" cx="71.94" cy="87.14" r="0.35" />
                <circle fill="#fde5cb" cx="69.94" cy="87.14" r="0.35" />
              </g>
              <g clipPath={`url(#${id}-4)`}>
                <circle fill="#fde5cb" cx="71.94" cy="95.14" r="0.35" />
                <circle fill="#fde5cb" cx="69.94" cy="95.14" r="0.35" />
                <circle fill="#fde5cb" cx="72.94" cy="93.14" r="0.35" />
                <circle fill="#fde5cb" cx="70.94" cy="93.14" r="0.35" />
                <circle fill="#fde5cb" cx="68.94" cy="93.14" r="0.35" />
                <circle fill="#fde5cb" cx="71.94" cy="91.14" r="0.35" />
                <circle fill="#fde5cb" cx="69.94" cy="91.14" r="0.35" />
              </g>
              <g clipPath={`url(#${id}-5)`}>
                <circle fill="#fde5cb" cx="71.94" cy="99.14" r="0.35" />
                <circle fill="#fde5cb" cx="69.94" cy="99.14" r="0.35" />
                <circle fill="#fde5cb" cx="72.94" cy="97.14" r="0.35" />
                <circle fill="#fde5cb" cx="70.94" cy="97.14" r="0.35" />
                <circle fill="#fde5cb" cx="68.94" cy="97.14" r="0.35" />
                <circle fill="#fde5cb" cx="71.94" cy="95.14" r="0.35" />
                <circle fill="#fde5cb" cx="69.94" cy="95.14" r="0.35" />
              </g>
              <g clipPath={`url(#${id}-2)`}>
                <circle fill="#fde5cb" cx="71.94" cy="103.14" r="0.35" />
                <circle fill="#fde5cb" cx="69.94" cy="103.14" r="0.35" />
                <circle fill="#fde5cb" cx="72.94" cy="101.14" r="0.35" />
                <circle fill="#fde5cb" cx="70.94" cy="101.14" r="0.35" />
                <circle fill="#fde5cb" cx="68.94" cy="101.14" r="0.35" />
                <circle fill="#fde5cb" cx="71.94" cy="99.14" r="0.35" />
                <circle fill="#fde5cb" cx="69.94" cy="99.14" r="0.35" />
              </g>
            </g>
          </g>
          <g clipPath={`url(#${id}-44)`}>
            <g clipPath={`url(#${id}-2)`}>
              <circle fill="#f17732" cx="71.94" cy="103.14" r="0.35" />
              <circle fill="#f17732" cx="69.94" cy="103.14" r="0.35" />
              <circle fill="#f17732" cx="72.94" cy="101.14" r="0.35" />
              <circle fill="#f17732" cx="70.94" cy="101.14" r="0.35" />
              <circle fill="#f17732" cx="68.94" cy="101.14" r="0.35" />
              <circle fill="#f17732" cx="71.94" cy="99.14" r="0.35" />
              <circle fill="#f17732" cx="69.94" cy="99.14" r="0.35" />
            </g>
          </g>
          <path
            fill="#2870b5"
            d="M72,94.71H69.94v5.74c0,4.49-2.34,7.32-6.85,7.32s-5.79-4.06-5.79-7.32v-.24c0-.14,0-.4,0-.7v-.33a1.45,1.45,0,0,0-.3-.06,1.47,1.47,0,0,0-1.47,1.47v.29c0,4.06,2.32,9.12,7.94,9.12S72,106.47,72,100.88Z"
          />
          <path fill="#6f6693" d="M57.3,99.18h0v0Z" />
          <g opacity="0.2">
            <path fill="#fff" d="M57.3,99v.16h0Z" />
          </g>
          <path fill="#6f6693" d="M57.3,99.49v-.31h0v.31Z" />
          <g opacity="0.2">
            <path fill="#fff" d="M57.3,99.49v-.31h0v.31Z" />
          </g>
          <path
            fill="#6f6693"
            d="M57.3,100.21v-.7C57.29,99.81,57.3,100.07,57.3,100.21Z"
          />
          <g opacity="0.2">
            <path
              fill="#fff"
              d="M57.3,100.21v-.7C57.29,99.81,57.3,100.07,57.3,100.21Z"
            />
          </g>
          <path
            fill="#6f6693"
            d="M57.3,100.45c0,3.26,1.27,7.32,5.79,7.32s6.85-2.83,6.85-7.32V94.71H68.46c0,.09,0,6.07,0,6.17,0,3.83-1.91,5.59-5,5.59s-5-2.5-5-5.59v-.29a1.45,1.45,0,0,0-1.17-1.41v1.27Z"
          />
          <path
            fill="#5fcbeb"
            d="M57.3,100.45c0,3.26,1.27,7.32,5.79,7.32s6.85-2.83,6.85-7.32V94.71H68.46c0,.09,0,6.07,0,6.17,0,3.83-1.91,5.59-5,5.59s-5-2.5-5-5.59v-.29a1.45,1.45,0,0,0-1.17-1.41v1.27Z"
          />
          <path
            fill="#feca1e"
            d="M69.94,34.12c-25.08,0-45.87,15.57-49.67,35.93,9.63-1.73,20.94-1,32.39,2.6l.6-.23C54.12,50.91,61.26,34.12,69.94,34.12Z"
          />
          <path
            fill="#feca1e"
            d="M69.94,34.12c8.68,0,15.82,16.78,16.68,38.29l.1,0C98.43,68.9,110,68.3,119.66,70.28,116,49.81,95.12,34.12,69.94,34.12Z"
          />
          <path
            fill="#f17732"
            d="M69.94,34.12c-8.68,0-15.82,16.79-16.68,38.3a45.64,45.64,0,0,1,16.68-3,45.56,45.56,0,0,1,16.68,3C85.76,50.9,78.62,34.12,69.94,34.12Z"
          />
        </g>
      </svg>
    );
  } else if (color) {
    return (
      <svg
        {...elementProps}
        viewBox="0 0 140 140"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        aria-labelledby={`${id}-title ${id}-description`}
        data-testid="color"
      >
        <title id={`${id}-title`}>Umbrella Circle Illustration</title>
        <desc id={`${id}-description`}>Colored umbrella illustration</desc>
        <clipPath id={`${id}`}>
          <path
            fill="none"
            clipRule="evenodd"
            d="M70.24,30.11h0a1.17,1.17,0,0,1,1.17,1.17v68.83a1.17,1.17,0,0,1-1.17,1.17h0a1.17,1.17,0,0,1-1.18-1.17V31.28A1.17,1.17,0,0,1,70.24,30.11Z"
          />
        </clipPath>
        <clipPath id={`${id}-2`}>
          <rect fill="none" x="68.94" y="28.81" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-3`}>
          <rect fill="none" x="68.94" y="32.81" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-4`}>
          <rect fill="none" x="68.94" y="36.81" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-5`}>
          <rect fill="none" x="68.94" y="40.81" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-6`}>
          <rect fill="none" x="68.94" y="44.81" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-7`}>
          <rect fill="none" x="68.94" y="48.81" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-8`}>
          <rect fill="none" x="68.94" y="52.81" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-9`}>
          <rect fill="none" x="68.94" y="56.81" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-10`}>
          <rect fill="none" x="68.94" y="60.81" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-11`}>
          <rect fill="none" x="68.94" y="64.81" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-12`}>
          <rect fill="none" x="68.94" y="68.81" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-13`}>
          <rect fill="none" x="68.94" y="72.81" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-14`}>
          <rect fill="none" x="68.94" y="76.81" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-15`}>
          <rect fill="none" x="68.94" y="80.81" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-16`}>
          <rect fill="none" x="68.94" y="84.81" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-17`}>
          <rect fill="none" x="68.94" y="88.81" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-18`}>
          <rect fill="none" x="68.94" y="92.81" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-19`}>
          <rect fill="none" x="68.94" y="96.81" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-20`}>
          <rect fill="none" x="68.94" y="100.81" width="4" height="4" />
        </clipPath>
        <clipPath id={`${id}-21`}>
          <path fill="none" d="M70,100.55" />
        </clipPath>
        <circle fill="#10004c" cx="70.03" cy="70.11" r="70" />
        <g>
          <path
            fill="#f8f7f4"
            fillRule="evenodd"
            d="M70.24,30.11h0a1.17,1.17,0,0,1,1.17,1.17v68.83a1.17,1.17,0,0,1-1.17,1.17h0a1.17,1.17,0,0,1-1.18-1.17V31.28A1.17,1.17,0,0,1,70.24,30.11Z"
          />
        </g>
        <g data-name="path-1">
          <g clipPath={`url(#${id})`}>
            <g clipPath={`url(#${id}-2)`}>
              <circle fill="#fde5cb" cx="71.94" cy="32.81" r="0.35" />
              <circle fill="#fde5cb" cx="69.94" cy="32.81" r="0.35" />
              <circle fill="#fde5cb" cx="72.94" cy="30.81" r="0.35" />
              <circle fill="#fde5cb" cx="70.94" cy="30.81" r="0.35" />
              <circle fill="#fde5cb" cx="68.94" cy="30.81" r="0.35" />
              <circle fill="#fde5cb" cx="71.94" cy="28.81" r="0.35" />
              <circle fill="#fde5cb" cx="69.94" cy="28.81" r="0.35" />
            </g>
            <g clipPath={`url(#${id}-3)`}>
              <circle fill="#fde5cb" cx="71.94" cy="36.81" r="0.35" />
              <circle fill="#fde5cb" cx="69.94" cy="36.81" r="0.35" />
              <circle fill="#fde5cb" cx="72.94" cy="34.81" r="0.35" />
              <circle fill="#fde5cb" cx="70.94" cy="34.81" r="0.35" />
              <circle fill="#fde5cb" cx="68.94" cy="34.81" r="0.35" />
              <circle fill="#fde5cb" cx="71.94" cy="32.81" r="0.35" />
              <circle fill="#fde5cb" cx="69.94" cy="32.81" r="0.35" />
            </g>
            <g clipPath={`url(#${id}-4)`}>
              <circle fill="#fde5cb" cx="71.94" cy="40.81" r="0.35" />
              <circle fill="#fde5cb" cx="69.94" cy="40.81" r="0.35" />
              <circle fill="#fde5cb" cx="72.94" cy="38.81" r="0.35" />
              <circle fill="#fde5cb" cx="70.94" cy="38.81" r="0.35" />
              <circle fill="#fde5cb" cx="68.94" cy="38.81" r="0.35" />
              <circle fill="#fde5cb" cx="71.94" cy="36.81" r="0.35" />
              <circle fill="#fde5cb" cx="69.94" cy="36.81" r="0.35" />
            </g>
            <g clipPath={`url(#${id}-5)`}>
              <circle fill="#fde5cb" cx="71.94" cy="44.81" r="0.35" />
              <circle fill="#fde5cb" cx="69.94" cy="44.81" r="0.35" />
              <circle fill="#fde5cb" cx="72.94" cy="42.81" r="0.35" />
              <circle fill="#fde5cb" cx="70.94" cy="42.81" r="0.35" />
              <circle fill="#fde5cb" cx="68.94" cy="42.81" r="0.35" />
              <circle fill="#fde5cb" cx="71.94" cy="40.81" r="0.35" />
              <circle fill="#fde5cb" cx="69.94" cy="40.81" r="0.35" />
            </g>
            <g clipPath={`url(#${id}-6)`}>
              <circle fill="#fde5cb" cx="71.94" cy="48.81" r="0.35" />
              <circle fill="#fde5cb" cx="69.94" cy="48.81" r="0.35" />
              <circle fill="#fde5cb" cx="72.94" cy="46.81" r="0.35" />
              <circle fill="#fde5cb" cx="70.94" cy="46.81" r="0.35" />
              <circle fill="#fde5cb" cx="68.94" cy="46.81" r="0.35" />
              <circle fill="#fde5cb" cx="71.94" cy="44.81" r="0.35" />
              <circle fill="#fde5cb" cx="69.94" cy="44.81" r="0.35" />
            </g>
            <g clipPath={`url(#${id}-7)`}>
              <circle fill="#fde5cb" cx="71.94" cy="52.81" r="0.35" />
              <circle fill="#fde5cb" cx="69.94" cy="52.81" r="0.35" />
              <circle fill="#fde5cb" cx="72.94" cy="50.81" r="0.35" />
              <circle fill="#fde5cb" cx="70.94" cy="50.81" r="0.35" />
              <circle fill="#fde5cb" cx="68.94" cy="50.81" r="0.35" />
              <circle fill="#fde5cb" cx="71.94" cy="48.81" r="0.35" />
              <circle fill="#fde5cb" cx="69.94" cy="48.81" r="0.35" />
            </g>
            <g clipPath={`url(#${id}-8)`}>
              <circle fill="#fde5cb" cx="71.94" cy="56.81" r="0.35" />
              <circle fill="#fde5cb" cx="69.94" cy="56.81" r="0.35" />
              <circle fill="#fde5cb" cx="72.94" cy="54.81" r="0.35" />
              <circle fill="#fde5cb" cx="70.94" cy="54.81" r="0.35" />
              <circle fill="#fde5cb" cx="68.94" cy="54.81" r="0.35" />
              <circle fill="#fde5cb" cx="71.94" cy="52.81" r="0.35" />
              <circle fill="#fde5cb" cx="69.94" cy="52.81" r="0.35" />
            </g>
            <g clipPath={`url(#${id}-9)`}>
              <circle fill="#fde5cb" cx="71.94" cy="60.81" r="0.35" />
              <circle fill="#fde5cb" cx="69.94" cy="60.81" r="0.35" />
              <circle fill="#fde5cb" cx="72.94" cy="58.81" r="0.35" />
              <circle fill="#fde5cb" cx="70.94" cy="58.81" r="0.35" />
              <circle fill="#fde5cb" cx="68.94" cy="58.81" r="0.35" />
              <circle fill="#fde5cb" cx="71.94" cy="56.81" r="0.35" />
              <circle fill="#fde5cb" cx="69.94" cy="56.81" r="0.35" />
            </g>
            <g clipPath={`url(#${id}-10)`}>
              <circle fill="#fde5cb" cx="71.94" cy="64.81" r="0.35" />
              <circle fill="#fde5cb" cx="69.94" cy="64.81" r="0.35" />
              <circle fill="#fde5cb" cx="72.94" cy="62.81" r="0.35" />
              <circle fill="#fde5cb" cx="70.94" cy="62.81" r="0.35" />
              <circle fill="#fde5cb" cx="68.94" cy="62.81" r="0.35" />
              <circle fill="#fde5cb" cx="71.94" cy="60.81" r="0.35" />
              <circle fill="#fde5cb" cx="69.94" cy="60.81" r="0.35" />
            </g>
            <g clipPath={`url(#${id}-11)`}>
              <circle fill="#fde5cb" cx="71.94" cy="68.81" r="0.35" />
              <circle fill="#fde5cb" cx="69.94" cy="68.81" r="0.35" />
              <circle fill="#fde5cb" cx="72.94" cy="66.81" r="0.35" />
              <circle fill="#fde5cb" cx="70.94" cy="66.81" r="0.35" />
              <circle fill="#fde5cb" cx="68.94" cy="66.81" r="0.35" />
              <circle fill="#fde5cb" cx="71.94" cy="64.81" r="0.35" />
              <circle fill="#fde5cb" cx="69.94" cy="64.81" r="0.35" />
            </g>
            <g clipPath={`url(#${id}-12)`}>
              <circle fill="#fde5cb" cx="71.94" cy="72.81" r="0.35" />
              <circle fill="#fde5cb" cx="69.94" cy="72.81" r="0.35" />
              <circle fill="#fde5cb" cx="72.94" cy="70.81" r="0.35" />
              <circle fill="#fde5cb" cx="70.94" cy="70.81" r="0.35" />
              <circle fill="#fde5cb" cx="68.94" cy="70.81" r="0.35" />
              <circle fill="#fde5cb" cx="71.94" cy="68.81" r="0.35" />
              <circle fill="#fde5cb" cx="69.94" cy="68.81" r="0.35" />
            </g>
            <g clipPath={`url(#${id}-13)`}>
              <circle fill="#fde5cb" cx="71.94" cy="76.81" r="0.35" />
              <circle fill="#fde5cb" cx="69.94" cy="76.81" r="0.35" />
              <circle fill="#fde5cb" cx="72.94" cy="74.81" r="0.35" />
              <circle fill="#fde5cb" cx="70.94" cy="74.81" r="0.35" />
              <circle fill="#fde5cb" cx="68.94" cy="74.81" r="0.35" />
              <circle fill="#fde5cb" cx="71.94" cy="72.81" r="0.35" />
              <circle fill="#fde5cb" cx="69.94" cy="72.81" r="0.35" />
            </g>
            <g clipPath={`url(#${id}-14)`}>
              <circle fill="#fde5cb" cx="71.94" cy="80.81" r="0.35" />
              <circle fill="#fde5cb" cx="69.94" cy="80.81" r="0.35" />
              <circle fill="#fde5cb" cx="72.94" cy="78.81" r="0.35" />
              <circle fill="#fde5cb" cx="70.94" cy="78.81" r="0.35" />
              <circle fill="#fde5cb" cx="68.94" cy="78.81" r="0.35" />
              <circle fill="#fde5cb" cx="71.94" cy="76.81" r="0.35" />
              <circle fill="#fde5cb" cx="69.94" cy="76.81" r="0.35" />
            </g>
            <g clipPath={`url(#${id}-15)`}>
              <circle fill="#fde5cb" cx="71.94" cy="84.81" r="0.35" />
              <circle fill="#fde5cb" cx="69.94" cy="84.81" r="0.35" />
              <circle fill="#fde5cb" cx="72.94" cy="82.81" r="0.35" />
              <circle fill="#fde5cb" cx="70.94" cy="82.81" r="0.35" />
              <circle fill="#fde5cb" cx="68.94" cy="82.81" r="0.35" />
              <circle fill="#fde5cb" cx="71.94" cy="80.81" r="0.35" />
              <circle fill="#fde5cb" cx="69.94" cy="80.81" r="0.35" />
            </g>
            <g clipPath={`url(#${id}-16)`}>
              <circle fill="#fde5cb" cx="71.94" cy="88.81" r="0.35" />
              <circle fill="#fde5cb" cx="69.94" cy="88.81" r="0.35" />
              <circle fill="#fde5cb" cx="72.94" cy="86.81" r="0.35" />
              <circle fill="#fde5cb" cx="70.94" cy="86.81" r="0.35" />
              <circle fill="#fde5cb" cx="68.94" cy="86.81" r="0.35" />
              <circle fill="#fde5cb" cx="71.94" cy="84.81" r="0.35" />
              <circle fill="#fde5cb" cx="69.94" cy="84.81" r="0.35" />
            </g>
            <g clipPath={`url(#${id}-17)`}>
              <circle fill="#fde5cb" cx="71.94" cy="92.81" r="0.35" />
              <circle fill="#fde5cb" cx="69.94" cy="92.81" r="0.35" />
              <circle fill="#fde5cb" cx="72.94" cy="90.81" r="0.35" />
              <circle fill="#fde5cb" cx="70.94" cy="90.81" r="0.35" />
              <circle fill="#fde5cb" cx="68.94" cy="90.81" r="0.35" />
              <circle fill="#fde5cb" cx="71.94" cy="88.81" r="0.35" />
              <circle fill="#fde5cb" cx="69.94" cy="88.81" r="0.35" />
            </g>
            <g clipPath={`url(#${id}-18)`}>
              <circle fill="#fde5cb" cx="71.94" cy="96.81" r="0.35" />
              <circle fill="#fde5cb" cx="69.94" cy="96.81" r="0.35" />
              <circle fill="#fde5cb" cx="72.94" cy="94.81" r="0.35" />
              <circle fill="#fde5cb" cx="70.94" cy="94.81" r="0.35" />
              <circle fill="#fde5cb" cx="68.94" cy="94.81" r="0.35" />
              <circle fill="#fde5cb" cx="71.94" cy="92.81" r="0.35" />
              <circle fill="#fde5cb" cx="69.94" cy="92.81" r="0.35" />
            </g>
            <g clipPath={`url(#${id}-19)`}>
              <circle fill="#fde5cb" cx="71.94" cy="100.81" r="0.35" />
              <circle fill="#fde5cb" cx="69.94" cy="100.81" r="0.35" />
              <circle fill="#fde5cb" cx="72.94" cy="98.81" r="0.35" />
              <circle fill="#fde5cb" cx="70.94" cy="98.81" r="0.35" />
              <circle fill="#fde5cb" cx="68.94" cy="98.81" r="0.35" />
              <circle fill="#fde5cb" cx="71.94" cy="96.81" r="0.35" />
              <circle fill="#fde5cb" cx="69.94" cy="96.81" r="0.35" />
            </g>
            <g clipPath={`url(#${id}-20)`}>
              <circle fill="#fde5cb" cx="71.94" cy="104.81" r="0.35" />
              <circle fill="#fde5cb" cx="69.94" cy="104.81" r="0.35" />
              <circle fill="#fde5cb" cx="72.94" cy="102.81" r="0.35" />
              <circle fill="#fde5cb" cx="70.94" cy="102.81" r="0.35" />
              <circle fill="#fde5cb" cx="68.94" cy="102.81" r="0.35" />
              <circle fill="#fde5cb" cx="71.94" cy="100.81" r="0.35" />
              <circle fill="#fde5cb" cx="69.94" cy="100.81" r="0.35" />
            </g>
          </g>
        </g>
        <g clipPath={`url(#${id}-21)`}>
          <g clipPath={`url(#${id}-19)`}>
            <circle fill="#f17732" cx="71.94" cy="100.81" r="0.35" />
            <circle fill="#f17732" cx="69.94" cy="100.81" r="0.35" />
            <circle fill="#f17732" cx="72.94" cy="98.81" r="0.35" />
            <circle fill="#f17732" cx="70.94" cy="98.81" r="0.35" />
            <circle fill="#f17732" cx="68.94" cy="98.81" r="0.35" />
            <circle fill="#f17732" cx="71.94" cy="96.81" r="0.35" />
            <circle fill="#f17732" cx="69.94" cy="96.81" r="0.35" />
          </g>
        </g>
        <path
          fill="#2870b5"
          d="M72,94.81H69.94v5.74c0,4.49-2.34,7.33-6.85,7.33s-5.79-4.06-5.79-7.33v-.23c0-.14,0-.4,0-.7v-.34a1.45,1.45,0,0,0-.3-.06,1.47,1.47,0,0,0-1.47,1.47v.3c0,4.06,2.32,9.12,7.94,9.12S72,106.58,72,101Z"
        />
        <path fill="#6f6693" d="M57.3,99.28h0v0Z" />
        <g opacity="0.2">
          <path fill="#fff" d="M57.3,99.12v.16h0Z" />
        </g>
        <path fill="#6f6693" d="M57.3,99.6v-.32h0v.32Z" />
        <g opacity="0.2">
          <path fill="#fff" d="M57.3,99.6v-.32h0v.32Z" />
        </g>
        <path
          fill="#6f6693"
          d="M57.3,100.32v-.7C57.29,99.92,57.3,100.18,57.3,100.32Z"
        />
        <g opacity="0.2">
          <path
            fill="#fff"
            d="M57.3,100.32v-.7C57.29,99.92,57.3,100.18,57.3,100.32Z"
          />
        </g>
        <path
          fill="#6f6693"
          d="M57.3,100.55c0,3.27,1.27,7.33,5.79,7.33s6.85-2.84,6.85-7.33V94.81H68.46c0,.1,0,6.08,0,6.18,0,3.82-1.91,5.59-5,5.59s-5-2.5-5-5.59v-.3a1.46,1.46,0,0,0-1.17-1.41v1.27Z"
        />
        <path
          fill="#5fcbeb"
          d="M57.3,100.55c0,3.27,1.27,7.33,5.79,7.33s6.85-2.84,6.85-7.33V94.81H68.46c0,.1,0,6.08,0,6.18,0,3.82-1.91,5.59-5,5.59s-5-2.5-5-5.59v-.3a1.46,1.46,0,0,0-1.17-1.41v1.27Z"
        />
        <path
          fill="#feca1e"
          d="M69.94,34.22c-25.08,0-45.87,15.57-49.67,35.94,9.63-1.73,20.94-1,32.39,2.6.19-.09.4-.16.6-.24C54.12,51,61.26,34.22,69.94,34.22Z"
        />
        <path
          fill="#feca1e"
          d="M69.94,34.22c8.68,0,15.82,16.79,16.68,38.3l.1,0C98.43,69,110,68.41,119.66,70.39,116,49.91,95.12,34.22,69.94,34.22Z"
        />
        <path
          fill="#f17732"
          d="M69.94,34.22c-8.68,0-15.82,16.79-16.68,38.3a45.64,45.64,0,0,1,16.68-3,45.56,45.56,0,0,1,16.68,3C85.76,51,78.62,34.22,69.94,34.22Z"
        />
      </svg>
    );
  } else if (draft) {
    return (
      <svg
        {...elementProps}
        viewBox="0 0 140 140"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby={`${id}-title ${id}-description`}
        data-testid="draft"
      >
        <title id={`${id}-title`}>Insurance Circle Illustration</title>
        <desc id={`${id}-description`}>Draft insurance illustration</desc>
        <circle cx="70" cy="70" r="70" fill="#5b6279" />
        <g>
          <g>
            <g>
              <g>
                <g>
                  <g>
                    <path
                      d="M70.37,30h0a1.18,1.18,0,0,1,1.18,1.15V100a1.18,1.18,0,0,1-1.18,1.15h0A1.18,1.18,0,0,1,69.19,100h0V31.15A1.18,1.18,0,0,1,70.37,30Z"
                      fill="#bdc0c9"
                      fillRule="evenodd"
                    />
                  </g>
                </g>
              </g>
              <path
                d="M72.13,94.71H70.07v5.74c0,4.49-2.33,7.33-6.85,7.33s-5.79-4.07-5.79-7.33v-1.3a1.59,1.59,0,0,0-.3-.06,1.47,1.47,0,0,0-1.47,1.47h0v.3c0,4.06,2.33,9.11,7.94,9.11s8.53-3.53,8.53-9.11Z"
                fill="#7c8194"
              />
              <path d="M57.43,99.15" fill="#6f6693" />
              <g opacity="0.2">
                <path d="M57.43,99v.13h0Z" fill="#fff" />
              </g>
              <path d="M57.43,99.5v-.35h0Z" fill="#6f6693" />
              <g opacity="0.2">
                <path d="M57.43,99.5v-.35h0Z" fill="#fff" />
              </g>
              <path d="M57.43,100.21" fill="#6f6693" />
              <g opacity="0.2">
                <path d="M57.43,100.21" fill="#fff" />
              </g>
              <path
                d="M57.43,100.45c0,3.26,1.28,7.33,5.79,7.33s6.85-2.84,6.85-7.33V94.71H68.6v6.18c0,3.82-1.91,5.58-5,5.58s-5-2.5-5-5.58v-.3a1.45,1.45,0,0,0-1.17-1.44Z"
                fill="#6f6693"
              />
              <path
                d="M57.43,100.45c0,3.26,1.28,7.33,5.79,7.33s6.85-2.84,6.85-7.33V94.71H68.6v6.18c0,3.82-1.91,5.58-5,5.58s-5-2.5-5-5.58v-.3a1.45,1.45,0,0,0-1.17-1.44Z"
                fill="#adb0bc"
              />
              <path
                d="M70.07,34.15C45,34.15,24.2,49.69,20.4,70.05c9.63-1.72,20.94-1,32.39,2.6l.61-.23C54.25,50.91,61.39,34.15,70.07,34.15Z"
                fill="#8c91a1"
              />
              <path
                d="M70.07,34.15c8.69,0,15.83,16.78,16.68,38.29h.11c11.7-3.55,23.23-4.14,32.93-2.17C116.11,49.81,95.25,34.15,70.07,34.15Z"
                fill="#8c91a1"
              />
              <path
                d="M70.07,34.15c-8.68,0-15.82,16.79-16.67,38.3a45.62,45.62,0,0,1,16.67-3,45.68,45.68,0,0,1,16.68,3C85.9,50.9,78.76,34.15,70.07,34.15Z"
                fill="#eeeff1"
              />
            </g>
          </g>
        </g>
      </svg>
    );
  } else {
    return (
      <svg
        {...elementProps}
        viewBox="0 0 140 140"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby={`${id}-title ${id}-description`}
        data-testid="default"
      >
        <title id={`${id}-title`}>Insurance Circle Illustration</title>
        <desc id={`${id}-description`}>Purple insurance illustration</desc>
        <circle cx="70" cy="70" fill="#10004c" r="70" />
        <g>
          <g>
            <g>
              <g>
                <g>
                  <path
                    fill="#9f99b7"
                    fillRule="evenodd"
                    d="M70.37,30h0a1.18,1.18,0,0,1,1.18,1.18V100a1.18,1.18,0,0,1-1.18,1.18h0A1.18,1.18,0,0,1,69.19,100V31.18A1.18,1.18,0,0,1,70.37,30Z"
                  />
                </g>
              </g>
            </g>
            <path
              fill="#3f336f"
              d="M72.13,94.71H70.07v5.74c0,4.49-2.33,7.32-6.85,7.32s-5.79-4.06-5.79-7.32V99.18a1.45,1.45,0,0,0-.3-.06,1.47,1.47,0,0,0-1.47,1.47.28.28,0,0,0,0,.09,1.34,1.34,0,0,0,0,.2c0,4.06,2.33,9.12,7.94,9.12s8.53-3.53,8.53-9.12Z"
            />
            <path fill="#6f6693" d="M57.43,99.18h0v0Z" />
            <g opacity="0.2">
              <path fill="#fff" d="M57.43,99v.16h0Z" />
            </g>
            <path fill="#6f6693" d="M57.43,99.49v-.31h0v.31Z" />
            <g opacity="0.2">
              <path fill="#fff" d="M57.43,99.49v-.31h0v.31Z" />
            </g>
            <path fill="#6f6693" d="M57.43,100.21v0Z" />
            <g opacity="0.2">
              <path fill="#fff" d="M57.43,100.21v0Z" />
            </g>
            <path
              fill="#6f6693"
              d="M57.43,100.45c0,3.26,1.28,7.32,5.79,7.32s6.85-2.83,6.85-7.32V94.71H68.6v6.17c0,3.83-1.91,5.59-5,5.59s-5-2.5-5-5.59a2.81,2.81,0,0,0,0-.29,1.44,1.44,0,0,0-1.17-1.41v1.27Z"
            />
            <path
              fill="#8780a5"
              d="M57.43,100.45c0,3.26,1.28,7.32,5.79,7.32s6.85-2.83,6.85-7.32V94.71H68.6v6.17c0,3.83-1.91,5.59-5,5.59s-5-2.5-5-5.59a2.81,2.81,0,0,0,0-.29,1.44,1.44,0,0,0-1.17-1.41v1.27Z"
            />
            <path
              fill="#584d82"
              d="M70.07,34.12C45,34.12,24.2,49.69,20.4,70.05c9.63-1.73,20.94-1,32.39,2.6l.61-.23C54.25,50.91,61.39,34.12,70.07,34.12Z"
            />
            <path
              fill="#584d82"
              d="M70.07,34.12c8.69,0,15.83,16.78,16.68,38.29l.11,0c11.7-3.54,23.23-4.14,32.93-2.16C116.11,49.81,95.25,34.12,70.07,34.12Z"
            />
            <path
              fill="#e7e6ed"
              d="M70.07,34.12c-8.68,0-15.82,16.79-16.67,38.3a45.54,45.54,0,0,1,16.67-3,45.56,45.56,0,0,1,16.68,3C85.9,50.9,78.76,34.12,70.07,34.12Z"
            />
          </g>
        </g>
      </svg>
    );
  }
};

UmbrellaCircleIllustration.defaultProps = {
  height: '14rem',
  width: '14.4rem',
  id: 'umbrella-circle-illustration',
};

export default memo(UmbrellaCircleIllustration);
export {UmbrellaCircleIllustration as PureUmbrellaCircleIllustration};
