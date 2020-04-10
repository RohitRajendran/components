/** @module ShieldCircleIllustration */
import React, {FC, memo, useState} from 'react';

type ShieldCircleIllustrationProps = {
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

/** Renders an shield illustration. */
const ShieldCircleIllustration: FC<ShieldCircleIllustrationProps> = ({
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
        <title id={`${id}-title`}>Shield Circle Illustration</title>
        <desc id={`${id}-description`}>
          Shield illustration with hands holding it
        </desc>
        <defs>
          <pattern
            id={`${id}-_4-dot`}
            data-name="4-dot"
            width="4"
            height="4"
            patternTransform="translate(-64.97 153.22)"
            patternUnits="userSpaceOnUse"
            viewBox="0 0 4 4"
          >
            <rect width="4" height="4" fill="none" />
            <circle cx="3" cy="4" r="0.35" fill="#f17732" />
            <circle cx="1" cy="4" r="0.35" fill="#f17732" />
            <circle cx="4" cy="2" r="0.35" fill="#f17732" />
            <circle cx="2" cy="2" r="0.35" fill="#f17732" />
            <circle cy="2" r="0.35" fill="#f17732" />
            <circle cx="3" r="0.35" fill="#f17732" />
            <circle cx="1" r="0.35" fill="#f17732" />
          </pattern>
          <pattern
            id={`${id}-_5-dot`}
            data-name={`${id}-_5-dot`}
            width="4"
            height="4"
            patternTransform="translate(-64.97 153.22)"
            patternUnits="userSpaceOnUse"
            viewBox="0 0 4 4"
          >
            <rect width="4" height="4" fill="none" />
            <circle cx="3" cy="4" r="0.35" fill="#99052e" />
            <circle cx="1" cy="4" r="0.35" fill="#99052e" />
            <circle cx="4" cy="2" r="0.35" fill="#99052e" />
            <circle cx="2" cy="2" r="0.35" fill="#99052e" />
            <circle cy="2" r="0.35" fill="#99052e" />
            <circle cx="3" r="0.35" fill="#99052e" />
            <circle cx="1" r="0.35" fill="#99052e" />
          </pattern>
          <pattern
            id={`${id}-_2-dot`}
            data-name={`${id}-_2-dot`}
            width="4"
            height="4"
            patternTransform="translate(-64.97 153.22)"
            patternUnits="userSpaceOnUse"
            viewBox="0 0 4 4"
          >
            <rect width="4" height="4" fill="none" />
            <circle cx="3" cy="4" r="0.35" fill="#fde5cb" />
            <circle cx="1" cy="4" r="0.35" fill="#fde5cb" />
            <circle cx="4" cy="2" r="0.35" fill="#fde5cb" />
            <circle cx="2" cy="2" r="0.35" fill="#fde5cb" />
            <circle cy="2" r="0.35" fill="#fde5cb" />
            <circle cx="3" r="0.35" fill="#fde5cb" />
            <circle cx="1" r="0.35" fill="#fde5cb" />
          </pattern>
        </defs>
        <g id={`${id}-bequest-color-2`}>
          <path
            d="M140,70a70,70,0,1,0-95.19,65.31l3.51-8.08q-.76-3.54-12.2-13.46a.48.48,0,0,1-.16-.4l-7.5-15.71a.48.48,0,0,1,0-.29L25.82,85a.94.94,0,0,1,.72-1.1l.9-.19a1.85,1.85,0,0,1,2.19,1.43l2.05,9.77a.38.38,0,0,1,.12.1l6.5,7.38.11-.08c.77-.82,2.23-1,3.73.47,6.16,5.83,5.64,4.43,13.48,8.35,6.45,3.38,7.18,8.39,5.06,11.46l-2.09,16.47a69.72,69.72,0,0,0,22.82,0l-2.09-16.47c-2.12-3.07-1.39-8.08,5.06-11.46,7.84-3.92,7.32-2.52,13.48-8.35,1.5-1.43,3-1.29,3.73-.47l.11.08L108.2,95a.38.38,0,0,1,.12-.1l2.05-9.77a1.85,1.85,0,0,1,2.19-1.43l.9.19a.94.94,0,0,1,.72,1.1l-2.61,12.37a.48.48,0,0,1,0,.29L104,113.37a.48.48,0,0,1-.16.4q-11.43,9.92-12.2,13.46l3.51,8.08A70,70,0,0,0,140,70Z"
            fill="#10004c"
          />
          <path
            d="M51,124.07c-2.11-1.41-2.94-3.35-3.63-5.53-1.6-3.16-1.27-6.91-7.94-11.35-2.47-1.64-2.36-3.89-1.17-4.8L31.8,95a.38.38,0,0,0-.12-.1l-2.05-9.77a1.85,1.85,0,0,0-2.19-1.43l-.9.19a.94.94,0,0,0-.72,1.1c2.2-.28,2.48,2,3.93,11.88.3,2.09,5.73,13.58,8.77,15.83,5.34,4,9.82,13,15.09,14.32,2.34.6.2,6-1,10.79q3,.75,6,1.24l2.09-16.47C58.91,125.16,55.14,126.36,51,124.07Z"
            fill="#5fcbeb"
          />
          <path
            d="M53.61,127c-5.27-1.35-9.75-10.36-15.09-14.32-3-2.25-8.47-13.74-8.77-15.83C28.3,87,28,84.72,25.82,85l2.61,12.37a.48.48,0,0,0,0,.29L36,113.37a.48.48,0,0,0,.16.4q11.43,9.92,12.2,13.46l-3.51,8.08a68.51,68.51,0,0,0,7.78,2.51C53.81,133,56,127.63,53.61,127Z"
            fill="#2870b5"
          />
          <path d="M38.41,102.31l-.11.08,0,0Z" fill="#10004c" />
          <path
            d="M39.47,107.19c6.67,4.44,6.34,8.19,7.94,11.35-1.15-3.61-1.95-7.89-7.58-11.64-2.22-1.48-2.36-3.44-1.51-4.48l0,0C37.11,103.3,37,105.55,39.47,107.19Z"
            fill="#10004c"
          />
          <path
            d="M41.79,103.08c6.15,5.83,5.64,4.43,13.47,8.34h0a11.77,11.77,0,0,1,3.29,2.08,9.79,9.79,0,0,1,.84.86c.08.1.14.21.22.31A5.64,5.64,0,0,1,61.23,119a8,8,0,0,1-.54,3.53v0c2.12-3.07,1.39-8.08-5.06-11.46-7.84-3.92-7.32-2.52-13.48-8.35-1.5-1.43-3-1.29-3.73-.47C39.23,101.78,40.49,101.84,41.79,103.08Z"
            fill="#5fcbeb"
          />
          <path
            d="M59.61,114.67c-.08-.1-.14-.21-.22-.31a9.79,9.79,0,0,0-.84-.86,11.77,11.77,0,0,0-3.29-2.08h0A14.8,14.8,0,0,1,59.61,114.67Z"
            fill="#5fcbeb"
          />
          <path
            d="M61.23,119c-.44,3.58-5.49,5.76-11,2.7a7.92,7.92,0,0,1-2.86-3.17c.69,2.18,1.52,4.12,3.63,5.53,4.1,2.29,7.87,1.09,9.64-1.48v0A8,8,0,0,0,61.23,119Z"
            fill="#5fcbeb"
          />
          <path
            d="M41.35,105.86a.44.44,0,0,1,.43,0q9.72,3.85,13.48,5.61c-7.83-3.91-7.32-2.51-13.47-8.34-1.3-1.24-2.56-1.3-3.38-.77l-.09.11Z"
            fill="#5fcbeb"
          />
          <path
            d="M59.61,114.67A8,8,0,0,1,61.23,119,5.64,5.64,0,0,0,59.61,114.67Z"
            fill="#5fcbeb"
          />
          <path
            d="M50.27,121.71c5.47,3.06,10.52.88,11-2.7a8,8,0,0,0-1.62-4.34,14.8,14.8,0,0,0-4.35-3.25h0q-3.76-1.76-13.48-5.61a.44.44,0,0,0-.43,0l-3-3.44c-.85,1-.71,3,1.51,4.48,5.63,3.75,6.43,8,7.58,11.64A7.92,7.92,0,0,0,50.27,121.71Z"
            fill="#5fcbeb"
          />
          <path
            d="M86.39,127c5.27-1.35,9.75-10.36,15.09-14.32,3-2.25,8.47-13.74,8.77-15.83C111.7,87,112,84.72,114.18,85a.94.94,0,0,0-.72-1.1l-.9-.19a1.85,1.85,0,0,0-2.19,1.43l-2.05,9.77a.38.38,0,0,0-.12.1l-6.5,7.38c1.19.91,1.3,3.16-1.17,4.8-6.67,4.44-6.34,8.19-7.94,11.35-.69,2.18-1.52,4.12-3.63,5.53-4.1,2.29-7.87,1.09-9.64-1.48l2.09,16.47q3-.5,6-1.24C86.19,133,84.05,127.63,86.39,127Z"
            fill="#5fcbeb"
          />
          <path
            d="M103.88,113.77a.48.48,0,0,0,.16-.4l7.5-15.71a.48.48,0,0,0,0-.29L114.18,85c-2.2-.28-2.48,2-3.93,11.88-.3,2.09-5.73,13.58-8.77,15.83-5.34,4-9.82,13-15.09,14.32-2.34.6-.2,6,1,10.79a68.51,68.51,0,0,0,7.78-2.51l-3.51-8.08Q92.45,123.69,103.88,113.77Z"
            fill="#2870b5"
          />
          <path d="M101.7,102.39l-.11-.08.09.11Z" fill="#10004c" />
          <path
            d="M100.17,106.9c-5.63,3.75-6.43,8-7.58,11.64,1.6-3.16,1.27-6.91,7.94-11.35,2.47-1.64,2.36-3.89,1.17-4.8l0,0C102.53,103.46,102.39,105.42,100.17,106.9Z"
            fill="#10004c"
          />
          <path
            d="M78.77,119a5.64,5.64,0,0,1,1.62-4.34c.08-.1.14-.21.22-.31a9.79,9.79,0,0,1,.84-.86,11.77,11.77,0,0,1,3.29-2.08h0c7.83-3.91,7.32-2.51,13.47-8.34,1.3-1.24,2.56-1.3,3.38-.77-.77-.82-2.23-1-3.73.47-6.16,5.83-5.64,4.43-13.48,8.35-6.45,3.38-7.18,8.39-5.06,11.46v0A8,8,0,0,1,78.77,119Z"
            fill="#5fcbeb"
          />
          <path
            d="M84.74,111.42h0a11.77,11.77,0,0,0-3.29,2.08,9.79,9.79,0,0,0-.84.86c-.08.1-.14.21-.22.31A14.8,14.8,0,0,1,84.74,111.42Z"
            fill="#5fcbeb"
          />
          <path
            d="M89,124.07c2.11-1.41,2.94-3.35,3.63-5.53a7.92,7.92,0,0,1-2.86,3.17c-5.47,3.06-10.52.88-11-2.7a8,8,0,0,0,.54,3.53v0C81.09,125.16,84.86,126.36,89,124.07Z"
            fill="#5fcbeb"
          />
          <path
            d="M98.21,103.08c-6.15,5.83-5.64,4.43-13.47,8.34q3.77-1.76,13.48-5.61a.44.44,0,0,1,.43,0l3-3.44-.09-.11C100.77,101.78,99.51,101.84,98.21,103.08Z"
            fill="#5fcbeb"
          />
          <path
            d="M78.77,119a8,8,0,0,1,1.62-4.34A5.64,5.64,0,0,0,78.77,119Z"
            fill="#5fcbeb"
          />
          <path
            d="M100.17,106.9c2.22-1.48,2.36-3.44,1.51-4.48l-3,3.44a.44.44,0,0,0-.43,0q-9.72,3.85-13.48,5.61h0a14.8,14.8,0,0,0-4.35,3.25A8,8,0,0,0,78.77,119c.44,3.58,5.49,5.76,11,2.7a7.92,7.92,0,0,0,2.86-3.17C93.74,114.93,94.54,110.65,100.17,106.9Z"
            fill="#5fcbeb"
          />
        </g>
        <g id={`${id}-Circle-BG`}>
          <g>
            <path
              d="M102.11,63.61V42.45L69.91,31,37.85,42.45V65.19c0,.11,0,.21,0,.32,0,.42,0,.84,0,1.27C37.85,97.69,70,109,70,109s32-11.45,32.13-42.22C102.11,65.71,102.21,64.66,102.11,63.61Z"
              fill="#feca1e"
            />
            <path
              d="M102.11,63.61V42.45L69.91,31,37.85,42.45V65.19c0,.11,0,.21,0,.32,0,.42,0,.84,0,1.27C37.85,97.69,70,109,70,109s32-11.45,32.13-42.22C102.11,65.71,102.21,64.66,102.11,63.61Z"
              fill={`url(#${id}-_4-dot)`}
            />
            <path
              d="M45.26,39.8l-7.41,2.65V65.19c0,.11,0,.21,0,.32,0,.42,0,.84,0,1.27C37.85,97.69,70,109,70,109s16.85-6,26.14-21.11C61.71,81,45.26,39.8,45.26,39.8Z"
              fill="#f17732"
            />
            <path
              d="M45.26,39.8l-7.41,2.65V65.19c0,.11,0,.21,0,.32,0,.42,0,.84,0,1.27C37.85,97.69,70,109,70,109s16.85-6,26.14-21.11C61.71,81,45.26,39.8,45.26,39.8Z"
              fill={`url(#${id}-_5-dot)`}
            />
            <path
              d="M96.19,64.78V47.48L70,38.12l-26.2,9.36V66.07c0,.09,0,.17,0,.26,0,.34,0,.69,0,1C43.78,92.64,70,101.88,70,101.88s26-9.36,26.15-34.51C96.19,66.49,96.27,65.63,96.19,64.78Z"
              fill="#5fcbeb"
            />
            <path
              d="M48.15,45.92l-4.37,1.56V66.07c0,.09,0,.17,0,.26,0,.34,0,.69,0,1C43.78,92.64,70,101.88,70,101.88S82.48,97.4,90.2,86.32C67.59,78.84,53.75,56.74,48.15,45.92Z"
              fill="#2870b5"
            />
            <polygon
              points="87.25 64.99 74.44 64.99 74.44 52.18 65.56 52.18 65.56 64.99 52.75 64.99 52.75 73.86 65.56 73.86 65.56 86.67 74.44 86.67 74.44 73.86 87.25 73.86 87.25 64.99"
              fill="#f8f7f4"
            />
            <polygon
              points="87.25 64.99 74.44 64.99 74.44 52.18 65.56 52.18 65.56 64.99 52.75 64.99 52.75 73.86 65.56 73.86 65.56 86.67 74.44 86.67 74.44 73.86 87.25 73.86 87.25 64.99"
              fill={`url(#${id}-_2-dot)`}
            />
            <path
              d="M74.44,86.67V78A78.7,78.7,0,0,1,60.74,65h-8v8.87H65.56V86.67Z"
              fill="#fde5cb"
            />
          </g>
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
        <title id={`${id}-title`}>Shield Circle Illustration</title>
        <desc id={`${id}-description`}>Colored Shield illustration</desc>
        <defs>
          <pattern
            id={`${id}-_4-dot`}
            data-name={`${id}-_4-dot`}
            width="4"
            height="4"
            patternTransform="translate(-24.97 116)"
            patternUnits="userSpaceOnUse"
            viewBox="0 0 4 4"
          >
            <rect width="4" height="4" fill="none" />
            <circle cx="3" cy="4" r="0.35" fill="#f17732" />
            <circle cx="1" cy="4" r="0.35" fill="#f17732" />
            <circle cx="4" cy="2" r="0.35" fill="#f17732" />
            <circle cx="2" cy="2" r="0.35" fill="#f17732" />
            <circle cy="2" r="0.35" fill="#f17732" />
            <circle cx="3" r="0.35" fill="#f17732" />
            <circle cx="1" r="0.35" fill="#f17732" />
          </pattern>
          <pattern
            id={`${id}-_5-dot`}
            data-name={`${id}-_5-dot`}
            width="4"
            height="4"
            patternTransform="translate(-24.97 116)"
            patternUnits="userSpaceOnUse"
            viewBox="0 0 4 4"
          >
            <rect width="4" height="4" fill="none" />
            <circle cx="3" cy="4" r="0.35" fill="#99052e" />
            <circle cx="1" cy="4" r="0.35" fill="#99052e" />
            <circle cx="4" cy="2" r="0.35" fill="#99052e" />
            <circle cx="2" cy="2" r="0.35" fill="#99052e" />
            <circle cy="2" r="0.35" fill="#99052e" />
            <circle cx="3" r="0.35" fill="#99052e" />
            <circle cx="1" r="0.35" fill="#99052e" />
          </pattern>
          <pattern
            id={`${id}-_2-dot`}
            data-name={`${id}-_2-dot`}
            width="4"
            height="4"
            patternTransform="translate(-24.97 116)"
            patternUnits="userSpaceOnUse"
            viewBox="0 0 4 4"
          >
            <rect width="4" height="4" fill="none" />
            <circle cx="3" cy="4" r="0.35" fill="#fde5cb" />
            <circle cx="1" cy="4" r="0.35" fill="#fde5cb" />
            <circle cx="4" cy="2" r="0.35" fill="#fde5cb" />
            <circle cx="2" cy="2" r="0.35" fill="#fde5cb" />
            <circle cy="2" r="0.35" fill="#fde5cb" />
            <circle cx="3" r="0.35" fill="#fde5cb" />
            <circle cx="1" r="0.35" fill="#fde5cb" />
          </pattern>
        </defs>
        <g id={`${id}-Circle-BG`}>
          <circle cx="70" cy="70" r="70" fill="#10004c" />
          <g>
            <path
              d="M102.11,63.61V42.45L69.91,31,37.85,42.45V65.19c0,.11,0,.21,0,.32,0,.42,0,.84,0,1.27C37.85,97.69,70,109,70,109s32-11.45,32.13-42.22C102.11,65.71,102.21,64.66,102.11,63.61Z"
              fill="#feca1e"
            />
            <path
              d="M102.11,63.61V42.45L69.91,31,37.85,42.45V65.19c0,.11,0,.21,0,.32,0,.42,0,.84,0,1.27C37.85,97.69,70,109,70,109s32-11.45,32.13-42.22C102.11,65.71,102.21,64.66,102.11,63.61Z"
              fill={`url(#${id}-_4-dot)`}
            />
            <path
              d="M45.26,39.8l-7.41,2.65V65.19c0,.11,0,.21,0,.32,0,.42,0,.84,0,1.27C37.85,97.69,70,109,70,109s16.85-6,26.14-21.11C61.71,81,45.26,39.8,45.26,39.8Z"
              fill="#f17732"
            />
            <path
              d="M45.26,39.8l-7.41,2.65V65.19c0,.11,0,.21,0,.32,0,.42,0,.84,0,1.27C37.85,97.69,70,109,70,109s16.85-6,26.14-21.11C61.71,81,45.26,39.8,45.26,39.8Z"
              fill={`url(#${id}-_5-dot)`}
            />
            <path
              d="M96.19,64.78V47.48L70,38.12l-26.2,9.36V66.07c0,.09,0,.17,0,.26,0,.34,0,.69,0,1C43.78,92.64,70,101.88,70,101.88s26-9.36,26.15-34.51C96.19,66.49,96.27,65.63,96.19,64.78Z"
              fill="#5fcbeb"
            />
            <path
              d="M48.15,45.92l-4.37,1.56V66.07c0,.09,0,.17,0,.26,0,.34,0,.69,0,1C43.78,92.64,70,101.88,70,101.88S82.48,97.4,90.2,86.32C67.59,78.84,53.75,56.74,48.15,45.92Z"
              fill="#2870b5"
            />
            <polygon
              points="87.25 64.99 74.44 64.99 74.44 52.18 65.56 52.18 65.56 64.99 52.75 64.99 52.75 73.86 65.56 73.86 65.56 86.67 74.44 86.67 74.44 73.86 87.25 73.86 87.25 64.99"
              fill="#f8f7f4"
            />
            <polygon
              points="87.25 64.99 74.44 64.99 74.44 52.18 65.56 52.18 65.56 64.99 52.75 64.99 52.75 73.86 65.56 73.86 65.56 86.67 74.44 86.67 74.44 73.86 87.25 73.86 87.25 64.99"
              fill={`url(#${id}-_2-dot)`}
            />
            <path
              d="M74.44,86.67V78A78.7,78.7,0,0,1,60.74,65h-8v8.87H65.56V86.67Z"
              fill="#fde5cb"
            />
          </g>
        </g>
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
        <title id={`${id}-title`}>Shield Circle Illustration</title>
        <desc id={`${id}-description`}>Draft Shield illustration</desc>
        <g id={`${id}-Circle-BG`}>
          <circle cx="70" cy="70" r="70" fill="#5b6279" />
          <path
            d="M102.11,63.61V42.45L69.91,31,37.85,42.45V65.19c0,.11,0,.21,0,.32,0,.42,0,.84,0,1.27C37.85,97.69,70,109,70,109s32-11.45,32.13-42.22C102.11,65.71,102.21,64.66,102.11,63.61Z"
            fill="#dee0e4"
          />
          <path
            d="M45.26,39.8l-7.41,2.65V65.19c0,.11,0,.21,0,.32,0,.42,0,.84,0,1.27C37.85,97.69,70,109,70,109s16.85-6,26.14-21.11C61.71,81,45.26,39.8,45.26,39.8Z"
            fill="#9da1af"
          />
          <path
            d="M96.19,64.78V47.48L70,38.12l-26.2,9.36V66.07c0,.09,0,.17,0,.26,0,.34,0,.69,0,1C43.78,92.64,70,101.88,70,101.88s26-9.36,26.15-34.51C96.19,66.49,96.27,65.63,96.19,64.78Z"
            fill="#adb0bc"
          />
          <path
            d="M48.15,45.92l-4.37,1.56V66.07c0,.09,0,.17,0,.26,0,.34,0,.69,0,1C43.78,92.64,70,101.88,70,101.88S82.48,97.4,90.2,86.32C67.59,78.84,53.75,56.74,48.15,45.92Z"
            fill="#5b6279"
          />
          <polygon
            points="87.25 64.99 74.44 64.99 74.44 52.18 65.56 52.18 65.56 64.99 52.75 64.99 52.75 73.86 65.56 73.86 65.56 86.67 74.44 86.67 74.44 73.86 87.25 73.86 87.25 64.99"
            fill="#f8f7f4"
          />
          <path
            d="M74.44,86.67V78A78.7,78.7,0,0,1,60.74,65h-8v8.87H65.56V86.67Z"
            fill="#adb0bc"
          />
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
        <title id={`${id}-title`}>Shield Circle Illustration</title>
        <desc id={`${id}-description`}>Purple Shield illustration</desc>
        <g id={`${id}-Circle-BG`}>
          <circle cx="70" cy="70" r="70" fill="#10004c" />
          <g>
            <path
              d="M102.11,63.61V42.45L69.91,31,37.85,42.45V65.19c0,.11,0,.21,0,.32,0,.42,0,.84,0,1.27C37.85,97.69,70,109,70,109s32-11.45,32.13-42.22C102.11,65.71,102.21,64.66,102.11,63.61Z"
              fill="#cfccdb"
            />
            <path
              d="M45.26,39.8l-7.41,2.65V65.19c0,.11,0,.21,0,.32,0,.42,0,.84,0,1.27C37.85,97.69,70,109,70,109s16.85-6,26.14-21.11C61.71,81,45.26,39.8,45.26,39.8Z"
              fill="#6f6693"
            />
            <path
              d="M96.19,64.78V47.48L70,38.12l-26.2,9.36V66.07c0,.09,0,.17,0,.26,0,.34,0,.69,0,1C43.78,92.64,70,101.88,70,101.88s26-9.36,26.15-34.51C96.19,66.49,96.27,65.63,96.19,64.78Z"
              fill="#8780a5"
            />
            <path
              d="M48.15,45.92l-4.37,1.56V66.07c0,.09,0,.17,0,.26,0,.34,0,.69,0,1C43.78,92.64,70,101.88,70,101.88S82.48,97.4,90.2,86.32C67.59,78.84,53.75,56.74,48.15,45.92Z"
              fill="#10004c"
            />
            <polygon
              points="87.25 64.99 74.44 64.99 74.44 52.18 65.56 52.18 65.56 64.99 52.75 64.99 52.75 73.86 65.56 73.86 65.56 86.67 74.44 86.67 74.44 73.86 87.25 73.86 87.25 64.99"
              fill="#f8f7f4"
            />
            <path
              d="M74.44,86.67V78A78.7,78.7,0,0,1,60.74,65h-8v8.87H65.56V86.67Z"
              fill="#8780a5"
            />
          </g>
        </g>
      </svg>
    );
  }
};

ShieldCircleIllustration.defaultProps = {
  height: '14rem',
  width: '14.4rem',
  id: 'shield-circle-illustration',
};

export default memo(ShieldCircleIllustration);
export {ShieldCircleIllustration as PureShieldCircleIllustration};
