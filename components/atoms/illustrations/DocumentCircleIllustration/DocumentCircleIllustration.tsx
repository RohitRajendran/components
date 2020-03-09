/** @module DocumentCircleIllustration */
import React, {FC, memo, useState} from 'react';

type DocumentCircleIllustrationProps = {
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

/** Renders an document illustration. */
const DocumentCircleIllustration: FC<DocumentCircleIllustrationProps> = ({
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
        <title id={`${id}-title`}>Document Illustration</title>
        <desc id={`${id}-description`}>
          Illustration of documents beside a shield
        </desc>
        <clipPath id={`${id}-a`}>
          <path
            d="m32.75 41.76h74.52v56.49h-74.52z"
            transform="matrix(.28033166 -.9599032 .9599032 .28033166 -16.81 117.58)"
          />
        </clipPath>
        <clipPath id={`${id}-b`}>
          <path d="m104.77 23.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-c`}>
          <path d="m104.77 27.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-d`}>
          <path d="m104.77 31.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-e`}>
          <path d="m104.77 35.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-f`}>
          <path d="m104.77 39.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-g`}>
          <path d="m104.77 43.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-h`}>
          <path d="m104.77 47.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-i`}>
          <path d="m104.77 51.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-j`}>
          <path d="m104.77 55.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-k`}>
          <path d="m104.77 59.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-l`}>
          <path d="m104.77 63.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-m`}>
          <path d="m104.77 67.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-n`}>
          <path d="m104.77 71.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-o`}>
          <path d="m104.77 75.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-p`}>
          <path d="m104.77 79.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-q`}>
          <path d="m104.77 83.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-r`}>
          <path d="m104.77 87.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-s`}>
          <path d="m104.77 91.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-t`}>
          <path d="m104.77 95.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-u`}>
          <path d="m104.77 99.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-v`}>
          <path d="m104.77 103.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-w`}>
          <path d="m104.77 107.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-x`}>
          <path d="m104.77 111.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-y`}>
          <path d="m100.77 23.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-z`}>
          <path d="m100.77 27.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-A`}>
          <path d="m100.77 31.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-B`}>
          <path d="m100.77 35.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-C`}>
          <path d="m100.77 39.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-D`}>
          <path d="m100.77 43.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-E`}>
          <path d="m100.77 47.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-F`}>
          <path d="m100.77 51.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-G`}>
          <path d="m100.77 55.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-H`}>
          <path d="m100.77 59.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-I`}>
          <path d="m100.77 63.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-J`}>
          <path d="m100.77 67.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-K`}>
          <path d="m100.77 71.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-L`}>
          <path d="m100.77 75.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-M`}>
          <path d="m100.77 79.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-N`}>
          <path d="m100.77 83.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-O`}>
          <path d="m100.77 87.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-P`}>
          <path d="m100.77 91.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-Q`}>
          <path d="m100.77 95.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-R`}>
          <path d="m100.77 99.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-S`}>
          <path d="m100.77 103.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-T`}>
          <path d="m100.77 107.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-U`}>
          <path d="m100.77 111.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-V`}>
          <path d="m96.77 23.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-W`}>
          <path d="m96.77 27.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-X`}>
          <path d="m96.77 31.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-Y`}>
          <path d="m96.77 35.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-Z`}>
          <path d="m96.77 39.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aa`}>
          <path d="m96.77 43.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ab`}>
          <path d="m96.77 47.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ac`}>
          <path d="m96.77 51.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ad`}>
          <path d="m96.77 55.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ae`}>
          <path d="m96.77 59.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-af`}>
          <path d="m96.77 63.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ag`}>
          <path d="m96.77 67.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ah`}>
          <path d="m96.77 71.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ai`}>
          <path d="m96.77 75.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aj`}>
          <path d="m96.77 79.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ak`}>
          <path d="m96.77 83.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-al`}>
          <path d="m96.77 87.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-am`}>
          <path d="m96.77 91.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-an`}>
          <path d="m96.77 95.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ao`}>
          <path d="m96.77 99.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ap`}>
          <path d="m96.77 103.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aq`}>
          <path d="m96.77 107.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ar`}>
          <path d="m96.77 111.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-as`}>
          <path d="m92.77 23.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-at`}>
          <path d="m92.77 27.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-au`}>
          <path d="m92.77 31.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-av`}>
          <path d="m92.77 35.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aw`}>
          <path d="m92.77 39.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ax`}>
          <path d="m92.77 43.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ay`}>
          <path d="m92.77 47.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-az`}>
          <path d="m92.77 51.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aA`}>
          <path d="m92.77 55.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aB`}>
          <path d="m92.77 59.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aC`}>
          <path d="m92.77 63.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aD`}>
          <path d="m92.77 67.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aE`}>
          <path d="m92.77 71.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aF`}>
          <path d="m92.77 75.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aG`}>
          <path d="m92.77 79.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aH`}>
          <path d="m92.77 83.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aI`}>
          <path d="m92.77 87.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aJ`}>
          <path d="m92.77 91.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aK`}>
          <path d="m92.77 95.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aL`}>
          <path d="m92.77 99.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aM`}>
          <path d="m92.77 103.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aN`}>
          <path d="m92.77 107.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aO`}>
          <path d="m92.77 111.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aP`}>
          <path d="m88.77 23.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aQ`}>
          <path d="m88.77 27.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aR`}>
          <path d="m88.77 31.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aS`}>
          <path d="m88.77 35.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aT`}>
          <path d="m88.77 39.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aU`}>
          <path d="m88.77 43.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aV`}>
          <path d="m88.77 47.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aW`}>
          <path d="m88.77 51.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aX`}>
          <path d="m88.77 55.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aY`}>
          <path d="m88.77 59.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aZ`}>
          <path d="m88.77 63.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-a0`}>
          <path d="m88.77 67.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-a1`}>
          <path d="m88.77 71.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-a2`}>
          <path d="m88.77 75.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-a3`}>
          <path d="m88.77 79.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-a4`}>
          <path d="m88.77 83.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-a5`}>
          <path d="m88.77 87.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-a6`}>
          <path d="m88.77 91.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-a7`}>
          <path d="m88.77 95.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-a8`}>
          <path d="m88.77 99.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-a9`}>
          <path d="m88.77 103.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ba`}>
          <path d="m88.77 107.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bb`}>
          <path d="m88.77 111.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bc`}>
          <path d="m84.77 23.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bd`}>
          <path d="m84.77 27.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-be`}>
          <path d="m84.77 31.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bf`}>
          <path d="m84.77 35.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bg`}>
          <path d="m84.77 39.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bh`}>
          <path d="m84.77 43.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bi`}>
          <path d="m84.77 47.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bj`}>
          <path d="m84.77 51.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bk`}>
          <path d="m84.77 55.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bl`}>
          <path d="m84.77 59.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bm`}>
          <path d="m84.77 63.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bn`}>
          <path d="m84.77 67.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bo`}>
          <path d="m84.77 71.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bp`}>
          <path d="m84.77 75.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bq`}>
          <path d="m84.77 79.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-br`}>
          <path d="m84.77 83.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bs`}>
          <path d="m84.77 87.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bt`}>
          <path d="m84.77 91.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bu`}>
          <path d="m84.77 95.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bv`}>
          <path d="m84.77 99.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bw`}>
          <path d="m84.77 103.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bx`}>
          <path d="m84.77 107.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-by`}>
          <path d="m84.77 111.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bz`}>
          <path d="m80.77 23.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bA`}>
          <path d="m80.77 27.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bB`}>
          <path d="m80.77 31.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bC`}>
          <path d="m80.77 35.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bD`}>
          <path d="m80.77 39.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bE`}>
          <path d="m80.77 43.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bF`}>
          <path d="m80.77 47.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bG`}>
          <path d="m80.77 51.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bH`}>
          <path d="m80.77 55.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bI`}>
          <path d="m80.77 59.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bJ`}>
          <path d="m80.77 63.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bK`}>
          <path d="m80.77 67.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bL`}>
          <path d="m80.77 71.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bM`}>
          <path d="m80.77 75.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bN`}>
          <path d="m80.77 79.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bO`}>
          <path d="m80.77 83.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bP`}>
          <path d="m80.77 87.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bQ`}>
          <path d="m80.77 91.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bR`}>
          <path d="m80.77 95.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bS`}>
          <path d="m80.77 99.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bT`}>
          <path d="m80.77 103.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bU`}>
          <path d="m80.77 107.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bV`}>
          <path d="m80.77 111.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bW`}>
          <path d="m76.77 23.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bX`}>
          <path d="m76.77 27.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bY`}>
          <path d="m76.77 31.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bZ`}>
          <path d="m76.77 35.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-b0`}>
          <path d="m76.77 39.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-b1`}>
          <path d="m76.77 43.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-b2`}>
          <path d="m76.77 47.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-b3`}>
          <path d="m76.77 51.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-b4`}>
          <path d="m76.77 55.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-b5`}>
          <path d="m76.77 59.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-b6`}>
          <path d="m76.77 63.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-b7`}>
          <path d="m76.77 67.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-b8`}>
          <path d="m76.77 71.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-b9`}>
          <path d="m76.77 75.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ca`}>
          <path d="m76.77 79.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cb`}>
          <path d="m76.77 83.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cc`}>
          <path d="m76.77 87.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cd`}>
          <path d="m76.77 91.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ce`}>
          <path d="m76.77 95.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cf`}>
          <path d="m76.77 99.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cg`}>
          <path d="m76.77 103.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ch`}>
          <path d="m76.77 107.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ci`}>
          <path d="m76.77 111.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cj`}>
          <path d="m72.77 23.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ck`}>
          <path d="m72.77 27.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cl`}>
          <path d="m72.77 31.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cm`}>
          <path d="m72.77 35.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cn`}>
          <path d="m72.77 39.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-co`}>
          <path d="m72.77 43.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cp`}>
          <path d="m72.77 47.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cq`}>
          <path d="m72.77 51.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cr`}>
          <path d="m72.77 55.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cs`}>
          <path d="m72.77 59.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ct`}>
          <path d="m72.77 63.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cu`}>
          <path d="m72.77 67.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cv`}>
          <path d="m72.77 71.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cw`}>
          <path d="m72.77 75.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cx`}>
          <path d="m72.77 79.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cy`}>
          <path d="m72.77 83.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cz`}>
          <path d="m72.77 87.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cA`}>
          <path d="m72.77 91.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cB`}>
          <path d="m72.77 95.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cC`}>
          <path d="m72.77 99.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cD`}>
          <path d="m72.77 103.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cE`}>
          <path d="m72.77 107.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cF`}>
          <path d="m72.77 111.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cG`}>
          <path d="m68.77 23.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cH`}>
          <path d="m68.77 27.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cI`}>
          <path d="m68.77 31.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cJ`}>
          <path d="m68.77 35.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cK`}>
          <path d="m68.77 39.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cL`}>
          <path d="m68.77 43.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cM`}>
          <path d="m68.77 47.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cN`}>
          <path d="m68.77 51.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cO`}>
          <path d="m68.77 55.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cP`}>
          <path d="m68.77 59.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cQ`}>
          <path d="m68.77 63.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cR`}>
          <path d="m68.77 67.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cS`}>
          <path d="m68.77 71.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cT`}>
          <path d="m68.77 75.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cU`}>
          <path d="m68.77 79.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cV`}>
          <path d="m68.77 83.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cW`}>
          <path d="m68.77 87.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cX`}>
          <path d="m68.77 91.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cY`}>
          <path d="m68.77 95.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cZ`}>
          <path d="m68.77 99.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-c0`}>
          <path d="m68.77 103.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-c1`}>
          <path d="m68.77 107.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-c2`}>
          <path d="m68.77 111.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-c3`}>
          <path d="m64.77 23.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-c4`}>
          <path d="m64.77 27.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-c5`}>
          <path d="m64.77 31.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-c6`}>
          <path d="m64.77 35.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-c7`}>
          <path d="m64.77 39.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-c8`}>
          <path d="m64.77 43.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-c9`}>
          <path d="m64.77 47.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-da`}>
          <path d="m64.77 51.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-db`}>
          <path d="m64.77 55.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dc`}>
          <path d="m64.77 59.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dd`}>
          <path d="m64.77 63.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-de`}>
          <path d="m64.77 67.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-df`}>
          <path d="m64.77 71.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dg`}>
          <path d="m64.77 75.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dh`}>
          <path d="m64.77 79.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-di`}>
          <path d="m64.77 83.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dj`}>
          <path d="m64.77 87.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dk`}>
          <path d="m64.77 91.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dl`}>
          <path d="m64.77 95.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dm`}>
          <path d="m64.77 99.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dn`}>
          <path d="m64.77 103.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-do`}>
          <path d="m64.77 107.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dp`}>
          <path d="m64.77 111.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dq`}>
          <path d="m60.77 23.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dr`}>
          <path d="m60.77 27.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ds`}>
          <path d="m60.77 31.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dt`}>
          <path d="m60.77 35.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-du`}>
          <path d="m60.77 39.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dv`}>
          <path d="m60.77 43.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dw`}>
          <path d="m60.77 47.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dx`}>
          <path d="m60.77 51.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dy`}>
          <path d="m60.77 55.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dz`}>
          <path d="m60.77 59.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dA`}>
          <path d="m60.77 63.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dB`}>
          <path d="m60.77 67.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dC`}>
          <path d="m60.77 71.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dD`}>
          <path d="m60.77 75.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dE`}>
          <path d="m60.77 79.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dF`}>
          <path d="m60.77 83.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dG`}>
          <path d="m60.77 87.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dH`}>
          <path d="m60.77 91.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dI`}>
          <path d="m60.77 95.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dJ`}>
          <path d="m60.77 99.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dK`}>
          <path d="m60.77 103.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dL`}>
          <path d="m60.77 107.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dM`}>
          <path d="m60.77 111.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dN`}>
          <path d="m56.77 23.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dO`}>
          <path d="m56.77 27.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dP`}>
          <path d="m56.77 31.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dQ`}>
          <path d="m56.77 35.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dR`}>
          <path d="m56.77 39.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dS`}>
          <path d="m56.77 43.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dT`}>
          <path d="m56.77 47.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dU`}>
          <path d="m56.77 51.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dV`}>
          <path d="m56.77 55.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dW`}>
          <path d="m56.77 59.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dX`}>
          <path d="m56.77 63.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dY`}>
          <path d="m56.77 67.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dZ`}>
          <path d="m56.77 71.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-d0`}>
          <path d="m56.77 75.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-d1`}>
          <path d="m56.77 79.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-d2`}>
          <path d="m56.77 83.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-d3`}>
          <path d="m56.77 87.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-d4`}>
          <path d="m56.77 91.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-d5`}>
          <path d="m56.77 95.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-d6`}>
          <path d="m56.77 99.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-d7`}>
          <path d="m56.77 103.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-d8`}>
          <path d="m56.77 107.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-d9`}>
          <path d="m56.77 111.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ea`}>
          <path d="m52.77 23.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-eb`}>
          <path d="m52.77 27.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ec`}>
          <path d="m52.77 31.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ed`}>
          <path d="m52.77 35.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ee`}>
          <path d="m52.77 39.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ef`}>
          <path d="m52.77 43.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-eg`}>
          <path d="m52.77 47.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-eh`}>
          <path d="m52.77 51.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ei`}>
          <path d="m52.77 55.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ej`}>
          <path d="m52.77 59.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ek`}>
          <path d="m52.77 63.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-el`}>
          <path d="m52.77 67.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-em`}>
          <path d="m52.77 71.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-en`}>
          <path d="m52.77 75.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-eo`}>
          <path d="m52.77 79.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ep`}>
          <path d="m52.77 83.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-eq`}>
          <path d="m52.77 87.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-er`}>
          <path d="m52.77 91.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-es`}>
          <path d="m52.77 95.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-et`}>
          <path d="m52.77 99.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-eu`}>
          <path d="m52.77 103.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ev`}>
          <path d="m52.77 107.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ew`}>
          <path d="m52.77 111.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ex`}>
          <path d="m48.77 23.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ey`}>
          <path d="m48.77 27.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ez`}>
          <path d="m48.77 31.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-eA`}>
          <path d="m48.77 35.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-eB`}>
          <path d="m48.77 39.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-eC`}>
          <path d="m48.77 43.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-eD`}>
          <path d="m48.77 47.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-eE`}>
          <path d="m48.77 51.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-eF`}>
          <path d="m48.77 55.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-eG`}>
          <path d="m48.77 59.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-eH`}>
          <path d="m48.77 63.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-eI`}>
          <path d="m48.77 67.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-eJ`}>
          <path d="m48.77 71.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-eK`}>
          <path d="m48.77 75.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-eL`}>
          <path d="m48.77 79.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-eM`}>
          <path d="m48.77 83.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-eN`}>
          <path d="m48.77 87.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-eO`}>
          <path d="m48.77 91.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-eP`}>
          <path d="m48.77 95.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-eQ`}>
          <path d="m48.77 99.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-eR`}>
          <path d="m48.77 103.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-eS`}>
          <path d="m48.77 107.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-eT`}>
          <path d="m48.77 111.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-eU`}>
          <path d="m44.77 23.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-eV`}>
          <path d="m44.77 27.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-eW`}>
          <path d="m44.77 31.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-eX`}>
          <path d="m44.77 35.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-eY`}>
          <path d="m44.77 39.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-eZ`}>
          <path d="m44.77 43.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-e0`}>
          <path d="m44.77 47.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-e1`}>
          <path d="m44.77 51.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-e2`}>
          <path d="m44.77 55.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-e3`}>
          <path d="m44.77 59.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-e4`}>
          <path d="m44.77 63.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-e5`}>
          <path d="m44.77 67.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-e6`}>
          <path d="m44.77 71.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-e7`}>
          <path d="m44.77 75.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-e8`}>
          <path d="m44.77 79.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-e9`}>
          <path d="m44.77 83.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fa`}>
          <path d="m44.77 87.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fb`}>
          <path d="m44.77 91.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fc`}>
          <path d="m44.77 95.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fd`}>
          <path d="m44.77 99.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fe`}>
          <path d="m44.77 103.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ff`}>
          <path d="m44.77 107.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fg`}>
          <path d="m44.77 111.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fh`}>
          <path d="m40.77 23.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fi`}>
          <path d="m40.77 27.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fj`}>
          <path d="m40.77 31.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fk`}>
          <path d="m40.77 35.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fl`}>
          <path d="m40.77 39.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fm`}>
          <path d="m40.77 43.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fn`}>
          <path d="m40.77 47.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fo`}>
          <path d="m40.77 51.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fp`}>
          <path d="m40.77 55.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fq`}>
          <path d="m40.77 59.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fr`}>
          <path d="m40.77 63.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fs`}>
          <path d="m40.77 67.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ft`}>
          <path d="m40.77 71.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fu`}>
          <path d="m40.77 75.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fv`}>
          <path d="m40.77 79.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fw`}>
          <path d="m40.77 83.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fx`}>
          <path d="m40.77 87.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fy`}>
          <path d="m40.77 91.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fz`}>
          <path d="m40.77 95.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fA`}>
          <path d="m40.77 99.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fB`}>
          <path d="m40.77 103.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fC`}>
          <path d="m40.77 107.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fD`}>
          <path d="m40.77 111.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fE`}>
          <path d="m36.77 23.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fF`}>
          <path d="m36.77 27.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fG`}>
          <path d="m36.77 31.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fH`}>
          <path d="m36.77 35.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fI`}>
          <path d="m36.77 39.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fJ`}>
          <path d="m36.77 43.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fK`}>
          <path d="m36.77 47.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fL`}>
          <path d="m36.77 51.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fM`}>
          <path d="m36.77 55.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fN`}>
          <path d="m36.77 59.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fO`}>
          <path d="m36.77 63.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fP`}>
          <path d="m36.77 67.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fQ`}>
          <path d="m36.77 71.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fR`}>
          <path d="m36.77 75.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fS`}>
          <path d="m36.77 79.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fT`}>
          <path d="m36.77 83.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fU`}>
          <path d="m36.77 87.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fV`}>
          <path d="m36.77 91.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fW`}>
          <path d="m36.77 95.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fX`}>
          <path d="m36.77 99.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fY`}>
          <path d="m36.77 103.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-fZ`}>
          <path d="m36.77 107.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-f0`}>
          <path d="m36.77 111.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-f1`}>
          <path d="m32.77 23.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-f2`}>
          <path d="m32.77 27.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-f3`}>
          <path d="m32.77 31.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-f4`}>
          <path d="m32.77 35.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-f5`}>
          <path d="m32.77 39.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-f6`}>
          <path d="m32.77 43.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-f7`}>
          <path d="m32.77 47.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-f8`}>
          <path d="m32.77 51.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-f9`}>
          <path d="m32.77 55.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ga`}>
          <path d="m32.77 59.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-gb`}>
          <path d="m32.77 63.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-gc`}>
          <path d="m32.77 67.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-gd`}>
          <path d="m32.77 71.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ge`}>
          <path d="m32.77 75.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-gf`}>
          <path d="m32.77 79.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-gg`}>
          <path d="m32.77 83.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-gh`}>
          <path d="m32.77 87.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-gi`}>
          <path d="m32.77 91.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-gj`}>
          <path d="m32.77 95.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-gk`}>
          <path d="m32.77 99.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-gl`}>
          <path d="m32.77 103.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-gm`}>
          <path d="m32.77 107.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-gn`}>
          <path d="m32.77 111.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-go`}>
          <path d="m28.77 23.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-gp`}>
          <path d="m28.77 27.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-gq`}>
          <path d="m28.77 31.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-gr`}>
          <path d="m28.77 35.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-gs`}>
          <path d="m28.77 39.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-gt`}>
          <path d="m28.77 43.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-gu`}>
          <path d="m28.77 47.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-gv`}>
          <path d="m28.77 51.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-gw`}>
          <path d="m28.77 55.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-gx`}>
          <path d="m28.77 59.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-gy`}>
          <path d="m28.77 63.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-gz`}>
          <path d="m28.77 67.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-gA`}>
          <path d="m28.77 71.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-gB`}>
          <path d="m28.77 75.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-gC`}>
          <path d="m28.77 79.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-gD`}>
          <path d="m28.77 83.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-gE`}>
          <path d="m28.77 87.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-gF`}>
          <path d="m28.77 91.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-gG`}>
          <path d="m28.77 95.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-gH`}>
          <path d="m28.77 99.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-gI`}>
          <path d="m28.77 103.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-gJ`}>
          <path d="m28.77 107.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-gK`}>
          <path d="m28.77 111.14h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-gL`}>
          <path d="m39.89 32.2v74.51-38.71a60.13 60.13 0 0 0 6.46 12.3v-5.3h19.83v23.6a60.29 60.29 0 0 0 30.2 8.07v-74.47zm6.46 7h25v2.1h-25zm0 28.3v-2.1h34.46v2.1zm43.17 31.81h-19.31v-2.1h19.31zm0-7.85h-19.31v-2.1h19.31zm0-7.16h-19.31v-2.1h19.31zm0-7.16h-19.31v-2.14h19.31zm0-16.21h-43.17v-2.1h43.17zm0-6.55h-43.17v-2.1h43.17zm0-6.55h-43.17v-2.1h43.17z" />
        </clipPath>
        <clipPath id={`${id}-gM`}>
          <path d="m66.18 99.31h-19.83v-19a60.21 60.21 0 0 1 -6.46-12.31v38.68h56.49a60.29 60.29 0 0 1 -30.2-8.07z" />
        </clipPath>
        <clipPath id={`${id}-gN`}>
          <path d="m48 114.61c.13 0 7-3.47 7-3.47a28.16 28.16 0 0 0 15.32-25.08v-17.35c0-.39-22.25-8.64-22.45-8.57 0 0-22.44 8.18-22.44 8.57v17.29a28.22 28.22 0 0 0 15.43 25.07s6.91 3.54 7.14 3.54z" />
        </clipPath>
        <clipPath id={`${id}-gO`}>
          <path d="m67.96 58.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-gP`}>
          <path d="m67.96 62.21h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-gQ`}>
          <path d="m67.96 65.81h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-gR`}>
          <path d="m67.96 69.41h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-gS`}>
          <path d="m67.96 73.01h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-gT`}>
          <path d="m67.96 76.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-gU`}>
          <path d="m67.96 80.21h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-gV`}>
          <path d="m67.96 83.81h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-gW`}>
          <path d="m67.96 87.41h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-gX`}>
          <path d="m67.96 91.01h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-gY`}>
          <path d="m67.96 94.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-gZ`}>
          <path d="m67.96 98.21h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-g0`}>
          <path d="m67.96 101.81h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-g1`}>
          <path d="m67.96 105.41h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-g2`}>
          <path d="m67.96 109.01h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-g3`}>
          <path d="m67.96 112.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-g4`}>
          <path d="m64.36 58.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-g5`}>
          <path d="m64.36 62.21h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-g6`}>
          <path d="m64.36 65.81h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-g7`}>
          <path d="m64.36 69.41h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-g8`}>
          <path d="m64.36 73.01h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-g9`}>
          <path d="m64.36 76.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-ha`}>
          <path d="m64.36 80.21h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-hb`}>
          <path d="m64.36 83.81h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-hc`}>
          <path d="m64.36 87.41h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-hd`}>
          <path d="m64.36 91.01h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-he`}>
          <path d="m64.36 94.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-hf`}>
          <path d="m64.36 98.21h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-hg`}>
          <path d="m64.36 101.81h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-hh`}>
          <path d="m64.36 105.41h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-hi`}>
          <path d="m64.36 109.01h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-hj`}>
          <path d="m64.36 112.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-hk`}>
          <path d="m60.76 58.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-hl`}>
          <path d="m60.76 62.21h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-hm`}>
          <path d="m60.76 65.81h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-hn`}>
          <path d="m60.76 69.41h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-ho`}>
          <path d="m60.76 73.01h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-hp`}>
          <path d="m60.76 76.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-hq`}>
          <path d="m60.76 80.21h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-hr`}>
          <path d="m60.76 83.81h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-hs`}>
          <path d="m60.76 87.41h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-ht`}>
          <path d="m60.76 91.01h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-hu`}>
          <path d="m60.76 94.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-hv`}>
          <path d="m60.76 98.21h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-hw`}>
          <path d="m60.76 101.81h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-hx`}>
          <path d="m60.76 105.41h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-hy`}>
          <path d="m60.76 109.01h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-hz`}>
          <path d="m60.76 112.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-hA`}>
          <path d="m57.16 58.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-hB`}>
          <path d="m57.16 62.21h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-hC`}>
          <path d="m57.16 65.81h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-hD`}>
          <path d="m57.16 69.41h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-hE`}>
          <path d="m57.16 73.01h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-hF`}>
          <path d="m57.16 76.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-hG`}>
          <path d="m57.16 80.21h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-hH`}>
          <path d="m57.16 83.81h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-hI`}>
          <path d="m57.16 87.41h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-hJ`}>
          <path d="m57.16 91.01h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-hK`}>
          <path d="m57.16 94.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-hL`}>
          <path d="m57.16 98.21h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-hM`}>
          <path d="m57.16 101.81h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-hN`}>
          <path d="m57.16 105.41h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-hO`}>
          <path d="m57.16 109.01h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-hP`}>
          <path d="m57.16 112.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-hQ`}>
          <path d="m53.56 58.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-hR`}>
          <path d="m53.56 62.21h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-hS`}>
          <path d="m53.56 65.81h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-hT`}>
          <path d="m53.56 69.41h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-hU`}>
          <path d="m53.56 73.01h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-hV`}>
          <path d="m53.56 76.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-hW`}>
          <path d="m53.56 80.21h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-hX`}>
          <path d="m53.56 83.81h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-hY`}>
          <path d="m53.56 87.41h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-hZ`}>
          <path d="m53.56 91.01h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-h0`}>
          <path d="m53.56 94.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-h1`}>
          <path d="m53.56 98.21h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-h2`}>
          <path d="m53.56 101.81h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-h3`}>
          <path d="m53.56 105.41h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-h4`}>
          <path d="m53.56 109.01h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-h5`}>
          <path d="m53.56 112.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-h6`}>
          <path d="m49.96 58.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-h7`}>
          <path d="m49.96 62.21h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-h8`}>
          <path d="m49.96 65.81h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-h9`}>
          <path d="m49.96 69.41h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-ia`}>
          <path d="m49.96 73.01h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-ib`}>
          <path d="m49.96 76.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-ic`}>
          <path d="m49.96 80.21h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-id`}>
          <path d="m49.96 83.81h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-ie`}>
          <path d="m49.96 87.41h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-if`}>
          <path d="m49.96 91.01h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-ig`}>
          <path d="m49.96 94.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-ih`}>
          <path d="m49.96 98.21h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-ii`}>
          <path d="m49.96 101.81h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-ij`}>
          <path d="m49.96 105.41h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-ik`}>
          <path d="m49.96 109.01h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-il`}>
          <path d="m49.96 112.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-im`}>
          <path d="m46.36 58.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-in`}>
          <path d="m46.36 62.21h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-io`}>
          <path d="m46.36 65.81h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-ip`}>
          <path d="m46.36 69.41h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-iq`}>
          <path d="m46.36 73.01h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-ir`}>
          <path d="m46.36 76.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-is`}>
          <path d="m46.36 80.21h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-it`}>
          <path d="m46.36 83.81h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-iu`}>
          <path d="m46.36 87.41h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-iv`}>
          <path d="m46.36 91.01h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-iw`}>
          <path d="m46.36 94.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-ix`}>
          <path d="m46.36 98.21h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-iy`}>
          <path d="m46.36 101.81h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-iz`}>
          <path d="m46.36 105.41h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-iA`}>
          <path d="m46.36 109.01h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-iB`}>
          <path d="m46.36 112.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-iC`}>
          <path d="m42.76 58.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-iD`}>
          <path d="m42.76 62.21h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-iE`}>
          <path d="m42.76 65.81h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-iF`}>
          <path d="m42.76 69.41h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-iG`}>
          <path d="m42.76 73.01h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-iH`}>
          <path d="m42.76 76.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-iI`}>
          <path d="m42.76 80.21h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-iJ`}>
          <path d="m42.76 83.81h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-iK`}>
          <path d="m42.76 87.41h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-iL`}>
          <path d="m42.76 91.01h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-iM`}>
          <path d="m42.76 94.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-iN`}>
          <path d="m42.76 98.21h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-iO`}>
          <path d="m42.76 101.81h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-iP`}>
          <path d="m42.76 105.41h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-iQ`}>
          <path d="m42.76 109.01h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-iR`}>
          <path d="m42.76 112.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-iS`}>
          <path d="m39.16 58.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-iT`}>
          <path d="m39.16 62.21h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-iU`}>
          <path d="m39.16 65.81h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-iV`}>
          <path d="m39.16 69.41h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-iW`}>
          <path d="m39.16 73.01h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-iX`}>
          <path d="m39.16 76.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-iY`}>
          <path d="m39.16 80.21h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-iZ`}>
          <path d="m39.16 83.81h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-i0`}>
          <path d="m39.16 87.41h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-i1`}>
          <path d="m39.16 91.01h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-i2`}>
          <path d="m39.16 94.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-i3`}>
          <path d="m39.16 98.21h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-i4`}>
          <path d="m39.16 101.81h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-i5`}>
          <path d="m39.16 105.41h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-i6`}>
          <path d="m39.16 109.01h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-i7`}>
          <path d="m39.16 112.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-i8`}>
          <path d="m35.56 58.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-i9`}>
          <path d="m35.56 62.21h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-ja`}>
          <path d="m35.56 65.81h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-jb`}>
          <path d="m35.56 69.41h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-jc`}>
          <path d="m35.56 73.01h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-jd`}>
          <path d="m35.56 76.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-je`}>
          <path d="m35.56 80.21h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-jf`}>
          <path d="m35.56 83.81h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-jg`}>
          <path d="m35.56 87.41h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-jh`}>
          <path d="m35.56 91.01h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-ji`}>
          <path d="m35.56 94.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-jj`}>
          <path d="m35.56 98.21h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-jk`}>
          <path d="m35.56 101.81h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-jl`}>
          <path d="m35.56 105.41h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-jm`}>
          <path d="m35.56 109.01h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-jn`}>
          <path d="m35.56 112.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-jo`}>
          <path d="m31.96 58.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-jp`}>
          <path d="m31.96 62.21h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-jq`}>
          <path d="m31.96 65.81h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-jr`}>
          <path d="m31.96 69.41h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-js`}>
          <path d="m31.96 73.01h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-jt`}>
          <path d="m31.96 76.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-ju`}>
          <path d="m31.96 80.21h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-jv`}>
          <path d="m31.96 83.81h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-jw`}>
          <path d="m31.96 87.41h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-jx`}>
          <path d="m31.96 91.01h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-jy`}>
          <path d="m31.96 94.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-jz`}>
          <path d="m31.96 98.21h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-jA`}>
          <path d="m31.96 101.81h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-jB`}>
          <path d="m31.96 105.41h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-jC`}>
          <path d="m31.96 109.01h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-jD`}>
          <path d="m31.96 112.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-jE`}>
          <path d="m28.36 58.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-jF`}>
          <path d="m28.36 62.21h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-jG`}>
          <path d="m28.36 65.81h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-jH`}>
          <path d="m28.36 69.41h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-jI`}>
          <path d="m28.36 73.01h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-jJ`}>
          <path d="m28.36 76.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-jK`}>
          <path d="m28.36 80.21h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-jL`}>
          <path d="m28.36 83.81h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-jM`}>
          <path d="m28.36 87.41h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-jN`}>
          <path d="m28.36 91.01h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-jO`}>
          <path d="m28.36 94.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-jP`}>
          <path d="m28.36 98.21h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-jQ`}>
          <path d="m28.36 101.81h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-jR`}>
          <path d="m28.36 105.41h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-jS`}>
          <path d="m28.36 109.01h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-jT`}>
          <path d="m28.36 112.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-jU`}>
          <path d="m24.76 58.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-jV`}>
          <path d="m24.76 62.21h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-jW`}>
          <path d="m24.76 65.81h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-jX`}>
          <path d="m24.76 69.41h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-jY`}>
          <path d="m24.76 73.01h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-jZ`}>
          <path d="m24.76 76.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-j0`}>
          <path d="m24.76 80.21h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-j1`}>
          <path d="m24.76 83.81h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-j2`}>
          <path d="m24.76 87.41h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-j3`}>
          <path d="m24.76 91.01h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-j4`}>
          <path d="m24.76 94.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-j5`}>
          <path d="m24.76 98.21h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-j6`}>
          <path d="m24.76 101.81h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-j7`}>
          <path d="m24.76 105.41h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-j8`}>
          <path d="m24.76 109.01h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-j9`}>
          <path d="m24.76 112.61h3.6v3.6h-3.6z" />
        </clipPath>
        <clipPath id={`${id}-ka`}>
          <path d="m53.74 107.46s-5.79 2.94-5.9 2.94-6-3-6-3a23.83 23.83 0 0 1 -13-21.2v-14.6a15.68 15.68 0 0 1 2.48-1.09q-.72-1.83-1.32-3.75a37.27 37.27 0 0 0 -4.66 1.95v17.29a28.22 28.22 0 0 0 15.46 25.07s6.91 3.54 7 3.54 7-3.47 7-3.47a28.58 28.58 0 0 0 12-11.71c-1.21-.2-2.41-.45-3.59-.75a24.1 24.1 0 0 1 -9.47 8.78z" />
        </clipPath>
        <clipPath id={`${id}-kb`}>
          <path d="m59.98 84.27h-9v-9.01h-6.22v9.01h-9v6.21h9v9h6.22v-9h9z" />
        </clipPath>
        <clipPath id={`${id}-kc`}>
          <path d="m58.25 72.21h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-kd`}>
          <path d="m58.25 76.21h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ke`}>
          <path d="m58.25 80.21h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-kf`}>
          <path d="m58.25 84.21h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-kg`}>
          <path d="m58.25 88.21h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-kh`}>
          <path d="m58.25 92.21h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ki`}>
          <path d="m58.25 96.21h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-kj`}>
          <path d="m54.25 72.21h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-kk`}>
          <path d="m54.25 76.21h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-kl`}>
          <path d="m54.25 80.21h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-km`}>
          <path d="m54.25 84.21h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-kn`}>
          <path d="m54.25 88.21h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ko`}>
          <path d="m54.25 92.21h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-kp`}>
          <path d="m54.25 96.21h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-kq`}>
          <path d="m50.25 72.21h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-kr`}>
          <path d="m50.25 76.21h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ks`}>
          <path d="m50.25 80.21h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-kt`}>
          <path d="m50.25 84.21h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ku`}>
          <path d="m50.25 88.21h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-kv`}>
          <path d="m50.25 92.21h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-kw`}>
          <path d="m50.25 96.21h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-kx`}>
          <path d="m46.25 72.21h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ky`}>
          <path d="m46.25 76.21h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-kz`}>
          <path d="m46.25 80.21h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-kA`}>
          <path d="m46.25 84.21h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-kB`}>
          <path d="m46.25 88.21h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-kC`}>
          <path d="m46.25 92.21h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-kD`}>
          <path d="m46.25 96.21h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-kE`}>
          <path d="m42.25 72.21h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-kF`}>
          <path d="m42.25 76.21h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-kG`}>
          <path d="m42.25 80.21h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-kH`}>
          <path d="m42.25 84.21h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-kI`}>
          <path d="m42.25 88.21h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-kJ`}>
          <path d="m42.25 92.21h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-kK`}>
          <path d="m42.25 96.21h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-kL`}>
          <path d="m38.25 72.21h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-kM`}>
          <path d="m38.25 76.21h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-kN`}>
          <path d="m38.25 80.21h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-kO`}>
          <path d="m38.25 84.21h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-kP`}>
          <path d="m38.25 88.21h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-kQ`}>
          <path d="m38.25 92.21h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-kR`}>
          <path d="m38.25 96.21h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-kS`}>
          <path d="m34.25 72.21h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-kT`}>
          <path d="m34.25 76.21h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-kU`}>
          <path d="m34.25 80.21h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-kV`}>
          <path d="m34.25 84.21h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-kW`}>
          <path d="m34.25 88.21h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-kX`}>
          <path d="m34.25 92.21h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-kY`}>
          <path d="m34.25 96.21h4v4h-4z" />
        </clipPath>
        <circle cx="70" cy="70" fill="#10004c" r="70" />
        <path
          d="m32.75 41.76h74.52v56.49h-74.52z"
          fill="#feca1e"
          transform="matrix(.28033166 -.9599032 .9599032 .28033166 -16.81 117.58)"
        />
        <g clipPath={`url(#${id}-a)`} fill="#f17732">
          <g clipPath={`url(#${id}-b)`}>
            <circle cx="107.77" cy="27.14" r=".35" />
            <circle cx="105.77" cy="27.14" r=".35" />
            <circle cx="108.77" cy="25.14" r=".35" />
            <circle cx="106.77" cy="25.14" r=".35" />
            <circle cx="104.77" cy="25.14" r=".35" />
            <circle cx="107.77" cy="23.14" r=".35" />
            <circle cx="105.77" cy="23.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-c)`}>
            <circle cx="107.77" cy="31.14" r=".35" />
            <circle cx="105.77" cy="31.14" r=".35" />
            <circle cx="108.77" cy="29.14" r=".35" />
            <circle cx="106.77" cy="29.14" r=".35" />
            <circle cx="104.77" cy="29.14" r=".35" />
            <circle cx="107.77" cy="27.14" r=".35" />
            <circle cx="105.77" cy="27.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-d)`}>
            <circle cx="107.77" cy="35.14" r=".35" />
            <circle cx="105.77" cy="35.14" r=".35" />
            <circle cx="108.77" cy="33.14" r=".35" />
            <circle cx="106.77" cy="33.14" r=".35" />
            <circle cx="104.77" cy="33.14" r=".35" />
            <circle cx="107.77" cy="31.14" r=".35" />
            <circle cx="105.77" cy="31.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-e)`}>
            <circle cx="107.77" cy="39.14" r=".35" />
            <circle cx="105.77" cy="39.14" r=".35" />
            <circle cx="108.77" cy="37.14" r=".35" />
            <circle cx="106.77" cy="37.14" r=".35" />
            <circle cx="104.77" cy="37.14" r=".35" />
            <circle cx="107.77" cy="35.14" r=".35" />
            <circle cx="105.77" cy="35.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-f)`}>
            <circle cx="107.77" cy="43.14" r=".35" />
            <circle cx="105.77" cy="43.14" r=".35" />
            <circle cx="108.77" cy="41.14" r=".35" />
            <circle cx="106.77" cy="41.14" r=".35" />
            <circle cx="104.77" cy="41.14" r=".35" />
            <circle cx="107.77" cy="39.14" r=".35" />
            <circle cx="105.77" cy="39.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-g)`}>
            <circle cx="107.77" cy="47.14" r=".35" />
            <circle cx="105.77" cy="47.14" r=".35" />
            <circle cx="108.77" cy="45.14" r=".35" />
            <circle cx="106.77" cy="45.14" r=".35" />
            <circle cx="104.77" cy="45.14" r=".35" />
            <circle cx="107.77" cy="43.14" r=".35" />
            <circle cx="105.77" cy="43.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-h)`}>
            <circle cx="107.77" cy="51.14" r=".35" />
            <circle cx="105.77" cy="51.14" r=".35" />
            <circle cx="108.77" cy="49.14" r=".35" />
            <circle cx="106.77" cy="49.14" r=".35" />
            <circle cx="104.77" cy="49.14" r=".35" />
            <circle cx="107.77" cy="47.14" r=".35" />
            <circle cx="105.77" cy="47.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-i)`}>
            <circle cx="107.77" cy="55.14" r=".35" />
            <circle cx="105.77" cy="55.14" r=".35" />
            <circle cx="108.77" cy="53.14" r=".35" />
            <circle cx="106.77" cy="53.14" r=".35" />
            <circle cx="104.77" cy="53.14" r=".35" />
            <circle cx="107.77" cy="51.14" r=".35" />
            <circle cx="105.77" cy="51.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-j)`}>
            <circle cx="107.77" cy="59.14" r=".35" />
            <circle cx="105.77" cy="59.14" r=".35" />
            <circle cx="108.77" cy="57.14" r=".35" />
            <circle cx="106.77" cy="57.14" r=".35" />
            <circle cx="104.77" cy="57.14" r=".35" />
            <circle cx="107.77" cy="55.14" r=".35" />
            <circle cx="105.77" cy="55.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-k)`}>
            <circle cx="107.77" cy="63.14" r=".35" />
            <circle cx="105.77" cy="63.14" r=".35" />
            <circle cx="108.77" cy="61.14" r=".35" />
            <circle cx="106.77" cy="61.14" r=".35" />
            <circle cx="104.77" cy="61.14" r=".35" />
            <circle cx="107.77" cy="59.14" r=".35" />
            <circle cx="105.77" cy="59.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-l)`}>
            <circle cx="107.77" cy="67.14" r=".35" />
            <circle cx="105.77" cy="67.14" r=".35" />
            <circle cx="108.77" cy="65.14" r=".35" />
            <circle cx="106.77" cy="65.14" r=".35" />
            <circle cx="104.77" cy="65.14" r=".35" />
            <circle cx="107.77" cy="63.14" r=".35" />
            <circle cx="105.77" cy="63.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-m)`}>
            <circle cx="107.77" cy="71.14" r=".35" />
            <circle cx="105.77" cy="71.14" r=".35" />
            <circle cx="108.77" cy="69.14" r=".35" />
            <circle cx="106.77" cy="69.14" r=".35" />
            <circle cx="104.77" cy="69.14" r=".35" />
            <circle cx="107.77" cy="67.14" r=".35" />
            <circle cx="105.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-n)`}>
            <circle cx="107.77" cy="75.14" r=".35" />
            <circle cx="105.77" cy="75.14" r=".35" />
            <circle cx="108.77" cy="73.14" r=".35" />
            <circle cx="106.77" cy="73.14" r=".35" />
            <circle cx="104.77" cy="73.14" r=".35" />
            <circle cx="107.77" cy="71.14" r=".35" />
            <circle cx="105.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-o)`}>
            <circle cx="107.77" cy="79.14" r=".35" />
            <circle cx="105.77" cy="79.14" r=".35" />
            <circle cx="108.77" cy="77.14" r=".35" />
            <circle cx="106.77" cy="77.14" r=".35" />
            <circle cx="104.77" cy="77.14" r=".35" />
            <circle cx="107.77" cy="75.14" r=".35" />
            <circle cx="105.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-p)`}>
            <circle cx="107.77" cy="83.14" r=".35" />
            <circle cx="105.77" cy="83.14" r=".35" />
            <circle cx="108.77" cy="81.14" r=".35" />
            <circle cx="106.77" cy="81.14" r=".35" />
            <circle cx="104.77" cy="81.14" r=".35" />
            <circle cx="107.77" cy="79.14" r=".35" />
            <circle cx="105.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-q)`}>
            <circle cx="107.77" cy="87.14" r=".35" />
            <circle cx="105.77" cy="87.14" r=".35" />
            <circle cx="108.77" cy="85.14" r=".35" />
            <circle cx="106.77" cy="85.14" r=".35" />
            <circle cx="104.77" cy="85.14" r=".35" />
            <circle cx="107.77" cy="83.14" r=".35" />
            <circle cx="105.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-r)`}>
            <circle cx="107.77" cy="91.14" r=".35" />
            <circle cx="105.77" cy="91.14" r=".35" />
            <circle cx="108.77" cy="89.14" r=".35" />
            <circle cx="106.77" cy="89.14" r=".35" />
            <circle cx="104.77" cy="89.14" r=".35" />
            <circle cx="107.77" cy="87.14" r=".35" />
            <circle cx="105.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-s)`}>
            <circle cx="107.77" cy="95.14" r=".35" />
            <circle cx="105.77" cy="95.14" r=".35" />
            <circle cx="108.77" cy="93.14" r=".35" />
            <circle cx="106.77" cy="93.14" r=".35" />
            <circle cx="104.77" cy="93.14" r=".35" />
            <circle cx="107.77" cy="91.14" r=".35" />
            <circle cx="105.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-t)`}>
            <circle cx="107.77" cy="99.14" r=".35" />
            <circle cx="105.77" cy="99.14" r=".35" />
            <circle cx="108.77" cy="97.14" r=".35" />
            <circle cx="106.77" cy="97.14" r=".35" />
            <circle cx="104.77" cy="97.14" r=".35" />
            <circle cx="107.77" cy="95.14" r=".35" />
            <circle cx="105.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-u)`}>
            <circle cx="107.77" cy="103.14" r=".35" />
            <circle cx="105.77" cy="103.14" r=".35" />
            <circle cx="108.77" cy="101.14" r=".35" />
            <circle cx="106.77" cy="101.14" r=".35" />
            <circle cx="104.77" cy="101.14" r=".35" />
            <circle cx="107.77" cy="99.14" r=".35" />
            <circle cx="105.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-v)`}>
            <circle cx="107.77" cy="107.14" r=".35" />
            <circle cx="105.77" cy="107.14" r=".35" />
            <circle cx="108.77" cy="105.14" r=".35" />
            <circle cx="106.77" cy="105.14" r=".35" />
            <circle cx="104.77" cy="105.14" r=".35" />
            <circle cx="107.77" cy="103.14" r=".35" />
            <circle cx="105.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-w)`}>
            <circle cx="107.77" cy="111.14" r=".35" />
            <circle cx="105.77" cy="111.14" r=".35" />
            <circle cx="108.77" cy="109.14" r=".35" />
            <circle cx="106.77" cy="109.14" r=".35" />
            <circle cx="104.77" cy="109.14" r=".35" />
            <circle cx="107.77" cy="107.14" r=".35" />
            <circle cx="105.77" cy="107.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-x)`}>
            <circle cx="107.77" cy="115.14" r=".35" />
            <circle cx="105.77" cy="115.14" r=".35" />
            <circle cx="108.77" cy="113.14" r=".35" />
            <circle cx="106.77" cy="113.14" r=".35" />
            <circle cx="104.77" cy="113.14" r=".35" />
            <circle cx="107.77" cy="111.14" r=".35" />
            <circle cx="105.77" cy="111.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-y)`}>
            <circle cx="103.77" cy="27.14" r=".35" />
            <circle cx="101.77" cy="27.14" r=".35" />
            <circle cx="104.77" cy="25.14" r=".35" />
            <circle cx="102.77" cy="25.14" r=".35" />
            <circle cx="100.77" cy="25.14" r=".35" />
            <circle cx="103.77" cy="23.14" r=".35" />
            <circle cx="101.77" cy="23.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-z)`}>
            <circle cx="103.77" cy="31.14" r=".35" />
            <circle cx="101.77" cy="31.14" r=".35" />
            <circle cx="104.77" cy="29.14" r=".35" />
            <circle cx="102.77" cy="29.14" r=".35" />
            <circle cx="100.77" cy="29.14" r=".35" />
            <circle cx="103.77" cy="27.14" r=".35" />
            <circle cx="101.77" cy="27.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-A)`}>
            <circle cx="103.77" cy="35.14" r=".35" />
            <circle cx="101.77" cy="35.14" r=".35" />
            <circle cx="104.77" cy="33.14" r=".35" />
            <circle cx="102.77" cy="33.14" r=".35" />
            <circle cx="100.77" cy="33.14" r=".35" />
            <circle cx="103.77" cy="31.14" r=".35" />
            <circle cx="101.77" cy="31.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-B)`}>
            <circle cx="103.77" cy="39.14" r=".35" />
            <circle cx="101.77" cy="39.14" r=".35" />
            <circle cx="104.77" cy="37.14" r=".35" />
            <circle cx="102.77" cy="37.14" r=".35" />
            <circle cx="100.77" cy="37.14" r=".35" />
            <circle cx="103.77" cy="35.14" r=".35" />
            <circle cx="101.77" cy="35.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-C)`}>
            <circle cx="103.77" cy="43.14" r=".35" />
            <circle cx="101.77" cy="43.14" r=".35" />
            <circle cx="104.77" cy="41.14" r=".35" />
            <circle cx="102.77" cy="41.14" r=".35" />
            <circle cx="100.77" cy="41.14" r=".35" />
            <circle cx="103.77" cy="39.14" r=".35" />
            <circle cx="101.77" cy="39.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-D)`}>
            <circle cx="103.77" cy="47.14" r=".35" />
            <circle cx="101.77" cy="47.14" r=".35" />
            <circle cx="104.77" cy="45.14" r=".35" />
            <circle cx="102.77" cy="45.14" r=".35" />
            <circle cx="100.77" cy="45.14" r=".35" />
            <circle cx="103.77" cy="43.14" r=".35" />
            <circle cx="101.77" cy="43.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-E)`}>
            <circle cx="103.77" cy="51.14" r=".35" />
            <circle cx="101.77" cy="51.14" r=".35" />
            <circle cx="104.77" cy="49.14" r=".35" />
            <circle cx="102.77" cy="49.14" r=".35" />
            <circle cx="100.77" cy="49.14" r=".35" />
            <circle cx="103.77" cy="47.14" r=".35" />
            <circle cx="101.77" cy="47.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-F)`}>
            <circle cx="103.77" cy="55.14" r=".35" />
            <circle cx="101.77" cy="55.14" r=".35" />
            <circle cx="104.77" cy="53.14" r=".35" />
            <circle cx="102.77" cy="53.14" r=".35" />
            <circle cx="100.77" cy="53.14" r=".35" />
            <circle cx="103.77" cy="51.14" r=".35" />
            <circle cx="101.77" cy="51.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-G)`}>
            <circle cx="103.77" cy="59.14" r=".35" />
            <circle cx="101.77" cy="59.14" r=".35" />
            <circle cx="104.77" cy="57.14" r=".35" />
            <circle cx="102.77" cy="57.14" r=".35" />
            <circle cx="100.77" cy="57.14" r=".35" />
            <circle cx="103.77" cy="55.14" r=".35" />
            <circle cx="101.77" cy="55.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-H)`}>
            <circle cx="103.77" cy="63.14" r=".35" />
            <circle cx="101.77" cy="63.14" r=".35" />
            <circle cx="104.77" cy="61.14" r=".35" />
            <circle cx="102.77" cy="61.14" r=".35" />
            <circle cx="100.77" cy="61.14" r=".35" />
            <circle cx="103.77" cy="59.14" r=".35" />
            <circle cx="101.77" cy="59.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-I)`}>
            <circle cx="103.77" cy="67.14" r=".35" />
            <circle cx="101.77" cy="67.14" r=".35" />
            <circle cx="104.77" cy="65.14" r=".35" />
            <circle cx="102.77" cy="65.14" r=".35" />
            <circle cx="100.77" cy="65.14" r=".35" />
            <circle cx="103.77" cy="63.14" r=".35" />
            <circle cx="101.77" cy="63.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-J)`}>
            <circle cx="103.77" cy="71.14" r=".35" />
            <circle cx="101.77" cy="71.14" r=".35" />
            <circle cx="104.77" cy="69.14" r=".35" />
            <circle cx="102.77" cy="69.14" r=".35" />
            <circle cx="100.77" cy="69.14" r=".35" />
            <circle cx="103.77" cy="67.14" r=".35" />
            <circle cx="101.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-K)`}>
            <circle cx="103.77" cy="75.14" r=".35" />
            <circle cx="101.77" cy="75.14" r=".35" />
            <circle cx="104.77" cy="73.14" r=".35" />
            <circle cx="102.77" cy="73.14" r=".35" />
            <circle cx="100.77" cy="73.14" r=".35" />
            <circle cx="103.77" cy="71.14" r=".35" />
            <circle cx="101.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-L)`}>
            <circle cx="103.77" cy="79.14" r=".35" />
            <circle cx="101.77" cy="79.14" r=".35" />
            <circle cx="104.77" cy="77.14" r=".35" />
            <circle cx="102.77" cy="77.14" r=".35" />
            <circle cx="100.77" cy="77.14" r=".35" />
            <circle cx="103.77" cy="75.14" r=".35" />
            <circle cx="101.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-M)`}>
            <circle cx="103.77" cy="83.14" r=".35" />
            <circle cx="101.77" cy="83.14" r=".35" />
            <circle cx="104.77" cy="81.14" r=".35" />
            <circle cx="102.77" cy="81.14" r=".35" />
            <circle cx="100.77" cy="81.14" r=".35" />
            <circle cx="103.77" cy="79.14" r=".35" />
            <circle cx="101.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-N)`}>
            <circle cx="103.77" cy="87.14" r=".35" />
            <circle cx="101.77" cy="87.14" r=".35" />
            <circle cx="104.77" cy="85.14" r=".35" />
            <circle cx="102.77" cy="85.14" r=".35" />
            <circle cx="100.77" cy="85.14" r=".35" />
            <circle cx="103.77" cy="83.14" r=".35" />
            <circle cx="101.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-O)`}>
            <circle cx="103.77" cy="91.14" r=".35" />
            <circle cx="101.77" cy="91.14" r=".35" />
            <circle cx="104.77" cy="89.14" r=".35" />
            <circle cx="102.77" cy="89.14" r=".35" />
            <circle cx="100.77" cy="89.14" r=".35" />
            <circle cx="103.77" cy="87.14" r=".35" />
            <circle cx="101.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-P)`}>
            <circle cx="103.77" cy="95.14" r=".35" />
            <circle cx="101.77" cy="95.14" r=".35" />
            <circle cx="104.77" cy="93.14" r=".35" />
            <circle cx="102.77" cy="93.14" r=".35" />
            <circle cx="100.77" cy="93.14" r=".35" />
            <circle cx="103.77" cy="91.14" r=".35" />
            <circle cx="101.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-Q)`}>
            <circle cx="103.77" cy="99.14" r=".35" />
            <circle cx="101.77" cy="99.14" r=".35" />
            <circle cx="104.77" cy="97.14" r=".35" />
            <circle cx="102.77" cy="97.14" r=".35" />
            <circle cx="100.77" cy="97.14" r=".35" />
            <circle cx="103.77" cy="95.14" r=".35" />
            <circle cx="101.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-R)`}>
            <circle cx="103.77" cy="103.14" r=".35" />
            <circle cx="101.77" cy="103.14" r=".35" />
            <circle cx="104.77" cy="101.14" r=".35" />
            <circle cx="102.77" cy="101.14" r=".35" />
            <circle cx="100.77" cy="101.14" r=".35" />
            <circle cx="103.77" cy="99.14" r=".35" />
            <circle cx="101.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-S)`}>
            <circle cx="103.77" cy="107.14" r=".35" />
            <circle cx="101.77" cy="107.14" r=".35" />
            <circle cx="104.77" cy="105.14" r=".35" />
            <circle cx="102.77" cy="105.14" r=".35" />
            <circle cx="100.77" cy="105.14" r=".35" />
            <circle cx="103.77" cy="103.14" r=".35" />
            <circle cx="101.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-T)`}>
            <circle cx="103.77" cy="111.14" r=".35" />
            <circle cx="101.77" cy="111.14" r=".35" />
            <circle cx="104.77" cy="109.14" r=".35" />
            <circle cx="102.77" cy="109.14" r=".35" />
            <circle cx="100.77" cy="109.14" r=".35" />
            <circle cx="103.77" cy="107.14" r=".35" />
            <circle cx="101.77" cy="107.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-U)`}>
            <circle cx="103.77" cy="115.14" r=".35" />
            <circle cx="101.77" cy="115.14" r=".35" />
            <circle cx="104.77" cy="113.14" r=".35" />
            <circle cx="102.77" cy="113.14" r=".35" />
            <circle cx="100.77" cy="113.14" r=".35" />
            <circle cx="103.77" cy="111.14" r=".35" />
            <circle cx="101.77" cy="111.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-V)`}>
            <circle cx="99.77" cy="27.14" r=".35" />
            <circle cx="97.77" cy="27.14" r=".35" />
            <circle cx="100.77" cy="25.14" r=".35" />
            <circle cx="98.77" cy="25.14" r=".35" />
            <circle cx="96.77" cy="25.14" r=".35" />
            <circle cx="99.77" cy="23.14" r=".35" />
            <circle cx="97.77" cy="23.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-W)`}>
            <circle cx="99.77" cy="31.14" r=".35" />
            <circle cx="97.77" cy="31.14" r=".35" />
            <circle cx="100.77" cy="29.14" r=".35" />
            <circle cx="98.77" cy="29.14" r=".35" />
            <circle cx="96.77" cy="29.14" r=".35" />
            <circle cx="99.77" cy="27.14" r=".35" />
            <circle cx="97.77" cy="27.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-X)`}>
            <circle cx="99.77" cy="35.14" r=".35" />
            <circle cx="97.77" cy="35.14" r=".35" />
            <circle cx="100.77" cy="33.14" r=".35" />
            <circle cx="98.77" cy="33.14" r=".35" />
            <circle cx="96.77" cy="33.14" r=".35" />
            <circle cx="99.77" cy="31.14" r=".35" />
            <circle cx="97.77" cy="31.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-Y)`}>
            <circle cx="99.77" cy="39.14" r=".35" />
            <circle cx="97.77" cy="39.14" r=".35" />
            <circle cx="100.77" cy="37.14" r=".35" />
            <circle cx="98.77" cy="37.14" r=".35" />
            <circle cx="96.77" cy="37.14" r=".35" />
            <circle cx="99.77" cy="35.14" r=".35" />
            <circle cx="97.77" cy="35.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-Z)`}>
            <circle cx="99.77" cy="43.14" r=".35" />
            <circle cx="97.77" cy="43.14" r=".35" />
            <circle cx="100.77" cy="41.14" r=".35" />
            <circle cx="98.77" cy="41.14" r=".35" />
            <circle cx="96.77" cy="41.14" r=".35" />
            <circle cx="99.77" cy="39.14" r=".35" />
            <circle cx="97.77" cy="39.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aa)`}>
            <circle cx="99.77" cy="47.14" r=".35" />
            <circle cx="97.77" cy="47.14" r=".35" />
            <circle cx="100.77" cy="45.14" r=".35" />
            <circle cx="98.77" cy="45.14" r=".35" />
            <circle cx="96.77" cy="45.14" r=".35" />
            <circle cx="99.77" cy="43.14" r=".35" />
            <circle cx="97.77" cy="43.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ab)`}>
            <circle cx="99.77" cy="51.14" r=".35" />
            <circle cx="97.77" cy="51.14" r=".35" />
            <circle cx="100.77" cy="49.14" r=".35" />
            <circle cx="98.77" cy="49.14" r=".35" />
            <circle cx="96.77" cy="49.14" r=".35" />
            <circle cx="99.77" cy="47.14" r=".35" />
            <circle cx="97.77" cy="47.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ac)`}>
            <circle cx="99.77" cy="55.14" r=".35" />
            <circle cx="97.77" cy="55.14" r=".35" />
            <circle cx="100.77" cy="53.14" r=".35" />
            <circle cx="98.77" cy="53.14" r=".35" />
            <circle cx="96.77" cy="53.14" r=".35" />
            <circle cx="99.77" cy="51.14" r=".35" />
            <circle cx="97.77" cy="51.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ad)`}>
            <circle cx="99.77" cy="59.14" r=".35" />
            <circle cx="97.77" cy="59.14" r=".35" />
            <circle cx="100.77" cy="57.14" r=".35" />
            <circle cx="98.77" cy="57.14" r=".35" />
            <circle cx="96.77" cy="57.14" r=".35" />
            <circle cx="99.77" cy="55.14" r=".35" />
            <circle cx="97.77" cy="55.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ae)`}>
            <circle cx="99.77" cy="63.14" r=".35" />
            <circle cx="97.77" cy="63.14" r=".35" />
            <circle cx="100.77" cy="61.14" r=".35" />
            <circle cx="98.77" cy="61.14" r=".35" />
            <circle cx="96.77" cy="61.14" r=".35" />
            <circle cx="99.77" cy="59.14" r=".35" />
            <circle cx="97.77" cy="59.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-af)`}>
            <circle cx="99.77" cy="67.14" r=".35" />
            <circle cx="97.77" cy="67.14" r=".35" />
            <circle cx="100.77" cy="65.14" r=".35" />
            <circle cx="98.77" cy="65.14" r=".35" />
            <circle cx="96.77" cy="65.14" r=".35" />
            <circle cx="99.77" cy="63.14" r=".35" />
            <circle cx="97.77" cy="63.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ag)`}>
            <circle cx="99.77" cy="71.14" r=".35" />
            <circle cx="97.77" cy="71.14" r=".35" />
            <circle cx="100.77" cy="69.14" r=".35" />
            <circle cx="98.77" cy="69.14" r=".35" />
            <circle cx="96.77" cy="69.14" r=".35" />
            <circle cx="99.77" cy="67.14" r=".35" />
            <circle cx="97.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ah)`}>
            <circle cx="99.77" cy="75.14" r=".35" />
            <circle cx="97.77" cy="75.14" r=".35" />
            <circle cx="100.77" cy="73.14" r=".35" />
            <circle cx="98.77" cy="73.14" r=".35" />
            <circle cx="96.77" cy="73.14" r=".35" />
            <circle cx="99.77" cy="71.14" r=".35" />
            <circle cx="97.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ai)`}>
            <circle cx="99.77" cy="79.14" r=".35" />
            <circle cx="97.77" cy="79.14" r=".35" />
            <circle cx="100.77" cy="77.14" r=".35" />
            <circle cx="98.77" cy="77.14" r=".35" />
            <circle cx="96.77" cy="77.14" r=".35" />
            <circle cx="99.77" cy="75.14" r=".35" />
            <circle cx="97.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aj)`}>
            <circle cx="99.77" cy="83.14" r=".35" />
            <circle cx="97.77" cy="83.14" r=".35" />
            <circle cx="100.77" cy="81.14" r=".35" />
            <circle cx="98.77" cy="81.14" r=".35" />
            <circle cx="96.77" cy="81.14" r=".35" />
            <circle cx="99.77" cy="79.14" r=".35" />
            <circle cx="97.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ak)`}>
            <circle cx="99.77" cy="87.14" r=".35" />
            <circle cx="97.77" cy="87.14" r=".35" />
            <circle cx="100.77" cy="85.14" r=".35" />
            <circle cx="98.77" cy="85.14" r=".35" />
            <circle cx="96.77" cy="85.14" r=".35" />
            <circle cx="99.77" cy="83.14" r=".35" />
            <circle cx="97.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-al)`}>
            <circle cx="99.77" cy="91.14" r=".35" />
            <circle cx="97.77" cy="91.14" r=".35" />
            <circle cx="100.77" cy="89.14" r=".35" />
            <circle cx="98.77" cy="89.14" r=".35" />
            <circle cx="96.77" cy="89.14" r=".35" />
            <circle cx="99.77" cy="87.14" r=".35" />
            <circle cx="97.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-am)`}>
            <circle cx="99.77" cy="95.14" r=".35" />
            <circle cx="97.77" cy="95.14" r=".35" />
            <circle cx="100.77" cy="93.14" r=".35" />
            <circle cx="98.77" cy="93.14" r=".35" />
            <circle cx="96.77" cy="93.14" r=".35" />
            <circle cx="99.77" cy="91.14" r=".35" />
            <circle cx="97.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-an)`}>
            <circle cx="99.77" cy="99.14" r=".35" />
            <circle cx="97.77" cy="99.14" r=".35" />
            <circle cx="100.77" cy="97.14" r=".35" />
            <circle cx="98.77" cy="97.14" r=".35" />
            <circle cx="96.77" cy="97.14" r=".35" />
            <circle cx="99.77" cy="95.14" r=".35" />
            <circle cx="97.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ao)`}>
            <circle cx="99.77" cy="103.14" r=".35" />
            <circle cx="97.77" cy="103.14" r=".35" />
            <circle cx="100.77" cy="101.14" r=".35" />
            <circle cx="98.77" cy="101.14" r=".35" />
            <circle cx="96.77" cy="101.14" r=".35" />
            <circle cx="99.77" cy="99.14" r=".35" />
            <circle cx="97.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ap)`}>
            <circle cx="99.77" cy="107.14" r=".35" />
            <circle cx="97.77" cy="107.14" r=".35" />
            <circle cx="100.77" cy="105.14" r=".35" />
            <circle cx="98.77" cy="105.14" r=".35" />
            <circle cx="96.77" cy="105.14" r=".35" />
            <circle cx="99.77" cy="103.14" r=".35" />
            <circle cx="97.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aq)`}>
            <circle cx="99.77" cy="111.14" r=".35" />
            <circle cx="97.77" cy="111.14" r=".35" />
            <circle cx="100.77" cy="109.14" r=".35" />
            <circle cx="98.77" cy="109.14" r=".35" />
            <circle cx="96.77" cy="109.14" r=".35" />
            <circle cx="99.77" cy="107.14" r=".35" />
            <circle cx="97.77" cy="107.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ar)`}>
            <circle cx="99.77" cy="115.14" r=".35" />
            <circle cx="97.77" cy="115.14" r=".35" />
            <circle cx="100.77" cy="113.14" r=".35" />
            <circle cx="98.77" cy="113.14" r=".35" />
            <circle cx="96.77" cy="113.14" r=".35" />
            <circle cx="99.77" cy="111.14" r=".35" />
            <circle cx="97.77" cy="111.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-as)`}>
            <circle cx="95.77" cy="27.14" r=".35" />
            <circle cx="93.77" cy="27.14" r=".35" />
            <circle cx="96.77" cy="25.14" r=".35" />
            <circle cx="94.77" cy="25.14" r=".35" />
            <circle cx="92.77" cy="25.14" r=".35" />
            <circle cx="95.77" cy="23.14" r=".35" />
            <circle cx="93.77" cy="23.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-at)`}>
            <circle cx="95.77" cy="31.14" r=".35" />
            <circle cx="93.77" cy="31.14" r=".35" />
            <circle cx="96.77" cy="29.14" r=".35" />
            <circle cx="94.77" cy="29.14" r=".35" />
            <circle cx="92.77" cy="29.14" r=".35" />
            <circle cx="95.77" cy="27.14" r=".35" />
            <circle cx="93.77" cy="27.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-au)`}>
            <circle cx="95.77" cy="35.14" r=".35" />
            <circle cx="93.77" cy="35.14" r=".35" />
            <circle cx="96.77" cy="33.14" r=".35" />
            <circle cx="94.77" cy="33.14" r=".35" />
            <circle cx="92.77" cy="33.14" r=".35" />
            <circle cx="95.77" cy="31.14" r=".35" />
            <circle cx="93.77" cy="31.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-av)`}>
            <circle cx="95.77" cy="39.14" r=".35" />
            <circle cx="93.77" cy="39.14" r=".35" />
            <circle cx="96.77" cy="37.14" r=".35" />
            <circle cx="94.77" cy="37.14" r=".35" />
            <circle cx="92.77" cy="37.14" r=".35" />
            <circle cx="95.77" cy="35.14" r=".35" />
            <circle cx="93.77" cy="35.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aw)`}>
            <circle cx="95.77" cy="43.14" r=".35" />
            <circle cx="93.77" cy="43.14" r=".35" />
            <circle cx="96.77" cy="41.14" r=".35" />
            <circle cx="94.77" cy="41.14" r=".35" />
            <circle cx="92.77" cy="41.14" r=".35" />
            <circle cx="95.77" cy="39.14" r=".35" />
            <circle cx="93.77" cy="39.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ax)`}>
            <circle cx="95.77" cy="47.14" r=".35" />
            <circle cx="93.77" cy="47.14" r=".35" />
            <circle cx="96.77" cy="45.14" r=".35" />
            <circle cx="94.77" cy="45.14" r=".35" />
            <circle cx="92.77" cy="45.14" r=".35" />
            <circle cx="95.77" cy="43.14" r=".35" />
            <circle cx="93.77" cy="43.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ay)`}>
            <circle cx="95.77" cy="51.14" r=".35" />
            <circle cx="93.77" cy="51.14" r=".35" />
            <circle cx="96.77" cy="49.14" r=".35" />
            <circle cx="94.77" cy="49.14" r=".35" />
            <circle cx="92.77" cy="49.14" r=".35" />
            <circle cx="95.77" cy="47.14" r=".35" />
            <circle cx="93.77" cy="47.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-az)`}>
            <circle cx="95.77" cy="55.14" r=".35" />
            <circle cx="93.77" cy="55.14" r=".35" />
            <circle cx="96.77" cy="53.14" r=".35" />
            <circle cx="94.77" cy="53.14" r=".35" />
            <circle cx="92.77" cy="53.14" r=".35" />
            <circle cx="95.77" cy="51.14" r=".35" />
            <circle cx="93.77" cy="51.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aA)`}>
            <circle cx="95.77" cy="59.14" r=".35" />
            <circle cx="93.77" cy="59.14" r=".35" />
            <circle cx="96.77" cy="57.14" r=".35" />
            <circle cx="94.77" cy="57.14" r=".35" />
            <circle cx="92.77" cy="57.14" r=".35" />
            <circle cx="95.77" cy="55.14" r=".35" />
            <circle cx="93.77" cy="55.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aB)`}>
            <circle cx="95.77" cy="63.14" r=".35" />
            <circle cx="93.77" cy="63.14" r=".35" />
            <circle cx="96.77" cy="61.14" r=".35" />
            <circle cx="94.77" cy="61.14" r=".35" />
            <circle cx="92.77" cy="61.14" r=".35" />
            <circle cx="95.77" cy="59.14" r=".35" />
            <circle cx="93.77" cy="59.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aC)`}>
            <circle cx="95.77" cy="67.14" r=".35" />
            <circle cx="93.77" cy="67.14" r=".35" />
            <circle cx="96.77" cy="65.14" r=".35" />
            <circle cx="94.77" cy="65.14" r=".35" />
            <circle cx="92.77" cy="65.14" r=".35" />
            <circle cx="95.77" cy="63.14" r=".35" />
            <circle cx="93.77" cy="63.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aD)`}>
            <circle cx="95.77" cy="71.14" r=".35" />
            <circle cx="93.77" cy="71.14" r=".35" />
            <circle cx="96.77" cy="69.14" r=".35" />
            <circle cx="94.77" cy="69.14" r=".35" />
            <circle cx="92.77" cy="69.14" r=".35" />
            <circle cx="95.77" cy="67.14" r=".35" />
            <circle cx="93.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aE)`}>
            <circle cx="95.77" cy="75.14" r=".35" />
            <circle cx="93.77" cy="75.14" r=".35" />
            <circle cx="96.77" cy="73.14" r=".35" />
            <circle cx="94.77" cy="73.14" r=".35" />
            <circle cx="92.77" cy="73.14" r=".35" />
            <circle cx="95.77" cy="71.14" r=".35" />
            <circle cx="93.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aF)`}>
            <circle cx="95.77" cy="79.14" r=".35" />
            <circle cx="93.77" cy="79.14" r=".35" />
            <circle cx="96.77" cy="77.14" r=".35" />
            <circle cx="94.77" cy="77.14" r=".35" />
            <circle cx="92.77" cy="77.14" r=".35" />
            <circle cx="95.77" cy="75.14" r=".35" />
            <circle cx="93.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aG)`}>
            <circle cx="95.77" cy="83.14" r=".35" />
            <circle cx="93.77" cy="83.14" r=".35" />
            <circle cx="96.77" cy="81.14" r=".35" />
            <circle cx="94.77" cy="81.14" r=".35" />
            <circle cx="92.77" cy="81.14" r=".35" />
            <circle cx="95.77" cy="79.14" r=".35" />
            <circle cx="93.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aH)`}>
            <circle cx="95.77" cy="87.14" r=".35" />
            <circle cx="93.77" cy="87.14" r=".35" />
            <circle cx="96.77" cy="85.14" r=".35" />
            <circle cx="94.77" cy="85.14" r=".35" />
            <circle cx="92.77" cy="85.14" r=".35" />
            <circle cx="95.77" cy="83.14" r=".35" />
            <circle cx="93.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aI)`}>
            <circle cx="95.77" cy="91.14" r=".35" />
            <circle cx="93.77" cy="91.14" r=".35" />
            <circle cx="96.77" cy="89.14" r=".35" />
            <circle cx="94.77" cy="89.14" r=".35" />
            <circle cx="92.77" cy="89.14" r=".35" />
            <circle cx="95.77" cy="87.14" r=".35" />
            <circle cx="93.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aJ)`}>
            <circle cx="95.77" cy="95.14" r=".35" />
            <circle cx="93.77" cy="95.14" r=".35" />
            <circle cx="96.77" cy="93.14" r=".35" />
            <circle cx="94.77" cy="93.14" r=".35" />
            <circle cx="92.77" cy="93.14" r=".35" />
            <circle cx="95.77" cy="91.14" r=".35" />
            <circle cx="93.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aK)`}>
            <circle cx="95.77" cy="99.14" r=".35" />
            <circle cx="93.77" cy="99.14" r=".35" />
            <circle cx="96.77" cy="97.14" r=".35" />
            <circle cx="94.77" cy="97.14" r=".35" />
            <circle cx="92.77" cy="97.14" r=".35" />
            <circle cx="95.77" cy="95.14" r=".35" />
            <circle cx="93.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aL)`}>
            <circle cx="95.77" cy="103.14" r=".35" />
            <circle cx="93.77" cy="103.14" r=".35" />
            <circle cx="96.77" cy="101.14" r=".35" />
            <circle cx="94.77" cy="101.14" r=".35" />
            <circle cx="92.77" cy="101.14" r=".35" />
            <circle cx="95.77" cy="99.14" r=".35" />
            <circle cx="93.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aM)`}>
            <circle cx="95.77" cy="107.14" r=".35" />
            <circle cx="93.77" cy="107.14" r=".35" />
            <circle cx="96.77" cy="105.14" r=".35" />
            <circle cx="94.77" cy="105.14" r=".35" />
            <circle cx="92.77" cy="105.14" r=".35" />
            <circle cx="95.77" cy="103.14" r=".35" />
            <circle cx="93.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aN)`}>
            <circle cx="95.77" cy="111.14" r=".35" />
            <circle cx="93.77" cy="111.14" r=".35" />
            <circle cx="96.77" cy="109.14" r=".35" />
            <circle cx="94.77" cy="109.14" r=".35" />
            <circle cx="92.77" cy="109.14" r=".35" />
            <circle cx="95.77" cy="107.14" r=".35" />
            <circle cx="93.77" cy="107.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aO)`}>
            <circle cx="95.77" cy="115.14" r=".35" />
            <circle cx="93.77" cy="115.14" r=".35" />
            <circle cx="96.77" cy="113.14" r=".35" />
            <circle cx="94.77" cy="113.14" r=".35" />
            <circle cx="92.77" cy="113.14" r=".35" />
            <circle cx="95.77" cy="111.14" r=".35" />
            <circle cx="93.77" cy="111.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aP)`}>
            <circle cx="91.77" cy="27.14" r=".35" />
            <circle cx="89.77" cy="27.14" r=".35" />
            <circle cx="92.77" cy="25.14" r=".35" />
            <circle cx="90.77" cy="25.14" r=".35" />
            <circle cx="88.77" cy="25.14" r=".35" />
            <circle cx="91.77" cy="23.14" r=".35" />
            <circle cx="89.77" cy="23.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aQ)`}>
            <circle cx="91.77" cy="31.14" r=".35" />
            <circle cx="89.77" cy="31.14" r=".35" />
            <circle cx="92.77" cy="29.14" r=".35" />
            <circle cx="90.77" cy="29.14" r=".35" />
            <circle cx="88.77" cy="29.14" r=".35" />
            <circle cx="91.77" cy="27.14" r=".35" />
            <circle cx="89.77" cy="27.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aR)`}>
            <circle cx="91.77" cy="35.14" r=".35" />
            <circle cx="89.77" cy="35.14" r=".35" />
            <circle cx="92.77" cy="33.14" r=".35" />
            <circle cx="90.77" cy="33.14" r=".35" />
            <circle cx="88.77" cy="33.14" r=".35" />
            <circle cx="91.77" cy="31.14" r=".35" />
            <circle cx="89.77" cy="31.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aS)`}>
            <circle cx="91.77" cy="39.14" r=".35" />
            <circle cx="89.77" cy="39.14" r=".35" />
            <circle cx="92.77" cy="37.14" r=".35" />
            <circle cx="90.77" cy="37.14" r=".35" />
            <circle cx="88.77" cy="37.14" r=".35" />
            <circle cx="91.77" cy="35.14" r=".35" />
            <circle cx="89.77" cy="35.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aT)`}>
            <circle cx="91.77" cy="43.14" r=".35" />
            <circle cx="89.77" cy="43.14" r=".35" />
            <circle cx="92.77" cy="41.14" r=".35" />
            <circle cx="90.77" cy="41.14" r=".35" />
            <circle cx="88.77" cy="41.14" r=".35" />
            <circle cx="91.77" cy="39.14" r=".35" />
            <circle cx="89.77" cy="39.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aU)`}>
            <circle cx="91.77" cy="47.14" r=".35" />
            <circle cx="89.77" cy="47.14" r=".35" />
            <circle cx="92.77" cy="45.14" r=".35" />
            <circle cx="90.77" cy="45.14" r=".35" />
            <circle cx="88.77" cy="45.14" r=".35" />
            <circle cx="91.77" cy="43.14" r=".35" />
            <circle cx="89.77" cy="43.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aV)`}>
            <circle cx="91.77" cy="51.14" r=".35" />
            <circle cx="89.77" cy="51.14" r=".35" />
            <circle cx="92.77" cy="49.14" r=".35" />
            <circle cx="90.77" cy="49.14" r=".35" />
            <circle cx="88.77" cy="49.14" r=".35" />
            <circle cx="91.77" cy="47.14" r=".35" />
            <circle cx="89.77" cy="47.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aW)`}>
            <circle cx="91.77" cy="55.14" r=".35" />
            <circle cx="89.77" cy="55.14" r=".35" />
            <circle cx="92.77" cy="53.14" r=".35" />
            <circle cx="90.77" cy="53.14" r=".35" />
            <circle cx="88.77" cy="53.14" r=".35" />
            <circle cx="91.77" cy="51.14" r=".35" />
            <circle cx="89.77" cy="51.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aX)`}>
            <circle cx="91.77" cy="59.14" r=".35" />
            <circle cx="89.77" cy="59.14" r=".35" />
            <circle cx="92.77" cy="57.14" r=".35" />
            <circle cx="90.77" cy="57.14" r=".35" />
            <circle cx="88.77" cy="57.14" r=".35" />
            <circle cx="91.77" cy="55.14" r=".35" />
            <circle cx="89.77" cy="55.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aY)`}>
            <circle cx="91.77" cy="63.14" r=".35" />
            <circle cx="89.77" cy="63.14" r=".35" />
            <circle cx="92.77" cy="61.14" r=".35" />
            <circle cx="90.77" cy="61.14" r=".35" />
            <circle cx="88.77" cy="61.14" r=".35" />
            <circle cx="91.77" cy="59.14" r=".35" />
            <circle cx="89.77" cy="59.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aZ)`}>
            <circle cx="91.77" cy="67.14" r=".35" />
            <circle cx="89.77" cy="67.14" r=".35" />
            <circle cx="92.77" cy="65.14" r=".35" />
            <circle cx="90.77" cy="65.14" r=".35" />
            <circle cx="88.77" cy="65.14" r=".35" />
            <circle cx="91.77" cy="63.14" r=".35" />
            <circle cx="89.77" cy="63.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a0)`}>
            <circle cx="91.77" cy="71.14" r=".35" />
            <circle cx="89.77" cy="71.14" r=".35" />
            <circle cx="92.77" cy="69.14" r=".35" />
            <circle cx="90.77" cy="69.14" r=".35" />
            <circle cx="88.77" cy="69.14" r=".35" />
            <circle cx="91.77" cy="67.14" r=".35" />
            <circle cx="89.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a1)`}>
            <circle cx="91.77" cy="75.14" r=".35" />
            <circle cx="89.77" cy="75.14" r=".35" />
            <circle cx="92.77" cy="73.14" r=".35" />
            <circle cx="90.77" cy="73.14" r=".35" />
            <circle cx="88.77" cy="73.14" r=".35" />
            <circle cx="91.77" cy="71.14" r=".35" />
            <circle cx="89.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a2)`}>
            <circle cx="91.77" cy="79.14" r=".35" />
            <circle cx="89.77" cy="79.14" r=".35" />
            <circle cx="92.77" cy="77.14" r=".35" />
            <circle cx="90.77" cy="77.14" r=".35" />
            <circle cx="88.77" cy="77.14" r=".35" />
            <circle cx="91.77" cy="75.14" r=".35" />
            <circle cx="89.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a3)`}>
            <circle cx="91.77" cy="83.14" r=".35" />
            <circle cx="89.77" cy="83.14" r=".35" />
            <circle cx="92.77" cy="81.14" r=".35" />
            <circle cx="90.77" cy="81.14" r=".35" />
            <circle cx="88.77" cy="81.14" r=".35" />
            <circle cx="91.77" cy="79.14" r=".35" />
            <circle cx="89.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a4)`}>
            <circle cx="91.77" cy="87.14" r=".35" />
            <circle cx="89.77" cy="87.14" r=".35" />
            <circle cx="92.77" cy="85.14" r=".35" />
            <circle cx="90.77" cy="85.14" r=".35" />
            <circle cx="88.77" cy="85.14" r=".35" />
            <circle cx="91.77" cy="83.14" r=".35" />
            <circle cx="89.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a5)`}>
            <circle cx="91.77" cy="91.14" r=".35" />
            <circle cx="89.77" cy="91.14" r=".35" />
            <circle cx="92.77" cy="89.14" r=".35" />
            <circle cx="90.77" cy="89.14" r=".35" />
            <circle cx="88.77" cy="89.14" r=".35" />
            <circle cx="91.77" cy="87.14" r=".35" />
            <circle cx="89.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a6)`}>
            <circle cx="91.77" cy="95.14" r=".35" />
            <circle cx="89.77" cy="95.14" r=".35" />
            <circle cx="92.77" cy="93.14" r=".35" />
            <circle cx="90.77" cy="93.14" r=".35" />
            <circle cx="88.77" cy="93.14" r=".35" />
            <circle cx="91.77" cy="91.14" r=".35" />
            <circle cx="89.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a7)`}>
            <circle cx="91.77" cy="99.14" r=".35" />
            <circle cx="89.77" cy="99.14" r=".35" />
            <circle cx="92.77" cy="97.14" r=".35" />
            <circle cx="90.77" cy="97.14" r=".35" />
            <circle cx="88.77" cy="97.14" r=".35" />
            <circle cx="91.77" cy="95.14" r=".35" />
            <circle cx="89.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a8)`}>
            <circle cx="91.77" cy="103.14" r=".35" />
            <circle cx="89.77" cy="103.14" r=".35" />
            <circle cx="92.77" cy="101.14" r=".35" />
            <circle cx="90.77" cy="101.14" r=".35" />
            <circle cx="88.77" cy="101.14" r=".35" />
            <circle cx="91.77" cy="99.14" r=".35" />
            <circle cx="89.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a9)`}>
            <circle cx="91.77" cy="107.14" r=".35" />
            <circle cx="89.77" cy="107.14" r=".35" />
            <circle cx="92.77" cy="105.14" r=".35" />
            <circle cx="90.77" cy="105.14" r=".35" />
            <circle cx="88.77" cy="105.14" r=".35" />
            <circle cx="91.77" cy="103.14" r=".35" />
            <circle cx="89.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ba)`}>
            <circle cx="91.77" cy="111.14" r=".35" />
            <circle cx="89.77" cy="111.14" r=".35" />
            <circle cx="92.77" cy="109.14" r=".35" />
            <circle cx="90.77" cy="109.14" r=".35" />
            <circle cx="88.77" cy="109.14" r=".35" />
            <circle cx="91.77" cy="107.14" r=".35" />
            <circle cx="89.77" cy="107.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bb)`}>
            <circle cx="91.77" cy="115.14" r=".35" />
            <circle cx="89.77" cy="115.14" r=".35" />
            <circle cx="92.77" cy="113.14" r=".35" />
            <circle cx="90.77" cy="113.14" r=".35" />
            <circle cx="88.77" cy="113.14" r=".35" />
            <circle cx="91.77" cy="111.14" r=".35" />
            <circle cx="89.77" cy="111.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bc)`}>
            <circle cx="87.77" cy="27.14" r=".35" />
            <circle cx="85.77" cy="27.14" r=".35" />
            <circle cx="88.77" cy="25.14" r=".35" />
            <circle cx="86.77" cy="25.14" r=".35" />
            <circle cx="84.77" cy="25.14" r=".35" />
            <circle cx="87.77" cy="23.14" r=".35" />
            <circle cx="85.77" cy="23.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bd)`}>
            <circle cx="87.77" cy="31.14" r=".35" />
            <circle cx="85.77" cy="31.14" r=".35" />
            <circle cx="88.77" cy="29.14" r=".35" />
            <circle cx="86.77" cy="29.14" r=".35" />
            <circle cx="84.77" cy="29.14" r=".35" />
            <circle cx="87.77" cy="27.14" r=".35" />
            <circle cx="85.77" cy="27.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-be)`}>
            <circle cx="87.77" cy="35.14" r=".35" />
            <circle cx="85.77" cy="35.14" r=".35" />
            <circle cx="88.77" cy="33.14" r=".35" />
            <circle cx="86.77" cy="33.14" r=".35" />
            <circle cx="84.77" cy="33.14" r=".35" />
            <circle cx="87.77" cy="31.14" r=".35" />
            <circle cx="85.77" cy="31.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bf)`}>
            <circle cx="87.77" cy="39.14" r=".35" />
            <circle cx="85.77" cy="39.14" r=".35" />
            <circle cx="88.77" cy="37.14" r=".35" />
            <circle cx="86.77" cy="37.14" r=".35" />
            <circle cx="84.77" cy="37.14" r=".35" />
            <circle cx="87.77" cy="35.14" r=".35" />
            <circle cx="85.77" cy="35.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bg)`}>
            <circle cx="87.77" cy="43.14" r=".35" />
            <circle cx="85.77" cy="43.14" r=".35" />
            <circle cx="88.77" cy="41.14" r=".35" />
            <circle cx="86.77" cy="41.14" r=".35" />
            <circle cx="84.77" cy="41.14" r=".35" />
            <circle cx="87.77" cy="39.14" r=".35" />
            <circle cx="85.77" cy="39.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bh)`}>
            <circle cx="87.77" cy="47.14" r=".35" />
            <circle cx="85.77" cy="47.14" r=".35" />
            <circle cx="88.77" cy="45.14" r=".35" />
            <circle cx="86.77" cy="45.14" r=".35" />
            <circle cx="84.77" cy="45.14" r=".35" />
            <circle cx="87.77" cy="43.14" r=".35" />
            <circle cx="85.77" cy="43.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bi)`}>
            <circle cx="87.77" cy="51.14" r=".35" />
            <circle cx="85.77" cy="51.14" r=".35" />
            <circle cx="88.77" cy="49.14" r=".35" />
            <circle cx="86.77" cy="49.14" r=".35" />
            <circle cx="84.77" cy="49.14" r=".35" />
            <circle cx="87.77" cy="47.14" r=".35" />
            <circle cx="85.77" cy="47.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bj)`}>
            <circle cx="87.77" cy="55.14" r=".35" />
            <circle cx="85.77" cy="55.14" r=".35" />
            <circle cx="88.77" cy="53.14" r=".35" />
            <circle cx="86.77" cy="53.14" r=".35" />
            <circle cx="84.77" cy="53.14" r=".35" />
            <circle cx="87.77" cy="51.14" r=".35" />
            <circle cx="85.77" cy="51.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bk)`}>
            <circle cx="87.77" cy="59.14" r=".35" />
            <circle cx="85.77" cy="59.14" r=".35" />
            <circle cx="88.77" cy="57.14" r=".35" />
            <circle cx="86.77" cy="57.14" r=".35" />
            <circle cx="84.77" cy="57.14" r=".35" />
            <circle cx="87.77" cy="55.14" r=".35" />
            <circle cx="85.77" cy="55.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bl)`}>
            <circle cx="87.77" cy="63.14" r=".35" />
            <circle cx="85.77" cy="63.14" r=".35" />
            <circle cx="88.77" cy="61.14" r=".35" />
            <circle cx="86.77" cy="61.14" r=".35" />
            <circle cx="84.77" cy="61.14" r=".35" />
            <circle cx="87.77" cy="59.14" r=".35" />
            <circle cx="85.77" cy="59.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bm)`}>
            <circle cx="87.77" cy="67.14" r=".35" />
            <circle cx="85.77" cy="67.14" r=".35" />
            <circle cx="88.77" cy="65.14" r=".35" />
            <circle cx="86.77" cy="65.14" r=".35" />
            <circle cx="84.77" cy="65.14" r=".35" />
            <circle cx="87.77" cy="63.14" r=".35" />
            <circle cx="85.77" cy="63.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bn)`}>
            <circle cx="87.77" cy="71.14" r=".35" />
            <circle cx="85.77" cy="71.14" r=".35" />
            <circle cx="88.77" cy="69.14" r=".35" />
            <circle cx="86.77" cy="69.14" r=".35" />
            <circle cx="84.77" cy="69.14" r=".35" />
            <circle cx="87.77" cy="67.14" r=".35" />
            <circle cx="85.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bo)`}>
            <circle cx="87.77" cy="75.14" r=".35" />
            <circle cx="85.77" cy="75.14" r=".35" />
            <circle cx="88.77" cy="73.14" r=".35" />
            <circle cx="86.77" cy="73.14" r=".35" />
            <circle cx="84.77" cy="73.14" r=".35" />
            <circle cx="87.77" cy="71.14" r=".35" />
            <circle cx="85.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bp)`}>
            <circle cx="87.77" cy="79.14" r=".35" />
            <circle cx="85.77" cy="79.14" r=".35" />
            <circle cx="88.77" cy="77.14" r=".35" />
            <circle cx="86.77" cy="77.14" r=".35" />
            <circle cx="84.77" cy="77.14" r=".35" />
            <circle cx="87.77" cy="75.14" r=".35" />
            <circle cx="85.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bq)`}>
            <circle cx="87.77" cy="83.14" r=".35" />
            <circle cx="85.77" cy="83.14" r=".35" />
            <circle cx="88.77" cy="81.14" r=".35" />
            <circle cx="86.77" cy="81.14" r=".35" />
            <circle cx="84.77" cy="81.14" r=".35" />
            <circle cx="87.77" cy="79.14" r=".35" />
            <circle cx="85.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-br)`}>
            <circle cx="87.77" cy="87.14" r=".35" />
            <circle cx="85.77" cy="87.14" r=".35" />
            <circle cx="88.77" cy="85.14" r=".35" />
            <circle cx="86.77" cy="85.14" r=".35" />
            <circle cx="84.77" cy="85.14" r=".35" />
            <circle cx="87.77" cy="83.14" r=".35" />
            <circle cx="85.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bs)`}>
            <circle cx="87.77" cy="91.14" r=".35" />
            <circle cx="85.77" cy="91.14" r=".35" />
            <circle cx="88.77" cy="89.14" r=".35" />
            <circle cx="86.77" cy="89.14" r=".35" />
            <circle cx="84.77" cy="89.14" r=".35" />
            <circle cx="87.77" cy="87.14" r=".35" />
            <circle cx="85.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bt)`}>
            <circle cx="87.77" cy="95.14" r=".35" />
            <circle cx="85.77" cy="95.14" r=".35" />
            <circle cx="88.77" cy="93.14" r=".35" />
            <circle cx="86.77" cy="93.14" r=".35" />
            <circle cx="84.77" cy="93.14" r=".35" />
            <circle cx="87.77" cy="91.14" r=".35" />
            <circle cx="85.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bu)`}>
            <circle cx="87.77" cy="99.14" r=".35" />
            <circle cx="85.77" cy="99.14" r=".35" />
            <circle cx="88.77" cy="97.14" r=".35" />
            <circle cx="86.77" cy="97.14" r=".35" />
            <circle cx="84.77" cy="97.14" r=".35" />
            <circle cx="87.77" cy="95.14" r=".35" />
            <circle cx="85.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bv)`}>
            <circle cx="87.77" cy="103.14" r=".35" />
            <circle cx="85.77" cy="103.14" r=".35" />
            <circle cx="88.77" cy="101.14" r=".35" />
            <circle cx="86.77" cy="101.14" r=".35" />
            <circle cx="84.77" cy="101.14" r=".35" />
            <circle cx="87.77" cy="99.14" r=".35" />
            <circle cx="85.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bw)`}>
            <circle cx="87.77" cy="107.14" r=".35" />
            <circle cx="85.77" cy="107.14" r=".35" />
            <circle cx="88.77" cy="105.14" r=".35" />
            <circle cx="86.77" cy="105.14" r=".35" />
            <circle cx="84.77" cy="105.14" r=".35" />
            <circle cx="87.77" cy="103.14" r=".35" />
            <circle cx="85.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bx)`}>
            <circle cx="87.77" cy="111.14" r=".35" />
            <circle cx="85.77" cy="111.14" r=".35" />
            <circle cx="88.77" cy="109.14" r=".35" />
            <circle cx="86.77" cy="109.14" r=".35" />
            <circle cx="84.77" cy="109.14" r=".35" />
            <circle cx="87.77" cy="107.14" r=".35" />
            <circle cx="85.77" cy="107.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-by)`}>
            <circle cx="87.77" cy="115.14" r=".35" />
            <circle cx="85.77" cy="115.14" r=".35" />
            <circle cx="88.77" cy="113.14" r=".35" />
            <circle cx="86.77" cy="113.14" r=".35" />
            <circle cx="84.77" cy="113.14" r=".35" />
            <circle cx="87.77" cy="111.14" r=".35" />
            <circle cx="85.77" cy="111.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bz)`}>
            <circle cx="83.77" cy="27.14" r=".35" />
            <circle cx="81.77" cy="27.14" r=".35" />
            <circle cx="84.77" cy="25.14" r=".35" />
            <circle cx="82.77" cy="25.14" r=".35" />
            <circle cx="80.77" cy="25.14" r=".35" />
            <circle cx="83.77" cy="23.14" r=".35" />
            <circle cx="81.77" cy="23.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bA)`}>
            <circle cx="83.77" cy="31.14" r=".35" />
            <circle cx="81.77" cy="31.14" r=".35" />
            <circle cx="84.77" cy="29.14" r=".35" />
            <circle cx="82.77" cy="29.14" r=".35" />
            <circle cx="80.77" cy="29.14" r=".35" />
            <circle cx="83.77" cy="27.14" r=".35" />
            <circle cx="81.77" cy="27.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bB)`}>
            <circle cx="83.77" cy="35.14" r=".35" />
            <circle cx="81.77" cy="35.14" r=".35" />
            <circle cx="84.77" cy="33.14" r=".35" />
            <circle cx="82.77" cy="33.14" r=".35" />
            <circle cx="80.77" cy="33.14" r=".35" />
            <circle cx="83.77" cy="31.14" r=".35" />
            <circle cx="81.77" cy="31.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bC)`}>
            <circle cx="83.77" cy="39.14" r=".35" />
            <circle cx="81.77" cy="39.14" r=".35" />
            <circle cx="84.77" cy="37.14" r=".35" />
            <circle cx="82.77" cy="37.14" r=".35" />
            <circle cx="80.77" cy="37.14" r=".35" />
            <circle cx="83.77" cy="35.14" r=".35" />
            <circle cx="81.77" cy="35.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bD)`}>
            <circle cx="83.77" cy="43.14" r=".35" />
            <circle cx="81.77" cy="43.14" r=".35" />
            <circle cx="84.77" cy="41.14" r=".35" />
            <circle cx="82.77" cy="41.14" r=".35" />
            <circle cx="80.77" cy="41.14" r=".35" />
            <circle cx="83.77" cy="39.14" r=".35" />
            <circle cx="81.77" cy="39.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bE)`}>
            <circle cx="83.77" cy="47.14" r=".35" />
            <circle cx="81.77" cy="47.14" r=".35" />
            <circle cx="84.77" cy="45.14" r=".35" />
            <circle cx="82.77" cy="45.14" r=".35" />
            <circle cx="80.77" cy="45.14" r=".35" />
            <circle cx="83.77" cy="43.14" r=".35" />
            <circle cx="81.77" cy="43.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bF)`}>
            <circle cx="83.77" cy="51.14" r=".35" />
            <circle cx="81.77" cy="51.14" r=".35" />
            <circle cx="84.77" cy="49.14" r=".35" />
            <circle cx="82.77" cy="49.14" r=".35" />
            <circle cx="80.77" cy="49.14" r=".35" />
            <circle cx="83.77" cy="47.14" r=".35" />
            <circle cx="81.77" cy="47.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bG)`}>
            <circle cx="83.77" cy="55.14" r=".35" />
            <circle cx="81.77" cy="55.14" r=".35" />
            <circle cx="84.77" cy="53.14" r=".35" />
            <circle cx="82.77" cy="53.14" r=".35" />
            <circle cx="80.77" cy="53.14" r=".35" />
            <circle cx="83.77" cy="51.14" r=".35" />
            <circle cx="81.77" cy="51.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bH)`}>
            <circle cx="83.77" cy="59.14" r=".35" />
            <circle cx="81.77" cy="59.14" r=".35" />
            <circle cx="84.77" cy="57.14" r=".35" />
            <circle cx="82.77" cy="57.14" r=".35" />
            <circle cx="80.77" cy="57.14" r=".35" />
            <circle cx="83.77" cy="55.14" r=".35" />
            <circle cx="81.77" cy="55.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bI)`}>
            <circle cx="83.77" cy="63.14" r=".35" />
            <circle cx="81.77" cy="63.14" r=".35" />
            <circle cx="84.77" cy="61.14" r=".35" />
            <circle cx="82.77" cy="61.14" r=".35" />
            <circle cx="80.77" cy="61.14" r=".35" />
            <circle cx="83.77" cy="59.14" r=".35" />
            <circle cx="81.77" cy="59.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bJ)`}>
            <circle cx="83.77" cy="67.14" r=".35" />
            <circle cx="81.77" cy="67.14" r=".35" />
            <circle cx="84.77" cy="65.14" r=".35" />
            <circle cx="82.77" cy="65.14" r=".35" />
            <circle cx="80.77" cy="65.14" r=".35" />
            <circle cx="83.77" cy="63.14" r=".35" />
            <circle cx="81.77" cy="63.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bK)`}>
            <circle cx="83.77" cy="71.14" r=".35" />
            <circle cx="81.77" cy="71.14" r=".35" />
            <circle cx="84.77" cy="69.14" r=".35" />
            <circle cx="82.77" cy="69.14" r=".35" />
            <circle cx="80.77" cy="69.14" r=".35" />
            <circle cx="83.77" cy="67.14" r=".35" />
            <circle cx="81.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bL)`}>
            <circle cx="83.77" cy="75.14" r=".35" />
            <circle cx="81.77" cy="75.14" r=".35" />
            <circle cx="84.77" cy="73.14" r=".35" />
            <circle cx="82.77" cy="73.14" r=".35" />
            <circle cx="80.77" cy="73.14" r=".35" />
            <circle cx="83.77" cy="71.14" r=".35" />
            <circle cx="81.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bM)`}>
            <circle cx="83.77" cy="79.14" r=".35" />
            <circle cx="81.77" cy="79.14" r=".35" />
            <circle cx="84.77" cy="77.14" r=".35" />
            <circle cx="82.77" cy="77.14" r=".35" />
            <circle cx="80.77" cy="77.14" r=".35" />
            <circle cx="83.77" cy="75.14" r=".35" />
            <circle cx="81.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bN)`}>
            <circle cx="83.77" cy="83.14" r=".35" />
            <circle cx="81.77" cy="83.14" r=".35" />
            <circle cx="84.77" cy="81.14" r=".35" />
            <circle cx="82.77" cy="81.14" r=".35" />
            <circle cx="80.77" cy="81.14" r=".35" />
            <circle cx="83.77" cy="79.14" r=".35" />
            <circle cx="81.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bO)`}>
            <circle cx="83.77" cy="87.14" r=".35" />
            <circle cx="81.77" cy="87.14" r=".35" />
            <circle cx="84.77" cy="85.14" r=".35" />
            <circle cx="82.77" cy="85.14" r=".35" />
            <circle cx="80.77" cy="85.14" r=".35" />
            <circle cx="83.77" cy="83.14" r=".35" />
            <circle cx="81.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bP)`}>
            <circle cx="83.77" cy="91.14" r=".35" />
            <circle cx="81.77" cy="91.14" r=".35" />
            <circle cx="84.77" cy="89.14" r=".35" />
            <circle cx="82.77" cy="89.14" r=".35" />
            <circle cx="80.77" cy="89.14" r=".35" />
            <circle cx="83.77" cy="87.14" r=".35" />
            <circle cx="81.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bQ)`}>
            <circle cx="83.77" cy="95.14" r=".35" />
            <circle cx="81.77" cy="95.14" r=".35" />
            <circle cx="84.77" cy="93.14" r=".35" />
            <circle cx="82.77" cy="93.14" r=".35" />
            <circle cx="80.77" cy="93.14" r=".35" />
            <circle cx="83.77" cy="91.14" r=".35" />
            <circle cx="81.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bR)`}>
            <circle cx="83.77" cy="99.14" r=".35" />
            <circle cx="81.77" cy="99.14" r=".35" />
            <circle cx="84.77" cy="97.14" r=".35" />
            <circle cx="82.77" cy="97.14" r=".35" />
            <circle cx="80.77" cy="97.14" r=".35" />
            <circle cx="83.77" cy="95.14" r=".35" />
            <circle cx="81.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bS)`}>
            <circle cx="83.77" cy="103.14" r=".35" />
            <circle cx="81.77" cy="103.14" r=".35" />
            <circle cx="84.77" cy="101.14" r=".35" />
            <circle cx="82.77" cy="101.14" r=".35" />
            <circle cx="80.77" cy="101.14" r=".35" />
            <circle cx="83.77" cy="99.14" r=".35" />
            <circle cx="81.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bT)`}>
            <circle cx="83.77" cy="107.14" r=".35" />
            <circle cx="81.77" cy="107.14" r=".35" />
            <circle cx="84.77" cy="105.14" r=".35" />
            <circle cx="82.77" cy="105.14" r=".35" />
            <circle cx="80.77" cy="105.14" r=".35" />
            <circle cx="83.77" cy="103.14" r=".35" />
            <circle cx="81.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bU)`}>
            <circle cx="83.77" cy="111.14" r=".35" />
            <circle cx="81.77" cy="111.14" r=".35" />
            <circle cx="84.77" cy="109.14" r=".35" />
            <circle cx="82.77" cy="109.14" r=".35" />
            <circle cx="80.77" cy="109.14" r=".35" />
            <circle cx="83.77" cy="107.14" r=".35" />
            <circle cx="81.77" cy="107.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bV)`}>
            <circle cx="83.77" cy="115.14" r=".35" />
            <circle cx="81.77" cy="115.14" r=".35" />
            <circle cx="84.77" cy="113.14" r=".35" />
            <circle cx="82.77" cy="113.14" r=".35" />
            <circle cx="80.77" cy="113.14" r=".35" />
            <circle cx="83.77" cy="111.14" r=".35" />
            <circle cx="81.77" cy="111.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bW)`}>
            <circle cx="79.77" cy="27.14" r=".35" />
            <circle cx="77.77" cy="27.14" r=".35" />
            <circle cx="80.77" cy="25.14" r=".35" />
            <circle cx="78.77" cy="25.14" r=".35" />
            <circle cx="76.77" cy="25.14" r=".35" />
            <circle cx="79.77" cy="23.14" r=".35" />
            <circle cx="77.77" cy="23.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bX)`}>
            <circle cx="79.77" cy="31.14" r=".35" />
            <circle cx="77.77" cy="31.14" r=".35" />
            <circle cx="80.77" cy="29.14" r=".35" />
            <circle cx="78.77" cy="29.14" r=".35" />
            <circle cx="76.77" cy="29.14" r=".35" />
            <circle cx="79.77" cy="27.14" r=".35" />
            <circle cx="77.77" cy="27.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bY)`}>
            <circle cx="79.77" cy="35.14" r=".35" />
            <circle cx="77.77" cy="35.14" r=".35" />
            <circle cx="80.77" cy="33.14" r=".35" />
            <circle cx="78.77" cy="33.14" r=".35" />
            <circle cx="76.77" cy="33.14" r=".35" />
            <circle cx="79.77" cy="31.14" r=".35" />
            <circle cx="77.77" cy="31.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bZ)`}>
            <circle cx="79.77" cy="39.14" r=".35" />
            <circle cx="77.77" cy="39.14" r=".35" />
            <circle cx="80.77" cy="37.14" r=".35" />
            <circle cx="78.77" cy="37.14" r=".35" />
            <circle cx="76.77" cy="37.14" r=".35" />
            <circle cx="79.77" cy="35.14" r=".35" />
            <circle cx="77.77" cy="35.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b0)`}>
            <circle cx="79.77" cy="43.14" r=".35" />
            <circle cx="77.77" cy="43.14" r=".35" />
            <circle cx="80.77" cy="41.14" r=".35" />
            <circle cx="78.77" cy="41.14" r=".35" />
            <circle cx="76.77" cy="41.14" r=".35" />
            <circle cx="79.77" cy="39.14" r=".35" />
            <circle cx="77.77" cy="39.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b1)`}>
            <circle cx="79.77" cy="47.14" r=".35" />
            <circle cx="77.77" cy="47.14" r=".35" />
            <circle cx="80.77" cy="45.14" r=".35" />
            <circle cx="78.77" cy="45.14" r=".35" />
            <circle cx="76.77" cy="45.14" r=".35" />
            <circle cx="79.77" cy="43.14" r=".35" />
            <circle cx="77.77" cy="43.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b2)`}>
            <circle cx="79.77" cy="51.14" r=".35" />
            <circle cx="77.77" cy="51.14" r=".35" />
            <circle cx="80.77" cy="49.14" r=".35" />
            <circle cx="78.77" cy="49.14" r=".35" />
            <circle cx="76.77" cy="49.14" r=".35" />
            <circle cx="79.77" cy="47.14" r=".35" />
            <circle cx="77.77" cy="47.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b3)`}>
            <circle cx="79.77" cy="55.14" r=".35" />
            <circle cx="77.77" cy="55.14" r=".35" />
            <circle cx="80.77" cy="53.14" r=".35" />
            <circle cx="78.77" cy="53.14" r=".35" />
            <circle cx="76.77" cy="53.14" r=".35" />
            <circle cx="79.77" cy="51.14" r=".35" />
            <circle cx="77.77" cy="51.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b4)`}>
            <circle cx="79.77" cy="59.14" r=".35" />
            <circle cx="77.77" cy="59.14" r=".35" />
            <circle cx="80.77" cy="57.14" r=".35" />
            <circle cx="78.77" cy="57.14" r=".35" />
            <circle cx="76.77" cy="57.14" r=".35" />
            <circle cx="79.77" cy="55.14" r=".35" />
            <circle cx="77.77" cy="55.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b5)`}>
            <circle cx="79.77" cy="63.14" r=".35" />
            <circle cx="77.77" cy="63.14" r=".35" />
            <circle cx="80.77" cy="61.14" r=".35" />
            <circle cx="78.77" cy="61.14" r=".35" />
            <circle cx="76.77" cy="61.14" r=".35" />
            <circle cx="79.77" cy="59.14" r=".35" />
            <circle cx="77.77" cy="59.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b6)`}>
            <circle cx="79.77" cy="67.14" r=".35" />
            <circle cx="77.77" cy="67.14" r=".35" />
            <circle cx="80.77" cy="65.14" r=".35" />
            <circle cx="78.77" cy="65.14" r=".35" />
            <circle cx="76.77" cy="65.14" r=".35" />
            <circle cx="79.77" cy="63.14" r=".35" />
            <circle cx="77.77" cy="63.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b7)`}>
            <circle cx="79.77" cy="71.14" r=".35" />
            <circle cx="77.77" cy="71.14" r=".35" />
            <circle cx="80.77" cy="69.14" r=".35" />
            <circle cx="78.77" cy="69.14" r=".35" />
            <circle cx="76.77" cy="69.14" r=".35" />
            <circle cx="79.77" cy="67.14" r=".35" />
            <circle cx="77.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b8)`}>
            <circle cx="79.77" cy="75.14" r=".35" />
            <circle cx="77.77" cy="75.14" r=".35" />
            <circle cx="80.77" cy="73.14" r=".35" />
            <circle cx="78.77" cy="73.14" r=".35" />
            <circle cx="76.77" cy="73.14" r=".35" />
            <circle cx="79.77" cy="71.14" r=".35" />
            <circle cx="77.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b9)`}>
            <circle cx="79.77" cy="79.14" r=".35" />
            <circle cx="77.77" cy="79.14" r=".35" />
            <circle cx="80.77" cy="77.14" r=".35" />
            <circle cx="78.77" cy="77.14" r=".35" />
            <circle cx="76.77" cy="77.14" r=".35" />
            <circle cx="79.77" cy="75.14" r=".35" />
            <circle cx="77.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ca)`}>
            <circle cx="79.77" cy="83.14" r=".35" />
            <circle cx="77.77" cy="83.14" r=".35" />
            <circle cx="80.77" cy="81.14" r=".35" />
            <circle cx="78.77" cy="81.14" r=".35" />
            <circle cx="76.77" cy="81.14" r=".35" />
            <circle cx="79.77" cy="79.14" r=".35" />
            <circle cx="77.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cb)`}>
            <circle cx="79.77" cy="87.14" r=".35" />
            <circle cx="77.77" cy="87.14" r=".35" />
            <circle cx="80.77" cy="85.14" r=".35" />
            <circle cx="78.77" cy="85.14" r=".35" />
            <circle cx="76.77" cy="85.14" r=".35" />
            <circle cx="79.77" cy="83.14" r=".35" />
            <circle cx="77.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cc)`}>
            <circle cx="79.77" cy="91.14" r=".35" />
            <circle cx="77.77" cy="91.14" r=".35" />
            <circle cx="80.77" cy="89.14" r=".35" />
            <circle cx="78.77" cy="89.14" r=".35" />
            <circle cx="76.77" cy="89.14" r=".35" />
            <circle cx="79.77" cy="87.14" r=".35" />
            <circle cx="77.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cd)`}>
            <circle cx="79.77" cy="95.14" r=".35" />
            <circle cx="77.77" cy="95.14" r=".35" />
            <circle cx="80.77" cy="93.14" r=".35" />
            <circle cx="78.77" cy="93.14" r=".35" />
            <circle cx="76.77" cy="93.14" r=".35" />
            <circle cx="79.77" cy="91.14" r=".35" />
            <circle cx="77.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ce)`}>
            <circle cx="79.77" cy="99.14" r=".35" />
            <circle cx="77.77" cy="99.14" r=".35" />
            <circle cx="80.77" cy="97.14" r=".35" />
            <circle cx="78.77" cy="97.14" r=".35" />
            <circle cx="76.77" cy="97.14" r=".35" />
            <circle cx="79.77" cy="95.14" r=".35" />
            <circle cx="77.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cf)`}>
            <circle cx="79.77" cy="103.14" r=".35" />
            <circle cx="77.77" cy="103.14" r=".35" />
            <circle cx="80.77" cy="101.14" r=".35" />
            <circle cx="78.77" cy="101.14" r=".35" />
            <circle cx="76.77" cy="101.14" r=".35" />
            <circle cx="79.77" cy="99.14" r=".35" />
            <circle cx="77.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cg)`}>
            <circle cx="79.77" cy="107.14" r=".35" />
            <circle cx="77.77" cy="107.14" r=".35" />
            <circle cx="80.77" cy="105.14" r=".35" />
            <circle cx="78.77" cy="105.14" r=".35" />
            <circle cx="76.77" cy="105.14" r=".35" />
            <circle cx="79.77" cy="103.14" r=".35" />
            <circle cx="77.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ch)`}>
            <circle cx="79.77" cy="111.14" r=".35" />
            <circle cx="77.77" cy="111.14" r=".35" />
            <circle cx="80.77" cy="109.14" r=".35" />
            <circle cx="78.77" cy="109.14" r=".35" />
            <circle cx="76.77" cy="109.14" r=".35" />
            <circle cx="79.77" cy="107.14" r=".35" />
            <circle cx="77.77" cy="107.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ci)`}>
            <circle cx="79.77" cy="115.14" r=".35" />
            <circle cx="77.77" cy="115.14" r=".35" />
            <circle cx="80.77" cy="113.14" r=".35" />
            <circle cx="78.77" cy="113.14" r=".35" />
            <circle cx="76.77" cy="113.14" r=".35" />
            <circle cx="79.77" cy="111.14" r=".35" />
            <circle cx="77.77" cy="111.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cj)`}>
            <circle cx="75.77" cy="27.14" r=".35" />
            <circle cx="73.77" cy="27.14" r=".35" />
            <circle cx="76.77" cy="25.14" r=".35" />
            <circle cx="74.77" cy="25.14" r=".35" />
            <circle cx="72.77" cy="25.14" r=".35" />
            <circle cx="75.77" cy="23.14" r=".35" />
            <circle cx="73.77" cy="23.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ck)`}>
            <circle cx="75.77" cy="31.14" r=".35" />
            <circle cx="73.77" cy="31.14" r=".35" />
            <circle cx="76.77" cy="29.14" r=".35" />
            <circle cx="74.77" cy="29.14" r=".35" />
            <circle cx="72.77" cy="29.14" r=".35" />
            <circle cx="75.77" cy="27.14" r=".35" />
            <circle cx="73.77" cy="27.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cl)`}>
            <circle cx="75.77" cy="35.14" r=".35" />
            <circle cx="73.77" cy="35.14" r=".35" />
            <circle cx="76.77" cy="33.14" r=".35" />
            <circle cx="74.77" cy="33.14" r=".35" />
            <circle cx="72.77" cy="33.14" r=".35" />
            <circle cx="75.77" cy="31.14" r=".35" />
            <circle cx="73.77" cy="31.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cm)`}>
            <circle cx="75.77" cy="39.14" r=".35" />
            <circle cx="73.77" cy="39.14" r=".35" />
            <circle cx="76.77" cy="37.14" r=".35" />
            <circle cx="74.77" cy="37.14" r=".35" />
            <circle cx="72.77" cy="37.14" r=".35" />
            <circle cx="75.77" cy="35.14" r=".35" />
            <circle cx="73.77" cy="35.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cn)`}>
            <circle cx="75.77" cy="43.14" r=".35" />
            <circle cx="73.77" cy="43.14" r=".35" />
            <circle cx="76.77" cy="41.14" r=".35" />
            <circle cx="74.77" cy="41.14" r=".35" />
            <circle cx="72.77" cy="41.14" r=".35" />
            <circle cx="75.77" cy="39.14" r=".35" />
            <circle cx="73.77" cy="39.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-co)`}>
            <circle cx="75.77" cy="47.14" r=".35" />
            <circle cx="73.77" cy="47.14" r=".35" />
            <circle cx="76.77" cy="45.14" r=".35" />
            <circle cx="74.77" cy="45.14" r=".35" />
            <circle cx="72.77" cy="45.14" r=".35" />
            <circle cx="75.77" cy="43.14" r=".35" />
            <circle cx="73.77" cy="43.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cp)`}>
            <circle cx="75.77" cy="51.14" r=".35" />
            <circle cx="73.77" cy="51.14" r=".35" />
            <circle cx="76.77" cy="49.14" r=".35" />
            <circle cx="74.77" cy="49.14" r=".35" />
            <circle cx="72.77" cy="49.14" r=".35" />
            <circle cx="75.77" cy="47.14" r=".35" />
            <circle cx="73.77" cy="47.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cq)`}>
            <circle cx="75.77" cy="55.14" r=".35" />
            <circle cx="73.77" cy="55.14" r=".35" />
            <circle cx="76.77" cy="53.14" r=".35" />
            <circle cx="74.77" cy="53.14" r=".35" />
            <circle cx="72.77" cy="53.14" r=".35" />
            <circle cx="75.77" cy="51.14" r=".35" />
            <circle cx="73.77" cy="51.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cr)`}>
            <circle cx="75.77" cy="59.14" r=".35" />
            <circle cx="73.77" cy="59.14" r=".35" />
            <circle cx="76.77" cy="57.14" r=".35" />
            <circle cx="74.77" cy="57.14" r=".35" />
            <circle cx="72.77" cy="57.14" r=".35" />
            <circle cx="75.77" cy="55.14" r=".35" />
            <circle cx="73.77" cy="55.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cs)`}>
            <circle cx="75.77" cy="63.14" r=".35" />
            <circle cx="73.77" cy="63.14" r=".35" />
            <circle cx="76.77" cy="61.14" r=".35" />
            <circle cx="74.77" cy="61.14" r=".35" />
            <circle cx="72.77" cy="61.14" r=".35" />
            <circle cx="75.77" cy="59.14" r=".35" />
            <circle cx="73.77" cy="59.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ct)`}>
            <circle cx="75.77" cy="67.14" r=".35" />
            <circle cx="73.77" cy="67.14" r=".35" />
            <circle cx="76.77" cy="65.14" r=".35" />
            <circle cx="74.77" cy="65.14" r=".35" />
            <circle cx="72.77" cy="65.14" r=".35" />
            <circle cx="75.77" cy="63.14" r=".35" />
            <circle cx="73.77" cy="63.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cu)`}>
            <circle cx="75.77" cy="71.14" r=".35" />
            <circle cx="73.77" cy="71.14" r=".35" />
            <circle cx="76.77" cy="69.14" r=".35" />
            <circle cx="74.77" cy="69.14" r=".35" />
            <circle cx="72.77" cy="69.14" r=".35" />
            <circle cx="75.77" cy="67.14" r=".35" />
            <circle cx="73.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cv)`}>
            <circle cx="75.77" cy="75.14" r=".35" />
            <circle cx="73.77" cy="75.14" r=".35" />
            <circle cx="76.77" cy="73.14" r=".35" />
            <circle cx="74.77" cy="73.14" r=".35" />
            <circle cx="72.77" cy="73.14" r=".35" />
            <circle cx="75.77" cy="71.14" r=".35" />
            <circle cx="73.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cw)`}>
            <circle cx="75.77" cy="79.14" r=".35" />
            <circle cx="73.77" cy="79.14" r=".35" />
            <circle cx="76.77" cy="77.14" r=".35" />
            <circle cx="74.77" cy="77.14" r=".35" />
            <circle cx="72.77" cy="77.14" r=".35" />
            <circle cx="75.77" cy="75.14" r=".35" />
            <circle cx="73.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cx)`}>
            <circle cx="75.77" cy="83.14" r=".35" />
            <circle cx="73.77" cy="83.14" r=".35" />
            <circle cx="76.77" cy="81.14" r=".35" />
            <circle cx="74.77" cy="81.14" r=".35" />
            <circle cx="72.77" cy="81.14" r=".35" />
            <circle cx="75.77" cy="79.14" r=".35" />
            <circle cx="73.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cy)`}>
            <circle cx="75.77" cy="87.14" r=".35" />
            <circle cx="73.77" cy="87.14" r=".35" />
            <circle cx="76.77" cy="85.14" r=".35" />
            <circle cx="74.77" cy="85.14" r=".35" />
            <circle cx="72.77" cy="85.14" r=".35" />
            <circle cx="75.77" cy="83.14" r=".35" />
            <circle cx="73.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cz)`}>
            <circle cx="75.77" cy="91.14" r=".35" />
            <circle cx="73.77" cy="91.14" r=".35" />
            <circle cx="76.77" cy="89.14" r=".35" />
            <circle cx="74.77" cy="89.14" r=".35" />
            <circle cx="72.77" cy="89.14" r=".35" />
            <circle cx="75.77" cy="87.14" r=".35" />
            <circle cx="73.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cA)`}>
            <circle cx="75.77" cy="95.14" r=".35" />
            <circle cx="73.77" cy="95.14" r=".35" />
            <circle cx="76.77" cy="93.14" r=".35" />
            <circle cx="74.77" cy="93.14" r=".35" />
            <circle cx="72.77" cy="93.14" r=".35" />
            <circle cx="75.77" cy="91.14" r=".35" />
            <circle cx="73.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cB)`}>
            <circle cx="75.77" cy="99.14" r=".35" />
            <circle cx="73.77" cy="99.14" r=".35" />
            <circle cx="76.77" cy="97.14" r=".35" />
            <circle cx="74.77" cy="97.14" r=".35" />
            <circle cx="72.77" cy="97.14" r=".35" />
            <circle cx="75.77" cy="95.14" r=".35" />
            <circle cx="73.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cC)`}>
            <circle cx="75.77" cy="103.14" r=".35" />
            <circle cx="73.77" cy="103.14" r=".35" />
            <circle cx="76.77" cy="101.14" r=".35" />
            <circle cx="74.77" cy="101.14" r=".35" />
            <circle cx="72.77" cy="101.14" r=".35" />
            <circle cx="75.77" cy="99.14" r=".35" />
            <circle cx="73.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cD)`}>
            <circle cx="75.77" cy="107.14" r=".35" />
            <circle cx="73.77" cy="107.14" r=".35" />
            <circle cx="76.77" cy="105.14" r=".35" />
            <circle cx="74.77" cy="105.14" r=".35" />
            <circle cx="72.77" cy="105.14" r=".35" />
            <circle cx="75.77" cy="103.14" r=".35" />
            <circle cx="73.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cE)`}>
            <circle cx="75.77" cy="111.14" r=".35" />
            <circle cx="73.77" cy="111.14" r=".35" />
            <circle cx="76.77" cy="109.14" r=".35" />
            <circle cx="74.77" cy="109.14" r=".35" />
            <circle cx="72.77" cy="109.14" r=".35" />
            <circle cx="75.77" cy="107.14" r=".35" />
            <circle cx="73.77" cy="107.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cF)`}>
            <circle cx="75.77" cy="115.14" r=".35" />
            <circle cx="73.77" cy="115.14" r=".35" />
            <circle cx="76.77" cy="113.14" r=".35" />
            <circle cx="74.77" cy="113.14" r=".35" />
            <circle cx="72.77" cy="113.14" r=".35" />
            <circle cx="75.77" cy="111.14" r=".35" />
            <circle cx="73.77" cy="111.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cG)`}>
            <circle cx="71.77" cy="27.14" r=".35" />
            <circle cx="69.77" cy="27.14" r=".35" />
            <circle cx="72.77" cy="25.14" r=".35" />
            <circle cx="70.77" cy="25.14" r=".35" />
            <circle cx="68.77" cy="25.14" r=".35" />
            <circle cx="71.77" cy="23.14" r=".35" />
            <circle cx="69.77" cy="23.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cH)`}>
            <circle cx="71.77" cy="31.14" r=".35" />
            <circle cx="69.77" cy="31.14" r=".35" />
            <circle cx="72.77" cy="29.14" r=".35" />
            <circle cx="70.77" cy="29.14" r=".35" />
            <circle cx="68.77" cy="29.14" r=".35" />
            <circle cx="71.77" cy="27.14" r=".35" />
            <circle cx="69.77" cy="27.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cI)`}>
            <circle cx="71.77" cy="35.14" r=".35" />
            <circle cx="69.77" cy="35.14" r=".35" />
            <circle cx="72.77" cy="33.14" r=".35" />
            <circle cx="70.77" cy="33.14" r=".35" />
            <circle cx="68.77" cy="33.14" r=".35" />
            <circle cx="71.77" cy="31.14" r=".35" />
            <circle cx="69.77" cy="31.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cJ)`}>
            <circle cx="71.77" cy="39.14" r=".35" />
            <circle cx="69.77" cy="39.14" r=".35" />
            <circle cx="72.77" cy="37.14" r=".35" />
            <circle cx="70.77" cy="37.14" r=".35" />
            <circle cx="68.77" cy="37.14" r=".35" />
            <circle cx="71.77" cy="35.14" r=".35" />
            <circle cx="69.77" cy="35.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cK)`}>
            <circle cx="71.77" cy="43.14" r=".35" />
            <circle cx="69.77" cy="43.14" r=".35" />
            <circle cx="72.77" cy="41.14" r=".35" />
            <circle cx="70.77" cy="41.14" r=".35" />
            <circle cx="68.77" cy="41.14" r=".35" />
            <circle cx="71.77" cy="39.14" r=".35" />
            <circle cx="69.77" cy="39.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cL)`}>
            <circle cx="71.77" cy="47.14" r=".35" />
            <circle cx="69.77" cy="47.14" r=".35" />
            <circle cx="72.77" cy="45.14" r=".35" />
            <circle cx="70.77" cy="45.14" r=".35" />
            <circle cx="68.77" cy="45.14" r=".35" />
            <circle cx="71.77" cy="43.14" r=".35" />
            <circle cx="69.77" cy="43.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cM)`}>
            <circle cx="71.77" cy="51.14" r=".35" />
            <circle cx="69.77" cy="51.14" r=".35" />
            <circle cx="72.77" cy="49.14" r=".35" />
            <circle cx="70.77" cy="49.14" r=".35" />
            <circle cx="68.77" cy="49.14" r=".35" />
            <circle cx="71.77" cy="47.14" r=".35" />
            <circle cx="69.77" cy="47.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cN)`}>
            <circle cx="71.77" cy="55.14" r=".35" />
            <circle cx="69.77" cy="55.14" r=".35" />
            <circle cx="72.77" cy="53.14" r=".35" />
            <circle cx="70.77" cy="53.14" r=".35" />
            <circle cx="68.77" cy="53.14" r=".35" />
            <circle cx="71.77" cy="51.14" r=".35" />
            <circle cx="69.77" cy="51.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cO)`}>
            <circle cx="71.77" cy="59.14" r=".35" />
            <circle cx="69.77" cy="59.14" r=".35" />
            <circle cx="72.77" cy="57.14" r=".35" />
            <circle cx="70.77" cy="57.14" r=".35" />
            <circle cx="68.77" cy="57.14" r=".35" />
            <circle cx="71.77" cy="55.14" r=".35" />
            <circle cx="69.77" cy="55.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cP)`}>
            <circle cx="71.77" cy="63.14" r=".35" />
            <circle cx="69.77" cy="63.14" r=".35" />
            <circle cx="72.77" cy="61.14" r=".35" />
            <circle cx="70.77" cy="61.14" r=".35" />
            <circle cx="68.77" cy="61.14" r=".35" />
            <circle cx="71.77" cy="59.14" r=".35" />
            <circle cx="69.77" cy="59.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cQ)`}>
            <circle cx="71.77" cy="67.14" r=".35" />
            <circle cx="69.77" cy="67.14" r=".35" />
            <circle cx="72.77" cy="65.14" r=".35" />
            <circle cx="70.77" cy="65.14" r=".35" />
            <circle cx="68.77" cy="65.14" r=".35" />
            <circle cx="71.77" cy="63.14" r=".35" />
            <circle cx="69.77" cy="63.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cR)`}>
            <circle cx="71.77" cy="71.14" r=".35" />
            <circle cx="69.77" cy="71.14" r=".35" />
            <circle cx="72.77" cy="69.14" r=".35" />
            <circle cx="70.77" cy="69.14" r=".35" />
            <circle cx="68.77" cy="69.14" r=".35" />
            <circle cx="71.77" cy="67.14" r=".35" />
            <circle cx="69.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cS)`}>
            <circle cx="71.77" cy="75.14" r=".35" />
            <circle cx="69.77" cy="75.14" r=".35" />
            <circle cx="72.77" cy="73.14" r=".35" />
            <circle cx="70.77" cy="73.14" r=".35" />
            <circle cx="68.77" cy="73.14" r=".35" />
            <circle cx="71.77" cy="71.14" r=".35" />
            <circle cx="69.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cT)`}>
            <circle cx="71.77" cy="79.14" r=".35" />
            <circle cx="69.77" cy="79.14" r=".35" />
            <circle cx="72.77" cy="77.14" r=".35" />
            <circle cx="70.77" cy="77.14" r=".35" />
            <circle cx="68.77" cy="77.14" r=".35" />
            <circle cx="71.77" cy="75.14" r=".35" />
            <circle cx="69.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cU)`}>
            <circle cx="71.77" cy="83.14" r=".35" />
            <circle cx="69.77" cy="83.14" r=".35" />
            <circle cx="72.77" cy="81.14" r=".35" />
            <circle cx="70.77" cy="81.14" r=".35" />
            <circle cx="68.77" cy="81.14" r=".35" />
            <circle cx="71.77" cy="79.14" r=".35" />
            <circle cx="69.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cV)`}>
            <circle cx="71.77" cy="87.14" r=".35" />
            <circle cx="69.77" cy="87.14" r=".35" />
            <circle cx="72.77" cy="85.14" r=".35" />
            <circle cx="70.77" cy="85.14" r=".35" />
            <circle cx="68.77" cy="85.14" r=".35" />
            <circle cx="71.77" cy="83.14" r=".35" />
            <circle cx="69.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cW)`}>
            <circle cx="71.77" cy="91.14" r=".35" />
            <circle cx="69.77" cy="91.14" r=".35" />
            <circle cx="72.77" cy="89.14" r=".35" />
            <circle cx="70.77" cy="89.14" r=".35" />
            <circle cx="68.77" cy="89.14" r=".35" />
            <circle cx="71.77" cy="87.14" r=".35" />
            <circle cx="69.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cX)`}>
            <circle cx="71.77" cy="95.14" r=".35" />
            <circle cx="69.77" cy="95.14" r=".35" />
            <circle cx="72.77" cy="93.14" r=".35" />
            <circle cx="70.77" cy="93.14" r=".35" />
            <circle cx="68.77" cy="93.14" r=".35" />
            <circle cx="71.77" cy="91.14" r=".35" />
            <circle cx="69.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cY)`}>
            <circle cx="71.77" cy="99.14" r=".35" />
            <circle cx="69.77" cy="99.14" r=".35" />
            <circle cx="72.77" cy="97.14" r=".35" />
            <circle cx="70.77" cy="97.14" r=".35" />
            <circle cx="68.77" cy="97.14" r=".35" />
            <circle cx="71.77" cy="95.14" r=".35" />
            <circle cx="69.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cZ)`}>
            <circle cx="71.77" cy="103.14" r=".35" />
            <circle cx="69.77" cy="103.14" r=".35" />
            <circle cx="72.77" cy="101.14" r=".35" />
            <circle cx="70.77" cy="101.14" r=".35" />
            <circle cx="68.77" cy="101.14" r=".35" />
            <circle cx="71.77" cy="99.14" r=".35" />
            <circle cx="69.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-c0)`}>
            <circle cx="71.77" cy="107.14" r=".35" />
            <circle cx="69.77" cy="107.14" r=".35" />
            <circle cx="72.77" cy="105.14" r=".35" />
            <circle cx="70.77" cy="105.14" r=".35" />
            <circle cx="68.77" cy="105.14" r=".35" />
            <circle cx="71.77" cy="103.14" r=".35" />
            <circle cx="69.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-c1)`}>
            <circle cx="71.77" cy="111.14" r=".35" />
            <circle cx="69.77" cy="111.14" r=".35" />
            <circle cx="72.77" cy="109.14" r=".35" />
            <circle cx="70.77" cy="109.14" r=".35" />
            <circle cx="68.77" cy="109.14" r=".35" />
            <circle cx="71.77" cy="107.14" r=".35" />
            <circle cx="69.77" cy="107.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-c2)`}>
            <circle cx="71.77" cy="115.14" r=".35" />
            <circle cx="69.77" cy="115.14" r=".35" />
            <circle cx="72.77" cy="113.14" r=".35" />
            <circle cx="70.77" cy="113.14" r=".35" />
            <circle cx="68.77" cy="113.14" r=".35" />
            <circle cx="71.77" cy="111.14" r=".35" />
            <circle cx="69.77" cy="111.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-c3)`}>
            <circle cx="67.77" cy="27.14" r=".35" />
            <circle cx="65.77" cy="27.14" r=".35" />
            <circle cx="68.77" cy="25.14" r=".35" />
            <circle cx="66.77" cy="25.14" r=".35" />
            <circle cx="64.77" cy="25.14" r=".35" />
            <circle cx="67.77" cy="23.14" r=".35" />
            <circle cx="65.77" cy="23.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-c4)`}>
            <circle cx="67.77" cy="31.14" r=".35" />
            <circle cx="65.77" cy="31.14" r=".35" />
            <circle cx="68.77" cy="29.14" r=".35" />
            <circle cx="66.77" cy="29.14" r=".35" />
            <circle cx="64.77" cy="29.14" r=".35" />
            <circle cx="67.77" cy="27.14" r=".35" />
            <circle cx="65.77" cy="27.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-c5)`}>
            <circle cx="67.77" cy="35.14" r=".35" />
            <circle cx="65.77" cy="35.14" r=".35" />
            <circle cx="68.77" cy="33.14" r=".35" />
            <circle cx="66.77" cy="33.14" r=".35" />
            <circle cx="64.77" cy="33.14" r=".35" />
            <circle cx="67.77" cy="31.14" r=".35" />
            <circle cx="65.77" cy="31.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-c6)`}>
            <circle cx="67.77" cy="39.14" r=".35" />
            <circle cx="65.77" cy="39.14" r=".35" />
            <circle cx="68.77" cy="37.14" r=".35" />
            <circle cx="66.77" cy="37.14" r=".35" />
            <circle cx="64.77" cy="37.14" r=".35" />
            <circle cx="67.77" cy="35.14" r=".35" />
            <circle cx="65.77" cy="35.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-c7)`}>
            <circle cx="67.77" cy="43.14" r=".35" />
            <circle cx="65.77" cy="43.14" r=".35" />
            <circle cx="68.77" cy="41.14" r=".35" />
            <circle cx="66.77" cy="41.14" r=".35" />
            <circle cx="64.77" cy="41.14" r=".35" />
            <circle cx="67.77" cy="39.14" r=".35" />
            <circle cx="65.77" cy="39.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-c8)`}>
            <circle cx="67.77" cy="47.14" r=".35" />
            <circle cx="65.77" cy="47.14" r=".35" />
            <circle cx="68.77" cy="45.14" r=".35" />
            <circle cx="66.77" cy="45.14" r=".35" />
            <circle cx="64.77" cy="45.14" r=".35" />
            <circle cx="67.77" cy="43.14" r=".35" />
            <circle cx="65.77" cy="43.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-c9)`}>
            <circle cx="67.77" cy="51.14" r=".35" />
            <circle cx="65.77" cy="51.14" r=".35" />
            <circle cx="68.77" cy="49.14" r=".35" />
            <circle cx="66.77" cy="49.14" r=".35" />
            <circle cx="64.77" cy="49.14" r=".35" />
            <circle cx="67.77" cy="47.14" r=".35" />
            <circle cx="65.77" cy="47.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-da)`}>
            <circle cx="67.77" cy="55.14" r=".35" />
            <circle cx="65.77" cy="55.14" r=".35" />
            <circle cx="68.77" cy="53.14" r=".35" />
            <circle cx="66.77" cy="53.14" r=".35" />
            <circle cx="64.77" cy="53.14" r=".35" />
            <circle cx="67.77" cy="51.14" r=".35" />
            <circle cx="65.77" cy="51.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-db)`}>
            <circle cx="67.77" cy="59.14" r=".35" />
            <circle cx="65.77" cy="59.14" r=".35" />
            <circle cx="68.77" cy="57.14" r=".35" />
            <circle cx="66.77" cy="57.14" r=".35" />
            <circle cx="64.77" cy="57.14" r=".35" />
            <circle cx="67.77" cy="55.14" r=".35" />
            <circle cx="65.77" cy="55.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dc)`}>
            <circle cx="67.77" cy="63.14" r=".35" />
            <circle cx="65.77" cy="63.14" r=".35" />
            <circle cx="68.77" cy="61.14" r=".35" />
            <circle cx="66.77" cy="61.14" r=".35" />
            <circle cx="64.77" cy="61.14" r=".35" />
            <circle cx="67.77" cy="59.14" r=".35" />
            <circle cx="65.77" cy="59.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dd)`}>
            <circle cx="67.77" cy="67.14" r=".35" />
            <circle cx="65.77" cy="67.14" r=".35" />
            <circle cx="68.77" cy="65.14" r=".35" />
            <circle cx="66.77" cy="65.14" r=".35" />
            <circle cx="64.77" cy="65.14" r=".35" />
            <circle cx="67.77" cy="63.14" r=".35" />
            <circle cx="65.77" cy="63.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-de)`}>
            <circle cx="67.77" cy="71.14" r=".35" />
            <circle cx="65.77" cy="71.14" r=".35" />
            <circle cx="68.77" cy="69.14" r=".35" />
            <circle cx="66.77" cy="69.14" r=".35" />
            <circle cx="64.77" cy="69.14" r=".35" />
            <circle cx="67.77" cy="67.14" r=".35" />
            <circle cx="65.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-df)`}>
            <circle cx="67.77" cy="75.14" r=".35" />
            <circle cx="65.77" cy="75.14" r=".35" />
            <circle cx="68.77" cy="73.14" r=".35" />
            <circle cx="66.77" cy="73.14" r=".35" />
            <circle cx="64.77" cy="73.14" r=".35" />
            <circle cx="67.77" cy="71.14" r=".35" />
            <circle cx="65.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dg)`}>
            <circle cx="67.77" cy="79.14" r=".35" />
            <circle cx="65.77" cy="79.14" r=".35" />
            <circle cx="68.77" cy="77.14" r=".35" />
            <circle cx="66.77" cy="77.14" r=".35" />
            <circle cx="64.77" cy="77.14" r=".35" />
            <circle cx="67.77" cy="75.14" r=".35" />
            <circle cx="65.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dh)`}>
            <circle cx="67.77" cy="83.14" r=".35" />
            <circle cx="65.77" cy="83.14" r=".35" />
            <circle cx="68.77" cy="81.14" r=".35" />
            <circle cx="66.77" cy="81.14" r=".35" />
            <circle cx="64.77" cy="81.14" r=".35" />
            <circle cx="67.77" cy="79.14" r=".35" />
            <circle cx="65.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-di)`}>
            <circle cx="67.77" cy="87.14" r=".35" />
            <circle cx="65.77" cy="87.14" r=".35" />
            <circle cx="68.77" cy="85.14" r=".35" />
            <circle cx="66.77" cy="85.14" r=".35" />
            <circle cx="64.77" cy="85.14" r=".35" />
            <circle cx="67.77" cy="83.14" r=".35" />
            <circle cx="65.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dj)`}>
            <circle cx="67.77" cy="91.14" r=".35" />
            <circle cx="65.77" cy="91.14" r=".35" />
            <circle cx="68.77" cy="89.14" r=".35" />
            <circle cx="66.77" cy="89.14" r=".35" />
            <circle cx="64.77" cy="89.14" r=".35" />
            <circle cx="67.77" cy="87.14" r=".35" />
            <circle cx="65.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dk)`}>
            <circle cx="67.77" cy="95.14" r=".35" />
            <circle cx="65.77" cy="95.14" r=".35" />
            <circle cx="68.77" cy="93.14" r=".35" />
            <circle cx="66.77" cy="93.14" r=".35" />
            <circle cx="64.77" cy="93.14" r=".35" />
            <circle cx="67.77" cy="91.14" r=".35" />
            <circle cx="65.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dl)`}>
            <circle cx="67.77" cy="99.14" r=".35" />
            <circle cx="65.77" cy="99.14" r=".35" />
            <circle cx="68.77" cy="97.14" r=".35" />
            <circle cx="66.77" cy="97.14" r=".35" />
            <circle cx="64.77" cy="97.14" r=".35" />
            <circle cx="67.77" cy="95.14" r=".35" />
            <circle cx="65.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dm)`}>
            <circle cx="67.77" cy="103.14" r=".35" />
            <circle cx="65.77" cy="103.14" r=".35" />
            <circle cx="68.77" cy="101.14" r=".35" />
            <circle cx="66.77" cy="101.14" r=".35" />
            <circle cx="64.77" cy="101.14" r=".35" />
            <circle cx="67.77" cy="99.14" r=".35" />
            <circle cx="65.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dn)`}>
            <circle cx="67.77" cy="107.14" r=".35" />
            <circle cx="65.77" cy="107.14" r=".35" />
            <circle cx="68.77" cy="105.14" r=".35" />
            <circle cx="66.77" cy="105.14" r=".35" />
            <circle cx="64.77" cy="105.14" r=".35" />
            <circle cx="67.77" cy="103.14" r=".35" />
            <circle cx="65.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-do)`}>
            <circle cx="67.77" cy="111.14" r=".35" />
            <circle cx="65.77" cy="111.14" r=".35" />
            <circle cx="68.77" cy="109.14" r=".35" />
            <circle cx="66.77" cy="109.14" r=".35" />
            <circle cx="64.77" cy="109.14" r=".35" />
            <circle cx="67.77" cy="107.14" r=".35" />
            <circle cx="65.77" cy="107.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dp)`}>
            <circle cx="67.77" cy="115.14" r=".35" />
            <circle cx="65.77" cy="115.14" r=".35" />
            <circle cx="68.77" cy="113.14" r=".35" />
            <circle cx="66.77" cy="113.14" r=".35" />
            <circle cx="64.77" cy="113.14" r=".35" />
            <circle cx="67.77" cy="111.14" r=".35" />
            <circle cx="65.77" cy="111.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dq)`}>
            <circle cx="63.77" cy="27.14" r=".35" />
            <circle cx="61.77" cy="27.14" r=".35" />
            <circle cx="64.77" cy="25.14" r=".35" />
            <circle cx="62.77" cy="25.14" r=".35" />
            <circle cx="60.77" cy="25.14" r=".35" />
            <circle cx="63.77" cy="23.14" r=".35" />
            <circle cx="61.77" cy="23.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dr)`}>
            <circle cx="63.77" cy="31.14" r=".35" />
            <circle cx="61.77" cy="31.14" r=".35" />
            <circle cx="64.77" cy="29.14" r=".35" />
            <circle cx="62.77" cy="29.14" r=".35" />
            <circle cx="60.77" cy="29.14" r=".35" />
            <circle cx="63.77" cy="27.14" r=".35" />
            <circle cx="61.77" cy="27.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ds)`}>
            <circle cx="63.77" cy="35.14" r=".35" />
            <circle cx="61.77" cy="35.14" r=".35" />
            <circle cx="64.77" cy="33.14" r=".35" />
            <circle cx="62.77" cy="33.14" r=".35" />
            <circle cx="60.77" cy="33.14" r=".35" />
            <circle cx="63.77" cy="31.14" r=".35" />
            <circle cx="61.77" cy="31.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dt)`}>
            <circle cx="63.77" cy="39.14" r=".35" />
            <circle cx="61.77" cy="39.14" r=".35" />
            <circle cx="64.77" cy="37.14" r=".35" />
            <circle cx="62.77" cy="37.14" r=".35" />
            <circle cx="60.77" cy="37.14" r=".35" />
            <circle cx="63.77" cy="35.14" r=".35" />
            <circle cx="61.77" cy="35.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-du)`}>
            <circle cx="63.77" cy="43.14" r=".35" />
            <circle cx="61.77" cy="43.14" r=".35" />
            <circle cx="64.77" cy="41.14" r=".35" />
            <circle cx="62.77" cy="41.14" r=".35" />
            <circle cx="60.77" cy="41.14" r=".35" />
            <circle cx="63.77" cy="39.14" r=".35" />
            <circle cx="61.77" cy="39.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dv)`}>
            <circle cx="63.77" cy="47.14" r=".35" />
            <circle cx="61.77" cy="47.14" r=".35" />
            <circle cx="64.77" cy="45.14" r=".35" />
            <circle cx="62.77" cy="45.14" r=".35" />
            <circle cx="60.77" cy="45.14" r=".35" />
            <circle cx="63.77" cy="43.14" r=".35" />
            <circle cx="61.77" cy="43.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dw)`}>
            <circle cx="63.77" cy="51.14" r=".35" />
            <circle cx="61.77" cy="51.14" r=".35" />
            <circle cx="64.77" cy="49.14" r=".35" />
            <circle cx="62.77" cy="49.14" r=".35" />
            <circle cx="60.77" cy="49.14" r=".35" />
            <circle cx="63.77" cy="47.14" r=".35" />
            <circle cx="61.77" cy="47.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dx)`}>
            <circle cx="63.77" cy="55.14" r=".35" />
            <circle cx="61.77" cy="55.14" r=".35" />
            <circle cx="64.77" cy="53.14" r=".35" />
            <circle cx="62.77" cy="53.14" r=".35" />
            <circle cx="60.77" cy="53.14" r=".35" />
            <circle cx="63.77" cy="51.14" r=".35" />
            <circle cx="61.77" cy="51.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dy)`}>
            <circle cx="63.77" cy="59.14" r=".35" />
            <circle cx="61.77" cy="59.14" r=".35" />
            <circle cx="64.77" cy="57.14" r=".35" />
            <circle cx="62.77" cy="57.14" r=".35" />
            <circle cx="60.77" cy="57.14" r=".35" />
            <circle cx="63.77" cy="55.14" r=".35" />
            <circle cx="61.77" cy="55.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dz)`}>
            <circle cx="63.77" cy="63.14" r=".35" />
            <circle cx="61.77" cy="63.14" r=".35" />
            <circle cx="64.77" cy="61.14" r=".35" />
            <circle cx="62.77" cy="61.14" r=".35" />
            <circle cx="60.77" cy="61.14" r=".35" />
            <circle cx="63.77" cy="59.14" r=".35" />
            <circle cx="61.77" cy="59.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dA)`}>
            <circle cx="63.77" cy="67.14" r=".35" />
            <circle cx="61.77" cy="67.14" r=".35" />
            <circle cx="64.77" cy="65.14" r=".35" />
            <circle cx="62.77" cy="65.14" r=".35" />
            <circle cx="60.77" cy="65.14" r=".35" />
            <circle cx="63.77" cy="63.14" r=".35" />
            <circle cx="61.77" cy="63.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dB)`}>
            <circle cx="63.77" cy="71.14" r=".35" />
            <circle cx="61.77" cy="71.14" r=".35" />
            <circle cx="64.77" cy="69.14" r=".35" />
            <circle cx="62.77" cy="69.14" r=".35" />
            <circle cx="60.77" cy="69.14" r=".35" />
            <circle cx="63.77" cy="67.14" r=".35" />
            <circle cx="61.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dC)`}>
            <circle cx="63.77" cy="75.14" r=".35" />
            <circle cx="61.77" cy="75.14" r=".35" />
            <circle cx="64.77" cy="73.14" r=".35" />
            <circle cx="62.77" cy="73.14" r=".35" />
            <circle cx="60.77" cy="73.14" r=".35" />
            <circle cx="63.77" cy="71.14" r=".35" />
            <circle cx="61.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dD)`}>
            <circle cx="63.77" cy="79.14" r=".35" />
            <circle cx="61.77" cy="79.14" r=".35" />
            <circle cx="64.77" cy="77.14" r=".35" />
            <circle cx="62.77" cy="77.14" r=".35" />
            <circle cx="60.77" cy="77.14" r=".35" />
            <circle cx="63.77" cy="75.14" r=".35" />
            <circle cx="61.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dE)`}>
            <circle cx="63.77" cy="83.14" r=".35" />
            <circle cx="61.77" cy="83.14" r=".35" />
            <circle cx="64.77" cy="81.14" r=".35" />
            <circle cx="62.77" cy="81.14" r=".35" />
            <circle cx="60.77" cy="81.14" r=".35" />
            <circle cx="63.77" cy="79.14" r=".35" />
            <circle cx="61.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dF)`}>
            <circle cx="63.77" cy="87.14" r=".35" />
            <circle cx="61.77" cy="87.14" r=".35" />
            <circle cx="64.77" cy="85.14" r=".35" />
            <circle cx="62.77" cy="85.14" r=".35" />
            <circle cx="60.77" cy="85.14" r=".35" />
            <circle cx="63.77" cy="83.14" r=".35" />
            <circle cx="61.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dG)`}>
            <circle cx="63.77" cy="91.14" r=".35" />
            <circle cx="61.77" cy="91.14" r=".35" />
            <circle cx="64.77" cy="89.14" r=".35" />
            <circle cx="62.77" cy="89.14" r=".35" />
            <circle cx="60.77" cy="89.14" r=".35" />
            <circle cx="63.77" cy="87.14" r=".35" />
            <circle cx="61.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dH)`}>
            <circle cx="63.77" cy="95.14" r=".35" />
            <circle cx="61.77" cy="95.14" r=".35" />
            <circle cx="64.77" cy="93.14" r=".35" />
            <circle cx="62.77" cy="93.14" r=".35" />
            <circle cx="60.77" cy="93.14" r=".35" />
            <circle cx="63.77" cy="91.14" r=".35" />
            <circle cx="61.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dI)`}>
            <circle cx="63.77" cy="99.14" r=".35" />
            <circle cx="61.77" cy="99.14" r=".35" />
            <circle cx="64.77" cy="97.14" r=".35" />
            <circle cx="62.77" cy="97.14" r=".35" />
            <circle cx="60.77" cy="97.14" r=".35" />
            <circle cx="63.77" cy="95.14" r=".35" />
            <circle cx="61.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dJ)`}>
            <circle cx="63.77" cy="103.14" r=".35" />
            <circle cx="61.77" cy="103.14" r=".35" />
            <circle cx="64.77" cy="101.14" r=".35" />
            <circle cx="62.77" cy="101.14" r=".35" />
            <circle cx="60.77" cy="101.14" r=".35" />
            <circle cx="63.77" cy="99.14" r=".35" />
            <circle cx="61.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dK)`}>
            <circle cx="63.77" cy="107.14" r=".35" />
            <circle cx="61.77" cy="107.14" r=".35" />
            <circle cx="64.77" cy="105.14" r=".35" />
            <circle cx="62.77" cy="105.14" r=".35" />
            <circle cx="60.77" cy="105.14" r=".35" />
            <circle cx="63.77" cy="103.14" r=".35" />
            <circle cx="61.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dL)`}>
            <circle cx="63.77" cy="111.14" r=".35" />
            <circle cx="61.77" cy="111.14" r=".35" />
            <circle cx="64.77" cy="109.14" r=".35" />
            <circle cx="62.77" cy="109.14" r=".35" />
            <circle cx="60.77" cy="109.14" r=".35" />
            <circle cx="63.77" cy="107.14" r=".35" />
            <circle cx="61.77" cy="107.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dM)`}>
            <circle cx="63.77" cy="115.14" r=".35" />
            <circle cx="61.77" cy="115.14" r=".35" />
            <circle cx="64.77" cy="113.14" r=".35" />
            <circle cx="62.77" cy="113.14" r=".35" />
            <circle cx="60.77" cy="113.14" r=".35" />
            <circle cx="63.77" cy="111.14" r=".35" />
            <circle cx="61.77" cy="111.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dN)`}>
            <circle cx="59.77" cy="27.14" r=".35" />
            <circle cx="57.77" cy="27.14" r=".35" />
            <circle cx="60.77" cy="25.14" r=".35" />
            <circle cx="58.77" cy="25.14" r=".35" />
            <circle cx="56.77" cy="25.14" r=".35" />
            <circle cx="59.77" cy="23.14" r=".35" />
            <circle cx="57.77" cy="23.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dO)`}>
            <circle cx="59.77" cy="31.14" r=".35" />
            <circle cx="57.77" cy="31.14" r=".35" />
            <circle cx="60.77" cy="29.14" r=".35" />
            <circle cx="58.77" cy="29.14" r=".35" />
            <circle cx="56.77" cy="29.14" r=".35" />
            <circle cx="59.77" cy="27.14" r=".35" />
            <circle cx="57.77" cy="27.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dP)`}>
            <circle cx="59.77" cy="35.14" r=".35" />
            <circle cx="57.77" cy="35.14" r=".35" />
            <circle cx="60.77" cy="33.14" r=".35" />
            <circle cx="58.77" cy="33.14" r=".35" />
            <circle cx="56.77" cy="33.14" r=".35" />
            <circle cx="59.77" cy="31.14" r=".35" />
            <circle cx="57.77" cy="31.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dQ)`}>
            <circle cx="59.77" cy="39.14" r=".35" />
            <circle cx="57.77" cy="39.14" r=".35" />
            <circle cx="60.77" cy="37.14" r=".35" />
            <circle cx="58.77" cy="37.14" r=".35" />
            <circle cx="56.77" cy="37.14" r=".35" />
            <circle cx="59.77" cy="35.14" r=".35" />
            <circle cx="57.77" cy="35.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dR)`}>
            <circle cx="59.77" cy="43.14" r=".35" />
            <circle cx="57.77" cy="43.14" r=".35" />
            <circle cx="60.77" cy="41.14" r=".35" />
            <circle cx="58.77" cy="41.14" r=".35" />
            <circle cx="56.77" cy="41.14" r=".35" />
            <circle cx="59.77" cy="39.14" r=".35" />
            <circle cx="57.77" cy="39.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dS)`}>
            <circle cx="59.77" cy="47.14" r=".35" />
            <circle cx="57.77" cy="47.14" r=".35" />
            <circle cx="60.77" cy="45.14" r=".35" />
            <circle cx="58.77" cy="45.14" r=".35" />
            <circle cx="56.77" cy="45.14" r=".35" />
            <circle cx="59.77" cy="43.14" r=".35" />
            <circle cx="57.77" cy="43.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dT)`}>
            <circle cx="59.77" cy="51.14" r=".35" />
            <circle cx="57.77" cy="51.14" r=".35" />
            <circle cx="60.77" cy="49.14" r=".35" />
            <circle cx="58.77" cy="49.14" r=".35" />
            <circle cx="56.77" cy="49.14" r=".35" />
            <circle cx="59.77" cy="47.14" r=".35" />
            <circle cx="57.77" cy="47.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dU)`}>
            <circle cx="59.77" cy="55.14" r=".35" />
            <circle cx="57.77" cy="55.14" r=".35" />
            <circle cx="60.77" cy="53.14" r=".35" />
            <circle cx="58.77" cy="53.14" r=".35" />
            <circle cx="56.77" cy="53.14" r=".35" />
            <circle cx="59.77" cy="51.14" r=".35" />
            <circle cx="57.77" cy="51.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dV)`}>
            <circle cx="59.77" cy="59.14" r=".35" />
            <circle cx="57.77" cy="59.14" r=".35" />
            <circle cx="60.77" cy="57.14" r=".35" />
            <circle cx="58.77" cy="57.14" r=".35" />
            <circle cx="56.77" cy="57.14" r=".35" />
            <circle cx="59.77" cy="55.14" r=".35" />
            <circle cx="57.77" cy="55.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dW)`}>
            <circle cx="59.77" cy="63.14" r=".35" />
            <circle cx="57.77" cy="63.14" r=".35" />
            <circle cx="60.77" cy="61.14" r=".35" />
            <circle cx="58.77" cy="61.14" r=".35" />
            <circle cx="56.77" cy="61.14" r=".35" />
            <circle cx="59.77" cy="59.14" r=".35" />
            <circle cx="57.77" cy="59.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dX)`}>
            <circle cx="59.77" cy="67.14" r=".35" />
            <circle cx="57.77" cy="67.14" r=".35" />
            <circle cx="60.77" cy="65.14" r=".35" />
            <circle cx="58.77" cy="65.14" r=".35" />
            <circle cx="56.77" cy="65.14" r=".35" />
            <circle cx="59.77" cy="63.14" r=".35" />
            <circle cx="57.77" cy="63.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dY)`}>
            <circle cx="59.77" cy="71.14" r=".35" />
            <circle cx="57.77" cy="71.14" r=".35" />
            <circle cx="60.77" cy="69.14" r=".35" />
            <circle cx="58.77" cy="69.14" r=".35" />
            <circle cx="56.77" cy="69.14" r=".35" />
            <circle cx="59.77" cy="67.14" r=".35" />
            <circle cx="57.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dZ)`}>
            <circle cx="59.77" cy="75.14" r=".35" />
            <circle cx="57.77" cy="75.14" r=".35" />
            <circle cx="60.77" cy="73.14" r=".35" />
            <circle cx="58.77" cy="73.14" r=".35" />
            <circle cx="56.77" cy="73.14" r=".35" />
            <circle cx="59.77" cy="71.14" r=".35" />
            <circle cx="57.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-d0)`}>
            <circle cx="59.77" cy="79.14" r=".35" />
            <circle cx="57.77" cy="79.14" r=".35" />
            <circle cx="60.77" cy="77.14" r=".35" />
            <circle cx="58.77" cy="77.14" r=".35" />
            <circle cx="56.77" cy="77.14" r=".35" />
            <circle cx="59.77" cy="75.14" r=".35" />
            <circle cx="57.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-d1)`}>
            <circle cx="59.77" cy="83.14" r=".35" />
            <circle cx="57.77" cy="83.14" r=".35" />
            <circle cx="60.77" cy="81.14" r=".35" />
            <circle cx="58.77" cy="81.14" r=".35" />
            <circle cx="56.77" cy="81.14" r=".35" />
            <circle cx="59.77" cy="79.14" r=".35" />
            <circle cx="57.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-d2)`}>
            <circle cx="59.77" cy="87.14" r=".35" />
            <circle cx="57.77" cy="87.14" r=".35" />
            <circle cx="60.77" cy="85.14" r=".35" />
            <circle cx="58.77" cy="85.14" r=".35" />
            <circle cx="56.77" cy="85.14" r=".35" />
            <circle cx="59.77" cy="83.14" r=".35" />
            <circle cx="57.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-d3)`}>
            <circle cx="59.77" cy="91.14" r=".35" />
            <circle cx="57.77" cy="91.14" r=".35" />
            <circle cx="60.77" cy="89.14" r=".35" />
            <circle cx="58.77" cy="89.14" r=".35" />
            <circle cx="56.77" cy="89.14" r=".35" />
            <circle cx="59.77" cy="87.14" r=".35" />
            <circle cx="57.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-d4)`}>
            <circle cx="59.77" cy="95.14" r=".35" />
            <circle cx="57.77" cy="95.14" r=".35" />
            <circle cx="60.77" cy="93.14" r=".35" />
            <circle cx="58.77" cy="93.14" r=".35" />
            <circle cx="56.77" cy="93.14" r=".35" />
            <circle cx="59.77" cy="91.14" r=".35" />
            <circle cx="57.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-d5)`}>
            <circle cx="59.77" cy="99.14" r=".35" />
            <circle cx="57.77" cy="99.14" r=".35" />
            <circle cx="60.77" cy="97.14" r=".35" />
            <circle cx="58.77" cy="97.14" r=".35" />
            <circle cx="56.77" cy="97.14" r=".35" />
            <circle cx="59.77" cy="95.14" r=".35" />
            <circle cx="57.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-d6)`}>
            <circle cx="59.77" cy="103.14" r=".35" />
            <circle cx="57.77" cy="103.14" r=".35" />
            <circle cx="60.77" cy="101.14" r=".35" />
            <circle cx="58.77" cy="101.14" r=".35" />
            <circle cx="56.77" cy="101.14" r=".35" />
            <circle cx="59.77" cy="99.14" r=".35" />
            <circle cx="57.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-d7)`}>
            <circle cx="59.77" cy="107.14" r=".35" />
            <circle cx="57.77" cy="107.14" r=".35" />
            <circle cx="60.77" cy="105.14" r=".35" />
            <circle cx="58.77" cy="105.14" r=".35" />
            <circle cx="56.77" cy="105.14" r=".35" />
            <circle cx="59.77" cy="103.14" r=".35" />
            <circle cx="57.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-d8)`}>
            <circle cx="59.77" cy="111.14" r=".35" />
            <circle cx="57.77" cy="111.14" r=".35" />
            <circle cx="60.77" cy="109.14" r=".35" />
            <circle cx="58.77" cy="109.14" r=".35" />
            <circle cx="56.77" cy="109.14" r=".35" />
            <circle cx="59.77" cy="107.14" r=".35" />
            <circle cx="57.77" cy="107.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-d9)`}>
            <circle cx="59.77" cy="115.14" r=".35" />
            <circle cx="57.77" cy="115.14" r=".35" />
            <circle cx="60.77" cy="113.14" r=".35" />
            <circle cx="58.77" cy="113.14" r=".35" />
            <circle cx="56.77" cy="113.14" r=".35" />
            <circle cx="59.77" cy="111.14" r=".35" />
            <circle cx="57.77" cy="111.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ea)`}>
            <circle cx="55.77" cy="27.14" r=".35" />
            <circle cx="53.77" cy="27.14" r=".35" />
            <circle cx="56.77" cy="25.14" r=".35" />
            <circle cx="54.77" cy="25.14" r=".35" />
            <circle cx="52.77" cy="25.14" r=".35" />
            <circle cx="55.77" cy="23.14" r=".35" />
            <circle cx="53.77" cy="23.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eb)`}>
            <circle cx="55.77" cy="31.14" r=".35" />
            <circle cx="53.77" cy="31.14" r=".35" />
            <circle cx="56.77" cy="29.14" r=".35" />
            <circle cx="54.77" cy="29.14" r=".35" />
            <circle cx="52.77" cy="29.14" r=".35" />
            <circle cx="55.77" cy="27.14" r=".35" />
            <circle cx="53.77" cy="27.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ec)`}>
            <circle cx="55.77" cy="35.14" r=".35" />
            <circle cx="53.77" cy="35.14" r=".35" />
            <circle cx="56.77" cy="33.14" r=".35" />
            <circle cx="54.77" cy="33.14" r=".35" />
            <circle cx="52.77" cy="33.14" r=".35" />
            <circle cx="55.77" cy="31.14" r=".35" />
            <circle cx="53.77" cy="31.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ed)`}>
            <circle cx="55.77" cy="39.14" r=".35" />
            <circle cx="53.77" cy="39.14" r=".35" />
            <circle cx="56.77" cy="37.14" r=".35" />
            <circle cx="54.77" cy="37.14" r=".35" />
            <circle cx="52.77" cy="37.14" r=".35" />
            <circle cx="55.77" cy="35.14" r=".35" />
            <circle cx="53.77" cy="35.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ee)`}>
            <circle cx="55.77" cy="43.14" r=".35" />
            <circle cx="53.77" cy="43.14" r=".35" />
            <circle cx="56.77" cy="41.14" r=".35" />
            <circle cx="54.77" cy="41.14" r=".35" />
            <circle cx="52.77" cy="41.14" r=".35" />
            <circle cx="55.77" cy="39.14" r=".35" />
            <circle cx="53.77" cy="39.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ef)`}>
            <circle cx="55.77" cy="47.14" r=".35" />
            <circle cx="53.77" cy="47.14" r=".35" />
            <circle cx="56.77" cy="45.14" r=".35" />
            <circle cx="54.77" cy="45.14" r=".35" />
            <circle cx="52.77" cy="45.14" r=".35" />
            <circle cx="55.77" cy="43.14" r=".35" />
            <circle cx="53.77" cy="43.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eg)`}>
            <circle cx="55.77" cy="51.14" r=".35" />
            <circle cx="53.77" cy="51.14" r=".35" />
            <circle cx="56.77" cy="49.14" r=".35" />
            <circle cx="54.77" cy="49.14" r=".35" />
            <circle cx="52.77" cy="49.14" r=".35" />
            <circle cx="55.77" cy="47.14" r=".35" />
            <circle cx="53.77" cy="47.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eh)`}>
            <circle cx="55.77" cy="55.14" r=".35" />
            <circle cx="53.77" cy="55.14" r=".35" />
            <circle cx="56.77" cy="53.14" r=".35" />
            <circle cx="54.77" cy="53.14" r=".35" />
            <circle cx="52.77" cy="53.14" r=".35" />
            <circle cx="55.77" cy="51.14" r=".35" />
            <circle cx="53.77" cy="51.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ei)`}>
            <circle cx="55.77" cy="59.14" r=".35" />
            <circle cx="53.77" cy="59.14" r=".35" />
            <circle cx="56.77" cy="57.14" r=".35" />
            <circle cx="54.77" cy="57.14" r=".35" />
            <circle cx="52.77" cy="57.14" r=".35" />
            <circle cx="55.77" cy="55.14" r=".35" />
            <circle cx="53.77" cy="55.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ej)`}>
            <circle cx="55.77" cy="63.14" r=".35" />
            <circle cx="53.77" cy="63.14" r=".35" />
            <circle cx="56.77" cy="61.14" r=".35" />
            <circle cx="54.77" cy="61.14" r=".35" />
            <circle cx="52.77" cy="61.14" r=".35" />
            <circle cx="55.77" cy="59.14" r=".35" />
            <circle cx="53.77" cy="59.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ek)`}>
            <circle cx="55.77" cy="67.14" r=".35" />
            <circle cx="53.77" cy="67.14" r=".35" />
            <circle cx="56.77" cy="65.14" r=".35" />
            <circle cx="54.77" cy="65.14" r=".35" />
            <circle cx="52.77" cy="65.14" r=".35" />
            <circle cx="55.77" cy="63.14" r=".35" />
            <circle cx="53.77" cy="63.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-el)`}>
            <circle cx="55.77" cy="71.14" r=".35" />
            <circle cx="53.77" cy="71.14" r=".35" />
            <circle cx="56.77" cy="69.14" r=".35" />
            <circle cx="54.77" cy="69.14" r=".35" />
            <circle cx="52.77" cy="69.14" r=".35" />
            <circle cx="55.77" cy="67.14" r=".35" />
            <circle cx="53.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-em)`}>
            <circle cx="55.77" cy="75.14" r=".35" />
            <circle cx="53.77" cy="75.14" r=".35" />
            <circle cx="56.77" cy="73.14" r=".35" />
            <circle cx="54.77" cy="73.14" r=".35" />
            <circle cx="52.77" cy="73.14" r=".35" />
            <circle cx="55.77" cy="71.14" r=".35" />
            <circle cx="53.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-en)`}>
            <circle cx="55.77" cy="79.14" r=".35" />
            <circle cx="53.77" cy="79.14" r=".35" />
            <circle cx="56.77" cy="77.14" r=".35" />
            <circle cx="54.77" cy="77.14" r=".35" />
            <circle cx="52.77" cy="77.14" r=".35" />
            <circle cx="55.77" cy="75.14" r=".35" />
            <circle cx="53.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eo)`}>
            <circle cx="55.77" cy="83.14" r=".35" />
            <circle cx="53.77" cy="83.14" r=".35" />
            <circle cx="56.77" cy="81.14" r=".35" />
            <circle cx="54.77" cy="81.14" r=".35" />
            <circle cx="52.77" cy="81.14" r=".35" />
            <circle cx="55.77" cy="79.14" r=".35" />
            <circle cx="53.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ep)`}>
            <circle cx="55.77" cy="87.14" r=".35" />
            <circle cx="53.77" cy="87.14" r=".35" />
            <circle cx="56.77" cy="85.14" r=".35" />
            <circle cx="54.77" cy="85.14" r=".35" />
            <circle cx="52.77" cy="85.14" r=".35" />
            <circle cx="55.77" cy="83.14" r=".35" />
            <circle cx="53.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eq)`}>
            <circle cx="55.77" cy="91.14" r=".35" />
            <circle cx="53.77" cy="91.14" r=".35" />
            <circle cx="56.77" cy="89.14" r=".35" />
            <circle cx="54.77" cy="89.14" r=".35" />
            <circle cx="52.77" cy="89.14" r=".35" />
            <circle cx="55.77" cy="87.14" r=".35" />
            <circle cx="53.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-er)`}>
            <circle cx="55.77" cy="95.14" r=".35" />
            <circle cx="53.77" cy="95.14" r=".35" />
            <circle cx="56.77" cy="93.14" r=".35" />
            <circle cx="54.77" cy="93.14" r=".35" />
            <circle cx="52.77" cy="93.14" r=".35" />
            <circle cx="55.77" cy="91.14" r=".35" />
            <circle cx="53.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-es)`}>
            <circle cx="55.77" cy="99.14" r=".35" />
            <circle cx="53.77" cy="99.14" r=".35" />
            <circle cx="56.77" cy="97.14" r=".35" />
            <circle cx="54.77" cy="97.14" r=".35" />
            <circle cx="52.77" cy="97.14" r=".35" />
            <circle cx="55.77" cy="95.14" r=".35" />
            <circle cx="53.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-et)`}>
            <circle cx="55.77" cy="103.14" r=".35" />
            <circle cx="53.77" cy="103.14" r=".35" />
            <circle cx="56.77" cy="101.14" r=".35" />
            <circle cx="54.77" cy="101.14" r=".35" />
            <circle cx="52.77" cy="101.14" r=".35" />
            <circle cx="55.77" cy="99.14" r=".35" />
            <circle cx="53.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eu)`}>
            <circle cx="55.77" cy="107.14" r=".35" />
            <circle cx="53.77" cy="107.14" r=".35" />
            <circle cx="56.77" cy="105.14" r=".35" />
            <circle cx="54.77" cy="105.14" r=".35" />
            <circle cx="52.77" cy="105.14" r=".35" />
            <circle cx="55.77" cy="103.14" r=".35" />
            <circle cx="53.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ev)`}>
            <circle cx="55.77" cy="111.14" r=".35" />
            <circle cx="53.77" cy="111.14" r=".35" />
            <circle cx="56.77" cy="109.14" r=".35" />
            <circle cx="54.77" cy="109.14" r=".35" />
            <circle cx="52.77" cy="109.14" r=".35" />
            <circle cx="55.77" cy="107.14" r=".35" />
            <circle cx="53.77" cy="107.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ew)`}>
            <circle cx="55.77" cy="115.14" r=".35" />
            <circle cx="53.77" cy="115.14" r=".35" />
            <circle cx="56.77" cy="113.14" r=".35" />
            <circle cx="54.77" cy="113.14" r=".35" />
            <circle cx="52.77" cy="113.14" r=".35" />
            <circle cx="55.77" cy="111.14" r=".35" />
            <circle cx="53.77" cy="111.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ex)`}>
            <circle cx="51.77" cy="27.14" r=".35" />
            <circle cx="49.77" cy="27.14" r=".35" />
            <circle cx="52.77" cy="25.14" r=".35" />
            <circle cx="50.77" cy="25.14" r=".35" />
            <circle cx="48.77" cy="25.14" r=".35" />
            <circle cx="51.77" cy="23.14" r=".35" />
            <circle cx="49.77" cy="23.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ey)`}>
            <circle cx="51.77" cy="31.14" r=".35" />
            <circle cx="49.77" cy="31.14" r=".35" />
            <circle cx="52.77" cy="29.14" r=".35" />
            <circle cx="50.77" cy="29.14" r=".35" />
            <circle cx="48.77" cy="29.14" r=".35" />
            <circle cx="51.77" cy="27.14" r=".35" />
            <circle cx="49.77" cy="27.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ez)`}>
            <circle cx="51.77" cy="35.14" r=".35" />
            <circle cx="49.77" cy="35.14" r=".35" />
            <circle cx="52.77" cy="33.14" r=".35" />
            <circle cx="50.77" cy="33.14" r=".35" />
            <circle cx="48.77" cy="33.14" r=".35" />
            <circle cx="51.77" cy="31.14" r=".35" />
            <circle cx="49.77" cy="31.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eA)`}>
            <circle cx="51.77" cy="39.14" r=".35" />
            <circle cx="49.77" cy="39.14" r=".35" />
            <circle cx="52.77" cy="37.14" r=".35" />
            <circle cx="50.77" cy="37.14" r=".35" />
            <circle cx="48.77" cy="37.14" r=".35" />
            <circle cx="51.77" cy="35.14" r=".35" />
            <circle cx="49.77" cy="35.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eB)`}>
            <circle cx="51.77" cy="43.14" r=".35" />
            <circle cx="49.77" cy="43.14" r=".35" />
            <circle cx="52.77" cy="41.14" r=".35" />
            <circle cx="50.77" cy="41.14" r=".35" />
            <circle cx="48.77" cy="41.14" r=".35" />
            <circle cx="51.77" cy="39.14" r=".35" />
            <circle cx="49.77" cy="39.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eC)`}>
            <circle cx="51.77" cy="47.14" r=".35" />
            <circle cx="49.77" cy="47.14" r=".35" />
            <circle cx="52.77" cy="45.14" r=".35" />
            <circle cx="50.77" cy="45.14" r=".35" />
            <circle cx="48.77" cy="45.14" r=".35" />
            <circle cx="51.77" cy="43.14" r=".35" />
            <circle cx="49.77" cy="43.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eD)`}>
            <circle cx="51.77" cy="51.14" r=".35" />
            <circle cx="49.77" cy="51.14" r=".35" />
            <circle cx="52.77" cy="49.14" r=".35" />
            <circle cx="50.77" cy="49.14" r=".35" />
            <circle cx="48.77" cy="49.14" r=".35" />
            <circle cx="51.77" cy="47.14" r=".35" />
            <circle cx="49.77" cy="47.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eE)`}>
            <circle cx="51.77" cy="55.14" r=".35" />
            <circle cx="49.77" cy="55.14" r=".35" />
            <circle cx="52.77" cy="53.14" r=".35" />
            <circle cx="50.77" cy="53.14" r=".35" />
            <circle cx="48.77" cy="53.14" r=".35" />
            <circle cx="51.77" cy="51.14" r=".35" />
            <circle cx="49.77" cy="51.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eF)`}>
            <circle cx="51.77" cy="59.14" r=".35" />
            <circle cx="49.77" cy="59.14" r=".35" />
            <circle cx="52.77" cy="57.14" r=".35" />
            <circle cx="50.77" cy="57.14" r=".35" />
            <circle cx="48.77" cy="57.14" r=".35" />
            <circle cx="51.77" cy="55.14" r=".35" />
            <circle cx="49.77" cy="55.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eG)`}>
            <circle cx="51.77" cy="63.14" r=".35" />
            <circle cx="49.77" cy="63.14" r=".35" />
            <circle cx="52.77" cy="61.14" r=".35" />
            <circle cx="50.77" cy="61.14" r=".35" />
            <circle cx="48.77" cy="61.14" r=".35" />
            <circle cx="51.77" cy="59.14" r=".35" />
            <circle cx="49.77" cy="59.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eH)`}>
            <circle cx="51.77" cy="67.14" r=".35" />
            <circle cx="49.77" cy="67.14" r=".35" />
            <circle cx="52.77" cy="65.14" r=".35" />
            <circle cx="50.77" cy="65.14" r=".35" />
            <circle cx="48.77" cy="65.14" r=".35" />
            <circle cx="51.77" cy="63.14" r=".35" />
            <circle cx="49.77" cy="63.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eI)`}>
            <circle cx="51.77" cy="71.14" r=".35" />
            <circle cx="49.77" cy="71.14" r=".35" />
            <circle cx="52.77" cy="69.14" r=".35" />
            <circle cx="50.77" cy="69.14" r=".35" />
            <circle cx="48.77" cy="69.14" r=".35" />
            <circle cx="51.77" cy="67.14" r=".35" />
            <circle cx="49.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eJ)`}>
            <circle cx="51.77" cy="75.14" r=".35" />
            <circle cx="49.77" cy="75.14" r=".35" />
            <circle cx="52.77" cy="73.14" r=".35" />
            <circle cx="50.77" cy="73.14" r=".35" />
            <circle cx="48.77" cy="73.14" r=".35" />
            <circle cx="51.77" cy="71.14" r=".35" />
            <circle cx="49.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eK)`}>
            <circle cx="51.77" cy="79.14" r=".35" />
            <circle cx="49.77" cy="79.14" r=".35" />
            <circle cx="52.77" cy="77.14" r=".35" />
            <circle cx="50.77" cy="77.14" r=".35" />
            <circle cx="48.77" cy="77.14" r=".35" />
            <circle cx="51.77" cy="75.14" r=".35" />
            <circle cx="49.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eL)`}>
            <circle cx="51.77" cy="83.14" r=".35" />
            <circle cx="49.77" cy="83.14" r=".35" />
            <circle cx="52.77" cy="81.14" r=".35" />
            <circle cx="50.77" cy="81.14" r=".35" />
            <circle cx="48.77" cy="81.14" r=".35" />
            <circle cx="51.77" cy="79.14" r=".35" />
            <circle cx="49.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eM)`}>
            <circle cx="51.77" cy="87.14" r=".35" />
            <circle cx="49.77" cy="87.14" r=".35" />
            <circle cx="52.77" cy="85.14" r=".35" />
            <circle cx="50.77" cy="85.14" r=".35" />
            <circle cx="48.77" cy="85.14" r=".35" />
            <circle cx="51.77" cy="83.14" r=".35" />
            <circle cx="49.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eN)`}>
            <circle cx="51.77" cy="91.14" r=".35" />
            <circle cx="49.77" cy="91.14" r=".35" />
            <circle cx="52.77" cy="89.14" r=".35" />
            <circle cx="50.77" cy="89.14" r=".35" />
            <circle cx="48.77" cy="89.14" r=".35" />
            <circle cx="51.77" cy="87.14" r=".35" />
            <circle cx="49.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eO)`}>
            <circle cx="51.77" cy="95.14" r=".35" />
            <circle cx="49.77" cy="95.14" r=".35" />
            <circle cx="52.77" cy="93.14" r=".35" />
            <circle cx="50.77" cy="93.14" r=".35" />
            <circle cx="48.77" cy="93.14" r=".35" />
            <circle cx="51.77" cy="91.14" r=".35" />
            <circle cx="49.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eP)`}>
            <circle cx="51.77" cy="99.14" r=".35" />
            <circle cx="49.77" cy="99.14" r=".35" />
            <circle cx="52.77" cy="97.14" r=".35" />
            <circle cx="50.77" cy="97.14" r=".35" />
            <circle cx="48.77" cy="97.14" r=".35" />
            <circle cx="51.77" cy="95.14" r=".35" />
            <circle cx="49.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eQ)`}>
            <circle cx="51.77" cy="103.14" r=".35" />
            <circle cx="49.77" cy="103.14" r=".35" />
            <circle cx="52.77" cy="101.14" r=".35" />
            <circle cx="50.77" cy="101.14" r=".35" />
            <circle cx="48.77" cy="101.14" r=".35" />
            <circle cx="51.77" cy="99.14" r=".35" />
            <circle cx="49.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eR)`}>
            <circle cx="51.77" cy="107.14" r=".35" />
            <circle cx="49.77" cy="107.14" r=".35" />
            <circle cx="52.77" cy="105.14" r=".35" />
            <circle cx="50.77" cy="105.14" r=".35" />
            <circle cx="48.77" cy="105.14" r=".35" />
            <circle cx="51.77" cy="103.14" r=".35" />
            <circle cx="49.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eS)`}>
            <circle cx="51.77" cy="111.14" r=".35" />
            <circle cx="49.77" cy="111.14" r=".35" />
            <circle cx="52.77" cy="109.14" r=".35" />
            <circle cx="50.77" cy="109.14" r=".35" />
            <circle cx="48.77" cy="109.14" r=".35" />
            <circle cx="51.77" cy="107.14" r=".35" />
            <circle cx="49.77" cy="107.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eT)`}>
            <circle cx="51.77" cy="115.14" r=".35" />
            <circle cx="49.77" cy="115.14" r=".35" />
            <circle cx="52.77" cy="113.14" r=".35" />
            <circle cx="50.77" cy="113.14" r=".35" />
            <circle cx="48.77" cy="113.14" r=".35" />
            <circle cx="51.77" cy="111.14" r=".35" />
            <circle cx="49.77" cy="111.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eU)`}>
            <circle cx="47.77" cy="27.14" r=".35" />
            <circle cx="45.77" cy="27.14" r=".35" />
            <circle cx="48.77" cy="25.14" r=".35" />
            <circle cx="46.77" cy="25.14" r=".35" />
            <circle cx="44.77" cy="25.14" r=".35" />
            <circle cx="47.77" cy="23.14" r=".35" />
            <circle cx="45.77" cy="23.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eV)`}>
            <circle cx="47.77" cy="31.14" r=".35" />
            <circle cx="45.77" cy="31.14" r=".35" />
            <circle cx="48.77" cy="29.14" r=".35" />
            <circle cx="46.77" cy="29.14" r=".35" />
            <circle cx="44.77" cy="29.14" r=".35" />
            <circle cx="47.77" cy="27.14" r=".35" />
            <circle cx="45.77" cy="27.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eW)`}>
            <circle cx="47.77" cy="35.14" r=".35" />
            <circle cx="45.77" cy="35.14" r=".35" />
            <circle cx="48.77" cy="33.14" r=".35" />
            <circle cx="46.77" cy="33.14" r=".35" />
            <circle cx="44.77" cy="33.14" r=".35" />
            <circle cx="47.77" cy="31.14" r=".35" />
            <circle cx="45.77" cy="31.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eX)`}>
            <circle cx="47.77" cy="39.14" r=".35" />
            <circle cx="45.77" cy="39.14" r=".35" />
            <circle cx="48.77" cy="37.14" r=".35" />
            <circle cx="46.77" cy="37.14" r=".35" />
            <circle cx="44.77" cy="37.14" r=".35" />
            <circle cx="47.77" cy="35.14" r=".35" />
            <circle cx="45.77" cy="35.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eY)`}>
            <circle cx="47.77" cy="43.14" r=".35" />
            <circle cx="45.77" cy="43.14" r=".35" />
            <circle cx="48.77" cy="41.14" r=".35" />
            <circle cx="46.77" cy="41.14" r=".35" />
            <circle cx="44.77" cy="41.14" r=".35" />
            <circle cx="47.77" cy="39.14" r=".35" />
            <circle cx="45.77" cy="39.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eZ)`}>
            <circle cx="47.77" cy="47.14" r=".35" />
            <circle cx="45.77" cy="47.14" r=".35" />
            <circle cx="48.77" cy="45.14" r=".35" />
            <circle cx="46.77" cy="45.14" r=".35" />
            <circle cx="44.77" cy="45.14" r=".35" />
            <circle cx="47.77" cy="43.14" r=".35" />
            <circle cx="45.77" cy="43.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-e0)`}>
            <circle cx="47.77" cy="51.14" r=".35" />
            <circle cx="45.77" cy="51.14" r=".35" />
            <circle cx="48.77" cy="49.14" r=".35" />
            <circle cx="46.77" cy="49.14" r=".35" />
            <circle cx="44.77" cy="49.14" r=".35" />
            <circle cx="47.77" cy="47.14" r=".35" />
            <circle cx="45.77" cy="47.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-e1)`}>
            <circle cx="47.77" cy="55.14" r=".35" />
            <circle cx="45.77" cy="55.14" r=".35" />
            <circle cx="48.77" cy="53.14" r=".35" />
            <circle cx="46.77" cy="53.14" r=".35" />
            <circle cx="44.77" cy="53.14" r=".35" />
            <circle cx="47.77" cy="51.14" r=".35" />
            <circle cx="45.77" cy="51.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-e2)`}>
            <circle cx="47.77" cy="59.14" r=".35" />
            <circle cx="45.77" cy="59.14" r=".35" />
            <circle cx="48.77" cy="57.14" r=".35" />
            <circle cx="46.77" cy="57.14" r=".35" />
            <circle cx="44.77" cy="57.14" r=".35" />
            <circle cx="47.77" cy="55.14" r=".35" />
            <circle cx="45.77" cy="55.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-e3)`}>
            <circle cx="47.77" cy="63.14" r=".35" />
            <circle cx="45.77" cy="63.14" r=".35" />
            <circle cx="48.77" cy="61.14" r=".35" />
            <circle cx="46.77" cy="61.14" r=".35" />
            <circle cx="44.77" cy="61.14" r=".35" />
            <circle cx="47.77" cy="59.14" r=".35" />
            <circle cx="45.77" cy="59.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-e4)`}>
            <circle cx="47.77" cy="67.14" r=".35" />
            <circle cx="45.77" cy="67.14" r=".35" />
            <circle cx="48.77" cy="65.14" r=".35" />
            <circle cx="46.77" cy="65.14" r=".35" />
            <circle cx="44.77" cy="65.14" r=".35" />
            <circle cx="47.77" cy="63.14" r=".35" />
            <circle cx="45.77" cy="63.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-e5)`}>
            <circle cx="47.77" cy="71.14" r=".35" />
            <circle cx="45.77" cy="71.14" r=".35" />
            <circle cx="48.77" cy="69.14" r=".35" />
            <circle cx="46.77" cy="69.14" r=".35" />
            <circle cx="44.77" cy="69.14" r=".35" />
            <circle cx="47.77" cy="67.14" r=".35" />
            <circle cx="45.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-e6)`}>
            <circle cx="47.77" cy="75.14" r=".35" />
            <circle cx="45.77" cy="75.14" r=".35" />
            <circle cx="48.77" cy="73.14" r=".35" />
            <circle cx="46.77" cy="73.14" r=".35" />
            <circle cx="44.77" cy="73.14" r=".35" />
            <circle cx="47.77" cy="71.14" r=".35" />
            <circle cx="45.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-e7)`}>
            <circle cx="47.77" cy="79.14" r=".35" />
            <circle cx="45.77" cy="79.14" r=".35" />
            <circle cx="48.77" cy="77.14" r=".35" />
            <circle cx="46.77" cy="77.14" r=".35" />
            <circle cx="44.77" cy="77.14" r=".35" />
            <circle cx="47.77" cy="75.14" r=".35" />
            <circle cx="45.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-e8)`}>
            <circle cx="47.77" cy="83.14" r=".35" />
            <circle cx="45.77" cy="83.14" r=".35" />
            <circle cx="48.77" cy="81.14" r=".35" />
            <circle cx="46.77" cy="81.14" r=".35" />
            <circle cx="44.77" cy="81.14" r=".35" />
            <circle cx="47.77" cy="79.14" r=".35" />
            <circle cx="45.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-e9)`}>
            <circle cx="47.77" cy="87.14" r=".35" />
            <circle cx="45.77" cy="87.14" r=".35" />
            <circle cx="48.77" cy="85.14" r=".35" />
            <circle cx="46.77" cy="85.14" r=".35" />
            <circle cx="44.77" cy="85.14" r=".35" />
            <circle cx="47.77" cy="83.14" r=".35" />
            <circle cx="45.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fa)`}>
            <circle cx="47.77" cy="91.14" r=".35" />
            <circle cx="45.77" cy="91.14" r=".35" />
            <circle cx="48.77" cy="89.14" r=".35" />
            <circle cx="46.77" cy="89.14" r=".35" />
            <circle cx="44.77" cy="89.14" r=".35" />
            <circle cx="47.77" cy="87.14" r=".35" />
            <circle cx="45.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fb)`}>
            <circle cx="47.77" cy="95.14" r=".35" />
            <circle cx="45.77" cy="95.14" r=".35" />
            <circle cx="48.77" cy="93.14" r=".35" />
            <circle cx="46.77" cy="93.14" r=".35" />
            <circle cx="44.77" cy="93.14" r=".35" />
            <circle cx="47.77" cy="91.14" r=".35" />
            <circle cx="45.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fc)`}>
            <circle cx="47.77" cy="99.14" r=".35" />
            <circle cx="45.77" cy="99.14" r=".35" />
            <circle cx="48.77" cy="97.14" r=".35" />
            <circle cx="46.77" cy="97.14" r=".35" />
            <circle cx="44.77" cy="97.14" r=".35" />
            <circle cx="47.77" cy="95.14" r=".35" />
            <circle cx="45.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fd)`}>
            <circle cx="47.77" cy="103.14" r=".35" />
            <circle cx="45.77" cy="103.14" r=".35" />
            <circle cx="48.77" cy="101.14" r=".35" />
            <circle cx="46.77" cy="101.14" r=".35" />
            <circle cx="44.77" cy="101.14" r=".35" />
            <circle cx="47.77" cy="99.14" r=".35" />
            <circle cx="45.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fe)`}>
            <circle cx="47.77" cy="107.14" r=".35" />
            <circle cx="45.77" cy="107.14" r=".35" />
            <circle cx="48.77" cy="105.14" r=".35" />
            <circle cx="46.77" cy="105.14" r=".35" />
            <circle cx="44.77" cy="105.14" r=".35" />
            <circle cx="47.77" cy="103.14" r=".35" />
            <circle cx="45.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ff)`}>
            <circle cx="47.77" cy="111.14" r=".35" />
            <circle cx="45.77" cy="111.14" r=".35" />
            <circle cx="48.77" cy="109.14" r=".35" />
            <circle cx="46.77" cy="109.14" r=".35" />
            <circle cx="44.77" cy="109.14" r=".35" />
            <circle cx="47.77" cy="107.14" r=".35" />
            <circle cx="45.77" cy="107.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fg)`}>
            <circle cx="47.77" cy="115.14" r=".35" />
            <circle cx="45.77" cy="115.14" r=".35" />
            <circle cx="48.77" cy="113.14" r=".35" />
            <circle cx="46.77" cy="113.14" r=".35" />
            <circle cx="44.77" cy="113.14" r=".35" />
            <circle cx="47.77" cy="111.14" r=".35" />
            <circle cx="45.77" cy="111.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fh)`}>
            <circle cx="43.77" cy="27.14" r=".35" />
            <circle cx="41.77" cy="27.14" r=".35" />
            <circle cx="44.77" cy="25.14" r=".35" />
            <circle cx="42.77" cy="25.14" r=".35" />
            <circle cx="40.77" cy="25.14" r=".35" />
            <circle cx="43.77" cy="23.14" r=".35" />
            <circle cx="41.77" cy="23.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fi)`}>
            <circle cx="43.77" cy="31.14" r=".35" />
            <circle cx="41.77" cy="31.14" r=".35" />
            <circle cx="44.77" cy="29.14" r=".35" />
            <circle cx="42.77" cy="29.14" r=".35" />
            <circle cx="40.77" cy="29.14" r=".35" />
            <circle cx="43.77" cy="27.14" r=".35" />
            <circle cx="41.77" cy="27.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fj)`}>
            <circle cx="43.77" cy="35.14" r=".35" />
            <circle cx="41.77" cy="35.14" r=".35" />
            <circle cx="44.77" cy="33.14" r=".35" />
            <circle cx="42.77" cy="33.14" r=".35" />
            <circle cx="40.77" cy="33.14" r=".35" />
            <circle cx="43.77" cy="31.14" r=".35" />
            <circle cx="41.77" cy="31.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fk)`}>
            <circle cx="43.77" cy="39.14" r=".35" />
            <circle cx="41.77" cy="39.14" r=".35" />
            <circle cx="44.77" cy="37.14" r=".35" />
            <circle cx="42.77" cy="37.14" r=".35" />
            <circle cx="40.77" cy="37.14" r=".35" />
            <circle cx="43.77" cy="35.14" r=".35" />
            <circle cx="41.77" cy="35.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fl)`}>
            <circle cx="43.77" cy="43.14" r=".35" />
            <circle cx="41.77" cy="43.14" r=".35" />
            <circle cx="44.77" cy="41.14" r=".35" />
            <circle cx="42.77" cy="41.14" r=".35" />
            <circle cx="40.77" cy="41.14" r=".35" />
            <circle cx="43.77" cy="39.14" r=".35" />
            <circle cx="41.77" cy="39.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fm)`}>
            <circle cx="43.77" cy="47.14" r=".35" />
            <circle cx="41.77" cy="47.14" r=".35" />
            <circle cx="44.77" cy="45.14" r=".35" />
            <circle cx="42.77" cy="45.14" r=".35" />
            <circle cx="40.77" cy="45.14" r=".35" />
            <circle cx="43.77" cy="43.14" r=".35" />
            <circle cx="41.77" cy="43.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fn)`}>
            <circle cx="43.77" cy="51.14" r=".35" />
            <circle cx="41.77" cy="51.14" r=".35" />
            <circle cx="44.77" cy="49.14" r=".35" />
            <circle cx="42.77" cy="49.14" r=".35" />
            <circle cx="40.77" cy="49.14" r=".35" />
            <circle cx="43.77" cy="47.14" r=".35" />
            <circle cx="41.77" cy="47.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fo)`}>
            <circle cx="43.77" cy="55.14" r=".35" />
            <circle cx="41.77" cy="55.14" r=".35" />
            <circle cx="44.77" cy="53.14" r=".35" />
            <circle cx="42.77" cy="53.14" r=".35" />
            <circle cx="40.77" cy="53.14" r=".35" />
            <circle cx="43.77" cy="51.14" r=".35" />
            <circle cx="41.77" cy="51.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fp)`}>
            <circle cx="43.77" cy="59.14" r=".35" />
            <circle cx="41.77" cy="59.14" r=".35" />
            <circle cx="44.77" cy="57.14" r=".35" />
            <circle cx="42.77" cy="57.14" r=".35" />
            <circle cx="40.77" cy="57.14" r=".35" />
            <circle cx="43.77" cy="55.14" r=".35" />
            <circle cx="41.77" cy="55.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fq)`}>
            <circle cx="43.77" cy="63.14" r=".35" />
            <circle cx="41.77" cy="63.14" r=".35" />
            <circle cx="44.77" cy="61.14" r=".35" />
            <circle cx="42.77" cy="61.14" r=".35" />
            <circle cx="40.77" cy="61.14" r=".35" />
            <circle cx="43.77" cy="59.14" r=".35" />
            <circle cx="41.77" cy="59.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fr)`}>
            <circle cx="43.77" cy="67.14" r=".35" />
            <circle cx="41.77" cy="67.14" r=".35" />
            <circle cx="44.77" cy="65.14" r=".35" />
            <circle cx="42.77" cy="65.14" r=".35" />
            <circle cx="40.77" cy="65.14" r=".35" />
            <circle cx="43.77" cy="63.14" r=".35" />
            <circle cx="41.77" cy="63.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fs)`}>
            <circle cx="43.77" cy="71.14" r=".35" />
            <circle cx="41.77" cy="71.14" r=".35" />
            <circle cx="44.77" cy="69.14" r=".35" />
            <circle cx="42.77" cy="69.14" r=".35" />
            <circle cx="40.77" cy="69.14" r=".35" />
            <circle cx="43.77" cy="67.14" r=".35" />
            <circle cx="41.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ft)`}>
            <circle cx="43.77" cy="75.14" r=".35" />
            <circle cx="41.77" cy="75.14" r=".35" />
            <circle cx="44.77" cy="73.14" r=".35" />
            <circle cx="42.77" cy="73.14" r=".35" />
            <circle cx="40.77" cy="73.14" r=".35" />
            <circle cx="43.77" cy="71.14" r=".35" />
            <circle cx="41.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fu)`}>
            <circle cx="43.77" cy="79.14" r=".35" />
            <circle cx="41.77" cy="79.14" r=".35" />
            <circle cx="44.77" cy="77.14" r=".35" />
            <circle cx="42.77" cy="77.14" r=".35" />
            <circle cx="40.77" cy="77.14" r=".35" />
            <circle cx="43.77" cy="75.14" r=".35" />
            <circle cx="41.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fv)`}>
            <circle cx="43.77" cy="83.14" r=".35" />
            <circle cx="41.77" cy="83.14" r=".35" />
            <circle cx="44.77" cy="81.14" r=".35" />
            <circle cx="42.77" cy="81.14" r=".35" />
            <circle cx="40.77" cy="81.14" r=".35" />
            <circle cx="43.77" cy="79.14" r=".35" />
            <circle cx="41.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fw)`}>
            <circle cx="43.77" cy="87.14" r=".35" />
            <circle cx="41.77" cy="87.14" r=".35" />
            <circle cx="44.77" cy="85.14" r=".35" />
            <circle cx="42.77" cy="85.14" r=".35" />
            <circle cx="40.77" cy="85.14" r=".35" />
            <circle cx="43.77" cy="83.14" r=".35" />
            <circle cx="41.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fx)`}>
            <circle cx="43.77" cy="91.14" r=".35" />
            <circle cx="41.77" cy="91.14" r=".35" />
            <circle cx="44.77" cy="89.14" r=".35" />
            <circle cx="42.77" cy="89.14" r=".35" />
            <circle cx="40.77" cy="89.14" r=".35" />
            <circle cx="43.77" cy="87.14" r=".35" />
            <circle cx="41.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fy)`}>
            <circle cx="43.77" cy="95.14" r=".35" />
            <circle cx="41.77" cy="95.14" r=".35" />
            <circle cx="44.77" cy="93.14" r=".35" />
            <circle cx="42.77" cy="93.14" r=".35" />
            <circle cx="40.77" cy="93.14" r=".35" />
            <circle cx="43.77" cy="91.14" r=".35" />
            <circle cx="41.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fz)`}>
            <circle cx="43.77" cy="99.14" r=".35" />
            <circle cx="41.77" cy="99.14" r=".35" />
            <circle cx="44.77" cy="97.14" r=".35" />
            <circle cx="42.77" cy="97.14" r=".35" />
            <circle cx="40.77" cy="97.14" r=".35" />
            <circle cx="43.77" cy="95.14" r=".35" />
            <circle cx="41.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fA)`}>
            <circle cx="43.77" cy="103.14" r=".35" />
            <circle cx="41.77" cy="103.14" r=".35" />
            <circle cx="44.77" cy="101.14" r=".35" />
            <circle cx="42.77" cy="101.14" r=".35" />
            <circle cx="40.77" cy="101.14" r=".35" />
            <circle cx="43.77" cy="99.14" r=".35" />
            <circle cx="41.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fB)`}>
            <circle cx="43.77" cy="107.14" r=".35" />
            <circle cx="41.77" cy="107.14" r=".35" />
            <circle cx="44.77" cy="105.14" r=".35" />
            <circle cx="42.77" cy="105.14" r=".35" />
            <circle cx="40.77" cy="105.14" r=".35" />
            <circle cx="43.77" cy="103.14" r=".35" />
            <circle cx="41.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fC)`}>
            <circle cx="43.77" cy="111.14" r=".35" />
            <circle cx="41.77" cy="111.14" r=".35" />
            <circle cx="44.77" cy="109.14" r=".35" />
            <circle cx="42.77" cy="109.14" r=".35" />
            <circle cx="40.77" cy="109.14" r=".35" />
            <circle cx="43.77" cy="107.14" r=".35" />
            <circle cx="41.77" cy="107.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fD)`}>
            <circle cx="43.77" cy="115.14" r=".35" />
            <circle cx="41.77" cy="115.14" r=".35" />
            <circle cx="44.77" cy="113.14" r=".35" />
            <circle cx="42.77" cy="113.14" r=".35" />
            <circle cx="40.77" cy="113.14" r=".35" />
            <circle cx="43.77" cy="111.14" r=".35" />
            <circle cx="41.77" cy="111.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fE)`}>
            <circle cx="39.77" cy="27.14" r=".35" />
            <circle cx="37.77" cy="27.14" r=".35" />
            <circle cx="40.77" cy="25.14" r=".35" />
            <circle cx="38.77" cy="25.14" r=".35" />
            <circle cx="36.77" cy="25.14" r=".35" />
            <circle cx="39.77" cy="23.14" r=".35" />
            <circle cx="37.77" cy="23.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fF)`}>
            <circle cx="39.77" cy="31.14" r=".35" />
            <circle cx="37.77" cy="31.14" r=".35" />
            <circle cx="40.77" cy="29.14" r=".35" />
            <circle cx="38.77" cy="29.14" r=".35" />
            <circle cx="36.77" cy="29.14" r=".35" />
            <circle cx="39.77" cy="27.14" r=".35" />
            <circle cx="37.77" cy="27.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fG)`}>
            <circle cx="39.77" cy="35.14" r=".35" />
            <circle cx="37.77" cy="35.14" r=".35" />
            <circle cx="40.77" cy="33.14" r=".35" />
            <circle cx="38.77" cy="33.14" r=".35" />
            <circle cx="36.77" cy="33.14" r=".35" />
            <circle cx="39.77" cy="31.14" r=".35" />
            <circle cx="37.77" cy="31.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fH)`}>
            <circle cx="39.77" cy="39.14" r=".35" />
            <circle cx="37.77" cy="39.14" r=".35" />
            <circle cx="40.77" cy="37.14" r=".35" />
            <circle cx="38.77" cy="37.14" r=".35" />
            <circle cx="36.77" cy="37.14" r=".35" />
            <circle cx="39.77" cy="35.14" r=".35" />
            <circle cx="37.77" cy="35.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fI)`}>
            <circle cx="39.77" cy="43.14" r=".35" />
            <circle cx="37.77" cy="43.14" r=".35" />
            <circle cx="40.77" cy="41.14" r=".35" />
            <circle cx="38.77" cy="41.14" r=".35" />
            <circle cx="36.77" cy="41.14" r=".35" />
            <circle cx="39.77" cy="39.14" r=".35" />
            <circle cx="37.77" cy="39.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fJ)`}>
            <circle cx="39.77" cy="47.14" r=".35" />
            <circle cx="37.77" cy="47.14" r=".35" />
            <circle cx="40.77" cy="45.14" r=".35" />
            <circle cx="38.77" cy="45.14" r=".35" />
            <circle cx="36.77" cy="45.14" r=".35" />
            <circle cx="39.77" cy="43.14" r=".35" />
            <circle cx="37.77" cy="43.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fK)`}>
            <circle cx="39.77" cy="51.14" r=".35" />
            <circle cx="37.77" cy="51.14" r=".35" />
            <circle cx="40.77" cy="49.14" r=".35" />
            <circle cx="38.77" cy="49.14" r=".35" />
            <circle cx="36.77" cy="49.14" r=".35" />
            <circle cx="39.77" cy="47.14" r=".35" />
            <circle cx="37.77" cy="47.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fL)`}>
            <circle cx="39.77" cy="55.14" r=".35" />
            <circle cx="37.77" cy="55.14" r=".35" />
            <circle cx="40.77" cy="53.14" r=".35" />
            <circle cx="38.77" cy="53.14" r=".35" />
            <circle cx="36.77" cy="53.14" r=".35" />
            <circle cx="39.77" cy="51.14" r=".35" />
            <circle cx="37.77" cy="51.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fM)`}>
            <circle cx="39.77" cy="59.14" r=".35" />
            <circle cx="37.77" cy="59.14" r=".35" />
            <circle cx="40.77" cy="57.14" r=".35" />
            <circle cx="38.77" cy="57.14" r=".35" />
            <circle cx="36.77" cy="57.14" r=".35" />
            <circle cx="39.77" cy="55.14" r=".35" />
            <circle cx="37.77" cy="55.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fN)`}>
            <circle cx="39.77" cy="63.14" r=".35" />
            <circle cx="37.77" cy="63.14" r=".35" />
            <circle cx="40.77" cy="61.14" r=".35" />
            <circle cx="38.77" cy="61.14" r=".35" />
            <circle cx="36.77" cy="61.14" r=".35" />
            <circle cx="39.77" cy="59.14" r=".35" />
            <circle cx="37.77" cy="59.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fO)`}>
            <circle cx="39.77" cy="67.14" r=".35" />
            <circle cx="37.77" cy="67.14" r=".35" />
            <circle cx="40.77" cy="65.14" r=".35" />
            <circle cx="38.77" cy="65.14" r=".35" />
            <circle cx="36.77" cy="65.14" r=".35" />
            <circle cx="39.77" cy="63.14" r=".35" />
            <circle cx="37.77" cy="63.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fP)`}>
            <circle cx="39.77" cy="71.14" r=".35" />
            <circle cx="37.77" cy="71.14" r=".35" />
            <circle cx="40.77" cy="69.14" r=".35" />
            <circle cx="38.77" cy="69.14" r=".35" />
            <circle cx="36.77" cy="69.14" r=".35" />
            <circle cx="39.77" cy="67.14" r=".35" />
            <circle cx="37.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fQ)`}>
            <circle cx="39.77" cy="75.14" r=".35" />
            <circle cx="37.77" cy="75.14" r=".35" />
            <circle cx="40.77" cy="73.14" r=".35" />
            <circle cx="38.77" cy="73.14" r=".35" />
            <circle cx="36.77" cy="73.14" r=".35" />
            <circle cx="39.77" cy="71.14" r=".35" />
            <circle cx="37.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fR)`}>
            <circle cx="39.77" cy="79.14" r=".35" />
            <circle cx="37.77" cy="79.14" r=".35" />
            <circle cx="40.77" cy="77.14" r=".35" />
            <circle cx="38.77" cy="77.14" r=".35" />
            <circle cx="36.77" cy="77.14" r=".35" />
            <circle cx="39.77" cy="75.14" r=".35" />
            <circle cx="37.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fS)`}>
            <circle cx="39.77" cy="83.14" r=".35" />
            <circle cx="37.77" cy="83.14" r=".35" />
            <circle cx="40.77" cy="81.14" r=".35" />
            <circle cx="38.77" cy="81.14" r=".35" />
            <circle cx="36.77" cy="81.14" r=".35" />
            <circle cx="39.77" cy="79.14" r=".35" />
            <circle cx="37.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fT)`}>
            <circle cx="39.77" cy="87.14" r=".35" />
            <circle cx="37.77" cy="87.14" r=".35" />
            <circle cx="40.77" cy="85.14" r=".35" />
            <circle cx="38.77" cy="85.14" r=".35" />
            <circle cx="36.77" cy="85.14" r=".35" />
            <circle cx="39.77" cy="83.14" r=".35" />
            <circle cx="37.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fU)`}>
            <circle cx="39.77" cy="91.14" r=".35" />
            <circle cx="37.77" cy="91.14" r=".35" />
            <circle cx="40.77" cy="89.14" r=".35" />
            <circle cx="38.77" cy="89.14" r=".35" />
            <circle cx="36.77" cy="89.14" r=".35" />
            <circle cx="39.77" cy="87.14" r=".35" />
            <circle cx="37.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fV)`}>
            <circle cx="39.77" cy="95.14" r=".35" />
            <circle cx="37.77" cy="95.14" r=".35" />
            <circle cx="40.77" cy="93.14" r=".35" />
            <circle cx="38.77" cy="93.14" r=".35" />
            <circle cx="36.77" cy="93.14" r=".35" />
            <circle cx="39.77" cy="91.14" r=".35" />
            <circle cx="37.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fW)`}>
            <circle cx="39.77" cy="99.14" r=".35" />
            <circle cx="37.77" cy="99.14" r=".35" />
            <circle cx="40.77" cy="97.14" r=".35" />
            <circle cx="38.77" cy="97.14" r=".35" />
            <circle cx="36.77" cy="97.14" r=".35" />
            <circle cx="39.77" cy="95.14" r=".35" />
            <circle cx="37.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fX)`}>
            <circle cx="39.77" cy="103.14" r=".35" />
            <circle cx="37.77" cy="103.14" r=".35" />
            <circle cx="40.77" cy="101.14" r=".35" />
            <circle cx="38.77" cy="101.14" r=".35" />
            <circle cx="36.77" cy="101.14" r=".35" />
            <circle cx="39.77" cy="99.14" r=".35" />
            <circle cx="37.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fY)`}>
            <circle cx="39.77" cy="107.14" r=".35" />
            <circle cx="37.77" cy="107.14" r=".35" />
            <circle cx="40.77" cy="105.14" r=".35" />
            <circle cx="38.77" cy="105.14" r=".35" />
            <circle cx="36.77" cy="105.14" r=".35" />
            <circle cx="39.77" cy="103.14" r=".35" />
            <circle cx="37.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fZ)`}>
            <circle cx="39.77" cy="111.14" r=".35" />
            <circle cx="37.77" cy="111.14" r=".35" />
            <circle cx="40.77" cy="109.14" r=".35" />
            <circle cx="38.77" cy="109.14" r=".35" />
            <circle cx="36.77" cy="109.14" r=".35" />
            <circle cx="39.77" cy="107.14" r=".35" />
            <circle cx="37.77" cy="107.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-f0)`}>
            <circle cx="39.77" cy="115.14" r=".35" />
            <circle cx="37.77" cy="115.14" r=".35" />
            <circle cx="40.77" cy="113.14" r=".35" />
            <circle cx="38.77" cy="113.14" r=".35" />
            <circle cx="36.77" cy="113.14" r=".35" />
            <circle cx="39.77" cy="111.14" r=".35" />
            <circle cx="37.77" cy="111.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-f1)`}>
            <circle cx="35.77" cy="27.14" r=".35" />
            <circle cx="33.77" cy="27.14" r=".35" />
            <circle cx="36.77" cy="25.14" r=".35" />
            <circle cx="34.77" cy="25.14" r=".35" />
            <circle cx="32.77" cy="25.14" r=".35" />
            <circle cx="35.77" cy="23.14" r=".35" />
            <circle cx="33.77" cy="23.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-f2)`}>
            <circle cx="35.77" cy="31.14" r=".35" />
            <circle cx="33.77" cy="31.14" r=".35" />
            <circle cx="36.77" cy="29.14" r=".35" />
            <circle cx="34.77" cy="29.14" r=".35" />
            <circle cx="32.77" cy="29.14" r=".35" />
            <circle cx="35.77" cy="27.14" r=".35" />
            <circle cx="33.77" cy="27.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-f3)`}>
            <circle cx="35.77" cy="35.14" r=".35" />
            <circle cx="33.77" cy="35.14" r=".35" />
            <circle cx="36.77" cy="33.14" r=".35" />
            <circle cx="34.77" cy="33.14" r=".35" />
            <circle cx="32.77" cy="33.14" r=".35" />
            <circle cx="35.77" cy="31.14" r=".35" />
            <circle cx="33.77" cy="31.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-f4)`}>
            <circle cx="35.77" cy="39.14" r=".35" />
            <circle cx="33.77" cy="39.14" r=".35" />
            <circle cx="36.77" cy="37.14" r=".35" />
            <circle cx="34.77" cy="37.14" r=".35" />
            <circle cx="32.77" cy="37.14" r=".35" />
            <circle cx="35.77" cy="35.14" r=".35" />
            <circle cx="33.77" cy="35.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-f5)`}>
            <circle cx="35.77" cy="43.14" r=".35" />
            <circle cx="33.77" cy="43.14" r=".35" />
            <circle cx="36.77" cy="41.14" r=".35" />
            <circle cx="34.77" cy="41.14" r=".35" />
            <circle cx="32.77" cy="41.14" r=".35" />
            <circle cx="35.77" cy="39.14" r=".35" />
            <circle cx="33.77" cy="39.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-f6)`}>
            <circle cx="35.77" cy="47.14" r=".35" />
            <circle cx="33.77" cy="47.14" r=".35" />
            <circle cx="36.77" cy="45.14" r=".35" />
            <circle cx="34.77" cy="45.14" r=".35" />
            <circle cx="32.77" cy="45.14" r=".35" />
            <circle cx="35.77" cy="43.14" r=".35" />
            <circle cx="33.77" cy="43.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-f7)`}>
            <circle cx="35.77" cy="51.14" r=".35" />
            <circle cx="33.77" cy="51.14" r=".35" />
            <circle cx="36.77" cy="49.14" r=".35" />
            <circle cx="34.77" cy="49.14" r=".35" />
            <circle cx="32.77" cy="49.14" r=".35" />
            <circle cx="35.77" cy="47.14" r=".35" />
            <circle cx="33.77" cy="47.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-f8)`}>
            <circle cx="35.77" cy="55.14" r=".35" />
            <circle cx="33.77" cy="55.14" r=".35" />
            <circle cx="36.77" cy="53.14" r=".35" />
            <circle cx="34.77" cy="53.14" r=".35" />
            <circle cx="32.77" cy="53.14" r=".35" />
            <circle cx="35.77" cy="51.14" r=".35" />
            <circle cx="33.77" cy="51.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-f9)`}>
            <circle cx="35.77" cy="59.14" r=".35" />
            <circle cx="33.77" cy="59.14" r=".35" />
            <circle cx="36.77" cy="57.14" r=".35" />
            <circle cx="34.77" cy="57.14" r=".35" />
            <circle cx="32.77" cy="57.14" r=".35" />
            <circle cx="35.77" cy="55.14" r=".35" />
            <circle cx="33.77" cy="55.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ga)`}>
            <circle cx="35.77" cy="63.14" r=".35" />
            <circle cx="33.77" cy="63.14" r=".35" />
            <circle cx="36.77" cy="61.14" r=".35" />
            <circle cx="34.77" cy="61.14" r=".35" />
            <circle cx="32.77" cy="61.14" r=".35" />
            <circle cx="35.77" cy="59.14" r=".35" />
            <circle cx="33.77" cy="59.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-gb)`}>
            <circle cx="35.77" cy="67.14" r=".35" />
            <circle cx="33.77" cy="67.14" r=".35" />
            <circle cx="36.77" cy="65.14" r=".35" />
            <circle cx="34.77" cy="65.14" r=".35" />
            <circle cx="32.77" cy="65.14" r=".35" />
            <circle cx="35.77" cy="63.14" r=".35" />
            <circle cx="33.77" cy="63.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-gc)`}>
            <circle cx="35.77" cy="71.14" r=".35" />
            <circle cx="33.77" cy="71.14" r=".35" />
            <circle cx="36.77" cy="69.14" r=".35" />
            <circle cx="34.77" cy="69.14" r=".35" />
            <circle cx="32.77" cy="69.14" r=".35" />
            <circle cx="35.77" cy="67.14" r=".35" />
            <circle cx="33.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-gd)`}>
            <circle cx="35.77" cy="75.14" r=".35" />
            <circle cx="33.77" cy="75.14" r=".35" />
            <circle cx="36.77" cy="73.14" r=".35" />
            <circle cx="34.77" cy="73.14" r=".35" />
            <circle cx="32.77" cy="73.14" r=".35" />
            <circle cx="35.77" cy="71.14" r=".35" />
            <circle cx="33.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ge)`}>
            <circle cx="35.77" cy="79.14" r=".35" />
            <circle cx="33.77" cy="79.14" r=".35" />
            <circle cx="36.77" cy="77.14" r=".35" />
            <circle cx="34.77" cy="77.14" r=".35" />
            <circle cx="32.77" cy="77.14" r=".35" />
            <circle cx="35.77" cy="75.14" r=".35" />
            <circle cx="33.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-gf)`}>
            <circle cx="35.77" cy="83.14" r=".35" />
            <circle cx="33.77" cy="83.14" r=".35" />
            <circle cx="36.77" cy="81.14" r=".35" />
            <circle cx="34.77" cy="81.14" r=".35" />
            <circle cx="32.77" cy="81.14" r=".35" />
            <circle cx="35.77" cy="79.14" r=".35" />
            <circle cx="33.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-gg)`}>
            <circle cx="35.77" cy="87.14" r=".35" />
            <circle cx="33.77" cy="87.14" r=".35" />
            <circle cx="36.77" cy="85.14" r=".35" />
            <circle cx="34.77" cy="85.14" r=".35" />
            <circle cx="32.77" cy="85.14" r=".35" />
            <circle cx="35.77" cy="83.14" r=".35" />
            <circle cx="33.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-gh)`}>
            <circle cx="35.77" cy="91.14" r=".35" />
            <circle cx="33.77" cy="91.14" r=".35" />
            <circle cx="36.77" cy="89.14" r=".35" />
            <circle cx="34.77" cy="89.14" r=".35" />
            <circle cx="32.77" cy="89.14" r=".35" />
            <circle cx="35.77" cy="87.14" r=".35" />
            <circle cx="33.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-gi)`}>
            <circle cx="35.77" cy="95.14" r=".35" />
            <circle cx="33.77" cy="95.14" r=".35" />
            <circle cx="36.77" cy="93.14" r=".35" />
            <circle cx="34.77" cy="93.14" r=".35" />
            <circle cx="32.77" cy="93.14" r=".35" />
            <circle cx="35.77" cy="91.14" r=".35" />
            <circle cx="33.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-gj)`}>
            <circle cx="35.77" cy="99.14" r=".35" />
            <circle cx="33.77" cy="99.14" r=".35" />
            <circle cx="36.77" cy="97.14" r=".35" />
            <circle cx="34.77" cy="97.14" r=".35" />
            <circle cx="32.77" cy="97.14" r=".35" />
            <circle cx="35.77" cy="95.14" r=".35" />
            <circle cx="33.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-gk)`}>
            <circle cx="35.77" cy="103.14" r=".35" />
            <circle cx="33.77" cy="103.14" r=".35" />
            <circle cx="36.77" cy="101.14" r=".35" />
            <circle cx="34.77" cy="101.14" r=".35" />
            <circle cx="32.77" cy="101.14" r=".35" />
            <circle cx="35.77" cy="99.14" r=".35" />
            <circle cx="33.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-gl)`}>
            <circle cx="35.77" cy="107.14" r=".35" />
            <circle cx="33.77" cy="107.14" r=".35" />
            <circle cx="36.77" cy="105.14" r=".35" />
            <circle cx="34.77" cy="105.14" r=".35" />
            <circle cx="32.77" cy="105.14" r=".35" />
            <circle cx="35.77" cy="103.14" r=".35" />
            <circle cx="33.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-gm)`}>
            <circle cx="35.77" cy="111.14" r=".35" />
            <circle cx="33.77" cy="111.14" r=".35" />
            <circle cx="36.77" cy="109.14" r=".35" />
            <circle cx="34.77" cy="109.14" r=".35" />
            <circle cx="32.77" cy="109.14" r=".35" />
            <circle cx="35.77" cy="107.14" r=".35" />
            <circle cx="33.77" cy="107.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-gn)`}>
            <circle cx="35.77" cy="115.14" r=".35" />
            <circle cx="33.77" cy="115.14" r=".35" />
            <circle cx="36.77" cy="113.14" r=".35" />
            <circle cx="34.77" cy="113.14" r=".35" />
            <circle cx="32.77" cy="113.14" r=".35" />
            <circle cx="35.77" cy="111.14" r=".35" />
            <circle cx="33.77" cy="111.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-go)`}>
            <circle cx="31.77" cy="27.14" r=".35" />
            <circle cx="29.77" cy="27.14" r=".35" />
            <circle cx="32.77" cy="25.14" r=".35" />
            <circle cx="30.77" cy="25.14" r=".35" />
            <circle cx="28.77" cy="25.14" r=".35" />
            <circle cx="31.77" cy="23.14" r=".35" />
            <circle cx="29.77" cy="23.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-gp)`}>
            <circle cx="31.77" cy="31.14" r=".35" />
            <circle cx="29.77" cy="31.14" r=".35" />
            <circle cx="32.77" cy="29.14" r=".35" />
            <circle cx="30.77" cy="29.14" r=".35" />
            <circle cx="28.77" cy="29.14" r=".35" />
            <circle cx="31.77" cy="27.14" r=".35" />
            <circle cx="29.77" cy="27.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-gq)`}>
            <circle cx="31.77" cy="35.14" r=".35" />
            <circle cx="29.77" cy="35.14" r=".35" />
            <circle cx="32.77" cy="33.14" r=".35" />
            <circle cx="30.77" cy="33.14" r=".35" />
            <circle cx="28.77" cy="33.14" r=".35" />
            <circle cx="31.77" cy="31.14" r=".35" />
            <circle cx="29.77" cy="31.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-gr)`}>
            <circle cx="31.77" cy="39.14" r=".35" />
            <circle cx="29.77" cy="39.14" r=".35" />
            <circle cx="32.77" cy="37.14" r=".35" />
            <circle cx="30.77" cy="37.14" r=".35" />
            <circle cx="28.77" cy="37.14" r=".35" />
            <circle cx="31.77" cy="35.14" r=".35" />
            <circle cx="29.77" cy="35.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-gs)`}>
            <circle cx="31.77" cy="43.14" r=".35" />
            <circle cx="29.77" cy="43.14" r=".35" />
            <circle cx="32.77" cy="41.14" r=".35" />
            <circle cx="30.77" cy="41.14" r=".35" />
            <circle cx="28.77" cy="41.14" r=".35" />
            <circle cx="31.77" cy="39.14" r=".35" />
            <circle cx="29.77" cy="39.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-gt)`}>
            <circle cx="31.77" cy="47.14" r=".35" />
            <circle cx="29.77" cy="47.14" r=".35" />
            <circle cx="32.77" cy="45.14" r=".35" />
            <circle cx="30.77" cy="45.14" r=".35" />
            <circle cx="28.77" cy="45.14" r=".35" />
            <circle cx="31.77" cy="43.14" r=".35" />
            <circle cx="29.77" cy="43.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-gu)`}>
            <circle cx="31.77" cy="51.14" r=".35" />
            <circle cx="29.77" cy="51.14" r=".35" />
            <circle cx="32.77" cy="49.14" r=".35" />
            <circle cx="30.77" cy="49.14" r=".35" />
            <circle cx="28.77" cy="49.14" r=".35" />
            <circle cx="31.77" cy="47.14" r=".35" />
            <circle cx="29.77" cy="47.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-gv)`}>
            <circle cx="31.77" cy="55.14" r=".35" />
            <circle cx="29.77" cy="55.14" r=".35" />
            <circle cx="32.77" cy="53.14" r=".35" />
            <circle cx="30.77" cy="53.14" r=".35" />
            <circle cx="28.77" cy="53.14" r=".35" />
            <circle cx="31.77" cy="51.14" r=".35" />
            <circle cx="29.77" cy="51.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-gw)`}>
            <circle cx="31.77" cy="59.14" r=".35" />
            <circle cx="29.77" cy="59.14" r=".35" />
            <circle cx="32.77" cy="57.14" r=".35" />
            <circle cx="30.77" cy="57.14" r=".35" />
            <circle cx="28.77" cy="57.14" r=".35" />
            <circle cx="31.77" cy="55.14" r=".35" />
            <circle cx="29.77" cy="55.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-gx)`}>
            <circle cx="31.77" cy="63.14" r=".35" />
            <circle cx="29.77" cy="63.14" r=".35" />
            <circle cx="32.77" cy="61.14" r=".35" />
            <circle cx="30.77" cy="61.14" r=".35" />
            <circle cx="28.77" cy="61.14" r=".35" />
            <circle cx="31.77" cy="59.14" r=".35" />
            <circle cx="29.77" cy="59.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-gy)`}>
            <circle cx="31.77" cy="67.14" r=".35" />
            <circle cx="29.77" cy="67.14" r=".35" />
            <circle cx="32.77" cy="65.14" r=".35" />
            <circle cx="30.77" cy="65.14" r=".35" />
            <circle cx="28.77" cy="65.14" r=".35" />
            <circle cx="31.77" cy="63.14" r=".35" />
            <circle cx="29.77" cy="63.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-gz)`}>
            <circle cx="31.77" cy="71.14" r=".35" />
            <circle cx="29.77" cy="71.14" r=".35" />
            <circle cx="32.77" cy="69.14" r=".35" />
            <circle cx="30.77" cy="69.14" r=".35" />
            <circle cx="28.77" cy="69.14" r=".35" />
            <circle cx="31.77" cy="67.14" r=".35" />
            <circle cx="29.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-gA)`}>
            <circle cx="31.77" cy="75.14" r=".35" />
            <circle cx="29.77" cy="75.14" r=".35" />
            <circle cx="32.77" cy="73.14" r=".35" />
            <circle cx="30.77" cy="73.14" r=".35" />
            <circle cx="28.77" cy="73.14" r=".35" />
            <circle cx="31.77" cy="71.14" r=".35" />
            <circle cx="29.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-gB)`}>
            <circle cx="31.77" cy="79.14" r=".35" />
            <circle cx="29.77" cy="79.14" r=".35" />
            <circle cx="32.77" cy="77.14" r=".35" />
            <circle cx="30.77" cy="77.14" r=".35" />
            <circle cx="28.77" cy="77.14" r=".35" />
            <circle cx="31.77" cy="75.14" r=".35" />
            <circle cx="29.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-gC)`}>
            <circle cx="31.77" cy="83.14" r=".35" />
            <circle cx="29.77" cy="83.14" r=".35" />
            <circle cx="32.77" cy="81.14" r=".35" />
            <circle cx="30.77" cy="81.14" r=".35" />
            <circle cx="28.77" cy="81.14" r=".35" />
            <circle cx="31.77" cy="79.14" r=".35" />
            <circle cx="29.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-gD)`}>
            <circle cx="31.77" cy="87.14" r=".35" />
            <circle cx="29.77" cy="87.14" r=".35" />
            <circle cx="32.77" cy="85.14" r=".35" />
            <circle cx="30.77" cy="85.14" r=".35" />
            <circle cx="28.77" cy="85.14" r=".35" />
            <circle cx="31.77" cy="83.14" r=".35" />
            <circle cx="29.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-gE)`}>
            <circle cx="31.77" cy="91.14" r=".35" />
            <circle cx="29.77" cy="91.14" r=".35" />
            <circle cx="32.77" cy="89.14" r=".35" />
            <circle cx="30.77" cy="89.14" r=".35" />
            <circle cx="28.77" cy="89.14" r=".35" />
            <circle cx="31.77" cy="87.14" r=".35" />
            <circle cx="29.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-gF)`}>
            <circle cx="31.77" cy="95.14" r=".35" />
            <circle cx="29.77" cy="95.14" r=".35" />
            <circle cx="32.77" cy="93.14" r=".35" />
            <circle cx="30.77" cy="93.14" r=".35" />
            <circle cx="28.77" cy="93.14" r=".35" />
            <circle cx="31.77" cy="91.14" r=".35" />
            <circle cx="29.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-gG)`}>
            <circle cx="31.77" cy="99.14" r=".35" />
            <circle cx="29.77" cy="99.14" r=".35" />
            <circle cx="32.77" cy="97.14" r=".35" />
            <circle cx="30.77" cy="97.14" r=".35" />
            <circle cx="28.77" cy="97.14" r=".35" />
            <circle cx="31.77" cy="95.14" r=".35" />
            <circle cx="29.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-gH)`}>
            <circle cx="31.77" cy="103.14" r=".35" />
            <circle cx="29.77" cy="103.14" r=".35" />
            <circle cx="32.77" cy="101.14" r=".35" />
            <circle cx="30.77" cy="101.14" r=".35" />
            <circle cx="28.77" cy="101.14" r=".35" />
            <circle cx="31.77" cy="99.14" r=".35" />
            <circle cx="29.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-gI)`}>
            <circle cx="31.77" cy="107.14" r=".35" />
            <circle cx="29.77" cy="107.14" r=".35" />
            <circle cx="32.77" cy="105.14" r=".35" />
            <circle cx="30.77" cy="105.14" r=".35" />
            <circle cx="28.77" cy="105.14" r=".35" />
            <circle cx="31.77" cy="103.14" r=".35" />
            <circle cx="29.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-gJ)`}>
            <circle cx="31.77" cy="111.14" r=".35" />
            <circle cx="29.77" cy="111.14" r=".35" />
            <circle cx="32.77" cy="109.14" r=".35" />
            <circle cx="30.77" cy="109.14" r=".35" />
            <circle cx="28.77" cy="109.14" r=".35" />
            <circle cx="31.77" cy="107.14" r=".35" />
            <circle cx="29.77" cy="107.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-gK)`}>
            <circle cx="31.77" cy="115.14" r=".35" />
            <circle cx="29.77" cy="115.14" r=".35" />
            <circle cx="32.77" cy="113.14" r=".35" />
            <circle cx="30.77" cy="113.14" r=".35" />
            <circle cx="28.77" cy="113.14" r=".35" />
            <circle cx="31.77" cy="111.14" r=".35" />
            <circle cx="29.77" cy="111.14" r=".35" />
          </g>
        </g>
        <path
          d="m39.89 32.2v74.51-38.71a60.13 60.13 0 0 0 6.46 12.3v-5.3h19.83v23.6a60.29 60.29 0 0 0 30.2 8.07v-74.47zm6.46 7h25v2.1h-25zm0 28.3v-2.1h34.46v2.1zm43.17 31.81h-19.31v-2.1h19.31zm0-7.85h-19.31v-2.1h19.31zm0-7.16h-19.31v-2.1h19.31zm0-7.16h-19.31v-2.14h19.31zm0-16.21h-43.17v-2.1h43.17zm0-6.55h-43.17v-2.1h43.17zm0-6.55h-43.17v-2.1h43.17z"
          fill="#f8f7f4"
        />
        <g fill="#10004c">
          <path d="m46.35 39.18h25.03v2.1h-25.03z" />
          <path d="m46.35 45.73h43.16v2.1h-43.16z" />
          <path d="m46.35 52.28h43.16v2.1h-43.16z" />
          <path d="m46.35 58.83h43.16v2.1h-43.16z" />
          <path d="m46.35 65.38h34.45v2.1h-34.45z" />
          <path d="m70.21 75.04h19.3v2.1h-19.3z" />
          <path d="m70.21 82.2h19.3v2.1h-19.3z" />
          <path d="m70.21 89.36h19.3v2.1h-19.3z" />
          <path d="m70.21 97.21h19.3v2.1h-19.3z" />
        </g>
        <path
          d="m51.53 83.69a3.67 3.67 0 0 1 3.65 3.69 3.62 3.62 0 0 1 -.83 2.31q.93.9 1.92 1.77v-2h6.62v6.54h-.81c1.34.92 2.69 1.8 4.1 2.61v-23.61h-19.83v5.3c1 1.4 2 2.75 3.07 4.06a3.62 3.62 0 0 1 2.11-.67z"
          fill="#5fcbeb"
        />
        <path
          d="m66.18 99.31h-19.83v-19a60.21 60.21 0 0 1 -6.46-12.31v38.68h56.49a60.29 60.29 0 0 1 -30.2-8.07z"
          fill="#fde5cb"
        />
        <path d="m46.35 99.31h19.83z" fill="#2870b5" />
        <path
          d="m66.18 99.31v-.67c-1.41-.81-2.76-1.69-4.1-2.61h-5.81v-4.54q-1-.87-1.92-1.77a3.68 3.68 0 0 1 -5.83-4.49l.12-.15a3.55 3.55 0 0 1 .78-.72c-1.07-1.31-2.11-2.66-3.07-4.06v19z"
          fill="#2870b5"
        />
        <path
          d="m51.53 83.69a3.62 3.62 0 0 0 -2.11.67 60.9 60.9 0 0 0 4.93 5.36 3.67 3.67 0 0 0 -2.82-6z"
          fill="#feca1e"
        />
        <path
          d="m49.42 84.36a3.68 3.68 0 1 0 4.15 6.08 3.55 3.55 0 0 0 .78-.72 60.9 60.9 0 0 1 -4.93-5.36z"
          fill="#f17732"
        />
        <path
          d="m62.89 89.41h-6.62v2.08a59 59 0 0 0 5.81 4.51h.81z"
          fill="#2870b5"
        />
        <path d="m56.27 96h5.81a59.26 59.26 0 0 1 -5.81-4.54z" fill="#10004c" />
        <path d="m59.58 77.65 3.84 6.65h-7.68z" fill="#99052e" />
        <g clipPath={`url(#${id}-gL)`} fill="#fde5cb">
          <g clipPath={`url(#${id}-au)`}>
            <circle cx="95.77" cy="35.14" r=".35" />
            <circle cx="93.77" cy="35.14" r=".35" />
            <circle cx="96.77" cy="33.14" r=".35" />
            <circle cx="94.77" cy="33.14" r=".35" />
            <circle cx="92.77" cy="33.14" r=".35" />
            <circle cx="95.77" cy="31.14" r=".35" />
            <circle cx="93.77" cy="31.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-av)`}>
            <circle cx="95.77" cy="39.14" r=".35" />
            <circle cx="93.77" cy="39.14" r=".35" />
            <circle cx="96.77" cy="37.14" r=".35" />
            <circle cx="94.77" cy="37.14" r=".35" />
            <circle cx="92.77" cy="37.14" r=".35" />
            <circle cx="95.77" cy="35.14" r=".35" />
            <circle cx="93.77" cy="35.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aw)`}>
            <circle cx="95.77" cy="43.14" r=".35" />
            <circle cx="93.77" cy="43.14" r=".35" />
            <circle cx="96.77" cy="41.14" r=".35" />
            <circle cx="94.77" cy="41.14" r=".35" />
            <circle cx="92.77" cy="41.14" r=".35" />
            <circle cx="95.77" cy="39.14" r=".35" />
            <circle cx="93.77" cy="39.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ax)`}>
            <circle cx="95.77" cy="47.14" r=".35" />
            <circle cx="93.77" cy="47.14" r=".35" />
            <circle cx="96.77" cy="45.14" r=".35" />
            <circle cx="94.77" cy="45.14" r=".35" />
            <circle cx="92.77" cy="45.14" r=".35" />
            <circle cx="95.77" cy="43.14" r=".35" />
            <circle cx="93.77" cy="43.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ay)`}>
            <circle cx="95.77" cy="51.14" r=".35" />
            <circle cx="93.77" cy="51.14" r=".35" />
            <circle cx="96.77" cy="49.14" r=".35" />
            <circle cx="94.77" cy="49.14" r=".35" />
            <circle cx="92.77" cy="49.14" r=".35" />
            <circle cx="95.77" cy="47.14" r=".35" />
            <circle cx="93.77" cy="47.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-az)`}>
            <circle cx="95.77" cy="55.14" r=".35" />
            <circle cx="93.77" cy="55.14" r=".35" />
            <circle cx="96.77" cy="53.14" r=".35" />
            <circle cx="94.77" cy="53.14" r=".35" />
            <circle cx="92.77" cy="53.14" r=".35" />
            <circle cx="95.77" cy="51.14" r=".35" />
            <circle cx="93.77" cy="51.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aA)`}>
            <circle cx="95.77" cy="59.14" r=".35" />
            <circle cx="93.77" cy="59.14" r=".35" />
            <circle cx="96.77" cy="57.14" r=".35" />
            <circle cx="94.77" cy="57.14" r=".35" />
            <circle cx="92.77" cy="57.14" r=".35" />
            <circle cx="95.77" cy="55.14" r=".35" />
            <circle cx="93.77" cy="55.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aB)`}>
            <circle cx="95.77" cy="63.14" r=".35" />
            <circle cx="93.77" cy="63.14" r=".35" />
            <circle cx="96.77" cy="61.14" r=".35" />
            <circle cx="94.77" cy="61.14" r=".35" />
            <circle cx="92.77" cy="61.14" r=".35" />
            <circle cx="95.77" cy="59.14" r=".35" />
            <circle cx="93.77" cy="59.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aC)`}>
            <circle cx="95.77" cy="67.14" r=".35" />
            <circle cx="93.77" cy="67.14" r=".35" />
            <circle cx="96.77" cy="65.14" r=".35" />
            <circle cx="94.77" cy="65.14" r=".35" />
            <circle cx="92.77" cy="65.14" r=".35" />
            <circle cx="95.77" cy="63.14" r=".35" />
            <circle cx="93.77" cy="63.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aD)`}>
            <circle cx="95.77" cy="71.14" r=".35" />
            <circle cx="93.77" cy="71.14" r=".35" />
            <circle cx="96.77" cy="69.14" r=".35" />
            <circle cx="94.77" cy="69.14" r=".35" />
            <circle cx="92.77" cy="69.14" r=".35" />
            <circle cx="95.77" cy="67.14" r=".35" />
            <circle cx="93.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aE)`}>
            <circle cx="95.77" cy="75.14" r=".35" />
            <circle cx="93.77" cy="75.14" r=".35" />
            <circle cx="96.77" cy="73.14" r=".35" />
            <circle cx="94.77" cy="73.14" r=".35" />
            <circle cx="92.77" cy="73.14" r=".35" />
            <circle cx="95.77" cy="71.14" r=".35" />
            <circle cx="93.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aF)`}>
            <circle cx="95.77" cy="79.14" r=".35" />
            <circle cx="93.77" cy="79.14" r=".35" />
            <circle cx="96.77" cy="77.14" r=".35" />
            <circle cx="94.77" cy="77.14" r=".35" />
            <circle cx="92.77" cy="77.14" r=".35" />
            <circle cx="95.77" cy="75.14" r=".35" />
            <circle cx="93.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aG)`}>
            <circle cx="95.77" cy="83.14" r=".35" />
            <circle cx="93.77" cy="83.14" r=".35" />
            <circle cx="96.77" cy="81.14" r=".35" />
            <circle cx="94.77" cy="81.14" r=".35" />
            <circle cx="92.77" cy="81.14" r=".35" />
            <circle cx="95.77" cy="79.14" r=".35" />
            <circle cx="93.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aH)`}>
            <circle cx="95.77" cy="87.14" r=".35" />
            <circle cx="93.77" cy="87.14" r=".35" />
            <circle cx="96.77" cy="85.14" r=".35" />
            <circle cx="94.77" cy="85.14" r=".35" />
            <circle cx="92.77" cy="85.14" r=".35" />
            <circle cx="95.77" cy="83.14" r=".35" />
            <circle cx="93.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aI)`}>
            <circle cx="95.77" cy="91.14" r=".35" />
            <circle cx="93.77" cy="91.14" r=".35" />
            <circle cx="96.77" cy="89.14" r=".35" />
            <circle cx="94.77" cy="89.14" r=".35" />
            <circle cx="92.77" cy="89.14" r=".35" />
            <circle cx="95.77" cy="87.14" r=".35" />
            <circle cx="93.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aJ)`}>
            <circle cx="95.77" cy="95.14" r=".35" />
            <circle cx="93.77" cy="95.14" r=".35" />
            <circle cx="96.77" cy="93.14" r=".35" />
            <circle cx="94.77" cy="93.14" r=".35" />
            <circle cx="92.77" cy="93.14" r=".35" />
            <circle cx="95.77" cy="91.14" r=".35" />
            <circle cx="93.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aK)`}>
            <circle cx="95.77" cy="99.14" r=".35" />
            <circle cx="93.77" cy="99.14" r=".35" />
            <circle cx="96.77" cy="97.14" r=".35" />
            <circle cx="94.77" cy="97.14" r=".35" />
            <circle cx="92.77" cy="97.14" r=".35" />
            <circle cx="95.77" cy="95.14" r=".35" />
            <circle cx="93.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aL)`}>
            <circle cx="95.77" cy="103.14" r=".35" />
            <circle cx="93.77" cy="103.14" r=".35" />
            <circle cx="96.77" cy="101.14" r=".35" />
            <circle cx="94.77" cy="101.14" r=".35" />
            <circle cx="92.77" cy="101.14" r=".35" />
            <circle cx="95.77" cy="99.14" r=".35" />
            <circle cx="93.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aM)`}>
            <circle cx="95.77" cy="107.14" r=".35" />
            <circle cx="93.77" cy="107.14" r=".35" />
            <circle cx="96.77" cy="105.14" r=".35" />
            <circle cx="94.77" cy="105.14" r=".35" />
            <circle cx="92.77" cy="105.14" r=".35" />
            <circle cx="95.77" cy="103.14" r=".35" />
            <circle cx="93.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aR)`}>
            <circle cx="91.77" cy="35.14" r=".35" />
            <circle cx="89.77" cy="35.14" r=".35" />
            <circle cx="92.77" cy="33.14" r=".35" />
            <circle cx="90.77" cy="33.14" r=".35" />
            <circle cx="88.77" cy="33.14" r=".35" />
            <circle cx="91.77" cy="31.14" r=".35" />
            <circle cx="89.77" cy="31.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aS)`}>
            <circle cx="91.77" cy="39.14" r=".35" />
            <circle cx="89.77" cy="39.14" r=".35" />
            <circle cx="92.77" cy="37.14" r=".35" />
            <circle cx="90.77" cy="37.14" r=".35" />
            <circle cx="88.77" cy="37.14" r=".35" />
            <circle cx="91.77" cy="35.14" r=".35" />
            <circle cx="89.77" cy="35.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aT)`}>
            <circle cx="91.77" cy="43.14" r=".35" />
            <circle cx="89.77" cy="43.14" r=".35" />
            <circle cx="92.77" cy="41.14" r=".35" />
            <circle cx="90.77" cy="41.14" r=".35" />
            <circle cx="88.77" cy="41.14" r=".35" />
            <circle cx="91.77" cy="39.14" r=".35" />
            <circle cx="89.77" cy="39.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aU)`}>
            <circle cx="91.77" cy="47.14" r=".35" />
            <circle cx="89.77" cy="47.14" r=".35" />
            <circle cx="92.77" cy="45.14" r=".35" />
            <circle cx="90.77" cy="45.14" r=".35" />
            <circle cx="88.77" cy="45.14" r=".35" />
            <circle cx="91.77" cy="43.14" r=".35" />
            <circle cx="89.77" cy="43.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aV)`}>
            <circle cx="91.77" cy="51.14" r=".35" />
            <circle cx="89.77" cy="51.14" r=".35" />
            <circle cx="92.77" cy="49.14" r=".35" />
            <circle cx="90.77" cy="49.14" r=".35" />
            <circle cx="88.77" cy="49.14" r=".35" />
            <circle cx="91.77" cy="47.14" r=".35" />
            <circle cx="89.77" cy="47.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aW)`}>
            <circle cx="91.77" cy="55.14" r=".35" />
            <circle cx="89.77" cy="55.14" r=".35" />
            <circle cx="92.77" cy="53.14" r=".35" />
            <circle cx="90.77" cy="53.14" r=".35" />
            <circle cx="88.77" cy="53.14" r=".35" />
            <circle cx="91.77" cy="51.14" r=".35" />
            <circle cx="89.77" cy="51.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aX)`}>
            <circle cx="91.77" cy="59.14" r=".35" />
            <circle cx="89.77" cy="59.14" r=".35" />
            <circle cx="92.77" cy="57.14" r=".35" />
            <circle cx="90.77" cy="57.14" r=".35" />
            <circle cx="88.77" cy="57.14" r=".35" />
            <circle cx="91.77" cy="55.14" r=".35" />
            <circle cx="89.77" cy="55.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aY)`}>
            <circle cx="91.77" cy="63.14" r=".35" />
            <circle cx="89.77" cy="63.14" r=".35" />
            <circle cx="92.77" cy="61.14" r=".35" />
            <circle cx="90.77" cy="61.14" r=".35" />
            <circle cx="88.77" cy="61.14" r=".35" />
            <circle cx="91.77" cy="59.14" r=".35" />
            <circle cx="89.77" cy="59.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aZ)`}>
            <circle cx="91.77" cy="67.14" r=".35" />
            <circle cx="89.77" cy="67.14" r=".35" />
            <circle cx="92.77" cy="65.14" r=".35" />
            <circle cx="90.77" cy="65.14" r=".35" />
            <circle cx="88.77" cy="65.14" r=".35" />
            <circle cx="91.77" cy="63.14" r=".35" />
            <circle cx="89.77" cy="63.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a0)`}>
            <circle cx="91.77" cy="71.14" r=".35" />
            <circle cx="89.77" cy="71.14" r=".35" />
            <circle cx="92.77" cy="69.14" r=".35" />
            <circle cx="90.77" cy="69.14" r=".35" />
            <circle cx="88.77" cy="69.14" r=".35" />
            <circle cx="91.77" cy="67.14" r=".35" />
            <circle cx="89.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a1)`}>
            <circle cx="91.77" cy="75.14" r=".35" />
            <circle cx="89.77" cy="75.14" r=".35" />
            <circle cx="92.77" cy="73.14" r=".35" />
            <circle cx="90.77" cy="73.14" r=".35" />
            <circle cx="88.77" cy="73.14" r=".35" />
            <circle cx="91.77" cy="71.14" r=".35" />
            <circle cx="89.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a2)`}>
            <circle cx="91.77" cy="79.14" r=".35" />
            <circle cx="89.77" cy="79.14" r=".35" />
            <circle cx="92.77" cy="77.14" r=".35" />
            <circle cx="90.77" cy="77.14" r=".35" />
            <circle cx="88.77" cy="77.14" r=".35" />
            <circle cx="91.77" cy="75.14" r=".35" />
            <circle cx="89.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a3)`}>
            <circle cx="91.77" cy="83.14" r=".35" />
            <circle cx="89.77" cy="83.14" r=".35" />
            <circle cx="92.77" cy="81.14" r=".35" />
            <circle cx="90.77" cy="81.14" r=".35" />
            <circle cx="88.77" cy="81.14" r=".35" />
            <circle cx="91.77" cy="79.14" r=".35" />
            <circle cx="89.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a4)`}>
            <circle cx="91.77" cy="87.14" r=".35" />
            <circle cx="89.77" cy="87.14" r=".35" />
            <circle cx="92.77" cy="85.14" r=".35" />
            <circle cx="90.77" cy="85.14" r=".35" />
            <circle cx="88.77" cy="85.14" r=".35" />
            <circle cx="91.77" cy="83.14" r=".35" />
            <circle cx="89.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a5)`}>
            <circle cx="91.77" cy="91.14" r=".35" />
            <circle cx="89.77" cy="91.14" r=".35" />
            <circle cx="92.77" cy="89.14" r=".35" />
            <circle cx="90.77" cy="89.14" r=".35" />
            <circle cx="88.77" cy="89.14" r=".35" />
            <circle cx="91.77" cy="87.14" r=".35" />
            <circle cx="89.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a6)`}>
            <circle cx="91.77" cy="95.14" r=".35" />
            <circle cx="89.77" cy="95.14" r=".35" />
            <circle cx="92.77" cy="93.14" r=".35" />
            <circle cx="90.77" cy="93.14" r=".35" />
            <circle cx="88.77" cy="93.14" r=".35" />
            <circle cx="91.77" cy="91.14" r=".35" />
            <circle cx="89.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a7)`}>
            <circle cx="91.77" cy="99.14" r=".35" />
            <circle cx="89.77" cy="99.14" r=".35" />
            <circle cx="92.77" cy="97.14" r=".35" />
            <circle cx="90.77" cy="97.14" r=".35" />
            <circle cx="88.77" cy="97.14" r=".35" />
            <circle cx="91.77" cy="95.14" r=".35" />
            <circle cx="89.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a8)`}>
            <circle cx="91.77" cy="103.14" r=".35" />
            <circle cx="89.77" cy="103.14" r=".35" />
            <circle cx="92.77" cy="101.14" r=".35" />
            <circle cx="90.77" cy="101.14" r=".35" />
            <circle cx="88.77" cy="101.14" r=".35" />
            <circle cx="91.77" cy="99.14" r=".35" />
            <circle cx="89.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a9)`}>
            <circle cx="91.77" cy="107.14" r=".35" />
            <circle cx="89.77" cy="107.14" r=".35" />
            <circle cx="92.77" cy="105.14" r=".35" />
            <circle cx="90.77" cy="105.14" r=".35" />
            <circle cx="88.77" cy="105.14" r=".35" />
            <circle cx="91.77" cy="103.14" r=".35" />
            <circle cx="89.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-be)`}>
            <circle cx="87.77" cy="35.14" r=".35" />
            <circle cx="85.77" cy="35.14" r=".35" />
            <circle cx="88.77" cy="33.14" r=".35" />
            <circle cx="86.77" cy="33.14" r=".35" />
            <circle cx="84.77" cy="33.14" r=".35" />
            <circle cx="87.77" cy="31.14" r=".35" />
            <circle cx="85.77" cy="31.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bf)`}>
            <circle cx="87.77" cy="39.14" r=".35" />
            <circle cx="85.77" cy="39.14" r=".35" />
            <circle cx="88.77" cy="37.14" r=".35" />
            <circle cx="86.77" cy="37.14" r=".35" />
            <circle cx="84.77" cy="37.14" r=".35" />
            <circle cx="87.77" cy="35.14" r=".35" />
            <circle cx="85.77" cy="35.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bg)`}>
            <circle cx="87.77" cy="43.14" r=".35" />
            <circle cx="85.77" cy="43.14" r=".35" />
            <circle cx="88.77" cy="41.14" r=".35" />
            <circle cx="86.77" cy="41.14" r=".35" />
            <circle cx="84.77" cy="41.14" r=".35" />
            <circle cx="87.77" cy="39.14" r=".35" />
            <circle cx="85.77" cy="39.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bh)`}>
            <circle cx="87.77" cy="47.14" r=".35" />
            <circle cx="85.77" cy="47.14" r=".35" />
            <circle cx="88.77" cy="45.14" r=".35" />
            <circle cx="86.77" cy="45.14" r=".35" />
            <circle cx="84.77" cy="45.14" r=".35" />
            <circle cx="87.77" cy="43.14" r=".35" />
            <circle cx="85.77" cy="43.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bi)`}>
            <circle cx="87.77" cy="51.14" r=".35" />
            <circle cx="85.77" cy="51.14" r=".35" />
            <circle cx="88.77" cy="49.14" r=".35" />
            <circle cx="86.77" cy="49.14" r=".35" />
            <circle cx="84.77" cy="49.14" r=".35" />
            <circle cx="87.77" cy="47.14" r=".35" />
            <circle cx="85.77" cy="47.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bj)`}>
            <circle cx="87.77" cy="55.14" r=".35" />
            <circle cx="85.77" cy="55.14" r=".35" />
            <circle cx="88.77" cy="53.14" r=".35" />
            <circle cx="86.77" cy="53.14" r=".35" />
            <circle cx="84.77" cy="53.14" r=".35" />
            <circle cx="87.77" cy="51.14" r=".35" />
            <circle cx="85.77" cy="51.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bk)`}>
            <circle cx="87.77" cy="59.14" r=".35" />
            <circle cx="85.77" cy="59.14" r=".35" />
            <circle cx="88.77" cy="57.14" r=".35" />
            <circle cx="86.77" cy="57.14" r=".35" />
            <circle cx="84.77" cy="57.14" r=".35" />
            <circle cx="87.77" cy="55.14" r=".35" />
            <circle cx="85.77" cy="55.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bl)`}>
            <circle cx="87.77" cy="63.14" r=".35" />
            <circle cx="85.77" cy="63.14" r=".35" />
            <circle cx="88.77" cy="61.14" r=".35" />
            <circle cx="86.77" cy="61.14" r=".35" />
            <circle cx="84.77" cy="61.14" r=".35" />
            <circle cx="87.77" cy="59.14" r=".35" />
            <circle cx="85.77" cy="59.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bm)`}>
            <circle cx="87.77" cy="67.14" r=".35" />
            <circle cx="85.77" cy="67.14" r=".35" />
            <circle cx="88.77" cy="65.14" r=".35" />
            <circle cx="86.77" cy="65.14" r=".35" />
            <circle cx="84.77" cy="65.14" r=".35" />
            <circle cx="87.77" cy="63.14" r=".35" />
            <circle cx="85.77" cy="63.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bn)`}>
            <circle cx="87.77" cy="71.14" r=".35" />
            <circle cx="85.77" cy="71.14" r=".35" />
            <circle cx="88.77" cy="69.14" r=".35" />
            <circle cx="86.77" cy="69.14" r=".35" />
            <circle cx="84.77" cy="69.14" r=".35" />
            <circle cx="87.77" cy="67.14" r=".35" />
            <circle cx="85.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bo)`}>
            <circle cx="87.77" cy="75.14" r=".35" />
            <circle cx="85.77" cy="75.14" r=".35" />
            <circle cx="88.77" cy="73.14" r=".35" />
            <circle cx="86.77" cy="73.14" r=".35" />
            <circle cx="84.77" cy="73.14" r=".35" />
            <circle cx="87.77" cy="71.14" r=".35" />
            <circle cx="85.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bp)`}>
            <circle cx="87.77" cy="79.14" r=".35" />
            <circle cx="85.77" cy="79.14" r=".35" />
            <circle cx="88.77" cy="77.14" r=".35" />
            <circle cx="86.77" cy="77.14" r=".35" />
            <circle cx="84.77" cy="77.14" r=".35" />
            <circle cx="87.77" cy="75.14" r=".35" />
            <circle cx="85.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bq)`}>
            <circle cx="87.77" cy="83.14" r=".35" />
            <circle cx="85.77" cy="83.14" r=".35" />
            <circle cx="88.77" cy="81.14" r=".35" />
            <circle cx="86.77" cy="81.14" r=".35" />
            <circle cx="84.77" cy="81.14" r=".35" />
            <circle cx="87.77" cy="79.14" r=".35" />
            <circle cx="85.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-br)`}>
            <circle cx="87.77" cy="87.14" r=".35" />
            <circle cx="85.77" cy="87.14" r=".35" />
            <circle cx="88.77" cy="85.14" r=".35" />
            <circle cx="86.77" cy="85.14" r=".35" />
            <circle cx="84.77" cy="85.14" r=".35" />
            <circle cx="87.77" cy="83.14" r=".35" />
            <circle cx="85.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bs)`}>
            <circle cx="87.77" cy="91.14" r=".35" />
            <circle cx="85.77" cy="91.14" r=".35" />
            <circle cx="88.77" cy="89.14" r=".35" />
            <circle cx="86.77" cy="89.14" r=".35" />
            <circle cx="84.77" cy="89.14" r=".35" />
            <circle cx="87.77" cy="87.14" r=".35" />
            <circle cx="85.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bt)`}>
            <circle cx="87.77" cy="95.14" r=".35" />
            <circle cx="85.77" cy="95.14" r=".35" />
            <circle cx="88.77" cy="93.14" r=".35" />
            <circle cx="86.77" cy="93.14" r=".35" />
            <circle cx="84.77" cy="93.14" r=".35" />
            <circle cx="87.77" cy="91.14" r=".35" />
            <circle cx="85.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bu)`}>
            <circle cx="87.77" cy="99.14" r=".35" />
            <circle cx="85.77" cy="99.14" r=".35" />
            <circle cx="88.77" cy="97.14" r=".35" />
            <circle cx="86.77" cy="97.14" r=".35" />
            <circle cx="84.77" cy="97.14" r=".35" />
            <circle cx="87.77" cy="95.14" r=".35" />
            <circle cx="85.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bv)`}>
            <circle cx="87.77" cy="103.14" r=".35" />
            <circle cx="85.77" cy="103.14" r=".35" />
            <circle cx="88.77" cy="101.14" r=".35" />
            <circle cx="86.77" cy="101.14" r=".35" />
            <circle cx="84.77" cy="101.14" r=".35" />
            <circle cx="87.77" cy="99.14" r=".35" />
            <circle cx="85.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bw)`}>
            <circle cx="87.77" cy="107.14" r=".35" />
            <circle cx="85.77" cy="107.14" r=".35" />
            <circle cx="88.77" cy="105.14" r=".35" />
            <circle cx="86.77" cy="105.14" r=".35" />
            <circle cx="84.77" cy="105.14" r=".35" />
            <circle cx="87.77" cy="103.14" r=".35" />
            <circle cx="85.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bB)`}>
            <circle cx="83.77" cy="35.14" r=".35" />
            <circle cx="81.77" cy="35.14" r=".35" />
            <circle cx="84.77" cy="33.14" r=".35" />
            <circle cx="82.77" cy="33.14" r=".35" />
            <circle cx="80.77" cy="33.14" r=".35" />
            <circle cx="83.77" cy="31.14" r=".35" />
            <circle cx="81.77" cy="31.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bC)`}>
            <circle cx="83.77" cy="39.14" r=".35" />
            <circle cx="81.77" cy="39.14" r=".35" />
            <circle cx="84.77" cy="37.14" r=".35" />
            <circle cx="82.77" cy="37.14" r=".35" />
            <circle cx="80.77" cy="37.14" r=".35" />
            <circle cx="83.77" cy="35.14" r=".35" />
            <circle cx="81.77" cy="35.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bD)`}>
            <circle cx="83.77" cy="43.14" r=".35" />
            <circle cx="81.77" cy="43.14" r=".35" />
            <circle cx="84.77" cy="41.14" r=".35" />
            <circle cx="82.77" cy="41.14" r=".35" />
            <circle cx="80.77" cy="41.14" r=".35" />
            <circle cx="83.77" cy="39.14" r=".35" />
            <circle cx="81.77" cy="39.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bE)`}>
            <circle cx="83.77" cy="47.14" r=".35" />
            <circle cx="81.77" cy="47.14" r=".35" />
            <circle cx="84.77" cy="45.14" r=".35" />
            <circle cx="82.77" cy="45.14" r=".35" />
            <circle cx="80.77" cy="45.14" r=".35" />
            <circle cx="83.77" cy="43.14" r=".35" />
            <circle cx="81.77" cy="43.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bF)`}>
            <circle cx="83.77" cy="51.14" r=".35" />
            <circle cx="81.77" cy="51.14" r=".35" />
            <circle cx="84.77" cy="49.14" r=".35" />
            <circle cx="82.77" cy="49.14" r=".35" />
            <circle cx="80.77" cy="49.14" r=".35" />
            <circle cx="83.77" cy="47.14" r=".35" />
            <circle cx="81.77" cy="47.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bG)`}>
            <circle cx="83.77" cy="55.14" r=".35" />
            <circle cx="81.77" cy="55.14" r=".35" />
            <circle cx="84.77" cy="53.14" r=".35" />
            <circle cx="82.77" cy="53.14" r=".35" />
            <circle cx="80.77" cy="53.14" r=".35" />
            <circle cx="83.77" cy="51.14" r=".35" />
            <circle cx="81.77" cy="51.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bH)`}>
            <circle cx="83.77" cy="59.14" r=".35" />
            <circle cx="81.77" cy="59.14" r=".35" />
            <circle cx="84.77" cy="57.14" r=".35" />
            <circle cx="82.77" cy="57.14" r=".35" />
            <circle cx="80.77" cy="57.14" r=".35" />
            <circle cx="83.77" cy="55.14" r=".35" />
            <circle cx="81.77" cy="55.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bI)`}>
            <circle cx="83.77" cy="63.14" r=".35" />
            <circle cx="81.77" cy="63.14" r=".35" />
            <circle cx="84.77" cy="61.14" r=".35" />
            <circle cx="82.77" cy="61.14" r=".35" />
            <circle cx="80.77" cy="61.14" r=".35" />
            <circle cx="83.77" cy="59.14" r=".35" />
            <circle cx="81.77" cy="59.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bJ)`}>
            <circle cx="83.77" cy="67.14" r=".35" />
            <circle cx="81.77" cy="67.14" r=".35" />
            <circle cx="84.77" cy="65.14" r=".35" />
            <circle cx="82.77" cy="65.14" r=".35" />
            <circle cx="80.77" cy="65.14" r=".35" />
            <circle cx="83.77" cy="63.14" r=".35" />
            <circle cx="81.77" cy="63.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bK)`}>
            <circle cx="83.77" cy="71.14" r=".35" />
            <circle cx="81.77" cy="71.14" r=".35" />
            <circle cx="84.77" cy="69.14" r=".35" />
            <circle cx="82.77" cy="69.14" r=".35" />
            <circle cx="80.77" cy="69.14" r=".35" />
            <circle cx="83.77" cy="67.14" r=".35" />
            <circle cx="81.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bL)`}>
            <circle cx="83.77" cy="75.14" r=".35" />
            <circle cx="81.77" cy="75.14" r=".35" />
            <circle cx="84.77" cy="73.14" r=".35" />
            <circle cx="82.77" cy="73.14" r=".35" />
            <circle cx="80.77" cy="73.14" r=".35" />
            <circle cx="83.77" cy="71.14" r=".35" />
            <circle cx="81.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bM)`}>
            <circle cx="83.77" cy="79.14" r=".35" />
            <circle cx="81.77" cy="79.14" r=".35" />
            <circle cx="84.77" cy="77.14" r=".35" />
            <circle cx="82.77" cy="77.14" r=".35" />
            <circle cx="80.77" cy="77.14" r=".35" />
            <circle cx="83.77" cy="75.14" r=".35" />
            <circle cx="81.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bN)`}>
            <circle cx="83.77" cy="83.14" r=".35" />
            <circle cx="81.77" cy="83.14" r=".35" />
            <circle cx="84.77" cy="81.14" r=".35" />
            <circle cx="82.77" cy="81.14" r=".35" />
            <circle cx="80.77" cy="81.14" r=".35" />
            <circle cx="83.77" cy="79.14" r=".35" />
            <circle cx="81.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bO)`}>
            <circle cx="83.77" cy="87.14" r=".35" />
            <circle cx="81.77" cy="87.14" r=".35" />
            <circle cx="84.77" cy="85.14" r=".35" />
            <circle cx="82.77" cy="85.14" r=".35" />
            <circle cx="80.77" cy="85.14" r=".35" />
            <circle cx="83.77" cy="83.14" r=".35" />
            <circle cx="81.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bP)`}>
            <circle cx="83.77" cy="91.14" r=".35" />
            <circle cx="81.77" cy="91.14" r=".35" />
            <circle cx="84.77" cy="89.14" r=".35" />
            <circle cx="82.77" cy="89.14" r=".35" />
            <circle cx="80.77" cy="89.14" r=".35" />
            <circle cx="83.77" cy="87.14" r=".35" />
            <circle cx="81.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bQ)`}>
            <circle cx="83.77" cy="95.14" r=".35" />
            <circle cx="81.77" cy="95.14" r=".35" />
            <circle cx="84.77" cy="93.14" r=".35" />
            <circle cx="82.77" cy="93.14" r=".35" />
            <circle cx="80.77" cy="93.14" r=".35" />
            <circle cx="83.77" cy="91.14" r=".35" />
            <circle cx="81.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bR)`}>
            <circle cx="83.77" cy="99.14" r=".35" />
            <circle cx="81.77" cy="99.14" r=".35" />
            <circle cx="84.77" cy="97.14" r=".35" />
            <circle cx="82.77" cy="97.14" r=".35" />
            <circle cx="80.77" cy="97.14" r=".35" />
            <circle cx="83.77" cy="95.14" r=".35" />
            <circle cx="81.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bS)`}>
            <circle cx="83.77" cy="103.14" r=".35" />
            <circle cx="81.77" cy="103.14" r=".35" />
            <circle cx="84.77" cy="101.14" r=".35" />
            <circle cx="82.77" cy="101.14" r=".35" />
            <circle cx="80.77" cy="101.14" r=".35" />
            <circle cx="83.77" cy="99.14" r=".35" />
            <circle cx="81.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bT)`}>
            <circle cx="83.77" cy="107.14" r=".35" />
            <circle cx="81.77" cy="107.14" r=".35" />
            <circle cx="84.77" cy="105.14" r=".35" />
            <circle cx="82.77" cy="105.14" r=".35" />
            <circle cx="80.77" cy="105.14" r=".35" />
            <circle cx="83.77" cy="103.14" r=".35" />
            <circle cx="81.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bY)`}>
            <circle cx="79.77" cy="35.14" r=".35" />
            <circle cx="77.77" cy="35.14" r=".35" />
            <circle cx="80.77" cy="33.14" r=".35" />
            <circle cx="78.77" cy="33.14" r=".35" />
            <circle cx="76.77" cy="33.14" r=".35" />
            <circle cx="79.77" cy="31.14" r=".35" />
            <circle cx="77.77" cy="31.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bZ)`}>
            <circle cx="79.77" cy="39.14" r=".35" />
            <circle cx="77.77" cy="39.14" r=".35" />
            <circle cx="80.77" cy="37.14" r=".35" />
            <circle cx="78.77" cy="37.14" r=".35" />
            <circle cx="76.77" cy="37.14" r=".35" />
            <circle cx="79.77" cy="35.14" r=".35" />
            <circle cx="77.77" cy="35.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b0)`}>
            <circle cx="79.77" cy="43.14" r=".35" />
            <circle cx="77.77" cy="43.14" r=".35" />
            <circle cx="80.77" cy="41.14" r=".35" />
            <circle cx="78.77" cy="41.14" r=".35" />
            <circle cx="76.77" cy="41.14" r=".35" />
            <circle cx="79.77" cy="39.14" r=".35" />
            <circle cx="77.77" cy="39.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b1)`}>
            <circle cx="79.77" cy="47.14" r=".35" />
            <circle cx="77.77" cy="47.14" r=".35" />
            <circle cx="80.77" cy="45.14" r=".35" />
            <circle cx="78.77" cy="45.14" r=".35" />
            <circle cx="76.77" cy="45.14" r=".35" />
            <circle cx="79.77" cy="43.14" r=".35" />
            <circle cx="77.77" cy="43.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b2)`}>
            <circle cx="79.77" cy="51.14" r=".35" />
            <circle cx="77.77" cy="51.14" r=".35" />
            <circle cx="80.77" cy="49.14" r=".35" />
            <circle cx="78.77" cy="49.14" r=".35" />
            <circle cx="76.77" cy="49.14" r=".35" />
            <circle cx="79.77" cy="47.14" r=".35" />
            <circle cx="77.77" cy="47.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b3)`}>
            <circle cx="79.77" cy="55.14" r=".35" />
            <circle cx="77.77" cy="55.14" r=".35" />
            <circle cx="80.77" cy="53.14" r=".35" />
            <circle cx="78.77" cy="53.14" r=".35" />
            <circle cx="76.77" cy="53.14" r=".35" />
            <circle cx="79.77" cy="51.14" r=".35" />
            <circle cx="77.77" cy="51.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b4)`}>
            <circle cx="79.77" cy="59.14" r=".35" />
            <circle cx="77.77" cy="59.14" r=".35" />
            <circle cx="80.77" cy="57.14" r=".35" />
            <circle cx="78.77" cy="57.14" r=".35" />
            <circle cx="76.77" cy="57.14" r=".35" />
            <circle cx="79.77" cy="55.14" r=".35" />
            <circle cx="77.77" cy="55.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b5)`}>
            <circle cx="79.77" cy="63.14" r=".35" />
            <circle cx="77.77" cy="63.14" r=".35" />
            <circle cx="80.77" cy="61.14" r=".35" />
            <circle cx="78.77" cy="61.14" r=".35" />
            <circle cx="76.77" cy="61.14" r=".35" />
            <circle cx="79.77" cy="59.14" r=".35" />
            <circle cx="77.77" cy="59.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b6)`}>
            <circle cx="79.77" cy="67.14" r=".35" />
            <circle cx="77.77" cy="67.14" r=".35" />
            <circle cx="80.77" cy="65.14" r=".35" />
            <circle cx="78.77" cy="65.14" r=".35" />
            <circle cx="76.77" cy="65.14" r=".35" />
            <circle cx="79.77" cy="63.14" r=".35" />
            <circle cx="77.77" cy="63.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b7)`}>
            <circle cx="79.77" cy="71.14" r=".35" />
            <circle cx="77.77" cy="71.14" r=".35" />
            <circle cx="80.77" cy="69.14" r=".35" />
            <circle cx="78.77" cy="69.14" r=".35" />
            <circle cx="76.77" cy="69.14" r=".35" />
            <circle cx="79.77" cy="67.14" r=".35" />
            <circle cx="77.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b8)`}>
            <circle cx="79.77" cy="75.14" r=".35" />
            <circle cx="77.77" cy="75.14" r=".35" />
            <circle cx="80.77" cy="73.14" r=".35" />
            <circle cx="78.77" cy="73.14" r=".35" />
            <circle cx="76.77" cy="73.14" r=".35" />
            <circle cx="79.77" cy="71.14" r=".35" />
            <circle cx="77.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b9)`}>
            <circle cx="79.77" cy="79.14" r=".35" />
            <circle cx="77.77" cy="79.14" r=".35" />
            <circle cx="80.77" cy="77.14" r=".35" />
            <circle cx="78.77" cy="77.14" r=".35" />
            <circle cx="76.77" cy="77.14" r=".35" />
            <circle cx="79.77" cy="75.14" r=".35" />
            <circle cx="77.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ca)`}>
            <circle cx="79.77" cy="83.14" r=".35" />
            <circle cx="77.77" cy="83.14" r=".35" />
            <circle cx="80.77" cy="81.14" r=".35" />
            <circle cx="78.77" cy="81.14" r=".35" />
            <circle cx="76.77" cy="81.14" r=".35" />
            <circle cx="79.77" cy="79.14" r=".35" />
            <circle cx="77.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cb)`}>
            <circle cx="79.77" cy="87.14" r=".35" />
            <circle cx="77.77" cy="87.14" r=".35" />
            <circle cx="80.77" cy="85.14" r=".35" />
            <circle cx="78.77" cy="85.14" r=".35" />
            <circle cx="76.77" cy="85.14" r=".35" />
            <circle cx="79.77" cy="83.14" r=".35" />
            <circle cx="77.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cc)`}>
            <circle cx="79.77" cy="91.14" r=".35" />
            <circle cx="77.77" cy="91.14" r=".35" />
            <circle cx="80.77" cy="89.14" r=".35" />
            <circle cx="78.77" cy="89.14" r=".35" />
            <circle cx="76.77" cy="89.14" r=".35" />
            <circle cx="79.77" cy="87.14" r=".35" />
            <circle cx="77.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cd)`}>
            <circle cx="79.77" cy="95.14" r=".35" />
            <circle cx="77.77" cy="95.14" r=".35" />
            <circle cx="80.77" cy="93.14" r=".35" />
            <circle cx="78.77" cy="93.14" r=".35" />
            <circle cx="76.77" cy="93.14" r=".35" />
            <circle cx="79.77" cy="91.14" r=".35" />
            <circle cx="77.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ce)`}>
            <circle cx="79.77" cy="99.14" r=".35" />
            <circle cx="77.77" cy="99.14" r=".35" />
            <circle cx="80.77" cy="97.14" r=".35" />
            <circle cx="78.77" cy="97.14" r=".35" />
            <circle cx="76.77" cy="97.14" r=".35" />
            <circle cx="79.77" cy="95.14" r=".35" />
            <circle cx="77.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cf)`}>
            <circle cx="79.77" cy="103.14" r=".35" />
            <circle cx="77.77" cy="103.14" r=".35" />
            <circle cx="80.77" cy="101.14" r=".35" />
            <circle cx="78.77" cy="101.14" r=".35" />
            <circle cx="76.77" cy="101.14" r=".35" />
            <circle cx="79.77" cy="99.14" r=".35" />
            <circle cx="77.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cg)`}>
            <circle cx="79.77" cy="107.14" r=".35" />
            <circle cx="77.77" cy="107.14" r=".35" />
            <circle cx="80.77" cy="105.14" r=".35" />
            <circle cx="78.77" cy="105.14" r=".35" />
            <circle cx="76.77" cy="105.14" r=".35" />
            <circle cx="79.77" cy="103.14" r=".35" />
            <circle cx="77.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cl)`}>
            <circle cx="75.77" cy="35.14" r=".35" />
            <circle cx="73.77" cy="35.14" r=".35" />
            <circle cx="76.77" cy="33.14" r=".35" />
            <circle cx="74.77" cy="33.14" r=".35" />
            <circle cx="72.77" cy="33.14" r=".35" />
            <circle cx="75.77" cy="31.14" r=".35" />
            <circle cx="73.77" cy="31.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cm)`}>
            <circle cx="75.77" cy="39.14" r=".35" />
            <circle cx="73.77" cy="39.14" r=".35" />
            <circle cx="76.77" cy="37.14" r=".35" />
            <circle cx="74.77" cy="37.14" r=".35" />
            <circle cx="72.77" cy="37.14" r=".35" />
            <circle cx="75.77" cy="35.14" r=".35" />
            <circle cx="73.77" cy="35.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cn)`}>
            <circle cx="75.77" cy="43.14" r=".35" />
            <circle cx="73.77" cy="43.14" r=".35" />
            <circle cx="76.77" cy="41.14" r=".35" />
            <circle cx="74.77" cy="41.14" r=".35" />
            <circle cx="72.77" cy="41.14" r=".35" />
            <circle cx="75.77" cy="39.14" r=".35" />
            <circle cx="73.77" cy="39.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-co)`}>
            <circle cx="75.77" cy="47.14" r=".35" />
            <circle cx="73.77" cy="47.14" r=".35" />
            <circle cx="76.77" cy="45.14" r=".35" />
            <circle cx="74.77" cy="45.14" r=".35" />
            <circle cx="72.77" cy="45.14" r=".35" />
            <circle cx="75.77" cy="43.14" r=".35" />
            <circle cx="73.77" cy="43.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cp)`}>
            <circle cx="75.77" cy="51.14" r=".35" />
            <circle cx="73.77" cy="51.14" r=".35" />
            <circle cx="76.77" cy="49.14" r=".35" />
            <circle cx="74.77" cy="49.14" r=".35" />
            <circle cx="72.77" cy="49.14" r=".35" />
            <circle cx="75.77" cy="47.14" r=".35" />
            <circle cx="73.77" cy="47.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cq)`}>
            <circle cx="75.77" cy="55.14" r=".35" />
            <circle cx="73.77" cy="55.14" r=".35" />
            <circle cx="76.77" cy="53.14" r=".35" />
            <circle cx="74.77" cy="53.14" r=".35" />
            <circle cx="72.77" cy="53.14" r=".35" />
            <circle cx="75.77" cy="51.14" r=".35" />
            <circle cx="73.77" cy="51.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cr)`}>
            <circle cx="75.77" cy="59.14" r=".35" />
            <circle cx="73.77" cy="59.14" r=".35" />
            <circle cx="76.77" cy="57.14" r=".35" />
            <circle cx="74.77" cy="57.14" r=".35" />
            <circle cx="72.77" cy="57.14" r=".35" />
            <circle cx="75.77" cy="55.14" r=".35" />
            <circle cx="73.77" cy="55.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cs)`}>
            <circle cx="75.77" cy="63.14" r=".35" />
            <circle cx="73.77" cy="63.14" r=".35" />
            <circle cx="76.77" cy="61.14" r=".35" />
            <circle cx="74.77" cy="61.14" r=".35" />
            <circle cx="72.77" cy="61.14" r=".35" />
            <circle cx="75.77" cy="59.14" r=".35" />
            <circle cx="73.77" cy="59.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ct)`}>
            <circle cx="75.77" cy="67.14" r=".35" />
            <circle cx="73.77" cy="67.14" r=".35" />
            <circle cx="76.77" cy="65.14" r=".35" />
            <circle cx="74.77" cy="65.14" r=".35" />
            <circle cx="72.77" cy="65.14" r=".35" />
            <circle cx="75.77" cy="63.14" r=".35" />
            <circle cx="73.77" cy="63.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cu)`}>
            <circle cx="75.77" cy="71.14" r=".35" />
            <circle cx="73.77" cy="71.14" r=".35" />
            <circle cx="76.77" cy="69.14" r=".35" />
            <circle cx="74.77" cy="69.14" r=".35" />
            <circle cx="72.77" cy="69.14" r=".35" />
            <circle cx="75.77" cy="67.14" r=".35" />
            <circle cx="73.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cv)`}>
            <circle cx="75.77" cy="75.14" r=".35" />
            <circle cx="73.77" cy="75.14" r=".35" />
            <circle cx="76.77" cy="73.14" r=".35" />
            <circle cx="74.77" cy="73.14" r=".35" />
            <circle cx="72.77" cy="73.14" r=".35" />
            <circle cx="75.77" cy="71.14" r=".35" />
            <circle cx="73.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cw)`}>
            <circle cx="75.77" cy="79.14" r=".35" />
            <circle cx="73.77" cy="79.14" r=".35" />
            <circle cx="76.77" cy="77.14" r=".35" />
            <circle cx="74.77" cy="77.14" r=".35" />
            <circle cx="72.77" cy="77.14" r=".35" />
            <circle cx="75.77" cy="75.14" r=".35" />
            <circle cx="73.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cx)`}>
            <circle cx="75.77" cy="83.14" r=".35" />
            <circle cx="73.77" cy="83.14" r=".35" />
            <circle cx="76.77" cy="81.14" r=".35" />
            <circle cx="74.77" cy="81.14" r=".35" />
            <circle cx="72.77" cy="81.14" r=".35" />
            <circle cx="75.77" cy="79.14" r=".35" />
            <circle cx="73.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cy)`}>
            <circle cx="75.77" cy="87.14" r=".35" />
            <circle cx="73.77" cy="87.14" r=".35" />
            <circle cx="76.77" cy="85.14" r=".35" />
            <circle cx="74.77" cy="85.14" r=".35" />
            <circle cx="72.77" cy="85.14" r=".35" />
            <circle cx="75.77" cy="83.14" r=".35" />
            <circle cx="73.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cz)`}>
            <circle cx="75.77" cy="91.14" r=".35" />
            <circle cx="73.77" cy="91.14" r=".35" />
            <circle cx="76.77" cy="89.14" r=".35" />
            <circle cx="74.77" cy="89.14" r=".35" />
            <circle cx="72.77" cy="89.14" r=".35" />
            <circle cx="75.77" cy="87.14" r=".35" />
            <circle cx="73.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cA)`}>
            <circle cx="75.77" cy="95.14" r=".35" />
            <circle cx="73.77" cy="95.14" r=".35" />
            <circle cx="76.77" cy="93.14" r=".35" />
            <circle cx="74.77" cy="93.14" r=".35" />
            <circle cx="72.77" cy="93.14" r=".35" />
            <circle cx="75.77" cy="91.14" r=".35" />
            <circle cx="73.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cB)`}>
            <circle cx="75.77" cy="99.14" r=".35" />
            <circle cx="73.77" cy="99.14" r=".35" />
            <circle cx="76.77" cy="97.14" r=".35" />
            <circle cx="74.77" cy="97.14" r=".35" />
            <circle cx="72.77" cy="97.14" r=".35" />
            <circle cx="75.77" cy="95.14" r=".35" />
            <circle cx="73.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cC)`}>
            <circle cx="75.77" cy="103.14" r=".35" />
            <circle cx="73.77" cy="103.14" r=".35" />
            <circle cx="76.77" cy="101.14" r=".35" />
            <circle cx="74.77" cy="101.14" r=".35" />
            <circle cx="72.77" cy="101.14" r=".35" />
            <circle cx="75.77" cy="99.14" r=".35" />
            <circle cx="73.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cD)`}>
            <circle cx="75.77" cy="107.14" r=".35" />
            <circle cx="73.77" cy="107.14" r=".35" />
            <circle cx="76.77" cy="105.14" r=".35" />
            <circle cx="74.77" cy="105.14" r=".35" />
            <circle cx="72.77" cy="105.14" r=".35" />
            <circle cx="75.77" cy="103.14" r=".35" />
            <circle cx="73.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cI)`}>
            <circle cx="71.77" cy="35.14" r=".35" />
            <circle cx="69.77" cy="35.14" r=".35" />
            <circle cx="72.77" cy="33.14" r=".35" />
            <circle cx="70.77" cy="33.14" r=".35" />
            <circle cx="68.77" cy="33.14" r=".35" />
            <circle cx="71.77" cy="31.14" r=".35" />
            <circle cx="69.77" cy="31.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cJ)`}>
            <circle cx="71.77" cy="39.14" r=".35" />
            <circle cx="69.77" cy="39.14" r=".35" />
            <circle cx="72.77" cy="37.14" r=".35" />
            <circle cx="70.77" cy="37.14" r=".35" />
            <circle cx="68.77" cy="37.14" r=".35" />
            <circle cx="71.77" cy="35.14" r=".35" />
            <circle cx="69.77" cy="35.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cK)`}>
            <circle cx="71.77" cy="43.14" r=".35" />
            <circle cx="69.77" cy="43.14" r=".35" />
            <circle cx="72.77" cy="41.14" r=".35" />
            <circle cx="70.77" cy="41.14" r=".35" />
            <circle cx="68.77" cy="41.14" r=".35" />
            <circle cx="71.77" cy="39.14" r=".35" />
            <circle cx="69.77" cy="39.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cL)`}>
            <circle cx="71.77" cy="47.14" r=".35" />
            <circle cx="69.77" cy="47.14" r=".35" />
            <circle cx="72.77" cy="45.14" r=".35" />
            <circle cx="70.77" cy="45.14" r=".35" />
            <circle cx="68.77" cy="45.14" r=".35" />
            <circle cx="71.77" cy="43.14" r=".35" />
            <circle cx="69.77" cy="43.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cM)`}>
            <circle cx="71.77" cy="51.14" r=".35" />
            <circle cx="69.77" cy="51.14" r=".35" />
            <circle cx="72.77" cy="49.14" r=".35" />
            <circle cx="70.77" cy="49.14" r=".35" />
            <circle cx="68.77" cy="49.14" r=".35" />
            <circle cx="71.77" cy="47.14" r=".35" />
            <circle cx="69.77" cy="47.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cN)`}>
            <circle cx="71.77" cy="55.14" r=".35" />
            <circle cx="69.77" cy="55.14" r=".35" />
            <circle cx="72.77" cy="53.14" r=".35" />
            <circle cx="70.77" cy="53.14" r=".35" />
            <circle cx="68.77" cy="53.14" r=".35" />
            <circle cx="71.77" cy="51.14" r=".35" />
            <circle cx="69.77" cy="51.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cO)`}>
            <circle cx="71.77" cy="59.14" r=".35" />
            <circle cx="69.77" cy="59.14" r=".35" />
            <circle cx="72.77" cy="57.14" r=".35" />
            <circle cx="70.77" cy="57.14" r=".35" />
            <circle cx="68.77" cy="57.14" r=".35" />
            <circle cx="71.77" cy="55.14" r=".35" />
            <circle cx="69.77" cy="55.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cP)`}>
            <circle cx="71.77" cy="63.14" r=".35" />
            <circle cx="69.77" cy="63.14" r=".35" />
            <circle cx="72.77" cy="61.14" r=".35" />
            <circle cx="70.77" cy="61.14" r=".35" />
            <circle cx="68.77" cy="61.14" r=".35" />
            <circle cx="71.77" cy="59.14" r=".35" />
            <circle cx="69.77" cy="59.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cQ)`}>
            <circle cx="71.77" cy="67.14" r=".35" />
            <circle cx="69.77" cy="67.14" r=".35" />
            <circle cx="72.77" cy="65.14" r=".35" />
            <circle cx="70.77" cy="65.14" r=".35" />
            <circle cx="68.77" cy="65.14" r=".35" />
            <circle cx="71.77" cy="63.14" r=".35" />
            <circle cx="69.77" cy="63.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cR)`}>
            <circle cx="71.77" cy="71.14" r=".35" />
            <circle cx="69.77" cy="71.14" r=".35" />
            <circle cx="72.77" cy="69.14" r=".35" />
            <circle cx="70.77" cy="69.14" r=".35" />
            <circle cx="68.77" cy="69.14" r=".35" />
            <circle cx="71.77" cy="67.14" r=".35" />
            <circle cx="69.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cS)`}>
            <circle cx="71.77" cy="75.14" r=".35" />
            <circle cx="69.77" cy="75.14" r=".35" />
            <circle cx="72.77" cy="73.14" r=".35" />
            <circle cx="70.77" cy="73.14" r=".35" />
            <circle cx="68.77" cy="73.14" r=".35" />
            <circle cx="71.77" cy="71.14" r=".35" />
            <circle cx="69.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cT)`}>
            <circle cx="71.77" cy="79.14" r=".35" />
            <circle cx="69.77" cy="79.14" r=".35" />
            <circle cx="72.77" cy="77.14" r=".35" />
            <circle cx="70.77" cy="77.14" r=".35" />
            <circle cx="68.77" cy="77.14" r=".35" />
            <circle cx="71.77" cy="75.14" r=".35" />
            <circle cx="69.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cU)`}>
            <circle cx="71.77" cy="83.14" r=".35" />
            <circle cx="69.77" cy="83.14" r=".35" />
            <circle cx="72.77" cy="81.14" r=".35" />
            <circle cx="70.77" cy="81.14" r=".35" />
            <circle cx="68.77" cy="81.14" r=".35" />
            <circle cx="71.77" cy="79.14" r=".35" />
            <circle cx="69.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cV)`}>
            <circle cx="71.77" cy="87.14" r=".35" />
            <circle cx="69.77" cy="87.14" r=".35" />
            <circle cx="72.77" cy="85.14" r=".35" />
            <circle cx="70.77" cy="85.14" r=".35" />
            <circle cx="68.77" cy="85.14" r=".35" />
            <circle cx="71.77" cy="83.14" r=".35" />
            <circle cx="69.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cW)`}>
            <circle cx="71.77" cy="91.14" r=".35" />
            <circle cx="69.77" cy="91.14" r=".35" />
            <circle cx="72.77" cy="89.14" r=".35" />
            <circle cx="70.77" cy="89.14" r=".35" />
            <circle cx="68.77" cy="89.14" r=".35" />
            <circle cx="71.77" cy="87.14" r=".35" />
            <circle cx="69.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cX)`}>
            <circle cx="71.77" cy="95.14" r=".35" />
            <circle cx="69.77" cy="95.14" r=".35" />
            <circle cx="72.77" cy="93.14" r=".35" />
            <circle cx="70.77" cy="93.14" r=".35" />
            <circle cx="68.77" cy="93.14" r=".35" />
            <circle cx="71.77" cy="91.14" r=".35" />
            <circle cx="69.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cY)`}>
            <circle cx="71.77" cy="99.14" r=".35" />
            <circle cx="69.77" cy="99.14" r=".35" />
            <circle cx="72.77" cy="97.14" r=".35" />
            <circle cx="70.77" cy="97.14" r=".35" />
            <circle cx="68.77" cy="97.14" r=".35" />
            <circle cx="71.77" cy="95.14" r=".35" />
            <circle cx="69.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cZ)`}>
            <circle cx="71.77" cy="103.14" r=".35" />
            <circle cx="69.77" cy="103.14" r=".35" />
            <circle cx="72.77" cy="101.14" r=".35" />
            <circle cx="70.77" cy="101.14" r=".35" />
            <circle cx="68.77" cy="101.14" r=".35" />
            <circle cx="71.77" cy="99.14" r=".35" />
            <circle cx="69.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-c0)`}>
            <circle cx="71.77" cy="107.14" r=".35" />
            <circle cx="69.77" cy="107.14" r=".35" />
            <circle cx="72.77" cy="105.14" r=".35" />
            <circle cx="70.77" cy="105.14" r=".35" />
            <circle cx="68.77" cy="105.14" r=".35" />
            <circle cx="71.77" cy="103.14" r=".35" />
            <circle cx="69.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-c5)`}>
            <circle cx="67.77" cy="35.14" r=".35" />
            <circle cx="65.77" cy="35.14" r=".35" />
            <circle cx="68.77" cy="33.14" r=".35" />
            <circle cx="66.77" cy="33.14" r=".35" />
            <circle cx="64.77" cy="33.14" r=".35" />
            <circle cx="67.77" cy="31.14" r=".35" />
            <circle cx="65.77" cy="31.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-c6)`}>
            <circle cx="67.77" cy="39.14" r=".35" />
            <circle cx="65.77" cy="39.14" r=".35" />
            <circle cx="68.77" cy="37.14" r=".35" />
            <circle cx="66.77" cy="37.14" r=".35" />
            <circle cx="64.77" cy="37.14" r=".35" />
            <circle cx="67.77" cy="35.14" r=".35" />
            <circle cx="65.77" cy="35.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-c7)`}>
            <circle cx="67.77" cy="43.14" r=".35" />
            <circle cx="65.77" cy="43.14" r=".35" />
            <circle cx="68.77" cy="41.14" r=".35" />
            <circle cx="66.77" cy="41.14" r=".35" />
            <circle cx="64.77" cy="41.14" r=".35" />
            <circle cx="67.77" cy="39.14" r=".35" />
            <circle cx="65.77" cy="39.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-c8)`}>
            <circle cx="67.77" cy="47.14" r=".35" />
            <circle cx="65.77" cy="47.14" r=".35" />
            <circle cx="68.77" cy="45.14" r=".35" />
            <circle cx="66.77" cy="45.14" r=".35" />
            <circle cx="64.77" cy="45.14" r=".35" />
            <circle cx="67.77" cy="43.14" r=".35" />
            <circle cx="65.77" cy="43.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-c9)`}>
            <circle cx="67.77" cy="51.14" r=".35" />
            <circle cx="65.77" cy="51.14" r=".35" />
            <circle cx="68.77" cy="49.14" r=".35" />
            <circle cx="66.77" cy="49.14" r=".35" />
            <circle cx="64.77" cy="49.14" r=".35" />
            <circle cx="67.77" cy="47.14" r=".35" />
            <circle cx="65.77" cy="47.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-da)`}>
            <circle cx="67.77" cy="55.14" r=".35" />
            <circle cx="65.77" cy="55.14" r=".35" />
            <circle cx="68.77" cy="53.14" r=".35" />
            <circle cx="66.77" cy="53.14" r=".35" />
            <circle cx="64.77" cy="53.14" r=".35" />
            <circle cx="67.77" cy="51.14" r=".35" />
            <circle cx="65.77" cy="51.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-db)`}>
            <circle cx="67.77" cy="59.14" r=".35" />
            <circle cx="65.77" cy="59.14" r=".35" />
            <circle cx="68.77" cy="57.14" r=".35" />
            <circle cx="66.77" cy="57.14" r=".35" />
            <circle cx="64.77" cy="57.14" r=".35" />
            <circle cx="67.77" cy="55.14" r=".35" />
            <circle cx="65.77" cy="55.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dc)`}>
            <circle cx="67.77" cy="63.14" r=".35" />
            <circle cx="65.77" cy="63.14" r=".35" />
            <circle cx="68.77" cy="61.14" r=".35" />
            <circle cx="66.77" cy="61.14" r=".35" />
            <circle cx="64.77" cy="61.14" r=".35" />
            <circle cx="67.77" cy="59.14" r=".35" />
            <circle cx="65.77" cy="59.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dd)`}>
            <circle cx="67.77" cy="67.14" r=".35" />
            <circle cx="65.77" cy="67.14" r=".35" />
            <circle cx="68.77" cy="65.14" r=".35" />
            <circle cx="66.77" cy="65.14" r=".35" />
            <circle cx="64.77" cy="65.14" r=".35" />
            <circle cx="67.77" cy="63.14" r=".35" />
            <circle cx="65.77" cy="63.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-de)`}>
            <circle cx="67.77" cy="71.14" r=".35" />
            <circle cx="65.77" cy="71.14" r=".35" />
            <circle cx="68.77" cy="69.14" r=".35" />
            <circle cx="66.77" cy="69.14" r=".35" />
            <circle cx="64.77" cy="69.14" r=".35" />
            <circle cx="67.77" cy="67.14" r=".35" />
            <circle cx="65.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-df)`}>
            <circle cx="67.77" cy="75.14" r=".35" />
            <circle cx="65.77" cy="75.14" r=".35" />
            <circle cx="68.77" cy="73.14" r=".35" />
            <circle cx="66.77" cy="73.14" r=".35" />
            <circle cx="64.77" cy="73.14" r=".35" />
            <circle cx="67.77" cy="71.14" r=".35" />
            <circle cx="65.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dg)`}>
            <circle cx="67.77" cy="79.14" r=".35" />
            <circle cx="65.77" cy="79.14" r=".35" />
            <circle cx="68.77" cy="77.14" r=".35" />
            <circle cx="66.77" cy="77.14" r=".35" />
            <circle cx="64.77" cy="77.14" r=".35" />
            <circle cx="67.77" cy="75.14" r=".35" />
            <circle cx="65.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dh)`}>
            <circle cx="67.77" cy="83.14" r=".35" />
            <circle cx="65.77" cy="83.14" r=".35" />
            <circle cx="68.77" cy="81.14" r=".35" />
            <circle cx="66.77" cy="81.14" r=".35" />
            <circle cx="64.77" cy="81.14" r=".35" />
            <circle cx="67.77" cy="79.14" r=".35" />
            <circle cx="65.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-di)`}>
            <circle cx="67.77" cy="87.14" r=".35" />
            <circle cx="65.77" cy="87.14" r=".35" />
            <circle cx="68.77" cy="85.14" r=".35" />
            <circle cx="66.77" cy="85.14" r=".35" />
            <circle cx="64.77" cy="85.14" r=".35" />
            <circle cx="67.77" cy="83.14" r=".35" />
            <circle cx="65.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dj)`}>
            <circle cx="67.77" cy="91.14" r=".35" />
            <circle cx="65.77" cy="91.14" r=".35" />
            <circle cx="68.77" cy="89.14" r=".35" />
            <circle cx="66.77" cy="89.14" r=".35" />
            <circle cx="64.77" cy="89.14" r=".35" />
            <circle cx="67.77" cy="87.14" r=".35" />
            <circle cx="65.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dk)`}>
            <circle cx="67.77" cy="95.14" r=".35" />
            <circle cx="65.77" cy="95.14" r=".35" />
            <circle cx="68.77" cy="93.14" r=".35" />
            <circle cx="66.77" cy="93.14" r=".35" />
            <circle cx="64.77" cy="93.14" r=".35" />
            <circle cx="67.77" cy="91.14" r=".35" />
            <circle cx="65.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dl)`}>
            <circle cx="67.77" cy="99.14" r=".35" />
            <circle cx="65.77" cy="99.14" r=".35" />
            <circle cx="68.77" cy="97.14" r=".35" />
            <circle cx="66.77" cy="97.14" r=".35" />
            <circle cx="64.77" cy="97.14" r=".35" />
            <circle cx="67.77" cy="95.14" r=".35" />
            <circle cx="65.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dm)`}>
            <circle cx="67.77" cy="103.14" r=".35" />
            <circle cx="65.77" cy="103.14" r=".35" />
            <circle cx="68.77" cy="101.14" r=".35" />
            <circle cx="66.77" cy="101.14" r=".35" />
            <circle cx="64.77" cy="101.14" r=".35" />
            <circle cx="67.77" cy="99.14" r=".35" />
            <circle cx="65.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dn)`}>
            <circle cx="67.77" cy="107.14" r=".35" />
            <circle cx="65.77" cy="107.14" r=".35" />
            <circle cx="68.77" cy="105.14" r=".35" />
            <circle cx="66.77" cy="105.14" r=".35" />
            <circle cx="64.77" cy="105.14" r=".35" />
            <circle cx="67.77" cy="103.14" r=".35" />
            <circle cx="65.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ds)`}>
            <circle cx="63.77" cy="35.14" r=".35" />
            <circle cx="61.77" cy="35.14" r=".35" />
            <circle cx="64.77" cy="33.14" r=".35" />
            <circle cx="62.77" cy="33.14" r=".35" />
            <circle cx="60.77" cy="33.14" r=".35" />
            <circle cx="63.77" cy="31.14" r=".35" />
            <circle cx="61.77" cy="31.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dt)`}>
            <circle cx="63.77" cy="39.14" r=".35" />
            <circle cx="61.77" cy="39.14" r=".35" />
            <circle cx="64.77" cy="37.14" r=".35" />
            <circle cx="62.77" cy="37.14" r=".35" />
            <circle cx="60.77" cy="37.14" r=".35" />
            <circle cx="63.77" cy="35.14" r=".35" />
            <circle cx="61.77" cy="35.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-du)`}>
            <circle cx="63.77" cy="43.14" r=".35" />
            <circle cx="61.77" cy="43.14" r=".35" />
            <circle cx="64.77" cy="41.14" r=".35" />
            <circle cx="62.77" cy="41.14" r=".35" />
            <circle cx="60.77" cy="41.14" r=".35" />
            <circle cx="63.77" cy="39.14" r=".35" />
            <circle cx="61.77" cy="39.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dv)`}>
            <circle cx="63.77" cy="47.14" r=".35" />
            <circle cx="61.77" cy="47.14" r=".35" />
            <circle cx="64.77" cy="45.14" r=".35" />
            <circle cx="62.77" cy="45.14" r=".35" />
            <circle cx="60.77" cy="45.14" r=".35" />
            <circle cx="63.77" cy="43.14" r=".35" />
            <circle cx="61.77" cy="43.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dw)`}>
            <circle cx="63.77" cy="51.14" r=".35" />
            <circle cx="61.77" cy="51.14" r=".35" />
            <circle cx="64.77" cy="49.14" r=".35" />
            <circle cx="62.77" cy="49.14" r=".35" />
            <circle cx="60.77" cy="49.14" r=".35" />
            <circle cx="63.77" cy="47.14" r=".35" />
            <circle cx="61.77" cy="47.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dx)`}>
            <circle cx="63.77" cy="55.14" r=".35" />
            <circle cx="61.77" cy="55.14" r=".35" />
            <circle cx="64.77" cy="53.14" r=".35" />
            <circle cx="62.77" cy="53.14" r=".35" />
            <circle cx="60.77" cy="53.14" r=".35" />
            <circle cx="63.77" cy="51.14" r=".35" />
            <circle cx="61.77" cy="51.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dy)`}>
            <circle cx="63.77" cy="59.14" r=".35" />
            <circle cx="61.77" cy="59.14" r=".35" />
            <circle cx="64.77" cy="57.14" r=".35" />
            <circle cx="62.77" cy="57.14" r=".35" />
            <circle cx="60.77" cy="57.14" r=".35" />
            <circle cx="63.77" cy="55.14" r=".35" />
            <circle cx="61.77" cy="55.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dz)`}>
            <circle cx="63.77" cy="63.14" r=".35" />
            <circle cx="61.77" cy="63.14" r=".35" />
            <circle cx="64.77" cy="61.14" r=".35" />
            <circle cx="62.77" cy="61.14" r=".35" />
            <circle cx="60.77" cy="61.14" r=".35" />
            <circle cx="63.77" cy="59.14" r=".35" />
            <circle cx="61.77" cy="59.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dA)`}>
            <circle cx="63.77" cy="67.14" r=".35" />
            <circle cx="61.77" cy="67.14" r=".35" />
            <circle cx="64.77" cy="65.14" r=".35" />
            <circle cx="62.77" cy="65.14" r=".35" />
            <circle cx="60.77" cy="65.14" r=".35" />
            <circle cx="63.77" cy="63.14" r=".35" />
            <circle cx="61.77" cy="63.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dB)`}>
            <circle cx="63.77" cy="71.14" r=".35" />
            <circle cx="61.77" cy="71.14" r=".35" />
            <circle cx="64.77" cy="69.14" r=".35" />
            <circle cx="62.77" cy="69.14" r=".35" />
            <circle cx="60.77" cy="69.14" r=".35" />
            <circle cx="63.77" cy="67.14" r=".35" />
            <circle cx="61.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dC)`}>
            <circle cx="63.77" cy="75.14" r=".35" />
            <circle cx="61.77" cy="75.14" r=".35" />
            <circle cx="64.77" cy="73.14" r=".35" />
            <circle cx="62.77" cy="73.14" r=".35" />
            <circle cx="60.77" cy="73.14" r=".35" />
            <circle cx="63.77" cy="71.14" r=".35" />
            <circle cx="61.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dD)`}>
            <circle cx="63.77" cy="79.14" r=".35" />
            <circle cx="61.77" cy="79.14" r=".35" />
            <circle cx="64.77" cy="77.14" r=".35" />
            <circle cx="62.77" cy="77.14" r=".35" />
            <circle cx="60.77" cy="77.14" r=".35" />
            <circle cx="63.77" cy="75.14" r=".35" />
            <circle cx="61.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dE)`}>
            <circle cx="63.77" cy="83.14" r=".35" />
            <circle cx="61.77" cy="83.14" r=".35" />
            <circle cx="64.77" cy="81.14" r=".35" />
            <circle cx="62.77" cy="81.14" r=".35" />
            <circle cx="60.77" cy="81.14" r=".35" />
            <circle cx="63.77" cy="79.14" r=".35" />
            <circle cx="61.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dF)`}>
            <circle cx="63.77" cy="87.14" r=".35" />
            <circle cx="61.77" cy="87.14" r=".35" />
            <circle cx="64.77" cy="85.14" r=".35" />
            <circle cx="62.77" cy="85.14" r=".35" />
            <circle cx="60.77" cy="85.14" r=".35" />
            <circle cx="63.77" cy="83.14" r=".35" />
            <circle cx="61.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dG)`}>
            <circle cx="63.77" cy="91.14" r=".35" />
            <circle cx="61.77" cy="91.14" r=".35" />
            <circle cx="64.77" cy="89.14" r=".35" />
            <circle cx="62.77" cy="89.14" r=".35" />
            <circle cx="60.77" cy="89.14" r=".35" />
            <circle cx="63.77" cy="87.14" r=".35" />
            <circle cx="61.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dH)`}>
            <circle cx="63.77" cy="95.14" r=".35" />
            <circle cx="61.77" cy="95.14" r=".35" />
            <circle cx="64.77" cy="93.14" r=".35" />
            <circle cx="62.77" cy="93.14" r=".35" />
            <circle cx="60.77" cy="93.14" r=".35" />
            <circle cx="63.77" cy="91.14" r=".35" />
            <circle cx="61.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dI)`}>
            <circle cx="63.77" cy="99.14" r=".35" />
            <circle cx="61.77" cy="99.14" r=".35" />
            <circle cx="64.77" cy="97.14" r=".35" />
            <circle cx="62.77" cy="97.14" r=".35" />
            <circle cx="60.77" cy="97.14" r=".35" />
            <circle cx="63.77" cy="95.14" r=".35" />
            <circle cx="61.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dJ)`}>
            <circle cx="63.77" cy="103.14" r=".35" />
            <circle cx="61.77" cy="103.14" r=".35" />
            <circle cx="64.77" cy="101.14" r=".35" />
            <circle cx="62.77" cy="101.14" r=".35" />
            <circle cx="60.77" cy="101.14" r=".35" />
            <circle cx="63.77" cy="99.14" r=".35" />
            <circle cx="61.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dK)`}>
            <circle cx="63.77" cy="107.14" r=".35" />
            <circle cx="61.77" cy="107.14" r=".35" />
            <circle cx="64.77" cy="105.14" r=".35" />
            <circle cx="62.77" cy="105.14" r=".35" />
            <circle cx="60.77" cy="105.14" r=".35" />
            <circle cx="63.77" cy="103.14" r=".35" />
            <circle cx="61.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dP)`}>
            <circle cx="59.77" cy="35.14" r=".35" />
            <circle cx="57.77" cy="35.14" r=".35" />
            <circle cx="60.77" cy="33.14" r=".35" />
            <circle cx="58.77" cy="33.14" r=".35" />
            <circle cx="56.77" cy="33.14" r=".35" />
            <circle cx="59.77" cy="31.14" r=".35" />
            <circle cx="57.77" cy="31.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dQ)`}>
            <circle cx="59.77" cy="39.14" r=".35" />
            <circle cx="57.77" cy="39.14" r=".35" />
            <circle cx="60.77" cy="37.14" r=".35" />
            <circle cx="58.77" cy="37.14" r=".35" />
            <circle cx="56.77" cy="37.14" r=".35" />
            <circle cx="59.77" cy="35.14" r=".35" />
            <circle cx="57.77" cy="35.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dR)`}>
            <circle cx="59.77" cy="43.14" r=".35" />
            <circle cx="57.77" cy="43.14" r=".35" />
            <circle cx="60.77" cy="41.14" r=".35" />
            <circle cx="58.77" cy="41.14" r=".35" />
            <circle cx="56.77" cy="41.14" r=".35" />
            <circle cx="59.77" cy="39.14" r=".35" />
            <circle cx="57.77" cy="39.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dS)`}>
            <circle cx="59.77" cy="47.14" r=".35" />
            <circle cx="57.77" cy="47.14" r=".35" />
            <circle cx="60.77" cy="45.14" r=".35" />
            <circle cx="58.77" cy="45.14" r=".35" />
            <circle cx="56.77" cy="45.14" r=".35" />
            <circle cx="59.77" cy="43.14" r=".35" />
            <circle cx="57.77" cy="43.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dT)`}>
            <circle cx="59.77" cy="51.14" r=".35" />
            <circle cx="57.77" cy="51.14" r=".35" />
            <circle cx="60.77" cy="49.14" r=".35" />
            <circle cx="58.77" cy="49.14" r=".35" />
            <circle cx="56.77" cy="49.14" r=".35" />
            <circle cx="59.77" cy="47.14" r=".35" />
            <circle cx="57.77" cy="47.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dU)`}>
            <circle cx="59.77" cy="55.14" r=".35" />
            <circle cx="57.77" cy="55.14" r=".35" />
            <circle cx="60.77" cy="53.14" r=".35" />
            <circle cx="58.77" cy="53.14" r=".35" />
            <circle cx="56.77" cy="53.14" r=".35" />
            <circle cx="59.77" cy="51.14" r=".35" />
            <circle cx="57.77" cy="51.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dV)`}>
            <circle cx="59.77" cy="59.14" r=".35" />
            <circle cx="57.77" cy="59.14" r=".35" />
            <circle cx="60.77" cy="57.14" r=".35" />
            <circle cx="58.77" cy="57.14" r=".35" />
            <circle cx="56.77" cy="57.14" r=".35" />
            <circle cx="59.77" cy="55.14" r=".35" />
            <circle cx="57.77" cy="55.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dW)`}>
            <circle cx="59.77" cy="63.14" r=".35" />
            <circle cx="57.77" cy="63.14" r=".35" />
            <circle cx="60.77" cy="61.14" r=".35" />
            <circle cx="58.77" cy="61.14" r=".35" />
            <circle cx="56.77" cy="61.14" r=".35" />
            <circle cx="59.77" cy="59.14" r=".35" />
            <circle cx="57.77" cy="59.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dX)`}>
            <circle cx="59.77" cy="67.14" r=".35" />
            <circle cx="57.77" cy="67.14" r=".35" />
            <circle cx="60.77" cy="65.14" r=".35" />
            <circle cx="58.77" cy="65.14" r=".35" />
            <circle cx="56.77" cy="65.14" r=".35" />
            <circle cx="59.77" cy="63.14" r=".35" />
            <circle cx="57.77" cy="63.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dY)`}>
            <circle cx="59.77" cy="71.14" r=".35" />
            <circle cx="57.77" cy="71.14" r=".35" />
            <circle cx="60.77" cy="69.14" r=".35" />
            <circle cx="58.77" cy="69.14" r=".35" />
            <circle cx="56.77" cy="69.14" r=".35" />
            <circle cx="59.77" cy="67.14" r=".35" />
            <circle cx="57.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dZ)`}>
            <circle cx="59.77" cy="75.14" r=".35" />
            <circle cx="57.77" cy="75.14" r=".35" />
            <circle cx="60.77" cy="73.14" r=".35" />
            <circle cx="58.77" cy="73.14" r=".35" />
            <circle cx="56.77" cy="73.14" r=".35" />
            <circle cx="59.77" cy="71.14" r=".35" />
            <circle cx="57.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-d0)`}>
            <circle cx="59.77" cy="79.14" r=".35" />
            <circle cx="57.77" cy="79.14" r=".35" />
            <circle cx="60.77" cy="77.14" r=".35" />
            <circle cx="58.77" cy="77.14" r=".35" />
            <circle cx="56.77" cy="77.14" r=".35" />
            <circle cx="59.77" cy="75.14" r=".35" />
            <circle cx="57.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-d1)`}>
            <circle cx="59.77" cy="83.14" r=".35" />
            <circle cx="57.77" cy="83.14" r=".35" />
            <circle cx="60.77" cy="81.14" r=".35" />
            <circle cx="58.77" cy="81.14" r=".35" />
            <circle cx="56.77" cy="81.14" r=".35" />
            <circle cx="59.77" cy="79.14" r=".35" />
            <circle cx="57.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-d2)`}>
            <circle cx="59.77" cy="87.14" r=".35" />
            <circle cx="57.77" cy="87.14" r=".35" />
            <circle cx="60.77" cy="85.14" r=".35" />
            <circle cx="58.77" cy="85.14" r=".35" />
            <circle cx="56.77" cy="85.14" r=".35" />
            <circle cx="59.77" cy="83.14" r=".35" />
            <circle cx="57.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-d3)`}>
            <circle cx="59.77" cy="91.14" r=".35" />
            <circle cx="57.77" cy="91.14" r=".35" />
            <circle cx="60.77" cy="89.14" r=".35" />
            <circle cx="58.77" cy="89.14" r=".35" />
            <circle cx="56.77" cy="89.14" r=".35" />
            <circle cx="59.77" cy="87.14" r=".35" />
            <circle cx="57.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-d4)`}>
            <circle cx="59.77" cy="95.14" r=".35" />
            <circle cx="57.77" cy="95.14" r=".35" />
            <circle cx="60.77" cy="93.14" r=".35" />
            <circle cx="58.77" cy="93.14" r=".35" />
            <circle cx="56.77" cy="93.14" r=".35" />
            <circle cx="59.77" cy="91.14" r=".35" />
            <circle cx="57.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-d5)`}>
            <circle cx="59.77" cy="99.14" r=".35" />
            <circle cx="57.77" cy="99.14" r=".35" />
            <circle cx="60.77" cy="97.14" r=".35" />
            <circle cx="58.77" cy="97.14" r=".35" />
            <circle cx="56.77" cy="97.14" r=".35" />
            <circle cx="59.77" cy="95.14" r=".35" />
            <circle cx="57.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-d6)`}>
            <circle cx="59.77" cy="103.14" r=".35" />
            <circle cx="57.77" cy="103.14" r=".35" />
            <circle cx="60.77" cy="101.14" r=".35" />
            <circle cx="58.77" cy="101.14" r=".35" />
            <circle cx="56.77" cy="101.14" r=".35" />
            <circle cx="59.77" cy="99.14" r=".35" />
            <circle cx="57.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-d7)`}>
            <circle cx="59.77" cy="107.14" r=".35" />
            <circle cx="57.77" cy="107.14" r=".35" />
            <circle cx="60.77" cy="105.14" r=".35" />
            <circle cx="58.77" cy="105.14" r=".35" />
            <circle cx="56.77" cy="105.14" r=".35" />
            <circle cx="59.77" cy="103.14" r=".35" />
            <circle cx="57.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ec)`}>
            <circle cx="55.77" cy="35.14" r=".35" />
            <circle cx="53.77" cy="35.14" r=".35" />
            <circle cx="56.77" cy="33.14" r=".35" />
            <circle cx="54.77" cy="33.14" r=".35" />
            <circle cx="52.77" cy="33.14" r=".35" />
            <circle cx="55.77" cy="31.14" r=".35" />
            <circle cx="53.77" cy="31.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ed)`}>
            <circle cx="55.77" cy="39.14" r=".35" />
            <circle cx="53.77" cy="39.14" r=".35" />
            <circle cx="56.77" cy="37.14" r=".35" />
            <circle cx="54.77" cy="37.14" r=".35" />
            <circle cx="52.77" cy="37.14" r=".35" />
            <circle cx="55.77" cy="35.14" r=".35" />
            <circle cx="53.77" cy="35.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ee)`}>
            <circle cx="55.77" cy="43.14" r=".35" />
            <circle cx="53.77" cy="43.14" r=".35" />
            <circle cx="56.77" cy="41.14" r=".35" />
            <circle cx="54.77" cy="41.14" r=".35" />
            <circle cx="52.77" cy="41.14" r=".35" />
            <circle cx="55.77" cy="39.14" r=".35" />
            <circle cx="53.77" cy="39.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ef)`}>
            <circle cx="55.77" cy="47.14" r=".35" />
            <circle cx="53.77" cy="47.14" r=".35" />
            <circle cx="56.77" cy="45.14" r=".35" />
            <circle cx="54.77" cy="45.14" r=".35" />
            <circle cx="52.77" cy="45.14" r=".35" />
            <circle cx="55.77" cy="43.14" r=".35" />
            <circle cx="53.77" cy="43.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eg)`}>
            <circle cx="55.77" cy="51.14" r=".35" />
            <circle cx="53.77" cy="51.14" r=".35" />
            <circle cx="56.77" cy="49.14" r=".35" />
            <circle cx="54.77" cy="49.14" r=".35" />
            <circle cx="52.77" cy="49.14" r=".35" />
            <circle cx="55.77" cy="47.14" r=".35" />
            <circle cx="53.77" cy="47.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eh)`}>
            <circle cx="55.77" cy="55.14" r=".35" />
            <circle cx="53.77" cy="55.14" r=".35" />
            <circle cx="56.77" cy="53.14" r=".35" />
            <circle cx="54.77" cy="53.14" r=".35" />
            <circle cx="52.77" cy="53.14" r=".35" />
            <circle cx="55.77" cy="51.14" r=".35" />
            <circle cx="53.77" cy="51.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ei)`}>
            <circle cx="55.77" cy="59.14" r=".35" />
            <circle cx="53.77" cy="59.14" r=".35" />
            <circle cx="56.77" cy="57.14" r=".35" />
            <circle cx="54.77" cy="57.14" r=".35" />
            <circle cx="52.77" cy="57.14" r=".35" />
            <circle cx="55.77" cy="55.14" r=".35" />
            <circle cx="53.77" cy="55.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ej)`}>
            <circle cx="55.77" cy="63.14" r=".35" />
            <circle cx="53.77" cy="63.14" r=".35" />
            <circle cx="56.77" cy="61.14" r=".35" />
            <circle cx="54.77" cy="61.14" r=".35" />
            <circle cx="52.77" cy="61.14" r=".35" />
            <circle cx="55.77" cy="59.14" r=".35" />
            <circle cx="53.77" cy="59.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ek)`}>
            <circle cx="55.77" cy="67.14" r=".35" />
            <circle cx="53.77" cy="67.14" r=".35" />
            <circle cx="56.77" cy="65.14" r=".35" />
            <circle cx="54.77" cy="65.14" r=".35" />
            <circle cx="52.77" cy="65.14" r=".35" />
            <circle cx="55.77" cy="63.14" r=".35" />
            <circle cx="53.77" cy="63.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-el)`}>
            <circle cx="55.77" cy="71.14" r=".35" />
            <circle cx="53.77" cy="71.14" r=".35" />
            <circle cx="56.77" cy="69.14" r=".35" />
            <circle cx="54.77" cy="69.14" r=".35" />
            <circle cx="52.77" cy="69.14" r=".35" />
            <circle cx="55.77" cy="67.14" r=".35" />
            <circle cx="53.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-em)`}>
            <circle cx="55.77" cy="75.14" r=".35" />
            <circle cx="53.77" cy="75.14" r=".35" />
            <circle cx="56.77" cy="73.14" r=".35" />
            <circle cx="54.77" cy="73.14" r=".35" />
            <circle cx="52.77" cy="73.14" r=".35" />
            <circle cx="55.77" cy="71.14" r=".35" />
            <circle cx="53.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-en)`}>
            <circle cx="55.77" cy="79.14" r=".35" />
            <circle cx="53.77" cy="79.14" r=".35" />
            <circle cx="56.77" cy="77.14" r=".35" />
            <circle cx="54.77" cy="77.14" r=".35" />
            <circle cx="52.77" cy="77.14" r=".35" />
            <circle cx="55.77" cy="75.14" r=".35" />
            <circle cx="53.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eo)`}>
            <circle cx="55.77" cy="83.14" r=".35" />
            <circle cx="53.77" cy="83.14" r=".35" />
            <circle cx="56.77" cy="81.14" r=".35" />
            <circle cx="54.77" cy="81.14" r=".35" />
            <circle cx="52.77" cy="81.14" r=".35" />
            <circle cx="55.77" cy="79.14" r=".35" />
            <circle cx="53.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ep)`}>
            <circle cx="55.77" cy="87.14" r=".35" />
            <circle cx="53.77" cy="87.14" r=".35" />
            <circle cx="56.77" cy="85.14" r=".35" />
            <circle cx="54.77" cy="85.14" r=".35" />
            <circle cx="52.77" cy="85.14" r=".35" />
            <circle cx="55.77" cy="83.14" r=".35" />
            <circle cx="53.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eq)`}>
            <circle cx="55.77" cy="91.14" r=".35" />
            <circle cx="53.77" cy="91.14" r=".35" />
            <circle cx="56.77" cy="89.14" r=".35" />
            <circle cx="54.77" cy="89.14" r=".35" />
            <circle cx="52.77" cy="89.14" r=".35" />
            <circle cx="55.77" cy="87.14" r=".35" />
            <circle cx="53.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-er)`}>
            <circle cx="55.77" cy="95.14" r=".35" />
            <circle cx="53.77" cy="95.14" r=".35" />
            <circle cx="56.77" cy="93.14" r=".35" />
            <circle cx="54.77" cy="93.14" r=".35" />
            <circle cx="52.77" cy="93.14" r=".35" />
            <circle cx="55.77" cy="91.14" r=".35" />
            <circle cx="53.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-es)`}>
            <circle cx="55.77" cy="99.14" r=".35" />
            <circle cx="53.77" cy="99.14" r=".35" />
            <circle cx="56.77" cy="97.14" r=".35" />
            <circle cx="54.77" cy="97.14" r=".35" />
            <circle cx="52.77" cy="97.14" r=".35" />
            <circle cx="55.77" cy="95.14" r=".35" />
            <circle cx="53.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-et)`}>
            <circle cx="55.77" cy="103.14" r=".35" />
            <circle cx="53.77" cy="103.14" r=".35" />
            <circle cx="56.77" cy="101.14" r=".35" />
            <circle cx="54.77" cy="101.14" r=".35" />
            <circle cx="52.77" cy="101.14" r=".35" />
            <circle cx="55.77" cy="99.14" r=".35" />
            <circle cx="53.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eu)`}>
            <circle cx="55.77" cy="107.14" r=".35" />
            <circle cx="53.77" cy="107.14" r=".35" />
            <circle cx="56.77" cy="105.14" r=".35" />
            <circle cx="54.77" cy="105.14" r=".35" />
            <circle cx="52.77" cy="105.14" r=".35" />
            <circle cx="55.77" cy="103.14" r=".35" />
            <circle cx="53.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ez)`}>
            <circle cx="51.77" cy="35.14" r=".35" />
            <circle cx="49.77" cy="35.14" r=".35" />
            <circle cx="52.77" cy="33.14" r=".35" />
            <circle cx="50.77" cy="33.14" r=".35" />
            <circle cx="48.77" cy="33.14" r=".35" />
            <circle cx="51.77" cy="31.14" r=".35" />
            <circle cx="49.77" cy="31.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eA)`}>
            <circle cx="51.77" cy="39.14" r=".35" />
            <circle cx="49.77" cy="39.14" r=".35" />
            <circle cx="52.77" cy="37.14" r=".35" />
            <circle cx="50.77" cy="37.14" r=".35" />
            <circle cx="48.77" cy="37.14" r=".35" />
            <circle cx="51.77" cy="35.14" r=".35" />
            <circle cx="49.77" cy="35.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eB)`}>
            <circle cx="51.77" cy="43.14" r=".35" />
            <circle cx="49.77" cy="43.14" r=".35" />
            <circle cx="52.77" cy="41.14" r=".35" />
            <circle cx="50.77" cy="41.14" r=".35" />
            <circle cx="48.77" cy="41.14" r=".35" />
            <circle cx="51.77" cy="39.14" r=".35" />
            <circle cx="49.77" cy="39.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eC)`}>
            <circle cx="51.77" cy="47.14" r=".35" />
            <circle cx="49.77" cy="47.14" r=".35" />
            <circle cx="52.77" cy="45.14" r=".35" />
            <circle cx="50.77" cy="45.14" r=".35" />
            <circle cx="48.77" cy="45.14" r=".35" />
            <circle cx="51.77" cy="43.14" r=".35" />
            <circle cx="49.77" cy="43.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eD)`}>
            <circle cx="51.77" cy="51.14" r=".35" />
            <circle cx="49.77" cy="51.14" r=".35" />
            <circle cx="52.77" cy="49.14" r=".35" />
            <circle cx="50.77" cy="49.14" r=".35" />
            <circle cx="48.77" cy="49.14" r=".35" />
            <circle cx="51.77" cy="47.14" r=".35" />
            <circle cx="49.77" cy="47.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eE)`}>
            <circle cx="51.77" cy="55.14" r=".35" />
            <circle cx="49.77" cy="55.14" r=".35" />
            <circle cx="52.77" cy="53.14" r=".35" />
            <circle cx="50.77" cy="53.14" r=".35" />
            <circle cx="48.77" cy="53.14" r=".35" />
            <circle cx="51.77" cy="51.14" r=".35" />
            <circle cx="49.77" cy="51.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eF)`}>
            <circle cx="51.77" cy="59.14" r=".35" />
            <circle cx="49.77" cy="59.14" r=".35" />
            <circle cx="52.77" cy="57.14" r=".35" />
            <circle cx="50.77" cy="57.14" r=".35" />
            <circle cx="48.77" cy="57.14" r=".35" />
            <circle cx="51.77" cy="55.14" r=".35" />
            <circle cx="49.77" cy="55.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eG)`}>
            <circle cx="51.77" cy="63.14" r=".35" />
            <circle cx="49.77" cy="63.14" r=".35" />
            <circle cx="52.77" cy="61.14" r=".35" />
            <circle cx="50.77" cy="61.14" r=".35" />
            <circle cx="48.77" cy="61.14" r=".35" />
            <circle cx="51.77" cy="59.14" r=".35" />
            <circle cx="49.77" cy="59.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eH)`}>
            <circle cx="51.77" cy="67.14" r=".35" />
            <circle cx="49.77" cy="67.14" r=".35" />
            <circle cx="52.77" cy="65.14" r=".35" />
            <circle cx="50.77" cy="65.14" r=".35" />
            <circle cx="48.77" cy="65.14" r=".35" />
            <circle cx="51.77" cy="63.14" r=".35" />
            <circle cx="49.77" cy="63.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eI)`}>
            <circle cx="51.77" cy="71.14" r=".35" />
            <circle cx="49.77" cy="71.14" r=".35" />
            <circle cx="52.77" cy="69.14" r=".35" />
            <circle cx="50.77" cy="69.14" r=".35" />
            <circle cx="48.77" cy="69.14" r=".35" />
            <circle cx="51.77" cy="67.14" r=".35" />
            <circle cx="49.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eJ)`}>
            <circle cx="51.77" cy="75.14" r=".35" />
            <circle cx="49.77" cy="75.14" r=".35" />
            <circle cx="52.77" cy="73.14" r=".35" />
            <circle cx="50.77" cy="73.14" r=".35" />
            <circle cx="48.77" cy="73.14" r=".35" />
            <circle cx="51.77" cy="71.14" r=".35" />
            <circle cx="49.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eK)`}>
            <circle cx="51.77" cy="79.14" r=".35" />
            <circle cx="49.77" cy="79.14" r=".35" />
            <circle cx="52.77" cy="77.14" r=".35" />
            <circle cx="50.77" cy="77.14" r=".35" />
            <circle cx="48.77" cy="77.14" r=".35" />
            <circle cx="51.77" cy="75.14" r=".35" />
            <circle cx="49.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eL)`}>
            <circle cx="51.77" cy="83.14" r=".35" />
            <circle cx="49.77" cy="83.14" r=".35" />
            <circle cx="52.77" cy="81.14" r=".35" />
            <circle cx="50.77" cy="81.14" r=".35" />
            <circle cx="48.77" cy="81.14" r=".35" />
            <circle cx="51.77" cy="79.14" r=".35" />
            <circle cx="49.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eM)`}>
            <circle cx="51.77" cy="87.14" r=".35" />
            <circle cx="49.77" cy="87.14" r=".35" />
            <circle cx="52.77" cy="85.14" r=".35" />
            <circle cx="50.77" cy="85.14" r=".35" />
            <circle cx="48.77" cy="85.14" r=".35" />
            <circle cx="51.77" cy="83.14" r=".35" />
            <circle cx="49.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eN)`}>
            <circle cx="51.77" cy="91.14" r=".35" />
            <circle cx="49.77" cy="91.14" r=".35" />
            <circle cx="52.77" cy="89.14" r=".35" />
            <circle cx="50.77" cy="89.14" r=".35" />
            <circle cx="48.77" cy="89.14" r=".35" />
            <circle cx="51.77" cy="87.14" r=".35" />
            <circle cx="49.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eO)`}>
            <circle cx="51.77" cy="95.14" r=".35" />
            <circle cx="49.77" cy="95.14" r=".35" />
            <circle cx="52.77" cy="93.14" r=".35" />
            <circle cx="50.77" cy="93.14" r=".35" />
            <circle cx="48.77" cy="93.14" r=".35" />
            <circle cx="51.77" cy="91.14" r=".35" />
            <circle cx="49.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eP)`}>
            <circle cx="51.77" cy="99.14" r=".35" />
            <circle cx="49.77" cy="99.14" r=".35" />
            <circle cx="52.77" cy="97.14" r=".35" />
            <circle cx="50.77" cy="97.14" r=".35" />
            <circle cx="48.77" cy="97.14" r=".35" />
            <circle cx="51.77" cy="95.14" r=".35" />
            <circle cx="49.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eQ)`}>
            <circle cx="51.77" cy="103.14" r=".35" />
            <circle cx="49.77" cy="103.14" r=".35" />
            <circle cx="52.77" cy="101.14" r=".35" />
            <circle cx="50.77" cy="101.14" r=".35" />
            <circle cx="48.77" cy="101.14" r=".35" />
            <circle cx="51.77" cy="99.14" r=".35" />
            <circle cx="49.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eR)`}>
            <circle cx="51.77" cy="107.14" r=".35" />
            <circle cx="49.77" cy="107.14" r=".35" />
            <circle cx="52.77" cy="105.14" r=".35" />
            <circle cx="50.77" cy="105.14" r=".35" />
            <circle cx="48.77" cy="105.14" r=".35" />
            <circle cx="51.77" cy="103.14" r=".35" />
            <circle cx="49.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eW)`}>
            <circle cx="47.77" cy="35.14" r=".35" />
            <circle cx="45.77" cy="35.14" r=".35" />
            <circle cx="48.77" cy="33.14" r=".35" />
            <circle cx="46.77" cy="33.14" r=".35" />
            <circle cx="44.77" cy="33.14" r=".35" />
            <circle cx="47.77" cy="31.14" r=".35" />
            <circle cx="45.77" cy="31.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eX)`}>
            <circle cx="47.77" cy="39.14" r=".35" />
            <circle cx="45.77" cy="39.14" r=".35" />
            <circle cx="48.77" cy="37.14" r=".35" />
            <circle cx="46.77" cy="37.14" r=".35" />
            <circle cx="44.77" cy="37.14" r=".35" />
            <circle cx="47.77" cy="35.14" r=".35" />
            <circle cx="45.77" cy="35.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eY)`}>
            <circle cx="47.77" cy="43.14" r=".35" />
            <circle cx="45.77" cy="43.14" r=".35" />
            <circle cx="48.77" cy="41.14" r=".35" />
            <circle cx="46.77" cy="41.14" r=".35" />
            <circle cx="44.77" cy="41.14" r=".35" />
            <circle cx="47.77" cy="39.14" r=".35" />
            <circle cx="45.77" cy="39.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eZ)`}>
            <circle cx="47.77" cy="47.14" r=".35" />
            <circle cx="45.77" cy="47.14" r=".35" />
            <circle cx="48.77" cy="45.14" r=".35" />
            <circle cx="46.77" cy="45.14" r=".35" />
            <circle cx="44.77" cy="45.14" r=".35" />
            <circle cx="47.77" cy="43.14" r=".35" />
            <circle cx="45.77" cy="43.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-e0)`}>
            <circle cx="47.77" cy="51.14" r=".35" />
            <circle cx="45.77" cy="51.14" r=".35" />
            <circle cx="48.77" cy="49.14" r=".35" />
            <circle cx="46.77" cy="49.14" r=".35" />
            <circle cx="44.77" cy="49.14" r=".35" />
            <circle cx="47.77" cy="47.14" r=".35" />
            <circle cx="45.77" cy="47.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-e1)`}>
            <circle cx="47.77" cy="55.14" r=".35" />
            <circle cx="45.77" cy="55.14" r=".35" />
            <circle cx="48.77" cy="53.14" r=".35" />
            <circle cx="46.77" cy="53.14" r=".35" />
            <circle cx="44.77" cy="53.14" r=".35" />
            <circle cx="47.77" cy="51.14" r=".35" />
            <circle cx="45.77" cy="51.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-e2)`}>
            <circle cx="47.77" cy="59.14" r=".35" />
            <circle cx="45.77" cy="59.14" r=".35" />
            <circle cx="48.77" cy="57.14" r=".35" />
            <circle cx="46.77" cy="57.14" r=".35" />
            <circle cx="44.77" cy="57.14" r=".35" />
            <circle cx="47.77" cy="55.14" r=".35" />
            <circle cx="45.77" cy="55.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-e3)`}>
            <circle cx="47.77" cy="63.14" r=".35" />
            <circle cx="45.77" cy="63.14" r=".35" />
            <circle cx="48.77" cy="61.14" r=".35" />
            <circle cx="46.77" cy="61.14" r=".35" />
            <circle cx="44.77" cy="61.14" r=".35" />
            <circle cx="47.77" cy="59.14" r=".35" />
            <circle cx="45.77" cy="59.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-e4)`}>
            <circle cx="47.77" cy="67.14" r=".35" />
            <circle cx="45.77" cy="67.14" r=".35" />
            <circle cx="48.77" cy="65.14" r=".35" />
            <circle cx="46.77" cy="65.14" r=".35" />
            <circle cx="44.77" cy="65.14" r=".35" />
            <circle cx="47.77" cy="63.14" r=".35" />
            <circle cx="45.77" cy="63.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-e5)`}>
            <circle cx="47.77" cy="71.14" r=".35" />
            <circle cx="45.77" cy="71.14" r=".35" />
            <circle cx="48.77" cy="69.14" r=".35" />
            <circle cx="46.77" cy="69.14" r=".35" />
            <circle cx="44.77" cy="69.14" r=".35" />
            <circle cx="47.77" cy="67.14" r=".35" />
            <circle cx="45.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-e6)`}>
            <circle cx="47.77" cy="75.14" r=".35" />
            <circle cx="45.77" cy="75.14" r=".35" />
            <circle cx="48.77" cy="73.14" r=".35" />
            <circle cx="46.77" cy="73.14" r=".35" />
            <circle cx="44.77" cy="73.14" r=".35" />
            <circle cx="47.77" cy="71.14" r=".35" />
            <circle cx="45.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-e7)`}>
            <circle cx="47.77" cy="79.14" r=".35" />
            <circle cx="45.77" cy="79.14" r=".35" />
            <circle cx="48.77" cy="77.14" r=".35" />
            <circle cx="46.77" cy="77.14" r=".35" />
            <circle cx="44.77" cy="77.14" r=".35" />
            <circle cx="47.77" cy="75.14" r=".35" />
            <circle cx="45.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-e8)`}>
            <circle cx="47.77" cy="83.14" r=".35" />
            <circle cx="45.77" cy="83.14" r=".35" />
            <circle cx="48.77" cy="81.14" r=".35" />
            <circle cx="46.77" cy="81.14" r=".35" />
            <circle cx="44.77" cy="81.14" r=".35" />
            <circle cx="47.77" cy="79.14" r=".35" />
            <circle cx="45.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-e9)`}>
            <circle cx="47.77" cy="87.14" r=".35" />
            <circle cx="45.77" cy="87.14" r=".35" />
            <circle cx="48.77" cy="85.14" r=".35" />
            <circle cx="46.77" cy="85.14" r=".35" />
            <circle cx="44.77" cy="85.14" r=".35" />
            <circle cx="47.77" cy="83.14" r=".35" />
            <circle cx="45.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fa)`}>
            <circle cx="47.77" cy="91.14" r=".35" />
            <circle cx="45.77" cy="91.14" r=".35" />
            <circle cx="48.77" cy="89.14" r=".35" />
            <circle cx="46.77" cy="89.14" r=".35" />
            <circle cx="44.77" cy="89.14" r=".35" />
            <circle cx="47.77" cy="87.14" r=".35" />
            <circle cx="45.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fb)`}>
            <circle cx="47.77" cy="95.14" r=".35" />
            <circle cx="45.77" cy="95.14" r=".35" />
            <circle cx="48.77" cy="93.14" r=".35" />
            <circle cx="46.77" cy="93.14" r=".35" />
            <circle cx="44.77" cy="93.14" r=".35" />
            <circle cx="47.77" cy="91.14" r=".35" />
            <circle cx="45.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fc)`}>
            <circle cx="47.77" cy="99.14" r=".35" />
            <circle cx="45.77" cy="99.14" r=".35" />
            <circle cx="48.77" cy="97.14" r=".35" />
            <circle cx="46.77" cy="97.14" r=".35" />
            <circle cx="44.77" cy="97.14" r=".35" />
            <circle cx="47.77" cy="95.14" r=".35" />
            <circle cx="45.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fd)`}>
            <circle cx="47.77" cy="103.14" r=".35" />
            <circle cx="45.77" cy="103.14" r=".35" />
            <circle cx="48.77" cy="101.14" r=".35" />
            <circle cx="46.77" cy="101.14" r=".35" />
            <circle cx="44.77" cy="101.14" r=".35" />
            <circle cx="47.77" cy="99.14" r=".35" />
            <circle cx="45.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fe)`}>
            <circle cx="47.77" cy="107.14" r=".35" />
            <circle cx="45.77" cy="107.14" r=".35" />
            <circle cx="48.77" cy="105.14" r=".35" />
            <circle cx="46.77" cy="105.14" r=".35" />
            <circle cx="44.77" cy="105.14" r=".35" />
            <circle cx="47.77" cy="103.14" r=".35" />
            <circle cx="45.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fj)`}>
            <circle cx="43.77" cy="35.14" r=".35" />
            <circle cx="41.77" cy="35.14" r=".35" />
            <circle cx="44.77" cy="33.14" r=".35" />
            <circle cx="42.77" cy="33.14" r=".35" />
            <circle cx="40.77" cy="33.14" r=".35" />
            <circle cx="43.77" cy="31.14" r=".35" />
            <circle cx="41.77" cy="31.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fk)`}>
            <circle cx="43.77" cy="39.14" r=".35" />
            <circle cx="41.77" cy="39.14" r=".35" />
            <circle cx="44.77" cy="37.14" r=".35" />
            <circle cx="42.77" cy="37.14" r=".35" />
            <circle cx="40.77" cy="37.14" r=".35" />
            <circle cx="43.77" cy="35.14" r=".35" />
            <circle cx="41.77" cy="35.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fl)`}>
            <circle cx="43.77" cy="43.14" r=".35" />
            <circle cx="41.77" cy="43.14" r=".35" />
            <circle cx="44.77" cy="41.14" r=".35" />
            <circle cx="42.77" cy="41.14" r=".35" />
            <circle cx="40.77" cy="41.14" r=".35" />
            <circle cx="43.77" cy="39.14" r=".35" />
            <circle cx="41.77" cy="39.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fm)`}>
            <circle cx="43.77" cy="47.14" r=".35" />
            <circle cx="41.77" cy="47.14" r=".35" />
            <circle cx="44.77" cy="45.14" r=".35" />
            <circle cx="42.77" cy="45.14" r=".35" />
            <circle cx="40.77" cy="45.14" r=".35" />
            <circle cx="43.77" cy="43.14" r=".35" />
            <circle cx="41.77" cy="43.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fn)`}>
            <circle cx="43.77" cy="51.14" r=".35" />
            <circle cx="41.77" cy="51.14" r=".35" />
            <circle cx="44.77" cy="49.14" r=".35" />
            <circle cx="42.77" cy="49.14" r=".35" />
            <circle cx="40.77" cy="49.14" r=".35" />
            <circle cx="43.77" cy="47.14" r=".35" />
            <circle cx="41.77" cy="47.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fo)`}>
            <circle cx="43.77" cy="55.14" r=".35" />
            <circle cx="41.77" cy="55.14" r=".35" />
            <circle cx="44.77" cy="53.14" r=".35" />
            <circle cx="42.77" cy="53.14" r=".35" />
            <circle cx="40.77" cy="53.14" r=".35" />
            <circle cx="43.77" cy="51.14" r=".35" />
            <circle cx="41.77" cy="51.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fp)`}>
            <circle cx="43.77" cy="59.14" r=".35" />
            <circle cx="41.77" cy="59.14" r=".35" />
            <circle cx="44.77" cy="57.14" r=".35" />
            <circle cx="42.77" cy="57.14" r=".35" />
            <circle cx="40.77" cy="57.14" r=".35" />
            <circle cx="43.77" cy="55.14" r=".35" />
            <circle cx="41.77" cy="55.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fq)`}>
            <circle cx="43.77" cy="63.14" r=".35" />
            <circle cx="41.77" cy="63.14" r=".35" />
            <circle cx="44.77" cy="61.14" r=".35" />
            <circle cx="42.77" cy="61.14" r=".35" />
            <circle cx="40.77" cy="61.14" r=".35" />
            <circle cx="43.77" cy="59.14" r=".35" />
            <circle cx="41.77" cy="59.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fr)`}>
            <circle cx="43.77" cy="67.14" r=".35" />
            <circle cx="41.77" cy="67.14" r=".35" />
            <circle cx="44.77" cy="65.14" r=".35" />
            <circle cx="42.77" cy="65.14" r=".35" />
            <circle cx="40.77" cy="65.14" r=".35" />
            <circle cx="43.77" cy="63.14" r=".35" />
            <circle cx="41.77" cy="63.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fs)`}>
            <circle cx="43.77" cy="71.14" r=".35" />
            <circle cx="41.77" cy="71.14" r=".35" />
            <circle cx="44.77" cy="69.14" r=".35" />
            <circle cx="42.77" cy="69.14" r=".35" />
            <circle cx="40.77" cy="69.14" r=".35" />
            <circle cx="43.77" cy="67.14" r=".35" />
            <circle cx="41.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ft)`}>
            <circle cx="43.77" cy="75.14" r=".35" />
            <circle cx="41.77" cy="75.14" r=".35" />
            <circle cx="44.77" cy="73.14" r=".35" />
            <circle cx="42.77" cy="73.14" r=".35" />
            <circle cx="40.77" cy="73.14" r=".35" />
            <circle cx="43.77" cy="71.14" r=".35" />
            <circle cx="41.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fu)`}>
            <circle cx="43.77" cy="79.14" r=".35" />
            <circle cx="41.77" cy="79.14" r=".35" />
            <circle cx="44.77" cy="77.14" r=".35" />
            <circle cx="42.77" cy="77.14" r=".35" />
            <circle cx="40.77" cy="77.14" r=".35" />
            <circle cx="43.77" cy="75.14" r=".35" />
            <circle cx="41.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fv)`}>
            <circle cx="43.77" cy="83.14" r=".35" />
            <circle cx="41.77" cy="83.14" r=".35" />
            <circle cx="44.77" cy="81.14" r=".35" />
            <circle cx="42.77" cy="81.14" r=".35" />
            <circle cx="40.77" cy="81.14" r=".35" />
            <circle cx="43.77" cy="79.14" r=".35" />
            <circle cx="41.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fw)`}>
            <circle cx="43.77" cy="87.14" r=".35" />
            <circle cx="41.77" cy="87.14" r=".35" />
            <circle cx="44.77" cy="85.14" r=".35" />
            <circle cx="42.77" cy="85.14" r=".35" />
            <circle cx="40.77" cy="85.14" r=".35" />
            <circle cx="43.77" cy="83.14" r=".35" />
            <circle cx="41.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fx)`}>
            <circle cx="43.77" cy="91.14" r=".35" />
            <circle cx="41.77" cy="91.14" r=".35" />
            <circle cx="44.77" cy="89.14" r=".35" />
            <circle cx="42.77" cy="89.14" r=".35" />
            <circle cx="40.77" cy="89.14" r=".35" />
            <circle cx="43.77" cy="87.14" r=".35" />
            <circle cx="41.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fy)`}>
            <circle cx="43.77" cy="95.14" r=".35" />
            <circle cx="41.77" cy="95.14" r=".35" />
            <circle cx="44.77" cy="93.14" r=".35" />
            <circle cx="42.77" cy="93.14" r=".35" />
            <circle cx="40.77" cy="93.14" r=".35" />
            <circle cx="43.77" cy="91.14" r=".35" />
            <circle cx="41.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fz)`}>
            <circle cx="43.77" cy="99.14" r=".35" />
            <circle cx="41.77" cy="99.14" r=".35" />
            <circle cx="44.77" cy="97.14" r=".35" />
            <circle cx="42.77" cy="97.14" r=".35" />
            <circle cx="40.77" cy="97.14" r=".35" />
            <circle cx="43.77" cy="95.14" r=".35" />
            <circle cx="41.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fA)`}>
            <circle cx="43.77" cy="103.14" r=".35" />
            <circle cx="41.77" cy="103.14" r=".35" />
            <circle cx="44.77" cy="101.14" r=".35" />
            <circle cx="42.77" cy="101.14" r=".35" />
            <circle cx="40.77" cy="101.14" r=".35" />
            <circle cx="43.77" cy="99.14" r=".35" />
            <circle cx="41.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fB)`}>
            <circle cx="43.77" cy="107.14" r=".35" />
            <circle cx="41.77" cy="107.14" r=".35" />
            <circle cx="44.77" cy="105.14" r=".35" />
            <circle cx="42.77" cy="105.14" r=".35" />
            <circle cx="40.77" cy="105.14" r=".35" />
            <circle cx="43.77" cy="103.14" r=".35" />
            <circle cx="41.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fG)`}>
            <circle cx="39.77" cy="35.14" r=".35" />
            <circle cx="37.77" cy="35.14" r=".35" />
            <circle cx="40.77" cy="33.14" r=".35" />
            <circle cx="38.77" cy="33.14" r=".35" />
            <circle cx="36.77" cy="33.14" r=".35" />
            <circle cx="39.77" cy="31.14" r=".35" />
            <circle cx="37.77" cy="31.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fH)`}>
            <circle cx="39.77" cy="39.14" r=".35" />
            <circle cx="37.77" cy="39.14" r=".35" />
            <circle cx="40.77" cy="37.14" r=".35" />
            <circle cx="38.77" cy="37.14" r=".35" />
            <circle cx="36.77" cy="37.14" r=".35" />
            <circle cx="39.77" cy="35.14" r=".35" />
            <circle cx="37.77" cy="35.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fI)`}>
            <circle cx="39.77" cy="43.14" r=".35" />
            <circle cx="37.77" cy="43.14" r=".35" />
            <circle cx="40.77" cy="41.14" r=".35" />
            <circle cx="38.77" cy="41.14" r=".35" />
            <circle cx="36.77" cy="41.14" r=".35" />
            <circle cx="39.77" cy="39.14" r=".35" />
            <circle cx="37.77" cy="39.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fJ)`}>
            <circle cx="39.77" cy="47.14" r=".35" />
            <circle cx="37.77" cy="47.14" r=".35" />
            <circle cx="40.77" cy="45.14" r=".35" />
            <circle cx="38.77" cy="45.14" r=".35" />
            <circle cx="36.77" cy="45.14" r=".35" />
            <circle cx="39.77" cy="43.14" r=".35" />
            <circle cx="37.77" cy="43.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fK)`}>
            <circle cx="39.77" cy="51.14" r=".35" />
            <circle cx="37.77" cy="51.14" r=".35" />
            <circle cx="40.77" cy="49.14" r=".35" />
            <circle cx="38.77" cy="49.14" r=".35" />
            <circle cx="36.77" cy="49.14" r=".35" />
            <circle cx="39.77" cy="47.14" r=".35" />
            <circle cx="37.77" cy="47.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fL)`}>
            <circle cx="39.77" cy="55.14" r=".35" />
            <circle cx="37.77" cy="55.14" r=".35" />
            <circle cx="40.77" cy="53.14" r=".35" />
            <circle cx="38.77" cy="53.14" r=".35" />
            <circle cx="36.77" cy="53.14" r=".35" />
            <circle cx="39.77" cy="51.14" r=".35" />
            <circle cx="37.77" cy="51.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fM)`}>
            <circle cx="39.77" cy="59.14" r=".35" />
            <circle cx="37.77" cy="59.14" r=".35" />
            <circle cx="40.77" cy="57.14" r=".35" />
            <circle cx="38.77" cy="57.14" r=".35" />
            <circle cx="36.77" cy="57.14" r=".35" />
            <circle cx="39.77" cy="55.14" r=".35" />
            <circle cx="37.77" cy="55.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fN)`}>
            <circle cx="39.77" cy="63.14" r=".35" />
            <circle cx="37.77" cy="63.14" r=".35" />
            <circle cx="40.77" cy="61.14" r=".35" />
            <circle cx="38.77" cy="61.14" r=".35" />
            <circle cx="36.77" cy="61.14" r=".35" />
            <circle cx="39.77" cy="59.14" r=".35" />
            <circle cx="37.77" cy="59.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fO)`}>
            <circle cx="39.77" cy="67.14" r=".35" />
            <circle cx="37.77" cy="67.14" r=".35" />
            <circle cx="40.77" cy="65.14" r=".35" />
            <circle cx="38.77" cy="65.14" r=".35" />
            <circle cx="36.77" cy="65.14" r=".35" />
            <circle cx="39.77" cy="63.14" r=".35" />
            <circle cx="37.77" cy="63.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fP)`}>
            <circle cx="39.77" cy="71.14" r=".35" />
            <circle cx="37.77" cy="71.14" r=".35" />
            <circle cx="40.77" cy="69.14" r=".35" />
            <circle cx="38.77" cy="69.14" r=".35" />
            <circle cx="36.77" cy="69.14" r=".35" />
            <circle cx="39.77" cy="67.14" r=".35" />
            <circle cx="37.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fQ)`}>
            <circle cx="39.77" cy="75.14" r=".35" />
            <circle cx="37.77" cy="75.14" r=".35" />
            <circle cx="40.77" cy="73.14" r=".35" />
            <circle cx="38.77" cy="73.14" r=".35" />
            <circle cx="36.77" cy="73.14" r=".35" />
            <circle cx="39.77" cy="71.14" r=".35" />
            <circle cx="37.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fR)`}>
            <circle cx="39.77" cy="79.14" r=".35" />
            <circle cx="37.77" cy="79.14" r=".35" />
            <circle cx="40.77" cy="77.14" r=".35" />
            <circle cx="38.77" cy="77.14" r=".35" />
            <circle cx="36.77" cy="77.14" r=".35" />
            <circle cx="39.77" cy="75.14" r=".35" />
            <circle cx="37.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fS)`}>
            <circle cx="39.77" cy="83.14" r=".35" />
            <circle cx="37.77" cy="83.14" r=".35" />
            <circle cx="40.77" cy="81.14" r=".35" />
            <circle cx="38.77" cy="81.14" r=".35" />
            <circle cx="36.77" cy="81.14" r=".35" />
            <circle cx="39.77" cy="79.14" r=".35" />
            <circle cx="37.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fT)`}>
            <circle cx="39.77" cy="87.14" r=".35" />
            <circle cx="37.77" cy="87.14" r=".35" />
            <circle cx="40.77" cy="85.14" r=".35" />
            <circle cx="38.77" cy="85.14" r=".35" />
            <circle cx="36.77" cy="85.14" r=".35" />
            <circle cx="39.77" cy="83.14" r=".35" />
            <circle cx="37.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fU)`}>
            <circle cx="39.77" cy="91.14" r=".35" />
            <circle cx="37.77" cy="91.14" r=".35" />
            <circle cx="40.77" cy="89.14" r=".35" />
            <circle cx="38.77" cy="89.14" r=".35" />
            <circle cx="36.77" cy="89.14" r=".35" />
            <circle cx="39.77" cy="87.14" r=".35" />
            <circle cx="37.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fV)`}>
            <circle cx="39.77" cy="95.14" r=".35" />
            <circle cx="37.77" cy="95.14" r=".35" />
            <circle cx="40.77" cy="93.14" r=".35" />
            <circle cx="38.77" cy="93.14" r=".35" />
            <circle cx="36.77" cy="93.14" r=".35" />
            <circle cx="39.77" cy="91.14" r=".35" />
            <circle cx="37.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fW)`}>
            <circle cx="39.77" cy="99.14" r=".35" />
            <circle cx="37.77" cy="99.14" r=".35" />
            <circle cx="40.77" cy="97.14" r=".35" />
            <circle cx="38.77" cy="97.14" r=".35" />
            <circle cx="36.77" cy="97.14" r=".35" />
            <circle cx="39.77" cy="95.14" r=".35" />
            <circle cx="37.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fX)`}>
            <circle cx="39.77" cy="103.14" r=".35" />
            <circle cx="37.77" cy="103.14" r=".35" />
            <circle cx="40.77" cy="101.14" r=".35" />
            <circle cx="38.77" cy="101.14" r=".35" />
            <circle cx="36.77" cy="101.14" r=".35" />
            <circle cx="39.77" cy="99.14" r=".35" />
            <circle cx="37.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fY)`}>
            <circle cx="39.77" cy="107.14" r=".35" />
            <circle cx="37.77" cy="107.14" r=".35" />
            <circle cx="40.77" cy="105.14" r=".35" />
            <circle cx="38.77" cy="105.14" r=".35" />
            <circle cx="36.77" cy="105.14" r=".35" />
            <circle cx="39.77" cy="103.14" r=".35" />
            <circle cx="37.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cK)`}>
            <circle cx="71.77" cy="43.14" r=".35" />
            <circle cx="69.77" cy="43.14" r=".35" />
            <circle cx="72.77" cy="41.14" r=".35" />
            <circle cx="70.77" cy="41.14" r=".35" />
            <circle cx="68.77" cy="41.14" r=".35" />
            <circle cx="71.77" cy="39.14" r=".35" />
            <circle cx="69.77" cy="39.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-c7)`}>
            <circle cx="67.77" cy="43.14" r=".35" />
            <circle cx="65.77" cy="43.14" r=".35" />
            <circle cx="68.77" cy="41.14" r=".35" />
            <circle cx="66.77" cy="41.14" r=".35" />
            <circle cx="64.77" cy="41.14" r=".35" />
            <circle cx="67.77" cy="39.14" r=".35" />
            <circle cx="65.77" cy="39.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-du)`}>
            <circle cx="63.77" cy="43.14" r=".35" />
            <circle cx="61.77" cy="43.14" r=".35" />
            <circle cx="64.77" cy="41.14" r=".35" />
            <circle cx="62.77" cy="41.14" r=".35" />
            <circle cx="60.77" cy="41.14" r=".35" />
            <circle cx="63.77" cy="39.14" r=".35" />
            <circle cx="61.77" cy="39.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dR)`}>
            <circle cx="59.77" cy="43.14" r=".35" />
            <circle cx="57.77" cy="43.14" r=".35" />
            <circle cx="60.77" cy="41.14" r=".35" />
            <circle cx="58.77" cy="41.14" r=".35" />
            <circle cx="56.77" cy="41.14" r=".35" />
            <circle cx="59.77" cy="39.14" r=".35" />
            <circle cx="57.77" cy="39.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ee)`}>
            <circle cx="55.77" cy="43.14" r=".35" />
            <circle cx="53.77" cy="43.14" r=".35" />
            <circle cx="56.77" cy="41.14" r=".35" />
            <circle cx="54.77" cy="41.14" r=".35" />
            <circle cx="52.77" cy="41.14" r=".35" />
            <circle cx="55.77" cy="39.14" r=".35" />
            <circle cx="53.77" cy="39.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eB)`}>
            <circle cx="51.77" cy="43.14" r=".35" />
            <circle cx="49.77" cy="43.14" r=".35" />
            <circle cx="52.77" cy="41.14" r=".35" />
            <circle cx="50.77" cy="41.14" r=".35" />
            <circle cx="48.77" cy="41.14" r=".35" />
            <circle cx="51.77" cy="39.14" r=".35" />
            <circle cx="49.77" cy="39.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eY)`}>
            <circle cx="47.77" cy="43.14" r=".35" />
            <circle cx="45.77" cy="43.14" r=".35" />
            <circle cx="48.77" cy="41.14" r=".35" />
            <circle cx="46.77" cy="41.14" r=".35" />
            <circle cx="44.77" cy="41.14" r=".35" />
            <circle cx="47.77" cy="39.14" r=".35" />
            <circle cx="45.77" cy="39.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bJ)`}>
            <circle cx="83.77" cy="67.14" r=".35" />
            <circle cx="81.77" cy="67.14" r=".35" />
            <circle cx="84.77" cy="65.14" r=".35" />
            <circle cx="82.77" cy="65.14" r=".35" />
            <circle cx="80.77" cy="65.14" r=".35" />
            <circle cx="83.77" cy="63.14" r=".35" />
            <circle cx="81.77" cy="63.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bK)`}>
            <circle cx="83.77" cy="71.14" r=".35" />
            <circle cx="81.77" cy="71.14" r=".35" />
            <circle cx="84.77" cy="69.14" r=".35" />
            <circle cx="82.77" cy="69.14" r=".35" />
            <circle cx="80.77" cy="69.14" r=".35" />
            <circle cx="83.77" cy="67.14" r=".35" />
            <circle cx="81.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b6)`}>
            <circle cx="79.77" cy="67.14" r=".35" />
            <circle cx="77.77" cy="67.14" r=".35" />
            <circle cx="80.77" cy="65.14" r=".35" />
            <circle cx="78.77" cy="65.14" r=".35" />
            <circle cx="76.77" cy="65.14" r=".35" />
            <circle cx="79.77" cy="63.14" r=".35" />
            <circle cx="77.77" cy="63.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b7)`}>
            <circle cx="79.77" cy="71.14" r=".35" />
            <circle cx="77.77" cy="71.14" r=".35" />
            <circle cx="80.77" cy="69.14" r=".35" />
            <circle cx="78.77" cy="69.14" r=".35" />
            <circle cx="76.77" cy="69.14" r=".35" />
            <circle cx="79.77" cy="67.14" r=".35" />
            <circle cx="77.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ct)`}>
            <circle cx="75.77" cy="67.14" r=".35" />
            <circle cx="73.77" cy="67.14" r=".35" />
            <circle cx="76.77" cy="65.14" r=".35" />
            <circle cx="74.77" cy="65.14" r=".35" />
            <circle cx="72.77" cy="65.14" r=".35" />
            <circle cx="75.77" cy="63.14" r=".35" />
            <circle cx="73.77" cy="63.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cu)`}>
            <circle cx="75.77" cy="71.14" r=".35" />
            <circle cx="73.77" cy="71.14" r=".35" />
            <circle cx="76.77" cy="69.14" r=".35" />
            <circle cx="74.77" cy="69.14" r=".35" />
            <circle cx="72.77" cy="69.14" r=".35" />
            <circle cx="75.77" cy="67.14" r=".35" />
            <circle cx="73.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cQ)`}>
            <circle cx="71.77" cy="67.14" r=".35" />
            <circle cx="69.77" cy="67.14" r=".35" />
            <circle cx="72.77" cy="65.14" r=".35" />
            <circle cx="70.77" cy="65.14" r=".35" />
            <circle cx="68.77" cy="65.14" r=".35" />
            <circle cx="71.77" cy="63.14" r=".35" />
            <circle cx="69.77" cy="63.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cR)`}>
            <circle cx="71.77" cy="71.14" r=".35" />
            <circle cx="69.77" cy="71.14" r=".35" />
            <circle cx="72.77" cy="69.14" r=".35" />
            <circle cx="70.77" cy="69.14" r=".35" />
            <circle cx="68.77" cy="69.14" r=".35" />
            <circle cx="71.77" cy="67.14" r=".35" />
            <circle cx="69.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dd)`}>
            <circle cx="67.77" cy="67.14" r=".35" />
            <circle cx="65.77" cy="67.14" r=".35" />
            <circle cx="68.77" cy="65.14" r=".35" />
            <circle cx="66.77" cy="65.14" r=".35" />
            <circle cx="64.77" cy="65.14" r=".35" />
            <circle cx="67.77" cy="63.14" r=".35" />
            <circle cx="65.77" cy="63.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-de)`}>
            <circle cx="67.77" cy="71.14" r=".35" />
            <circle cx="65.77" cy="71.14" r=".35" />
            <circle cx="68.77" cy="69.14" r=".35" />
            <circle cx="66.77" cy="69.14" r=".35" />
            <circle cx="64.77" cy="69.14" r=".35" />
            <circle cx="67.77" cy="67.14" r=".35" />
            <circle cx="65.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dA)`}>
            <circle cx="63.77" cy="67.14" r=".35" />
            <circle cx="61.77" cy="67.14" r=".35" />
            <circle cx="64.77" cy="65.14" r=".35" />
            <circle cx="62.77" cy="65.14" r=".35" />
            <circle cx="60.77" cy="65.14" r=".35" />
            <circle cx="63.77" cy="63.14" r=".35" />
            <circle cx="61.77" cy="63.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dB)`}>
            <circle cx="63.77" cy="71.14" r=".35" />
            <circle cx="61.77" cy="71.14" r=".35" />
            <circle cx="64.77" cy="69.14" r=".35" />
            <circle cx="62.77" cy="69.14" r=".35" />
            <circle cx="60.77" cy="69.14" r=".35" />
            <circle cx="63.77" cy="67.14" r=".35" />
            <circle cx="61.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dX)`}>
            <circle cx="59.77" cy="67.14" r=".35" />
            <circle cx="57.77" cy="67.14" r=".35" />
            <circle cx="60.77" cy="65.14" r=".35" />
            <circle cx="58.77" cy="65.14" r=".35" />
            <circle cx="56.77" cy="65.14" r=".35" />
            <circle cx="59.77" cy="63.14" r=".35" />
            <circle cx="57.77" cy="63.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dY)`}>
            <circle cx="59.77" cy="71.14" r=".35" />
            <circle cx="57.77" cy="71.14" r=".35" />
            <circle cx="60.77" cy="69.14" r=".35" />
            <circle cx="58.77" cy="69.14" r=".35" />
            <circle cx="56.77" cy="69.14" r=".35" />
            <circle cx="59.77" cy="67.14" r=".35" />
            <circle cx="57.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ek)`}>
            <circle cx="55.77" cy="67.14" r=".35" />
            <circle cx="53.77" cy="67.14" r=".35" />
            <circle cx="56.77" cy="65.14" r=".35" />
            <circle cx="54.77" cy="65.14" r=".35" />
            <circle cx="52.77" cy="65.14" r=".35" />
            <circle cx="55.77" cy="63.14" r=".35" />
            <circle cx="53.77" cy="63.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-el)`}>
            <circle cx="55.77" cy="71.14" r=".35" />
            <circle cx="53.77" cy="71.14" r=".35" />
            <circle cx="56.77" cy="69.14" r=".35" />
            <circle cx="54.77" cy="69.14" r=".35" />
            <circle cx="52.77" cy="69.14" r=".35" />
            <circle cx="55.77" cy="67.14" r=".35" />
            <circle cx="53.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eH)`}>
            <circle cx="51.77" cy="67.14" r=".35" />
            <circle cx="49.77" cy="67.14" r=".35" />
            <circle cx="52.77" cy="65.14" r=".35" />
            <circle cx="50.77" cy="65.14" r=".35" />
            <circle cx="48.77" cy="65.14" r=".35" />
            <circle cx="51.77" cy="63.14" r=".35" />
            <circle cx="49.77" cy="63.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eI)`}>
            <circle cx="51.77" cy="71.14" r=".35" />
            <circle cx="49.77" cy="71.14" r=".35" />
            <circle cx="52.77" cy="69.14" r=".35" />
            <circle cx="50.77" cy="69.14" r=".35" />
            <circle cx="48.77" cy="69.14" r=".35" />
            <circle cx="51.77" cy="67.14" r=".35" />
            <circle cx="49.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-e4)`}>
            <circle cx="47.77" cy="67.14" r=".35" />
            <circle cx="45.77" cy="67.14" r=".35" />
            <circle cx="48.77" cy="65.14" r=".35" />
            <circle cx="46.77" cy="65.14" r=".35" />
            <circle cx="44.77" cy="65.14" r=".35" />
            <circle cx="47.77" cy="63.14" r=".35" />
            <circle cx="45.77" cy="63.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-e5)`}>
            <circle cx="47.77" cy="71.14" r=".35" />
            <circle cx="45.77" cy="71.14" r=".35" />
            <circle cx="48.77" cy="69.14" r=".35" />
            <circle cx="46.77" cy="69.14" r=".35" />
            <circle cx="44.77" cy="69.14" r=".35" />
            <circle cx="47.77" cy="67.14" r=".35" />
            <circle cx="45.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a7)`}>
            <circle cx="91.77" cy="99.14" r=".35" />
            <circle cx="89.77" cy="99.14" r=".35" />
            <circle cx="92.77" cy="97.14" r=".35" />
            <circle cx="90.77" cy="97.14" r=".35" />
            <circle cx="88.77" cy="97.14" r=".35" />
            <circle cx="91.77" cy="95.14" r=".35" />
            <circle cx="89.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a8)`}>
            <circle cx="91.77" cy="103.14" r=".35" />
            <circle cx="89.77" cy="103.14" r=".35" />
            <circle cx="92.77" cy="101.14" r=".35" />
            <circle cx="90.77" cy="101.14" r=".35" />
            <circle cx="88.77" cy="101.14" r=".35" />
            <circle cx="91.77" cy="99.14" r=".35" />
            <circle cx="89.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bu)`}>
            <circle cx="87.77" cy="99.14" r=".35" />
            <circle cx="85.77" cy="99.14" r=".35" />
            <circle cx="88.77" cy="97.14" r=".35" />
            <circle cx="86.77" cy="97.14" r=".35" />
            <circle cx="84.77" cy="97.14" r=".35" />
            <circle cx="87.77" cy="95.14" r=".35" />
            <circle cx="85.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bv)`}>
            <circle cx="87.77" cy="103.14" r=".35" />
            <circle cx="85.77" cy="103.14" r=".35" />
            <circle cx="88.77" cy="101.14" r=".35" />
            <circle cx="86.77" cy="101.14" r=".35" />
            <circle cx="84.77" cy="101.14" r=".35" />
            <circle cx="87.77" cy="99.14" r=".35" />
            <circle cx="85.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bR)`}>
            <circle cx="83.77" cy="99.14" r=".35" />
            <circle cx="81.77" cy="99.14" r=".35" />
            <circle cx="84.77" cy="97.14" r=".35" />
            <circle cx="82.77" cy="97.14" r=".35" />
            <circle cx="80.77" cy="97.14" r=".35" />
            <circle cx="83.77" cy="95.14" r=".35" />
            <circle cx="81.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bS)`}>
            <circle cx="83.77" cy="103.14" r=".35" />
            <circle cx="81.77" cy="103.14" r=".35" />
            <circle cx="84.77" cy="101.14" r=".35" />
            <circle cx="82.77" cy="101.14" r=".35" />
            <circle cx="80.77" cy="101.14" r=".35" />
            <circle cx="83.77" cy="99.14" r=".35" />
            <circle cx="81.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ce)`}>
            <circle cx="79.77" cy="99.14" r=".35" />
            <circle cx="77.77" cy="99.14" r=".35" />
            <circle cx="80.77" cy="97.14" r=".35" />
            <circle cx="78.77" cy="97.14" r=".35" />
            <circle cx="76.77" cy="97.14" r=".35" />
            <circle cx="79.77" cy="95.14" r=".35" />
            <circle cx="77.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cf)`}>
            <circle cx="79.77" cy="103.14" r=".35" />
            <circle cx="77.77" cy="103.14" r=".35" />
            <circle cx="80.77" cy="101.14" r=".35" />
            <circle cx="78.77" cy="101.14" r=".35" />
            <circle cx="76.77" cy="101.14" r=".35" />
            <circle cx="79.77" cy="99.14" r=".35" />
            <circle cx="77.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cB)`}>
            <circle cx="75.77" cy="99.14" r=".35" />
            <circle cx="73.77" cy="99.14" r=".35" />
            <circle cx="76.77" cy="97.14" r=".35" />
            <circle cx="74.77" cy="97.14" r=".35" />
            <circle cx="72.77" cy="97.14" r=".35" />
            <circle cx="75.77" cy="95.14" r=".35" />
            <circle cx="73.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cC)`}>
            <circle cx="75.77" cy="103.14" r=".35" />
            <circle cx="73.77" cy="103.14" r=".35" />
            <circle cx="76.77" cy="101.14" r=".35" />
            <circle cx="74.77" cy="101.14" r=".35" />
            <circle cx="72.77" cy="101.14" r=".35" />
            <circle cx="75.77" cy="99.14" r=".35" />
            <circle cx="73.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cY)`}>
            <circle cx="71.77" cy="99.14" r=".35" />
            <circle cx="69.77" cy="99.14" r=".35" />
            <circle cx="72.77" cy="97.14" r=".35" />
            <circle cx="70.77" cy="97.14" r=".35" />
            <circle cx="68.77" cy="97.14" r=".35" />
            <circle cx="71.77" cy="95.14" r=".35" />
            <circle cx="69.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cZ)`}>
            <circle cx="71.77" cy="103.14" r=".35" />
            <circle cx="69.77" cy="103.14" r=".35" />
            <circle cx="72.77" cy="101.14" r=".35" />
            <circle cx="70.77" cy="101.14" r=".35" />
            <circle cx="68.77" cy="101.14" r=".35" />
            <circle cx="71.77" cy="99.14" r=".35" />
            <circle cx="69.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a5)`}>
            <circle cx="91.77" cy="91.14" r=".35" />
            <circle cx="89.77" cy="91.14" r=".35" />
            <circle cx="92.77" cy="89.14" r=".35" />
            <circle cx="90.77" cy="89.14" r=".35" />
            <circle cx="88.77" cy="89.14" r=".35" />
            <circle cx="91.77" cy="87.14" r=".35" />
            <circle cx="89.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a6)`}>
            <circle cx="91.77" cy="95.14" r=".35" />
            <circle cx="89.77" cy="95.14" r=".35" />
            <circle cx="92.77" cy="93.14" r=".35" />
            <circle cx="90.77" cy="93.14" r=".35" />
            <circle cx="88.77" cy="93.14" r=".35" />
            <circle cx="91.77" cy="91.14" r=".35" />
            <circle cx="89.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bs)`}>
            <circle cx="87.77" cy="91.14" r=".35" />
            <circle cx="85.77" cy="91.14" r=".35" />
            <circle cx="88.77" cy="89.14" r=".35" />
            <circle cx="86.77" cy="89.14" r=".35" />
            <circle cx="84.77" cy="89.14" r=".35" />
            <circle cx="87.77" cy="87.14" r=".35" />
            <circle cx="85.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bt)`}>
            <circle cx="87.77" cy="95.14" r=".35" />
            <circle cx="85.77" cy="95.14" r=".35" />
            <circle cx="88.77" cy="93.14" r=".35" />
            <circle cx="86.77" cy="93.14" r=".35" />
            <circle cx="84.77" cy="93.14" r=".35" />
            <circle cx="87.77" cy="91.14" r=".35" />
            <circle cx="85.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bP)`}>
            <circle cx="83.77" cy="91.14" r=".35" />
            <circle cx="81.77" cy="91.14" r=".35" />
            <circle cx="84.77" cy="89.14" r=".35" />
            <circle cx="82.77" cy="89.14" r=".35" />
            <circle cx="80.77" cy="89.14" r=".35" />
            <circle cx="83.77" cy="87.14" r=".35" />
            <circle cx="81.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bQ)`}>
            <circle cx="83.77" cy="95.14" r=".35" />
            <circle cx="81.77" cy="95.14" r=".35" />
            <circle cx="84.77" cy="93.14" r=".35" />
            <circle cx="82.77" cy="93.14" r=".35" />
            <circle cx="80.77" cy="93.14" r=".35" />
            <circle cx="83.77" cy="91.14" r=".35" />
            <circle cx="81.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cc)`}>
            <circle cx="79.77" cy="91.14" r=".35" />
            <circle cx="77.77" cy="91.14" r=".35" />
            <circle cx="80.77" cy="89.14" r=".35" />
            <circle cx="78.77" cy="89.14" r=".35" />
            <circle cx="76.77" cy="89.14" r=".35" />
            <circle cx="79.77" cy="87.14" r=".35" />
            <circle cx="77.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cd)`}>
            <circle cx="79.77" cy="95.14" r=".35" />
            <circle cx="77.77" cy="95.14" r=".35" />
            <circle cx="80.77" cy="93.14" r=".35" />
            <circle cx="78.77" cy="93.14" r=".35" />
            <circle cx="76.77" cy="93.14" r=".35" />
            <circle cx="79.77" cy="91.14" r=".35" />
            <circle cx="77.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cz)`}>
            <circle cx="75.77" cy="91.14" r=".35" />
            <circle cx="73.77" cy="91.14" r=".35" />
            <circle cx="76.77" cy="89.14" r=".35" />
            <circle cx="74.77" cy="89.14" r=".35" />
            <circle cx="72.77" cy="89.14" r=".35" />
            <circle cx="75.77" cy="87.14" r=".35" />
            <circle cx="73.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cA)`}>
            <circle cx="75.77" cy="95.14" r=".35" />
            <circle cx="73.77" cy="95.14" r=".35" />
            <circle cx="76.77" cy="93.14" r=".35" />
            <circle cx="74.77" cy="93.14" r=".35" />
            <circle cx="72.77" cy="93.14" r=".35" />
            <circle cx="75.77" cy="91.14" r=".35" />
            <circle cx="73.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cW)`}>
            <circle cx="71.77" cy="91.14" r=".35" />
            <circle cx="69.77" cy="91.14" r=".35" />
            <circle cx="72.77" cy="89.14" r=".35" />
            <circle cx="70.77" cy="89.14" r=".35" />
            <circle cx="68.77" cy="89.14" r=".35" />
            <circle cx="71.77" cy="87.14" r=".35" />
            <circle cx="69.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cX)`}>
            <circle cx="71.77" cy="95.14" r=".35" />
            <circle cx="69.77" cy="95.14" r=".35" />
            <circle cx="72.77" cy="93.14" r=".35" />
            <circle cx="70.77" cy="93.14" r=".35" />
            <circle cx="68.77" cy="93.14" r=".35" />
            <circle cx="71.77" cy="91.14" r=".35" />
            <circle cx="69.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a3)`}>
            <circle cx="91.77" cy="83.14" r=".35" />
            <circle cx="89.77" cy="83.14" r=".35" />
            <circle cx="92.77" cy="81.14" r=".35" />
            <circle cx="90.77" cy="81.14" r=".35" />
            <circle cx="88.77" cy="81.14" r=".35" />
            <circle cx="91.77" cy="79.14" r=".35" />
            <circle cx="89.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a4)`}>
            <circle cx="91.77" cy="87.14" r=".35" />
            <circle cx="89.77" cy="87.14" r=".35" />
            <circle cx="92.77" cy="85.14" r=".35" />
            <circle cx="90.77" cy="85.14" r=".35" />
            <circle cx="88.77" cy="85.14" r=".35" />
            <circle cx="91.77" cy="83.14" r=".35" />
            <circle cx="89.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bq)`}>
            <circle cx="87.77" cy="83.14" r=".35" />
            <circle cx="85.77" cy="83.14" r=".35" />
            <circle cx="88.77" cy="81.14" r=".35" />
            <circle cx="86.77" cy="81.14" r=".35" />
            <circle cx="84.77" cy="81.14" r=".35" />
            <circle cx="87.77" cy="79.14" r=".35" />
            <circle cx="85.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-br)`}>
            <circle cx="87.77" cy="87.14" r=".35" />
            <circle cx="85.77" cy="87.14" r=".35" />
            <circle cx="88.77" cy="85.14" r=".35" />
            <circle cx="86.77" cy="85.14" r=".35" />
            <circle cx="84.77" cy="85.14" r=".35" />
            <circle cx="87.77" cy="83.14" r=".35" />
            <circle cx="85.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bN)`}>
            <circle cx="83.77" cy="83.14" r=".35" />
            <circle cx="81.77" cy="83.14" r=".35" />
            <circle cx="84.77" cy="81.14" r=".35" />
            <circle cx="82.77" cy="81.14" r=".35" />
            <circle cx="80.77" cy="81.14" r=".35" />
            <circle cx="83.77" cy="79.14" r=".35" />
            <circle cx="81.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bO)`}>
            <circle cx="83.77" cy="87.14" r=".35" />
            <circle cx="81.77" cy="87.14" r=".35" />
            <circle cx="84.77" cy="85.14" r=".35" />
            <circle cx="82.77" cy="85.14" r=".35" />
            <circle cx="80.77" cy="85.14" r=".35" />
            <circle cx="83.77" cy="83.14" r=".35" />
            <circle cx="81.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ca)`}>
            <circle cx="79.77" cy="83.14" r=".35" />
            <circle cx="77.77" cy="83.14" r=".35" />
            <circle cx="80.77" cy="81.14" r=".35" />
            <circle cx="78.77" cy="81.14" r=".35" />
            <circle cx="76.77" cy="81.14" r=".35" />
            <circle cx="79.77" cy="79.14" r=".35" />
            <circle cx="77.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cb)`}>
            <circle cx="79.77" cy="87.14" r=".35" />
            <circle cx="77.77" cy="87.14" r=".35" />
            <circle cx="80.77" cy="85.14" r=".35" />
            <circle cx="78.77" cy="85.14" r=".35" />
            <circle cx="76.77" cy="85.14" r=".35" />
            <circle cx="79.77" cy="83.14" r=".35" />
            <circle cx="77.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cx)`}>
            <circle cx="75.77" cy="83.14" r=".35" />
            <circle cx="73.77" cy="83.14" r=".35" />
            <circle cx="76.77" cy="81.14" r=".35" />
            <circle cx="74.77" cy="81.14" r=".35" />
            <circle cx="72.77" cy="81.14" r=".35" />
            <circle cx="75.77" cy="79.14" r=".35" />
            <circle cx="73.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cy)`}>
            <circle cx="75.77" cy="87.14" r=".35" />
            <circle cx="73.77" cy="87.14" r=".35" />
            <circle cx="76.77" cy="85.14" r=".35" />
            <circle cx="74.77" cy="85.14" r=".35" />
            <circle cx="72.77" cy="85.14" r=".35" />
            <circle cx="75.77" cy="83.14" r=".35" />
            <circle cx="73.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cU)`}>
            <circle cx="71.77" cy="83.14" r=".35" />
            <circle cx="69.77" cy="83.14" r=".35" />
            <circle cx="72.77" cy="81.14" r=".35" />
            <circle cx="70.77" cy="81.14" r=".35" />
            <circle cx="68.77" cy="81.14" r=".35" />
            <circle cx="71.77" cy="79.14" r=".35" />
            <circle cx="69.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cV)`}>
            <circle cx="71.77" cy="87.14" r=".35" />
            <circle cx="69.77" cy="87.14" r=".35" />
            <circle cx="72.77" cy="85.14" r=".35" />
            <circle cx="70.77" cy="85.14" r=".35" />
            <circle cx="68.77" cy="85.14" r=".35" />
            <circle cx="71.77" cy="83.14" r=".35" />
            <circle cx="69.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a1)`}>
            <circle cx="91.77" cy="75.14" r=".35" />
            <circle cx="89.77" cy="75.14" r=".35" />
            <circle cx="92.77" cy="73.14" r=".35" />
            <circle cx="90.77" cy="73.14" r=".35" />
            <circle cx="88.77" cy="73.14" r=".35" />
            <circle cx="91.77" cy="71.14" r=".35" />
            <circle cx="89.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a2)`}>
            <circle cx="91.77" cy="79.14" r=".35" />
            <circle cx="89.77" cy="79.14" r=".35" />
            <circle cx="92.77" cy="77.14" r=".35" />
            <circle cx="90.77" cy="77.14" r=".35" />
            <circle cx="88.77" cy="77.14" r=".35" />
            <circle cx="91.77" cy="75.14" r=".35" />
            <circle cx="89.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bo)`}>
            <circle cx="87.77" cy="75.14" r=".35" />
            <circle cx="85.77" cy="75.14" r=".35" />
            <circle cx="88.77" cy="73.14" r=".35" />
            <circle cx="86.77" cy="73.14" r=".35" />
            <circle cx="84.77" cy="73.14" r=".35" />
            <circle cx="87.77" cy="71.14" r=".35" />
            <circle cx="85.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bp)`}>
            <circle cx="87.77" cy="79.14" r=".35" />
            <circle cx="85.77" cy="79.14" r=".35" />
            <circle cx="88.77" cy="77.14" r=".35" />
            <circle cx="86.77" cy="77.14" r=".35" />
            <circle cx="84.77" cy="77.14" r=".35" />
            <circle cx="87.77" cy="75.14" r=".35" />
            <circle cx="85.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bL)`}>
            <circle cx="83.77" cy="75.14" r=".35" />
            <circle cx="81.77" cy="75.14" r=".35" />
            <circle cx="84.77" cy="73.14" r=".35" />
            <circle cx="82.77" cy="73.14" r=".35" />
            <circle cx="80.77" cy="73.14" r=".35" />
            <circle cx="83.77" cy="71.14" r=".35" />
            <circle cx="81.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bM)`}>
            <circle cx="83.77" cy="79.14" r=".35" />
            <circle cx="81.77" cy="79.14" r=".35" />
            <circle cx="84.77" cy="77.14" r=".35" />
            <circle cx="82.77" cy="77.14" r=".35" />
            <circle cx="80.77" cy="77.14" r=".35" />
            <circle cx="83.77" cy="75.14" r=".35" />
            <circle cx="81.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b8)`}>
            <circle cx="79.77" cy="75.14" r=".35" />
            <circle cx="77.77" cy="75.14" r=".35" />
            <circle cx="80.77" cy="73.14" r=".35" />
            <circle cx="78.77" cy="73.14" r=".35" />
            <circle cx="76.77" cy="73.14" r=".35" />
            <circle cx="79.77" cy="71.14" r=".35" />
            <circle cx="77.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b9)`}>
            <circle cx="79.77" cy="79.14" r=".35" />
            <circle cx="77.77" cy="79.14" r=".35" />
            <circle cx="80.77" cy="77.14" r=".35" />
            <circle cx="78.77" cy="77.14" r=".35" />
            <circle cx="76.77" cy="77.14" r=".35" />
            <circle cx="79.77" cy="75.14" r=".35" />
            <circle cx="77.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cv)`}>
            <circle cx="75.77" cy="75.14" r=".35" />
            <circle cx="73.77" cy="75.14" r=".35" />
            <circle cx="76.77" cy="73.14" r=".35" />
            <circle cx="74.77" cy="73.14" r=".35" />
            <circle cx="72.77" cy="73.14" r=".35" />
            <circle cx="75.77" cy="71.14" r=".35" />
            <circle cx="73.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cw)`}>
            <circle cx="75.77" cy="79.14" r=".35" />
            <circle cx="73.77" cy="79.14" r=".35" />
            <circle cx="76.77" cy="77.14" r=".35" />
            <circle cx="74.77" cy="77.14" r=".35" />
            <circle cx="72.77" cy="77.14" r=".35" />
            <circle cx="75.77" cy="75.14" r=".35" />
            <circle cx="73.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cS)`}>
            <circle cx="71.77" cy="75.14" r=".35" />
            <circle cx="69.77" cy="75.14" r=".35" />
            <circle cx="72.77" cy="73.14" r=".35" />
            <circle cx="70.77" cy="73.14" r=".35" />
            <circle cx="68.77" cy="73.14" r=".35" />
            <circle cx="71.77" cy="71.14" r=".35" />
            <circle cx="69.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cT)`}>
            <circle cx="71.77" cy="79.14" r=".35" />
            <circle cx="69.77" cy="79.14" r=".35" />
            <circle cx="72.77" cy="77.14" r=".35" />
            <circle cx="70.77" cy="77.14" r=".35" />
            <circle cx="68.77" cy="77.14" r=".35" />
            <circle cx="71.77" cy="75.14" r=".35" />
            <circle cx="69.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aX)`}>
            <circle cx="91.77" cy="59.14" r=".35" />
            <circle cx="89.77" cy="59.14" r=".35" />
            <circle cx="92.77" cy="57.14" r=".35" />
            <circle cx="90.77" cy="57.14" r=".35" />
            <circle cx="88.77" cy="57.14" r=".35" />
            <circle cx="91.77" cy="55.14" r=".35" />
            <circle cx="89.77" cy="55.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aY)`}>
            <circle cx="91.77" cy="63.14" r=".35" />
            <circle cx="89.77" cy="63.14" r=".35" />
            <circle cx="92.77" cy="61.14" r=".35" />
            <circle cx="90.77" cy="61.14" r=".35" />
            <circle cx="88.77" cy="61.14" r=".35" />
            <circle cx="91.77" cy="59.14" r=".35" />
            <circle cx="89.77" cy="59.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bk)`}>
            <circle cx="87.77" cy="59.14" r=".35" />
            <circle cx="85.77" cy="59.14" r=".35" />
            <circle cx="88.77" cy="57.14" r=".35" />
            <circle cx="86.77" cy="57.14" r=".35" />
            <circle cx="84.77" cy="57.14" r=".35" />
            <circle cx="87.77" cy="55.14" r=".35" />
            <circle cx="85.77" cy="55.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bl)`}>
            <circle cx="87.77" cy="63.14" r=".35" />
            <circle cx="85.77" cy="63.14" r=".35" />
            <circle cx="88.77" cy="61.14" r=".35" />
            <circle cx="86.77" cy="61.14" r=".35" />
            <circle cx="84.77" cy="61.14" r=".35" />
            <circle cx="87.77" cy="59.14" r=".35" />
            <circle cx="85.77" cy="59.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bH)`}>
            <circle cx="83.77" cy="59.14" r=".35" />
            <circle cx="81.77" cy="59.14" r=".35" />
            <circle cx="84.77" cy="57.14" r=".35" />
            <circle cx="82.77" cy="57.14" r=".35" />
            <circle cx="80.77" cy="57.14" r=".35" />
            <circle cx="83.77" cy="55.14" r=".35" />
            <circle cx="81.77" cy="55.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bI)`}>
            <circle cx="83.77" cy="63.14" r=".35" />
            <circle cx="81.77" cy="63.14" r=".35" />
            <circle cx="84.77" cy="61.14" r=".35" />
            <circle cx="82.77" cy="61.14" r=".35" />
            <circle cx="80.77" cy="61.14" r=".35" />
            <circle cx="83.77" cy="59.14" r=".35" />
            <circle cx="81.77" cy="59.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b4)`}>
            <circle cx="79.77" cy="59.14" r=".35" />
            <circle cx="77.77" cy="59.14" r=".35" />
            <circle cx="80.77" cy="57.14" r=".35" />
            <circle cx="78.77" cy="57.14" r=".35" />
            <circle cx="76.77" cy="57.14" r=".35" />
            <circle cx="79.77" cy="55.14" r=".35" />
            <circle cx="77.77" cy="55.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b5)`}>
            <circle cx="79.77" cy="63.14" r=".35" />
            <circle cx="77.77" cy="63.14" r=".35" />
            <circle cx="80.77" cy="61.14" r=".35" />
            <circle cx="78.77" cy="61.14" r=".35" />
            <circle cx="76.77" cy="61.14" r=".35" />
            <circle cx="79.77" cy="59.14" r=".35" />
            <circle cx="77.77" cy="59.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cr)`}>
            <circle cx="75.77" cy="59.14" r=".35" />
            <circle cx="73.77" cy="59.14" r=".35" />
            <circle cx="76.77" cy="57.14" r=".35" />
            <circle cx="74.77" cy="57.14" r=".35" />
            <circle cx="72.77" cy="57.14" r=".35" />
            <circle cx="75.77" cy="55.14" r=".35" />
            <circle cx="73.77" cy="55.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cs)`}>
            <circle cx="75.77" cy="63.14" r=".35" />
            <circle cx="73.77" cy="63.14" r=".35" />
            <circle cx="76.77" cy="61.14" r=".35" />
            <circle cx="74.77" cy="61.14" r=".35" />
            <circle cx="72.77" cy="61.14" r=".35" />
            <circle cx="75.77" cy="59.14" r=".35" />
            <circle cx="73.77" cy="59.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cO)`}>
            <circle cx="71.77" cy="59.14" r=".35" />
            <circle cx="69.77" cy="59.14" r=".35" />
            <circle cx="72.77" cy="57.14" r=".35" />
            <circle cx="70.77" cy="57.14" r=".35" />
            <circle cx="68.77" cy="57.14" r=".35" />
            <circle cx="71.77" cy="55.14" r=".35" />
            <circle cx="69.77" cy="55.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cP)`}>
            <circle cx="71.77" cy="63.14" r=".35" />
            <circle cx="69.77" cy="63.14" r=".35" />
            <circle cx="72.77" cy="61.14" r=".35" />
            <circle cx="70.77" cy="61.14" r=".35" />
            <circle cx="68.77" cy="61.14" r=".35" />
            <circle cx="71.77" cy="59.14" r=".35" />
            <circle cx="69.77" cy="59.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-db)`}>
            <circle cx="67.77" cy="59.14" r=".35" />
            <circle cx="65.77" cy="59.14" r=".35" />
            <circle cx="68.77" cy="57.14" r=".35" />
            <circle cx="66.77" cy="57.14" r=".35" />
            <circle cx="64.77" cy="57.14" r=".35" />
            <circle cx="67.77" cy="55.14" r=".35" />
            <circle cx="65.77" cy="55.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dc)`}>
            <circle cx="67.77" cy="63.14" r=".35" />
            <circle cx="65.77" cy="63.14" r=".35" />
            <circle cx="68.77" cy="61.14" r=".35" />
            <circle cx="66.77" cy="61.14" r=".35" />
            <circle cx="64.77" cy="61.14" r=".35" />
            <circle cx="67.77" cy="59.14" r=".35" />
            <circle cx="65.77" cy="59.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dy)`}>
            <circle cx="63.77" cy="59.14" r=".35" />
            <circle cx="61.77" cy="59.14" r=".35" />
            <circle cx="64.77" cy="57.14" r=".35" />
            <circle cx="62.77" cy="57.14" r=".35" />
            <circle cx="60.77" cy="57.14" r=".35" />
            <circle cx="63.77" cy="55.14" r=".35" />
            <circle cx="61.77" cy="55.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dz)`}>
            <circle cx="63.77" cy="63.14" r=".35" />
            <circle cx="61.77" cy="63.14" r=".35" />
            <circle cx="64.77" cy="61.14" r=".35" />
            <circle cx="62.77" cy="61.14" r=".35" />
            <circle cx="60.77" cy="61.14" r=".35" />
            <circle cx="63.77" cy="59.14" r=".35" />
            <circle cx="61.77" cy="59.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dV)`}>
            <circle cx="59.77" cy="59.14" r=".35" />
            <circle cx="57.77" cy="59.14" r=".35" />
            <circle cx="60.77" cy="57.14" r=".35" />
            <circle cx="58.77" cy="57.14" r=".35" />
            <circle cx="56.77" cy="57.14" r=".35" />
            <circle cx="59.77" cy="55.14" r=".35" />
            <circle cx="57.77" cy="55.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dW)`}>
            <circle cx="59.77" cy="63.14" r=".35" />
            <circle cx="57.77" cy="63.14" r=".35" />
            <circle cx="60.77" cy="61.14" r=".35" />
            <circle cx="58.77" cy="61.14" r=".35" />
            <circle cx="56.77" cy="61.14" r=".35" />
            <circle cx="59.77" cy="59.14" r=".35" />
            <circle cx="57.77" cy="59.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ei)`}>
            <circle cx="55.77" cy="59.14" r=".35" />
            <circle cx="53.77" cy="59.14" r=".35" />
            <circle cx="56.77" cy="57.14" r=".35" />
            <circle cx="54.77" cy="57.14" r=".35" />
            <circle cx="52.77" cy="57.14" r=".35" />
            <circle cx="55.77" cy="55.14" r=".35" />
            <circle cx="53.77" cy="55.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ej)`}>
            <circle cx="55.77" cy="63.14" r=".35" />
            <circle cx="53.77" cy="63.14" r=".35" />
            <circle cx="56.77" cy="61.14" r=".35" />
            <circle cx="54.77" cy="61.14" r=".35" />
            <circle cx="52.77" cy="61.14" r=".35" />
            <circle cx="55.77" cy="59.14" r=".35" />
            <circle cx="53.77" cy="59.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eF)`}>
            <circle cx="51.77" cy="59.14" r=".35" />
            <circle cx="49.77" cy="59.14" r=".35" />
            <circle cx="52.77" cy="57.14" r=".35" />
            <circle cx="50.77" cy="57.14" r=".35" />
            <circle cx="48.77" cy="57.14" r=".35" />
            <circle cx="51.77" cy="55.14" r=".35" />
            <circle cx="49.77" cy="55.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eG)`}>
            <circle cx="51.77" cy="63.14" r=".35" />
            <circle cx="49.77" cy="63.14" r=".35" />
            <circle cx="52.77" cy="61.14" r=".35" />
            <circle cx="50.77" cy="61.14" r=".35" />
            <circle cx="48.77" cy="61.14" r=".35" />
            <circle cx="51.77" cy="59.14" r=".35" />
            <circle cx="49.77" cy="59.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-e2)`}>
            <circle cx="47.77" cy="59.14" r=".35" />
            <circle cx="45.77" cy="59.14" r=".35" />
            <circle cx="48.77" cy="57.14" r=".35" />
            <circle cx="46.77" cy="57.14" r=".35" />
            <circle cx="44.77" cy="57.14" r=".35" />
            <circle cx="47.77" cy="55.14" r=".35" />
            <circle cx="45.77" cy="55.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-e3)`}>
            <circle cx="47.77" cy="63.14" r=".35" />
            <circle cx="45.77" cy="63.14" r=".35" />
            <circle cx="48.77" cy="61.14" r=".35" />
            <circle cx="46.77" cy="61.14" r=".35" />
            <circle cx="44.77" cy="61.14" r=".35" />
            <circle cx="47.77" cy="59.14" r=".35" />
            <circle cx="45.77" cy="59.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aW)`}>
            <circle cx="91.77" cy="55.14" r=".35" />
            <circle cx="89.77" cy="55.14" r=".35" />
            <circle cx="92.77" cy="53.14" r=".35" />
            <circle cx="90.77" cy="53.14" r=".35" />
            <circle cx="88.77" cy="53.14" r=".35" />
            <circle cx="91.77" cy="51.14" r=".35" />
            <circle cx="89.77" cy="51.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bj)`}>
            <circle cx="87.77" cy="55.14" r=".35" />
            <circle cx="85.77" cy="55.14" r=".35" />
            <circle cx="88.77" cy="53.14" r=".35" />
            <circle cx="86.77" cy="53.14" r=".35" />
            <circle cx="84.77" cy="53.14" r=".35" />
            <circle cx="87.77" cy="51.14" r=".35" />
            <circle cx="85.77" cy="51.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bG)`}>
            <circle cx="83.77" cy="55.14" r=".35" />
            <circle cx="81.77" cy="55.14" r=".35" />
            <circle cx="84.77" cy="53.14" r=".35" />
            <circle cx="82.77" cy="53.14" r=".35" />
            <circle cx="80.77" cy="53.14" r=".35" />
            <circle cx="83.77" cy="51.14" r=".35" />
            <circle cx="81.77" cy="51.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b3)`}>
            <circle cx="79.77" cy="55.14" r=".35" />
            <circle cx="77.77" cy="55.14" r=".35" />
            <circle cx="80.77" cy="53.14" r=".35" />
            <circle cx="78.77" cy="53.14" r=".35" />
            <circle cx="76.77" cy="53.14" r=".35" />
            <circle cx="79.77" cy="51.14" r=".35" />
            <circle cx="77.77" cy="51.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cq)`}>
            <circle cx="75.77" cy="55.14" r=".35" />
            <circle cx="73.77" cy="55.14" r=".35" />
            <circle cx="76.77" cy="53.14" r=".35" />
            <circle cx="74.77" cy="53.14" r=".35" />
            <circle cx="72.77" cy="53.14" r=".35" />
            <circle cx="75.77" cy="51.14" r=".35" />
            <circle cx="73.77" cy="51.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cN)`}>
            <circle cx="71.77" cy="55.14" r=".35" />
            <circle cx="69.77" cy="55.14" r=".35" />
            <circle cx="72.77" cy="53.14" r=".35" />
            <circle cx="70.77" cy="53.14" r=".35" />
            <circle cx="68.77" cy="53.14" r=".35" />
            <circle cx="71.77" cy="51.14" r=".35" />
            <circle cx="69.77" cy="51.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-da)`}>
            <circle cx="67.77" cy="55.14" r=".35" />
            <circle cx="65.77" cy="55.14" r=".35" />
            <circle cx="68.77" cy="53.14" r=".35" />
            <circle cx="66.77" cy="53.14" r=".35" />
            <circle cx="64.77" cy="53.14" r=".35" />
            <circle cx="67.77" cy="51.14" r=".35" />
            <circle cx="65.77" cy="51.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dx)`}>
            <circle cx="63.77" cy="55.14" r=".35" />
            <circle cx="61.77" cy="55.14" r=".35" />
            <circle cx="64.77" cy="53.14" r=".35" />
            <circle cx="62.77" cy="53.14" r=".35" />
            <circle cx="60.77" cy="53.14" r=".35" />
            <circle cx="63.77" cy="51.14" r=".35" />
            <circle cx="61.77" cy="51.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dU)`}>
            <circle cx="59.77" cy="55.14" r=".35" />
            <circle cx="57.77" cy="55.14" r=".35" />
            <circle cx="60.77" cy="53.14" r=".35" />
            <circle cx="58.77" cy="53.14" r=".35" />
            <circle cx="56.77" cy="53.14" r=".35" />
            <circle cx="59.77" cy="51.14" r=".35" />
            <circle cx="57.77" cy="51.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eh)`}>
            <circle cx="55.77" cy="55.14" r=".35" />
            <circle cx="53.77" cy="55.14" r=".35" />
            <circle cx="56.77" cy="53.14" r=".35" />
            <circle cx="54.77" cy="53.14" r=".35" />
            <circle cx="52.77" cy="53.14" r=".35" />
            <circle cx="55.77" cy="51.14" r=".35" />
            <circle cx="53.77" cy="51.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eE)`}>
            <circle cx="51.77" cy="55.14" r=".35" />
            <circle cx="49.77" cy="55.14" r=".35" />
            <circle cx="52.77" cy="53.14" r=".35" />
            <circle cx="50.77" cy="53.14" r=".35" />
            <circle cx="48.77" cy="53.14" r=".35" />
            <circle cx="51.77" cy="51.14" r=".35" />
            <circle cx="49.77" cy="51.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-e1)`}>
            <circle cx="47.77" cy="55.14" r=".35" />
            <circle cx="45.77" cy="55.14" r=".35" />
            <circle cx="48.77" cy="53.14" r=".35" />
            <circle cx="46.77" cy="53.14" r=".35" />
            <circle cx="44.77" cy="53.14" r=".35" />
            <circle cx="47.77" cy="51.14" r=".35" />
            <circle cx="45.77" cy="51.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aU)`}>
            <circle cx="91.77" cy="47.14" r=".35" />
            <circle cx="89.77" cy="47.14" r=".35" />
            <circle cx="92.77" cy="45.14" r=".35" />
            <circle cx="90.77" cy="45.14" r=".35" />
            <circle cx="88.77" cy="45.14" r=".35" />
            <circle cx="91.77" cy="43.14" r=".35" />
            <circle cx="89.77" cy="43.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aV)`}>
            <circle cx="91.77" cy="51.14" r=".35" />
            <circle cx="89.77" cy="51.14" r=".35" />
            <circle cx="92.77" cy="49.14" r=".35" />
            <circle cx="90.77" cy="49.14" r=".35" />
            <circle cx="88.77" cy="49.14" r=".35" />
            <circle cx="91.77" cy="47.14" r=".35" />
            <circle cx="89.77" cy="47.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bh)`}>
            <circle cx="87.77" cy="47.14" r=".35" />
            <circle cx="85.77" cy="47.14" r=".35" />
            <circle cx="88.77" cy="45.14" r=".35" />
            <circle cx="86.77" cy="45.14" r=".35" />
            <circle cx="84.77" cy="45.14" r=".35" />
            <circle cx="87.77" cy="43.14" r=".35" />
            <circle cx="85.77" cy="43.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bi)`}>
            <circle cx="87.77" cy="51.14" r=".35" />
            <circle cx="85.77" cy="51.14" r=".35" />
            <circle cx="88.77" cy="49.14" r=".35" />
            <circle cx="86.77" cy="49.14" r=".35" />
            <circle cx="84.77" cy="49.14" r=".35" />
            <circle cx="87.77" cy="47.14" r=".35" />
            <circle cx="85.77" cy="47.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bE)`}>
            <circle cx="83.77" cy="47.14" r=".35" />
            <circle cx="81.77" cy="47.14" r=".35" />
            <circle cx="84.77" cy="45.14" r=".35" />
            <circle cx="82.77" cy="45.14" r=".35" />
            <circle cx="80.77" cy="45.14" r=".35" />
            <circle cx="83.77" cy="43.14" r=".35" />
            <circle cx="81.77" cy="43.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bF)`}>
            <circle cx="83.77" cy="51.14" r=".35" />
            <circle cx="81.77" cy="51.14" r=".35" />
            <circle cx="84.77" cy="49.14" r=".35" />
            <circle cx="82.77" cy="49.14" r=".35" />
            <circle cx="80.77" cy="49.14" r=".35" />
            <circle cx="83.77" cy="47.14" r=".35" />
            <circle cx="81.77" cy="47.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b1)`}>
            <circle cx="79.77" cy="47.14" r=".35" />
            <circle cx="77.77" cy="47.14" r=".35" />
            <circle cx="80.77" cy="45.14" r=".35" />
            <circle cx="78.77" cy="45.14" r=".35" />
            <circle cx="76.77" cy="45.14" r=".35" />
            <circle cx="79.77" cy="43.14" r=".35" />
            <circle cx="77.77" cy="43.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b2)`}>
            <circle cx="79.77" cy="51.14" r=".35" />
            <circle cx="77.77" cy="51.14" r=".35" />
            <circle cx="80.77" cy="49.14" r=".35" />
            <circle cx="78.77" cy="49.14" r=".35" />
            <circle cx="76.77" cy="49.14" r=".35" />
            <circle cx="79.77" cy="47.14" r=".35" />
            <circle cx="77.77" cy="47.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-co)`}>
            <circle cx="75.77" cy="47.14" r=".35" />
            <circle cx="73.77" cy="47.14" r=".35" />
            <circle cx="76.77" cy="45.14" r=".35" />
            <circle cx="74.77" cy="45.14" r=".35" />
            <circle cx="72.77" cy="45.14" r=".35" />
            <circle cx="75.77" cy="43.14" r=".35" />
            <circle cx="73.77" cy="43.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cp)`}>
            <circle cx="75.77" cy="51.14" r=".35" />
            <circle cx="73.77" cy="51.14" r=".35" />
            <circle cx="76.77" cy="49.14" r=".35" />
            <circle cx="74.77" cy="49.14" r=".35" />
            <circle cx="72.77" cy="49.14" r=".35" />
            <circle cx="75.77" cy="47.14" r=".35" />
            <circle cx="73.77" cy="47.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cL)`}>
            <circle cx="71.77" cy="47.14" r=".35" />
            <circle cx="69.77" cy="47.14" r=".35" />
            <circle cx="72.77" cy="45.14" r=".35" />
            <circle cx="70.77" cy="45.14" r=".35" />
            <circle cx="68.77" cy="45.14" r=".35" />
            <circle cx="71.77" cy="43.14" r=".35" />
            <circle cx="69.77" cy="43.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cM)`}>
            <circle cx="71.77" cy="51.14" r=".35" />
            <circle cx="69.77" cy="51.14" r=".35" />
            <circle cx="72.77" cy="49.14" r=".35" />
            <circle cx="70.77" cy="49.14" r=".35" />
            <circle cx="68.77" cy="49.14" r=".35" />
            <circle cx="71.77" cy="47.14" r=".35" />
            <circle cx="69.77" cy="47.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-c8)`}>
            <circle cx="67.77" cy="47.14" r=".35" />
            <circle cx="65.77" cy="47.14" r=".35" />
            <circle cx="68.77" cy="45.14" r=".35" />
            <circle cx="66.77" cy="45.14" r=".35" />
            <circle cx="64.77" cy="45.14" r=".35" />
            <circle cx="67.77" cy="43.14" r=".35" />
            <circle cx="65.77" cy="43.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-c9)`}>
            <circle cx="67.77" cy="51.14" r=".35" />
            <circle cx="65.77" cy="51.14" r=".35" />
            <circle cx="68.77" cy="49.14" r=".35" />
            <circle cx="66.77" cy="49.14" r=".35" />
            <circle cx="64.77" cy="49.14" r=".35" />
            <circle cx="67.77" cy="47.14" r=".35" />
            <circle cx="65.77" cy="47.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dv)`}>
            <circle cx="63.77" cy="47.14" r=".35" />
            <circle cx="61.77" cy="47.14" r=".35" />
            <circle cx="64.77" cy="45.14" r=".35" />
            <circle cx="62.77" cy="45.14" r=".35" />
            <circle cx="60.77" cy="45.14" r=".35" />
            <circle cx="63.77" cy="43.14" r=".35" />
            <circle cx="61.77" cy="43.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dw)`}>
            <circle cx="63.77" cy="51.14" r=".35" />
            <circle cx="61.77" cy="51.14" r=".35" />
            <circle cx="64.77" cy="49.14" r=".35" />
            <circle cx="62.77" cy="49.14" r=".35" />
            <circle cx="60.77" cy="49.14" r=".35" />
            <circle cx="63.77" cy="47.14" r=".35" />
            <circle cx="61.77" cy="47.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dS)`}>
            <circle cx="59.77" cy="47.14" r=".35" />
            <circle cx="57.77" cy="47.14" r=".35" />
            <circle cx="60.77" cy="45.14" r=".35" />
            <circle cx="58.77" cy="45.14" r=".35" />
            <circle cx="56.77" cy="45.14" r=".35" />
            <circle cx="59.77" cy="43.14" r=".35" />
            <circle cx="57.77" cy="43.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dT)`}>
            <circle cx="59.77" cy="51.14" r=".35" />
            <circle cx="57.77" cy="51.14" r=".35" />
            <circle cx="60.77" cy="49.14" r=".35" />
            <circle cx="58.77" cy="49.14" r=".35" />
            <circle cx="56.77" cy="49.14" r=".35" />
            <circle cx="59.77" cy="47.14" r=".35" />
            <circle cx="57.77" cy="47.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ef)`}>
            <circle cx="55.77" cy="47.14" r=".35" />
            <circle cx="53.77" cy="47.14" r=".35" />
            <circle cx="56.77" cy="45.14" r=".35" />
            <circle cx="54.77" cy="45.14" r=".35" />
            <circle cx="52.77" cy="45.14" r=".35" />
            <circle cx="55.77" cy="43.14" r=".35" />
            <circle cx="53.77" cy="43.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eg)`}>
            <circle cx="55.77" cy="51.14" r=".35" />
            <circle cx="53.77" cy="51.14" r=".35" />
            <circle cx="56.77" cy="49.14" r=".35" />
            <circle cx="54.77" cy="49.14" r=".35" />
            <circle cx="52.77" cy="49.14" r=".35" />
            <circle cx="55.77" cy="47.14" r=".35" />
            <circle cx="53.77" cy="47.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eC)`}>
            <circle cx="51.77" cy="47.14" r=".35" />
            <circle cx="49.77" cy="47.14" r=".35" />
            <circle cx="52.77" cy="45.14" r=".35" />
            <circle cx="50.77" cy="45.14" r=".35" />
            <circle cx="48.77" cy="45.14" r=".35" />
            <circle cx="51.77" cy="43.14" r=".35" />
            <circle cx="49.77" cy="43.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eD)`}>
            <circle cx="51.77" cy="51.14" r=".35" />
            <circle cx="49.77" cy="51.14" r=".35" />
            <circle cx="52.77" cy="49.14" r=".35" />
            <circle cx="50.77" cy="49.14" r=".35" />
            <circle cx="48.77" cy="49.14" r=".35" />
            <circle cx="51.77" cy="47.14" r=".35" />
            <circle cx="49.77" cy="47.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eZ)`}>
            <circle cx="47.77" cy="47.14" r=".35" />
            <circle cx="45.77" cy="47.14" r=".35" />
            <circle cx="48.77" cy="45.14" r=".35" />
            <circle cx="46.77" cy="45.14" r=".35" />
            <circle cx="44.77" cy="45.14" r=".35" />
            <circle cx="47.77" cy="43.14" r=".35" />
            <circle cx="45.77" cy="43.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-e0)`}>
            <circle cx="47.77" cy="51.14" r=".35" />
            <circle cx="45.77" cy="51.14" r=".35" />
            <circle cx="48.77" cy="49.14" r=".35" />
            <circle cx="46.77" cy="49.14" r=".35" />
            <circle cx="44.77" cy="49.14" r=".35" />
            <circle cx="47.77" cy="47.14" r=".35" />
            <circle cx="45.77" cy="47.14" r=".35" />
          </g>
        </g>
        <g clipPath={`url(#${id}-gM)`} fill="#feca1e">
          <g clipPath={`url(#${id}-aD)`}>
            <circle cx="95.77" cy="71.14" r=".35" />
            <circle cx="93.77" cy="71.14" r=".35" />
            <circle cx="96.77" cy="69.14" r=".35" />
            <circle cx="94.77" cy="69.14" r=".35" />
            <circle cx="92.77" cy="69.14" r=".35" />
            <circle cx="95.77" cy="67.14" r=".35" />
            <circle cx="93.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aE)`}>
            <circle cx="95.77" cy="75.14" r=".35" />
            <circle cx="93.77" cy="75.14" r=".35" />
            <circle cx="96.77" cy="73.14" r=".35" />
            <circle cx="94.77" cy="73.14" r=".35" />
            <circle cx="92.77" cy="73.14" r=".35" />
            <circle cx="95.77" cy="71.14" r=".35" />
            <circle cx="93.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aF)`}>
            <circle cx="95.77" cy="79.14" r=".35" />
            <circle cx="93.77" cy="79.14" r=".35" />
            <circle cx="96.77" cy="77.14" r=".35" />
            <circle cx="94.77" cy="77.14" r=".35" />
            <circle cx="92.77" cy="77.14" r=".35" />
            <circle cx="95.77" cy="75.14" r=".35" />
            <circle cx="93.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aG)`}>
            <circle cx="95.77" cy="83.14" r=".35" />
            <circle cx="93.77" cy="83.14" r=".35" />
            <circle cx="96.77" cy="81.14" r=".35" />
            <circle cx="94.77" cy="81.14" r=".35" />
            <circle cx="92.77" cy="81.14" r=".35" />
            <circle cx="95.77" cy="79.14" r=".35" />
            <circle cx="93.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aH)`}>
            <circle cx="95.77" cy="87.14" r=".35" />
            <circle cx="93.77" cy="87.14" r=".35" />
            <circle cx="96.77" cy="85.14" r=".35" />
            <circle cx="94.77" cy="85.14" r=".35" />
            <circle cx="92.77" cy="85.14" r=".35" />
            <circle cx="95.77" cy="83.14" r=".35" />
            <circle cx="93.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aI)`}>
            <circle cx="95.77" cy="91.14" r=".35" />
            <circle cx="93.77" cy="91.14" r=".35" />
            <circle cx="96.77" cy="89.14" r=".35" />
            <circle cx="94.77" cy="89.14" r=".35" />
            <circle cx="92.77" cy="89.14" r=".35" />
            <circle cx="95.77" cy="87.14" r=".35" />
            <circle cx="93.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aJ)`}>
            <circle cx="95.77" cy="95.14" r=".35" />
            <circle cx="93.77" cy="95.14" r=".35" />
            <circle cx="96.77" cy="93.14" r=".35" />
            <circle cx="94.77" cy="93.14" r=".35" />
            <circle cx="92.77" cy="93.14" r=".35" />
            <circle cx="95.77" cy="91.14" r=".35" />
            <circle cx="93.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aK)`}>
            <circle cx="95.77" cy="99.14" r=".35" />
            <circle cx="93.77" cy="99.14" r=".35" />
            <circle cx="96.77" cy="97.14" r=".35" />
            <circle cx="94.77" cy="97.14" r=".35" />
            <circle cx="92.77" cy="97.14" r=".35" />
            <circle cx="95.77" cy="95.14" r=".35" />
            <circle cx="93.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aL)`}>
            <circle cx="95.77" cy="103.14" r=".35" />
            <circle cx="93.77" cy="103.14" r=".35" />
            <circle cx="96.77" cy="101.14" r=".35" />
            <circle cx="94.77" cy="101.14" r=".35" />
            <circle cx="92.77" cy="101.14" r=".35" />
            <circle cx="95.77" cy="99.14" r=".35" />
            <circle cx="93.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aM)`}>
            <circle cx="95.77" cy="107.14" r=".35" />
            <circle cx="93.77" cy="107.14" r=".35" />
            <circle cx="96.77" cy="105.14" r=".35" />
            <circle cx="94.77" cy="105.14" r=".35" />
            <circle cx="92.77" cy="105.14" r=".35" />
            <circle cx="95.77" cy="103.14" r=".35" />
            <circle cx="93.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a0)`}>
            <circle cx="91.77" cy="71.14" r=".35" />
            <circle cx="89.77" cy="71.14" r=".35" />
            <circle cx="92.77" cy="69.14" r=".35" />
            <circle cx="90.77" cy="69.14" r=".35" />
            <circle cx="88.77" cy="69.14" r=".35" />
            <circle cx="91.77" cy="67.14" r=".35" />
            <circle cx="89.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a1)`}>
            <circle cx="91.77" cy="75.14" r=".35" />
            <circle cx="89.77" cy="75.14" r=".35" />
            <circle cx="92.77" cy="73.14" r=".35" />
            <circle cx="90.77" cy="73.14" r=".35" />
            <circle cx="88.77" cy="73.14" r=".35" />
            <circle cx="91.77" cy="71.14" r=".35" />
            <circle cx="89.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a2)`}>
            <circle cx="91.77" cy="79.14" r=".35" />
            <circle cx="89.77" cy="79.14" r=".35" />
            <circle cx="92.77" cy="77.14" r=".35" />
            <circle cx="90.77" cy="77.14" r=".35" />
            <circle cx="88.77" cy="77.14" r=".35" />
            <circle cx="91.77" cy="75.14" r=".35" />
            <circle cx="89.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a3)`}>
            <circle cx="91.77" cy="83.14" r=".35" />
            <circle cx="89.77" cy="83.14" r=".35" />
            <circle cx="92.77" cy="81.14" r=".35" />
            <circle cx="90.77" cy="81.14" r=".35" />
            <circle cx="88.77" cy="81.14" r=".35" />
            <circle cx="91.77" cy="79.14" r=".35" />
            <circle cx="89.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a4)`}>
            <circle cx="91.77" cy="87.14" r=".35" />
            <circle cx="89.77" cy="87.14" r=".35" />
            <circle cx="92.77" cy="85.14" r=".35" />
            <circle cx="90.77" cy="85.14" r=".35" />
            <circle cx="88.77" cy="85.14" r=".35" />
            <circle cx="91.77" cy="83.14" r=".35" />
            <circle cx="89.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a5)`}>
            <circle cx="91.77" cy="91.14" r=".35" />
            <circle cx="89.77" cy="91.14" r=".35" />
            <circle cx="92.77" cy="89.14" r=".35" />
            <circle cx="90.77" cy="89.14" r=".35" />
            <circle cx="88.77" cy="89.14" r=".35" />
            <circle cx="91.77" cy="87.14" r=".35" />
            <circle cx="89.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a6)`}>
            <circle cx="91.77" cy="95.14" r=".35" />
            <circle cx="89.77" cy="95.14" r=".35" />
            <circle cx="92.77" cy="93.14" r=".35" />
            <circle cx="90.77" cy="93.14" r=".35" />
            <circle cx="88.77" cy="93.14" r=".35" />
            <circle cx="91.77" cy="91.14" r=".35" />
            <circle cx="89.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a7)`}>
            <circle cx="91.77" cy="99.14" r=".35" />
            <circle cx="89.77" cy="99.14" r=".35" />
            <circle cx="92.77" cy="97.14" r=".35" />
            <circle cx="90.77" cy="97.14" r=".35" />
            <circle cx="88.77" cy="97.14" r=".35" />
            <circle cx="91.77" cy="95.14" r=".35" />
            <circle cx="89.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a8)`}>
            <circle cx="91.77" cy="103.14" r=".35" />
            <circle cx="89.77" cy="103.14" r=".35" />
            <circle cx="92.77" cy="101.14" r=".35" />
            <circle cx="90.77" cy="101.14" r=".35" />
            <circle cx="88.77" cy="101.14" r=".35" />
            <circle cx="91.77" cy="99.14" r=".35" />
            <circle cx="89.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a9)`}>
            <circle cx="91.77" cy="107.14" r=".35" />
            <circle cx="89.77" cy="107.14" r=".35" />
            <circle cx="92.77" cy="105.14" r=".35" />
            <circle cx="90.77" cy="105.14" r=".35" />
            <circle cx="88.77" cy="105.14" r=".35" />
            <circle cx="91.77" cy="103.14" r=".35" />
            <circle cx="89.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bn)`}>
            <circle cx="87.77" cy="71.14" r=".35" />
            <circle cx="85.77" cy="71.14" r=".35" />
            <circle cx="88.77" cy="69.14" r=".35" />
            <circle cx="86.77" cy="69.14" r=".35" />
            <circle cx="84.77" cy="69.14" r=".35" />
            <circle cx="87.77" cy="67.14" r=".35" />
            <circle cx="85.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bo)`}>
            <circle cx="87.77" cy="75.14" r=".35" />
            <circle cx="85.77" cy="75.14" r=".35" />
            <circle cx="88.77" cy="73.14" r=".35" />
            <circle cx="86.77" cy="73.14" r=".35" />
            <circle cx="84.77" cy="73.14" r=".35" />
            <circle cx="87.77" cy="71.14" r=".35" />
            <circle cx="85.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bp)`}>
            <circle cx="87.77" cy="79.14" r=".35" />
            <circle cx="85.77" cy="79.14" r=".35" />
            <circle cx="88.77" cy="77.14" r=".35" />
            <circle cx="86.77" cy="77.14" r=".35" />
            <circle cx="84.77" cy="77.14" r=".35" />
            <circle cx="87.77" cy="75.14" r=".35" />
            <circle cx="85.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bq)`}>
            <circle cx="87.77" cy="83.14" r=".35" />
            <circle cx="85.77" cy="83.14" r=".35" />
            <circle cx="88.77" cy="81.14" r=".35" />
            <circle cx="86.77" cy="81.14" r=".35" />
            <circle cx="84.77" cy="81.14" r=".35" />
            <circle cx="87.77" cy="79.14" r=".35" />
            <circle cx="85.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-br)`}>
            <circle cx="87.77" cy="87.14" r=".35" />
            <circle cx="85.77" cy="87.14" r=".35" />
            <circle cx="88.77" cy="85.14" r=".35" />
            <circle cx="86.77" cy="85.14" r=".35" />
            <circle cx="84.77" cy="85.14" r=".35" />
            <circle cx="87.77" cy="83.14" r=".35" />
            <circle cx="85.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bs)`}>
            <circle cx="87.77" cy="91.14" r=".35" />
            <circle cx="85.77" cy="91.14" r=".35" />
            <circle cx="88.77" cy="89.14" r=".35" />
            <circle cx="86.77" cy="89.14" r=".35" />
            <circle cx="84.77" cy="89.14" r=".35" />
            <circle cx="87.77" cy="87.14" r=".35" />
            <circle cx="85.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bt)`}>
            <circle cx="87.77" cy="95.14" r=".35" />
            <circle cx="85.77" cy="95.14" r=".35" />
            <circle cx="88.77" cy="93.14" r=".35" />
            <circle cx="86.77" cy="93.14" r=".35" />
            <circle cx="84.77" cy="93.14" r=".35" />
            <circle cx="87.77" cy="91.14" r=".35" />
            <circle cx="85.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bu)`}>
            <circle cx="87.77" cy="99.14" r=".35" />
            <circle cx="85.77" cy="99.14" r=".35" />
            <circle cx="88.77" cy="97.14" r=".35" />
            <circle cx="86.77" cy="97.14" r=".35" />
            <circle cx="84.77" cy="97.14" r=".35" />
            <circle cx="87.77" cy="95.14" r=".35" />
            <circle cx="85.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bv)`}>
            <circle cx="87.77" cy="103.14" r=".35" />
            <circle cx="85.77" cy="103.14" r=".35" />
            <circle cx="88.77" cy="101.14" r=".35" />
            <circle cx="86.77" cy="101.14" r=".35" />
            <circle cx="84.77" cy="101.14" r=".35" />
            <circle cx="87.77" cy="99.14" r=".35" />
            <circle cx="85.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bw)`}>
            <circle cx="87.77" cy="107.14" r=".35" />
            <circle cx="85.77" cy="107.14" r=".35" />
            <circle cx="88.77" cy="105.14" r=".35" />
            <circle cx="86.77" cy="105.14" r=".35" />
            <circle cx="84.77" cy="105.14" r=".35" />
            <circle cx="87.77" cy="103.14" r=".35" />
            <circle cx="85.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bK)`}>
            <circle cx="83.77" cy="71.14" r=".35" />
            <circle cx="81.77" cy="71.14" r=".35" />
            <circle cx="84.77" cy="69.14" r=".35" />
            <circle cx="82.77" cy="69.14" r=".35" />
            <circle cx="80.77" cy="69.14" r=".35" />
            <circle cx="83.77" cy="67.14" r=".35" />
            <circle cx="81.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bL)`}>
            <circle cx="83.77" cy="75.14" r=".35" />
            <circle cx="81.77" cy="75.14" r=".35" />
            <circle cx="84.77" cy="73.14" r=".35" />
            <circle cx="82.77" cy="73.14" r=".35" />
            <circle cx="80.77" cy="73.14" r=".35" />
            <circle cx="83.77" cy="71.14" r=".35" />
            <circle cx="81.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bM)`}>
            <circle cx="83.77" cy="79.14" r=".35" />
            <circle cx="81.77" cy="79.14" r=".35" />
            <circle cx="84.77" cy="77.14" r=".35" />
            <circle cx="82.77" cy="77.14" r=".35" />
            <circle cx="80.77" cy="77.14" r=".35" />
            <circle cx="83.77" cy="75.14" r=".35" />
            <circle cx="81.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bN)`}>
            <circle cx="83.77" cy="83.14" r=".35" />
            <circle cx="81.77" cy="83.14" r=".35" />
            <circle cx="84.77" cy="81.14" r=".35" />
            <circle cx="82.77" cy="81.14" r=".35" />
            <circle cx="80.77" cy="81.14" r=".35" />
            <circle cx="83.77" cy="79.14" r=".35" />
            <circle cx="81.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bO)`}>
            <circle cx="83.77" cy="87.14" r=".35" />
            <circle cx="81.77" cy="87.14" r=".35" />
            <circle cx="84.77" cy="85.14" r=".35" />
            <circle cx="82.77" cy="85.14" r=".35" />
            <circle cx="80.77" cy="85.14" r=".35" />
            <circle cx="83.77" cy="83.14" r=".35" />
            <circle cx="81.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bP)`}>
            <circle cx="83.77" cy="91.14" r=".35" />
            <circle cx="81.77" cy="91.14" r=".35" />
            <circle cx="84.77" cy="89.14" r=".35" />
            <circle cx="82.77" cy="89.14" r=".35" />
            <circle cx="80.77" cy="89.14" r=".35" />
            <circle cx="83.77" cy="87.14" r=".35" />
            <circle cx="81.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bQ)`}>
            <circle cx="83.77" cy="95.14" r=".35" />
            <circle cx="81.77" cy="95.14" r=".35" />
            <circle cx="84.77" cy="93.14" r=".35" />
            <circle cx="82.77" cy="93.14" r=".35" />
            <circle cx="80.77" cy="93.14" r=".35" />
            <circle cx="83.77" cy="91.14" r=".35" />
            <circle cx="81.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bR)`}>
            <circle cx="83.77" cy="99.14" r=".35" />
            <circle cx="81.77" cy="99.14" r=".35" />
            <circle cx="84.77" cy="97.14" r=".35" />
            <circle cx="82.77" cy="97.14" r=".35" />
            <circle cx="80.77" cy="97.14" r=".35" />
            <circle cx="83.77" cy="95.14" r=".35" />
            <circle cx="81.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bS)`}>
            <circle cx="83.77" cy="103.14" r=".35" />
            <circle cx="81.77" cy="103.14" r=".35" />
            <circle cx="84.77" cy="101.14" r=".35" />
            <circle cx="82.77" cy="101.14" r=".35" />
            <circle cx="80.77" cy="101.14" r=".35" />
            <circle cx="83.77" cy="99.14" r=".35" />
            <circle cx="81.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bT)`}>
            <circle cx="83.77" cy="107.14" r=".35" />
            <circle cx="81.77" cy="107.14" r=".35" />
            <circle cx="84.77" cy="105.14" r=".35" />
            <circle cx="82.77" cy="105.14" r=".35" />
            <circle cx="80.77" cy="105.14" r=".35" />
            <circle cx="83.77" cy="103.14" r=".35" />
            <circle cx="81.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b7)`}>
            <circle cx="79.77" cy="71.14" r=".35" />
            <circle cx="77.77" cy="71.14" r=".35" />
            <circle cx="80.77" cy="69.14" r=".35" />
            <circle cx="78.77" cy="69.14" r=".35" />
            <circle cx="76.77" cy="69.14" r=".35" />
            <circle cx="79.77" cy="67.14" r=".35" />
            <circle cx="77.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b8)`}>
            <circle cx="79.77" cy="75.14" r=".35" />
            <circle cx="77.77" cy="75.14" r=".35" />
            <circle cx="80.77" cy="73.14" r=".35" />
            <circle cx="78.77" cy="73.14" r=".35" />
            <circle cx="76.77" cy="73.14" r=".35" />
            <circle cx="79.77" cy="71.14" r=".35" />
            <circle cx="77.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b9)`}>
            <circle cx="79.77" cy="79.14" r=".35" />
            <circle cx="77.77" cy="79.14" r=".35" />
            <circle cx="80.77" cy="77.14" r=".35" />
            <circle cx="78.77" cy="77.14" r=".35" />
            <circle cx="76.77" cy="77.14" r=".35" />
            <circle cx="79.77" cy="75.14" r=".35" />
            <circle cx="77.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ca)`}>
            <circle cx="79.77" cy="83.14" r=".35" />
            <circle cx="77.77" cy="83.14" r=".35" />
            <circle cx="80.77" cy="81.14" r=".35" />
            <circle cx="78.77" cy="81.14" r=".35" />
            <circle cx="76.77" cy="81.14" r=".35" />
            <circle cx="79.77" cy="79.14" r=".35" />
            <circle cx="77.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cb)`}>
            <circle cx="79.77" cy="87.14" r=".35" />
            <circle cx="77.77" cy="87.14" r=".35" />
            <circle cx="80.77" cy="85.14" r=".35" />
            <circle cx="78.77" cy="85.14" r=".35" />
            <circle cx="76.77" cy="85.14" r=".35" />
            <circle cx="79.77" cy="83.14" r=".35" />
            <circle cx="77.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cc)`}>
            <circle cx="79.77" cy="91.14" r=".35" />
            <circle cx="77.77" cy="91.14" r=".35" />
            <circle cx="80.77" cy="89.14" r=".35" />
            <circle cx="78.77" cy="89.14" r=".35" />
            <circle cx="76.77" cy="89.14" r=".35" />
            <circle cx="79.77" cy="87.14" r=".35" />
            <circle cx="77.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cd)`}>
            <circle cx="79.77" cy="95.14" r=".35" />
            <circle cx="77.77" cy="95.14" r=".35" />
            <circle cx="80.77" cy="93.14" r=".35" />
            <circle cx="78.77" cy="93.14" r=".35" />
            <circle cx="76.77" cy="93.14" r=".35" />
            <circle cx="79.77" cy="91.14" r=".35" />
            <circle cx="77.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ce)`}>
            <circle cx="79.77" cy="99.14" r=".35" />
            <circle cx="77.77" cy="99.14" r=".35" />
            <circle cx="80.77" cy="97.14" r=".35" />
            <circle cx="78.77" cy="97.14" r=".35" />
            <circle cx="76.77" cy="97.14" r=".35" />
            <circle cx="79.77" cy="95.14" r=".35" />
            <circle cx="77.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cf)`}>
            <circle cx="79.77" cy="103.14" r=".35" />
            <circle cx="77.77" cy="103.14" r=".35" />
            <circle cx="80.77" cy="101.14" r=".35" />
            <circle cx="78.77" cy="101.14" r=".35" />
            <circle cx="76.77" cy="101.14" r=".35" />
            <circle cx="79.77" cy="99.14" r=".35" />
            <circle cx="77.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cg)`}>
            <circle cx="79.77" cy="107.14" r=".35" />
            <circle cx="77.77" cy="107.14" r=".35" />
            <circle cx="80.77" cy="105.14" r=".35" />
            <circle cx="78.77" cy="105.14" r=".35" />
            <circle cx="76.77" cy="105.14" r=".35" />
            <circle cx="79.77" cy="103.14" r=".35" />
            <circle cx="77.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cu)`}>
            <circle cx="75.77" cy="71.14" r=".35" />
            <circle cx="73.77" cy="71.14" r=".35" />
            <circle cx="76.77" cy="69.14" r=".35" />
            <circle cx="74.77" cy="69.14" r=".35" />
            <circle cx="72.77" cy="69.14" r=".35" />
            <circle cx="75.77" cy="67.14" r=".35" />
            <circle cx="73.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cv)`}>
            <circle cx="75.77" cy="75.14" r=".35" />
            <circle cx="73.77" cy="75.14" r=".35" />
            <circle cx="76.77" cy="73.14" r=".35" />
            <circle cx="74.77" cy="73.14" r=".35" />
            <circle cx="72.77" cy="73.14" r=".35" />
            <circle cx="75.77" cy="71.14" r=".35" />
            <circle cx="73.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cw)`}>
            <circle cx="75.77" cy="79.14" r=".35" />
            <circle cx="73.77" cy="79.14" r=".35" />
            <circle cx="76.77" cy="77.14" r=".35" />
            <circle cx="74.77" cy="77.14" r=".35" />
            <circle cx="72.77" cy="77.14" r=".35" />
            <circle cx="75.77" cy="75.14" r=".35" />
            <circle cx="73.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cx)`}>
            <circle cx="75.77" cy="83.14" r=".35" />
            <circle cx="73.77" cy="83.14" r=".35" />
            <circle cx="76.77" cy="81.14" r=".35" />
            <circle cx="74.77" cy="81.14" r=".35" />
            <circle cx="72.77" cy="81.14" r=".35" />
            <circle cx="75.77" cy="79.14" r=".35" />
            <circle cx="73.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cy)`}>
            <circle cx="75.77" cy="87.14" r=".35" />
            <circle cx="73.77" cy="87.14" r=".35" />
            <circle cx="76.77" cy="85.14" r=".35" />
            <circle cx="74.77" cy="85.14" r=".35" />
            <circle cx="72.77" cy="85.14" r=".35" />
            <circle cx="75.77" cy="83.14" r=".35" />
            <circle cx="73.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cz)`}>
            <circle cx="75.77" cy="91.14" r=".35" />
            <circle cx="73.77" cy="91.14" r=".35" />
            <circle cx="76.77" cy="89.14" r=".35" />
            <circle cx="74.77" cy="89.14" r=".35" />
            <circle cx="72.77" cy="89.14" r=".35" />
            <circle cx="75.77" cy="87.14" r=".35" />
            <circle cx="73.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cA)`}>
            <circle cx="75.77" cy="95.14" r=".35" />
            <circle cx="73.77" cy="95.14" r=".35" />
            <circle cx="76.77" cy="93.14" r=".35" />
            <circle cx="74.77" cy="93.14" r=".35" />
            <circle cx="72.77" cy="93.14" r=".35" />
            <circle cx="75.77" cy="91.14" r=".35" />
            <circle cx="73.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cB)`}>
            <circle cx="75.77" cy="99.14" r=".35" />
            <circle cx="73.77" cy="99.14" r=".35" />
            <circle cx="76.77" cy="97.14" r=".35" />
            <circle cx="74.77" cy="97.14" r=".35" />
            <circle cx="72.77" cy="97.14" r=".35" />
            <circle cx="75.77" cy="95.14" r=".35" />
            <circle cx="73.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cC)`}>
            <circle cx="75.77" cy="103.14" r=".35" />
            <circle cx="73.77" cy="103.14" r=".35" />
            <circle cx="76.77" cy="101.14" r=".35" />
            <circle cx="74.77" cy="101.14" r=".35" />
            <circle cx="72.77" cy="101.14" r=".35" />
            <circle cx="75.77" cy="99.14" r=".35" />
            <circle cx="73.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cD)`}>
            <circle cx="75.77" cy="107.14" r=".35" />
            <circle cx="73.77" cy="107.14" r=".35" />
            <circle cx="76.77" cy="105.14" r=".35" />
            <circle cx="74.77" cy="105.14" r=".35" />
            <circle cx="72.77" cy="105.14" r=".35" />
            <circle cx="75.77" cy="103.14" r=".35" />
            <circle cx="73.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cR)`}>
            <circle cx="71.77" cy="71.14" r=".35" />
            <circle cx="69.77" cy="71.14" r=".35" />
            <circle cx="72.77" cy="69.14" r=".35" />
            <circle cx="70.77" cy="69.14" r=".35" />
            <circle cx="68.77" cy="69.14" r=".35" />
            <circle cx="71.77" cy="67.14" r=".35" />
            <circle cx="69.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cS)`}>
            <circle cx="71.77" cy="75.14" r=".35" />
            <circle cx="69.77" cy="75.14" r=".35" />
            <circle cx="72.77" cy="73.14" r=".35" />
            <circle cx="70.77" cy="73.14" r=".35" />
            <circle cx="68.77" cy="73.14" r=".35" />
            <circle cx="71.77" cy="71.14" r=".35" />
            <circle cx="69.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cT)`}>
            <circle cx="71.77" cy="79.14" r=".35" />
            <circle cx="69.77" cy="79.14" r=".35" />
            <circle cx="72.77" cy="77.14" r=".35" />
            <circle cx="70.77" cy="77.14" r=".35" />
            <circle cx="68.77" cy="77.14" r=".35" />
            <circle cx="71.77" cy="75.14" r=".35" />
            <circle cx="69.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cU)`}>
            <circle cx="71.77" cy="83.14" r=".35" />
            <circle cx="69.77" cy="83.14" r=".35" />
            <circle cx="72.77" cy="81.14" r=".35" />
            <circle cx="70.77" cy="81.14" r=".35" />
            <circle cx="68.77" cy="81.14" r=".35" />
            <circle cx="71.77" cy="79.14" r=".35" />
            <circle cx="69.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cV)`}>
            <circle cx="71.77" cy="87.14" r=".35" />
            <circle cx="69.77" cy="87.14" r=".35" />
            <circle cx="72.77" cy="85.14" r=".35" />
            <circle cx="70.77" cy="85.14" r=".35" />
            <circle cx="68.77" cy="85.14" r=".35" />
            <circle cx="71.77" cy="83.14" r=".35" />
            <circle cx="69.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cW)`}>
            <circle cx="71.77" cy="91.14" r=".35" />
            <circle cx="69.77" cy="91.14" r=".35" />
            <circle cx="72.77" cy="89.14" r=".35" />
            <circle cx="70.77" cy="89.14" r=".35" />
            <circle cx="68.77" cy="89.14" r=".35" />
            <circle cx="71.77" cy="87.14" r=".35" />
            <circle cx="69.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cX)`}>
            <circle cx="71.77" cy="95.14" r=".35" />
            <circle cx="69.77" cy="95.14" r=".35" />
            <circle cx="72.77" cy="93.14" r=".35" />
            <circle cx="70.77" cy="93.14" r=".35" />
            <circle cx="68.77" cy="93.14" r=".35" />
            <circle cx="71.77" cy="91.14" r=".35" />
            <circle cx="69.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cY)`}>
            <circle cx="71.77" cy="99.14" r=".35" />
            <circle cx="69.77" cy="99.14" r=".35" />
            <circle cx="72.77" cy="97.14" r=".35" />
            <circle cx="70.77" cy="97.14" r=".35" />
            <circle cx="68.77" cy="97.14" r=".35" />
            <circle cx="71.77" cy="95.14" r=".35" />
            <circle cx="69.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cZ)`}>
            <circle cx="71.77" cy="103.14" r=".35" />
            <circle cx="69.77" cy="103.14" r=".35" />
            <circle cx="72.77" cy="101.14" r=".35" />
            <circle cx="70.77" cy="101.14" r=".35" />
            <circle cx="68.77" cy="101.14" r=".35" />
            <circle cx="71.77" cy="99.14" r=".35" />
            <circle cx="69.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-c0)`}>
            <circle cx="71.77" cy="107.14" r=".35" />
            <circle cx="69.77" cy="107.14" r=".35" />
            <circle cx="72.77" cy="105.14" r=".35" />
            <circle cx="70.77" cy="105.14" r=".35" />
            <circle cx="68.77" cy="105.14" r=".35" />
            <circle cx="71.77" cy="103.14" r=".35" />
            <circle cx="69.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-de)`}>
            <circle cx="67.77" cy="71.14" r=".35" />
            <circle cx="65.77" cy="71.14" r=".35" />
            <circle cx="68.77" cy="69.14" r=".35" />
            <circle cx="66.77" cy="69.14" r=".35" />
            <circle cx="64.77" cy="69.14" r=".35" />
            <circle cx="67.77" cy="67.14" r=".35" />
            <circle cx="65.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-df)`}>
            <circle cx="67.77" cy="75.14" r=".35" />
            <circle cx="65.77" cy="75.14" r=".35" />
            <circle cx="68.77" cy="73.14" r=".35" />
            <circle cx="66.77" cy="73.14" r=".35" />
            <circle cx="64.77" cy="73.14" r=".35" />
            <circle cx="67.77" cy="71.14" r=".35" />
            <circle cx="65.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dg)`}>
            <circle cx="67.77" cy="79.14" r=".35" />
            <circle cx="65.77" cy="79.14" r=".35" />
            <circle cx="68.77" cy="77.14" r=".35" />
            <circle cx="66.77" cy="77.14" r=".35" />
            <circle cx="64.77" cy="77.14" r=".35" />
            <circle cx="67.77" cy="75.14" r=".35" />
            <circle cx="65.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dh)`}>
            <circle cx="67.77" cy="83.14" r=".35" />
            <circle cx="65.77" cy="83.14" r=".35" />
            <circle cx="68.77" cy="81.14" r=".35" />
            <circle cx="66.77" cy="81.14" r=".35" />
            <circle cx="64.77" cy="81.14" r=".35" />
            <circle cx="67.77" cy="79.14" r=".35" />
            <circle cx="65.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-di)`}>
            <circle cx="67.77" cy="87.14" r=".35" />
            <circle cx="65.77" cy="87.14" r=".35" />
            <circle cx="68.77" cy="85.14" r=".35" />
            <circle cx="66.77" cy="85.14" r=".35" />
            <circle cx="64.77" cy="85.14" r=".35" />
            <circle cx="67.77" cy="83.14" r=".35" />
            <circle cx="65.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dj)`}>
            <circle cx="67.77" cy="91.14" r=".35" />
            <circle cx="65.77" cy="91.14" r=".35" />
            <circle cx="68.77" cy="89.14" r=".35" />
            <circle cx="66.77" cy="89.14" r=".35" />
            <circle cx="64.77" cy="89.14" r=".35" />
            <circle cx="67.77" cy="87.14" r=".35" />
            <circle cx="65.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dk)`}>
            <circle cx="67.77" cy="95.14" r=".35" />
            <circle cx="65.77" cy="95.14" r=".35" />
            <circle cx="68.77" cy="93.14" r=".35" />
            <circle cx="66.77" cy="93.14" r=".35" />
            <circle cx="64.77" cy="93.14" r=".35" />
            <circle cx="67.77" cy="91.14" r=".35" />
            <circle cx="65.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dl)`}>
            <circle cx="67.77" cy="99.14" r=".35" />
            <circle cx="65.77" cy="99.14" r=".35" />
            <circle cx="68.77" cy="97.14" r=".35" />
            <circle cx="66.77" cy="97.14" r=".35" />
            <circle cx="64.77" cy="97.14" r=".35" />
            <circle cx="67.77" cy="95.14" r=".35" />
            <circle cx="65.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dm)`}>
            <circle cx="67.77" cy="103.14" r=".35" />
            <circle cx="65.77" cy="103.14" r=".35" />
            <circle cx="68.77" cy="101.14" r=".35" />
            <circle cx="66.77" cy="101.14" r=".35" />
            <circle cx="64.77" cy="101.14" r=".35" />
            <circle cx="67.77" cy="99.14" r=".35" />
            <circle cx="65.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dn)`}>
            <circle cx="67.77" cy="107.14" r=".35" />
            <circle cx="65.77" cy="107.14" r=".35" />
            <circle cx="68.77" cy="105.14" r=".35" />
            <circle cx="66.77" cy="105.14" r=".35" />
            <circle cx="64.77" cy="105.14" r=".35" />
            <circle cx="67.77" cy="103.14" r=".35" />
            <circle cx="65.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dB)`}>
            <circle cx="63.77" cy="71.14" r=".35" />
            <circle cx="61.77" cy="71.14" r=".35" />
            <circle cx="64.77" cy="69.14" r=".35" />
            <circle cx="62.77" cy="69.14" r=".35" />
            <circle cx="60.77" cy="69.14" r=".35" />
            <circle cx="63.77" cy="67.14" r=".35" />
            <circle cx="61.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dC)`}>
            <circle cx="63.77" cy="75.14" r=".35" />
            <circle cx="61.77" cy="75.14" r=".35" />
            <circle cx="64.77" cy="73.14" r=".35" />
            <circle cx="62.77" cy="73.14" r=".35" />
            <circle cx="60.77" cy="73.14" r=".35" />
            <circle cx="63.77" cy="71.14" r=".35" />
            <circle cx="61.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dD)`}>
            <circle cx="63.77" cy="79.14" r=".35" />
            <circle cx="61.77" cy="79.14" r=".35" />
            <circle cx="64.77" cy="77.14" r=".35" />
            <circle cx="62.77" cy="77.14" r=".35" />
            <circle cx="60.77" cy="77.14" r=".35" />
            <circle cx="63.77" cy="75.14" r=".35" />
            <circle cx="61.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dE)`}>
            <circle cx="63.77" cy="83.14" r=".35" />
            <circle cx="61.77" cy="83.14" r=".35" />
            <circle cx="64.77" cy="81.14" r=".35" />
            <circle cx="62.77" cy="81.14" r=".35" />
            <circle cx="60.77" cy="81.14" r=".35" />
            <circle cx="63.77" cy="79.14" r=".35" />
            <circle cx="61.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dF)`}>
            <circle cx="63.77" cy="87.14" r=".35" />
            <circle cx="61.77" cy="87.14" r=".35" />
            <circle cx="64.77" cy="85.14" r=".35" />
            <circle cx="62.77" cy="85.14" r=".35" />
            <circle cx="60.77" cy="85.14" r=".35" />
            <circle cx="63.77" cy="83.14" r=".35" />
            <circle cx="61.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dG)`}>
            <circle cx="63.77" cy="91.14" r=".35" />
            <circle cx="61.77" cy="91.14" r=".35" />
            <circle cx="64.77" cy="89.14" r=".35" />
            <circle cx="62.77" cy="89.14" r=".35" />
            <circle cx="60.77" cy="89.14" r=".35" />
            <circle cx="63.77" cy="87.14" r=".35" />
            <circle cx="61.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dH)`}>
            <circle cx="63.77" cy="95.14" r=".35" />
            <circle cx="61.77" cy="95.14" r=".35" />
            <circle cx="64.77" cy="93.14" r=".35" />
            <circle cx="62.77" cy="93.14" r=".35" />
            <circle cx="60.77" cy="93.14" r=".35" />
            <circle cx="63.77" cy="91.14" r=".35" />
            <circle cx="61.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dI)`}>
            <circle cx="63.77" cy="99.14" r=".35" />
            <circle cx="61.77" cy="99.14" r=".35" />
            <circle cx="64.77" cy="97.14" r=".35" />
            <circle cx="62.77" cy="97.14" r=".35" />
            <circle cx="60.77" cy="97.14" r=".35" />
            <circle cx="63.77" cy="95.14" r=".35" />
            <circle cx="61.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dJ)`}>
            <circle cx="63.77" cy="103.14" r=".35" />
            <circle cx="61.77" cy="103.14" r=".35" />
            <circle cx="64.77" cy="101.14" r=".35" />
            <circle cx="62.77" cy="101.14" r=".35" />
            <circle cx="60.77" cy="101.14" r=".35" />
            <circle cx="63.77" cy="99.14" r=".35" />
            <circle cx="61.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dK)`}>
            <circle cx="63.77" cy="107.14" r=".35" />
            <circle cx="61.77" cy="107.14" r=".35" />
            <circle cx="64.77" cy="105.14" r=".35" />
            <circle cx="62.77" cy="105.14" r=".35" />
            <circle cx="60.77" cy="105.14" r=".35" />
            <circle cx="63.77" cy="103.14" r=".35" />
            <circle cx="61.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dY)`}>
            <circle cx="59.77" cy="71.14" r=".35" />
            <circle cx="57.77" cy="71.14" r=".35" />
            <circle cx="60.77" cy="69.14" r=".35" />
            <circle cx="58.77" cy="69.14" r=".35" />
            <circle cx="56.77" cy="69.14" r=".35" />
            <circle cx="59.77" cy="67.14" r=".35" />
            <circle cx="57.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dZ)`}>
            <circle cx="59.77" cy="75.14" r=".35" />
            <circle cx="57.77" cy="75.14" r=".35" />
            <circle cx="60.77" cy="73.14" r=".35" />
            <circle cx="58.77" cy="73.14" r=".35" />
            <circle cx="56.77" cy="73.14" r=".35" />
            <circle cx="59.77" cy="71.14" r=".35" />
            <circle cx="57.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-d0)`}>
            <circle cx="59.77" cy="79.14" r=".35" />
            <circle cx="57.77" cy="79.14" r=".35" />
            <circle cx="60.77" cy="77.14" r=".35" />
            <circle cx="58.77" cy="77.14" r=".35" />
            <circle cx="56.77" cy="77.14" r=".35" />
            <circle cx="59.77" cy="75.14" r=".35" />
            <circle cx="57.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-d1)`}>
            <circle cx="59.77" cy="83.14" r=".35" />
            <circle cx="57.77" cy="83.14" r=".35" />
            <circle cx="60.77" cy="81.14" r=".35" />
            <circle cx="58.77" cy="81.14" r=".35" />
            <circle cx="56.77" cy="81.14" r=".35" />
            <circle cx="59.77" cy="79.14" r=".35" />
            <circle cx="57.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-d2)`}>
            <circle cx="59.77" cy="87.14" r=".35" />
            <circle cx="57.77" cy="87.14" r=".35" />
            <circle cx="60.77" cy="85.14" r=".35" />
            <circle cx="58.77" cy="85.14" r=".35" />
            <circle cx="56.77" cy="85.14" r=".35" />
            <circle cx="59.77" cy="83.14" r=".35" />
            <circle cx="57.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-d3)`}>
            <circle cx="59.77" cy="91.14" r=".35" />
            <circle cx="57.77" cy="91.14" r=".35" />
            <circle cx="60.77" cy="89.14" r=".35" />
            <circle cx="58.77" cy="89.14" r=".35" />
            <circle cx="56.77" cy="89.14" r=".35" />
            <circle cx="59.77" cy="87.14" r=".35" />
            <circle cx="57.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-d4)`}>
            <circle cx="59.77" cy="95.14" r=".35" />
            <circle cx="57.77" cy="95.14" r=".35" />
            <circle cx="60.77" cy="93.14" r=".35" />
            <circle cx="58.77" cy="93.14" r=".35" />
            <circle cx="56.77" cy="93.14" r=".35" />
            <circle cx="59.77" cy="91.14" r=".35" />
            <circle cx="57.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-d5)`}>
            <circle cx="59.77" cy="99.14" r=".35" />
            <circle cx="57.77" cy="99.14" r=".35" />
            <circle cx="60.77" cy="97.14" r=".35" />
            <circle cx="58.77" cy="97.14" r=".35" />
            <circle cx="56.77" cy="97.14" r=".35" />
            <circle cx="59.77" cy="95.14" r=".35" />
            <circle cx="57.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-d6)`}>
            <circle cx="59.77" cy="103.14" r=".35" />
            <circle cx="57.77" cy="103.14" r=".35" />
            <circle cx="60.77" cy="101.14" r=".35" />
            <circle cx="58.77" cy="101.14" r=".35" />
            <circle cx="56.77" cy="101.14" r=".35" />
            <circle cx="59.77" cy="99.14" r=".35" />
            <circle cx="57.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-d7)`}>
            <circle cx="59.77" cy="107.14" r=".35" />
            <circle cx="57.77" cy="107.14" r=".35" />
            <circle cx="60.77" cy="105.14" r=".35" />
            <circle cx="58.77" cy="105.14" r=".35" />
            <circle cx="56.77" cy="105.14" r=".35" />
            <circle cx="59.77" cy="103.14" r=".35" />
            <circle cx="57.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-el)`}>
            <circle cx="55.77" cy="71.14" r=".35" />
            <circle cx="53.77" cy="71.14" r=".35" />
            <circle cx="56.77" cy="69.14" r=".35" />
            <circle cx="54.77" cy="69.14" r=".35" />
            <circle cx="52.77" cy="69.14" r=".35" />
            <circle cx="55.77" cy="67.14" r=".35" />
            <circle cx="53.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-em)`}>
            <circle cx="55.77" cy="75.14" r=".35" />
            <circle cx="53.77" cy="75.14" r=".35" />
            <circle cx="56.77" cy="73.14" r=".35" />
            <circle cx="54.77" cy="73.14" r=".35" />
            <circle cx="52.77" cy="73.14" r=".35" />
            <circle cx="55.77" cy="71.14" r=".35" />
            <circle cx="53.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-en)`}>
            <circle cx="55.77" cy="79.14" r=".35" />
            <circle cx="53.77" cy="79.14" r=".35" />
            <circle cx="56.77" cy="77.14" r=".35" />
            <circle cx="54.77" cy="77.14" r=".35" />
            <circle cx="52.77" cy="77.14" r=".35" />
            <circle cx="55.77" cy="75.14" r=".35" />
            <circle cx="53.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eo)`}>
            <circle cx="55.77" cy="83.14" r=".35" />
            <circle cx="53.77" cy="83.14" r=".35" />
            <circle cx="56.77" cy="81.14" r=".35" />
            <circle cx="54.77" cy="81.14" r=".35" />
            <circle cx="52.77" cy="81.14" r=".35" />
            <circle cx="55.77" cy="79.14" r=".35" />
            <circle cx="53.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ep)`}>
            <circle cx="55.77" cy="87.14" r=".35" />
            <circle cx="53.77" cy="87.14" r=".35" />
            <circle cx="56.77" cy="85.14" r=".35" />
            <circle cx="54.77" cy="85.14" r=".35" />
            <circle cx="52.77" cy="85.14" r=".35" />
            <circle cx="55.77" cy="83.14" r=".35" />
            <circle cx="53.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eq)`}>
            <circle cx="55.77" cy="91.14" r=".35" />
            <circle cx="53.77" cy="91.14" r=".35" />
            <circle cx="56.77" cy="89.14" r=".35" />
            <circle cx="54.77" cy="89.14" r=".35" />
            <circle cx="52.77" cy="89.14" r=".35" />
            <circle cx="55.77" cy="87.14" r=".35" />
            <circle cx="53.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-er)`}>
            <circle cx="55.77" cy="95.14" r=".35" />
            <circle cx="53.77" cy="95.14" r=".35" />
            <circle cx="56.77" cy="93.14" r=".35" />
            <circle cx="54.77" cy="93.14" r=".35" />
            <circle cx="52.77" cy="93.14" r=".35" />
            <circle cx="55.77" cy="91.14" r=".35" />
            <circle cx="53.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-es)`}>
            <circle cx="55.77" cy="99.14" r=".35" />
            <circle cx="53.77" cy="99.14" r=".35" />
            <circle cx="56.77" cy="97.14" r=".35" />
            <circle cx="54.77" cy="97.14" r=".35" />
            <circle cx="52.77" cy="97.14" r=".35" />
            <circle cx="55.77" cy="95.14" r=".35" />
            <circle cx="53.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-et)`}>
            <circle cx="55.77" cy="103.14" r=".35" />
            <circle cx="53.77" cy="103.14" r=".35" />
            <circle cx="56.77" cy="101.14" r=".35" />
            <circle cx="54.77" cy="101.14" r=".35" />
            <circle cx="52.77" cy="101.14" r=".35" />
            <circle cx="55.77" cy="99.14" r=".35" />
            <circle cx="53.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eu)`}>
            <circle cx="55.77" cy="107.14" r=".35" />
            <circle cx="53.77" cy="107.14" r=".35" />
            <circle cx="56.77" cy="105.14" r=".35" />
            <circle cx="54.77" cy="105.14" r=".35" />
            <circle cx="52.77" cy="105.14" r=".35" />
            <circle cx="55.77" cy="103.14" r=".35" />
            <circle cx="53.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eI)`}>
            <circle cx="51.77" cy="71.14" r=".35" />
            <circle cx="49.77" cy="71.14" r=".35" />
            <circle cx="52.77" cy="69.14" r=".35" />
            <circle cx="50.77" cy="69.14" r=".35" />
            <circle cx="48.77" cy="69.14" r=".35" />
            <circle cx="51.77" cy="67.14" r=".35" />
            <circle cx="49.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eJ)`}>
            <circle cx="51.77" cy="75.14" r=".35" />
            <circle cx="49.77" cy="75.14" r=".35" />
            <circle cx="52.77" cy="73.14" r=".35" />
            <circle cx="50.77" cy="73.14" r=".35" />
            <circle cx="48.77" cy="73.14" r=".35" />
            <circle cx="51.77" cy="71.14" r=".35" />
            <circle cx="49.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eK)`}>
            <circle cx="51.77" cy="79.14" r=".35" />
            <circle cx="49.77" cy="79.14" r=".35" />
            <circle cx="52.77" cy="77.14" r=".35" />
            <circle cx="50.77" cy="77.14" r=".35" />
            <circle cx="48.77" cy="77.14" r=".35" />
            <circle cx="51.77" cy="75.14" r=".35" />
            <circle cx="49.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eL)`}>
            <circle cx="51.77" cy="83.14" r=".35" />
            <circle cx="49.77" cy="83.14" r=".35" />
            <circle cx="52.77" cy="81.14" r=".35" />
            <circle cx="50.77" cy="81.14" r=".35" />
            <circle cx="48.77" cy="81.14" r=".35" />
            <circle cx="51.77" cy="79.14" r=".35" />
            <circle cx="49.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eM)`}>
            <circle cx="51.77" cy="87.14" r=".35" />
            <circle cx="49.77" cy="87.14" r=".35" />
            <circle cx="52.77" cy="85.14" r=".35" />
            <circle cx="50.77" cy="85.14" r=".35" />
            <circle cx="48.77" cy="85.14" r=".35" />
            <circle cx="51.77" cy="83.14" r=".35" />
            <circle cx="49.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eN)`}>
            <circle cx="51.77" cy="91.14" r=".35" />
            <circle cx="49.77" cy="91.14" r=".35" />
            <circle cx="52.77" cy="89.14" r=".35" />
            <circle cx="50.77" cy="89.14" r=".35" />
            <circle cx="48.77" cy="89.14" r=".35" />
            <circle cx="51.77" cy="87.14" r=".35" />
            <circle cx="49.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eO)`}>
            <circle cx="51.77" cy="95.14" r=".35" />
            <circle cx="49.77" cy="95.14" r=".35" />
            <circle cx="52.77" cy="93.14" r=".35" />
            <circle cx="50.77" cy="93.14" r=".35" />
            <circle cx="48.77" cy="93.14" r=".35" />
            <circle cx="51.77" cy="91.14" r=".35" />
            <circle cx="49.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eP)`}>
            <circle cx="51.77" cy="99.14" r=".35" />
            <circle cx="49.77" cy="99.14" r=".35" />
            <circle cx="52.77" cy="97.14" r=".35" />
            <circle cx="50.77" cy="97.14" r=".35" />
            <circle cx="48.77" cy="97.14" r=".35" />
            <circle cx="51.77" cy="95.14" r=".35" />
            <circle cx="49.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eQ)`}>
            <circle cx="51.77" cy="103.14" r=".35" />
            <circle cx="49.77" cy="103.14" r=".35" />
            <circle cx="52.77" cy="101.14" r=".35" />
            <circle cx="50.77" cy="101.14" r=".35" />
            <circle cx="48.77" cy="101.14" r=".35" />
            <circle cx="51.77" cy="99.14" r=".35" />
            <circle cx="49.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-eR)`}>
            <circle cx="51.77" cy="107.14" r=".35" />
            <circle cx="49.77" cy="107.14" r=".35" />
            <circle cx="52.77" cy="105.14" r=".35" />
            <circle cx="50.77" cy="105.14" r=".35" />
            <circle cx="48.77" cy="105.14" r=".35" />
            <circle cx="51.77" cy="103.14" r=".35" />
            <circle cx="49.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-e5)`}>
            <circle cx="47.77" cy="71.14" r=".35" />
            <circle cx="45.77" cy="71.14" r=".35" />
            <circle cx="48.77" cy="69.14" r=".35" />
            <circle cx="46.77" cy="69.14" r=".35" />
            <circle cx="44.77" cy="69.14" r=".35" />
            <circle cx="47.77" cy="67.14" r=".35" />
            <circle cx="45.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-e6)`}>
            <circle cx="47.77" cy="75.14" r=".35" />
            <circle cx="45.77" cy="75.14" r=".35" />
            <circle cx="48.77" cy="73.14" r=".35" />
            <circle cx="46.77" cy="73.14" r=".35" />
            <circle cx="44.77" cy="73.14" r=".35" />
            <circle cx="47.77" cy="71.14" r=".35" />
            <circle cx="45.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-e7)`}>
            <circle cx="47.77" cy="79.14" r=".35" />
            <circle cx="45.77" cy="79.14" r=".35" />
            <circle cx="48.77" cy="77.14" r=".35" />
            <circle cx="46.77" cy="77.14" r=".35" />
            <circle cx="44.77" cy="77.14" r=".35" />
            <circle cx="47.77" cy="75.14" r=".35" />
            <circle cx="45.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-e8)`}>
            <circle cx="47.77" cy="83.14" r=".35" />
            <circle cx="45.77" cy="83.14" r=".35" />
            <circle cx="48.77" cy="81.14" r=".35" />
            <circle cx="46.77" cy="81.14" r=".35" />
            <circle cx="44.77" cy="81.14" r=".35" />
            <circle cx="47.77" cy="79.14" r=".35" />
            <circle cx="45.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-e9)`}>
            <circle cx="47.77" cy="87.14" r=".35" />
            <circle cx="45.77" cy="87.14" r=".35" />
            <circle cx="48.77" cy="85.14" r=".35" />
            <circle cx="46.77" cy="85.14" r=".35" />
            <circle cx="44.77" cy="85.14" r=".35" />
            <circle cx="47.77" cy="83.14" r=".35" />
            <circle cx="45.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fa)`}>
            <circle cx="47.77" cy="91.14" r=".35" />
            <circle cx="45.77" cy="91.14" r=".35" />
            <circle cx="48.77" cy="89.14" r=".35" />
            <circle cx="46.77" cy="89.14" r=".35" />
            <circle cx="44.77" cy="89.14" r=".35" />
            <circle cx="47.77" cy="87.14" r=".35" />
            <circle cx="45.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fb)`}>
            <circle cx="47.77" cy="95.14" r=".35" />
            <circle cx="45.77" cy="95.14" r=".35" />
            <circle cx="48.77" cy="93.14" r=".35" />
            <circle cx="46.77" cy="93.14" r=".35" />
            <circle cx="44.77" cy="93.14" r=".35" />
            <circle cx="47.77" cy="91.14" r=".35" />
            <circle cx="45.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fc)`}>
            <circle cx="47.77" cy="99.14" r=".35" />
            <circle cx="45.77" cy="99.14" r=".35" />
            <circle cx="48.77" cy="97.14" r=".35" />
            <circle cx="46.77" cy="97.14" r=".35" />
            <circle cx="44.77" cy="97.14" r=".35" />
            <circle cx="47.77" cy="95.14" r=".35" />
            <circle cx="45.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fd)`}>
            <circle cx="47.77" cy="103.14" r=".35" />
            <circle cx="45.77" cy="103.14" r=".35" />
            <circle cx="48.77" cy="101.14" r=".35" />
            <circle cx="46.77" cy="101.14" r=".35" />
            <circle cx="44.77" cy="101.14" r=".35" />
            <circle cx="47.77" cy="99.14" r=".35" />
            <circle cx="45.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fe)`}>
            <circle cx="47.77" cy="107.14" r=".35" />
            <circle cx="45.77" cy="107.14" r=".35" />
            <circle cx="48.77" cy="105.14" r=".35" />
            <circle cx="46.77" cy="105.14" r=".35" />
            <circle cx="44.77" cy="105.14" r=".35" />
            <circle cx="47.77" cy="103.14" r=".35" />
            <circle cx="45.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fs)`}>
            <circle cx="43.77" cy="71.14" r=".35" />
            <circle cx="41.77" cy="71.14" r=".35" />
            <circle cx="44.77" cy="69.14" r=".35" />
            <circle cx="42.77" cy="69.14" r=".35" />
            <circle cx="40.77" cy="69.14" r=".35" />
            <circle cx="43.77" cy="67.14" r=".35" />
            <circle cx="41.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ft)`}>
            <circle cx="43.77" cy="75.14" r=".35" />
            <circle cx="41.77" cy="75.14" r=".35" />
            <circle cx="44.77" cy="73.14" r=".35" />
            <circle cx="42.77" cy="73.14" r=".35" />
            <circle cx="40.77" cy="73.14" r=".35" />
            <circle cx="43.77" cy="71.14" r=".35" />
            <circle cx="41.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fu)`}>
            <circle cx="43.77" cy="79.14" r=".35" />
            <circle cx="41.77" cy="79.14" r=".35" />
            <circle cx="44.77" cy="77.14" r=".35" />
            <circle cx="42.77" cy="77.14" r=".35" />
            <circle cx="40.77" cy="77.14" r=".35" />
            <circle cx="43.77" cy="75.14" r=".35" />
            <circle cx="41.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fv)`}>
            <circle cx="43.77" cy="83.14" r=".35" />
            <circle cx="41.77" cy="83.14" r=".35" />
            <circle cx="44.77" cy="81.14" r=".35" />
            <circle cx="42.77" cy="81.14" r=".35" />
            <circle cx="40.77" cy="81.14" r=".35" />
            <circle cx="43.77" cy="79.14" r=".35" />
            <circle cx="41.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fw)`}>
            <circle cx="43.77" cy="87.14" r=".35" />
            <circle cx="41.77" cy="87.14" r=".35" />
            <circle cx="44.77" cy="85.14" r=".35" />
            <circle cx="42.77" cy="85.14" r=".35" />
            <circle cx="40.77" cy="85.14" r=".35" />
            <circle cx="43.77" cy="83.14" r=".35" />
            <circle cx="41.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fx)`}>
            <circle cx="43.77" cy="91.14" r=".35" />
            <circle cx="41.77" cy="91.14" r=".35" />
            <circle cx="44.77" cy="89.14" r=".35" />
            <circle cx="42.77" cy="89.14" r=".35" />
            <circle cx="40.77" cy="89.14" r=".35" />
            <circle cx="43.77" cy="87.14" r=".35" />
            <circle cx="41.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fy)`}>
            <circle cx="43.77" cy="95.14" r=".35" />
            <circle cx="41.77" cy="95.14" r=".35" />
            <circle cx="44.77" cy="93.14" r=".35" />
            <circle cx="42.77" cy="93.14" r=".35" />
            <circle cx="40.77" cy="93.14" r=".35" />
            <circle cx="43.77" cy="91.14" r=".35" />
            <circle cx="41.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fz)`}>
            <circle cx="43.77" cy="99.14" r=".35" />
            <circle cx="41.77" cy="99.14" r=".35" />
            <circle cx="44.77" cy="97.14" r=".35" />
            <circle cx="42.77" cy="97.14" r=".35" />
            <circle cx="40.77" cy="97.14" r=".35" />
            <circle cx="43.77" cy="95.14" r=".35" />
            <circle cx="41.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fA)`}>
            <circle cx="43.77" cy="103.14" r=".35" />
            <circle cx="41.77" cy="103.14" r=".35" />
            <circle cx="44.77" cy="101.14" r=".35" />
            <circle cx="42.77" cy="101.14" r=".35" />
            <circle cx="40.77" cy="101.14" r=".35" />
            <circle cx="43.77" cy="99.14" r=".35" />
            <circle cx="41.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fB)`}>
            <circle cx="43.77" cy="107.14" r=".35" />
            <circle cx="41.77" cy="107.14" r=".35" />
            <circle cx="44.77" cy="105.14" r=".35" />
            <circle cx="42.77" cy="105.14" r=".35" />
            <circle cx="40.77" cy="105.14" r=".35" />
            <circle cx="43.77" cy="103.14" r=".35" />
            <circle cx="41.77" cy="103.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fP)`}>
            <circle cx="39.77" cy="71.14" r=".35" />
            <circle cx="37.77" cy="71.14" r=".35" />
            <circle cx="40.77" cy="69.14" r=".35" />
            <circle cx="38.77" cy="69.14" r=".35" />
            <circle cx="36.77" cy="69.14" r=".35" />
            <circle cx="39.77" cy="67.14" r=".35" />
            <circle cx="37.77" cy="67.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fQ)`}>
            <circle cx="39.77" cy="75.14" r=".35" />
            <circle cx="37.77" cy="75.14" r=".35" />
            <circle cx="40.77" cy="73.14" r=".35" />
            <circle cx="38.77" cy="73.14" r=".35" />
            <circle cx="36.77" cy="73.14" r=".35" />
            <circle cx="39.77" cy="71.14" r=".35" />
            <circle cx="37.77" cy="71.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fR)`}>
            <circle cx="39.77" cy="79.14" r=".35" />
            <circle cx="37.77" cy="79.14" r=".35" />
            <circle cx="40.77" cy="77.14" r=".35" />
            <circle cx="38.77" cy="77.14" r=".35" />
            <circle cx="36.77" cy="77.14" r=".35" />
            <circle cx="39.77" cy="75.14" r=".35" />
            <circle cx="37.77" cy="75.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fS)`}>
            <circle cx="39.77" cy="83.14" r=".35" />
            <circle cx="37.77" cy="83.14" r=".35" />
            <circle cx="40.77" cy="81.14" r=".35" />
            <circle cx="38.77" cy="81.14" r=".35" />
            <circle cx="36.77" cy="81.14" r=".35" />
            <circle cx="39.77" cy="79.14" r=".35" />
            <circle cx="37.77" cy="79.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fT)`}>
            <circle cx="39.77" cy="87.14" r=".35" />
            <circle cx="37.77" cy="87.14" r=".35" />
            <circle cx="40.77" cy="85.14" r=".35" />
            <circle cx="38.77" cy="85.14" r=".35" />
            <circle cx="36.77" cy="85.14" r=".35" />
            <circle cx="39.77" cy="83.14" r=".35" />
            <circle cx="37.77" cy="83.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fU)`}>
            <circle cx="39.77" cy="91.14" r=".35" />
            <circle cx="37.77" cy="91.14" r=".35" />
            <circle cx="40.77" cy="89.14" r=".35" />
            <circle cx="38.77" cy="89.14" r=".35" />
            <circle cx="36.77" cy="89.14" r=".35" />
            <circle cx="39.77" cy="87.14" r=".35" />
            <circle cx="37.77" cy="87.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fV)`}>
            <circle cx="39.77" cy="95.14" r=".35" />
            <circle cx="37.77" cy="95.14" r=".35" />
            <circle cx="40.77" cy="93.14" r=".35" />
            <circle cx="38.77" cy="93.14" r=".35" />
            <circle cx="36.77" cy="93.14" r=".35" />
            <circle cx="39.77" cy="91.14" r=".35" />
            <circle cx="37.77" cy="91.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fW)`}>
            <circle cx="39.77" cy="99.14" r=".35" />
            <circle cx="37.77" cy="99.14" r=".35" />
            <circle cx="40.77" cy="97.14" r=".35" />
            <circle cx="38.77" cy="97.14" r=".35" />
            <circle cx="36.77" cy="97.14" r=".35" />
            <circle cx="39.77" cy="95.14" r=".35" />
            <circle cx="37.77" cy="95.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fX)`}>
            <circle cx="39.77" cy="103.14" r=".35" />
            <circle cx="37.77" cy="103.14" r=".35" />
            <circle cx="40.77" cy="101.14" r=".35" />
            <circle cx="38.77" cy="101.14" r=".35" />
            <circle cx="36.77" cy="101.14" r=".35" />
            <circle cx="39.77" cy="99.14" r=".35" />
            <circle cx="37.77" cy="99.14" r=".35" />
          </g>
          <g clipPath={`url(#${id}-fY)`}>
            <circle cx="39.77" cy="107.14" r=".35" />
            <circle cx="37.77" cy="107.14" r=".35" />
            <circle cx="40.77" cy="105.14" r=".35" />
            <circle cx="38.77" cy="105.14" r=".35" />
            <circle cx="36.77" cy="105.14" r=".35" />
            <circle cx="39.77" cy="103.14" r=".35" />
            <circle cx="37.77" cy="103.14" r=".35" />
          </g>
        </g>
        <path
          d="m48 114.61c.13 0 7-3.47 7-3.47a28.16 28.16 0 0 0 15.32-25.08v-17.35c0-.39-22.25-8.64-22.45-8.57 0 0-22.44 8.18-22.44 8.57v17.29a28.22 28.22 0 0 0 15.43 25.07s6.91 3.54 7.14 3.54z"
          fill="#feca1e"
        />
        <g clipPath={`url(#${id}-gN)`} fill="#f17732">
          <g clipPath={`url(#${id}-gO)`}>
            <circle cx="70.66" cy="62.21" r=".32" />
            <circle cx="68.86" cy="62.21" r=".32" />
            <circle cx="71.56" cy="60.41" r=".32" />
            <circle cx="69.76" cy="60.41" r=".32" />
            <circle cx="67.96" cy="60.41" r=".32" />
            <circle cx="70.66" cy="58.61" r=".32" />
            <circle cx="68.86" cy="58.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-gP)`}>
            <circle cx="70.66" cy="65.81" r=".32" />
            <circle cx="68.86" cy="65.81" r=".32" />
            <circle cx="71.56" cy="64.01" r=".32" />
            <circle cx="69.76" cy="64.01" r=".32" />
            <circle cx="67.96" cy="64.01" r=".32" />
            <circle cx="70.66" cy="62.21" r=".32" />
            <circle cx="68.86" cy="62.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-gQ)`}>
            <circle cx="70.66" cy="69.41" r=".32" />
            <circle cx="68.86" cy="69.41" r=".32" />
            <circle cx="71.56" cy="67.61" r=".32" />
            <circle cx="69.76" cy="67.61" r=".32" />
            <circle cx="67.96" cy="67.61" r=".32" />
            <circle cx="70.66" cy="65.81" r=".32" />
            <circle cx="68.86" cy="65.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-gR)`}>
            <circle cx="70.66" cy="73.01" r=".32" />
            <circle cx="68.86" cy="73.01" r=".32" />
            <circle cx="71.56" cy="71.21" r=".32" />
            <circle cx="69.76" cy="71.21" r=".32" />
            <circle cx="67.96" cy="71.21" r=".32" />
            <circle cx="70.66" cy="69.41" r=".32" />
            <circle cx="68.86" cy="69.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-gS)`}>
            <circle cx="70.66" cy="76.61" r=".32" />
            <circle cx="68.86" cy="76.61" r=".32" />
            <circle cx="71.56" cy="74.81" r=".32" />
            <circle cx="69.76" cy="74.81" r=".32" />
            <circle cx="67.96" cy="74.81" r=".32" />
            <circle cx="70.66" cy="73.01" r=".32" />
            <circle cx="68.86" cy="73.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-gT)`}>
            <circle cx="70.66" cy="80.21" r=".32" />
            <circle cx="68.86" cy="80.21" r=".32" />
            <circle cx="71.56" cy="78.41" r=".32" />
            <circle cx="69.76" cy="78.41" r=".32" />
            <circle cx="67.96" cy="78.41" r=".32" />
            <circle cx="70.66" cy="76.61" r=".32" />
            <circle cx="68.86" cy="76.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-gU)`}>
            <circle cx="70.66" cy="83.81" r=".32" />
            <circle cx="68.86" cy="83.81" r=".32" />
            <circle cx="71.56" cy="82.01" r=".32" />
            <circle cx="69.76" cy="82.01" r=".32" />
            <circle cx="67.96" cy="82.01" r=".32" />
            <circle cx="70.66" cy="80.21" r=".32" />
            <circle cx="68.86" cy="80.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-gV)`}>
            <circle cx="70.66" cy="87.41" r=".32" />
            <circle cx="68.86" cy="87.41" r=".32" />
            <circle cx="71.56" cy="85.61" r=".32" />
            <circle cx="69.76" cy="85.61" r=".32" />
            <circle cx="67.96" cy="85.61" r=".32" />
            <circle cx="70.66" cy="83.81" r=".32" />
            <circle cx="68.86" cy="83.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-gW)`}>
            <circle cx="70.66" cy="91.01" r=".32" />
            <circle cx="68.86" cy="91.01" r=".32" />
            <circle cx="71.56" cy="89.21" r=".32" />
            <circle cx="69.76" cy="89.21" r=".32" />
            <circle cx="67.96" cy="89.21" r=".32" />
            <circle cx="70.66" cy="87.41" r=".32" />
            <circle cx="68.86" cy="87.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-gX)`}>
            <circle cx="70.66" cy="94.61" r=".32" />
            <circle cx="68.86" cy="94.61" r=".32" />
            <circle cx="71.56" cy="92.81" r=".32" />
            <circle cx="69.76" cy="92.81" r=".32" />
            <circle cx="67.96" cy="92.81" r=".32" />
            <circle cx="70.66" cy="91.01" r=".32" />
            <circle cx="68.86" cy="91.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-gY)`}>
            <circle cx="70.66" cy="98.21" r=".32" />
            <circle cx="68.86" cy="98.21" r=".32" />
            <circle cx="71.56" cy="96.41" r=".32" />
            <circle cx="69.76" cy="96.41" r=".32" />
            <circle cx="67.96" cy="96.41" r=".32" />
            <circle cx="70.66" cy="94.61" r=".32" />
            <circle cx="68.86" cy="94.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-gZ)`}>
            <circle cx="70.66" cy="101.81" r=".32" />
            <circle cx="68.86" cy="101.81" r=".32" />
            <circle cx="71.56" cy="100.01" r=".32" />
            <circle cx="69.76" cy="100.01" r=".32" />
            <circle cx="67.96" cy="100.01" r=".32" />
            <circle cx="70.66" cy="98.21" r=".32" />
            <circle cx="68.86" cy="98.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-g0)`}>
            <circle cx="70.66" cy="105.41" r=".32" />
            <circle cx="68.86" cy="105.41" r=".32" />
            <circle cx="71.56" cy="103.61" r=".32" />
            <circle cx="69.76" cy="103.61" r=".32" />
            <circle cx="67.96" cy="103.61" r=".32" />
            <circle cx="70.66" cy="101.81" r=".32" />
            <circle cx="68.86" cy="101.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-g1)`}>
            <circle cx="70.66" cy="109.01" r=".32" />
            <circle cx="68.86" cy="109.01" r=".32" />
            <circle cx="71.56" cy="107.21" r=".32" />
            <circle cx="69.76" cy="107.21" r=".32" />
            <circle cx="67.96" cy="107.21" r=".32" />
            <circle cx="70.66" cy="105.41" r=".32" />
            <circle cx="68.86" cy="105.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-g2)`}>
            <circle cx="70.66" cy="112.61" r=".32" />
            <circle cx="68.86" cy="112.61" r=".32" />
            <circle cx="71.56" cy="110.81" r=".32" />
            <circle cx="69.76" cy="110.81" r=".32" />
            <circle cx="67.96" cy="110.81" r=".32" />
            <circle cx="70.66" cy="109.01" r=".32" />
            <circle cx="68.86" cy="109.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-g3)`}>
            <circle cx="70.66" cy="116.21" r=".32" />
            <circle cx="68.86" cy="116.21" r=".32" />
            <circle cx="71.56" cy="114.41" r=".32" />
            <circle cx="69.76" cy="114.41" r=".32" />
            <circle cx="67.96" cy="114.41" r=".32" />
            <circle cx="70.66" cy="112.61" r=".32" />
            <circle cx="68.86" cy="112.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-g4)`}>
            <circle cx="67.06" cy="62.21" r=".32" />
            <circle cx="65.26" cy="62.21" r=".32" />
            <circle cx="67.96" cy="60.41" r=".32" />
            <circle cx="66.16" cy="60.41" r=".32" />
            <circle cx="64.36" cy="60.41" r=".32" />
            <circle cx="67.06" cy="58.61" r=".32" />
            <circle cx="65.26" cy="58.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-g5)`}>
            <circle cx="67.06" cy="65.81" r=".32" />
            <circle cx="65.26" cy="65.81" r=".32" />
            <circle cx="67.96" cy="64.01" r=".32" />
            <circle cx="66.16" cy="64.01" r=".32" />
            <circle cx="64.36" cy="64.01" r=".32" />
            <circle cx="67.06" cy="62.21" r=".32" />
            <circle cx="65.26" cy="62.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-g6)`}>
            <circle cx="67.06" cy="69.41" r=".32" />
            <circle cx="65.26" cy="69.41" r=".32" />
            <circle cx="67.96" cy="67.61" r=".32" />
            <circle cx="66.16" cy="67.61" r=".32" />
            <circle cx="64.36" cy="67.61" r=".32" />
            <circle cx="67.06" cy="65.81" r=".32" />
            <circle cx="65.26" cy="65.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-g7)`}>
            <circle cx="67.06" cy="73.01" r=".32" />
            <circle cx="65.26" cy="73.01" r=".32" />
            <circle cx="67.96" cy="71.21" r=".32" />
            <circle cx="66.16" cy="71.21" r=".32" />
            <circle cx="64.36" cy="71.21" r=".32" />
            <circle cx="67.06" cy="69.41" r=".32" />
            <circle cx="65.26" cy="69.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-g8)`}>
            <circle cx="67.06" cy="76.61" r=".32" />
            <circle cx="65.26" cy="76.61" r=".32" />
            <circle cx="67.96" cy="74.81" r=".32" />
            <circle cx="66.16" cy="74.81" r=".32" />
            <circle cx="64.36" cy="74.81" r=".32" />
            <circle cx="67.06" cy="73.01" r=".32" />
            <circle cx="65.26" cy="73.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-g9)`}>
            <circle cx="67.06" cy="80.21" r=".32" />
            <circle cx="65.26" cy="80.21" r=".32" />
            <circle cx="67.96" cy="78.41" r=".32" />
            <circle cx="66.16" cy="78.41" r=".32" />
            <circle cx="64.36" cy="78.41" r=".32" />
            <circle cx="67.06" cy="76.61" r=".32" />
            <circle cx="65.26" cy="76.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-ha)`}>
            <circle cx="67.06" cy="83.81" r=".32" />
            <circle cx="65.26" cy="83.81" r=".32" />
            <circle cx="67.96" cy="82.01" r=".32" />
            <circle cx="66.16" cy="82.01" r=".32" />
            <circle cx="64.36" cy="82.01" r=".32" />
            <circle cx="67.06" cy="80.21" r=".32" />
            <circle cx="65.26" cy="80.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hb)`}>
            <circle cx="67.06" cy="87.41" r=".32" />
            <circle cx="65.26" cy="87.41" r=".32" />
            <circle cx="67.96" cy="85.61" r=".32" />
            <circle cx="66.16" cy="85.61" r=".32" />
            <circle cx="64.36" cy="85.61" r=".32" />
            <circle cx="67.06" cy="83.81" r=".32" />
            <circle cx="65.26" cy="83.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hc)`}>
            <circle cx="67.06" cy="91.01" r=".32" />
            <circle cx="65.26" cy="91.01" r=".32" />
            <circle cx="67.96" cy="89.21" r=".32" />
            <circle cx="66.16" cy="89.21" r=".32" />
            <circle cx="64.36" cy="89.21" r=".32" />
            <circle cx="67.06" cy="87.41" r=".32" />
            <circle cx="65.26" cy="87.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hd)`}>
            <circle cx="67.06" cy="94.61" r=".32" />
            <circle cx="65.26" cy="94.61" r=".32" />
            <circle cx="67.96" cy="92.81" r=".32" />
            <circle cx="66.16" cy="92.81" r=".32" />
            <circle cx="64.36" cy="92.81" r=".32" />
            <circle cx="67.06" cy="91.01" r=".32" />
            <circle cx="65.26" cy="91.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-he)`}>
            <circle cx="67.06" cy="98.21" r=".32" />
            <circle cx="65.26" cy="98.21" r=".32" />
            <circle cx="67.96" cy="96.41" r=".32" />
            <circle cx="66.16" cy="96.41" r=".32" />
            <circle cx="64.36" cy="96.41" r=".32" />
            <circle cx="67.06" cy="94.61" r=".32" />
            <circle cx="65.26" cy="94.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hf)`}>
            <circle cx="67.06" cy="101.81" r=".32" />
            <circle cx="65.26" cy="101.81" r=".32" />
            <circle cx="67.96" cy="100.01" r=".32" />
            <circle cx="66.16" cy="100.01" r=".32" />
            <circle cx="64.36" cy="100.01" r=".32" />
            <circle cx="67.06" cy="98.21" r=".32" />
            <circle cx="65.26" cy="98.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hg)`}>
            <circle cx="67.06" cy="105.41" r=".32" />
            <circle cx="65.26" cy="105.41" r=".32" />
            <circle cx="67.96" cy="103.61" r=".32" />
            <circle cx="66.16" cy="103.61" r=".32" />
            <circle cx="64.36" cy="103.61" r=".32" />
            <circle cx="67.06" cy="101.81" r=".32" />
            <circle cx="65.26" cy="101.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hh)`}>
            <circle cx="67.06" cy="109.01" r=".32" />
            <circle cx="65.26" cy="109.01" r=".32" />
            <circle cx="67.96" cy="107.21" r=".32" />
            <circle cx="66.16" cy="107.21" r=".32" />
            <circle cx="64.36" cy="107.21" r=".32" />
            <circle cx="67.06" cy="105.41" r=".32" />
            <circle cx="65.26" cy="105.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hi)`}>
            <circle cx="67.06" cy="112.61" r=".32" />
            <circle cx="65.26" cy="112.61" r=".32" />
            <circle cx="67.96" cy="110.81" r=".32" />
            <circle cx="66.16" cy="110.81" r=".32" />
            <circle cx="64.36" cy="110.81" r=".32" />
            <circle cx="67.06" cy="109.01" r=".32" />
            <circle cx="65.26" cy="109.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hj)`}>
            <circle cx="67.06" cy="116.21" r=".32" />
            <circle cx="65.26" cy="116.21" r=".32" />
            <circle cx="67.96" cy="114.41" r=".32" />
            <circle cx="66.16" cy="114.41" r=".32" />
            <circle cx="64.36" cy="114.41" r=".32" />
            <circle cx="67.06" cy="112.61" r=".32" />
            <circle cx="65.26" cy="112.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hk)`}>
            <circle cx="63.46" cy="62.21" r=".32" />
            <circle cx="61.66" cy="62.21" r=".32" />
            <circle cx="64.36" cy="60.41" r=".32" />
            <circle cx="62.56" cy="60.41" r=".32" />
            <circle cx="60.76" cy="60.41" r=".32" />
            <circle cx="63.46" cy="58.61" r=".32" />
            <circle cx="61.66" cy="58.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hl)`}>
            <circle cx="63.46" cy="65.81" r=".32" />
            <circle cx="61.66" cy="65.81" r=".32" />
            <circle cx="64.36" cy="64.01" r=".32" />
            <circle cx="62.56" cy="64.01" r=".32" />
            <circle cx="60.76" cy="64.01" r=".32" />
            <circle cx="63.46" cy="62.21" r=".32" />
            <circle cx="61.66" cy="62.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hm)`}>
            <circle cx="63.46" cy="69.41" r=".32" />
            <circle cx="61.66" cy="69.41" r=".32" />
            <circle cx="64.36" cy="67.61" r=".32" />
            <circle cx="62.56" cy="67.61" r=".32" />
            <circle cx="60.76" cy="67.61" r=".32" />
            <circle cx="63.46" cy="65.81" r=".32" />
            <circle cx="61.66" cy="65.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hn)`}>
            <circle cx="63.46" cy="73.01" r=".32" />
            <circle cx="61.66" cy="73.01" r=".32" />
            <circle cx="64.36" cy="71.21" r=".32" />
            <circle cx="62.56" cy="71.21" r=".32" />
            <circle cx="60.76" cy="71.21" r=".32" />
            <circle cx="63.46" cy="69.41" r=".32" />
            <circle cx="61.66" cy="69.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-ho)`}>
            <circle cx="63.46" cy="76.61" r=".32" />
            <circle cx="61.66" cy="76.61" r=".32" />
            <circle cx="64.36" cy="74.81" r=".32" />
            <circle cx="62.56" cy="74.81" r=".32" />
            <circle cx="60.76" cy="74.81" r=".32" />
            <circle cx="63.46" cy="73.01" r=".32" />
            <circle cx="61.66" cy="73.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hp)`}>
            <circle cx="63.46" cy="80.21" r=".32" />
            <circle cx="61.66" cy="80.21" r=".32" />
            <circle cx="64.36" cy="78.41" r=".32" />
            <circle cx="62.56" cy="78.41" r=".32" />
            <circle cx="60.76" cy="78.41" r=".32" />
            <circle cx="63.46" cy="76.61" r=".32" />
            <circle cx="61.66" cy="76.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hq)`}>
            <circle cx="63.46" cy="83.81" r=".32" />
            <circle cx="61.66" cy="83.81" r=".32" />
            <circle cx="64.36" cy="82.01" r=".32" />
            <circle cx="62.56" cy="82.01" r=".32" />
            <circle cx="60.76" cy="82.01" r=".32" />
            <circle cx="63.46" cy="80.21" r=".32" />
            <circle cx="61.66" cy="80.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hr)`}>
            <circle cx="63.46" cy="87.41" r=".32" />
            <circle cx="61.66" cy="87.41" r=".32" />
            <circle cx="64.36" cy="85.61" r=".32" />
            <circle cx="62.56" cy="85.61" r=".32" />
            <circle cx="60.76" cy="85.61" r=".32" />
            <circle cx="63.46" cy="83.81" r=".32" />
            <circle cx="61.66" cy="83.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hs)`}>
            <circle cx="63.46" cy="91.01" r=".32" />
            <circle cx="61.66" cy="91.01" r=".32" />
            <circle cx="64.36" cy="89.21" r=".32" />
            <circle cx="62.56" cy="89.21" r=".32" />
            <circle cx="60.76" cy="89.21" r=".32" />
            <circle cx="63.46" cy="87.41" r=".32" />
            <circle cx="61.66" cy="87.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-ht)`}>
            <circle cx="63.46" cy="94.61" r=".32" />
            <circle cx="61.66" cy="94.61" r=".32" />
            <circle cx="64.36" cy="92.81" r=".32" />
            <circle cx="62.56" cy="92.81" r=".32" />
            <circle cx="60.76" cy="92.81" r=".32" />
            <circle cx="63.46" cy="91.01" r=".32" />
            <circle cx="61.66" cy="91.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hu)`}>
            <circle cx="63.46" cy="98.21" r=".32" />
            <circle cx="61.66" cy="98.21" r=".32" />
            <circle cx="64.36" cy="96.41" r=".32" />
            <circle cx="62.56" cy="96.41" r=".32" />
            <circle cx="60.76" cy="96.41" r=".32" />
            <circle cx="63.46" cy="94.61" r=".32" />
            <circle cx="61.66" cy="94.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hv)`}>
            <circle cx="63.46" cy="101.81" r=".32" />
            <circle cx="61.66" cy="101.81" r=".32" />
            <circle cx="64.36" cy="100.01" r=".32" />
            <circle cx="62.56" cy="100.01" r=".32" />
            <circle cx="60.76" cy="100.01" r=".32" />
            <circle cx="63.46" cy="98.21" r=".32" />
            <circle cx="61.66" cy="98.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hw)`}>
            <circle cx="63.46" cy="105.41" r=".32" />
            <circle cx="61.66" cy="105.41" r=".32" />
            <circle cx="64.36" cy="103.61" r=".32" />
            <circle cx="62.56" cy="103.61" r=".32" />
            <circle cx="60.76" cy="103.61" r=".32" />
            <circle cx="63.46" cy="101.81" r=".32" />
            <circle cx="61.66" cy="101.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hx)`}>
            <circle cx="63.46" cy="109.01" r=".32" />
            <circle cx="61.66" cy="109.01" r=".32" />
            <circle cx="64.36" cy="107.21" r=".32" />
            <circle cx="62.56" cy="107.21" r=".32" />
            <circle cx="60.76" cy="107.21" r=".32" />
            <circle cx="63.46" cy="105.41" r=".32" />
            <circle cx="61.66" cy="105.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hy)`}>
            <circle cx="63.46" cy="112.61" r=".32" />
            <circle cx="61.66" cy="112.61" r=".32" />
            <circle cx="64.36" cy="110.81" r=".32" />
            <circle cx="62.56" cy="110.81" r=".32" />
            <circle cx="60.76" cy="110.81" r=".32" />
            <circle cx="63.46" cy="109.01" r=".32" />
            <circle cx="61.66" cy="109.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hz)`}>
            <circle cx="63.46" cy="116.21" r=".32" />
            <circle cx="61.66" cy="116.21" r=".32" />
            <circle cx="64.36" cy="114.41" r=".32" />
            <circle cx="62.56" cy="114.41" r=".32" />
            <circle cx="60.76" cy="114.41" r=".32" />
            <circle cx="63.46" cy="112.61" r=".32" />
            <circle cx="61.66" cy="112.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hA)`}>
            <circle cx="59.86" cy="62.21" r=".32" />
            <circle cx="58.06" cy="62.21" r=".32" />
            <circle cx="60.76" cy="60.41" r=".32" />
            <circle cx="58.96" cy="60.41" r=".32" />
            <circle cx="57.16" cy="60.41" r=".32" />
            <circle cx="59.86" cy="58.61" r=".32" />
            <circle cx="58.06" cy="58.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hB)`}>
            <circle cx="59.86" cy="65.81" r=".32" />
            <circle cx="58.06" cy="65.81" r=".32" />
            <circle cx="60.76" cy="64.01" r=".32" />
            <circle cx="58.96" cy="64.01" r=".32" />
            <circle cx="57.16" cy="64.01" r=".32" />
            <circle cx="59.86" cy="62.21" r=".32" />
            <circle cx="58.06" cy="62.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hC)`}>
            <circle cx="59.86" cy="69.41" r=".32" />
            <circle cx="58.06" cy="69.41" r=".32" />
            <circle cx="60.76" cy="67.61" r=".32" />
            <circle cx="58.96" cy="67.61" r=".32" />
            <circle cx="57.16" cy="67.61" r=".32" />
            <circle cx="59.86" cy="65.81" r=".32" />
            <circle cx="58.06" cy="65.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hD)`}>
            <circle cx="59.86" cy="73.01" r=".32" />
            <circle cx="58.06" cy="73.01" r=".32" />
            <circle cx="60.76" cy="71.21" r=".32" />
            <circle cx="58.96" cy="71.21" r=".32" />
            <circle cx="57.16" cy="71.21" r=".32" />
            <circle cx="59.86" cy="69.41" r=".32" />
            <circle cx="58.06" cy="69.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hE)`}>
            <circle cx="59.86" cy="76.61" r=".32" />
            <circle cx="58.06" cy="76.61" r=".32" />
            <circle cx="60.76" cy="74.81" r=".32" />
            <circle cx="58.96" cy="74.81" r=".32" />
            <circle cx="57.16" cy="74.81" r=".32" />
            <circle cx="59.86" cy="73.01" r=".32" />
            <circle cx="58.06" cy="73.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hF)`}>
            <circle cx="59.86" cy="80.21" r=".32" />
            <circle cx="58.06" cy="80.21" r=".32" />
            <circle cx="60.76" cy="78.41" r=".32" />
            <circle cx="58.96" cy="78.41" r=".32" />
            <circle cx="57.16" cy="78.41" r=".32" />
            <circle cx="59.86" cy="76.61" r=".32" />
            <circle cx="58.06" cy="76.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hG)`}>
            <circle cx="59.86" cy="83.81" r=".32" />
            <circle cx="58.06" cy="83.81" r=".32" />
            <circle cx="60.76" cy="82.01" r=".32" />
            <circle cx="58.96" cy="82.01" r=".32" />
            <circle cx="57.16" cy="82.01" r=".32" />
            <circle cx="59.86" cy="80.21" r=".32" />
            <circle cx="58.06" cy="80.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hH)`}>
            <circle cx="59.86" cy="87.41" r=".32" />
            <circle cx="58.06" cy="87.41" r=".32" />
            <circle cx="60.76" cy="85.61" r=".32" />
            <circle cx="58.96" cy="85.61" r=".32" />
            <circle cx="57.16" cy="85.61" r=".32" />
            <circle cx="59.86" cy="83.81" r=".32" />
            <circle cx="58.06" cy="83.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hI)`}>
            <circle cx="59.86" cy="91.01" r=".32" />
            <circle cx="58.06" cy="91.01" r=".32" />
            <circle cx="60.76" cy="89.21" r=".32" />
            <circle cx="58.96" cy="89.21" r=".32" />
            <circle cx="57.16" cy="89.21" r=".32" />
            <circle cx="59.86" cy="87.41" r=".32" />
            <circle cx="58.06" cy="87.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hJ)`}>
            <circle cx="59.86" cy="94.61" r=".32" />
            <circle cx="58.06" cy="94.61" r=".32" />
            <circle cx="60.76" cy="92.81" r=".32" />
            <circle cx="58.96" cy="92.81" r=".32" />
            <circle cx="57.16" cy="92.81" r=".32" />
            <circle cx="59.86" cy="91.01" r=".32" />
            <circle cx="58.06" cy="91.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hK)`}>
            <circle cx="59.86" cy="98.21" r=".32" />
            <circle cx="58.06" cy="98.21" r=".32" />
            <circle cx="60.76" cy="96.41" r=".32" />
            <circle cx="58.96" cy="96.41" r=".32" />
            <circle cx="57.16" cy="96.41" r=".32" />
            <circle cx="59.86" cy="94.61" r=".32" />
            <circle cx="58.06" cy="94.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hL)`}>
            <circle cx="59.86" cy="101.81" r=".32" />
            <circle cx="58.06" cy="101.81" r=".32" />
            <circle cx="60.76" cy="100.01" r=".32" />
            <circle cx="58.96" cy="100.01" r=".32" />
            <circle cx="57.16" cy="100.01" r=".32" />
            <circle cx="59.86" cy="98.21" r=".32" />
            <circle cx="58.06" cy="98.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hM)`}>
            <circle cx="59.86" cy="105.41" r=".32" />
            <circle cx="58.06" cy="105.41" r=".32" />
            <circle cx="60.76" cy="103.61" r=".32" />
            <circle cx="58.96" cy="103.61" r=".32" />
            <circle cx="57.16" cy="103.61" r=".32" />
            <circle cx="59.86" cy="101.81" r=".32" />
            <circle cx="58.06" cy="101.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hN)`}>
            <circle cx="59.86" cy="109.01" r=".32" />
            <circle cx="58.06" cy="109.01" r=".32" />
            <circle cx="60.76" cy="107.21" r=".32" />
            <circle cx="58.96" cy="107.21" r=".32" />
            <circle cx="57.16" cy="107.21" r=".32" />
            <circle cx="59.86" cy="105.41" r=".32" />
            <circle cx="58.06" cy="105.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hO)`}>
            <circle cx="59.86" cy="112.61" r=".32" />
            <circle cx="58.06" cy="112.61" r=".32" />
            <circle cx="60.76" cy="110.81" r=".32" />
            <circle cx="58.96" cy="110.81" r=".32" />
            <circle cx="57.16" cy="110.81" r=".32" />
            <circle cx="59.86" cy="109.01" r=".32" />
            <circle cx="58.06" cy="109.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hP)`}>
            <circle cx="59.86" cy="116.21" r=".32" />
            <circle cx="58.06" cy="116.21" r=".32" />
            <circle cx="60.76" cy="114.41" r=".32" />
            <circle cx="58.96" cy="114.41" r=".32" />
            <circle cx="57.16" cy="114.41" r=".32" />
            <circle cx="59.86" cy="112.61" r=".32" />
            <circle cx="58.06" cy="112.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hQ)`}>
            <circle cx="56.26" cy="62.21" r=".32" />
            <circle cx="54.46" cy="62.21" r=".32" />
            <circle cx="57.16" cy="60.41" r=".32" />
            <circle cx="55.36" cy="60.41" r=".32" />
            <circle cx="53.56" cy="60.41" r=".32" />
            <circle cx="56.26" cy="58.61" r=".32" />
            <circle cx="54.46" cy="58.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hR)`}>
            <circle cx="56.26" cy="65.81" r=".32" />
            <circle cx="54.46" cy="65.81" r=".32" />
            <circle cx="57.16" cy="64.01" r=".32" />
            <circle cx="55.36" cy="64.01" r=".32" />
            <circle cx="53.56" cy="64.01" r=".32" />
            <circle cx="56.26" cy="62.21" r=".32" />
            <circle cx="54.46" cy="62.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hS)`}>
            <circle cx="56.26" cy="69.41" r=".32" />
            <circle cx="54.46" cy="69.41" r=".32" />
            <circle cx="57.16" cy="67.61" r=".32" />
            <circle cx="55.36" cy="67.61" r=".32" />
            <circle cx="53.56" cy="67.61" r=".32" />
            <circle cx="56.26" cy="65.81" r=".32" />
            <circle cx="54.46" cy="65.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hT)`}>
            <circle cx="56.26" cy="73.01" r=".32" />
            <circle cx="54.46" cy="73.01" r=".32" />
            <circle cx="57.16" cy="71.21" r=".32" />
            <circle cx="55.36" cy="71.21" r=".32" />
            <circle cx="53.56" cy="71.21" r=".32" />
            <circle cx="56.26" cy="69.41" r=".32" />
            <circle cx="54.46" cy="69.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hU)`}>
            <circle cx="56.26" cy="76.61" r=".32" />
            <circle cx="54.46" cy="76.61" r=".32" />
            <circle cx="57.16" cy="74.81" r=".32" />
            <circle cx="55.36" cy="74.81" r=".32" />
            <circle cx="53.56" cy="74.81" r=".32" />
            <circle cx="56.26" cy="73.01" r=".32" />
            <circle cx="54.46" cy="73.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hV)`}>
            <circle cx="56.26" cy="80.21" r=".32" />
            <circle cx="54.46" cy="80.21" r=".32" />
            <circle cx="57.16" cy="78.41" r=".32" />
            <circle cx="55.36" cy="78.41" r=".32" />
            <circle cx="53.56" cy="78.41" r=".32" />
            <circle cx="56.26" cy="76.61" r=".32" />
            <circle cx="54.46" cy="76.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hW)`}>
            <circle cx="56.26" cy="83.81" r=".32" />
            <circle cx="54.46" cy="83.81" r=".32" />
            <circle cx="57.16" cy="82.01" r=".32" />
            <circle cx="55.36" cy="82.01" r=".32" />
            <circle cx="53.56" cy="82.01" r=".32" />
            <circle cx="56.26" cy="80.21" r=".32" />
            <circle cx="54.46" cy="80.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hX)`}>
            <circle cx="56.26" cy="87.41" r=".32" />
            <circle cx="54.46" cy="87.41" r=".32" />
            <circle cx="57.16" cy="85.61" r=".32" />
            <circle cx="55.36" cy="85.61" r=".32" />
            <circle cx="53.56" cy="85.61" r=".32" />
            <circle cx="56.26" cy="83.81" r=".32" />
            <circle cx="54.46" cy="83.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hY)`}>
            <circle cx="56.26" cy="91.01" r=".32" />
            <circle cx="54.46" cy="91.01" r=".32" />
            <circle cx="57.16" cy="89.21" r=".32" />
            <circle cx="55.36" cy="89.21" r=".32" />
            <circle cx="53.56" cy="89.21" r=".32" />
            <circle cx="56.26" cy="87.41" r=".32" />
            <circle cx="54.46" cy="87.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hZ)`}>
            <circle cx="56.26" cy="94.61" r=".32" />
            <circle cx="54.46" cy="94.61" r=".32" />
            <circle cx="57.16" cy="92.81" r=".32" />
            <circle cx="55.36" cy="92.81" r=".32" />
            <circle cx="53.56" cy="92.81" r=".32" />
            <circle cx="56.26" cy="91.01" r=".32" />
            <circle cx="54.46" cy="91.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-h0)`}>
            <circle cx="56.26" cy="98.21" r=".32" />
            <circle cx="54.46" cy="98.21" r=".32" />
            <circle cx="57.16" cy="96.41" r=".32" />
            <circle cx="55.36" cy="96.41" r=".32" />
            <circle cx="53.56" cy="96.41" r=".32" />
            <circle cx="56.26" cy="94.61" r=".32" />
            <circle cx="54.46" cy="94.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-h1)`}>
            <circle cx="56.26" cy="101.81" r=".32" />
            <circle cx="54.46" cy="101.81" r=".32" />
            <circle cx="57.16" cy="100.01" r=".32" />
            <circle cx="55.36" cy="100.01" r=".32" />
            <circle cx="53.56" cy="100.01" r=".32" />
            <circle cx="56.26" cy="98.21" r=".32" />
            <circle cx="54.46" cy="98.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-h2)`}>
            <circle cx="56.26" cy="105.41" r=".32" />
            <circle cx="54.46" cy="105.41" r=".32" />
            <circle cx="57.16" cy="103.61" r=".32" />
            <circle cx="55.36" cy="103.61" r=".32" />
            <circle cx="53.56" cy="103.61" r=".32" />
            <circle cx="56.26" cy="101.81" r=".32" />
            <circle cx="54.46" cy="101.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-h3)`}>
            <circle cx="56.26" cy="109.01" r=".32" />
            <circle cx="54.46" cy="109.01" r=".32" />
            <circle cx="57.16" cy="107.21" r=".32" />
            <circle cx="55.36" cy="107.21" r=".32" />
            <circle cx="53.56" cy="107.21" r=".32" />
            <circle cx="56.26" cy="105.41" r=".32" />
            <circle cx="54.46" cy="105.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-h4)`}>
            <circle cx="56.26" cy="112.61" r=".32" />
            <circle cx="54.46" cy="112.61" r=".32" />
            <circle cx="57.16" cy="110.81" r=".32" />
            <circle cx="55.36" cy="110.81" r=".32" />
            <circle cx="53.56" cy="110.81" r=".32" />
            <circle cx="56.26" cy="109.01" r=".32" />
            <circle cx="54.46" cy="109.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-h5)`}>
            <circle cx="56.26" cy="116.21" r=".32" />
            <circle cx="54.46" cy="116.21" r=".32" />
            <circle cx="57.16" cy="114.41" r=".32" />
            <circle cx="55.36" cy="114.41" r=".32" />
            <circle cx="53.56" cy="114.41" r=".32" />
            <circle cx="56.26" cy="112.61" r=".32" />
            <circle cx="54.46" cy="112.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-h6)`}>
            <circle cx="52.66" cy="62.21" r=".32" />
            <circle cx="50.86" cy="62.21" r=".32" />
            <circle cx="53.56" cy="60.41" r=".32" />
            <circle cx="51.76" cy="60.41" r=".32" />
            <circle cx="49.96" cy="60.41" r=".32" />
            <circle cx="52.66" cy="58.61" r=".32" />
            <circle cx="50.86" cy="58.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-h7)`}>
            <circle cx="52.66" cy="65.81" r=".32" />
            <circle cx="50.86" cy="65.81" r=".32" />
            <circle cx="53.56" cy="64.01" r=".32" />
            <circle cx="51.76" cy="64.01" r=".32" />
            <circle cx="49.96" cy="64.01" r=".32" />
            <circle cx="52.66" cy="62.21" r=".32" />
            <circle cx="50.86" cy="62.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-h8)`}>
            <circle cx="52.66" cy="69.41" r=".32" />
            <circle cx="50.86" cy="69.41" r=".32" />
            <circle cx="53.56" cy="67.61" r=".32" />
            <circle cx="51.76" cy="67.61" r=".32" />
            <circle cx="49.96" cy="67.61" r=".32" />
            <circle cx="52.66" cy="65.81" r=".32" />
            <circle cx="50.86" cy="65.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-h9)`}>
            <circle cx="52.66" cy="73.01" r=".32" />
            <circle cx="50.86" cy="73.01" r=".32" />
            <circle cx="53.56" cy="71.21" r=".32" />
            <circle cx="51.76" cy="71.21" r=".32" />
            <circle cx="49.96" cy="71.21" r=".32" />
            <circle cx="52.66" cy="69.41" r=".32" />
            <circle cx="50.86" cy="69.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-ia)`}>
            <circle cx="52.66" cy="76.61" r=".32" />
            <circle cx="50.86" cy="76.61" r=".32" />
            <circle cx="53.56" cy="74.81" r=".32" />
            <circle cx="51.76" cy="74.81" r=".32" />
            <circle cx="49.96" cy="74.81" r=".32" />
            <circle cx="52.66" cy="73.01" r=".32" />
            <circle cx="50.86" cy="73.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-ib)`}>
            <circle cx="52.66" cy="80.21" r=".32" />
            <circle cx="50.86" cy="80.21" r=".32" />
            <circle cx="53.56" cy="78.41" r=".32" />
            <circle cx="51.76" cy="78.41" r=".32" />
            <circle cx="49.96" cy="78.41" r=".32" />
            <circle cx="52.66" cy="76.61" r=".32" />
            <circle cx="50.86" cy="76.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-ic)`}>
            <circle cx="52.66" cy="83.81" r=".32" />
            <circle cx="50.86" cy="83.81" r=".32" />
            <circle cx="53.56" cy="82.01" r=".32" />
            <circle cx="51.76" cy="82.01" r=".32" />
            <circle cx="49.96" cy="82.01" r=".32" />
            <circle cx="52.66" cy="80.21" r=".32" />
            <circle cx="50.86" cy="80.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-id)`}>
            <circle cx="52.66" cy="87.41" r=".32" />
            <circle cx="50.86" cy="87.41" r=".32" />
            <circle cx="53.56" cy="85.61" r=".32" />
            <circle cx="51.76" cy="85.61" r=".32" />
            <circle cx="49.96" cy="85.61" r=".32" />
            <circle cx="52.66" cy="83.81" r=".32" />
            <circle cx="50.86" cy="83.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-ie)`}>
            <circle cx="52.66" cy="91.01" r=".32" />
            <circle cx="50.86" cy="91.01" r=".32" />
            <circle cx="53.56" cy="89.21" r=".32" />
            <circle cx="51.76" cy="89.21" r=".32" />
            <circle cx="49.96" cy="89.21" r=".32" />
            <circle cx="52.66" cy="87.41" r=".32" />
            <circle cx="50.86" cy="87.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-if)`}>
            <circle cx="52.66" cy="94.61" r=".32" />
            <circle cx="50.86" cy="94.61" r=".32" />
            <circle cx="53.56" cy="92.81" r=".32" />
            <circle cx="51.76" cy="92.81" r=".32" />
            <circle cx="49.96" cy="92.81" r=".32" />
            <circle cx="52.66" cy="91.01" r=".32" />
            <circle cx="50.86" cy="91.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-ig)`}>
            <circle cx="52.66" cy="98.21" r=".32" />
            <circle cx="50.86" cy="98.21" r=".32" />
            <circle cx="53.56" cy="96.41" r=".32" />
            <circle cx="51.76" cy="96.41" r=".32" />
            <circle cx="49.96" cy="96.41" r=".32" />
            <circle cx="52.66" cy="94.61" r=".32" />
            <circle cx="50.86" cy="94.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-ih)`}>
            <circle cx="52.66" cy="101.81" r=".32" />
            <circle cx="50.86" cy="101.81" r=".32" />
            <circle cx="53.56" cy="100.01" r=".32" />
            <circle cx="51.76" cy="100.01" r=".32" />
            <circle cx="49.96" cy="100.01" r=".32" />
            <circle cx="52.66" cy="98.21" r=".32" />
            <circle cx="50.86" cy="98.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-ii)`}>
            <circle cx="52.66" cy="105.41" r=".32" />
            <circle cx="50.86" cy="105.41" r=".32" />
            <circle cx="53.56" cy="103.61" r=".32" />
            <circle cx="51.76" cy="103.61" r=".32" />
            <circle cx="49.96" cy="103.61" r=".32" />
            <circle cx="52.66" cy="101.81" r=".32" />
            <circle cx="50.86" cy="101.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-ij)`}>
            <circle cx="52.66" cy="109.01" r=".32" />
            <circle cx="50.86" cy="109.01" r=".32" />
            <circle cx="53.56" cy="107.21" r=".32" />
            <circle cx="51.76" cy="107.21" r=".32" />
            <circle cx="49.96" cy="107.21" r=".32" />
            <circle cx="52.66" cy="105.41" r=".32" />
            <circle cx="50.86" cy="105.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-ik)`}>
            <circle cx="52.66" cy="112.61" r=".32" />
            <circle cx="50.86" cy="112.61" r=".32" />
            <circle cx="53.56" cy="110.81" r=".32" />
            <circle cx="51.76" cy="110.81" r=".32" />
            <circle cx="49.96" cy="110.81" r=".32" />
            <circle cx="52.66" cy="109.01" r=".32" />
            <circle cx="50.86" cy="109.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-il)`}>
            <circle cx="52.66" cy="116.21" r=".32" />
            <circle cx="50.86" cy="116.21" r=".32" />
            <circle cx="53.56" cy="114.41" r=".32" />
            <circle cx="51.76" cy="114.41" r=".32" />
            <circle cx="49.96" cy="114.41" r=".32" />
            <circle cx="52.66" cy="112.61" r=".32" />
            <circle cx="50.86" cy="112.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-im)`}>
            <circle cx="49.06" cy="62.21" r=".32" />
            <circle cx="47.26" cy="62.21" r=".32" />
            <circle cx="49.96" cy="60.41" r=".32" />
            <circle cx="48.16" cy="60.41" r=".32" />
            <circle cx="46.36" cy="60.41" r=".32" />
            <circle cx="49.06" cy="58.61" r=".32" />
            <circle cx="47.26" cy="58.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-in)`}>
            <circle cx="49.06" cy="65.81" r=".32" />
            <circle cx="47.26" cy="65.81" r=".32" />
            <circle cx="49.96" cy="64.01" r=".32" />
            <circle cx="48.16" cy="64.01" r=".32" />
            <circle cx="46.36" cy="64.01" r=".32" />
            <circle cx="49.06" cy="62.21" r=".32" />
            <circle cx="47.26" cy="62.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-io)`}>
            <circle cx="49.06" cy="69.41" r=".32" />
            <circle cx="47.26" cy="69.41" r=".32" />
            <circle cx="49.96" cy="67.61" r=".32" />
            <circle cx="48.16" cy="67.61" r=".32" />
            <circle cx="46.36" cy="67.61" r=".32" />
            <circle cx="49.06" cy="65.81" r=".32" />
            <circle cx="47.26" cy="65.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-ip)`}>
            <circle cx="49.06" cy="73.01" r=".32" />
            <circle cx="47.26" cy="73.01" r=".32" />
            <circle cx="49.96" cy="71.21" r=".32" />
            <circle cx="48.16" cy="71.21" r=".32" />
            <circle cx="46.36" cy="71.21" r=".32" />
            <circle cx="49.06" cy="69.41" r=".32" />
            <circle cx="47.26" cy="69.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iq)`}>
            <circle cx="49.06" cy="76.61" r=".32" />
            <circle cx="47.26" cy="76.61" r=".32" />
            <circle cx="49.96" cy="74.81" r=".32" />
            <circle cx="48.16" cy="74.81" r=".32" />
            <circle cx="46.36" cy="74.81" r=".32" />
            <circle cx="49.06" cy="73.01" r=".32" />
            <circle cx="47.26" cy="73.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-ir)`}>
            <circle cx="49.06" cy="80.21" r=".32" />
            <circle cx="47.26" cy="80.21" r=".32" />
            <circle cx="49.96" cy="78.41" r=".32" />
            <circle cx="48.16" cy="78.41" r=".32" />
            <circle cx="46.36" cy="78.41" r=".32" />
            <circle cx="49.06" cy="76.61" r=".32" />
            <circle cx="47.26" cy="76.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-is)`}>
            <circle cx="49.06" cy="83.81" r=".32" />
            <circle cx="47.26" cy="83.81" r=".32" />
            <circle cx="49.96" cy="82.01" r=".32" />
            <circle cx="48.16" cy="82.01" r=".32" />
            <circle cx="46.36" cy="82.01" r=".32" />
            <circle cx="49.06" cy="80.21" r=".32" />
            <circle cx="47.26" cy="80.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-it)`}>
            <circle cx="49.06" cy="87.41" r=".32" />
            <circle cx="47.26" cy="87.41" r=".32" />
            <circle cx="49.96" cy="85.61" r=".32" />
            <circle cx="48.16" cy="85.61" r=".32" />
            <circle cx="46.36" cy="85.61" r=".32" />
            <circle cx="49.06" cy="83.81" r=".32" />
            <circle cx="47.26" cy="83.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iu)`}>
            <circle cx="49.06" cy="91.01" r=".32" />
            <circle cx="47.26" cy="91.01" r=".32" />
            <circle cx="49.96" cy="89.21" r=".32" />
            <circle cx="48.16" cy="89.21" r=".32" />
            <circle cx="46.36" cy="89.21" r=".32" />
            <circle cx="49.06" cy="87.41" r=".32" />
            <circle cx="47.26" cy="87.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iv)`}>
            <circle cx="49.06" cy="94.61" r=".32" />
            <circle cx="47.26" cy="94.61" r=".32" />
            <circle cx="49.96" cy="92.81" r=".32" />
            <circle cx="48.16" cy="92.81" r=".32" />
            <circle cx="46.36" cy="92.81" r=".32" />
            <circle cx="49.06" cy="91.01" r=".32" />
            <circle cx="47.26" cy="91.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iw)`}>
            <circle cx="49.06" cy="98.21" r=".32" />
            <circle cx="47.26" cy="98.21" r=".32" />
            <circle cx="49.96" cy="96.41" r=".32" />
            <circle cx="48.16" cy="96.41" r=".32" />
            <circle cx="46.36" cy="96.41" r=".32" />
            <circle cx="49.06" cy="94.61" r=".32" />
            <circle cx="47.26" cy="94.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-ix)`}>
            <circle cx="49.06" cy="101.81" r=".32" />
            <circle cx="47.26" cy="101.81" r=".32" />
            <circle cx="49.96" cy="100.01" r=".32" />
            <circle cx="48.16" cy="100.01" r=".32" />
            <circle cx="46.36" cy="100.01" r=".32" />
            <circle cx="49.06" cy="98.21" r=".32" />
            <circle cx="47.26" cy="98.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iy)`}>
            <circle cx="49.06" cy="105.41" r=".32" />
            <circle cx="47.26" cy="105.41" r=".32" />
            <circle cx="49.96" cy="103.61" r=".32" />
            <circle cx="48.16" cy="103.61" r=".32" />
            <circle cx="46.36" cy="103.61" r=".32" />
            <circle cx="49.06" cy="101.81" r=".32" />
            <circle cx="47.26" cy="101.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iz)`}>
            <circle cx="49.06" cy="109.01" r=".32" />
            <circle cx="47.26" cy="109.01" r=".32" />
            <circle cx="49.96" cy="107.21" r=".32" />
            <circle cx="48.16" cy="107.21" r=".32" />
            <circle cx="46.36" cy="107.21" r=".32" />
            <circle cx="49.06" cy="105.41" r=".32" />
            <circle cx="47.26" cy="105.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iA)`}>
            <circle cx="49.06" cy="112.61" r=".32" />
            <circle cx="47.26" cy="112.61" r=".32" />
            <circle cx="49.96" cy="110.81" r=".32" />
            <circle cx="48.16" cy="110.81" r=".32" />
            <circle cx="46.36" cy="110.81" r=".32" />
            <circle cx="49.06" cy="109.01" r=".32" />
            <circle cx="47.26" cy="109.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iB)`}>
            <circle cx="49.06" cy="116.21" r=".32" />
            <circle cx="47.26" cy="116.21" r=".32" />
            <circle cx="49.96" cy="114.41" r=".32" />
            <circle cx="48.16" cy="114.41" r=".32" />
            <circle cx="46.36" cy="114.41" r=".32" />
            <circle cx="49.06" cy="112.61" r=".32" />
            <circle cx="47.26" cy="112.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iC)`}>
            <circle cx="45.46" cy="62.21" r=".32" />
            <circle cx="43.66" cy="62.21" r=".32" />
            <circle cx="46.36" cy="60.41" r=".32" />
            <circle cx="44.56" cy="60.41" r=".32" />
            <circle cx="42.76" cy="60.41" r=".32" />
            <circle cx="45.46" cy="58.61" r=".32" />
            <circle cx="43.66" cy="58.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iD)`}>
            <circle cx="45.46" cy="65.81" r=".32" />
            <circle cx="43.66" cy="65.81" r=".32" />
            <circle cx="46.36" cy="64.01" r=".32" />
            <circle cx="44.56" cy="64.01" r=".32" />
            <circle cx="42.76" cy="64.01" r=".32" />
            <circle cx="45.46" cy="62.21" r=".32" />
            <circle cx="43.66" cy="62.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iE)`}>
            <circle cx="45.46" cy="69.41" r=".32" />
            <circle cx="43.66" cy="69.41" r=".32" />
            <circle cx="46.36" cy="67.61" r=".32" />
            <circle cx="44.56" cy="67.61" r=".32" />
            <circle cx="42.76" cy="67.61" r=".32" />
            <circle cx="45.46" cy="65.81" r=".32" />
            <circle cx="43.66" cy="65.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iF)`}>
            <circle cx="45.46" cy="73.01" r=".32" />
            <circle cx="43.66" cy="73.01" r=".32" />
            <circle cx="46.36" cy="71.21" r=".32" />
            <circle cx="44.56" cy="71.21" r=".32" />
            <circle cx="42.76" cy="71.21" r=".32" />
            <circle cx="45.46" cy="69.41" r=".32" />
            <circle cx="43.66" cy="69.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iG)`}>
            <circle cx="45.46" cy="76.61" r=".32" />
            <circle cx="43.66" cy="76.61" r=".32" />
            <circle cx="46.36" cy="74.81" r=".32" />
            <circle cx="44.56" cy="74.81" r=".32" />
            <circle cx="42.76" cy="74.81" r=".32" />
            <circle cx="45.46" cy="73.01" r=".32" />
            <circle cx="43.66" cy="73.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iH)`}>
            <circle cx="45.46" cy="80.21" r=".32" />
            <circle cx="43.66" cy="80.21" r=".32" />
            <circle cx="46.36" cy="78.41" r=".32" />
            <circle cx="44.56" cy="78.41" r=".32" />
            <circle cx="42.76" cy="78.41" r=".32" />
            <circle cx="45.46" cy="76.61" r=".32" />
            <circle cx="43.66" cy="76.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iI)`}>
            <circle cx="45.46" cy="83.81" r=".32" />
            <circle cx="43.66" cy="83.81" r=".32" />
            <circle cx="46.36" cy="82.01" r=".32" />
            <circle cx="44.56" cy="82.01" r=".32" />
            <circle cx="42.76" cy="82.01" r=".32" />
            <circle cx="45.46" cy="80.21" r=".32" />
            <circle cx="43.66" cy="80.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iJ)`}>
            <circle cx="45.46" cy="87.41" r=".32" />
            <circle cx="43.66" cy="87.41" r=".32" />
            <circle cx="46.36" cy="85.61" r=".32" />
            <circle cx="44.56" cy="85.61" r=".32" />
            <circle cx="42.76" cy="85.61" r=".32" />
            <circle cx="45.46" cy="83.81" r=".32" />
            <circle cx="43.66" cy="83.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iK)`}>
            <circle cx="45.46" cy="91.01" r=".32" />
            <circle cx="43.66" cy="91.01" r=".32" />
            <circle cx="46.36" cy="89.21" r=".32" />
            <circle cx="44.56" cy="89.21" r=".32" />
            <circle cx="42.76" cy="89.21" r=".32" />
            <circle cx="45.46" cy="87.41" r=".32" />
            <circle cx="43.66" cy="87.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iL)`}>
            <circle cx="45.46" cy="94.61" r=".32" />
            <circle cx="43.66" cy="94.61" r=".32" />
            <circle cx="46.36" cy="92.81" r=".32" />
            <circle cx="44.56" cy="92.81" r=".32" />
            <circle cx="42.76" cy="92.81" r=".32" />
            <circle cx="45.46" cy="91.01" r=".32" />
            <circle cx="43.66" cy="91.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iM)`}>
            <circle cx="45.46" cy="98.21" r=".32" />
            <circle cx="43.66" cy="98.21" r=".32" />
            <circle cx="46.36" cy="96.41" r=".32" />
            <circle cx="44.56" cy="96.41" r=".32" />
            <circle cx="42.76" cy="96.41" r=".32" />
            <circle cx="45.46" cy="94.61" r=".32" />
            <circle cx="43.66" cy="94.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iN)`}>
            <circle cx="45.46" cy="101.81" r=".32" />
            <circle cx="43.66" cy="101.81" r=".32" />
            <circle cx="46.36" cy="100.01" r=".32" />
            <circle cx="44.56" cy="100.01" r=".32" />
            <circle cx="42.76" cy="100.01" r=".32" />
            <circle cx="45.46" cy="98.21" r=".32" />
            <circle cx="43.66" cy="98.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iO)`}>
            <circle cx="45.46" cy="105.41" r=".32" />
            <circle cx="43.66" cy="105.41" r=".32" />
            <circle cx="46.36" cy="103.61" r=".32" />
            <circle cx="44.56" cy="103.61" r=".32" />
            <circle cx="42.76" cy="103.61" r=".32" />
            <circle cx="45.46" cy="101.81" r=".32" />
            <circle cx="43.66" cy="101.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iP)`}>
            <circle cx="45.46" cy="109.01" r=".32" />
            <circle cx="43.66" cy="109.01" r=".32" />
            <circle cx="46.36" cy="107.21" r=".32" />
            <circle cx="44.56" cy="107.21" r=".32" />
            <circle cx="42.76" cy="107.21" r=".32" />
            <circle cx="45.46" cy="105.41" r=".32" />
            <circle cx="43.66" cy="105.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iQ)`}>
            <circle cx="45.46" cy="112.61" r=".32" />
            <circle cx="43.66" cy="112.61" r=".32" />
            <circle cx="46.36" cy="110.81" r=".32" />
            <circle cx="44.56" cy="110.81" r=".32" />
            <circle cx="42.76" cy="110.81" r=".32" />
            <circle cx="45.46" cy="109.01" r=".32" />
            <circle cx="43.66" cy="109.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iR)`}>
            <circle cx="45.46" cy="116.21" r=".32" />
            <circle cx="43.66" cy="116.21" r=".32" />
            <circle cx="46.36" cy="114.41" r=".32" />
            <circle cx="44.56" cy="114.41" r=".32" />
            <circle cx="42.76" cy="114.41" r=".32" />
            <circle cx="45.46" cy="112.61" r=".32" />
            <circle cx="43.66" cy="112.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iS)`}>
            <circle cx="41.86" cy="62.21" r=".32" />
            <circle cx="40.06" cy="62.21" r=".32" />
            <circle cx="42.76" cy="60.41" r=".32" />
            <circle cx="40.96" cy="60.41" r=".32" />
            <circle cx="39.16" cy="60.41" r=".32" />
            <circle cx="41.86" cy="58.61" r=".32" />
            <circle cx="40.06" cy="58.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iT)`}>
            <circle cx="41.86" cy="65.81" r=".32" />
            <circle cx="40.06" cy="65.81" r=".32" />
            <circle cx="42.76" cy="64.01" r=".32" />
            <circle cx="40.96" cy="64.01" r=".32" />
            <circle cx="39.16" cy="64.01" r=".32" />
            <circle cx="41.86" cy="62.21" r=".32" />
            <circle cx="40.06" cy="62.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iU)`}>
            <circle cx="41.86" cy="69.41" r=".32" />
            <circle cx="40.06" cy="69.41" r=".32" />
            <circle cx="42.76" cy="67.61" r=".32" />
            <circle cx="40.96" cy="67.61" r=".32" />
            <circle cx="39.16" cy="67.61" r=".32" />
            <circle cx="41.86" cy="65.81" r=".32" />
            <circle cx="40.06" cy="65.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iV)`}>
            <circle cx="41.86" cy="73.01" r=".32" />
            <circle cx="40.06" cy="73.01" r=".32" />
            <circle cx="42.76" cy="71.21" r=".32" />
            <circle cx="40.96" cy="71.21" r=".32" />
            <circle cx="39.16" cy="71.21" r=".32" />
            <circle cx="41.86" cy="69.41" r=".32" />
            <circle cx="40.06" cy="69.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iW)`}>
            <circle cx="41.86" cy="76.61" r=".32" />
            <circle cx="40.06" cy="76.61" r=".32" />
            <circle cx="42.76" cy="74.81" r=".32" />
            <circle cx="40.96" cy="74.81" r=".32" />
            <circle cx="39.16" cy="74.81" r=".32" />
            <circle cx="41.86" cy="73.01" r=".32" />
            <circle cx="40.06" cy="73.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iX)`}>
            <circle cx="41.86" cy="80.21" r=".32" />
            <circle cx="40.06" cy="80.21" r=".32" />
            <circle cx="42.76" cy="78.41" r=".32" />
            <circle cx="40.96" cy="78.41" r=".32" />
            <circle cx="39.16" cy="78.41" r=".32" />
            <circle cx="41.86" cy="76.61" r=".32" />
            <circle cx="40.06" cy="76.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iY)`}>
            <circle cx="41.86" cy="83.81" r=".32" />
            <circle cx="40.06" cy="83.81" r=".32" />
            <circle cx="42.76" cy="82.01" r=".32" />
            <circle cx="40.96" cy="82.01" r=".32" />
            <circle cx="39.16" cy="82.01" r=".32" />
            <circle cx="41.86" cy="80.21" r=".32" />
            <circle cx="40.06" cy="80.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iZ)`}>
            <circle cx="41.86" cy="87.41" r=".32" />
            <circle cx="40.06" cy="87.41" r=".32" />
            <circle cx="42.76" cy="85.61" r=".32" />
            <circle cx="40.96" cy="85.61" r=".32" />
            <circle cx="39.16" cy="85.61" r=".32" />
            <circle cx="41.86" cy="83.81" r=".32" />
            <circle cx="40.06" cy="83.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-i0)`}>
            <circle cx="41.86" cy="91.01" r=".32" />
            <circle cx="40.06" cy="91.01" r=".32" />
            <circle cx="42.76" cy="89.21" r=".32" />
            <circle cx="40.96" cy="89.21" r=".32" />
            <circle cx="39.16" cy="89.21" r=".32" />
            <circle cx="41.86" cy="87.41" r=".32" />
            <circle cx="40.06" cy="87.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-i1)`}>
            <circle cx="41.86" cy="94.61" r=".32" />
            <circle cx="40.06" cy="94.61" r=".32" />
            <circle cx="42.76" cy="92.81" r=".32" />
            <circle cx="40.96" cy="92.81" r=".32" />
            <circle cx="39.16" cy="92.81" r=".32" />
            <circle cx="41.86" cy="91.01" r=".32" />
            <circle cx="40.06" cy="91.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-i2)`}>
            <circle cx="41.86" cy="98.21" r=".32" />
            <circle cx="40.06" cy="98.21" r=".32" />
            <circle cx="42.76" cy="96.41" r=".32" />
            <circle cx="40.96" cy="96.41" r=".32" />
            <circle cx="39.16" cy="96.41" r=".32" />
            <circle cx="41.86" cy="94.61" r=".32" />
            <circle cx="40.06" cy="94.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-i3)`}>
            <circle cx="41.86" cy="101.81" r=".32" />
            <circle cx="40.06" cy="101.81" r=".32" />
            <circle cx="42.76" cy="100.01" r=".32" />
            <circle cx="40.96" cy="100.01" r=".32" />
            <circle cx="39.16" cy="100.01" r=".32" />
            <circle cx="41.86" cy="98.21" r=".32" />
            <circle cx="40.06" cy="98.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-i4)`}>
            <circle cx="41.86" cy="105.41" r=".32" />
            <circle cx="40.06" cy="105.41" r=".32" />
            <circle cx="42.76" cy="103.61" r=".32" />
            <circle cx="40.96" cy="103.61" r=".32" />
            <circle cx="39.16" cy="103.61" r=".32" />
            <circle cx="41.86" cy="101.81" r=".32" />
            <circle cx="40.06" cy="101.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-i5)`}>
            <circle cx="41.86" cy="109.01" r=".32" />
            <circle cx="40.06" cy="109.01" r=".32" />
            <circle cx="42.76" cy="107.21" r=".32" />
            <circle cx="40.96" cy="107.21" r=".32" />
            <circle cx="39.16" cy="107.21" r=".32" />
            <circle cx="41.86" cy="105.41" r=".32" />
            <circle cx="40.06" cy="105.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-i6)`}>
            <circle cx="41.86" cy="112.61" r=".32" />
            <circle cx="40.06" cy="112.61" r=".32" />
            <circle cx="42.76" cy="110.81" r=".32" />
            <circle cx="40.96" cy="110.81" r=".32" />
            <circle cx="39.16" cy="110.81" r=".32" />
            <circle cx="41.86" cy="109.01" r=".32" />
            <circle cx="40.06" cy="109.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-i7)`}>
            <circle cx="41.86" cy="116.21" r=".32" />
            <circle cx="40.06" cy="116.21" r=".32" />
            <circle cx="42.76" cy="114.41" r=".32" />
            <circle cx="40.96" cy="114.41" r=".32" />
            <circle cx="39.16" cy="114.41" r=".32" />
            <circle cx="41.86" cy="112.61" r=".32" />
            <circle cx="40.06" cy="112.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-i8)`}>
            <circle cx="38.26" cy="62.21" r=".32" />
            <circle cx="36.46" cy="62.21" r=".32" />
            <circle cx="39.16" cy="60.41" r=".32" />
            <circle cx="37.36" cy="60.41" r=".32" />
            <circle cx="35.56" cy="60.41" r=".32" />
            <circle cx="38.26" cy="58.61" r=".32" />
            <circle cx="36.46" cy="58.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-i9)`}>
            <circle cx="38.26" cy="65.81" r=".32" />
            <circle cx="36.46" cy="65.81" r=".32" />
            <circle cx="39.16" cy="64.01" r=".32" />
            <circle cx="37.36" cy="64.01" r=".32" />
            <circle cx="35.56" cy="64.01" r=".32" />
            <circle cx="38.26" cy="62.21" r=".32" />
            <circle cx="36.46" cy="62.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-ja)`}>
            <circle cx="38.26" cy="69.41" r=".32" />
            <circle cx="36.46" cy="69.41" r=".32" />
            <circle cx="39.16" cy="67.61" r=".32" />
            <circle cx="37.36" cy="67.61" r=".32" />
            <circle cx="35.56" cy="67.61" r=".32" />
            <circle cx="38.26" cy="65.81" r=".32" />
            <circle cx="36.46" cy="65.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jb)`}>
            <circle cx="38.26" cy="73.01" r=".32" />
            <circle cx="36.46" cy="73.01" r=".32" />
            <circle cx="39.16" cy="71.21" r=".32" />
            <circle cx="37.36" cy="71.21" r=".32" />
            <circle cx="35.56" cy="71.21" r=".32" />
            <circle cx="38.26" cy="69.41" r=".32" />
            <circle cx="36.46" cy="69.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jc)`}>
            <circle cx="38.26" cy="76.61" r=".32" />
            <circle cx="36.46" cy="76.61" r=".32" />
            <circle cx="39.16" cy="74.81" r=".32" />
            <circle cx="37.36" cy="74.81" r=".32" />
            <circle cx="35.56" cy="74.81" r=".32" />
            <circle cx="38.26" cy="73.01" r=".32" />
            <circle cx="36.46" cy="73.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jd)`}>
            <circle cx="38.26" cy="80.21" r=".32" />
            <circle cx="36.46" cy="80.21" r=".32" />
            <circle cx="39.16" cy="78.41" r=".32" />
            <circle cx="37.36" cy="78.41" r=".32" />
            <circle cx="35.56" cy="78.41" r=".32" />
            <circle cx="38.26" cy="76.61" r=".32" />
            <circle cx="36.46" cy="76.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-je)`}>
            <circle cx="38.26" cy="83.81" r=".32" />
            <circle cx="36.46" cy="83.81" r=".32" />
            <circle cx="39.16" cy="82.01" r=".32" />
            <circle cx="37.36" cy="82.01" r=".32" />
            <circle cx="35.56" cy="82.01" r=".32" />
            <circle cx="38.26" cy="80.21" r=".32" />
            <circle cx="36.46" cy="80.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jf)`}>
            <circle cx="38.26" cy="87.41" r=".32" />
            <circle cx="36.46" cy="87.41" r=".32" />
            <circle cx="39.16" cy="85.61" r=".32" />
            <circle cx="37.36" cy="85.61" r=".32" />
            <circle cx="35.56" cy="85.61" r=".32" />
            <circle cx="38.26" cy="83.81" r=".32" />
            <circle cx="36.46" cy="83.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jg)`}>
            <circle cx="38.26" cy="91.01" r=".32" />
            <circle cx="36.46" cy="91.01" r=".32" />
            <circle cx="39.16" cy="89.21" r=".32" />
            <circle cx="37.36" cy="89.21" r=".32" />
            <circle cx="35.56" cy="89.21" r=".32" />
            <circle cx="38.26" cy="87.41" r=".32" />
            <circle cx="36.46" cy="87.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jh)`}>
            <circle cx="38.26" cy="94.61" r=".32" />
            <circle cx="36.46" cy="94.61" r=".32" />
            <circle cx="39.16" cy="92.81" r=".32" />
            <circle cx="37.36" cy="92.81" r=".32" />
            <circle cx="35.56" cy="92.81" r=".32" />
            <circle cx="38.26" cy="91.01" r=".32" />
            <circle cx="36.46" cy="91.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-ji)`}>
            <circle cx="38.26" cy="98.21" r=".32" />
            <circle cx="36.46" cy="98.21" r=".32" />
            <circle cx="39.16" cy="96.41" r=".32" />
            <circle cx="37.36" cy="96.41" r=".32" />
            <circle cx="35.56" cy="96.41" r=".32" />
            <circle cx="38.26" cy="94.61" r=".32" />
            <circle cx="36.46" cy="94.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jj)`}>
            <circle cx="38.26" cy="101.81" r=".32" />
            <circle cx="36.46" cy="101.81" r=".32" />
            <circle cx="39.16" cy="100.01" r=".32" />
            <circle cx="37.36" cy="100.01" r=".32" />
            <circle cx="35.56" cy="100.01" r=".32" />
            <circle cx="38.26" cy="98.21" r=".32" />
            <circle cx="36.46" cy="98.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jk)`}>
            <circle cx="38.26" cy="105.41" r=".32" />
            <circle cx="36.46" cy="105.41" r=".32" />
            <circle cx="39.16" cy="103.61" r=".32" />
            <circle cx="37.36" cy="103.61" r=".32" />
            <circle cx="35.56" cy="103.61" r=".32" />
            <circle cx="38.26" cy="101.81" r=".32" />
            <circle cx="36.46" cy="101.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jl)`}>
            <circle cx="38.26" cy="109.01" r=".32" />
            <circle cx="36.46" cy="109.01" r=".32" />
            <circle cx="39.16" cy="107.21" r=".32" />
            <circle cx="37.36" cy="107.21" r=".32" />
            <circle cx="35.56" cy="107.21" r=".32" />
            <circle cx="38.26" cy="105.41" r=".32" />
            <circle cx="36.46" cy="105.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jm)`}>
            <circle cx="38.26" cy="112.61" r=".32" />
            <circle cx="36.46" cy="112.61" r=".32" />
            <circle cx="39.16" cy="110.81" r=".32" />
            <circle cx="37.36" cy="110.81" r=".32" />
            <circle cx="35.56" cy="110.81" r=".32" />
            <circle cx="38.26" cy="109.01" r=".32" />
            <circle cx="36.46" cy="109.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jn)`}>
            <circle cx="38.26" cy="116.21" r=".32" />
            <circle cx="36.46" cy="116.21" r=".32" />
            <circle cx="39.16" cy="114.41" r=".32" />
            <circle cx="37.36" cy="114.41" r=".32" />
            <circle cx="35.56" cy="114.41" r=".32" />
            <circle cx="38.26" cy="112.61" r=".32" />
            <circle cx="36.46" cy="112.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jo)`}>
            <circle cx="34.66" cy="62.21" r=".32" />
            <circle cx="32.86" cy="62.21" r=".32" />
            <circle cx="35.56" cy="60.41" r=".32" />
            <circle cx="33.76" cy="60.41" r=".32" />
            <circle cx="31.96" cy="60.41" r=".32" />
            <circle cx="34.66" cy="58.61" r=".32" />
            <circle cx="32.86" cy="58.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jp)`}>
            <circle cx="34.66" cy="65.81" r=".32" />
            <circle cx="32.86" cy="65.81" r=".32" />
            <circle cx="35.56" cy="64.01" r=".32" />
            <circle cx="33.76" cy="64.01" r=".32" />
            <circle cx="31.96" cy="64.01" r=".32" />
            <circle cx="34.66" cy="62.21" r=".32" />
            <circle cx="32.86" cy="62.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jq)`}>
            <circle cx="34.66" cy="69.41" r=".32" />
            <circle cx="32.86" cy="69.41" r=".32" />
            <circle cx="35.56" cy="67.61" r=".32" />
            <circle cx="33.76" cy="67.61" r=".32" />
            <circle cx="31.96" cy="67.61" r=".32" />
            <circle cx="34.66" cy="65.81" r=".32" />
            <circle cx="32.86" cy="65.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jr)`}>
            <circle cx="34.66" cy="73.01" r=".32" />
            <circle cx="32.86" cy="73.01" r=".32" />
            <circle cx="35.56" cy="71.21" r=".32" />
            <circle cx="33.76" cy="71.21" r=".32" />
            <circle cx="31.96" cy="71.21" r=".32" />
            <circle cx="34.66" cy="69.41" r=".32" />
            <circle cx="32.86" cy="69.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-js)`}>
            <circle cx="34.66" cy="76.61" r=".32" />
            <circle cx="32.86" cy="76.61" r=".32" />
            <circle cx="35.56" cy="74.81" r=".32" />
            <circle cx="33.76" cy="74.81" r=".32" />
            <circle cx="31.96" cy="74.81" r=".32" />
            <circle cx="34.66" cy="73.01" r=".32" />
            <circle cx="32.86" cy="73.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jt)`}>
            <circle cx="34.66" cy="80.21" r=".32" />
            <circle cx="32.86" cy="80.21" r=".32" />
            <circle cx="35.56" cy="78.41" r=".32" />
            <circle cx="33.76" cy="78.41" r=".32" />
            <circle cx="31.96" cy="78.41" r=".32" />
            <circle cx="34.66" cy="76.61" r=".32" />
            <circle cx="32.86" cy="76.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-ju)`}>
            <circle cx="34.66" cy="83.81" r=".32" />
            <circle cx="32.86" cy="83.81" r=".32" />
            <circle cx="35.56" cy="82.01" r=".32" />
            <circle cx="33.76" cy="82.01" r=".32" />
            <circle cx="31.96" cy="82.01" r=".32" />
            <circle cx="34.66" cy="80.21" r=".32" />
            <circle cx="32.86" cy="80.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jv)`}>
            <circle cx="34.66" cy="87.41" r=".32" />
            <circle cx="32.86" cy="87.41" r=".32" />
            <circle cx="35.56" cy="85.61" r=".32" />
            <circle cx="33.76" cy="85.61" r=".32" />
            <circle cx="31.96" cy="85.61" r=".32" />
            <circle cx="34.66" cy="83.81" r=".32" />
            <circle cx="32.86" cy="83.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jw)`}>
            <circle cx="34.66" cy="91.01" r=".32" />
            <circle cx="32.86" cy="91.01" r=".32" />
            <circle cx="35.56" cy="89.21" r=".32" />
            <circle cx="33.76" cy="89.21" r=".32" />
            <circle cx="31.96" cy="89.21" r=".32" />
            <circle cx="34.66" cy="87.41" r=".32" />
            <circle cx="32.86" cy="87.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jx)`}>
            <circle cx="34.66" cy="94.61" r=".32" />
            <circle cx="32.86" cy="94.61" r=".32" />
            <circle cx="35.56" cy="92.81" r=".32" />
            <circle cx="33.76" cy="92.81" r=".32" />
            <circle cx="31.96" cy="92.81" r=".32" />
            <circle cx="34.66" cy="91.01" r=".32" />
            <circle cx="32.86" cy="91.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jy)`}>
            <circle cx="34.66" cy="98.21" r=".32" />
            <circle cx="32.86" cy="98.21" r=".32" />
            <circle cx="35.56" cy="96.41" r=".32" />
            <circle cx="33.76" cy="96.41" r=".32" />
            <circle cx="31.96" cy="96.41" r=".32" />
            <circle cx="34.66" cy="94.61" r=".32" />
            <circle cx="32.86" cy="94.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jz)`}>
            <circle cx="34.66" cy="101.81" r=".32" />
            <circle cx="32.86" cy="101.81" r=".32" />
            <circle cx="35.56" cy="100.01" r=".32" />
            <circle cx="33.76" cy="100.01" r=".32" />
            <circle cx="31.96" cy="100.01" r=".32" />
            <circle cx="34.66" cy="98.21" r=".32" />
            <circle cx="32.86" cy="98.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jA)`}>
            <circle cx="34.66" cy="105.41" r=".32" />
            <circle cx="32.86" cy="105.41" r=".32" />
            <circle cx="35.56" cy="103.61" r=".32" />
            <circle cx="33.76" cy="103.61" r=".32" />
            <circle cx="31.96" cy="103.61" r=".32" />
            <circle cx="34.66" cy="101.81" r=".32" />
            <circle cx="32.86" cy="101.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jB)`}>
            <circle cx="34.66" cy="109.01" r=".32" />
            <circle cx="32.86" cy="109.01" r=".32" />
            <circle cx="35.56" cy="107.21" r=".32" />
            <circle cx="33.76" cy="107.21" r=".32" />
            <circle cx="31.96" cy="107.21" r=".32" />
            <circle cx="34.66" cy="105.41" r=".32" />
            <circle cx="32.86" cy="105.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jC)`}>
            <circle cx="34.66" cy="112.61" r=".32" />
            <circle cx="32.86" cy="112.61" r=".32" />
            <circle cx="35.56" cy="110.81" r=".32" />
            <circle cx="33.76" cy="110.81" r=".32" />
            <circle cx="31.96" cy="110.81" r=".32" />
            <circle cx="34.66" cy="109.01" r=".32" />
            <circle cx="32.86" cy="109.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jD)`}>
            <circle cx="34.66" cy="116.21" r=".32" />
            <circle cx="32.86" cy="116.21" r=".32" />
            <circle cx="35.56" cy="114.41" r=".32" />
            <circle cx="33.76" cy="114.41" r=".32" />
            <circle cx="31.96" cy="114.41" r=".32" />
            <circle cx="34.66" cy="112.61" r=".32" />
            <circle cx="32.86" cy="112.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jE)`}>
            <circle cx="31.06" cy="62.21" r=".32" />
            <circle cx="29.26" cy="62.21" r=".32" />
            <circle cx="31.96" cy="60.41" r=".32" />
            <circle cx="30.16" cy="60.41" r=".32" />
            <circle cx="28.36" cy="60.41" r=".32" />
            <circle cx="31.06" cy="58.61" r=".32" />
            <circle cx="29.26" cy="58.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jF)`}>
            <circle cx="31.06" cy="65.81" r=".32" />
            <circle cx="29.26" cy="65.81" r=".32" />
            <circle cx="31.96" cy="64.01" r=".32" />
            <circle cx="30.16" cy="64.01" r=".32" />
            <circle cx="28.36" cy="64.01" r=".32" />
            <circle cx="31.06" cy="62.21" r=".32" />
            <circle cx="29.26" cy="62.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jG)`}>
            <circle cx="31.06" cy="69.41" r=".32" />
            <circle cx="29.26" cy="69.41" r=".32" />
            <circle cx="31.96" cy="67.61" r=".32" />
            <circle cx="30.16" cy="67.61" r=".32" />
            <circle cx="28.36" cy="67.61" r=".32" />
            <circle cx="31.06" cy="65.81" r=".32" />
            <circle cx="29.26" cy="65.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jH)`}>
            <circle cx="31.06" cy="73.01" r=".32" />
            <circle cx="29.26" cy="73.01" r=".32" />
            <circle cx="31.96" cy="71.21" r=".32" />
            <circle cx="30.16" cy="71.21" r=".32" />
            <circle cx="28.36" cy="71.21" r=".32" />
            <circle cx="31.06" cy="69.41" r=".32" />
            <circle cx="29.26" cy="69.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jI)`}>
            <circle cx="31.06" cy="76.61" r=".32" />
            <circle cx="29.26" cy="76.61" r=".32" />
            <circle cx="31.96" cy="74.81" r=".32" />
            <circle cx="30.16" cy="74.81" r=".32" />
            <circle cx="28.36" cy="74.81" r=".32" />
            <circle cx="31.06" cy="73.01" r=".32" />
            <circle cx="29.26" cy="73.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jJ)`}>
            <circle cx="31.06" cy="80.21" r=".32" />
            <circle cx="29.26" cy="80.21" r=".32" />
            <circle cx="31.96" cy="78.41" r=".32" />
            <circle cx="30.16" cy="78.41" r=".32" />
            <circle cx="28.36" cy="78.41" r=".32" />
            <circle cx="31.06" cy="76.61" r=".32" />
            <circle cx="29.26" cy="76.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jK)`}>
            <circle cx="31.06" cy="83.81" r=".32" />
            <circle cx="29.26" cy="83.81" r=".32" />
            <circle cx="31.96" cy="82.01" r=".32" />
            <circle cx="30.16" cy="82.01" r=".32" />
            <circle cx="28.36" cy="82.01" r=".32" />
            <circle cx="31.06" cy="80.21" r=".32" />
            <circle cx="29.26" cy="80.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jL)`}>
            <circle cx="31.06" cy="87.41" r=".32" />
            <circle cx="29.26" cy="87.41" r=".32" />
            <circle cx="31.96" cy="85.61" r=".32" />
            <circle cx="30.16" cy="85.61" r=".32" />
            <circle cx="28.36" cy="85.61" r=".32" />
            <circle cx="31.06" cy="83.81" r=".32" />
            <circle cx="29.26" cy="83.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jM)`}>
            <circle cx="31.06" cy="91.01" r=".32" />
            <circle cx="29.26" cy="91.01" r=".32" />
            <circle cx="31.96" cy="89.21" r=".32" />
            <circle cx="30.16" cy="89.21" r=".32" />
            <circle cx="28.36" cy="89.21" r=".32" />
            <circle cx="31.06" cy="87.41" r=".32" />
            <circle cx="29.26" cy="87.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jN)`}>
            <circle cx="31.06" cy="94.61" r=".32" />
            <circle cx="29.26" cy="94.61" r=".32" />
            <circle cx="31.96" cy="92.81" r=".32" />
            <circle cx="30.16" cy="92.81" r=".32" />
            <circle cx="28.36" cy="92.81" r=".32" />
            <circle cx="31.06" cy="91.01" r=".32" />
            <circle cx="29.26" cy="91.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jO)`}>
            <circle cx="31.06" cy="98.21" r=".32" />
            <circle cx="29.26" cy="98.21" r=".32" />
            <circle cx="31.96" cy="96.41" r=".32" />
            <circle cx="30.16" cy="96.41" r=".32" />
            <circle cx="28.36" cy="96.41" r=".32" />
            <circle cx="31.06" cy="94.61" r=".32" />
            <circle cx="29.26" cy="94.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jP)`}>
            <circle cx="31.06" cy="101.81" r=".32" />
            <circle cx="29.26" cy="101.81" r=".32" />
            <circle cx="31.96" cy="100.01" r=".32" />
            <circle cx="30.16" cy="100.01" r=".32" />
            <circle cx="28.36" cy="100.01" r=".32" />
            <circle cx="31.06" cy="98.21" r=".32" />
            <circle cx="29.26" cy="98.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jQ)`}>
            <circle cx="31.06" cy="105.41" r=".32" />
            <circle cx="29.26" cy="105.41" r=".32" />
            <circle cx="31.96" cy="103.61" r=".32" />
            <circle cx="30.16" cy="103.61" r=".32" />
            <circle cx="28.36" cy="103.61" r=".32" />
            <circle cx="31.06" cy="101.81" r=".32" />
            <circle cx="29.26" cy="101.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jR)`}>
            <circle cx="31.06" cy="109.01" r=".32" />
            <circle cx="29.26" cy="109.01" r=".32" />
            <circle cx="31.96" cy="107.21" r=".32" />
            <circle cx="30.16" cy="107.21" r=".32" />
            <circle cx="28.36" cy="107.21" r=".32" />
            <circle cx="31.06" cy="105.41" r=".32" />
            <circle cx="29.26" cy="105.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jS)`}>
            <circle cx="31.06" cy="112.61" r=".32" />
            <circle cx="29.26" cy="112.61" r=".32" />
            <circle cx="31.96" cy="110.81" r=".32" />
            <circle cx="30.16" cy="110.81" r=".32" />
            <circle cx="28.36" cy="110.81" r=".32" />
            <circle cx="31.06" cy="109.01" r=".32" />
            <circle cx="29.26" cy="109.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jT)`}>
            <circle cx="31.06" cy="116.21" r=".32" />
            <circle cx="29.26" cy="116.21" r=".32" />
            <circle cx="31.96" cy="114.41" r=".32" />
            <circle cx="30.16" cy="114.41" r=".32" />
            <circle cx="28.36" cy="114.41" r=".32" />
            <circle cx="31.06" cy="112.61" r=".32" />
            <circle cx="29.26" cy="112.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jU)`}>
            <circle cx="27.46" cy="62.21" r=".32" />
            <circle cx="25.66" cy="62.21" r=".32" />
            <circle cx="28.36" cy="60.41" r=".32" />
            <circle cx="26.56" cy="60.41" r=".32" />
            <circle cx="24.76" cy="60.41" r=".32" />
            <circle cx="27.46" cy="58.61" r=".32" />
            <circle cx="25.66" cy="58.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jV)`}>
            <circle cx="27.46" cy="65.81" r=".32" />
            <circle cx="25.66" cy="65.81" r=".32" />
            <circle cx="28.36" cy="64.01" r=".32" />
            <circle cx="26.56" cy="64.01" r=".32" />
            <circle cx="24.76" cy="64.01" r=".32" />
            <circle cx="27.46" cy="62.21" r=".32" />
            <circle cx="25.66" cy="62.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jW)`}>
            <circle cx="27.46" cy="69.41" r=".32" />
            <circle cx="25.66" cy="69.41" r=".32" />
            <circle cx="28.36" cy="67.61" r=".32" />
            <circle cx="26.56" cy="67.61" r=".32" />
            <circle cx="24.76" cy="67.61" r=".32" />
            <circle cx="27.46" cy="65.81" r=".32" />
            <circle cx="25.66" cy="65.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jX)`}>
            <circle cx="27.46" cy="73.01" r=".32" />
            <circle cx="25.66" cy="73.01" r=".32" />
            <circle cx="28.36" cy="71.21" r=".32" />
            <circle cx="26.56" cy="71.21" r=".32" />
            <circle cx="24.76" cy="71.21" r=".32" />
            <circle cx="27.46" cy="69.41" r=".32" />
            <circle cx="25.66" cy="69.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jY)`}>
            <circle cx="27.46" cy="76.61" r=".32" />
            <circle cx="25.66" cy="76.61" r=".32" />
            <circle cx="28.36" cy="74.81" r=".32" />
            <circle cx="26.56" cy="74.81" r=".32" />
            <circle cx="24.76" cy="74.81" r=".32" />
            <circle cx="27.46" cy="73.01" r=".32" />
            <circle cx="25.66" cy="73.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jZ)`}>
            <circle cx="27.46" cy="80.21" r=".32" />
            <circle cx="25.66" cy="80.21" r=".32" />
            <circle cx="28.36" cy="78.41" r=".32" />
            <circle cx="26.56" cy="78.41" r=".32" />
            <circle cx="24.76" cy="78.41" r=".32" />
            <circle cx="27.46" cy="76.61" r=".32" />
            <circle cx="25.66" cy="76.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-j0)`}>
            <circle cx="27.46" cy="83.81" r=".32" />
            <circle cx="25.66" cy="83.81" r=".32" />
            <circle cx="28.36" cy="82.01" r=".32" />
            <circle cx="26.56" cy="82.01" r=".32" />
            <circle cx="24.76" cy="82.01" r=".32" />
            <circle cx="27.46" cy="80.21" r=".32" />
            <circle cx="25.66" cy="80.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-j1)`}>
            <circle cx="27.46" cy="87.41" r=".32" />
            <circle cx="25.66" cy="87.41" r=".32" />
            <circle cx="28.36" cy="85.61" r=".32" />
            <circle cx="26.56" cy="85.61" r=".32" />
            <circle cx="24.76" cy="85.61" r=".32" />
            <circle cx="27.46" cy="83.81" r=".32" />
            <circle cx="25.66" cy="83.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-j2)`}>
            <circle cx="27.46" cy="91.01" r=".32" />
            <circle cx="25.66" cy="91.01" r=".32" />
            <circle cx="28.36" cy="89.21" r=".32" />
            <circle cx="26.56" cy="89.21" r=".32" />
            <circle cx="24.76" cy="89.21" r=".32" />
            <circle cx="27.46" cy="87.41" r=".32" />
            <circle cx="25.66" cy="87.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-j3)`}>
            <circle cx="27.46" cy="94.61" r=".32" />
            <circle cx="25.66" cy="94.61" r=".32" />
            <circle cx="28.36" cy="92.81" r=".32" />
            <circle cx="26.56" cy="92.81" r=".32" />
            <circle cx="24.76" cy="92.81" r=".32" />
            <circle cx="27.46" cy="91.01" r=".32" />
            <circle cx="25.66" cy="91.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-j4)`}>
            <circle cx="27.46" cy="98.21" r=".32" />
            <circle cx="25.66" cy="98.21" r=".32" />
            <circle cx="28.36" cy="96.41" r=".32" />
            <circle cx="26.56" cy="96.41" r=".32" />
            <circle cx="24.76" cy="96.41" r=".32" />
            <circle cx="27.46" cy="94.61" r=".32" />
            <circle cx="25.66" cy="94.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-j5)`}>
            <circle cx="27.46" cy="101.81" r=".32" />
            <circle cx="25.66" cy="101.81" r=".32" />
            <circle cx="28.36" cy="100.01" r=".32" />
            <circle cx="26.56" cy="100.01" r=".32" />
            <circle cx="24.76" cy="100.01" r=".32" />
            <circle cx="27.46" cy="98.21" r=".32" />
            <circle cx="25.66" cy="98.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-j6)`}>
            <circle cx="27.46" cy="105.41" r=".32" />
            <circle cx="25.66" cy="105.41" r=".32" />
            <circle cx="28.36" cy="103.61" r=".32" />
            <circle cx="26.56" cy="103.61" r=".32" />
            <circle cx="24.76" cy="103.61" r=".32" />
            <circle cx="27.46" cy="101.81" r=".32" />
            <circle cx="25.66" cy="101.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-j7)`}>
            <circle cx="27.46" cy="109.01" r=".32" />
            <circle cx="25.66" cy="109.01" r=".32" />
            <circle cx="28.36" cy="107.21" r=".32" />
            <circle cx="26.56" cy="107.21" r=".32" />
            <circle cx="24.76" cy="107.21" r=".32" />
            <circle cx="27.46" cy="105.41" r=".32" />
            <circle cx="25.66" cy="105.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-j8)`}>
            <circle cx="27.46" cy="112.61" r=".32" />
            <circle cx="25.66" cy="112.61" r=".32" />
            <circle cx="28.36" cy="110.81" r=".32" />
            <circle cx="26.56" cy="110.81" r=".32" />
            <circle cx="24.76" cy="110.81" r=".32" />
            <circle cx="27.46" cy="109.01" r=".32" />
            <circle cx="25.66" cy="109.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-j9)`}>
            <circle cx="27.46" cy="116.21" r=".32" />
            <circle cx="25.66" cy="116.21" r=".32" />
            <circle cx="28.36" cy="114.41" r=".32" />
            <circle cx="26.56" cy="114.41" r=".32" />
            <circle cx="24.76" cy="114.41" r=".32" />
            <circle cx="27.46" cy="112.61" r=".32" />
            <circle cx="25.66" cy="112.61" r=".32" />
          </g>
        </g>
        <path
          d="m47.9 110.4c.11 0 5.9-2.94 5.9-2.94a23.78 23.78 0 0 0 13-21.19v-14.67c0-.33-18.81-7.31-19-7.25 0 0-19 6.92-19 7.25v14.61a23.83 23.83 0 0 0 13 21.2s5.99 2.99 6.1 2.99z"
          fill="#5fcbeb"
        />
        <path
          d="m59.98 84.27h-9v-9.01h-6.22v9.01h-9v6.21h9v9h6.22v-9h9z"
          fill="#f8f7f4"
        />
        <path
          d="m53.8 107.46s-5.8 2.94-5.9 2.94-6-3-6-3a23.83 23.83 0 0 1 -13-21.2v-14.6a15.68 15.68 0 0 1 2.48-1.09q-.72-1.83-1.29-3.75a37.27 37.27 0 0 0 -4.66 1.95v17.29a28.22 28.22 0 0 0 15.43 25.07s6.91 3.54 7 3.54 7-3.47 7-3.47a28.57 28.57 0 0 0 12.14-11.71c-1.21-.2-2.41-.45-3.59-.75a24.13 24.13 0 0 1 -9.61 8.78z"
          fill="#f17732"
        />
        <path
          d="m28.9 86.21a23.83 23.83 0 0 0 13 21.2s5.85 3 6 3 5.9-2.94 5.9-2.94a24.05 24.05 0 0 0 9.53-8.78 46.27 46.27 0 0 1 -12.33-5.12v5.91h-6.23v-9h-9v-6.22h4a46.51 46.51 0 0 1 -8.41-13.75 15.68 15.68 0 0 0 -2.48 1.09z"
          fill="#2870b5"
        />
        <path
          d="m39.79 84.26h-4v6.22h9v9h6.21v-5.91a46.43 46.43 0 0 1 -11.21-9.31z"
          fill="#fde5cb"
        />
        <g clipPath={`url(#${id}-ka)`} fill="#99052e">
          <g clipPath={`url(#${id}-g6)`}>
            <circle cx="67.06" cy="69.41" r=".32" />
            <circle cx="65.26" cy="69.41" r=".32" />
            <circle cx="67.96" cy="67.61" r=".32" />
            <circle cx="66.16" cy="67.61" r=".32" />
            <circle cx="64.36" cy="67.61" r=".32" />
            <circle cx="67.06" cy="65.81" r=".32" />
            <circle cx="65.26" cy="65.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-g7)`}>
            <circle cx="67.06" cy="73.01" r=".32" />
            <circle cx="65.26" cy="73.01" r=".32" />
            <circle cx="67.96" cy="71.21" r=".32" />
            <circle cx="66.16" cy="71.21" r=".32" />
            <circle cx="64.36" cy="71.21" r=".32" />
            <circle cx="67.06" cy="69.41" r=".32" />
            <circle cx="65.26" cy="69.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-g8)`}>
            <circle cx="67.06" cy="76.61" r=".32" />
            <circle cx="65.26" cy="76.61" r=".32" />
            <circle cx="67.96" cy="74.81" r=".32" />
            <circle cx="66.16" cy="74.81" r=".32" />
            <circle cx="64.36" cy="74.81" r=".32" />
            <circle cx="67.06" cy="73.01" r=".32" />
            <circle cx="65.26" cy="73.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-g9)`}>
            <circle cx="67.06" cy="80.21" r=".32" />
            <circle cx="65.26" cy="80.21" r=".32" />
            <circle cx="67.96" cy="78.41" r=".32" />
            <circle cx="66.16" cy="78.41" r=".32" />
            <circle cx="64.36" cy="78.41" r=".32" />
            <circle cx="67.06" cy="76.61" r=".32" />
            <circle cx="65.26" cy="76.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-ha)`}>
            <circle cx="67.06" cy="83.81" r=".32" />
            <circle cx="65.26" cy="83.81" r=".32" />
            <circle cx="67.96" cy="82.01" r=".32" />
            <circle cx="66.16" cy="82.01" r=".32" />
            <circle cx="64.36" cy="82.01" r=".32" />
            <circle cx="67.06" cy="80.21" r=".32" />
            <circle cx="65.26" cy="80.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hb)`}>
            <circle cx="67.06" cy="87.41" r=".32" />
            <circle cx="65.26" cy="87.41" r=".32" />
            <circle cx="67.96" cy="85.61" r=".32" />
            <circle cx="66.16" cy="85.61" r=".32" />
            <circle cx="64.36" cy="85.61" r=".32" />
            <circle cx="67.06" cy="83.81" r=".32" />
            <circle cx="65.26" cy="83.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hc)`}>
            <circle cx="67.06" cy="91.01" r=".32" />
            <circle cx="65.26" cy="91.01" r=".32" />
            <circle cx="67.96" cy="89.21" r=".32" />
            <circle cx="66.16" cy="89.21" r=".32" />
            <circle cx="64.36" cy="89.21" r=".32" />
            <circle cx="67.06" cy="87.41" r=".32" />
            <circle cx="65.26" cy="87.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hd)`}>
            <circle cx="67.06" cy="94.61" r=".32" />
            <circle cx="65.26" cy="94.61" r=".32" />
            <circle cx="67.96" cy="92.81" r=".32" />
            <circle cx="66.16" cy="92.81" r=".32" />
            <circle cx="64.36" cy="92.81" r=".32" />
            <circle cx="67.06" cy="91.01" r=".32" />
            <circle cx="65.26" cy="91.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-he)`}>
            <circle cx="67.06" cy="98.21" r=".32" />
            <circle cx="65.26" cy="98.21" r=".32" />
            <circle cx="67.96" cy="96.41" r=".32" />
            <circle cx="66.16" cy="96.41" r=".32" />
            <circle cx="64.36" cy="96.41" r=".32" />
            <circle cx="67.06" cy="94.61" r=".32" />
            <circle cx="65.26" cy="94.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hf)`}>
            <circle cx="67.06" cy="101.81" r=".32" />
            <circle cx="65.26" cy="101.81" r=".32" />
            <circle cx="67.96" cy="100.01" r=".32" />
            <circle cx="66.16" cy="100.01" r=".32" />
            <circle cx="64.36" cy="100.01" r=".32" />
            <circle cx="67.06" cy="98.21" r=".32" />
            <circle cx="65.26" cy="98.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hg)`}>
            <circle cx="67.06" cy="105.41" r=".32" />
            <circle cx="65.26" cy="105.41" r=".32" />
            <circle cx="67.96" cy="103.61" r=".32" />
            <circle cx="66.16" cy="103.61" r=".32" />
            <circle cx="64.36" cy="103.61" r=".32" />
            <circle cx="67.06" cy="101.81" r=".32" />
            <circle cx="65.26" cy="101.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hh)`}>
            <circle cx="67.06" cy="109.01" r=".32" />
            <circle cx="65.26" cy="109.01" r=".32" />
            <circle cx="67.96" cy="107.21" r=".32" />
            <circle cx="66.16" cy="107.21" r=".32" />
            <circle cx="64.36" cy="107.21" r=".32" />
            <circle cx="67.06" cy="105.41" r=".32" />
            <circle cx="65.26" cy="105.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hi)`}>
            <circle cx="67.06" cy="112.61" r=".32" />
            <circle cx="65.26" cy="112.61" r=".32" />
            <circle cx="67.96" cy="110.81" r=".32" />
            <circle cx="66.16" cy="110.81" r=".32" />
            <circle cx="64.36" cy="110.81" r=".32" />
            <circle cx="67.06" cy="109.01" r=".32" />
            <circle cx="65.26" cy="109.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hj)`}>
            <circle cx="67.06" cy="116.21" r=".32" />
            <circle cx="65.26" cy="116.21" r=".32" />
            <circle cx="67.96" cy="114.41" r=".32" />
            <circle cx="66.16" cy="114.41" r=".32" />
            <circle cx="64.36" cy="114.41" r=".32" />
            <circle cx="67.06" cy="112.61" r=".32" />
            <circle cx="65.26" cy="112.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hm)`}>
            <circle cx="63.46" cy="69.41" r=".32" />
            <circle cx="61.66" cy="69.41" r=".32" />
            <circle cx="64.36" cy="67.61" r=".32" />
            <circle cx="62.56" cy="67.61" r=".32" />
            <circle cx="60.76" cy="67.61" r=".32" />
            <circle cx="63.46" cy="65.81" r=".32" />
            <circle cx="61.66" cy="65.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hn)`}>
            <circle cx="63.46" cy="73.01" r=".32" />
            <circle cx="61.66" cy="73.01" r=".32" />
            <circle cx="64.36" cy="71.21" r=".32" />
            <circle cx="62.56" cy="71.21" r=".32" />
            <circle cx="60.76" cy="71.21" r=".32" />
            <circle cx="63.46" cy="69.41" r=".32" />
            <circle cx="61.66" cy="69.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-ho)`}>
            <circle cx="63.46" cy="76.61" r=".32" />
            <circle cx="61.66" cy="76.61" r=".32" />
            <circle cx="64.36" cy="74.81" r=".32" />
            <circle cx="62.56" cy="74.81" r=".32" />
            <circle cx="60.76" cy="74.81" r=".32" />
            <circle cx="63.46" cy="73.01" r=".32" />
            <circle cx="61.66" cy="73.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hp)`}>
            <circle cx="63.46" cy="80.21" r=".32" />
            <circle cx="61.66" cy="80.21" r=".32" />
            <circle cx="64.36" cy="78.41" r=".32" />
            <circle cx="62.56" cy="78.41" r=".32" />
            <circle cx="60.76" cy="78.41" r=".32" />
            <circle cx="63.46" cy="76.61" r=".32" />
            <circle cx="61.66" cy="76.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hq)`}>
            <circle cx="63.46" cy="83.81" r=".32" />
            <circle cx="61.66" cy="83.81" r=".32" />
            <circle cx="64.36" cy="82.01" r=".32" />
            <circle cx="62.56" cy="82.01" r=".32" />
            <circle cx="60.76" cy="82.01" r=".32" />
            <circle cx="63.46" cy="80.21" r=".32" />
            <circle cx="61.66" cy="80.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hr)`}>
            <circle cx="63.46" cy="87.41" r=".32" />
            <circle cx="61.66" cy="87.41" r=".32" />
            <circle cx="64.36" cy="85.61" r=".32" />
            <circle cx="62.56" cy="85.61" r=".32" />
            <circle cx="60.76" cy="85.61" r=".32" />
            <circle cx="63.46" cy="83.81" r=".32" />
            <circle cx="61.66" cy="83.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hs)`}>
            <circle cx="63.46" cy="91.01" r=".32" />
            <circle cx="61.66" cy="91.01" r=".32" />
            <circle cx="64.36" cy="89.21" r=".32" />
            <circle cx="62.56" cy="89.21" r=".32" />
            <circle cx="60.76" cy="89.21" r=".32" />
            <circle cx="63.46" cy="87.41" r=".32" />
            <circle cx="61.66" cy="87.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-ht)`}>
            <circle cx="63.46" cy="94.61" r=".32" />
            <circle cx="61.66" cy="94.61" r=".32" />
            <circle cx="64.36" cy="92.81" r=".32" />
            <circle cx="62.56" cy="92.81" r=".32" />
            <circle cx="60.76" cy="92.81" r=".32" />
            <circle cx="63.46" cy="91.01" r=".32" />
            <circle cx="61.66" cy="91.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hu)`}>
            <circle cx="63.46" cy="98.21" r=".32" />
            <circle cx="61.66" cy="98.21" r=".32" />
            <circle cx="64.36" cy="96.41" r=".32" />
            <circle cx="62.56" cy="96.41" r=".32" />
            <circle cx="60.76" cy="96.41" r=".32" />
            <circle cx="63.46" cy="94.61" r=".32" />
            <circle cx="61.66" cy="94.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hv)`}>
            <circle cx="63.46" cy="101.81" r=".32" />
            <circle cx="61.66" cy="101.81" r=".32" />
            <circle cx="64.36" cy="100.01" r=".32" />
            <circle cx="62.56" cy="100.01" r=".32" />
            <circle cx="60.76" cy="100.01" r=".32" />
            <circle cx="63.46" cy="98.21" r=".32" />
            <circle cx="61.66" cy="98.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hw)`}>
            <circle cx="63.46" cy="105.41" r=".32" />
            <circle cx="61.66" cy="105.41" r=".32" />
            <circle cx="64.36" cy="103.61" r=".32" />
            <circle cx="62.56" cy="103.61" r=".32" />
            <circle cx="60.76" cy="103.61" r=".32" />
            <circle cx="63.46" cy="101.81" r=".32" />
            <circle cx="61.66" cy="101.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hx)`}>
            <circle cx="63.46" cy="109.01" r=".32" />
            <circle cx="61.66" cy="109.01" r=".32" />
            <circle cx="64.36" cy="107.21" r=".32" />
            <circle cx="62.56" cy="107.21" r=".32" />
            <circle cx="60.76" cy="107.21" r=".32" />
            <circle cx="63.46" cy="105.41" r=".32" />
            <circle cx="61.66" cy="105.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hy)`}>
            <circle cx="63.46" cy="112.61" r=".32" />
            <circle cx="61.66" cy="112.61" r=".32" />
            <circle cx="64.36" cy="110.81" r=".32" />
            <circle cx="62.56" cy="110.81" r=".32" />
            <circle cx="60.76" cy="110.81" r=".32" />
            <circle cx="63.46" cy="109.01" r=".32" />
            <circle cx="61.66" cy="109.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hz)`}>
            <circle cx="63.46" cy="116.21" r=".32" />
            <circle cx="61.66" cy="116.21" r=".32" />
            <circle cx="64.36" cy="114.41" r=".32" />
            <circle cx="62.56" cy="114.41" r=".32" />
            <circle cx="60.76" cy="114.41" r=".32" />
            <circle cx="63.46" cy="112.61" r=".32" />
            <circle cx="61.66" cy="112.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hC)`}>
            <circle cx="59.86" cy="69.41" r=".32" />
            <circle cx="58.06" cy="69.41" r=".32" />
            <circle cx="60.76" cy="67.61" r=".32" />
            <circle cx="58.96" cy="67.61" r=".32" />
            <circle cx="57.16" cy="67.61" r=".32" />
            <circle cx="59.86" cy="65.81" r=".32" />
            <circle cx="58.06" cy="65.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hD)`}>
            <circle cx="59.86" cy="73.01" r=".32" />
            <circle cx="58.06" cy="73.01" r=".32" />
            <circle cx="60.76" cy="71.21" r=".32" />
            <circle cx="58.96" cy="71.21" r=".32" />
            <circle cx="57.16" cy="71.21" r=".32" />
            <circle cx="59.86" cy="69.41" r=".32" />
            <circle cx="58.06" cy="69.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hE)`}>
            <circle cx="59.86" cy="76.61" r=".32" />
            <circle cx="58.06" cy="76.61" r=".32" />
            <circle cx="60.76" cy="74.81" r=".32" />
            <circle cx="58.96" cy="74.81" r=".32" />
            <circle cx="57.16" cy="74.81" r=".32" />
            <circle cx="59.86" cy="73.01" r=".32" />
            <circle cx="58.06" cy="73.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hF)`}>
            <circle cx="59.86" cy="80.21" r=".32" />
            <circle cx="58.06" cy="80.21" r=".32" />
            <circle cx="60.76" cy="78.41" r=".32" />
            <circle cx="58.96" cy="78.41" r=".32" />
            <circle cx="57.16" cy="78.41" r=".32" />
            <circle cx="59.86" cy="76.61" r=".32" />
            <circle cx="58.06" cy="76.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hG)`}>
            <circle cx="59.86" cy="83.81" r=".32" />
            <circle cx="58.06" cy="83.81" r=".32" />
            <circle cx="60.76" cy="82.01" r=".32" />
            <circle cx="58.96" cy="82.01" r=".32" />
            <circle cx="57.16" cy="82.01" r=".32" />
            <circle cx="59.86" cy="80.21" r=".32" />
            <circle cx="58.06" cy="80.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hH)`}>
            <circle cx="59.86" cy="87.41" r=".32" />
            <circle cx="58.06" cy="87.41" r=".32" />
            <circle cx="60.76" cy="85.61" r=".32" />
            <circle cx="58.96" cy="85.61" r=".32" />
            <circle cx="57.16" cy="85.61" r=".32" />
            <circle cx="59.86" cy="83.81" r=".32" />
            <circle cx="58.06" cy="83.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hI)`}>
            <circle cx="59.86" cy="91.01" r=".32" />
            <circle cx="58.06" cy="91.01" r=".32" />
            <circle cx="60.76" cy="89.21" r=".32" />
            <circle cx="58.96" cy="89.21" r=".32" />
            <circle cx="57.16" cy="89.21" r=".32" />
            <circle cx="59.86" cy="87.41" r=".32" />
            <circle cx="58.06" cy="87.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hJ)`}>
            <circle cx="59.86" cy="94.61" r=".32" />
            <circle cx="58.06" cy="94.61" r=".32" />
            <circle cx="60.76" cy="92.81" r=".32" />
            <circle cx="58.96" cy="92.81" r=".32" />
            <circle cx="57.16" cy="92.81" r=".32" />
            <circle cx="59.86" cy="91.01" r=".32" />
            <circle cx="58.06" cy="91.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hK)`}>
            <circle cx="59.86" cy="98.21" r=".32" />
            <circle cx="58.06" cy="98.21" r=".32" />
            <circle cx="60.76" cy="96.41" r=".32" />
            <circle cx="58.96" cy="96.41" r=".32" />
            <circle cx="57.16" cy="96.41" r=".32" />
            <circle cx="59.86" cy="94.61" r=".32" />
            <circle cx="58.06" cy="94.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hL)`}>
            <circle cx="59.86" cy="101.81" r=".32" />
            <circle cx="58.06" cy="101.81" r=".32" />
            <circle cx="60.76" cy="100.01" r=".32" />
            <circle cx="58.96" cy="100.01" r=".32" />
            <circle cx="57.16" cy="100.01" r=".32" />
            <circle cx="59.86" cy="98.21" r=".32" />
            <circle cx="58.06" cy="98.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hM)`}>
            <circle cx="59.86" cy="105.41" r=".32" />
            <circle cx="58.06" cy="105.41" r=".32" />
            <circle cx="60.76" cy="103.61" r=".32" />
            <circle cx="58.96" cy="103.61" r=".32" />
            <circle cx="57.16" cy="103.61" r=".32" />
            <circle cx="59.86" cy="101.81" r=".32" />
            <circle cx="58.06" cy="101.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hN)`}>
            <circle cx="59.86" cy="109.01" r=".32" />
            <circle cx="58.06" cy="109.01" r=".32" />
            <circle cx="60.76" cy="107.21" r=".32" />
            <circle cx="58.96" cy="107.21" r=".32" />
            <circle cx="57.16" cy="107.21" r=".32" />
            <circle cx="59.86" cy="105.41" r=".32" />
            <circle cx="58.06" cy="105.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hO)`}>
            <circle cx="59.86" cy="112.61" r=".32" />
            <circle cx="58.06" cy="112.61" r=".32" />
            <circle cx="60.76" cy="110.81" r=".32" />
            <circle cx="58.96" cy="110.81" r=".32" />
            <circle cx="57.16" cy="110.81" r=".32" />
            <circle cx="59.86" cy="109.01" r=".32" />
            <circle cx="58.06" cy="109.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hP)`}>
            <circle cx="59.86" cy="116.21" r=".32" />
            <circle cx="58.06" cy="116.21" r=".32" />
            <circle cx="60.76" cy="114.41" r=".32" />
            <circle cx="58.96" cy="114.41" r=".32" />
            <circle cx="57.16" cy="114.41" r=".32" />
            <circle cx="59.86" cy="112.61" r=".32" />
            <circle cx="58.06" cy="112.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hS)`}>
            <circle cx="56.26" cy="69.41" r=".32" />
            <circle cx="54.46" cy="69.41" r=".32" />
            <circle cx="57.16" cy="67.61" r=".32" />
            <circle cx="55.36" cy="67.61" r=".32" />
            <circle cx="53.56" cy="67.61" r=".32" />
            <circle cx="56.26" cy="65.81" r=".32" />
            <circle cx="54.46" cy="65.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hT)`}>
            <circle cx="56.26" cy="73.01" r=".32" />
            <circle cx="54.46" cy="73.01" r=".32" />
            <circle cx="57.16" cy="71.21" r=".32" />
            <circle cx="55.36" cy="71.21" r=".32" />
            <circle cx="53.56" cy="71.21" r=".32" />
            <circle cx="56.26" cy="69.41" r=".32" />
            <circle cx="54.46" cy="69.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hU)`}>
            <circle cx="56.26" cy="76.61" r=".32" />
            <circle cx="54.46" cy="76.61" r=".32" />
            <circle cx="57.16" cy="74.81" r=".32" />
            <circle cx="55.36" cy="74.81" r=".32" />
            <circle cx="53.56" cy="74.81" r=".32" />
            <circle cx="56.26" cy="73.01" r=".32" />
            <circle cx="54.46" cy="73.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hV)`}>
            <circle cx="56.26" cy="80.21" r=".32" />
            <circle cx="54.46" cy="80.21" r=".32" />
            <circle cx="57.16" cy="78.41" r=".32" />
            <circle cx="55.36" cy="78.41" r=".32" />
            <circle cx="53.56" cy="78.41" r=".32" />
            <circle cx="56.26" cy="76.61" r=".32" />
            <circle cx="54.46" cy="76.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hW)`}>
            <circle cx="56.26" cy="83.81" r=".32" />
            <circle cx="54.46" cy="83.81" r=".32" />
            <circle cx="57.16" cy="82.01" r=".32" />
            <circle cx="55.36" cy="82.01" r=".32" />
            <circle cx="53.56" cy="82.01" r=".32" />
            <circle cx="56.26" cy="80.21" r=".32" />
            <circle cx="54.46" cy="80.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hX)`}>
            <circle cx="56.26" cy="87.41" r=".32" />
            <circle cx="54.46" cy="87.41" r=".32" />
            <circle cx="57.16" cy="85.61" r=".32" />
            <circle cx="55.36" cy="85.61" r=".32" />
            <circle cx="53.56" cy="85.61" r=".32" />
            <circle cx="56.26" cy="83.81" r=".32" />
            <circle cx="54.46" cy="83.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hY)`}>
            <circle cx="56.26" cy="91.01" r=".32" />
            <circle cx="54.46" cy="91.01" r=".32" />
            <circle cx="57.16" cy="89.21" r=".32" />
            <circle cx="55.36" cy="89.21" r=".32" />
            <circle cx="53.56" cy="89.21" r=".32" />
            <circle cx="56.26" cy="87.41" r=".32" />
            <circle cx="54.46" cy="87.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-hZ)`}>
            <circle cx="56.26" cy="94.61" r=".32" />
            <circle cx="54.46" cy="94.61" r=".32" />
            <circle cx="57.16" cy="92.81" r=".32" />
            <circle cx="55.36" cy="92.81" r=".32" />
            <circle cx="53.56" cy="92.81" r=".32" />
            <circle cx="56.26" cy="91.01" r=".32" />
            <circle cx="54.46" cy="91.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-h0)`}>
            <circle cx="56.26" cy="98.21" r=".32" />
            <circle cx="54.46" cy="98.21" r=".32" />
            <circle cx="57.16" cy="96.41" r=".32" />
            <circle cx="55.36" cy="96.41" r=".32" />
            <circle cx="53.56" cy="96.41" r=".32" />
            <circle cx="56.26" cy="94.61" r=".32" />
            <circle cx="54.46" cy="94.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-h1)`}>
            <circle cx="56.26" cy="101.81" r=".32" />
            <circle cx="54.46" cy="101.81" r=".32" />
            <circle cx="57.16" cy="100.01" r=".32" />
            <circle cx="55.36" cy="100.01" r=".32" />
            <circle cx="53.56" cy="100.01" r=".32" />
            <circle cx="56.26" cy="98.21" r=".32" />
            <circle cx="54.46" cy="98.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-h2)`}>
            <circle cx="56.26" cy="105.41" r=".32" />
            <circle cx="54.46" cy="105.41" r=".32" />
            <circle cx="57.16" cy="103.61" r=".32" />
            <circle cx="55.36" cy="103.61" r=".32" />
            <circle cx="53.56" cy="103.61" r=".32" />
            <circle cx="56.26" cy="101.81" r=".32" />
            <circle cx="54.46" cy="101.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-h3)`}>
            <circle cx="56.26" cy="109.01" r=".32" />
            <circle cx="54.46" cy="109.01" r=".32" />
            <circle cx="57.16" cy="107.21" r=".32" />
            <circle cx="55.36" cy="107.21" r=".32" />
            <circle cx="53.56" cy="107.21" r=".32" />
            <circle cx="56.26" cy="105.41" r=".32" />
            <circle cx="54.46" cy="105.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-h4)`}>
            <circle cx="56.26" cy="112.61" r=".32" />
            <circle cx="54.46" cy="112.61" r=".32" />
            <circle cx="57.16" cy="110.81" r=".32" />
            <circle cx="55.36" cy="110.81" r=".32" />
            <circle cx="53.56" cy="110.81" r=".32" />
            <circle cx="56.26" cy="109.01" r=".32" />
            <circle cx="54.46" cy="109.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-h5)`}>
            <circle cx="56.26" cy="116.21" r=".32" />
            <circle cx="54.46" cy="116.21" r=".32" />
            <circle cx="57.16" cy="114.41" r=".32" />
            <circle cx="55.36" cy="114.41" r=".32" />
            <circle cx="53.56" cy="114.41" r=".32" />
            <circle cx="56.26" cy="112.61" r=".32" />
            <circle cx="54.46" cy="112.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-h8)`}>
            <circle cx="52.66" cy="69.41" r=".32" />
            <circle cx="50.86" cy="69.41" r=".32" />
            <circle cx="53.56" cy="67.61" r=".32" />
            <circle cx="51.76" cy="67.61" r=".32" />
            <circle cx="49.96" cy="67.61" r=".32" />
            <circle cx="52.66" cy="65.81" r=".32" />
            <circle cx="50.86" cy="65.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-h9)`}>
            <circle cx="52.66" cy="73.01" r=".32" />
            <circle cx="50.86" cy="73.01" r=".32" />
            <circle cx="53.56" cy="71.21" r=".32" />
            <circle cx="51.76" cy="71.21" r=".32" />
            <circle cx="49.96" cy="71.21" r=".32" />
            <circle cx="52.66" cy="69.41" r=".32" />
            <circle cx="50.86" cy="69.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-ia)`}>
            <circle cx="52.66" cy="76.61" r=".32" />
            <circle cx="50.86" cy="76.61" r=".32" />
            <circle cx="53.56" cy="74.81" r=".32" />
            <circle cx="51.76" cy="74.81" r=".32" />
            <circle cx="49.96" cy="74.81" r=".32" />
            <circle cx="52.66" cy="73.01" r=".32" />
            <circle cx="50.86" cy="73.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-ib)`}>
            <circle cx="52.66" cy="80.21" r=".32" />
            <circle cx="50.86" cy="80.21" r=".32" />
            <circle cx="53.56" cy="78.41" r=".32" />
            <circle cx="51.76" cy="78.41" r=".32" />
            <circle cx="49.96" cy="78.41" r=".32" />
            <circle cx="52.66" cy="76.61" r=".32" />
            <circle cx="50.86" cy="76.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-ic)`}>
            <circle cx="52.66" cy="83.81" r=".32" />
            <circle cx="50.86" cy="83.81" r=".32" />
            <circle cx="53.56" cy="82.01" r=".32" />
            <circle cx="51.76" cy="82.01" r=".32" />
            <circle cx="49.96" cy="82.01" r=".32" />
            <circle cx="52.66" cy="80.21" r=".32" />
            <circle cx="50.86" cy="80.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-id)`}>
            <circle cx="52.66" cy="87.41" r=".32" />
            <circle cx="50.86" cy="87.41" r=".32" />
            <circle cx="53.56" cy="85.61" r=".32" />
            <circle cx="51.76" cy="85.61" r=".32" />
            <circle cx="49.96" cy="85.61" r=".32" />
            <circle cx="52.66" cy="83.81" r=".32" />
            <circle cx="50.86" cy="83.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-ie)`}>
            <circle cx="52.66" cy="91.01" r=".32" />
            <circle cx="50.86" cy="91.01" r=".32" />
            <circle cx="53.56" cy="89.21" r=".32" />
            <circle cx="51.76" cy="89.21" r=".32" />
            <circle cx="49.96" cy="89.21" r=".32" />
            <circle cx="52.66" cy="87.41" r=".32" />
            <circle cx="50.86" cy="87.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-if)`}>
            <circle cx="52.66" cy="94.61" r=".32" />
            <circle cx="50.86" cy="94.61" r=".32" />
            <circle cx="53.56" cy="92.81" r=".32" />
            <circle cx="51.76" cy="92.81" r=".32" />
            <circle cx="49.96" cy="92.81" r=".32" />
            <circle cx="52.66" cy="91.01" r=".32" />
            <circle cx="50.86" cy="91.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-ig)`}>
            <circle cx="52.66" cy="98.21" r=".32" />
            <circle cx="50.86" cy="98.21" r=".32" />
            <circle cx="53.56" cy="96.41" r=".32" />
            <circle cx="51.76" cy="96.41" r=".32" />
            <circle cx="49.96" cy="96.41" r=".32" />
            <circle cx="52.66" cy="94.61" r=".32" />
            <circle cx="50.86" cy="94.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-ih)`}>
            <circle cx="52.66" cy="101.81" r=".32" />
            <circle cx="50.86" cy="101.81" r=".32" />
            <circle cx="53.56" cy="100.01" r=".32" />
            <circle cx="51.76" cy="100.01" r=".32" />
            <circle cx="49.96" cy="100.01" r=".32" />
            <circle cx="52.66" cy="98.21" r=".32" />
            <circle cx="50.86" cy="98.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-ii)`}>
            <circle cx="52.66" cy="105.41" r=".32" />
            <circle cx="50.86" cy="105.41" r=".32" />
            <circle cx="53.56" cy="103.61" r=".32" />
            <circle cx="51.76" cy="103.61" r=".32" />
            <circle cx="49.96" cy="103.61" r=".32" />
            <circle cx="52.66" cy="101.81" r=".32" />
            <circle cx="50.86" cy="101.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-ij)`}>
            <circle cx="52.66" cy="109.01" r=".32" />
            <circle cx="50.86" cy="109.01" r=".32" />
            <circle cx="53.56" cy="107.21" r=".32" />
            <circle cx="51.76" cy="107.21" r=".32" />
            <circle cx="49.96" cy="107.21" r=".32" />
            <circle cx="52.66" cy="105.41" r=".32" />
            <circle cx="50.86" cy="105.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-ik)`}>
            <circle cx="52.66" cy="112.61" r=".32" />
            <circle cx="50.86" cy="112.61" r=".32" />
            <circle cx="53.56" cy="110.81" r=".32" />
            <circle cx="51.76" cy="110.81" r=".32" />
            <circle cx="49.96" cy="110.81" r=".32" />
            <circle cx="52.66" cy="109.01" r=".32" />
            <circle cx="50.86" cy="109.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-il)`}>
            <circle cx="52.66" cy="116.21" r=".32" />
            <circle cx="50.86" cy="116.21" r=".32" />
            <circle cx="53.56" cy="114.41" r=".32" />
            <circle cx="51.76" cy="114.41" r=".32" />
            <circle cx="49.96" cy="114.41" r=".32" />
            <circle cx="52.66" cy="112.61" r=".32" />
            <circle cx="50.86" cy="112.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-io)`}>
            <circle cx="49.06" cy="69.41" r=".32" />
            <circle cx="47.26" cy="69.41" r=".32" />
            <circle cx="49.96" cy="67.61" r=".32" />
            <circle cx="48.16" cy="67.61" r=".32" />
            <circle cx="46.36" cy="67.61" r=".32" />
            <circle cx="49.06" cy="65.81" r=".32" />
            <circle cx="47.26" cy="65.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-ip)`}>
            <circle cx="49.06" cy="73.01" r=".32" />
            <circle cx="47.26" cy="73.01" r=".32" />
            <circle cx="49.96" cy="71.21" r=".32" />
            <circle cx="48.16" cy="71.21" r=".32" />
            <circle cx="46.36" cy="71.21" r=".32" />
            <circle cx="49.06" cy="69.41" r=".32" />
            <circle cx="47.26" cy="69.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iq)`}>
            <circle cx="49.06" cy="76.61" r=".32" />
            <circle cx="47.26" cy="76.61" r=".32" />
            <circle cx="49.96" cy="74.81" r=".32" />
            <circle cx="48.16" cy="74.81" r=".32" />
            <circle cx="46.36" cy="74.81" r=".32" />
            <circle cx="49.06" cy="73.01" r=".32" />
            <circle cx="47.26" cy="73.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-ir)`}>
            <circle cx="49.06" cy="80.21" r=".32" />
            <circle cx="47.26" cy="80.21" r=".32" />
            <circle cx="49.96" cy="78.41" r=".32" />
            <circle cx="48.16" cy="78.41" r=".32" />
            <circle cx="46.36" cy="78.41" r=".32" />
            <circle cx="49.06" cy="76.61" r=".32" />
            <circle cx="47.26" cy="76.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-is)`}>
            <circle cx="49.06" cy="83.81" r=".32" />
            <circle cx="47.26" cy="83.81" r=".32" />
            <circle cx="49.96" cy="82.01" r=".32" />
            <circle cx="48.16" cy="82.01" r=".32" />
            <circle cx="46.36" cy="82.01" r=".32" />
            <circle cx="49.06" cy="80.21" r=".32" />
            <circle cx="47.26" cy="80.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-it)`}>
            <circle cx="49.06" cy="87.41" r=".32" />
            <circle cx="47.26" cy="87.41" r=".32" />
            <circle cx="49.96" cy="85.61" r=".32" />
            <circle cx="48.16" cy="85.61" r=".32" />
            <circle cx="46.36" cy="85.61" r=".32" />
            <circle cx="49.06" cy="83.81" r=".32" />
            <circle cx="47.26" cy="83.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iu)`}>
            <circle cx="49.06" cy="91.01" r=".32" />
            <circle cx="47.26" cy="91.01" r=".32" />
            <circle cx="49.96" cy="89.21" r=".32" />
            <circle cx="48.16" cy="89.21" r=".32" />
            <circle cx="46.36" cy="89.21" r=".32" />
            <circle cx="49.06" cy="87.41" r=".32" />
            <circle cx="47.26" cy="87.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iv)`}>
            <circle cx="49.06" cy="94.61" r=".32" />
            <circle cx="47.26" cy="94.61" r=".32" />
            <circle cx="49.96" cy="92.81" r=".32" />
            <circle cx="48.16" cy="92.81" r=".32" />
            <circle cx="46.36" cy="92.81" r=".32" />
            <circle cx="49.06" cy="91.01" r=".32" />
            <circle cx="47.26" cy="91.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iw)`}>
            <circle cx="49.06" cy="98.21" r=".32" />
            <circle cx="47.26" cy="98.21" r=".32" />
            <circle cx="49.96" cy="96.41" r=".32" />
            <circle cx="48.16" cy="96.41" r=".32" />
            <circle cx="46.36" cy="96.41" r=".32" />
            <circle cx="49.06" cy="94.61" r=".32" />
            <circle cx="47.26" cy="94.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-ix)`}>
            <circle cx="49.06" cy="101.81" r=".32" />
            <circle cx="47.26" cy="101.81" r=".32" />
            <circle cx="49.96" cy="100.01" r=".32" />
            <circle cx="48.16" cy="100.01" r=".32" />
            <circle cx="46.36" cy="100.01" r=".32" />
            <circle cx="49.06" cy="98.21" r=".32" />
            <circle cx="47.26" cy="98.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iy)`}>
            <circle cx="49.06" cy="105.41" r=".32" />
            <circle cx="47.26" cy="105.41" r=".32" />
            <circle cx="49.96" cy="103.61" r=".32" />
            <circle cx="48.16" cy="103.61" r=".32" />
            <circle cx="46.36" cy="103.61" r=".32" />
            <circle cx="49.06" cy="101.81" r=".32" />
            <circle cx="47.26" cy="101.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iz)`}>
            <circle cx="49.06" cy="109.01" r=".32" />
            <circle cx="47.26" cy="109.01" r=".32" />
            <circle cx="49.96" cy="107.21" r=".32" />
            <circle cx="48.16" cy="107.21" r=".32" />
            <circle cx="46.36" cy="107.21" r=".32" />
            <circle cx="49.06" cy="105.41" r=".32" />
            <circle cx="47.26" cy="105.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iA)`}>
            <circle cx="49.06" cy="112.61" r=".32" />
            <circle cx="47.26" cy="112.61" r=".32" />
            <circle cx="49.96" cy="110.81" r=".32" />
            <circle cx="48.16" cy="110.81" r=".32" />
            <circle cx="46.36" cy="110.81" r=".32" />
            <circle cx="49.06" cy="109.01" r=".32" />
            <circle cx="47.26" cy="109.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iB)`}>
            <circle cx="49.06" cy="116.21" r=".32" />
            <circle cx="47.26" cy="116.21" r=".32" />
            <circle cx="49.96" cy="114.41" r=".32" />
            <circle cx="48.16" cy="114.41" r=".32" />
            <circle cx="46.36" cy="114.41" r=".32" />
            <circle cx="49.06" cy="112.61" r=".32" />
            <circle cx="47.26" cy="112.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iE)`}>
            <circle cx="45.46" cy="69.41" r=".32" />
            <circle cx="43.66" cy="69.41" r=".32" />
            <circle cx="46.36" cy="67.61" r=".32" />
            <circle cx="44.56" cy="67.61" r=".32" />
            <circle cx="42.76" cy="67.61" r=".32" />
            <circle cx="45.46" cy="65.81" r=".32" />
            <circle cx="43.66" cy="65.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iF)`}>
            <circle cx="45.46" cy="73.01" r=".32" />
            <circle cx="43.66" cy="73.01" r=".32" />
            <circle cx="46.36" cy="71.21" r=".32" />
            <circle cx="44.56" cy="71.21" r=".32" />
            <circle cx="42.76" cy="71.21" r=".32" />
            <circle cx="45.46" cy="69.41" r=".32" />
            <circle cx="43.66" cy="69.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iG)`}>
            <circle cx="45.46" cy="76.61" r=".32" />
            <circle cx="43.66" cy="76.61" r=".32" />
            <circle cx="46.36" cy="74.81" r=".32" />
            <circle cx="44.56" cy="74.81" r=".32" />
            <circle cx="42.76" cy="74.81" r=".32" />
            <circle cx="45.46" cy="73.01" r=".32" />
            <circle cx="43.66" cy="73.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iH)`}>
            <circle cx="45.46" cy="80.21" r=".32" />
            <circle cx="43.66" cy="80.21" r=".32" />
            <circle cx="46.36" cy="78.41" r=".32" />
            <circle cx="44.56" cy="78.41" r=".32" />
            <circle cx="42.76" cy="78.41" r=".32" />
            <circle cx="45.46" cy="76.61" r=".32" />
            <circle cx="43.66" cy="76.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iI)`}>
            <circle cx="45.46" cy="83.81" r=".32" />
            <circle cx="43.66" cy="83.81" r=".32" />
            <circle cx="46.36" cy="82.01" r=".32" />
            <circle cx="44.56" cy="82.01" r=".32" />
            <circle cx="42.76" cy="82.01" r=".32" />
            <circle cx="45.46" cy="80.21" r=".32" />
            <circle cx="43.66" cy="80.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iJ)`}>
            <circle cx="45.46" cy="87.41" r=".32" />
            <circle cx="43.66" cy="87.41" r=".32" />
            <circle cx="46.36" cy="85.61" r=".32" />
            <circle cx="44.56" cy="85.61" r=".32" />
            <circle cx="42.76" cy="85.61" r=".32" />
            <circle cx="45.46" cy="83.81" r=".32" />
            <circle cx="43.66" cy="83.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iK)`}>
            <circle cx="45.46" cy="91.01" r=".32" />
            <circle cx="43.66" cy="91.01" r=".32" />
            <circle cx="46.36" cy="89.21" r=".32" />
            <circle cx="44.56" cy="89.21" r=".32" />
            <circle cx="42.76" cy="89.21" r=".32" />
            <circle cx="45.46" cy="87.41" r=".32" />
            <circle cx="43.66" cy="87.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iL)`}>
            <circle cx="45.46" cy="94.61" r=".32" />
            <circle cx="43.66" cy="94.61" r=".32" />
            <circle cx="46.36" cy="92.81" r=".32" />
            <circle cx="44.56" cy="92.81" r=".32" />
            <circle cx="42.76" cy="92.81" r=".32" />
            <circle cx="45.46" cy="91.01" r=".32" />
            <circle cx="43.66" cy="91.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iM)`}>
            <circle cx="45.46" cy="98.21" r=".32" />
            <circle cx="43.66" cy="98.21" r=".32" />
            <circle cx="46.36" cy="96.41" r=".32" />
            <circle cx="44.56" cy="96.41" r=".32" />
            <circle cx="42.76" cy="96.41" r=".32" />
            <circle cx="45.46" cy="94.61" r=".32" />
            <circle cx="43.66" cy="94.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iN)`}>
            <circle cx="45.46" cy="101.81" r=".32" />
            <circle cx="43.66" cy="101.81" r=".32" />
            <circle cx="46.36" cy="100.01" r=".32" />
            <circle cx="44.56" cy="100.01" r=".32" />
            <circle cx="42.76" cy="100.01" r=".32" />
            <circle cx="45.46" cy="98.21" r=".32" />
            <circle cx="43.66" cy="98.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iO)`}>
            <circle cx="45.46" cy="105.41" r=".32" />
            <circle cx="43.66" cy="105.41" r=".32" />
            <circle cx="46.36" cy="103.61" r=".32" />
            <circle cx="44.56" cy="103.61" r=".32" />
            <circle cx="42.76" cy="103.61" r=".32" />
            <circle cx="45.46" cy="101.81" r=".32" />
            <circle cx="43.66" cy="101.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iP)`}>
            <circle cx="45.46" cy="109.01" r=".32" />
            <circle cx="43.66" cy="109.01" r=".32" />
            <circle cx="46.36" cy="107.21" r=".32" />
            <circle cx="44.56" cy="107.21" r=".32" />
            <circle cx="42.76" cy="107.21" r=".32" />
            <circle cx="45.46" cy="105.41" r=".32" />
            <circle cx="43.66" cy="105.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iQ)`}>
            <circle cx="45.46" cy="112.61" r=".32" />
            <circle cx="43.66" cy="112.61" r=".32" />
            <circle cx="46.36" cy="110.81" r=".32" />
            <circle cx="44.56" cy="110.81" r=".32" />
            <circle cx="42.76" cy="110.81" r=".32" />
            <circle cx="45.46" cy="109.01" r=".32" />
            <circle cx="43.66" cy="109.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iR)`}>
            <circle cx="45.46" cy="116.21" r=".32" />
            <circle cx="43.66" cy="116.21" r=".32" />
            <circle cx="46.36" cy="114.41" r=".32" />
            <circle cx="44.56" cy="114.41" r=".32" />
            <circle cx="42.76" cy="114.41" r=".32" />
            <circle cx="45.46" cy="112.61" r=".32" />
            <circle cx="43.66" cy="112.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iU)`}>
            <circle cx="41.86" cy="69.41" r=".32" />
            <circle cx="40.06" cy="69.41" r=".32" />
            <circle cx="42.76" cy="67.61" r=".32" />
            <circle cx="40.96" cy="67.61" r=".32" />
            <circle cx="39.16" cy="67.61" r=".32" />
            <circle cx="41.86" cy="65.81" r=".32" />
            <circle cx="40.06" cy="65.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iV)`}>
            <circle cx="41.86" cy="73.01" r=".32" />
            <circle cx="40.06" cy="73.01" r=".32" />
            <circle cx="42.76" cy="71.21" r=".32" />
            <circle cx="40.96" cy="71.21" r=".32" />
            <circle cx="39.16" cy="71.21" r=".32" />
            <circle cx="41.86" cy="69.41" r=".32" />
            <circle cx="40.06" cy="69.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iW)`}>
            <circle cx="41.86" cy="76.61" r=".32" />
            <circle cx="40.06" cy="76.61" r=".32" />
            <circle cx="42.76" cy="74.81" r=".32" />
            <circle cx="40.96" cy="74.81" r=".32" />
            <circle cx="39.16" cy="74.81" r=".32" />
            <circle cx="41.86" cy="73.01" r=".32" />
            <circle cx="40.06" cy="73.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iX)`}>
            <circle cx="41.86" cy="80.21" r=".32" />
            <circle cx="40.06" cy="80.21" r=".32" />
            <circle cx="42.76" cy="78.41" r=".32" />
            <circle cx="40.96" cy="78.41" r=".32" />
            <circle cx="39.16" cy="78.41" r=".32" />
            <circle cx="41.86" cy="76.61" r=".32" />
            <circle cx="40.06" cy="76.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iY)`}>
            <circle cx="41.86" cy="83.81" r=".32" />
            <circle cx="40.06" cy="83.81" r=".32" />
            <circle cx="42.76" cy="82.01" r=".32" />
            <circle cx="40.96" cy="82.01" r=".32" />
            <circle cx="39.16" cy="82.01" r=".32" />
            <circle cx="41.86" cy="80.21" r=".32" />
            <circle cx="40.06" cy="80.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-iZ)`}>
            <circle cx="41.86" cy="87.41" r=".32" />
            <circle cx="40.06" cy="87.41" r=".32" />
            <circle cx="42.76" cy="85.61" r=".32" />
            <circle cx="40.96" cy="85.61" r=".32" />
            <circle cx="39.16" cy="85.61" r=".32" />
            <circle cx="41.86" cy="83.81" r=".32" />
            <circle cx="40.06" cy="83.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-i0)`}>
            <circle cx="41.86" cy="91.01" r=".32" />
            <circle cx="40.06" cy="91.01" r=".32" />
            <circle cx="42.76" cy="89.21" r=".32" />
            <circle cx="40.96" cy="89.21" r=".32" />
            <circle cx="39.16" cy="89.21" r=".32" />
            <circle cx="41.86" cy="87.41" r=".32" />
            <circle cx="40.06" cy="87.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-i1)`}>
            <circle cx="41.86" cy="94.61" r=".32" />
            <circle cx="40.06" cy="94.61" r=".32" />
            <circle cx="42.76" cy="92.81" r=".32" />
            <circle cx="40.96" cy="92.81" r=".32" />
            <circle cx="39.16" cy="92.81" r=".32" />
            <circle cx="41.86" cy="91.01" r=".32" />
            <circle cx="40.06" cy="91.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-i2)`}>
            <circle cx="41.86" cy="98.21" r=".32" />
            <circle cx="40.06" cy="98.21" r=".32" />
            <circle cx="42.76" cy="96.41" r=".32" />
            <circle cx="40.96" cy="96.41" r=".32" />
            <circle cx="39.16" cy="96.41" r=".32" />
            <circle cx="41.86" cy="94.61" r=".32" />
            <circle cx="40.06" cy="94.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-i3)`}>
            <circle cx="41.86" cy="101.81" r=".32" />
            <circle cx="40.06" cy="101.81" r=".32" />
            <circle cx="42.76" cy="100.01" r=".32" />
            <circle cx="40.96" cy="100.01" r=".32" />
            <circle cx="39.16" cy="100.01" r=".32" />
            <circle cx="41.86" cy="98.21" r=".32" />
            <circle cx="40.06" cy="98.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-i4)`}>
            <circle cx="41.86" cy="105.41" r=".32" />
            <circle cx="40.06" cy="105.41" r=".32" />
            <circle cx="42.76" cy="103.61" r=".32" />
            <circle cx="40.96" cy="103.61" r=".32" />
            <circle cx="39.16" cy="103.61" r=".32" />
            <circle cx="41.86" cy="101.81" r=".32" />
            <circle cx="40.06" cy="101.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-i5)`}>
            <circle cx="41.86" cy="109.01" r=".32" />
            <circle cx="40.06" cy="109.01" r=".32" />
            <circle cx="42.76" cy="107.21" r=".32" />
            <circle cx="40.96" cy="107.21" r=".32" />
            <circle cx="39.16" cy="107.21" r=".32" />
            <circle cx="41.86" cy="105.41" r=".32" />
            <circle cx="40.06" cy="105.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-i6)`}>
            <circle cx="41.86" cy="112.61" r=".32" />
            <circle cx="40.06" cy="112.61" r=".32" />
            <circle cx="42.76" cy="110.81" r=".32" />
            <circle cx="40.96" cy="110.81" r=".32" />
            <circle cx="39.16" cy="110.81" r=".32" />
            <circle cx="41.86" cy="109.01" r=".32" />
            <circle cx="40.06" cy="109.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-i7)`}>
            <circle cx="41.86" cy="116.21" r=".32" />
            <circle cx="40.06" cy="116.21" r=".32" />
            <circle cx="42.76" cy="114.41" r=".32" />
            <circle cx="40.96" cy="114.41" r=".32" />
            <circle cx="39.16" cy="114.41" r=".32" />
            <circle cx="41.86" cy="112.61" r=".32" />
            <circle cx="40.06" cy="112.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-ja)`}>
            <circle cx="38.26" cy="69.41" r=".32" />
            <circle cx="36.46" cy="69.41" r=".32" />
            <circle cx="39.16" cy="67.61" r=".32" />
            <circle cx="37.36" cy="67.61" r=".32" />
            <circle cx="35.56" cy="67.61" r=".32" />
            <circle cx="38.26" cy="65.81" r=".32" />
            <circle cx="36.46" cy="65.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jb)`}>
            <circle cx="38.26" cy="73.01" r=".32" />
            <circle cx="36.46" cy="73.01" r=".32" />
            <circle cx="39.16" cy="71.21" r=".32" />
            <circle cx="37.36" cy="71.21" r=".32" />
            <circle cx="35.56" cy="71.21" r=".32" />
            <circle cx="38.26" cy="69.41" r=".32" />
            <circle cx="36.46" cy="69.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jc)`}>
            <circle cx="38.26" cy="76.61" r=".32" />
            <circle cx="36.46" cy="76.61" r=".32" />
            <circle cx="39.16" cy="74.81" r=".32" />
            <circle cx="37.36" cy="74.81" r=".32" />
            <circle cx="35.56" cy="74.81" r=".32" />
            <circle cx="38.26" cy="73.01" r=".32" />
            <circle cx="36.46" cy="73.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jd)`}>
            <circle cx="38.26" cy="80.21" r=".32" />
            <circle cx="36.46" cy="80.21" r=".32" />
            <circle cx="39.16" cy="78.41" r=".32" />
            <circle cx="37.36" cy="78.41" r=".32" />
            <circle cx="35.56" cy="78.41" r=".32" />
            <circle cx="38.26" cy="76.61" r=".32" />
            <circle cx="36.46" cy="76.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-je)`}>
            <circle cx="38.26" cy="83.81" r=".32" />
            <circle cx="36.46" cy="83.81" r=".32" />
            <circle cx="39.16" cy="82.01" r=".32" />
            <circle cx="37.36" cy="82.01" r=".32" />
            <circle cx="35.56" cy="82.01" r=".32" />
            <circle cx="38.26" cy="80.21" r=".32" />
            <circle cx="36.46" cy="80.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jf)`}>
            <circle cx="38.26" cy="87.41" r=".32" />
            <circle cx="36.46" cy="87.41" r=".32" />
            <circle cx="39.16" cy="85.61" r=".32" />
            <circle cx="37.36" cy="85.61" r=".32" />
            <circle cx="35.56" cy="85.61" r=".32" />
            <circle cx="38.26" cy="83.81" r=".32" />
            <circle cx="36.46" cy="83.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jg)`}>
            <circle cx="38.26" cy="91.01" r=".32" />
            <circle cx="36.46" cy="91.01" r=".32" />
            <circle cx="39.16" cy="89.21" r=".32" />
            <circle cx="37.36" cy="89.21" r=".32" />
            <circle cx="35.56" cy="89.21" r=".32" />
            <circle cx="38.26" cy="87.41" r=".32" />
            <circle cx="36.46" cy="87.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jh)`}>
            <circle cx="38.26" cy="94.61" r=".32" />
            <circle cx="36.46" cy="94.61" r=".32" />
            <circle cx="39.16" cy="92.81" r=".32" />
            <circle cx="37.36" cy="92.81" r=".32" />
            <circle cx="35.56" cy="92.81" r=".32" />
            <circle cx="38.26" cy="91.01" r=".32" />
            <circle cx="36.46" cy="91.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-ji)`}>
            <circle cx="38.26" cy="98.21" r=".32" />
            <circle cx="36.46" cy="98.21" r=".32" />
            <circle cx="39.16" cy="96.41" r=".32" />
            <circle cx="37.36" cy="96.41" r=".32" />
            <circle cx="35.56" cy="96.41" r=".32" />
            <circle cx="38.26" cy="94.61" r=".32" />
            <circle cx="36.46" cy="94.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jj)`}>
            <circle cx="38.26" cy="101.81" r=".32" />
            <circle cx="36.46" cy="101.81" r=".32" />
            <circle cx="39.16" cy="100.01" r=".32" />
            <circle cx="37.36" cy="100.01" r=".32" />
            <circle cx="35.56" cy="100.01" r=".32" />
            <circle cx="38.26" cy="98.21" r=".32" />
            <circle cx="36.46" cy="98.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jk)`}>
            <circle cx="38.26" cy="105.41" r=".32" />
            <circle cx="36.46" cy="105.41" r=".32" />
            <circle cx="39.16" cy="103.61" r=".32" />
            <circle cx="37.36" cy="103.61" r=".32" />
            <circle cx="35.56" cy="103.61" r=".32" />
            <circle cx="38.26" cy="101.81" r=".32" />
            <circle cx="36.46" cy="101.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jl)`}>
            <circle cx="38.26" cy="109.01" r=".32" />
            <circle cx="36.46" cy="109.01" r=".32" />
            <circle cx="39.16" cy="107.21" r=".32" />
            <circle cx="37.36" cy="107.21" r=".32" />
            <circle cx="35.56" cy="107.21" r=".32" />
            <circle cx="38.26" cy="105.41" r=".32" />
            <circle cx="36.46" cy="105.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jm)`}>
            <circle cx="38.26" cy="112.61" r=".32" />
            <circle cx="36.46" cy="112.61" r=".32" />
            <circle cx="39.16" cy="110.81" r=".32" />
            <circle cx="37.36" cy="110.81" r=".32" />
            <circle cx="35.56" cy="110.81" r=".32" />
            <circle cx="38.26" cy="109.01" r=".32" />
            <circle cx="36.46" cy="109.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jn)`}>
            <circle cx="38.26" cy="116.21" r=".32" />
            <circle cx="36.46" cy="116.21" r=".32" />
            <circle cx="39.16" cy="114.41" r=".32" />
            <circle cx="37.36" cy="114.41" r=".32" />
            <circle cx="35.56" cy="114.41" r=".32" />
            <circle cx="38.26" cy="112.61" r=".32" />
            <circle cx="36.46" cy="112.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jq)`}>
            <circle cx="34.66" cy="69.41" r=".32" />
            <circle cx="32.86" cy="69.41" r=".32" />
            <circle cx="35.56" cy="67.61" r=".32" />
            <circle cx="33.76" cy="67.61" r=".32" />
            <circle cx="31.96" cy="67.61" r=".32" />
            <circle cx="34.66" cy="65.81" r=".32" />
            <circle cx="32.86" cy="65.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jr)`}>
            <circle cx="34.66" cy="73.01" r=".32" />
            <circle cx="32.86" cy="73.01" r=".32" />
            <circle cx="35.56" cy="71.21" r=".32" />
            <circle cx="33.76" cy="71.21" r=".32" />
            <circle cx="31.96" cy="71.21" r=".32" />
            <circle cx="34.66" cy="69.41" r=".32" />
            <circle cx="32.86" cy="69.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-js)`}>
            <circle cx="34.66" cy="76.61" r=".32" />
            <circle cx="32.86" cy="76.61" r=".32" />
            <circle cx="35.56" cy="74.81" r=".32" />
            <circle cx="33.76" cy="74.81" r=".32" />
            <circle cx="31.96" cy="74.81" r=".32" />
            <circle cx="34.66" cy="73.01" r=".32" />
            <circle cx="32.86" cy="73.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jt)`}>
            <circle cx="34.66" cy="80.21" r=".32" />
            <circle cx="32.86" cy="80.21" r=".32" />
            <circle cx="35.56" cy="78.41" r=".32" />
            <circle cx="33.76" cy="78.41" r=".32" />
            <circle cx="31.96" cy="78.41" r=".32" />
            <circle cx="34.66" cy="76.61" r=".32" />
            <circle cx="32.86" cy="76.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-ju)`}>
            <circle cx="34.66" cy="83.81" r=".32" />
            <circle cx="32.86" cy="83.81" r=".32" />
            <circle cx="35.56" cy="82.01" r=".32" />
            <circle cx="33.76" cy="82.01" r=".32" />
            <circle cx="31.96" cy="82.01" r=".32" />
            <circle cx="34.66" cy="80.21" r=".32" />
            <circle cx="32.86" cy="80.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jv)`}>
            <circle cx="34.66" cy="87.41" r=".32" />
            <circle cx="32.86" cy="87.41" r=".32" />
            <circle cx="35.56" cy="85.61" r=".32" />
            <circle cx="33.76" cy="85.61" r=".32" />
            <circle cx="31.96" cy="85.61" r=".32" />
            <circle cx="34.66" cy="83.81" r=".32" />
            <circle cx="32.86" cy="83.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jw)`}>
            <circle cx="34.66" cy="91.01" r=".32" />
            <circle cx="32.86" cy="91.01" r=".32" />
            <circle cx="35.56" cy="89.21" r=".32" />
            <circle cx="33.76" cy="89.21" r=".32" />
            <circle cx="31.96" cy="89.21" r=".32" />
            <circle cx="34.66" cy="87.41" r=".32" />
            <circle cx="32.86" cy="87.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jx)`}>
            <circle cx="34.66" cy="94.61" r=".32" />
            <circle cx="32.86" cy="94.61" r=".32" />
            <circle cx="35.56" cy="92.81" r=".32" />
            <circle cx="33.76" cy="92.81" r=".32" />
            <circle cx="31.96" cy="92.81" r=".32" />
            <circle cx="34.66" cy="91.01" r=".32" />
            <circle cx="32.86" cy="91.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jy)`}>
            <circle cx="34.66" cy="98.21" r=".32" />
            <circle cx="32.86" cy="98.21" r=".32" />
            <circle cx="35.56" cy="96.41" r=".32" />
            <circle cx="33.76" cy="96.41" r=".32" />
            <circle cx="31.96" cy="96.41" r=".32" />
            <circle cx="34.66" cy="94.61" r=".32" />
            <circle cx="32.86" cy="94.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jz)`}>
            <circle cx="34.66" cy="101.81" r=".32" />
            <circle cx="32.86" cy="101.81" r=".32" />
            <circle cx="35.56" cy="100.01" r=".32" />
            <circle cx="33.76" cy="100.01" r=".32" />
            <circle cx="31.96" cy="100.01" r=".32" />
            <circle cx="34.66" cy="98.21" r=".32" />
            <circle cx="32.86" cy="98.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jA)`}>
            <circle cx="34.66" cy="105.41" r=".32" />
            <circle cx="32.86" cy="105.41" r=".32" />
            <circle cx="35.56" cy="103.61" r=".32" />
            <circle cx="33.76" cy="103.61" r=".32" />
            <circle cx="31.96" cy="103.61" r=".32" />
            <circle cx="34.66" cy="101.81" r=".32" />
            <circle cx="32.86" cy="101.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jB)`}>
            <circle cx="34.66" cy="109.01" r=".32" />
            <circle cx="32.86" cy="109.01" r=".32" />
            <circle cx="35.56" cy="107.21" r=".32" />
            <circle cx="33.76" cy="107.21" r=".32" />
            <circle cx="31.96" cy="107.21" r=".32" />
            <circle cx="34.66" cy="105.41" r=".32" />
            <circle cx="32.86" cy="105.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jC)`}>
            <circle cx="34.66" cy="112.61" r=".32" />
            <circle cx="32.86" cy="112.61" r=".32" />
            <circle cx="35.56" cy="110.81" r=".32" />
            <circle cx="33.76" cy="110.81" r=".32" />
            <circle cx="31.96" cy="110.81" r=".32" />
            <circle cx="34.66" cy="109.01" r=".32" />
            <circle cx="32.86" cy="109.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jD)`}>
            <circle cx="34.66" cy="116.21" r=".32" />
            <circle cx="32.86" cy="116.21" r=".32" />
            <circle cx="35.56" cy="114.41" r=".32" />
            <circle cx="33.76" cy="114.41" r=".32" />
            <circle cx="31.96" cy="114.41" r=".32" />
            <circle cx="34.66" cy="112.61" r=".32" />
            <circle cx="32.86" cy="112.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jG)`}>
            <circle cx="31.06" cy="69.41" r=".32" />
            <circle cx="29.26" cy="69.41" r=".32" />
            <circle cx="31.96" cy="67.61" r=".32" />
            <circle cx="30.16" cy="67.61" r=".32" />
            <circle cx="28.36" cy="67.61" r=".32" />
            <circle cx="31.06" cy="65.81" r=".32" />
            <circle cx="29.26" cy="65.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jH)`}>
            <circle cx="31.06" cy="73.01" r=".32" />
            <circle cx="29.26" cy="73.01" r=".32" />
            <circle cx="31.96" cy="71.21" r=".32" />
            <circle cx="30.16" cy="71.21" r=".32" />
            <circle cx="28.36" cy="71.21" r=".32" />
            <circle cx="31.06" cy="69.41" r=".32" />
            <circle cx="29.26" cy="69.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jI)`}>
            <circle cx="31.06" cy="76.61" r=".32" />
            <circle cx="29.26" cy="76.61" r=".32" />
            <circle cx="31.96" cy="74.81" r=".32" />
            <circle cx="30.16" cy="74.81" r=".32" />
            <circle cx="28.36" cy="74.81" r=".32" />
            <circle cx="31.06" cy="73.01" r=".32" />
            <circle cx="29.26" cy="73.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jJ)`}>
            <circle cx="31.06" cy="80.21" r=".32" />
            <circle cx="29.26" cy="80.21" r=".32" />
            <circle cx="31.96" cy="78.41" r=".32" />
            <circle cx="30.16" cy="78.41" r=".32" />
            <circle cx="28.36" cy="78.41" r=".32" />
            <circle cx="31.06" cy="76.61" r=".32" />
            <circle cx="29.26" cy="76.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jK)`}>
            <circle cx="31.06" cy="83.81" r=".32" />
            <circle cx="29.26" cy="83.81" r=".32" />
            <circle cx="31.96" cy="82.01" r=".32" />
            <circle cx="30.16" cy="82.01" r=".32" />
            <circle cx="28.36" cy="82.01" r=".32" />
            <circle cx="31.06" cy="80.21" r=".32" />
            <circle cx="29.26" cy="80.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jL)`}>
            <circle cx="31.06" cy="87.41" r=".32" />
            <circle cx="29.26" cy="87.41" r=".32" />
            <circle cx="31.96" cy="85.61" r=".32" />
            <circle cx="30.16" cy="85.61" r=".32" />
            <circle cx="28.36" cy="85.61" r=".32" />
            <circle cx="31.06" cy="83.81" r=".32" />
            <circle cx="29.26" cy="83.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jM)`}>
            <circle cx="31.06" cy="91.01" r=".32" />
            <circle cx="29.26" cy="91.01" r=".32" />
            <circle cx="31.96" cy="89.21" r=".32" />
            <circle cx="30.16" cy="89.21" r=".32" />
            <circle cx="28.36" cy="89.21" r=".32" />
            <circle cx="31.06" cy="87.41" r=".32" />
            <circle cx="29.26" cy="87.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jN)`}>
            <circle cx="31.06" cy="94.61" r=".32" />
            <circle cx="29.26" cy="94.61" r=".32" />
            <circle cx="31.96" cy="92.81" r=".32" />
            <circle cx="30.16" cy="92.81" r=".32" />
            <circle cx="28.36" cy="92.81" r=".32" />
            <circle cx="31.06" cy="91.01" r=".32" />
            <circle cx="29.26" cy="91.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jO)`}>
            <circle cx="31.06" cy="98.21" r=".32" />
            <circle cx="29.26" cy="98.21" r=".32" />
            <circle cx="31.96" cy="96.41" r=".32" />
            <circle cx="30.16" cy="96.41" r=".32" />
            <circle cx="28.36" cy="96.41" r=".32" />
            <circle cx="31.06" cy="94.61" r=".32" />
            <circle cx="29.26" cy="94.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jP)`}>
            <circle cx="31.06" cy="101.81" r=".32" />
            <circle cx="29.26" cy="101.81" r=".32" />
            <circle cx="31.96" cy="100.01" r=".32" />
            <circle cx="30.16" cy="100.01" r=".32" />
            <circle cx="28.36" cy="100.01" r=".32" />
            <circle cx="31.06" cy="98.21" r=".32" />
            <circle cx="29.26" cy="98.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jQ)`}>
            <circle cx="31.06" cy="105.41" r=".32" />
            <circle cx="29.26" cy="105.41" r=".32" />
            <circle cx="31.96" cy="103.61" r=".32" />
            <circle cx="30.16" cy="103.61" r=".32" />
            <circle cx="28.36" cy="103.61" r=".32" />
            <circle cx="31.06" cy="101.81" r=".32" />
            <circle cx="29.26" cy="101.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jR)`}>
            <circle cx="31.06" cy="109.01" r=".32" />
            <circle cx="29.26" cy="109.01" r=".32" />
            <circle cx="31.96" cy="107.21" r=".32" />
            <circle cx="30.16" cy="107.21" r=".32" />
            <circle cx="28.36" cy="107.21" r=".32" />
            <circle cx="31.06" cy="105.41" r=".32" />
            <circle cx="29.26" cy="105.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jS)`}>
            <circle cx="31.06" cy="112.61" r=".32" />
            <circle cx="29.26" cy="112.61" r=".32" />
            <circle cx="31.96" cy="110.81" r=".32" />
            <circle cx="30.16" cy="110.81" r=".32" />
            <circle cx="28.36" cy="110.81" r=".32" />
            <circle cx="31.06" cy="109.01" r=".32" />
            <circle cx="29.26" cy="109.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jT)`}>
            <circle cx="31.06" cy="116.21" r=".32" />
            <circle cx="29.26" cy="116.21" r=".32" />
            <circle cx="31.96" cy="114.41" r=".32" />
            <circle cx="30.16" cy="114.41" r=".32" />
            <circle cx="28.36" cy="114.41" r=".32" />
            <circle cx="31.06" cy="112.61" r=".32" />
            <circle cx="29.26" cy="112.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jW)`}>
            <circle cx="27.46" cy="69.41" r=".32" />
            <circle cx="25.66" cy="69.41" r=".32" />
            <circle cx="28.36" cy="67.61" r=".32" />
            <circle cx="26.56" cy="67.61" r=".32" />
            <circle cx="24.76" cy="67.61" r=".32" />
            <circle cx="27.46" cy="65.81" r=".32" />
            <circle cx="25.66" cy="65.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jX)`}>
            <circle cx="27.46" cy="73.01" r=".32" />
            <circle cx="25.66" cy="73.01" r=".32" />
            <circle cx="28.36" cy="71.21" r=".32" />
            <circle cx="26.56" cy="71.21" r=".32" />
            <circle cx="24.76" cy="71.21" r=".32" />
            <circle cx="27.46" cy="69.41" r=".32" />
            <circle cx="25.66" cy="69.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jY)`}>
            <circle cx="27.46" cy="76.61" r=".32" />
            <circle cx="25.66" cy="76.61" r=".32" />
            <circle cx="28.36" cy="74.81" r=".32" />
            <circle cx="26.56" cy="74.81" r=".32" />
            <circle cx="24.76" cy="74.81" r=".32" />
            <circle cx="27.46" cy="73.01" r=".32" />
            <circle cx="25.66" cy="73.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-jZ)`}>
            <circle cx="27.46" cy="80.21" r=".32" />
            <circle cx="25.66" cy="80.21" r=".32" />
            <circle cx="28.36" cy="78.41" r=".32" />
            <circle cx="26.56" cy="78.41" r=".32" />
            <circle cx="24.76" cy="78.41" r=".32" />
            <circle cx="27.46" cy="76.61" r=".32" />
            <circle cx="25.66" cy="76.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-j0)`}>
            <circle cx="27.46" cy="83.81" r=".32" />
            <circle cx="25.66" cy="83.81" r=".32" />
            <circle cx="28.36" cy="82.01" r=".32" />
            <circle cx="26.56" cy="82.01" r=".32" />
            <circle cx="24.76" cy="82.01" r=".32" />
            <circle cx="27.46" cy="80.21" r=".32" />
            <circle cx="25.66" cy="80.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-j1)`}>
            <circle cx="27.46" cy="87.41" r=".32" />
            <circle cx="25.66" cy="87.41" r=".32" />
            <circle cx="28.36" cy="85.61" r=".32" />
            <circle cx="26.56" cy="85.61" r=".32" />
            <circle cx="24.76" cy="85.61" r=".32" />
            <circle cx="27.46" cy="83.81" r=".32" />
            <circle cx="25.66" cy="83.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-j2)`}>
            <circle cx="27.46" cy="91.01" r=".32" />
            <circle cx="25.66" cy="91.01" r=".32" />
            <circle cx="28.36" cy="89.21" r=".32" />
            <circle cx="26.56" cy="89.21" r=".32" />
            <circle cx="24.76" cy="89.21" r=".32" />
            <circle cx="27.46" cy="87.41" r=".32" />
            <circle cx="25.66" cy="87.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-j3)`}>
            <circle cx="27.46" cy="94.61" r=".32" />
            <circle cx="25.66" cy="94.61" r=".32" />
            <circle cx="28.36" cy="92.81" r=".32" />
            <circle cx="26.56" cy="92.81" r=".32" />
            <circle cx="24.76" cy="92.81" r=".32" />
            <circle cx="27.46" cy="91.01" r=".32" />
            <circle cx="25.66" cy="91.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-j4)`}>
            <circle cx="27.46" cy="98.21" r=".32" />
            <circle cx="25.66" cy="98.21" r=".32" />
            <circle cx="28.36" cy="96.41" r=".32" />
            <circle cx="26.56" cy="96.41" r=".32" />
            <circle cx="24.76" cy="96.41" r=".32" />
            <circle cx="27.46" cy="94.61" r=".32" />
            <circle cx="25.66" cy="94.61" r=".32" />
          </g>
          <g clipPath={`url(#${id}-j5)`}>
            <circle cx="27.46" cy="101.81" r=".32" />
            <circle cx="25.66" cy="101.81" r=".32" />
            <circle cx="28.36" cy="100.01" r=".32" />
            <circle cx="26.56" cy="100.01" r=".32" />
            <circle cx="24.76" cy="100.01" r=".32" />
            <circle cx="27.46" cy="98.21" r=".32" />
            <circle cx="25.66" cy="98.21" r=".32" />
          </g>
          <g clipPath={`url(#${id}-j6)`}>
            <circle cx="27.46" cy="105.41" r=".32" />
            <circle cx="25.66" cy="105.41" r=".32" />
            <circle cx="28.36" cy="103.61" r=".32" />
            <circle cx="26.56" cy="103.61" r=".32" />
            <circle cx="24.76" cy="103.61" r=".32" />
            <circle cx="27.46" cy="101.81" r=".32" />
            <circle cx="25.66" cy="101.81" r=".32" />
          </g>
          <g clipPath={`url(#${id}-j7)`}>
            <circle cx="27.46" cy="109.01" r=".32" />
            <circle cx="25.66" cy="109.01" r=".32" />
            <circle cx="28.36" cy="107.21" r=".32" />
            <circle cx="26.56" cy="107.21" r=".32" />
            <circle cx="24.76" cy="107.21" r=".32" />
            <circle cx="27.46" cy="105.41" r=".32" />
            <circle cx="25.66" cy="105.41" r=".32" />
          </g>
          <g clipPath={`url(#${id}-j8)`}>
            <circle cx="27.46" cy="112.61" r=".32" />
            <circle cx="25.66" cy="112.61" r=".32" />
            <circle cx="28.36" cy="110.81" r=".32" />
            <circle cx="26.56" cy="110.81" r=".32" />
            <circle cx="24.76" cy="110.81" r=".32" />
            <circle cx="27.46" cy="109.01" r=".32" />
            <circle cx="25.66" cy="109.01" r=".32" />
          </g>
          <g clipPath={`url(#${id}-j9)`}>
            <circle cx="27.46" cy="116.21" r=".32" />
            <circle cx="25.66" cy="116.21" r=".32" />
            <circle cx="28.36" cy="114.41" r=".32" />
            <circle cx="26.56" cy="114.41" r=".32" />
            <circle cx="24.76" cy="114.41" r=".32" />
            <circle cx="27.46" cy="112.61" r=".32" />
            <circle cx="25.66" cy="112.61" r=".32" />
          </g>
        </g>
        <g clipPath={`url(#${id}-kb)`} fill="#fde5cb">
          <g clipPath={`url(#${id}-kc)`}>
            <circle cx="61.25" cy="76.21" r=".35" />
            <circle cx="59.25" cy="76.21" r=".35" />
            <circle cx="62.25" cy="74.21" r=".35" />
            <circle cx="60.25" cy="74.21" r=".35" />
            <circle cx="58.25" cy="74.21" r=".35" />
            <circle cx="61.25" cy="72.21" r=".35" />
            <circle cx="59.25" cy="72.21" r=".35" />
          </g>
          <g clipPath={`url(#${id}-kd)`}>
            <circle cx="61.25" cy="80.21" r=".35" />
            <circle cx="59.25" cy="80.21" r=".35" />
            <circle cx="62.25" cy="78.21" r=".35" />
            <circle cx="60.25" cy="78.21" r=".35" />
            <circle cx="58.25" cy="78.21" r=".35" />
            <circle cx="61.25" cy="76.21" r=".35" />
            <circle cx="59.25" cy="76.21" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ke)`}>
            <circle cx="61.25" cy="84.21" r=".35" />
            <circle cx="59.25" cy="84.21" r=".35" />
            <circle cx="62.25" cy="82.21" r=".35" />
            <circle cx="60.25" cy="82.21" r=".35" />
            <circle cx="58.25" cy="82.21" r=".35" />
            <circle cx="61.25" cy="80.21" r=".35" />
            <circle cx="59.25" cy="80.21" r=".35" />
          </g>
          <g clipPath={`url(#${id}-kf)`}>
            <circle cx="61.25" cy="88.21" r=".35" />
            <circle cx="59.25" cy="88.21" r=".35" />
            <circle cx="62.25" cy="86.21" r=".35" />
            <circle cx="60.25" cy="86.21" r=".35" />
            <circle cx="58.25" cy="86.21" r=".35" />
            <circle cx="61.25" cy="84.21" r=".35" />
            <circle cx="59.25" cy="84.21" r=".35" />
          </g>
          <g clipPath={`url(#${id}-kg)`}>
            <circle cx="61.25" cy="92.21" r=".35" />
            <circle cx="59.25" cy="92.21" r=".35" />
            <circle cx="62.25" cy="90.21" r=".35" />
            <circle cx="60.25" cy="90.21" r=".35" />
            <circle cx="58.25" cy="90.21" r=".35" />
            <circle cx="61.25" cy="88.21" r=".35" />
            <circle cx="59.25" cy="88.21" r=".35" />
          </g>
          <g clipPath={`url(#${id}-kh)`}>
            <circle cx="61.25" cy="96.21" r=".35" />
            <circle cx="59.25" cy="96.21" r=".35" />
            <circle cx="62.25" cy="94.21" r=".35" />
            <circle cx="60.25" cy="94.21" r=".35" />
            <circle cx="58.25" cy="94.21" r=".35" />
            <circle cx="61.25" cy="92.21" r=".35" />
            <circle cx="59.25" cy="92.21" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ki)`}>
            <circle cx="61.25" cy="100.21" r=".35" />
            <circle cx="59.25" cy="100.21" r=".35" />
            <circle cx="62.25" cy="98.21" r=".35" />
            <circle cx="60.25" cy="98.21" r=".35" />
            <circle cx="58.25" cy="98.21" r=".35" />
            <circle cx="61.25" cy="96.21" r=".35" />
            <circle cx="59.25" cy="96.21" r=".35" />
          </g>
          <g clipPath={`url(#${id}-kj)`}>
            <circle cx="57.25" cy="76.21" r=".35" />
            <circle cx="55.25" cy="76.21" r=".35" />
            <circle cx="58.25" cy="74.21" r=".35" />
            <circle cx="56.25" cy="74.21" r=".35" />
            <circle cx="54.25" cy="74.21" r=".35" />
            <circle cx="57.25" cy="72.21" r=".35" />
            <circle cx="55.25" cy="72.21" r=".35" />
          </g>
          <g clipPath={`url(#${id}-kk)`}>
            <circle cx="57.25" cy="80.21" r=".35" />
            <circle cx="55.25" cy="80.21" r=".35" />
            <circle cx="58.25" cy="78.21" r=".35" />
            <circle cx="56.25" cy="78.21" r=".35" />
            <circle cx="54.25" cy="78.21" r=".35" />
            <circle cx="57.25" cy="76.21" r=".35" />
            <circle cx="55.25" cy="76.21" r=".35" />
          </g>
          <g clipPath={`url(#${id}-kl)`}>
            <circle cx="57.25" cy="84.21" r=".35" />
            <circle cx="55.25" cy="84.21" r=".35" />
            <circle cx="58.25" cy="82.21" r=".35" />
            <circle cx="56.25" cy="82.21" r=".35" />
            <circle cx="54.25" cy="82.21" r=".35" />
            <circle cx="57.25" cy="80.21" r=".35" />
            <circle cx="55.25" cy="80.21" r=".35" />
          </g>
          <g clipPath={`url(#${id}-km)`}>
            <circle cx="57.25" cy="88.21" r=".35" />
            <circle cx="55.25" cy="88.21" r=".35" />
            <circle cx="58.25" cy="86.21" r=".35" />
            <circle cx="56.25" cy="86.21" r=".35" />
            <circle cx="54.25" cy="86.21" r=".35" />
            <circle cx="57.25" cy="84.21" r=".35" />
            <circle cx="55.25" cy="84.21" r=".35" />
          </g>
          <g clipPath={`url(#${id}-kn)`}>
            <circle cx="57.25" cy="92.21" r=".35" />
            <circle cx="55.25" cy="92.21" r=".35" />
            <circle cx="58.25" cy="90.21" r=".35" />
            <circle cx="56.25" cy="90.21" r=".35" />
            <circle cx="54.25" cy="90.21" r=".35" />
            <circle cx="57.25" cy="88.21" r=".35" />
            <circle cx="55.25" cy="88.21" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ko)`}>
            <circle cx="57.25" cy="96.21" r=".35" />
            <circle cx="55.25" cy="96.21" r=".35" />
            <circle cx="58.25" cy="94.21" r=".35" />
            <circle cx="56.25" cy="94.21" r=".35" />
            <circle cx="54.25" cy="94.21" r=".35" />
            <circle cx="57.25" cy="92.21" r=".35" />
            <circle cx="55.25" cy="92.21" r=".35" />
          </g>
          <g clipPath={`url(#${id}-kp)`}>
            <circle cx="57.25" cy="100.21" r=".35" />
            <circle cx="55.25" cy="100.21" r=".35" />
            <circle cx="58.25" cy="98.21" r=".35" />
            <circle cx="56.25" cy="98.21" r=".35" />
            <circle cx="54.25" cy="98.21" r=".35" />
            <circle cx="57.25" cy="96.21" r=".35" />
            <circle cx="55.25" cy="96.21" r=".35" />
          </g>
          <g clipPath={`url(#${id}-kq)`}>
            <circle cx="53.25" cy="76.21" r=".35" />
            <circle cx="51.25" cy="76.21" r=".35" />
            <circle cx="54.25" cy="74.21" r=".35" />
            <circle cx="52.25" cy="74.21" r=".35" />
            <circle cx="50.25" cy="74.21" r=".35" />
            <circle cx="53.25" cy="72.21" r=".35" />
            <circle cx="51.25" cy="72.21" r=".35" />
          </g>
          <g clipPath={`url(#${id}-kr)`}>
            <circle cx="53.25" cy="80.21" r=".35" />
            <circle cx="51.25" cy="80.21" r=".35" />
            <circle cx="54.25" cy="78.21" r=".35" />
            <circle cx="52.25" cy="78.21" r=".35" />
            <circle cx="50.25" cy="78.21" r=".35" />
            <circle cx="53.25" cy="76.21" r=".35" />
            <circle cx="51.25" cy="76.21" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ks)`}>
            <circle cx="53.25" cy="84.21" r=".35" />
            <circle cx="51.25" cy="84.21" r=".35" />
            <circle cx="54.25" cy="82.21" r=".35" />
            <circle cx="52.25" cy="82.21" r=".35" />
            <circle cx="50.25" cy="82.21" r=".35" />
            <circle cx="53.25" cy="80.21" r=".35" />
            <circle cx="51.25" cy="80.21" r=".35" />
          </g>
          <g clipPath={`url(#${id}-kt)`}>
            <circle cx="53.25" cy="88.21" r=".35" />
            <circle cx="51.25" cy="88.21" r=".35" />
            <circle cx="54.25" cy="86.21" r=".35" />
            <circle cx="52.25" cy="86.21" r=".35" />
            <circle cx="50.25" cy="86.21" r=".35" />
            <circle cx="53.25" cy="84.21" r=".35" />
            <circle cx="51.25" cy="84.21" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ku)`}>
            <circle cx="53.25" cy="92.21" r=".35" />
            <circle cx="51.25" cy="92.21" r=".35" />
            <circle cx="54.25" cy="90.21" r=".35" />
            <circle cx="52.25" cy="90.21" r=".35" />
            <circle cx="50.25" cy="90.21" r=".35" />
            <circle cx="53.25" cy="88.21" r=".35" />
            <circle cx="51.25" cy="88.21" r=".35" />
          </g>
          <g clipPath={`url(#${id}-kv)`}>
            <circle cx="53.25" cy="96.21" r=".35" />
            <circle cx="51.25" cy="96.21" r=".35" />
            <circle cx="54.25" cy="94.21" r=".35" />
            <circle cx="52.25" cy="94.21" r=".35" />
            <circle cx="50.25" cy="94.21" r=".35" />
            <circle cx="53.25" cy="92.21" r=".35" />
            <circle cx="51.25" cy="92.21" r=".35" />
          </g>
          <g clipPath={`url(#${id}-kw)`}>
            <circle cx="53.25" cy="100.21" r=".35" />
            <circle cx="51.25" cy="100.21" r=".35" />
            <circle cx="54.25" cy="98.21" r=".35" />
            <circle cx="52.25" cy="98.21" r=".35" />
            <circle cx="50.25" cy="98.21" r=".35" />
            <circle cx="53.25" cy="96.21" r=".35" />
            <circle cx="51.25" cy="96.21" r=".35" />
          </g>
          <g clipPath={`url(#${id}-kx)`}>
            <circle cx="49.25" cy="76.21" r=".35" />
            <circle cx="47.25" cy="76.21" r=".35" />
            <circle cx="50.25" cy="74.21" r=".35" />
            <circle cx="48.25" cy="74.21" r=".35" />
            <circle cx="46.25" cy="74.21" r=".35" />
            <circle cx="49.25" cy="72.21" r=".35" />
            <circle cx="47.25" cy="72.21" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ky)`}>
            <circle cx="49.25" cy="80.21" r=".35" />
            <circle cx="47.25" cy="80.21" r=".35" />
            <circle cx="50.25" cy="78.21" r=".35" />
            <circle cx="48.25" cy="78.21" r=".35" />
            <circle cx="46.25" cy="78.21" r=".35" />
            <circle cx="49.25" cy="76.21" r=".35" />
            <circle cx="47.25" cy="76.21" r=".35" />
          </g>
          <g clipPath={`url(#${id}-kz)`}>
            <circle cx="49.25" cy="84.21" r=".35" />
            <circle cx="47.25" cy="84.21" r=".35" />
            <circle cx="50.25" cy="82.21" r=".35" />
            <circle cx="48.25" cy="82.21" r=".35" />
            <circle cx="46.25" cy="82.21" r=".35" />
            <circle cx="49.25" cy="80.21" r=".35" />
            <circle cx="47.25" cy="80.21" r=".35" />
          </g>
          <g clipPath={`url(#${id}-kA)`}>
            <circle cx="49.25" cy="88.21" r=".35" />
            <circle cx="47.25" cy="88.21" r=".35" />
            <circle cx="50.25" cy="86.21" r=".35" />
            <circle cx="48.25" cy="86.21" r=".35" />
            <circle cx="46.25" cy="86.21" r=".35" />
            <circle cx="49.25" cy="84.21" r=".35" />
            <circle cx="47.25" cy="84.21" r=".35" />
          </g>
          <g clipPath={`url(#${id}-kB)`}>
            <circle cx="49.25" cy="92.21" r=".35" />
            <circle cx="47.25" cy="92.21" r=".35" />
            <circle cx="50.25" cy="90.21" r=".35" />
            <circle cx="48.25" cy="90.21" r=".35" />
            <circle cx="46.25" cy="90.21" r=".35" />
            <circle cx="49.25" cy="88.21" r=".35" />
            <circle cx="47.25" cy="88.21" r=".35" />
          </g>
          <g clipPath={`url(#${id}-kC)`}>
            <circle cx="49.25" cy="96.21" r=".35" />
            <circle cx="47.25" cy="96.21" r=".35" />
            <circle cx="50.25" cy="94.21" r=".35" />
            <circle cx="48.25" cy="94.21" r=".35" />
            <circle cx="46.25" cy="94.21" r=".35" />
            <circle cx="49.25" cy="92.21" r=".35" />
            <circle cx="47.25" cy="92.21" r=".35" />
          </g>
          <g clipPath={`url(#${id}-kD)`}>
            <circle cx="49.25" cy="100.21" r=".35" />
            <circle cx="47.25" cy="100.21" r=".35" />
            <circle cx="50.25" cy="98.21" r=".35" />
            <circle cx="48.25" cy="98.21" r=".35" />
            <circle cx="46.25" cy="98.21" r=".35" />
            <circle cx="49.25" cy="96.21" r=".35" />
            <circle cx="47.25" cy="96.21" r=".35" />
          </g>
          <g clipPath={`url(#${id}-kE)`}>
            <circle cx="45.25" cy="76.21" r=".35" />
            <circle cx="43.25" cy="76.21" r=".35" />
            <circle cx="46.25" cy="74.21" r=".35" />
            <circle cx="44.25" cy="74.21" r=".35" />
            <circle cx="42.25" cy="74.21" r=".35" />
            <circle cx="45.25" cy="72.21" r=".35" />
            <circle cx="43.25" cy="72.21" r=".35" />
          </g>
          <g clipPath={`url(#${id}-kF)`}>
            <circle cx="45.25" cy="80.21" r=".35" />
            <circle cx="43.25" cy="80.21" r=".35" />
            <circle cx="46.25" cy="78.21" r=".35" />
            <circle cx="44.25" cy="78.21" r=".35" />
            <circle cx="42.25" cy="78.21" r=".35" />
            <circle cx="45.25" cy="76.21" r=".35" />
            <circle cx="43.25" cy="76.21" r=".35" />
          </g>
          <g clipPath={`url(#${id}-kG)`}>
            <circle cx="45.25" cy="84.21" r=".35" />
            <circle cx="43.25" cy="84.21" r=".35" />
            <circle cx="46.25" cy="82.21" r=".35" />
            <circle cx="44.25" cy="82.21" r=".35" />
            <circle cx="42.25" cy="82.21" r=".35" />
            <circle cx="45.25" cy="80.21" r=".35" />
            <circle cx="43.25" cy="80.21" r=".35" />
          </g>
          <g clipPath={`url(#${id}-kH)`}>
            <circle cx="45.25" cy="88.21" r=".35" />
            <circle cx="43.25" cy="88.21" r=".35" />
            <circle cx="46.25" cy="86.21" r=".35" />
            <circle cx="44.25" cy="86.21" r=".35" />
            <circle cx="42.25" cy="86.21" r=".35" />
            <circle cx="45.25" cy="84.21" r=".35" />
            <circle cx="43.25" cy="84.21" r=".35" />
          </g>
          <g clipPath={`url(#${id}-kI)`}>
            <circle cx="45.25" cy="92.21" r=".35" />
            <circle cx="43.25" cy="92.21" r=".35" />
            <circle cx="46.25" cy="90.21" r=".35" />
            <circle cx="44.25" cy="90.21" r=".35" />
            <circle cx="42.25" cy="90.21" r=".35" />
            <circle cx="45.25" cy="88.21" r=".35" />
            <circle cx="43.25" cy="88.21" r=".35" />
          </g>
          <g clipPath={`url(#${id}-kJ)`}>
            <circle cx="45.25" cy="96.21" r=".35" />
            <circle cx="43.25" cy="96.21" r=".35" />
            <circle cx="46.25" cy="94.21" r=".35" />
            <circle cx="44.25" cy="94.21" r=".35" />
            <circle cx="42.25" cy="94.21" r=".35" />
            <circle cx="45.25" cy="92.21" r=".35" />
            <circle cx="43.25" cy="92.21" r=".35" />
          </g>
          <g clipPath={`url(#${id}-kK)`}>
            <circle cx="45.25" cy="100.21" r=".35" />
            <circle cx="43.25" cy="100.21" r=".35" />
            <circle cx="46.25" cy="98.21" r=".35" />
            <circle cx="44.25" cy="98.21" r=".35" />
            <circle cx="42.25" cy="98.21" r=".35" />
            <circle cx="45.25" cy="96.21" r=".35" />
            <circle cx="43.25" cy="96.21" r=".35" />
          </g>
          <g clipPath={`url(#${id}-kL)`}>
            <circle cx="41.25" cy="76.21" r=".35" />
            <circle cx="39.25" cy="76.21" r=".35" />
            <circle cx="42.25" cy="74.21" r=".35" />
            <circle cx="40.25" cy="74.21" r=".35" />
            <circle cx="38.25" cy="74.21" r=".35" />
            <circle cx="41.25" cy="72.21" r=".35" />
            <circle cx="39.25" cy="72.21" r=".35" />
          </g>
          <g clipPath={`url(#${id}-kM)`}>
            <circle cx="41.25" cy="80.21" r=".35" />
            <circle cx="39.25" cy="80.21" r=".35" />
            <circle cx="42.25" cy="78.21" r=".35" />
            <circle cx="40.25" cy="78.21" r=".35" />
            <circle cx="38.25" cy="78.21" r=".35" />
            <circle cx="41.25" cy="76.21" r=".35" />
            <circle cx="39.25" cy="76.21" r=".35" />
          </g>
          <g clipPath={`url(#${id}-kN)`}>
            <circle cx="41.25" cy="84.21" r=".35" />
            <circle cx="39.25" cy="84.21" r=".35" />
            <circle cx="42.25" cy="82.21" r=".35" />
            <circle cx="40.25" cy="82.21" r=".35" />
            <circle cx="38.25" cy="82.21" r=".35" />
            <circle cx="41.25" cy="80.21" r=".35" />
            <circle cx="39.25" cy="80.21" r=".35" />
          </g>
          <g clipPath={`url(#${id}-kO)`}>
            <circle cx="41.25" cy="88.21" r=".35" />
            <circle cx="39.25" cy="88.21" r=".35" />
            <circle cx="42.25" cy="86.21" r=".35" />
            <circle cx="40.25" cy="86.21" r=".35" />
            <circle cx="38.25" cy="86.21" r=".35" />
            <circle cx="41.25" cy="84.21" r=".35" />
            <circle cx="39.25" cy="84.21" r=".35" />
          </g>
          <g clipPath={`url(#${id}-kP)`}>
            <circle cx="41.25" cy="92.21" r=".35" />
            <circle cx="39.25" cy="92.21" r=".35" />
            <circle cx="42.25" cy="90.21" r=".35" />
            <circle cx="40.25" cy="90.21" r=".35" />
            <circle cx="38.25" cy="90.21" r=".35" />
            <circle cx="41.25" cy="88.21" r=".35" />
            <circle cx="39.25" cy="88.21" r=".35" />
          </g>
          <g clipPath={`url(#${id}-kQ)`}>
            <circle cx="41.25" cy="96.21" r=".35" />
            <circle cx="39.25" cy="96.21" r=".35" />
            <circle cx="42.25" cy="94.21" r=".35" />
            <circle cx="40.25" cy="94.21" r=".35" />
            <circle cx="38.25" cy="94.21" r=".35" />
            <circle cx="41.25" cy="92.21" r=".35" />
            <circle cx="39.25" cy="92.21" r=".35" />
          </g>
          <g clipPath={`url(#${id}-kR)`}>
            <circle cx="41.25" cy="100.21" r=".35" />
            <circle cx="39.25" cy="100.21" r=".35" />
            <circle cx="42.25" cy="98.21" r=".35" />
            <circle cx="40.25" cy="98.21" r=".35" />
            <circle cx="38.25" cy="98.21" r=".35" />
            <circle cx="41.25" cy="96.21" r=".35" />
            <circle cx="39.25" cy="96.21" r=".35" />
          </g>
          <g clipPath={`url(#${id}-kS)`}>
            <circle cx="37.25" cy="76.21" r=".35" />
            <circle cx="35.25" cy="76.21" r=".35" />
            <circle cx="38.25" cy="74.21" r=".35" />
            <circle cx="36.25" cy="74.21" r=".35" />
            <circle cx="34.25" cy="74.21" r=".35" />
            <circle cx="37.25" cy="72.21" r=".35" />
            <circle cx="35.25" cy="72.21" r=".35" />
          </g>
          <g clipPath={`url(#${id}-kT)`}>
            <circle cx="37.25" cy="80.21" r=".35" />
            <circle cx="35.25" cy="80.21" r=".35" />
            <circle cx="38.25" cy="78.21" r=".35" />
            <circle cx="36.25" cy="78.21" r=".35" />
            <circle cx="34.25" cy="78.21" r=".35" />
            <circle cx="37.25" cy="76.21" r=".35" />
            <circle cx="35.25" cy="76.21" r=".35" />
          </g>
          <g clipPath={`url(#${id}-kU)`}>
            <circle cx="37.25" cy="84.21" r=".35" />
            <circle cx="35.25" cy="84.21" r=".35" />
            <circle cx="38.25" cy="82.21" r=".35" />
            <circle cx="36.25" cy="82.21" r=".35" />
            <circle cx="34.25" cy="82.21" r=".35" />
            <circle cx="37.25" cy="80.21" r=".35" />
            <circle cx="35.25" cy="80.21" r=".35" />
          </g>
          <g clipPath={`url(#${id}-kV)`}>
            <circle cx="37.25" cy="88.21" r=".35" />
            <circle cx="35.25" cy="88.21" r=".35" />
            <circle cx="38.25" cy="86.21" r=".35" />
            <circle cx="36.25" cy="86.21" r=".35" />
            <circle cx="34.25" cy="86.21" r=".35" />
            <circle cx="37.25" cy="84.21" r=".35" />
            <circle cx="35.25" cy="84.21" r=".35" />
          </g>
          <g clipPath={`url(#${id}-kW)`}>
            <circle cx="37.25" cy="92.21" r=".35" />
            <circle cx="35.25" cy="92.21" r=".35" />
            <circle cx="38.25" cy="90.21" r=".35" />
            <circle cx="36.25" cy="90.21" r=".35" />
            <circle cx="34.25" cy="90.21" r=".35" />
            <circle cx="37.25" cy="88.21" r=".35" />
            <circle cx="35.25" cy="88.21" r=".35" />
          </g>
          <g clipPath={`url(#${id}-kX)`}>
            <circle cx="37.25" cy="96.21" r=".35" />
            <circle cx="35.25" cy="96.21" r=".35" />
            <circle cx="38.25" cy="94.21" r=".35" />
            <circle cx="36.25" cy="94.21" r=".35" />
            <circle cx="34.25" cy="94.21" r=".35" />
            <circle cx="37.25" cy="92.21" r=".35" />
            <circle cx="35.25" cy="92.21" r=".35" />
          </g>
          <g clipPath={`url(#${id}-kY)`}>
            <circle cx="37.25" cy="100.21" r=".35" />
            <circle cx="35.25" cy="100.21" r=".35" />
            <circle cx="38.25" cy="98.21" r=".35" />
            <circle cx="36.25" cy="98.21" r=".35" />
            <circle cx="34.25" cy="98.21" r=".35" />
            <circle cx="37.25" cy="96.21" r=".35" />
            <circle cx="35.25" cy="96.21" r=".35" />
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
        xmlnsXlink="http://www.w3.org/1999/xlink"
        aria-labelledby={`${id}-title ${id}-description`}
        data-testid="draft"
      >
        <title id={`${id}-title`}>Document Illustration</title>
        <desc id={`${id}-description`}>
          Illustration of a document in grayscale
        </desc>
        <circle cx="70" cy="70" fill="#5b6279" r="70" />
        <path
          d="m39.89 32.2v74.51-38.71a60.13 60.13 0 0 0 6.46 12.3v-5.3h19.83v23.6a60.29 60.29 0 0 0 30.2 8.07v-74.47zm6.46 7h25v2.1h-25zm0 28.3v-2.1h34.46v2.1zm43.17 31.81h-19.31v-2.1h19.31zm0-7.85h-19.31v-2.1h19.31zm0-7.16h-19.31v-2.1h19.31zm0-7.16h-19.31v-2.14h19.31zm0-16.21h-43.17v-2.1h43.17zm0-6.55h-43.17v-2.1h43.17zm0-6.55h-43.17v-2.1h43.17z"
          fill="#f8f7f4"
        />
        <g fill="#5b6279">
          <path d="m46.35 39.18h25.03v2.1h-25.03z" />
          <path d="m46.35 45.73h43.16v2.1h-43.16z" />
          <path d="m46.35 52.28h43.16v2.1h-43.16z" />
          <path d="m46.35 58.83h43.16v2.1h-43.16z" />
          <path d="m46.35 65.38h34.45v2.1h-34.45z" />
          <path d="m70.21 75.04h19.3v2.1h-19.3z" />
          <path d="m70.21 82.2h19.3v2.1h-19.3z" />
          <path d="m70.21 89.36h19.3v2.1h-19.3z" />
          <path d="m70.21 97.21h19.3v2.1h-19.3z" />
        </g>
        <path
          d="m51.53 83.69a3.67 3.67 0 0 1 3.65 3.69 3.62 3.62 0 0 1 -.83 2.31q.93.9 1.92 1.77v-2h6.62v6.54h-.81c1.33.92 2.69 1.8 4.1 2.61v-23.61h-19.83v5.3c1 1.4 2 2.75 3.06 4.06a3.66 3.66 0 0 1 2.12-.67z"
          fill="#cdcfd6"
        />
        <path
          d="m66.18 99.31h-19.83v-19a60.21 60.21 0 0 1 -6.46-12.31v38.68h56.49a60.29 60.29 0 0 1 -30.2-8.07z"
          fill="#eeeff1"
        />
        <path d="m46.35 99.31h19.83z" fill="#2870b5" />
        <path
          d="m66.18 99.31v-.67c-1.41-.81-2.77-1.69-4.1-2.61h-5.81v-4.54q-1-.87-1.92-1.77a3.68 3.68 0 0 1 -5.69-4.67 3.77 3.77 0 0 1 .75-.69c-1.07-1.31-2.1-2.66-3.06-4.06v19z"
          fill="#adb0bc"
        />
        <path
          d="m51.53 83.69a3.66 3.66 0 0 0 -2.12.67 62.6 62.6 0 0 0 4.94 5.36 3.67 3.67 0 0 0 -2.82-6z"
          fill="#9da1af"
        />
        <path
          d="m49.41 84.36a3.69 3.69 0 0 0 3.59 6.45 4.09 4.09 0 0 0 .64-.45 3.77 3.77 0 0 0 .75-.69 61 61 0 0 1 -4.98-5.31z"
          fill="#6b7186"
        />
        <path
          d="m62.89 89.41h-6.62v2.08a59 59 0 0 0 5.81 4.51h.81z"
          fill="#9da1af"
        />
        <path d="m56.27 96h5.81a59.26 59.26 0 0 1 -5.81-4.54z" fill="#6b7186" />
        <path d="m59.58 77.65 3.83 6.65h-7.67z" fill="#6b7186" />
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
        <title id={`${id}-title`}>Document Illustration</title>
        <desc id={`${id}-description`}>Illustration of a document</desc>
        <clipPath id={`${id}-a`}>
          <path d="m39.89 32.16v74.52-38.68a60.66 60.66 0 0 0 6.46 12.27v-5.22h19.83v23.6a60.29 60.29 0 0 0 30.2 8.07v-74.56zm6.46 7h25v2.1h-25zm0 28.3v-2.1h34.46v2.1zm43.17 31.86h-19.31v-2.1h19.31zm0-7.86h-19.31v-2.1h19.31zm0-7.15h-19.31v-2.1h19.31zm0-7.16h-19.31v-2.1h19.31zm0-16.22h-43.17v-2.1h43.17zm0-6.55h-43.17v-2.1h43.17zm0-6.55h-43.17v-2.1h43.17z" />
        </clipPath>
        <clipPath id={`${id}-b`}>
          <path d="m92.81 28.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-c`}>
          <path d="m92.81 32.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-d`}>
          <path d="m92.81 36.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-e`}>
          <path d="m92.81 40.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-f`}>
          <path d="m92.81 44.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-g`}>
          <path d="m92.81 48.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-h`}>
          <path d="m92.81 52.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-i`}>
          <path d="m92.81 56.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-j`}>
          <path d="m92.81 60.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-k`}>
          <path d="m92.81 64.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-l`}>
          <path d="m92.81 68.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-m`}>
          <path d="m92.81 72.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-n`}>
          <path d="m92.81 76.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-o`}>
          <path d="m92.81 80.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-p`}>
          <path d="m92.81 84.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-q`}>
          <path d="m92.81 88.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-r`}>
          <path d="m92.81 92.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-s`}>
          <path d="m92.81 96.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-t`}>
          <path d="m92.81 100.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-u`}>
          <path d="m92.81 104.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-v`}>
          <path d="m88.81 28.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-w`}>
          <path d="m88.81 32.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-x`}>
          <path d="m88.81 36.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-y`}>
          <path d="m88.81 40.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-z`}>
          <path d="m88.81 44.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-A`}>
          <path d="m88.81 48.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-B`}>
          <path d="m88.81 52.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-C`}>
          <path d="m88.81 56.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-D`}>
          <path d="m88.81 60.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-E`}>
          <path d="m88.81 64.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-F`}>
          <path d="m88.81 68.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-G`}>
          <path d="m88.81 72.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-H`}>
          <path d="m88.81 76.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-I`}>
          <path d="m88.81 80.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-J`}>
          <path d="m88.81 84.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-K`}>
          <path d="m88.81 88.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-L`}>
          <path d="m88.81 92.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-M`}>
          <path d="m88.81 96.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-N`}>
          <path d="m88.81 100.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-O`}>
          <path d="m88.81 104.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-P`}>
          <path d="m84.81 28.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-Q`}>
          <path d="m84.81 32.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-R`}>
          <path d="m84.81 36.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-S`}>
          <path d="m84.81 40.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-T`}>
          <path d="m84.81 44.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-U`}>
          <path d="m84.81 48.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-V`}>
          <path d="m84.81 52.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-W`}>
          <path d="m84.81 56.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-X`}>
          <path d="m84.81 60.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-Y`}>
          <path d="m84.81 64.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-Z`}>
          <path d="m84.81 68.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aa`}>
          <path d="m84.81 72.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ab`}>
          <path d="m84.81 76.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ac`}>
          <path d="m84.81 80.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ad`}>
          <path d="m84.81 84.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ae`}>
          <path d="m84.81 88.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-af`}>
          <path d="m84.81 92.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ag`}>
          <path d="m84.81 96.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ah`}>
          <path d="m84.81 100.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ai`}>
          <path d="m84.81 104.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aj`}>
          <path d="m80.81 28.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ak`}>
          <path d="m80.81 32.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-al`}>
          <path d="m80.81 36.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-am`}>
          <path d="m80.81 40.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-an`}>
          <path d="m80.81 44.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ao`}>
          <path d="m80.81 48.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ap`}>
          <path d="m80.81 52.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aq`}>
          <path d="m80.81 56.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ar`}>
          <path d="m80.81 60.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-as`}>
          <path d="m80.81 64.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-at`}>
          <path d="m80.81 68.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-au`}>
          <path d="m80.81 72.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-av`}>
          <path d="m80.81 76.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aw`}>
          <path d="m80.81 80.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ax`}>
          <path d="m80.81 84.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ay`}>
          <path d="m80.81 88.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-az`}>
          <path d="m80.81 92.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aA`}>
          <path d="m80.81 96.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aB`}>
          <path d="m80.81 100.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aC`}>
          <path d="m80.81 104.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aD`}>
          <path d="m76.81 28.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aE`}>
          <path d="m76.81 32.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aF`}>
          <path d="m76.81 36.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aG`}>
          <path d="m76.81 40.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aH`}>
          <path d="m76.81 44.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aI`}>
          <path d="m76.81 48.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aJ`}>
          <path d="m76.81 52.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aK`}>
          <path d="m76.81 56.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aL`}>
          <path d="m76.81 60.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aM`}>
          <path d="m76.81 64.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aN`}>
          <path d="m76.81 68.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aO`}>
          <path d="m76.81 72.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aP`}>
          <path d="m76.81 76.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aQ`}>
          <path d="m76.81 80.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aR`}>
          <path d="m76.81 84.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aS`}>
          <path d="m76.81 88.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aT`}>
          <path d="m76.81 92.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aU`}>
          <path d="m76.81 96.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aV`}>
          <path d="m76.81 100.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aW`}>
          <path d="m76.81 104.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aX`}>
          <path d="m72.81 28.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aY`}>
          <path d="m72.81 32.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-aZ`}>
          <path d="m72.81 36.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-a0`}>
          <path d="m72.81 40.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-a1`}>
          <path d="m72.81 44.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-a2`}>
          <path d="m72.81 48.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-a3`}>
          <path d="m72.81 52.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-a4`}>
          <path d="m72.81 56.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-a5`}>
          <path d="m72.81 60.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-a6`}>
          <path d="m72.81 64.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-a7`}>
          <path d="m72.81 68.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-a8`}>
          <path d="m72.81 72.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-a9`}>
          <path d="m72.81 76.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ba`}>
          <path d="m72.81 80.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bb`}>
          <path d="m72.81 84.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bc`}>
          <path d="m72.81 88.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bd`}>
          <path d="m72.81 92.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-be`}>
          <path d="m72.81 96.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bf`}>
          <path d="m72.81 100.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bg`}>
          <path d="m72.81 104.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bh`}>
          <path d="m68.81 28.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bi`}>
          <path d="m68.81 32.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bj`}>
          <path d="m68.81 36.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bk`}>
          <path d="m68.81 40.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bl`}>
          <path d="m68.81 44.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bm`}>
          <path d="m68.81 48.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bn`}>
          <path d="m68.81 52.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bo`}>
          <path d="m68.81 56.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bp`}>
          <path d="m68.81 60.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bq`}>
          <path d="m68.81 64.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-br`}>
          <path d="m68.81 68.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bs`}>
          <path d="m68.81 72.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bt`}>
          <path d="m68.81 76.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bu`}>
          <path d="m68.81 80.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bv`}>
          <path d="m68.81 84.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bw`}>
          <path d="m68.81 88.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bx`}>
          <path d="m68.81 92.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-by`}>
          <path d="m68.81 96.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bz`}>
          <path d="m68.81 100.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bA`}>
          <path d="m68.81 104.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bB`}>
          <path d="m64.81 28.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bC`}>
          <path d="m64.81 32.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bD`}>
          <path d="m64.81 36.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bE`}>
          <path d="m64.81 40.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bF`}>
          <path d="m64.81 44.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bG`}>
          <path d="m64.81 48.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bH`}>
          <path d="m64.81 52.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bI`}>
          <path d="m64.81 56.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bJ`}>
          <path d="m64.81 60.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bK`}>
          <path d="m64.81 64.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bL`}>
          <path d="m64.81 68.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bM`}>
          <path d="m64.81 72.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bN`}>
          <path d="m64.81 76.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bO`}>
          <path d="m64.81 80.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bP`}>
          <path d="m64.81 84.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bQ`}>
          <path d="m64.81 88.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bR`}>
          <path d="m64.81 92.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bS`}>
          <path d="m64.81 96.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bT`}>
          <path d="m64.81 100.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bU`}>
          <path d="m64.81 104.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bV`}>
          <path d="m60.81 28.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bW`}>
          <path d="m60.81 32.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bX`}>
          <path d="m60.81 36.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bY`}>
          <path d="m60.81 40.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-bZ`}>
          <path d="m60.81 44.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-b0`}>
          <path d="m60.81 48.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-b1`}>
          <path d="m60.81 52.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-b2`}>
          <path d="m60.81 56.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-b3`}>
          <path d="m60.81 60.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-b4`}>
          <path d="m60.81 64.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-b5`}>
          <path d="m60.81 68.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-b6`}>
          <path d="m60.81 72.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-b7`}>
          <path d="m60.81 76.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-b8`}>
          <path d="m60.81 80.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-b9`}>
          <path d="m60.81 84.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ca`}>
          <path d="m60.81 88.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cb`}>
          <path d="m60.81 92.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cc`}>
          <path d="m60.81 96.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cd`}>
          <path d="m60.81 100.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ce`}>
          <path d="m60.81 104.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cf`}>
          <path d="m56.81 28.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cg`}>
          <path d="m56.81 32.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ch`}>
          <path d="m56.81 36.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ci`}>
          <path d="m56.81 40.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cj`}>
          <path d="m56.81 44.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ck`}>
          <path d="m56.81 48.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cl`}>
          <path d="m56.81 52.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cm`}>
          <path d="m56.81 56.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cn`}>
          <path d="m56.81 60.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-co`}>
          <path d="m56.81 64.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cp`}>
          <path d="m56.81 68.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cq`}>
          <path d="m56.81 72.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cr`}>
          <path d="m56.81 76.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cs`}>
          <path d="m56.81 80.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ct`}>
          <path d="m56.81 84.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cu`}>
          <path d="m56.81 88.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cv`}>
          <path d="m56.81 92.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cw`}>
          <path d="m56.81 96.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cx`}>
          <path d="m56.81 100.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cy`}>
          <path d="m56.81 104.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cz`}>
          <path d="m52.81 28.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cA`}>
          <path d="m52.81 32.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cB`}>
          <path d="m52.81 36.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cC`}>
          <path d="m52.81 40.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cD`}>
          <path d="m52.81 44.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cE`}>
          <path d="m52.81 48.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cF`}>
          <path d="m52.81 52.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cG`}>
          <path d="m52.81 56.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cH`}>
          <path d="m52.81 60.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cI`}>
          <path d="m52.81 64.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cJ`}>
          <path d="m52.81 68.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cK`}>
          <path d="m52.81 72.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cL`}>
          <path d="m52.81 76.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cM`}>
          <path d="m52.81 80.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cN`}>
          <path d="m52.81 84.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cO`}>
          <path d="m52.81 88.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cP`}>
          <path d="m52.81 92.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cQ`}>
          <path d="m52.81 96.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cR`}>
          <path d="m52.81 100.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cS`}>
          <path d="m52.81 104.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cT`}>
          <path d="m48.81 28.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cU`}>
          <path d="m48.81 32.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cV`}>
          <path d="m48.81 36.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cW`}>
          <path d="m48.81 40.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cX`}>
          <path d="m48.81 44.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cY`}>
          <path d="m48.81 48.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-cZ`}>
          <path d="m48.81 52.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-c0`}>
          <path d="m48.81 56.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-c1`}>
          <path d="m48.81 60.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-c2`}>
          <path d="m48.81 64.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-c3`}>
          <path d="m48.81 68.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-c4`}>
          <path d="m48.81 72.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-c5`}>
          <path d="m48.81 76.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-c6`}>
          <path d="m48.81 80.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-c7`}>
          <path d="m48.81 84.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-c8`}>
          <path d="m48.81 88.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-c9`}>
          <path d="m48.81 92.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-da`}>
          <path d="m48.81 96.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-db`}>
          <path d="m48.81 100.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dc`}>
          <path d="m48.81 104.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dd`}>
          <path d="m44.81 28.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-de`}>
          <path d="m44.81 32.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-df`}>
          <path d="m44.81 36.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dg`}>
          <path d="m44.81 40.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dh`}>
          <path d="m44.81 44.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-di`}>
          <path d="m44.81 48.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dj`}>
          <path d="m44.81 52.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dk`}>
          <path d="m44.81 56.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dl`}>
          <path d="m44.81 60.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dm`}>
          <path d="m44.81 64.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dn`}>
          <path d="m44.81 68.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-do`}>
          <path d="m44.81 72.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dp`}>
          <path d="m44.81 76.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dq`}>
          <path d="m44.81 80.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dr`}>
          <path d="m44.81 84.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ds`}>
          <path d="m44.81 88.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dt`}>
          <path d="m44.81 92.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-du`}>
          <path d="m44.81 96.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dv`}>
          <path d="m44.81 100.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dw`}>
          <path d="m44.81 104.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dx`}>
          <path d="m40.81 28.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dy`}>
          <path d="m40.81 32.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dz`}>
          <path d="m40.81 36.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dA`}>
          <path d="m40.81 40.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dB`}>
          <path d="m40.81 44.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dC`}>
          <path d="m40.81 48.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dD`}>
          <path d="m40.81 52.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dE`}>
          <path d="m40.81 56.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dF`}>
          <path d="m40.81 60.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dG`}>
          <path d="m40.81 64.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dH`}>
          <path d="m40.81 68.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dI`}>
          <path d="m40.81 72.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dJ`}>
          <path d="m40.81 76.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dK`}>
          <path d="m40.81 80.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dL`}>
          <path d="m40.81 84.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dM`}>
          <path d="m40.81 88.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dN`}>
          <path d="m40.81 92.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dO`}>
          <path d="m40.81 96.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dP`}>
          <path d="m40.81 100.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dQ`}>
          <path d="m40.81 104.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dR`}>
          <path d="m36.81 28.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dS`}>
          <path d="m36.81 32.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dT`}>
          <path d="m36.81 36.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dU`}>
          <path d="m36.81 40.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dV`}>
          <path d="m36.81 44.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dW`}>
          <path d="m36.81 48.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dX`}>
          <path d="m36.81 52.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dY`}>
          <path d="m36.81 56.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-dZ`}>
          <path d="m36.81 60.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-d0`}>
          <path d="m36.81 64.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-d1`}>
          <path d="m36.81 68.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-d2`}>
          <path d="m36.81 72.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-d3`}>
          <path d="m36.81 76.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-d4`}>
          <path d="m36.81 80.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-d5`}>
          <path d="m36.81 84.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-d6`}>
          <path d="m36.81 88.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-d7`}>
          <path d="m36.81 92.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-d8`}>
          <path d="m36.81 96.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-d9`}>
          <path d="m36.81 100.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-ea`}>
          <path d="m36.81 104.97h4v4h-4z" />
        </clipPath>
        <clipPath id={`${id}-eb`}>
          <path d="m66.18 99.32h-19.83v-19a60.66 60.66 0 0 1 -6.46-12.27v38.68h56.49a60.29 60.29 0 0 1 -30.2-8.07z" />
        </clipPath>
        <circle cx="70" cy="70" fill="#10004c" r="70" />
        <path
          d="m39.89 32.16v74.52-38.68a60.66 60.66 0 0 0 6.46 12.27v-5.22h19.83v23.6a60.29 60.29 0 0 0 30.2 8.07v-74.56zm6.46 7h25v2.1h-25zm0 28.3v-2.1h34.46v2.1zm43.17 31.86h-19.31v-2.1h19.31zm0-7.86h-19.31v-2.1h19.31zm0-7.15h-19.31v-2.1h19.31zm0-7.16h-19.31v-2.1h19.31zm0-16.22h-43.17v-2.1h43.17zm0-6.55h-43.17v-2.1h43.17zm0-6.55h-43.17v-2.1h43.17z"
          fill="#f8f7f4"
        />
        <g fill="#10004c">
          <path d="m46.35 39.18h25.03v2.1h-25.03z" />
          <path d="m46.35 45.73h43.16v2.1h-43.16z" />
          <path d="m46.35 52.28h43.16v2.1h-43.16z" />
          <path d="m46.35 58.83h43.16v2.1h-43.16z" />
          <path d="m46.35 65.38h34.45v2.1h-34.45z" />
          <path d="m70.21 75.05h19.3v2.1h-19.3z" />
          <path d="m70.21 82.21h19.3v2.1h-19.3z" />
          <path d="m70.21 89.36h19.3v2.1h-19.3z" />
          <path d="m70.21 97.22h19.3v2.1h-19.3z" />
        </g>
        <path
          d="m51.53 83.69a3.67 3.67 0 0 1 3.65 3.69 3.62 3.62 0 0 1 -.83 2.31c.62.61 1.26 1.19 1.92 1.77v-2h6.62v6.63h-.81c1.33.91 2.69 1.8 4.1 2.61v-23.65h-19.83v5.26c1 1.4 2 2.74 3.06 4a3.65 3.65 0 0 1 2.12-.62z"
          fill="#5fcbeb"
        />
        <path
          d="m66.18 99.32h-19.83v-19a60.66 60.66 0 0 1 -6.46-12.27v38.68h56.49a60.29 60.29 0 0 1 -30.2-8.07z"
          fill="#fde5cb"
        />
        <path d="m46.35 99.32h19.83z" fill="#2870b5" />
        <path
          d="m66.18 99.32v-.67c-1.41-.81-2.77-1.7-4.1-2.61h-5.81v-4.55c-.66-.58-1.3-1.16-1.92-1.77a3.68 3.68 0 0 1 -5.69-4.67 3.77 3.77 0 0 1 .75-.69c-1.07-1.31-2.1-2.65-3.06-4v19z"
          fill="#2870b5"
        />
        <path
          d="m51.53 83.69a3.66 3.66 0 0 0 -2.12.67 59.74 59.74 0 0 0 4.94 5.36 3.67 3.67 0 0 0 -2.82-6z"
          fill="#feca1e"
        />
        <path
          d="m49.41 84.36a3.68 3.68 0 0 0 4.19 6 3.77 3.77 0 0 0 .75-.69 60.52 60.52 0 0 1 -4.94-5.31z"
          fill="#f17732"
        />
        <path
          d="m62.89 89.41h-6.62v2.08a59 59 0 0 0 5.81 4.51h.81z"
          fill="#2870b5"
        />
        <path d="m56.27 96h5.81a60.93 60.93 0 0 1 -5.81-4.55z" fill="#10004c" />
        <path d="m59.58 77.66 3.83 6.64h-7.67z" fill="#99052e" />
        <g clipPath={`url(#${id}-a)`} fill="#fde5cb">
          <g clipPath={`url(#${id}-b)`}>
            <circle cx="95.81" cy="32.97" r=".35" />
            <circle cx="93.81" cy="32.97" r=".35" />
            <circle cx="96.81" cy="30.97" r=".35" />
            <circle cx="94.81" cy="30.97" r=".35" />
            <circle cx="92.81" cy="30.97" r=".35" />
            <circle cx="95.81" cy="28.97" r=".35" />
            <circle cx="93.81" cy="28.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-c)`}>
            <circle cx="95.81" cy="36.97" r=".35" />
            <circle cx="93.81" cy="36.97" r=".35" />
            <circle cx="96.81" cy="34.97" r=".35" />
            <circle cx="94.81" cy="34.97" r=".35" />
            <circle cx="92.81" cy="34.97" r=".35" />
            <circle cx="95.81" cy="32.97" r=".35" />
            <circle cx="93.81" cy="32.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-d)`}>
            <circle cx="95.81" cy="40.97" r=".35" />
            <circle cx="93.81" cy="40.97" r=".35" />
            <circle cx="96.81" cy="38.97" r=".35" />
            <circle cx="94.81" cy="38.97" r=".35" />
            <circle cx="92.81" cy="38.97" r=".35" />
            <circle cx="95.81" cy="36.97" r=".35" />
            <circle cx="93.81" cy="36.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-e)`}>
            <circle cx="95.81" cy="44.97" r=".35" />
            <circle cx="93.81" cy="44.97" r=".35" />
            <circle cx="96.81" cy="42.97" r=".35" />
            <circle cx="94.81" cy="42.97" r=".35" />
            <circle cx="92.81" cy="42.97" r=".35" />
            <circle cx="95.81" cy="40.97" r=".35" />
            <circle cx="93.81" cy="40.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-f)`}>
            <circle cx="95.81" cy="48.97" r=".35" />
            <circle cx="93.81" cy="48.97" r=".35" />
            <circle cx="96.81" cy="46.97" r=".35" />
            <circle cx="94.81" cy="46.97" r=".35" />
            <circle cx="92.81" cy="46.97" r=".35" />
            <circle cx="95.81" cy="44.97" r=".35" />
            <circle cx="93.81" cy="44.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-g)`}>
            <circle cx="95.81" cy="52.97" r=".35" />
            <circle cx="93.81" cy="52.97" r=".35" />
            <circle cx="96.81" cy="50.97" r=".35" />
            <circle cx="94.81" cy="50.97" r=".35" />
            <circle cx="92.81" cy="50.97" r=".35" />
            <circle cx="95.81" cy="48.97" r=".35" />
            <circle cx="93.81" cy="48.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-h)`}>
            <circle cx="95.81" cy="56.97" r=".35" />
            <circle cx="93.81" cy="56.97" r=".35" />
            <circle cx="96.81" cy="54.97" r=".35" />
            <circle cx="94.81" cy="54.97" r=".35" />
            <circle cx="92.81" cy="54.97" r=".35" />
            <circle cx="95.81" cy="52.97" r=".35" />
            <circle cx="93.81" cy="52.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-i)`}>
            <circle cx="95.81" cy="60.97" r=".35" />
            <circle cx="93.81" cy="60.97" r=".35" />
            <circle cx="96.81" cy="58.97" r=".35" />
            <circle cx="94.81" cy="58.97" r=".35" />
            <circle cx="92.81" cy="58.97" r=".35" />
            <circle cx="95.81" cy="56.97" r=".35" />
            <circle cx="93.81" cy="56.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-j)`}>
            <circle cx="95.81" cy="64.97" r=".35" />
            <circle cx="93.81" cy="64.97" r=".35" />
            <circle cx="96.81" cy="62.97" r=".35" />
            <circle cx="94.81" cy="62.97" r=".35" />
            <circle cx="92.81" cy="62.97" r=".35" />
            <circle cx="95.81" cy="60.97" r=".35" />
            <circle cx="93.81" cy="60.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-k)`}>
            <circle cx="95.81" cy="68.97" r=".35" />
            <circle cx="93.81" cy="68.97" r=".35" />
            <circle cx="96.81" cy="66.97" r=".35" />
            <circle cx="94.81" cy="66.97" r=".35" />
            <circle cx="92.81" cy="66.97" r=".35" />
            <circle cx="95.81" cy="64.97" r=".35" />
            <circle cx="93.81" cy="64.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-l)`}>
            <circle cx="95.81" cy="72.97" r=".35" />
            <circle cx="93.81" cy="72.97" r=".35" />
            <circle cx="96.81" cy="70.97" r=".35" />
            <circle cx="94.81" cy="70.97" r=".35" />
            <circle cx="92.81" cy="70.97" r=".35" />
            <circle cx="95.81" cy="68.97" r=".35" />
            <circle cx="93.81" cy="68.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-m)`}>
            <circle cx="95.81" cy="76.97" r=".35" />
            <circle cx="93.81" cy="76.97" r=".35" />
            <circle cx="96.81" cy="74.97" r=".35" />
            <circle cx="94.81" cy="74.97" r=".35" />
            <circle cx="92.81" cy="74.97" r=".35" />
            <circle cx="95.81" cy="72.97" r=".35" />
            <circle cx="93.81" cy="72.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-n)`}>
            <circle cx="95.81" cy="80.97" r=".35" />
            <circle cx="93.81" cy="80.97" r=".35" />
            <circle cx="96.81" cy="78.97" r=".35" />
            <circle cx="94.81" cy="78.97" r=".35" />
            <circle cx="92.81" cy="78.97" r=".35" />
            <circle cx="95.81" cy="76.97" r=".35" />
            <circle cx="93.81" cy="76.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-o)`}>
            <circle cx="95.81" cy="84.97" r=".35" />
            <circle cx="93.81" cy="84.97" r=".35" />
            <circle cx="96.81" cy="82.97" r=".35" />
            <circle cx="94.81" cy="82.97" r=".35" />
            <circle cx="92.81" cy="82.97" r=".35" />
            <circle cx="95.81" cy="80.97" r=".35" />
            <circle cx="93.81" cy="80.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-p)`}>
            <circle cx="95.81" cy="88.97" r=".35" />
            <circle cx="93.81" cy="88.97" r=".35" />
            <circle cx="96.81" cy="86.97" r=".35" />
            <circle cx="94.81" cy="86.97" r=".35" />
            <circle cx="92.81" cy="86.97" r=".35" />
            <circle cx="95.81" cy="84.97" r=".35" />
            <circle cx="93.81" cy="84.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-q)`}>
            <circle cx="95.81" cy="92.97" r=".35" />
            <circle cx="93.81" cy="92.97" r=".35" />
            <circle cx="96.81" cy="90.97" r=".35" />
            <circle cx="94.81" cy="90.97" r=".35" />
            <circle cx="92.81" cy="90.97" r=".35" />
            <circle cx="95.81" cy="88.97" r=".35" />
            <circle cx="93.81" cy="88.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-r)`}>
            <circle cx="95.81" cy="96.97" r=".35" />
            <circle cx="93.81" cy="96.97" r=".35" />
            <circle cx="96.81" cy="94.97" r=".35" />
            <circle cx="94.81" cy="94.97" r=".35" />
            <circle cx="92.81" cy="94.97" r=".35" />
            <circle cx="95.81" cy="92.97" r=".35" />
            <circle cx="93.81" cy="92.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-s)`}>
            <circle cx="95.81" cy="100.97" r=".35" />
            <circle cx="93.81" cy="100.97" r=".35" />
            <circle cx="96.81" cy="98.97" r=".35" />
            <circle cx="94.81" cy="98.97" r=".35" />
            <circle cx="92.81" cy="98.97" r=".35" />
            <circle cx="95.81" cy="96.97" r=".35" />
            <circle cx="93.81" cy="96.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-t)`}>
            <circle cx="95.81" cy="104.97" r=".35" />
            <circle cx="93.81" cy="104.97" r=".35" />
            <circle cx="96.81" cy="102.97" r=".35" />
            <circle cx="94.81" cy="102.97" r=".35" />
            <circle cx="92.81" cy="102.97" r=".35" />
            <circle cx="95.81" cy="100.97" r=".35" />
            <circle cx="93.81" cy="100.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-u)`}>
            <circle cx="95.81" cy="108.97" r=".35" />
            <circle cx="93.81" cy="108.97" r=".35" />
            <circle cx="96.81" cy="106.97" r=".35" />
            <circle cx="94.81" cy="106.97" r=".35" />
            <circle cx="92.81" cy="106.97" r=".35" />
            <circle cx="95.81" cy="104.97" r=".35" />
            <circle cx="93.81" cy="104.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-v)`}>
            <circle cx="91.81" cy="32.97" r=".35" />
            <circle cx="89.81" cy="32.97" r=".35" />
            <circle cx="92.81" cy="30.97" r=".35" />
            <circle cx="90.81" cy="30.97" r=".35" />
            <circle cx="88.81" cy="30.97" r=".35" />
            <circle cx="91.81" cy="28.97" r=".35" />
            <circle cx="89.81" cy="28.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-w)`}>
            <circle cx="91.81" cy="36.97" r=".35" />
            <circle cx="89.81" cy="36.97" r=".35" />
            <circle cx="92.81" cy="34.97" r=".35" />
            <circle cx="90.81" cy="34.97" r=".35" />
            <circle cx="88.81" cy="34.97" r=".35" />
            <circle cx="91.81" cy="32.97" r=".35" />
            <circle cx="89.81" cy="32.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-x)`}>
            <circle cx="91.81" cy="40.97" r=".35" />
            <circle cx="89.81" cy="40.97" r=".35" />
            <circle cx="92.81" cy="38.97" r=".35" />
            <circle cx="90.81" cy="38.97" r=".35" />
            <circle cx="88.81" cy="38.97" r=".35" />
            <circle cx="91.81" cy="36.97" r=".35" />
            <circle cx="89.81" cy="36.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-y)`}>
            <circle cx="91.81" cy="44.97" r=".35" />
            <circle cx="89.81" cy="44.97" r=".35" />
            <circle cx="92.81" cy="42.97" r=".35" />
            <circle cx="90.81" cy="42.97" r=".35" />
            <circle cx="88.81" cy="42.97" r=".35" />
            <circle cx="91.81" cy="40.97" r=".35" />
            <circle cx="89.81" cy="40.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-z)`}>
            <circle cx="91.81" cy="48.97" r=".35" />
            <circle cx="89.81" cy="48.97" r=".35" />
            <circle cx="92.81" cy="46.97" r=".35" />
            <circle cx="90.81" cy="46.97" r=".35" />
            <circle cx="88.81" cy="46.97" r=".35" />
            <circle cx="91.81" cy="44.97" r=".35" />
            <circle cx="89.81" cy="44.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-A)`}>
            <circle cx="91.81" cy="52.97" r=".35" />
            <circle cx="89.81" cy="52.97" r=".35" />
            <circle cx="92.81" cy="50.97" r=".35" />
            <circle cx="90.81" cy="50.97" r=".35" />
            <circle cx="88.81" cy="50.97" r=".35" />
            <circle cx="91.81" cy="48.97" r=".35" />
            <circle cx="89.81" cy="48.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-B)`}>
            <circle cx="91.81" cy="56.97" r=".35" />
            <circle cx="89.81" cy="56.97" r=".35" />
            <circle cx="92.81" cy="54.97" r=".35" />
            <circle cx="90.81" cy="54.97" r=".35" />
            <circle cx="88.81" cy="54.97" r=".35" />
            <circle cx="91.81" cy="52.97" r=".35" />
            <circle cx="89.81" cy="52.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-C)`}>
            <circle cx="91.81" cy="60.97" r=".35" />
            <circle cx="89.81" cy="60.97" r=".35" />
            <circle cx="92.81" cy="58.97" r=".35" />
            <circle cx="90.81" cy="58.97" r=".35" />
            <circle cx="88.81" cy="58.97" r=".35" />
            <circle cx="91.81" cy="56.97" r=".35" />
            <circle cx="89.81" cy="56.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-D)`}>
            <circle cx="91.81" cy="64.97" r=".35" />
            <circle cx="89.81" cy="64.97" r=".35" />
            <circle cx="92.81" cy="62.97" r=".35" />
            <circle cx="90.81" cy="62.97" r=".35" />
            <circle cx="88.81" cy="62.97" r=".35" />
            <circle cx="91.81" cy="60.97" r=".35" />
            <circle cx="89.81" cy="60.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-E)`}>
            <circle cx="91.81" cy="68.97" r=".35" />
            <circle cx="89.81" cy="68.97" r=".35" />
            <circle cx="92.81" cy="66.97" r=".35" />
            <circle cx="90.81" cy="66.97" r=".35" />
            <circle cx="88.81" cy="66.97" r=".35" />
            <circle cx="91.81" cy="64.97" r=".35" />
            <circle cx="89.81" cy="64.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-F)`}>
            <circle cx="91.81" cy="72.97" r=".35" />
            <circle cx="89.81" cy="72.97" r=".35" />
            <circle cx="92.81" cy="70.97" r=".35" />
            <circle cx="90.81" cy="70.97" r=".35" />
            <circle cx="88.81" cy="70.97" r=".35" />
            <circle cx="91.81" cy="68.97" r=".35" />
            <circle cx="89.81" cy="68.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-G)`}>
            <circle cx="91.81" cy="76.97" r=".35" />
            <circle cx="89.81" cy="76.97" r=".35" />
            <circle cx="92.81" cy="74.97" r=".35" />
            <circle cx="90.81" cy="74.97" r=".35" />
            <circle cx="88.81" cy="74.97" r=".35" />
            <circle cx="91.81" cy="72.97" r=".35" />
            <circle cx="89.81" cy="72.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-H)`}>
            <circle cx="91.81" cy="80.97" r=".35" />
            <circle cx="89.81" cy="80.97" r=".35" />
            <circle cx="92.81" cy="78.97" r=".35" />
            <circle cx="90.81" cy="78.97" r=".35" />
            <circle cx="88.81" cy="78.97" r=".35" />
            <circle cx="91.81" cy="76.97" r=".35" />
            <circle cx="89.81" cy="76.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-I)`}>
            <circle cx="91.81" cy="84.97" r=".35" />
            <circle cx="89.81" cy="84.97" r=".35" />
            <circle cx="92.81" cy="82.97" r=".35" />
            <circle cx="90.81" cy="82.97" r=".35" />
            <circle cx="88.81" cy="82.97" r=".35" />
            <circle cx="91.81" cy="80.97" r=".35" />
            <circle cx="89.81" cy="80.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-J)`}>
            <circle cx="91.81" cy="88.97" r=".35" />
            <circle cx="89.81" cy="88.97" r=".35" />
            <circle cx="92.81" cy="86.97" r=".35" />
            <circle cx="90.81" cy="86.97" r=".35" />
            <circle cx="88.81" cy="86.97" r=".35" />
            <circle cx="91.81" cy="84.97" r=".35" />
            <circle cx="89.81" cy="84.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-K)`}>
            <circle cx="91.81" cy="92.97" r=".35" />
            <circle cx="89.81" cy="92.97" r=".35" />
            <circle cx="92.81" cy="90.97" r=".35" />
            <circle cx="90.81" cy="90.97" r=".35" />
            <circle cx="88.81" cy="90.97" r=".35" />
            <circle cx="91.81" cy="88.97" r=".35" />
            <circle cx="89.81" cy="88.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-L)`}>
            <circle cx="91.81" cy="96.97" r=".35" />
            <circle cx="89.81" cy="96.97" r=".35" />
            <circle cx="92.81" cy="94.97" r=".35" />
            <circle cx="90.81" cy="94.97" r=".35" />
            <circle cx="88.81" cy="94.97" r=".35" />
            <circle cx="91.81" cy="92.97" r=".35" />
            <circle cx="89.81" cy="92.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-M)`}>
            <circle cx="91.81" cy="100.97" r=".35" />
            <circle cx="89.81" cy="100.97" r=".35" />
            <circle cx="92.81" cy="98.97" r=".35" />
            <circle cx="90.81" cy="98.97" r=".35" />
            <circle cx="88.81" cy="98.97" r=".35" />
            <circle cx="91.81" cy="96.97" r=".35" />
            <circle cx="89.81" cy="96.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-N)`}>
            <circle cx="91.81" cy="104.97" r=".35" />
            <circle cx="89.81" cy="104.97" r=".35" />
            <circle cx="92.81" cy="102.97" r=".35" />
            <circle cx="90.81" cy="102.97" r=".35" />
            <circle cx="88.81" cy="102.97" r=".35" />
            <circle cx="91.81" cy="100.97" r=".35" />
            <circle cx="89.81" cy="100.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-O)`}>
            <circle cx="91.81" cy="108.97" r=".35" />
            <circle cx="89.81" cy="108.97" r=".35" />
            <circle cx="92.81" cy="106.97" r=".35" />
            <circle cx="90.81" cy="106.97" r=".35" />
            <circle cx="88.81" cy="106.97" r=".35" />
            <circle cx="91.81" cy="104.97" r=".35" />
            <circle cx="89.81" cy="104.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-P)`}>
            <circle cx="87.81" cy="32.97" r=".35" />
            <circle cx="85.81" cy="32.97" r=".35" />
            <circle cx="88.81" cy="30.97" r=".35" />
            <circle cx="86.81" cy="30.97" r=".35" />
            <circle cx="84.81" cy="30.97" r=".35" />
            <circle cx="87.81" cy="28.97" r=".35" />
            <circle cx="85.81" cy="28.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-Q)`}>
            <circle cx="87.81" cy="36.97" r=".35" />
            <circle cx="85.81" cy="36.97" r=".35" />
            <circle cx="88.81" cy="34.97" r=".35" />
            <circle cx="86.81" cy="34.97" r=".35" />
            <circle cx="84.81" cy="34.97" r=".35" />
            <circle cx="87.81" cy="32.97" r=".35" />
            <circle cx="85.81" cy="32.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-R)`}>
            <circle cx="87.81" cy="40.97" r=".35" />
            <circle cx="85.81" cy="40.97" r=".35" />
            <circle cx="88.81" cy="38.97" r=".35" />
            <circle cx="86.81" cy="38.97" r=".35" />
            <circle cx="84.81" cy="38.97" r=".35" />
            <circle cx="87.81" cy="36.97" r=".35" />
            <circle cx="85.81" cy="36.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-S)`}>
            <circle cx="87.81" cy="44.97" r=".35" />
            <circle cx="85.81" cy="44.97" r=".35" />
            <circle cx="88.81" cy="42.97" r=".35" />
            <circle cx="86.81" cy="42.97" r=".35" />
            <circle cx="84.81" cy="42.97" r=".35" />
            <circle cx="87.81" cy="40.97" r=".35" />
            <circle cx="85.81" cy="40.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-T)`}>
            <circle cx="87.81" cy="48.97" r=".35" />
            <circle cx="85.81" cy="48.97" r=".35" />
            <circle cx="88.81" cy="46.97" r=".35" />
            <circle cx="86.81" cy="46.97" r=".35" />
            <circle cx="84.81" cy="46.97" r=".35" />
            <circle cx="87.81" cy="44.97" r=".35" />
            <circle cx="85.81" cy="44.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-U)`}>
            <circle cx="87.81" cy="52.97" r=".35" />
            <circle cx="85.81" cy="52.97" r=".35" />
            <circle cx="88.81" cy="50.97" r=".35" />
            <circle cx="86.81" cy="50.97" r=".35" />
            <circle cx="84.81" cy="50.97" r=".35" />
            <circle cx="87.81" cy="48.97" r=".35" />
            <circle cx="85.81" cy="48.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-V)`}>
            <circle cx="87.81" cy="56.97" r=".35" />
            <circle cx="85.81" cy="56.97" r=".35" />
            <circle cx="88.81" cy="54.97" r=".35" />
            <circle cx="86.81" cy="54.97" r=".35" />
            <circle cx="84.81" cy="54.97" r=".35" />
            <circle cx="87.81" cy="52.97" r=".35" />
            <circle cx="85.81" cy="52.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-W)`}>
            <circle cx="87.81" cy="60.97" r=".35" />
            <circle cx="85.81" cy="60.97" r=".35" />
            <circle cx="88.81" cy="58.97" r=".35" />
            <circle cx="86.81" cy="58.97" r=".35" />
            <circle cx="84.81" cy="58.97" r=".35" />
            <circle cx="87.81" cy="56.97" r=".35" />
            <circle cx="85.81" cy="56.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-X)`}>
            <circle cx="87.81" cy="64.97" r=".35" />
            <circle cx="85.81" cy="64.97" r=".35" />
            <circle cx="88.81" cy="62.97" r=".35" />
            <circle cx="86.81" cy="62.97" r=".35" />
            <circle cx="84.81" cy="62.97" r=".35" />
            <circle cx="87.81" cy="60.97" r=".35" />
            <circle cx="85.81" cy="60.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-Y)`}>
            <circle cx="87.81" cy="68.97" r=".35" />
            <circle cx="85.81" cy="68.97" r=".35" />
            <circle cx="88.81" cy="66.97" r=".35" />
            <circle cx="86.81" cy="66.97" r=".35" />
            <circle cx="84.81" cy="66.97" r=".35" />
            <circle cx="87.81" cy="64.97" r=".35" />
            <circle cx="85.81" cy="64.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-Z)`}>
            <circle cx="87.81" cy="72.97" r=".35" />
            <circle cx="85.81" cy="72.97" r=".35" />
            <circle cx="88.81" cy="70.97" r=".35" />
            <circle cx="86.81" cy="70.97" r=".35" />
            <circle cx="84.81" cy="70.97" r=".35" />
            <circle cx="87.81" cy="68.97" r=".35" />
            <circle cx="85.81" cy="68.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aa)`}>
            <circle cx="87.81" cy="76.97" r=".35" />
            <circle cx="85.81" cy="76.97" r=".35" />
            <circle cx="88.81" cy="74.97" r=".35" />
            <circle cx="86.81" cy="74.97" r=".35" />
            <circle cx="84.81" cy="74.97" r=".35" />
            <circle cx="87.81" cy="72.97" r=".35" />
            <circle cx="85.81" cy="72.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ab)`}>
            <circle cx="87.81" cy="80.97" r=".35" />
            <circle cx="85.81" cy="80.97" r=".35" />
            <circle cx="88.81" cy="78.97" r=".35" />
            <circle cx="86.81" cy="78.97" r=".35" />
            <circle cx="84.81" cy="78.97" r=".35" />
            <circle cx="87.81" cy="76.97" r=".35" />
            <circle cx="85.81" cy="76.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ac)`}>
            <circle cx="87.81" cy="84.97" r=".35" />
            <circle cx="85.81" cy="84.97" r=".35" />
            <circle cx="88.81" cy="82.97" r=".35" />
            <circle cx="86.81" cy="82.97" r=".35" />
            <circle cx="84.81" cy="82.97" r=".35" />
            <circle cx="87.81" cy="80.97" r=".35" />
            <circle cx="85.81" cy="80.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ad)`}>
            <circle cx="87.81" cy="88.97" r=".35" />
            <circle cx="85.81" cy="88.97" r=".35" />
            <circle cx="88.81" cy="86.97" r=".35" />
            <circle cx="86.81" cy="86.97" r=".35" />
            <circle cx="84.81" cy="86.97" r=".35" />
            <circle cx="87.81" cy="84.97" r=".35" />
            <circle cx="85.81" cy="84.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ae)`}>
            <circle cx="87.81" cy="92.97" r=".35" />
            <circle cx="85.81" cy="92.97" r=".35" />
            <circle cx="88.81" cy="90.97" r=".35" />
            <circle cx="86.81" cy="90.97" r=".35" />
            <circle cx="84.81" cy="90.97" r=".35" />
            <circle cx="87.81" cy="88.97" r=".35" />
            <circle cx="85.81" cy="88.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-af)`}>
            <circle cx="87.81" cy="96.97" r=".35" />
            <circle cx="85.81" cy="96.97" r=".35" />
            <circle cx="88.81" cy="94.97" r=".35" />
            <circle cx="86.81" cy="94.97" r=".35" />
            <circle cx="84.81" cy="94.97" r=".35" />
            <circle cx="87.81" cy="92.97" r=".35" />
            <circle cx="85.81" cy="92.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ag)`}>
            <circle cx="87.81" cy="100.97" r=".35" />
            <circle cx="85.81" cy="100.97" r=".35" />
            <circle cx="88.81" cy="98.97" r=".35" />
            <circle cx="86.81" cy="98.97" r=".35" />
            <circle cx="84.81" cy="98.97" r=".35" />
            <circle cx="87.81" cy="96.97" r=".35" />
            <circle cx="85.81" cy="96.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ah)`}>
            <circle cx="87.81" cy="104.97" r=".35" />
            <circle cx="85.81" cy="104.97" r=".35" />
            <circle cx="88.81" cy="102.97" r=".35" />
            <circle cx="86.81" cy="102.97" r=".35" />
            <circle cx="84.81" cy="102.97" r=".35" />
            <circle cx="87.81" cy="100.97" r=".35" />
            <circle cx="85.81" cy="100.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ai)`}>
            <circle cx="87.81" cy="108.97" r=".35" />
            <circle cx="85.81" cy="108.97" r=".35" />
            <circle cx="88.81" cy="106.97" r=".35" />
            <circle cx="86.81" cy="106.97" r=".35" />
            <circle cx="84.81" cy="106.97" r=".35" />
            <circle cx="87.81" cy="104.97" r=".35" />
            <circle cx="85.81" cy="104.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aj)`}>
            <circle cx="83.81" cy="32.97" r=".35" />
            <circle cx="81.81" cy="32.97" r=".35" />
            <circle cx="84.81" cy="30.97" r=".35" />
            <circle cx="82.81" cy="30.97" r=".35" />
            <circle cx="80.81" cy="30.97" r=".35" />
            <circle cx="83.81" cy="28.97" r=".35" />
            <circle cx="81.81" cy="28.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ak)`}>
            <circle cx="83.81" cy="36.97" r=".35" />
            <circle cx="81.81" cy="36.97" r=".35" />
            <circle cx="84.81" cy="34.97" r=".35" />
            <circle cx="82.81" cy="34.97" r=".35" />
            <circle cx="80.81" cy="34.97" r=".35" />
            <circle cx="83.81" cy="32.97" r=".35" />
            <circle cx="81.81" cy="32.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-al)`}>
            <circle cx="83.81" cy="40.97" r=".35" />
            <circle cx="81.81" cy="40.97" r=".35" />
            <circle cx="84.81" cy="38.97" r=".35" />
            <circle cx="82.81" cy="38.97" r=".35" />
            <circle cx="80.81" cy="38.97" r=".35" />
            <circle cx="83.81" cy="36.97" r=".35" />
            <circle cx="81.81" cy="36.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-am)`}>
            <circle cx="83.81" cy="44.97" r=".35" />
            <circle cx="81.81" cy="44.97" r=".35" />
            <circle cx="84.81" cy="42.97" r=".35" />
            <circle cx="82.81" cy="42.97" r=".35" />
            <circle cx="80.81" cy="42.97" r=".35" />
            <circle cx="83.81" cy="40.97" r=".35" />
            <circle cx="81.81" cy="40.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-an)`}>
            <circle cx="83.81" cy="48.97" r=".35" />
            <circle cx="81.81" cy="48.97" r=".35" />
            <circle cx="84.81" cy="46.97" r=".35" />
            <circle cx="82.81" cy="46.97" r=".35" />
            <circle cx="80.81" cy="46.97" r=".35" />
            <circle cx="83.81" cy="44.97" r=".35" />
            <circle cx="81.81" cy="44.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ao)`}>
            <circle cx="83.81" cy="52.97" r=".35" />
            <circle cx="81.81" cy="52.97" r=".35" />
            <circle cx="84.81" cy="50.97" r=".35" />
            <circle cx="82.81" cy="50.97" r=".35" />
            <circle cx="80.81" cy="50.97" r=".35" />
            <circle cx="83.81" cy="48.97" r=".35" />
            <circle cx="81.81" cy="48.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ap)`}>
            <circle cx="83.81" cy="56.97" r=".35" />
            <circle cx="81.81" cy="56.97" r=".35" />
            <circle cx="84.81" cy="54.97" r=".35" />
            <circle cx="82.81" cy="54.97" r=".35" />
            <circle cx="80.81" cy="54.97" r=".35" />
            <circle cx="83.81" cy="52.97" r=".35" />
            <circle cx="81.81" cy="52.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aq)`}>
            <circle cx="83.81" cy="60.97" r=".35" />
            <circle cx="81.81" cy="60.97" r=".35" />
            <circle cx="84.81" cy="58.97" r=".35" />
            <circle cx="82.81" cy="58.97" r=".35" />
            <circle cx="80.81" cy="58.97" r=".35" />
            <circle cx="83.81" cy="56.97" r=".35" />
            <circle cx="81.81" cy="56.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ar)`}>
            <circle cx="83.81" cy="64.97" r=".35" />
            <circle cx="81.81" cy="64.97" r=".35" />
            <circle cx="84.81" cy="62.97" r=".35" />
            <circle cx="82.81" cy="62.97" r=".35" />
            <circle cx="80.81" cy="62.97" r=".35" />
            <circle cx="83.81" cy="60.97" r=".35" />
            <circle cx="81.81" cy="60.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-as)`}>
            <circle cx="83.81" cy="68.97" r=".35" />
            <circle cx="81.81" cy="68.97" r=".35" />
            <circle cx="84.81" cy="66.97" r=".35" />
            <circle cx="82.81" cy="66.97" r=".35" />
            <circle cx="80.81" cy="66.97" r=".35" />
            <circle cx="83.81" cy="64.97" r=".35" />
            <circle cx="81.81" cy="64.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-at)`}>
            <circle cx="83.81" cy="72.97" r=".35" />
            <circle cx="81.81" cy="72.97" r=".35" />
            <circle cx="84.81" cy="70.97" r=".35" />
            <circle cx="82.81" cy="70.97" r=".35" />
            <circle cx="80.81" cy="70.97" r=".35" />
            <circle cx="83.81" cy="68.97" r=".35" />
            <circle cx="81.81" cy="68.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-au)`}>
            <circle cx="83.81" cy="76.97" r=".35" />
            <circle cx="81.81" cy="76.97" r=".35" />
            <circle cx="84.81" cy="74.97" r=".35" />
            <circle cx="82.81" cy="74.97" r=".35" />
            <circle cx="80.81" cy="74.97" r=".35" />
            <circle cx="83.81" cy="72.97" r=".35" />
            <circle cx="81.81" cy="72.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-av)`}>
            <circle cx="83.81" cy="80.97" r=".35" />
            <circle cx="81.81" cy="80.97" r=".35" />
            <circle cx="84.81" cy="78.97" r=".35" />
            <circle cx="82.81" cy="78.97" r=".35" />
            <circle cx="80.81" cy="78.97" r=".35" />
            <circle cx="83.81" cy="76.97" r=".35" />
            <circle cx="81.81" cy="76.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aw)`}>
            <circle cx="83.81" cy="84.97" r=".35" />
            <circle cx="81.81" cy="84.97" r=".35" />
            <circle cx="84.81" cy="82.97" r=".35" />
            <circle cx="82.81" cy="82.97" r=".35" />
            <circle cx="80.81" cy="82.97" r=".35" />
            <circle cx="83.81" cy="80.97" r=".35" />
            <circle cx="81.81" cy="80.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ax)`}>
            <circle cx="83.81" cy="88.97" r=".35" />
            <circle cx="81.81" cy="88.97" r=".35" />
            <circle cx="84.81" cy="86.97" r=".35" />
            <circle cx="82.81" cy="86.97" r=".35" />
            <circle cx="80.81" cy="86.97" r=".35" />
            <circle cx="83.81" cy="84.97" r=".35" />
            <circle cx="81.81" cy="84.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ay)`}>
            <circle cx="83.81" cy="92.97" r=".35" />
            <circle cx="81.81" cy="92.97" r=".35" />
            <circle cx="84.81" cy="90.97" r=".35" />
            <circle cx="82.81" cy="90.97" r=".35" />
            <circle cx="80.81" cy="90.97" r=".35" />
            <circle cx="83.81" cy="88.97" r=".35" />
            <circle cx="81.81" cy="88.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-az)`}>
            <circle cx="83.81" cy="96.97" r=".35" />
            <circle cx="81.81" cy="96.97" r=".35" />
            <circle cx="84.81" cy="94.97" r=".35" />
            <circle cx="82.81" cy="94.97" r=".35" />
            <circle cx="80.81" cy="94.97" r=".35" />
            <circle cx="83.81" cy="92.97" r=".35" />
            <circle cx="81.81" cy="92.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aA)`}>
            <circle cx="83.81" cy="100.97" r=".35" />
            <circle cx="81.81" cy="100.97" r=".35" />
            <circle cx="84.81" cy="98.97" r=".35" />
            <circle cx="82.81" cy="98.97" r=".35" />
            <circle cx="80.81" cy="98.97" r=".35" />
            <circle cx="83.81" cy="96.97" r=".35" />
            <circle cx="81.81" cy="96.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aB)`}>
            <circle cx="83.81" cy="104.97" r=".35" />
            <circle cx="81.81" cy="104.97" r=".35" />
            <circle cx="84.81" cy="102.97" r=".35" />
            <circle cx="82.81" cy="102.97" r=".35" />
            <circle cx="80.81" cy="102.97" r=".35" />
            <circle cx="83.81" cy="100.97" r=".35" />
            <circle cx="81.81" cy="100.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aC)`}>
            <circle cx="83.81" cy="108.97" r=".35" />
            <circle cx="81.81" cy="108.97" r=".35" />
            <circle cx="84.81" cy="106.97" r=".35" />
            <circle cx="82.81" cy="106.97" r=".35" />
            <circle cx="80.81" cy="106.97" r=".35" />
            <circle cx="83.81" cy="104.97" r=".35" />
            <circle cx="81.81" cy="104.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aD)`}>
            <circle cx="79.81" cy="32.97" r=".35" />
            <circle cx="77.81" cy="32.97" r=".35" />
            <circle cx="80.81" cy="30.97" r=".35" />
            <circle cx="78.81" cy="30.97" r=".35" />
            <circle cx="76.81" cy="30.97" r=".35" />
            <circle cx="79.81" cy="28.97" r=".35" />
            <circle cx="77.81" cy="28.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aE)`}>
            <circle cx="79.81" cy="36.97" r=".35" />
            <circle cx="77.81" cy="36.97" r=".35" />
            <circle cx="80.81" cy="34.97" r=".35" />
            <circle cx="78.81" cy="34.97" r=".35" />
            <circle cx="76.81" cy="34.97" r=".35" />
            <circle cx="79.81" cy="32.97" r=".35" />
            <circle cx="77.81" cy="32.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aF)`}>
            <circle cx="79.81" cy="40.97" r=".35" />
            <circle cx="77.81" cy="40.97" r=".35" />
            <circle cx="80.81" cy="38.97" r=".35" />
            <circle cx="78.81" cy="38.97" r=".35" />
            <circle cx="76.81" cy="38.97" r=".35" />
            <circle cx="79.81" cy="36.97" r=".35" />
            <circle cx="77.81" cy="36.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aG)`}>
            <circle cx="79.81" cy="44.97" r=".35" />
            <circle cx="77.81" cy="44.97" r=".35" />
            <circle cx="80.81" cy="42.97" r=".35" />
            <circle cx="78.81" cy="42.97" r=".35" />
            <circle cx="76.81" cy="42.97" r=".35" />
            <circle cx="79.81" cy="40.97" r=".35" />
            <circle cx="77.81" cy="40.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aH)`}>
            <circle cx="79.81" cy="48.97" r=".35" />
            <circle cx="77.81" cy="48.97" r=".35" />
            <circle cx="80.81" cy="46.97" r=".35" />
            <circle cx="78.81" cy="46.97" r=".35" />
            <circle cx="76.81" cy="46.97" r=".35" />
            <circle cx="79.81" cy="44.97" r=".35" />
            <circle cx="77.81" cy="44.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aI)`}>
            <circle cx="79.81" cy="52.97" r=".35" />
            <circle cx="77.81" cy="52.97" r=".35" />
            <circle cx="80.81" cy="50.97" r=".35" />
            <circle cx="78.81" cy="50.97" r=".35" />
            <circle cx="76.81" cy="50.97" r=".35" />
            <circle cx="79.81" cy="48.97" r=".35" />
            <circle cx="77.81" cy="48.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aJ)`}>
            <circle cx="79.81" cy="56.97" r=".35" />
            <circle cx="77.81" cy="56.97" r=".35" />
            <circle cx="80.81" cy="54.97" r=".35" />
            <circle cx="78.81" cy="54.97" r=".35" />
            <circle cx="76.81" cy="54.97" r=".35" />
            <circle cx="79.81" cy="52.97" r=".35" />
            <circle cx="77.81" cy="52.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aK)`}>
            <circle cx="79.81" cy="60.97" r=".35" />
            <circle cx="77.81" cy="60.97" r=".35" />
            <circle cx="80.81" cy="58.97" r=".35" />
            <circle cx="78.81" cy="58.97" r=".35" />
            <circle cx="76.81" cy="58.97" r=".35" />
            <circle cx="79.81" cy="56.97" r=".35" />
            <circle cx="77.81" cy="56.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aL)`}>
            <circle cx="79.81" cy="64.97" r=".35" />
            <circle cx="77.81" cy="64.97" r=".35" />
            <circle cx="80.81" cy="62.97" r=".35" />
            <circle cx="78.81" cy="62.97" r=".35" />
            <circle cx="76.81" cy="62.97" r=".35" />
            <circle cx="79.81" cy="60.97" r=".35" />
            <circle cx="77.81" cy="60.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aM)`}>
            <circle cx="79.81" cy="68.97" r=".35" />
            <circle cx="77.81" cy="68.97" r=".35" />
            <circle cx="80.81" cy="66.97" r=".35" />
            <circle cx="78.81" cy="66.97" r=".35" />
            <circle cx="76.81" cy="66.97" r=".35" />
            <circle cx="79.81" cy="64.97" r=".35" />
            <circle cx="77.81" cy="64.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aN)`}>
            <circle cx="79.81" cy="72.97" r=".35" />
            <circle cx="77.81" cy="72.97" r=".35" />
            <circle cx="80.81" cy="70.97" r=".35" />
            <circle cx="78.81" cy="70.97" r=".35" />
            <circle cx="76.81" cy="70.97" r=".35" />
            <circle cx="79.81" cy="68.97" r=".35" />
            <circle cx="77.81" cy="68.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aO)`}>
            <circle cx="79.81" cy="76.97" r=".35" />
            <circle cx="77.81" cy="76.97" r=".35" />
            <circle cx="80.81" cy="74.97" r=".35" />
            <circle cx="78.81" cy="74.97" r=".35" />
            <circle cx="76.81" cy="74.97" r=".35" />
            <circle cx="79.81" cy="72.97" r=".35" />
            <circle cx="77.81" cy="72.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aP)`}>
            <circle cx="79.81" cy="80.97" r=".35" />
            <circle cx="77.81" cy="80.97" r=".35" />
            <circle cx="80.81" cy="78.97" r=".35" />
            <circle cx="78.81" cy="78.97" r=".35" />
            <circle cx="76.81" cy="78.97" r=".35" />
            <circle cx="79.81" cy="76.97" r=".35" />
            <circle cx="77.81" cy="76.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aQ)`}>
            <circle cx="79.81" cy="84.97" r=".35" />
            <circle cx="77.81" cy="84.97" r=".35" />
            <circle cx="80.81" cy="82.97" r=".35" />
            <circle cx="78.81" cy="82.97" r=".35" />
            <circle cx="76.81" cy="82.97" r=".35" />
            <circle cx="79.81" cy="80.97" r=".35" />
            <circle cx="77.81" cy="80.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aR)`}>
            <circle cx="79.81" cy="88.97" r=".35" />
            <circle cx="77.81" cy="88.97" r=".35" />
            <circle cx="80.81" cy="86.97" r=".35" />
            <circle cx="78.81" cy="86.97" r=".35" />
            <circle cx="76.81" cy="86.97" r=".35" />
            <circle cx="79.81" cy="84.97" r=".35" />
            <circle cx="77.81" cy="84.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aS)`}>
            <circle cx="79.81" cy="92.97" r=".35" />
            <circle cx="77.81" cy="92.97" r=".35" />
            <circle cx="80.81" cy="90.97" r=".35" />
            <circle cx="78.81" cy="90.97" r=".35" />
            <circle cx="76.81" cy="90.97" r=".35" />
            <circle cx="79.81" cy="88.97" r=".35" />
            <circle cx="77.81" cy="88.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aT)`}>
            <circle cx="79.81" cy="96.97" r=".35" />
            <circle cx="77.81" cy="96.97" r=".35" />
            <circle cx="80.81" cy="94.97" r=".35" />
            <circle cx="78.81" cy="94.97" r=".35" />
            <circle cx="76.81" cy="94.97" r=".35" />
            <circle cx="79.81" cy="92.97" r=".35" />
            <circle cx="77.81" cy="92.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aU)`}>
            <circle cx="79.81" cy="100.97" r=".35" />
            <circle cx="77.81" cy="100.97" r=".35" />
            <circle cx="80.81" cy="98.97" r=".35" />
            <circle cx="78.81" cy="98.97" r=".35" />
            <circle cx="76.81" cy="98.97" r=".35" />
            <circle cx="79.81" cy="96.97" r=".35" />
            <circle cx="77.81" cy="96.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aV)`}>
            <circle cx="79.81" cy="104.97" r=".35" />
            <circle cx="77.81" cy="104.97" r=".35" />
            <circle cx="80.81" cy="102.97" r=".35" />
            <circle cx="78.81" cy="102.97" r=".35" />
            <circle cx="76.81" cy="102.97" r=".35" />
            <circle cx="79.81" cy="100.97" r=".35" />
            <circle cx="77.81" cy="100.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aW)`}>
            <circle cx="79.81" cy="108.97" r=".35" />
            <circle cx="77.81" cy="108.97" r=".35" />
            <circle cx="80.81" cy="106.97" r=".35" />
            <circle cx="78.81" cy="106.97" r=".35" />
            <circle cx="76.81" cy="106.97" r=".35" />
            <circle cx="79.81" cy="104.97" r=".35" />
            <circle cx="77.81" cy="104.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aX)`}>
            <circle cx="75.81" cy="32.97" r=".35" />
            <circle cx="73.81" cy="32.97" r=".35" />
            <circle cx="76.81" cy="30.97" r=".35" />
            <circle cx="74.81" cy="30.97" r=".35" />
            <circle cx="72.81" cy="30.97" r=".35" />
            <circle cx="75.81" cy="28.97" r=".35" />
            <circle cx="73.81" cy="28.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aY)`}>
            <circle cx="75.81" cy="36.97" r=".35" />
            <circle cx="73.81" cy="36.97" r=".35" />
            <circle cx="76.81" cy="34.97" r=".35" />
            <circle cx="74.81" cy="34.97" r=".35" />
            <circle cx="72.81" cy="34.97" r=".35" />
            <circle cx="75.81" cy="32.97" r=".35" />
            <circle cx="73.81" cy="32.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aZ)`}>
            <circle cx="75.81" cy="40.97" r=".35" />
            <circle cx="73.81" cy="40.97" r=".35" />
            <circle cx="76.81" cy="38.97" r=".35" />
            <circle cx="74.81" cy="38.97" r=".35" />
            <circle cx="72.81" cy="38.97" r=".35" />
            <circle cx="75.81" cy="36.97" r=".35" />
            <circle cx="73.81" cy="36.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a0)`}>
            <circle cx="75.81" cy="44.97" r=".35" />
            <circle cx="73.81" cy="44.97" r=".35" />
            <circle cx="76.81" cy="42.97" r=".35" />
            <circle cx="74.81" cy="42.97" r=".35" />
            <circle cx="72.81" cy="42.97" r=".35" />
            <circle cx="75.81" cy="40.97" r=".35" />
            <circle cx="73.81" cy="40.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a1)`}>
            <circle cx="75.81" cy="48.97" r=".35" />
            <circle cx="73.81" cy="48.97" r=".35" />
            <circle cx="76.81" cy="46.97" r=".35" />
            <circle cx="74.81" cy="46.97" r=".35" />
            <circle cx="72.81" cy="46.97" r=".35" />
            <circle cx="75.81" cy="44.97" r=".35" />
            <circle cx="73.81" cy="44.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a2)`}>
            <circle cx="75.81" cy="52.97" r=".35" />
            <circle cx="73.81" cy="52.97" r=".35" />
            <circle cx="76.81" cy="50.97" r=".35" />
            <circle cx="74.81" cy="50.97" r=".35" />
            <circle cx="72.81" cy="50.97" r=".35" />
            <circle cx="75.81" cy="48.97" r=".35" />
            <circle cx="73.81" cy="48.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a3)`}>
            <circle cx="75.81" cy="56.97" r=".35" />
            <circle cx="73.81" cy="56.97" r=".35" />
            <circle cx="76.81" cy="54.97" r=".35" />
            <circle cx="74.81" cy="54.97" r=".35" />
            <circle cx="72.81" cy="54.97" r=".35" />
            <circle cx="75.81" cy="52.97" r=".35" />
            <circle cx="73.81" cy="52.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a4)`}>
            <circle cx="75.81" cy="60.97" r=".35" />
            <circle cx="73.81" cy="60.97" r=".35" />
            <circle cx="76.81" cy="58.97" r=".35" />
            <circle cx="74.81" cy="58.97" r=".35" />
            <circle cx="72.81" cy="58.97" r=".35" />
            <circle cx="75.81" cy="56.97" r=".35" />
            <circle cx="73.81" cy="56.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a5)`}>
            <circle cx="75.81" cy="64.97" r=".35" />
            <circle cx="73.81" cy="64.97" r=".35" />
            <circle cx="76.81" cy="62.97" r=".35" />
            <circle cx="74.81" cy="62.97" r=".35" />
            <circle cx="72.81" cy="62.97" r=".35" />
            <circle cx="75.81" cy="60.97" r=".35" />
            <circle cx="73.81" cy="60.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a6)`}>
            <circle cx="75.81" cy="68.97" r=".35" />
            <circle cx="73.81" cy="68.97" r=".35" />
            <circle cx="76.81" cy="66.97" r=".35" />
            <circle cx="74.81" cy="66.97" r=".35" />
            <circle cx="72.81" cy="66.97" r=".35" />
            <circle cx="75.81" cy="64.97" r=".35" />
            <circle cx="73.81" cy="64.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a7)`}>
            <circle cx="75.81" cy="72.97" r=".35" />
            <circle cx="73.81" cy="72.97" r=".35" />
            <circle cx="76.81" cy="70.97" r=".35" />
            <circle cx="74.81" cy="70.97" r=".35" />
            <circle cx="72.81" cy="70.97" r=".35" />
            <circle cx="75.81" cy="68.97" r=".35" />
            <circle cx="73.81" cy="68.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a8)`}>
            <circle cx="75.81" cy="76.97" r=".35" />
            <circle cx="73.81" cy="76.97" r=".35" />
            <circle cx="76.81" cy="74.97" r=".35" />
            <circle cx="74.81" cy="74.97" r=".35" />
            <circle cx="72.81" cy="74.97" r=".35" />
            <circle cx="75.81" cy="72.97" r=".35" />
            <circle cx="73.81" cy="72.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a9)`}>
            <circle cx="75.81" cy="80.97" r=".35" />
            <circle cx="73.81" cy="80.97" r=".35" />
            <circle cx="76.81" cy="78.97" r=".35" />
            <circle cx="74.81" cy="78.97" r=".35" />
            <circle cx="72.81" cy="78.97" r=".35" />
            <circle cx="75.81" cy="76.97" r=".35" />
            <circle cx="73.81" cy="76.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ba)`}>
            <circle cx="75.81" cy="84.97" r=".35" />
            <circle cx="73.81" cy="84.97" r=".35" />
            <circle cx="76.81" cy="82.97" r=".35" />
            <circle cx="74.81" cy="82.97" r=".35" />
            <circle cx="72.81" cy="82.97" r=".35" />
            <circle cx="75.81" cy="80.97" r=".35" />
            <circle cx="73.81" cy="80.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bb)`}>
            <circle cx="75.81" cy="88.97" r=".35" />
            <circle cx="73.81" cy="88.97" r=".35" />
            <circle cx="76.81" cy="86.97" r=".35" />
            <circle cx="74.81" cy="86.97" r=".35" />
            <circle cx="72.81" cy="86.97" r=".35" />
            <circle cx="75.81" cy="84.97" r=".35" />
            <circle cx="73.81" cy="84.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bc)`}>
            <circle cx="75.81" cy="92.97" r=".35" />
            <circle cx="73.81" cy="92.97" r=".35" />
            <circle cx="76.81" cy="90.97" r=".35" />
            <circle cx="74.81" cy="90.97" r=".35" />
            <circle cx="72.81" cy="90.97" r=".35" />
            <circle cx="75.81" cy="88.97" r=".35" />
            <circle cx="73.81" cy="88.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bd)`}>
            <circle cx="75.81" cy="96.97" r=".35" />
            <circle cx="73.81" cy="96.97" r=".35" />
            <circle cx="76.81" cy="94.97" r=".35" />
            <circle cx="74.81" cy="94.97" r=".35" />
            <circle cx="72.81" cy="94.97" r=".35" />
            <circle cx="75.81" cy="92.97" r=".35" />
            <circle cx="73.81" cy="92.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-be)`}>
            <circle cx="75.81" cy="100.97" r=".35" />
            <circle cx="73.81" cy="100.97" r=".35" />
            <circle cx="76.81" cy="98.97" r=".35" />
            <circle cx="74.81" cy="98.97" r=".35" />
            <circle cx="72.81" cy="98.97" r=".35" />
            <circle cx="75.81" cy="96.97" r=".35" />
            <circle cx="73.81" cy="96.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bf)`}>
            <circle cx="75.81" cy="104.97" r=".35" />
            <circle cx="73.81" cy="104.97" r=".35" />
            <circle cx="76.81" cy="102.97" r=".35" />
            <circle cx="74.81" cy="102.97" r=".35" />
            <circle cx="72.81" cy="102.97" r=".35" />
            <circle cx="75.81" cy="100.97" r=".35" />
            <circle cx="73.81" cy="100.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bg)`}>
            <circle cx="75.81" cy="108.97" r=".35" />
            <circle cx="73.81" cy="108.97" r=".35" />
            <circle cx="76.81" cy="106.97" r=".35" />
            <circle cx="74.81" cy="106.97" r=".35" />
            <circle cx="72.81" cy="106.97" r=".35" />
            <circle cx="75.81" cy="104.97" r=".35" />
            <circle cx="73.81" cy="104.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bh)`}>
            <circle cx="71.81" cy="32.97" r=".35" />
            <circle cx="69.81" cy="32.97" r=".35" />
            <circle cx="72.81" cy="30.97" r=".35" />
            <circle cx="70.81" cy="30.97" r=".35" />
            <circle cx="68.81" cy="30.97" r=".35" />
            <circle cx="71.81" cy="28.97" r=".35" />
            <circle cx="69.81" cy="28.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bi)`}>
            <circle cx="71.81" cy="36.97" r=".35" />
            <circle cx="69.81" cy="36.97" r=".35" />
            <circle cx="72.81" cy="34.97" r=".35" />
            <circle cx="70.81" cy="34.97" r=".35" />
            <circle cx="68.81" cy="34.97" r=".35" />
            <circle cx="71.81" cy="32.97" r=".35" />
            <circle cx="69.81" cy="32.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bj)`}>
            <circle cx="71.81" cy="40.97" r=".35" />
            <circle cx="69.81" cy="40.97" r=".35" />
            <circle cx="72.81" cy="38.97" r=".35" />
            <circle cx="70.81" cy="38.97" r=".35" />
            <circle cx="68.81" cy="38.97" r=".35" />
            <circle cx="71.81" cy="36.97" r=".35" />
            <circle cx="69.81" cy="36.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bk)`}>
            <circle cx="71.81" cy="44.97" r=".35" />
            <circle cx="69.81" cy="44.97" r=".35" />
            <circle cx="72.81" cy="42.97" r=".35" />
            <circle cx="70.81" cy="42.97" r=".35" />
            <circle cx="68.81" cy="42.97" r=".35" />
            <circle cx="71.81" cy="40.97" r=".35" />
            <circle cx="69.81" cy="40.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bl)`}>
            <circle cx="71.81" cy="48.97" r=".35" />
            <circle cx="69.81" cy="48.97" r=".35" />
            <circle cx="72.81" cy="46.97" r=".35" />
            <circle cx="70.81" cy="46.97" r=".35" />
            <circle cx="68.81" cy="46.97" r=".35" />
            <circle cx="71.81" cy="44.97" r=".35" />
            <circle cx="69.81" cy="44.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bm)`}>
            <circle cx="71.81" cy="52.97" r=".35" />
            <circle cx="69.81" cy="52.97" r=".35" />
            <circle cx="72.81" cy="50.97" r=".35" />
            <circle cx="70.81" cy="50.97" r=".35" />
            <circle cx="68.81" cy="50.97" r=".35" />
            <circle cx="71.81" cy="48.97" r=".35" />
            <circle cx="69.81" cy="48.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bn)`}>
            <circle cx="71.81" cy="56.97" r=".35" />
            <circle cx="69.81" cy="56.97" r=".35" />
            <circle cx="72.81" cy="54.97" r=".35" />
            <circle cx="70.81" cy="54.97" r=".35" />
            <circle cx="68.81" cy="54.97" r=".35" />
            <circle cx="71.81" cy="52.97" r=".35" />
            <circle cx="69.81" cy="52.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bo)`}>
            <circle cx="71.81" cy="60.97" r=".35" />
            <circle cx="69.81" cy="60.97" r=".35" />
            <circle cx="72.81" cy="58.97" r=".35" />
            <circle cx="70.81" cy="58.97" r=".35" />
            <circle cx="68.81" cy="58.97" r=".35" />
            <circle cx="71.81" cy="56.97" r=".35" />
            <circle cx="69.81" cy="56.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bp)`}>
            <circle cx="71.81" cy="64.97" r=".35" />
            <circle cx="69.81" cy="64.97" r=".35" />
            <circle cx="72.81" cy="62.97" r=".35" />
            <circle cx="70.81" cy="62.97" r=".35" />
            <circle cx="68.81" cy="62.97" r=".35" />
            <circle cx="71.81" cy="60.97" r=".35" />
            <circle cx="69.81" cy="60.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bq)`}>
            <circle cx="71.81" cy="68.97" r=".35" />
            <circle cx="69.81" cy="68.97" r=".35" />
            <circle cx="72.81" cy="66.97" r=".35" />
            <circle cx="70.81" cy="66.97" r=".35" />
            <circle cx="68.81" cy="66.97" r=".35" />
            <circle cx="71.81" cy="64.97" r=".35" />
            <circle cx="69.81" cy="64.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-br)`}>
            <circle cx="71.81" cy="72.97" r=".35" />
            <circle cx="69.81" cy="72.97" r=".35" />
            <circle cx="72.81" cy="70.97" r=".35" />
            <circle cx="70.81" cy="70.97" r=".35" />
            <circle cx="68.81" cy="70.97" r=".35" />
            <circle cx="71.81" cy="68.97" r=".35" />
            <circle cx="69.81" cy="68.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bs)`}>
            <circle cx="71.81" cy="76.97" r=".35" />
            <circle cx="69.81" cy="76.97" r=".35" />
            <circle cx="72.81" cy="74.97" r=".35" />
            <circle cx="70.81" cy="74.97" r=".35" />
            <circle cx="68.81" cy="74.97" r=".35" />
            <circle cx="71.81" cy="72.97" r=".35" />
            <circle cx="69.81" cy="72.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bt)`}>
            <circle cx="71.81" cy="80.97" r=".35" />
            <circle cx="69.81" cy="80.97" r=".35" />
            <circle cx="72.81" cy="78.97" r=".35" />
            <circle cx="70.81" cy="78.97" r=".35" />
            <circle cx="68.81" cy="78.97" r=".35" />
            <circle cx="71.81" cy="76.97" r=".35" />
            <circle cx="69.81" cy="76.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bu)`}>
            <circle cx="71.81" cy="84.97" r=".35" />
            <circle cx="69.81" cy="84.97" r=".35" />
            <circle cx="72.81" cy="82.97" r=".35" />
            <circle cx="70.81" cy="82.97" r=".35" />
            <circle cx="68.81" cy="82.97" r=".35" />
            <circle cx="71.81" cy="80.97" r=".35" />
            <circle cx="69.81" cy="80.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bv)`}>
            <circle cx="71.81" cy="88.97" r=".35" />
            <circle cx="69.81" cy="88.97" r=".35" />
            <circle cx="72.81" cy="86.97" r=".35" />
            <circle cx="70.81" cy="86.97" r=".35" />
            <circle cx="68.81" cy="86.97" r=".35" />
            <circle cx="71.81" cy="84.97" r=".35" />
            <circle cx="69.81" cy="84.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bw)`}>
            <circle cx="71.81" cy="92.97" r=".35" />
            <circle cx="69.81" cy="92.97" r=".35" />
            <circle cx="72.81" cy="90.97" r=".35" />
            <circle cx="70.81" cy="90.97" r=".35" />
            <circle cx="68.81" cy="90.97" r=".35" />
            <circle cx="71.81" cy="88.97" r=".35" />
            <circle cx="69.81" cy="88.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bx)`}>
            <circle cx="71.81" cy="96.97" r=".35" />
            <circle cx="69.81" cy="96.97" r=".35" />
            <circle cx="72.81" cy="94.97" r=".35" />
            <circle cx="70.81" cy="94.97" r=".35" />
            <circle cx="68.81" cy="94.97" r=".35" />
            <circle cx="71.81" cy="92.97" r=".35" />
            <circle cx="69.81" cy="92.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-by)`}>
            <circle cx="71.81" cy="100.97" r=".35" />
            <circle cx="69.81" cy="100.97" r=".35" />
            <circle cx="72.81" cy="98.97" r=".35" />
            <circle cx="70.81" cy="98.97" r=".35" />
            <circle cx="68.81" cy="98.97" r=".35" />
            <circle cx="71.81" cy="96.97" r=".35" />
            <circle cx="69.81" cy="96.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bz)`}>
            <circle cx="71.81" cy="104.97" r=".35" />
            <circle cx="69.81" cy="104.97" r=".35" />
            <circle cx="72.81" cy="102.97" r=".35" />
            <circle cx="70.81" cy="102.97" r=".35" />
            <circle cx="68.81" cy="102.97" r=".35" />
            <circle cx="71.81" cy="100.97" r=".35" />
            <circle cx="69.81" cy="100.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bA)`}>
            <circle cx="71.81" cy="108.97" r=".35" />
            <circle cx="69.81" cy="108.97" r=".35" />
            <circle cx="72.81" cy="106.97" r=".35" />
            <circle cx="70.81" cy="106.97" r=".35" />
            <circle cx="68.81" cy="106.97" r=".35" />
            <circle cx="71.81" cy="104.97" r=".35" />
            <circle cx="69.81" cy="104.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bB)`}>
            <circle cx="67.81" cy="32.97" r=".35" />
            <circle cx="65.81" cy="32.97" r=".35" />
            <circle cx="68.81" cy="30.97" r=".35" />
            <circle cx="66.81" cy="30.97" r=".35" />
            <circle cx="64.81" cy="30.97" r=".35" />
            <circle cx="67.81" cy="28.97" r=".35" />
            <circle cx="65.81" cy="28.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bC)`}>
            <circle cx="67.81" cy="36.97" r=".35" />
            <circle cx="65.81" cy="36.97" r=".35" />
            <circle cx="68.81" cy="34.97" r=".35" />
            <circle cx="66.81" cy="34.97" r=".35" />
            <circle cx="64.81" cy="34.97" r=".35" />
            <circle cx="67.81" cy="32.97" r=".35" />
            <circle cx="65.81" cy="32.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bD)`}>
            <circle cx="67.81" cy="40.97" r=".35" />
            <circle cx="65.81" cy="40.97" r=".35" />
            <circle cx="68.81" cy="38.97" r=".35" />
            <circle cx="66.81" cy="38.97" r=".35" />
            <circle cx="64.81" cy="38.97" r=".35" />
            <circle cx="67.81" cy="36.97" r=".35" />
            <circle cx="65.81" cy="36.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bE)`}>
            <circle cx="67.81" cy="44.97" r=".35" />
            <circle cx="65.81" cy="44.97" r=".35" />
            <circle cx="68.81" cy="42.97" r=".35" />
            <circle cx="66.81" cy="42.97" r=".35" />
            <circle cx="64.81" cy="42.97" r=".35" />
            <circle cx="67.81" cy="40.97" r=".35" />
            <circle cx="65.81" cy="40.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bF)`}>
            <circle cx="67.81" cy="48.97" r=".35" />
            <circle cx="65.81" cy="48.97" r=".35" />
            <circle cx="68.81" cy="46.97" r=".35" />
            <circle cx="66.81" cy="46.97" r=".35" />
            <circle cx="64.81" cy="46.97" r=".35" />
            <circle cx="67.81" cy="44.97" r=".35" />
            <circle cx="65.81" cy="44.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bG)`}>
            <circle cx="67.81" cy="52.97" r=".35" />
            <circle cx="65.81" cy="52.97" r=".35" />
            <circle cx="68.81" cy="50.97" r=".35" />
            <circle cx="66.81" cy="50.97" r=".35" />
            <circle cx="64.81" cy="50.97" r=".35" />
            <circle cx="67.81" cy="48.97" r=".35" />
            <circle cx="65.81" cy="48.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bH)`}>
            <circle cx="67.81" cy="56.97" r=".35" />
            <circle cx="65.81" cy="56.97" r=".35" />
            <circle cx="68.81" cy="54.97" r=".35" />
            <circle cx="66.81" cy="54.97" r=".35" />
            <circle cx="64.81" cy="54.97" r=".35" />
            <circle cx="67.81" cy="52.97" r=".35" />
            <circle cx="65.81" cy="52.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bI)`}>
            <circle cx="67.81" cy="60.97" r=".35" />
            <circle cx="65.81" cy="60.97" r=".35" />
            <circle cx="68.81" cy="58.97" r=".35" />
            <circle cx="66.81" cy="58.97" r=".35" />
            <circle cx="64.81" cy="58.97" r=".35" />
            <circle cx="67.81" cy="56.97" r=".35" />
            <circle cx="65.81" cy="56.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bJ)`}>
            <circle cx="67.81" cy="64.97" r=".35" />
            <circle cx="65.81" cy="64.97" r=".35" />
            <circle cx="68.81" cy="62.97" r=".35" />
            <circle cx="66.81" cy="62.97" r=".35" />
            <circle cx="64.81" cy="62.97" r=".35" />
            <circle cx="67.81" cy="60.97" r=".35" />
            <circle cx="65.81" cy="60.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bK)`}>
            <circle cx="67.81" cy="68.97" r=".35" />
            <circle cx="65.81" cy="68.97" r=".35" />
            <circle cx="68.81" cy="66.97" r=".35" />
            <circle cx="66.81" cy="66.97" r=".35" />
            <circle cx="64.81" cy="66.97" r=".35" />
            <circle cx="67.81" cy="64.97" r=".35" />
            <circle cx="65.81" cy="64.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bL)`}>
            <circle cx="67.81" cy="72.97" r=".35" />
            <circle cx="65.81" cy="72.97" r=".35" />
            <circle cx="68.81" cy="70.97" r=".35" />
            <circle cx="66.81" cy="70.97" r=".35" />
            <circle cx="64.81" cy="70.97" r=".35" />
            <circle cx="67.81" cy="68.97" r=".35" />
            <circle cx="65.81" cy="68.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bM)`}>
            <circle cx="67.81" cy="76.97" r=".35" />
            <circle cx="65.81" cy="76.97" r=".35" />
            <circle cx="68.81" cy="74.97" r=".35" />
            <circle cx="66.81" cy="74.97" r=".35" />
            <circle cx="64.81" cy="74.97" r=".35" />
            <circle cx="67.81" cy="72.97" r=".35" />
            <circle cx="65.81" cy="72.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bN)`}>
            <circle cx="67.81" cy="80.97" r=".35" />
            <circle cx="65.81" cy="80.97" r=".35" />
            <circle cx="68.81" cy="78.97" r=".35" />
            <circle cx="66.81" cy="78.97" r=".35" />
            <circle cx="64.81" cy="78.97" r=".35" />
            <circle cx="67.81" cy="76.97" r=".35" />
            <circle cx="65.81" cy="76.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bO)`}>
            <circle cx="67.81" cy="84.97" r=".35" />
            <circle cx="65.81" cy="84.97" r=".35" />
            <circle cx="68.81" cy="82.97" r=".35" />
            <circle cx="66.81" cy="82.97" r=".35" />
            <circle cx="64.81" cy="82.97" r=".35" />
            <circle cx="67.81" cy="80.97" r=".35" />
            <circle cx="65.81" cy="80.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bP)`}>
            <circle cx="67.81" cy="88.97" r=".35" />
            <circle cx="65.81" cy="88.97" r=".35" />
            <circle cx="68.81" cy="86.97" r=".35" />
            <circle cx="66.81" cy="86.97" r=".35" />
            <circle cx="64.81" cy="86.97" r=".35" />
            <circle cx="67.81" cy="84.97" r=".35" />
            <circle cx="65.81" cy="84.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bQ)`}>
            <circle cx="67.81" cy="92.97" r=".35" />
            <circle cx="65.81" cy="92.97" r=".35" />
            <circle cx="68.81" cy="90.97" r=".35" />
            <circle cx="66.81" cy="90.97" r=".35" />
            <circle cx="64.81" cy="90.97" r=".35" />
            <circle cx="67.81" cy="88.97" r=".35" />
            <circle cx="65.81" cy="88.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bR)`}>
            <circle cx="67.81" cy="96.97" r=".35" />
            <circle cx="65.81" cy="96.97" r=".35" />
            <circle cx="68.81" cy="94.97" r=".35" />
            <circle cx="66.81" cy="94.97" r=".35" />
            <circle cx="64.81" cy="94.97" r=".35" />
            <circle cx="67.81" cy="92.97" r=".35" />
            <circle cx="65.81" cy="92.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bS)`}>
            <circle cx="67.81" cy="100.97" r=".35" />
            <circle cx="65.81" cy="100.97" r=".35" />
            <circle cx="68.81" cy="98.97" r=".35" />
            <circle cx="66.81" cy="98.97" r=".35" />
            <circle cx="64.81" cy="98.97" r=".35" />
            <circle cx="67.81" cy="96.97" r=".35" />
            <circle cx="65.81" cy="96.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bT)`}>
            <circle cx="67.81" cy="104.97" r=".35" />
            <circle cx="65.81" cy="104.97" r=".35" />
            <circle cx="68.81" cy="102.97" r=".35" />
            <circle cx="66.81" cy="102.97" r=".35" />
            <circle cx="64.81" cy="102.97" r=".35" />
            <circle cx="67.81" cy="100.97" r=".35" />
            <circle cx="65.81" cy="100.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bU)`}>
            <circle cx="67.81" cy="108.97" r=".35" />
            <circle cx="65.81" cy="108.97" r=".35" />
            <circle cx="68.81" cy="106.97" r=".35" />
            <circle cx="66.81" cy="106.97" r=".35" />
            <circle cx="64.81" cy="106.97" r=".35" />
            <circle cx="67.81" cy="104.97" r=".35" />
            <circle cx="65.81" cy="104.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bV)`}>
            <circle cx="63.81" cy="32.97" r=".35" />
            <circle cx="61.81" cy="32.97" r=".35" />
            <circle cx="64.81" cy="30.97" r=".35" />
            <circle cx="62.81" cy="30.97" r=".35" />
            <circle cx="60.81" cy="30.97" r=".35" />
            <circle cx="63.81" cy="28.97" r=".35" />
            <circle cx="61.81" cy="28.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bW)`}>
            <circle cx="63.81" cy="36.97" r=".35" />
            <circle cx="61.81" cy="36.97" r=".35" />
            <circle cx="64.81" cy="34.97" r=".35" />
            <circle cx="62.81" cy="34.97" r=".35" />
            <circle cx="60.81" cy="34.97" r=".35" />
            <circle cx="63.81" cy="32.97" r=".35" />
            <circle cx="61.81" cy="32.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bX)`}>
            <circle cx="63.81" cy="40.97" r=".35" />
            <circle cx="61.81" cy="40.97" r=".35" />
            <circle cx="64.81" cy="38.97" r=".35" />
            <circle cx="62.81" cy="38.97" r=".35" />
            <circle cx="60.81" cy="38.97" r=".35" />
            <circle cx="63.81" cy="36.97" r=".35" />
            <circle cx="61.81" cy="36.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bY)`}>
            <circle cx="63.81" cy="44.97" r=".35" />
            <circle cx="61.81" cy="44.97" r=".35" />
            <circle cx="64.81" cy="42.97" r=".35" />
            <circle cx="62.81" cy="42.97" r=".35" />
            <circle cx="60.81" cy="42.97" r=".35" />
            <circle cx="63.81" cy="40.97" r=".35" />
            <circle cx="61.81" cy="40.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bZ)`}>
            <circle cx="63.81" cy="48.97" r=".35" />
            <circle cx="61.81" cy="48.97" r=".35" />
            <circle cx="64.81" cy="46.97" r=".35" />
            <circle cx="62.81" cy="46.97" r=".35" />
            <circle cx="60.81" cy="46.97" r=".35" />
            <circle cx="63.81" cy="44.97" r=".35" />
            <circle cx="61.81" cy="44.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b0)`}>
            <circle cx="63.81" cy="52.97" r=".35" />
            <circle cx="61.81" cy="52.97" r=".35" />
            <circle cx="64.81" cy="50.97" r=".35" />
            <circle cx="62.81" cy="50.97" r=".35" />
            <circle cx="60.81" cy="50.97" r=".35" />
            <circle cx="63.81" cy="48.97" r=".35" />
            <circle cx="61.81" cy="48.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b1)`}>
            <circle cx="63.81" cy="56.97" r=".35" />
            <circle cx="61.81" cy="56.97" r=".35" />
            <circle cx="64.81" cy="54.97" r=".35" />
            <circle cx="62.81" cy="54.97" r=".35" />
            <circle cx="60.81" cy="54.97" r=".35" />
            <circle cx="63.81" cy="52.97" r=".35" />
            <circle cx="61.81" cy="52.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b2)`}>
            <circle cx="63.81" cy="60.97" r=".35" />
            <circle cx="61.81" cy="60.97" r=".35" />
            <circle cx="64.81" cy="58.97" r=".35" />
            <circle cx="62.81" cy="58.97" r=".35" />
            <circle cx="60.81" cy="58.97" r=".35" />
            <circle cx="63.81" cy="56.97" r=".35" />
            <circle cx="61.81" cy="56.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b3)`}>
            <circle cx="63.81" cy="64.97" r=".35" />
            <circle cx="61.81" cy="64.97" r=".35" />
            <circle cx="64.81" cy="62.97" r=".35" />
            <circle cx="62.81" cy="62.97" r=".35" />
            <circle cx="60.81" cy="62.97" r=".35" />
            <circle cx="63.81" cy="60.97" r=".35" />
            <circle cx="61.81" cy="60.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b4)`}>
            <circle cx="63.81" cy="68.97" r=".35" />
            <circle cx="61.81" cy="68.97" r=".35" />
            <circle cx="64.81" cy="66.97" r=".35" />
            <circle cx="62.81" cy="66.97" r=".35" />
            <circle cx="60.81" cy="66.97" r=".35" />
            <circle cx="63.81" cy="64.97" r=".35" />
            <circle cx="61.81" cy="64.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b5)`}>
            <circle cx="63.81" cy="72.97" r=".35" />
            <circle cx="61.81" cy="72.97" r=".35" />
            <circle cx="64.81" cy="70.97" r=".35" />
            <circle cx="62.81" cy="70.97" r=".35" />
            <circle cx="60.81" cy="70.97" r=".35" />
            <circle cx="63.81" cy="68.97" r=".35" />
            <circle cx="61.81" cy="68.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b6)`}>
            <circle cx="63.81" cy="76.97" r=".35" />
            <circle cx="61.81" cy="76.97" r=".35" />
            <circle cx="64.81" cy="74.97" r=".35" />
            <circle cx="62.81" cy="74.97" r=".35" />
            <circle cx="60.81" cy="74.97" r=".35" />
            <circle cx="63.81" cy="72.97" r=".35" />
            <circle cx="61.81" cy="72.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b7)`}>
            <circle cx="63.81" cy="80.97" r=".35" />
            <circle cx="61.81" cy="80.97" r=".35" />
            <circle cx="64.81" cy="78.97" r=".35" />
            <circle cx="62.81" cy="78.97" r=".35" />
            <circle cx="60.81" cy="78.97" r=".35" />
            <circle cx="63.81" cy="76.97" r=".35" />
            <circle cx="61.81" cy="76.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b8)`}>
            <circle cx="63.81" cy="84.97" r=".35" />
            <circle cx="61.81" cy="84.97" r=".35" />
            <circle cx="64.81" cy="82.97" r=".35" />
            <circle cx="62.81" cy="82.97" r=".35" />
            <circle cx="60.81" cy="82.97" r=".35" />
            <circle cx="63.81" cy="80.97" r=".35" />
            <circle cx="61.81" cy="80.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b9)`}>
            <circle cx="63.81" cy="88.97" r=".35" />
            <circle cx="61.81" cy="88.97" r=".35" />
            <circle cx="64.81" cy="86.97" r=".35" />
            <circle cx="62.81" cy="86.97" r=".35" />
            <circle cx="60.81" cy="86.97" r=".35" />
            <circle cx="63.81" cy="84.97" r=".35" />
            <circle cx="61.81" cy="84.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ca)`}>
            <circle cx="63.81" cy="92.97" r=".35" />
            <circle cx="61.81" cy="92.97" r=".35" />
            <circle cx="64.81" cy="90.97" r=".35" />
            <circle cx="62.81" cy="90.97" r=".35" />
            <circle cx="60.81" cy="90.97" r=".35" />
            <circle cx="63.81" cy="88.97" r=".35" />
            <circle cx="61.81" cy="88.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cb)`}>
            <circle cx="63.81" cy="96.97" r=".35" />
            <circle cx="61.81" cy="96.97" r=".35" />
            <circle cx="64.81" cy="94.97" r=".35" />
            <circle cx="62.81" cy="94.97" r=".35" />
            <circle cx="60.81" cy="94.97" r=".35" />
            <circle cx="63.81" cy="92.97" r=".35" />
            <circle cx="61.81" cy="92.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cc)`}>
            <circle cx="63.81" cy="100.97" r=".35" />
            <circle cx="61.81" cy="100.97" r=".35" />
            <circle cx="64.81" cy="98.97" r=".35" />
            <circle cx="62.81" cy="98.97" r=".35" />
            <circle cx="60.81" cy="98.97" r=".35" />
            <circle cx="63.81" cy="96.97" r=".35" />
            <circle cx="61.81" cy="96.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cd)`}>
            <circle cx="63.81" cy="104.97" r=".35" />
            <circle cx="61.81" cy="104.97" r=".35" />
            <circle cx="64.81" cy="102.97" r=".35" />
            <circle cx="62.81" cy="102.97" r=".35" />
            <circle cx="60.81" cy="102.97" r=".35" />
            <circle cx="63.81" cy="100.97" r=".35" />
            <circle cx="61.81" cy="100.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ce)`}>
            <circle cx="63.81" cy="108.97" r=".35" />
            <circle cx="61.81" cy="108.97" r=".35" />
            <circle cx="64.81" cy="106.97" r=".35" />
            <circle cx="62.81" cy="106.97" r=".35" />
            <circle cx="60.81" cy="106.97" r=".35" />
            <circle cx="63.81" cy="104.97" r=".35" />
            <circle cx="61.81" cy="104.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cf)`}>
            <circle cx="59.81" cy="32.97" r=".35" />
            <circle cx="57.81" cy="32.97" r=".35" />
            <circle cx="60.81" cy="30.97" r=".35" />
            <circle cx="58.81" cy="30.97" r=".35" />
            <circle cx="56.81" cy="30.97" r=".35" />
            <circle cx="59.81" cy="28.97" r=".35" />
            <circle cx="57.81" cy="28.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cg)`}>
            <circle cx="59.81" cy="36.97" r=".35" />
            <circle cx="57.81" cy="36.97" r=".35" />
            <circle cx="60.81" cy="34.97" r=".35" />
            <circle cx="58.81" cy="34.97" r=".35" />
            <circle cx="56.81" cy="34.97" r=".35" />
            <circle cx="59.81" cy="32.97" r=".35" />
            <circle cx="57.81" cy="32.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ch)`}>
            <circle cx="59.81" cy="40.97" r=".35" />
            <circle cx="57.81" cy="40.97" r=".35" />
            <circle cx="60.81" cy="38.97" r=".35" />
            <circle cx="58.81" cy="38.97" r=".35" />
            <circle cx="56.81" cy="38.97" r=".35" />
            <circle cx="59.81" cy="36.97" r=".35" />
            <circle cx="57.81" cy="36.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ci)`}>
            <circle cx="59.81" cy="44.97" r=".35" />
            <circle cx="57.81" cy="44.97" r=".35" />
            <circle cx="60.81" cy="42.97" r=".35" />
            <circle cx="58.81" cy="42.97" r=".35" />
            <circle cx="56.81" cy="42.97" r=".35" />
            <circle cx="59.81" cy="40.97" r=".35" />
            <circle cx="57.81" cy="40.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cj)`}>
            <circle cx="59.81" cy="48.97" r=".35" />
            <circle cx="57.81" cy="48.97" r=".35" />
            <circle cx="60.81" cy="46.97" r=".35" />
            <circle cx="58.81" cy="46.97" r=".35" />
            <circle cx="56.81" cy="46.97" r=".35" />
            <circle cx="59.81" cy="44.97" r=".35" />
            <circle cx="57.81" cy="44.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ck)`}>
            <circle cx="59.81" cy="52.97" r=".35" />
            <circle cx="57.81" cy="52.97" r=".35" />
            <circle cx="60.81" cy="50.97" r=".35" />
            <circle cx="58.81" cy="50.97" r=".35" />
            <circle cx="56.81" cy="50.97" r=".35" />
            <circle cx="59.81" cy="48.97" r=".35" />
            <circle cx="57.81" cy="48.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cl)`}>
            <circle cx="59.81" cy="56.97" r=".35" />
            <circle cx="57.81" cy="56.97" r=".35" />
            <circle cx="60.81" cy="54.97" r=".35" />
            <circle cx="58.81" cy="54.97" r=".35" />
            <circle cx="56.81" cy="54.97" r=".35" />
            <circle cx="59.81" cy="52.97" r=".35" />
            <circle cx="57.81" cy="52.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cm)`}>
            <circle cx="59.81" cy="60.97" r=".35" />
            <circle cx="57.81" cy="60.97" r=".35" />
            <circle cx="60.81" cy="58.97" r=".35" />
            <circle cx="58.81" cy="58.97" r=".35" />
            <circle cx="56.81" cy="58.97" r=".35" />
            <circle cx="59.81" cy="56.97" r=".35" />
            <circle cx="57.81" cy="56.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cn)`}>
            <circle cx="59.81" cy="64.97" r=".35" />
            <circle cx="57.81" cy="64.97" r=".35" />
            <circle cx="60.81" cy="62.97" r=".35" />
            <circle cx="58.81" cy="62.97" r=".35" />
            <circle cx="56.81" cy="62.97" r=".35" />
            <circle cx="59.81" cy="60.97" r=".35" />
            <circle cx="57.81" cy="60.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-co)`}>
            <circle cx="59.81" cy="68.97" r=".35" />
            <circle cx="57.81" cy="68.97" r=".35" />
            <circle cx="60.81" cy="66.97" r=".35" />
            <circle cx="58.81" cy="66.97" r=".35" />
            <circle cx="56.81" cy="66.97" r=".35" />
            <circle cx="59.81" cy="64.97" r=".35" />
            <circle cx="57.81" cy="64.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cp)`}>
            <circle cx="59.81" cy="72.97" r=".35" />
            <circle cx="57.81" cy="72.97" r=".35" />
            <circle cx="60.81" cy="70.97" r=".35" />
            <circle cx="58.81" cy="70.97" r=".35" />
            <circle cx="56.81" cy="70.97" r=".35" />
            <circle cx="59.81" cy="68.97" r=".35" />
            <circle cx="57.81" cy="68.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cq)`}>
            <circle cx="59.81" cy="76.97" r=".35" />
            <circle cx="57.81" cy="76.97" r=".35" />
            <circle cx="60.81" cy="74.97" r=".35" />
            <circle cx="58.81" cy="74.97" r=".35" />
            <circle cx="56.81" cy="74.97" r=".35" />
            <circle cx="59.81" cy="72.97" r=".35" />
            <circle cx="57.81" cy="72.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cr)`}>
            <circle cx="59.81" cy="80.97" r=".35" />
            <circle cx="57.81" cy="80.97" r=".35" />
            <circle cx="60.81" cy="78.97" r=".35" />
            <circle cx="58.81" cy="78.97" r=".35" />
            <circle cx="56.81" cy="78.97" r=".35" />
            <circle cx="59.81" cy="76.97" r=".35" />
            <circle cx="57.81" cy="76.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cs)`}>
            <circle cx="59.81" cy="84.97" r=".35" />
            <circle cx="57.81" cy="84.97" r=".35" />
            <circle cx="60.81" cy="82.97" r=".35" />
            <circle cx="58.81" cy="82.97" r=".35" />
            <circle cx="56.81" cy="82.97" r=".35" />
            <circle cx="59.81" cy="80.97" r=".35" />
            <circle cx="57.81" cy="80.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ct)`}>
            <circle cx="59.81" cy="88.97" r=".35" />
            <circle cx="57.81" cy="88.97" r=".35" />
            <circle cx="60.81" cy="86.97" r=".35" />
            <circle cx="58.81" cy="86.97" r=".35" />
            <circle cx="56.81" cy="86.97" r=".35" />
            <circle cx="59.81" cy="84.97" r=".35" />
            <circle cx="57.81" cy="84.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cu)`}>
            <circle cx="59.81" cy="92.97" r=".35" />
            <circle cx="57.81" cy="92.97" r=".35" />
            <circle cx="60.81" cy="90.97" r=".35" />
            <circle cx="58.81" cy="90.97" r=".35" />
            <circle cx="56.81" cy="90.97" r=".35" />
            <circle cx="59.81" cy="88.97" r=".35" />
            <circle cx="57.81" cy="88.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cv)`}>
            <circle cx="59.81" cy="96.97" r=".35" />
            <circle cx="57.81" cy="96.97" r=".35" />
            <circle cx="60.81" cy="94.97" r=".35" />
            <circle cx="58.81" cy="94.97" r=".35" />
            <circle cx="56.81" cy="94.97" r=".35" />
            <circle cx="59.81" cy="92.97" r=".35" />
            <circle cx="57.81" cy="92.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cw)`}>
            <circle cx="59.81" cy="100.97" r=".35" />
            <circle cx="57.81" cy="100.97" r=".35" />
            <circle cx="60.81" cy="98.97" r=".35" />
            <circle cx="58.81" cy="98.97" r=".35" />
            <circle cx="56.81" cy="98.97" r=".35" />
            <circle cx="59.81" cy="96.97" r=".35" />
            <circle cx="57.81" cy="96.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cx)`}>
            <circle cx="59.81" cy="104.97" r=".35" />
            <circle cx="57.81" cy="104.97" r=".35" />
            <circle cx="60.81" cy="102.97" r=".35" />
            <circle cx="58.81" cy="102.97" r=".35" />
            <circle cx="56.81" cy="102.97" r=".35" />
            <circle cx="59.81" cy="100.97" r=".35" />
            <circle cx="57.81" cy="100.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cy)`}>
            <circle cx="59.81" cy="108.97" r=".35" />
            <circle cx="57.81" cy="108.97" r=".35" />
            <circle cx="60.81" cy="106.97" r=".35" />
            <circle cx="58.81" cy="106.97" r=".35" />
            <circle cx="56.81" cy="106.97" r=".35" />
            <circle cx="59.81" cy="104.97" r=".35" />
            <circle cx="57.81" cy="104.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cz)`}>
            <circle cx="55.81" cy="32.97" r=".35" />
            <circle cx="53.81" cy="32.97" r=".35" />
            <circle cx="56.81" cy="30.97" r=".35" />
            <circle cx="54.81" cy="30.97" r=".35" />
            <circle cx="52.81" cy="30.97" r=".35" />
            <circle cx="55.81" cy="28.97" r=".35" />
            <circle cx="53.81" cy="28.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cA)`}>
            <circle cx="55.81" cy="36.97" r=".35" />
            <circle cx="53.81" cy="36.97" r=".35" />
            <circle cx="56.81" cy="34.97" r=".35" />
            <circle cx="54.81" cy="34.97" r=".35" />
            <circle cx="52.81" cy="34.97" r=".35" />
            <circle cx="55.81" cy="32.97" r=".35" />
            <circle cx="53.81" cy="32.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cB)`}>
            <circle cx="55.81" cy="40.97" r=".35" />
            <circle cx="53.81" cy="40.97" r=".35" />
            <circle cx="56.81" cy="38.97" r=".35" />
            <circle cx="54.81" cy="38.97" r=".35" />
            <circle cx="52.81" cy="38.97" r=".35" />
            <circle cx="55.81" cy="36.97" r=".35" />
            <circle cx="53.81" cy="36.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cC)`}>
            <circle cx="55.81" cy="44.97" r=".35" />
            <circle cx="53.81" cy="44.97" r=".35" />
            <circle cx="56.81" cy="42.97" r=".35" />
            <circle cx="54.81" cy="42.97" r=".35" />
            <circle cx="52.81" cy="42.97" r=".35" />
            <circle cx="55.81" cy="40.97" r=".35" />
            <circle cx="53.81" cy="40.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cD)`}>
            <circle cx="55.81" cy="48.97" r=".35" />
            <circle cx="53.81" cy="48.97" r=".35" />
            <circle cx="56.81" cy="46.97" r=".35" />
            <circle cx="54.81" cy="46.97" r=".35" />
            <circle cx="52.81" cy="46.97" r=".35" />
            <circle cx="55.81" cy="44.97" r=".35" />
            <circle cx="53.81" cy="44.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cE)`}>
            <circle cx="55.81" cy="52.97" r=".35" />
            <circle cx="53.81" cy="52.97" r=".35" />
            <circle cx="56.81" cy="50.97" r=".35" />
            <circle cx="54.81" cy="50.97" r=".35" />
            <circle cx="52.81" cy="50.97" r=".35" />
            <circle cx="55.81" cy="48.97" r=".35" />
            <circle cx="53.81" cy="48.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cF)`}>
            <circle cx="55.81" cy="56.97" r=".35" />
            <circle cx="53.81" cy="56.97" r=".35" />
            <circle cx="56.81" cy="54.97" r=".35" />
            <circle cx="54.81" cy="54.97" r=".35" />
            <circle cx="52.81" cy="54.97" r=".35" />
            <circle cx="55.81" cy="52.97" r=".35" />
            <circle cx="53.81" cy="52.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cG)`}>
            <circle cx="55.81" cy="60.97" r=".35" />
            <circle cx="53.81" cy="60.97" r=".35" />
            <circle cx="56.81" cy="58.97" r=".35" />
            <circle cx="54.81" cy="58.97" r=".35" />
            <circle cx="52.81" cy="58.97" r=".35" />
            <circle cx="55.81" cy="56.97" r=".35" />
            <circle cx="53.81" cy="56.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cH)`}>
            <circle cx="55.81" cy="64.97" r=".35" />
            <circle cx="53.81" cy="64.97" r=".35" />
            <circle cx="56.81" cy="62.97" r=".35" />
            <circle cx="54.81" cy="62.97" r=".35" />
            <circle cx="52.81" cy="62.97" r=".35" />
            <circle cx="55.81" cy="60.97" r=".35" />
            <circle cx="53.81" cy="60.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cI)`}>
            <circle cx="55.81" cy="68.97" r=".35" />
            <circle cx="53.81" cy="68.97" r=".35" />
            <circle cx="56.81" cy="66.97" r=".35" />
            <circle cx="54.81" cy="66.97" r=".35" />
            <circle cx="52.81" cy="66.97" r=".35" />
            <circle cx="55.81" cy="64.97" r=".35" />
            <circle cx="53.81" cy="64.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cJ)`}>
            <circle cx="55.81" cy="72.97" r=".35" />
            <circle cx="53.81" cy="72.97" r=".35" />
            <circle cx="56.81" cy="70.97" r=".35" />
            <circle cx="54.81" cy="70.97" r=".35" />
            <circle cx="52.81" cy="70.97" r=".35" />
            <circle cx="55.81" cy="68.97" r=".35" />
            <circle cx="53.81" cy="68.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cK)`}>
            <circle cx="55.81" cy="76.97" r=".35" />
            <circle cx="53.81" cy="76.97" r=".35" />
            <circle cx="56.81" cy="74.97" r=".35" />
            <circle cx="54.81" cy="74.97" r=".35" />
            <circle cx="52.81" cy="74.97" r=".35" />
            <circle cx="55.81" cy="72.97" r=".35" />
            <circle cx="53.81" cy="72.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cL)`}>
            <circle cx="55.81" cy="80.97" r=".35" />
            <circle cx="53.81" cy="80.97" r=".35" />
            <circle cx="56.81" cy="78.97" r=".35" />
            <circle cx="54.81" cy="78.97" r=".35" />
            <circle cx="52.81" cy="78.97" r=".35" />
            <circle cx="55.81" cy="76.97" r=".35" />
            <circle cx="53.81" cy="76.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cM)`}>
            <circle cx="55.81" cy="84.97" r=".35" />
            <circle cx="53.81" cy="84.97" r=".35" />
            <circle cx="56.81" cy="82.97" r=".35" />
            <circle cx="54.81" cy="82.97" r=".35" />
            <circle cx="52.81" cy="82.97" r=".35" />
            <circle cx="55.81" cy="80.97" r=".35" />
            <circle cx="53.81" cy="80.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cN)`}>
            <circle cx="55.81" cy="88.97" r=".35" />
            <circle cx="53.81" cy="88.97" r=".35" />
            <circle cx="56.81" cy="86.97" r=".35" />
            <circle cx="54.81" cy="86.97" r=".35" />
            <circle cx="52.81" cy="86.97" r=".35" />
            <circle cx="55.81" cy="84.97" r=".35" />
            <circle cx="53.81" cy="84.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cO)`}>
            <circle cx="55.81" cy="92.97" r=".35" />
            <circle cx="53.81" cy="92.97" r=".35" />
            <circle cx="56.81" cy="90.97" r=".35" />
            <circle cx="54.81" cy="90.97" r=".35" />
            <circle cx="52.81" cy="90.97" r=".35" />
            <circle cx="55.81" cy="88.97" r=".35" />
            <circle cx="53.81" cy="88.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cP)`}>
            <circle cx="55.81" cy="96.97" r=".35" />
            <circle cx="53.81" cy="96.97" r=".35" />
            <circle cx="56.81" cy="94.97" r=".35" />
            <circle cx="54.81" cy="94.97" r=".35" />
            <circle cx="52.81" cy="94.97" r=".35" />
            <circle cx="55.81" cy="92.97" r=".35" />
            <circle cx="53.81" cy="92.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cQ)`}>
            <circle cx="55.81" cy="100.97" r=".35" />
            <circle cx="53.81" cy="100.97" r=".35" />
            <circle cx="56.81" cy="98.97" r=".35" />
            <circle cx="54.81" cy="98.97" r=".35" />
            <circle cx="52.81" cy="98.97" r=".35" />
            <circle cx="55.81" cy="96.97" r=".35" />
            <circle cx="53.81" cy="96.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cR)`}>
            <circle cx="55.81" cy="104.97" r=".35" />
            <circle cx="53.81" cy="104.97" r=".35" />
            <circle cx="56.81" cy="102.97" r=".35" />
            <circle cx="54.81" cy="102.97" r=".35" />
            <circle cx="52.81" cy="102.97" r=".35" />
            <circle cx="55.81" cy="100.97" r=".35" />
            <circle cx="53.81" cy="100.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cS)`}>
            <circle cx="55.81" cy="108.97" r=".35" />
            <circle cx="53.81" cy="108.97" r=".35" />
            <circle cx="56.81" cy="106.97" r=".35" />
            <circle cx="54.81" cy="106.97" r=".35" />
            <circle cx="52.81" cy="106.97" r=".35" />
            <circle cx="55.81" cy="104.97" r=".35" />
            <circle cx="53.81" cy="104.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cT)`}>
            <circle cx="51.81" cy="32.97" r=".35" />
            <circle cx="49.81" cy="32.97" r=".35" />
            <circle cx="52.81" cy="30.97" r=".35" />
            <circle cx="50.81" cy="30.97" r=".35" />
            <circle cx="48.81" cy="30.97" r=".35" />
            <circle cx="51.81" cy="28.97" r=".35" />
            <circle cx="49.81" cy="28.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cU)`}>
            <circle cx="51.81" cy="36.97" r=".35" />
            <circle cx="49.81" cy="36.97" r=".35" />
            <circle cx="52.81" cy="34.97" r=".35" />
            <circle cx="50.81" cy="34.97" r=".35" />
            <circle cx="48.81" cy="34.97" r=".35" />
            <circle cx="51.81" cy="32.97" r=".35" />
            <circle cx="49.81" cy="32.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cV)`}>
            <circle cx="51.81" cy="40.97" r=".35" />
            <circle cx="49.81" cy="40.97" r=".35" />
            <circle cx="52.81" cy="38.97" r=".35" />
            <circle cx="50.81" cy="38.97" r=".35" />
            <circle cx="48.81" cy="38.97" r=".35" />
            <circle cx="51.81" cy="36.97" r=".35" />
            <circle cx="49.81" cy="36.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cW)`}>
            <circle cx="51.81" cy="44.97" r=".35" />
            <circle cx="49.81" cy="44.97" r=".35" />
            <circle cx="52.81" cy="42.97" r=".35" />
            <circle cx="50.81" cy="42.97" r=".35" />
            <circle cx="48.81" cy="42.97" r=".35" />
            <circle cx="51.81" cy="40.97" r=".35" />
            <circle cx="49.81" cy="40.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cX)`}>
            <circle cx="51.81" cy="48.97" r=".35" />
            <circle cx="49.81" cy="48.97" r=".35" />
            <circle cx="52.81" cy="46.97" r=".35" />
            <circle cx="50.81" cy="46.97" r=".35" />
            <circle cx="48.81" cy="46.97" r=".35" />
            <circle cx="51.81" cy="44.97" r=".35" />
            <circle cx="49.81" cy="44.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cY)`}>
            <circle cx="51.81" cy="52.97" r=".35" />
            <circle cx="49.81" cy="52.97" r=".35" />
            <circle cx="52.81" cy="50.97" r=".35" />
            <circle cx="50.81" cy="50.97" r=".35" />
            <circle cx="48.81" cy="50.97" r=".35" />
            <circle cx="51.81" cy="48.97" r=".35" />
            <circle cx="49.81" cy="48.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cZ)`}>
            <circle cx="51.81" cy="56.97" r=".35" />
            <circle cx="49.81" cy="56.97" r=".35" />
            <circle cx="52.81" cy="54.97" r=".35" />
            <circle cx="50.81" cy="54.97" r=".35" />
            <circle cx="48.81" cy="54.97" r=".35" />
            <circle cx="51.81" cy="52.97" r=".35" />
            <circle cx="49.81" cy="52.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-c0)`}>
            <circle cx="51.81" cy="60.97" r=".35" />
            <circle cx="49.81" cy="60.97" r=".35" />
            <circle cx="52.81" cy="58.97" r=".35" />
            <circle cx="50.81" cy="58.97" r=".35" />
            <circle cx="48.81" cy="58.97" r=".35" />
            <circle cx="51.81" cy="56.97" r=".35" />
            <circle cx="49.81" cy="56.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-c1)`}>
            <circle cx="51.81" cy="64.97" r=".35" />
            <circle cx="49.81" cy="64.97" r=".35" />
            <circle cx="52.81" cy="62.97" r=".35" />
            <circle cx="50.81" cy="62.97" r=".35" />
            <circle cx="48.81" cy="62.97" r=".35" />
            <circle cx="51.81" cy="60.97" r=".35" />
            <circle cx="49.81" cy="60.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-c2)`}>
            <circle cx="51.81" cy="68.97" r=".35" />
            <circle cx="49.81" cy="68.97" r=".35" />
            <circle cx="52.81" cy="66.97" r=".35" />
            <circle cx="50.81" cy="66.97" r=".35" />
            <circle cx="48.81" cy="66.97" r=".35" />
            <circle cx="51.81" cy="64.97" r=".35" />
            <circle cx="49.81" cy="64.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-c3)`}>
            <circle cx="51.81" cy="72.97" r=".35" />
            <circle cx="49.81" cy="72.97" r=".35" />
            <circle cx="52.81" cy="70.97" r=".35" />
            <circle cx="50.81" cy="70.97" r=".35" />
            <circle cx="48.81" cy="70.97" r=".35" />
            <circle cx="51.81" cy="68.97" r=".35" />
            <circle cx="49.81" cy="68.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-c4)`}>
            <circle cx="51.81" cy="76.97" r=".35" />
            <circle cx="49.81" cy="76.97" r=".35" />
            <circle cx="52.81" cy="74.97" r=".35" />
            <circle cx="50.81" cy="74.97" r=".35" />
            <circle cx="48.81" cy="74.97" r=".35" />
            <circle cx="51.81" cy="72.97" r=".35" />
            <circle cx="49.81" cy="72.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-c5)`}>
            <circle cx="51.81" cy="80.97" r=".35" />
            <circle cx="49.81" cy="80.97" r=".35" />
            <circle cx="52.81" cy="78.97" r=".35" />
            <circle cx="50.81" cy="78.97" r=".35" />
            <circle cx="48.81" cy="78.97" r=".35" />
            <circle cx="51.81" cy="76.97" r=".35" />
            <circle cx="49.81" cy="76.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-c6)`}>
            <circle cx="51.81" cy="84.97" r=".35" />
            <circle cx="49.81" cy="84.97" r=".35" />
            <circle cx="52.81" cy="82.97" r=".35" />
            <circle cx="50.81" cy="82.97" r=".35" />
            <circle cx="48.81" cy="82.97" r=".35" />
            <circle cx="51.81" cy="80.97" r=".35" />
            <circle cx="49.81" cy="80.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-c7)`}>
            <circle cx="51.81" cy="88.97" r=".35" />
            <circle cx="49.81" cy="88.97" r=".35" />
            <circle cx="52.81" cy="86.97" r=".35" />
            <circle cx="50.81" cy="86.97" r=".35" />
            <circle cx="48.81" cy="86.97" r=".35" />
            <circle cx="51.81" cy="84.97" r=".35" />
            <circle cx="49.81" cy="84.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-c8)`}>
            <circle cx="51.81" cy="92.97" r=".35" />
            <circle cx="49.81" cy="92.97" r=".35" />
            <circle cx="52.81" cy="90.97" r=".35" />
            <circle cx="50.81" cy="90.97" r=".35" />
            <circle cx="48.81" cy="90.97" r=".35" />
            <circle cx="51.81" cy="88.97" r=".35" />
            <circle cx="49.81" cy="88.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-c9)`}>
            <circle cx="51.81" cy="96.97" r=".35" />
            <circle cx="49.81" cy="96.97" r=".35" />
            <circle cx="52.81" cy="94.97" r=".35" />
            <circle cx="50.81" cy="94.97" r=".35" />
            <circle cx="48.81" cy="94.97" r=".35" />
            <circle cx="51.81" cy="92.97" r=".35" />
            <circle cx="49.81" cy="92.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-da)`}>
            <circle cx="51.81" cy="100.97" r=".35" />
            <circle cx="49.81" cy="100.97" r=".35" />
            <circle cx="52.81" cy="98.97" r=".35" />
            <circle cx="50.81" cy="98.97" r=".35" />
            <circle cx="48.81" cy="98.97" r=".35" />
            <circle cx="51.81" cy="96.97" r=".35" />
            <circle cx="49.81" cy="96.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-db)`}>
            <circle cx="51.81" cy="104.97" r=".35" />
            <circle cx="49.81" cy="104.97" r=".35" />
            <circle cx="52.81" cy="102.97" r=".35" />
            <circle cx="50.81" cy="102.97" r=".35" />
            <circle cx="48.81" cy="102.97" r=".35" />
            <circle cx="51.81" cy="100.97" r=".35" />
            <circle cx="49.81" cy="100.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dc)`}>
            <circle cx="51.81" cy="108.97" r=".35" />
            <circle cx="49.81" cy="108.97" r=".35" />
            <circle cx="52.81" cy="106.97" r=".35" />
            <circle cx="50.81" cy="106.97" r=".35" />
            <circle cx="48.81" cy="106.97" r=".35" />
            <circle cx="51.81" cy="104.97" r=".35" />
            <circle cx="49.81" cy="104.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dd)`}>
            <circle cx="47.81" cy="32.97" r=".35" />
            <circle cx="45.81" cy="32.97" r=".35" />
            <circle cx="48.81" cy="30.97" r=".35" />
            <circle cx="46.81" cy="30.97" r=".35" />
            <circle cx="44.81" cy="30.97" r=".35" />
            <circle cx="47.81" cy="28.97" r=".35" />
            <circle cx="45.81" cy="28.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-de)`}>
            <circle cx="47.81" cy="36.97" r=".35" />
            <circle cx="45.81" cy="36.97" r=".35" />
            <circle cx="48.81" cy="34.97" r=".35" />
            <circle cx="46.81" cy="34.97" r=".35" />
            <circle cx="44.81" cy="34.97" r=".35" />
            <circle cx="47.81" cy="32.97" r=".35" />
            <circle cx="45.81" cy="32.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-df)`}>
            <circle cx="47.81" cy="40.97" r=".35" />
            <circle cx="45.81" cy="40.97" r=".35" />
            <circle cx="48.81" cy="38.97" r=".35" />
            <circle cx="46.81" cy="38.97" r=".35" />
            <circle cx="44.81" cy="38.97" r=".35" />
            <circle cx="47.81" cy="36.97" r=".35" />
            <circle cx="45.81" cy="36.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dg)`}>
            <circle cx="47.81" cy="44.97" r=".35" />
            <circle cx="45.81" cy="44.97" r=".35" />
            <circle cx="48.81" cy="42.97" r=".35" />
            <circle cx="46.81" cy="42.97" r=".35" />
            <circle cx="44.81" cy="42.97" r=".35" />
            <circle cx="47.81" cy="40.97" r=".35" />
            <circle cx="45.81" cy="40.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dh)`}>
            <circle cx="47.81" cy="48.97" r=".35" />
            <circle cx="45.81" cy="48.97" r=".35" />
            <circle cx="48.81" cy="46.97" r=".35" />
            <circle cx="46.81" cy="46.97" r=".35" />
            <circle cx="44.81" cy="46.97" r=".35" />
            <circle cx="47.81" cy="44.97" r=".35" />
            <circle cx="45.81" cy="44.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-di)`}>
            <circle cx="47.81" cy="52.97" r=".35" />
            <circle cx="45.81" cy="52.97" r=".35" />
            <circle cx="48.81" cy="50.97" r=".35" />
            <circle cx="46.81" cy="50.97" r=".35" />
            <circle cx="44.81" cy="50.97" r=".35" />
            <circle cx="47.81" cy="48.97" r=".35" />
            <circle cx="45.81" cy="48.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dj)`}>
            <circle cx="47.81" cy="56.97" r=".35" />
            <circle cx="45.81" cy="56.97" r=".35" />
            <circle cx="48.81" cy="54.97" r=".35" />
            <circle cx="46.81" cy="54.97" r=".35" />
            <circle cx="44.81" cy="54.97" r=".35" />
            <circle cx="47.81" cy="52.97" r=".35" />
            <circle cx="45.81" cy="52.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dk)`}>
            <circle cx="47.81" cy="60.97" r=".35" />
            <circle cx="45.81" cy="60.97" r=".35" />
            <circle cx="48.81" cy="58.97" r=".35" />
            <circle cx="46.81" cy="58.97" r=".35" />
            <circle cx="44.81" cy="58.97" r=".35" />
            <circle cx="47.81" cy="56.97" r=".35" />
            <circle cx="45.81" cy="56.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dl)`}>
            <circle cx="47.81" cy="64.97" r=".35" />
            <circle cx="45.81" cy="64.97" r=".35" />
            <circle cx="48.81" cy="62.97" r=".35" />
            <circle cx="46.81" cy="62.97" r=".35" />
            <circle cx="44.81" cy="62.97" r=".35" />
            <circle cx="47.81" cy="60.97" r=".35" />
            <circle cx="45.81" cy="60.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dm)`}>
            <circle cx="47.81" cy="68.97" r=".35" />
            <circle cx="45.81" cy="68.97" r=".35" />
            <circle cx="48.81" cy="66.97" r=".35" />
            <circle cx="46.81" cy="66.97" r=".35" />
            <circle cx="44.81" cy="66.97" r=".35" />
            <circle cx="47.81" cy="64.97" r=".35" />
            <circle cx="45.81" cy="64.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dn)`}>
            <circle cx="47.81" cy="72.97" r=".35" />
            <circle cx="45.81" cy="72.97" r=".35" />
            <circle cx="48.81" cy="70.97" r=".35" />
            <circle cx="46.81" cy="70.97" r=".35" />
            <circle cx="44.81" cy="70.97" r=".35" />
            <circle cx="47.81" cy="68.97" r=".35" />
            <circle cx="45.81" cy="68.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-do)`}>
            <circle cx="47.81" cy="76.97" r=".35" />
            <circle cx="45.81" cy="76.97" r=".35" />
            <circle cx="48.81" cy="74.97" r=".35" />
            <circle cx="46.81" cy="74.97" r=".35" />
            <circle cx="44.81" cy="74.97" r=".35" />
            <circle cx="47.81" cy="72.97" r=".35" />
            <circle cx="45.81" cy="72.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dp)`}>
            <circle cx="47.81" cy="80.97" r=".35" />
            <circle cx="45.81" cy="80.97" r=".35" />
            <circle cx="48.81" cy="78.97" r=".35" />
            <circle cx="46.81" cy="78.97" r=".35" />
            <circle cx="44.81" cy="78.97" r=".35" />
            <circle cx="47.81" cy="76.97" r=".35" />
            <circle cx="45.81" cy="76.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dq)`}>
            <circle cx="47.81" cy="84.97" r=".35" />
            <circle cx="45.81" cy="84.97" r=".35" />
            <circle cx="48.81" cy="82.97" r=".35" />
            <circle cx="46.81" cy="82.97" r=".35" />
            <circle cx="44.81" cy="82.97" r=".35" />
            <circle cx="47.81" cy="80.97" r=".35" />
            <circle cx="45.81" cy="80.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dr)`}>
            <circle cx="47.81" cy="88.97" r=".35" />
            <circle cx="45.81" cy="88.97" r=".35" />
            <circle cx="48.81" cy="86.97" r=".35" />
            <circle cx="46.81" cy="86.97" r=".35" />
            <circle cx="44.81" cy="86.97" r=".35" />
            <circle cx="47.81" cy="84.97" r=".35" />
            <circle cx="45.81" cy="84.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ds)`}>
            <circle cx="47.81" cy="92.97" r=".35" />
            <circle cx="45.81" cy="92.97" r=".35" />
            <circle cx="48.81" cy="90.97" r=".35" />
            <circle cx="46.81" cy="90.97" r=".35" />
            <circle cx="44.81" cy="90.97" r=".35" />
            <circle cx="47.81" cy="88.97" r=".35" />
            <circle cx="45.81" cy="88.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dt)`}>
            <circle cx="47.81" cy="96.97" r=".35" />
            <circle cx="45.81" cy="96.97" r=".35" />
            <circle cx="48.81" cy="94.97" r=".35" />
            <circle cx="46.81" cy="94.97" r=".35" />
            <circle cx="44.81" cy="94.97" r=".35" />
            <circle cx="47.81" cy="92.97" r=".35" />
            <circle cx="45.81" cy="92.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-du)`}>
            <circle cx="47.81" cy="100.97" r=".35" />
            <circle cx="45.81" cy="100.97" r=".35" />
            <circle cx="48.81" cy="98.97" r=".35" />
            <circle cx="46.81" cy="98.97" r=".35" />
            <circle cx="44.81" cy="98.97" r=".35" />
            <circle cx="47.81" cy="96.97" r=".35" />
            <circle cx="45.81" cy="96.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dv)`}>
            <circle cx="47.81" cy="104.97" r=".35" />
            <circle cx="45.81" cy="104.97" r=".35" />
            <circle cx="48.81" cy="102.97" r=".35" />
            <circle cx="46.81" cy="102.97" r=".35" />
            <circle cx="44.81" cy="102.97" r=".35" />
            <circle cx="47.81" cy="100.97" r=".35" />
            <circle cx="45.81" cy="100.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dw)`}>
            <circle cx="47.81" cy="108.97" r=".35" />
            <circle cx="45.81" cy="108.97" r=".35" />
            <circle cx="48.81" cy="106.97" r=".35" />
            <circle cx="46.81" cy="106.97" r=".35" />
            <circle cx="44.81" cy="106.97" r=".35" />
            <circle cx="47.81" cy="104.97" r=".35" />
            <circle cx="45.81" cy="104.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dx)`}>
            <circle cx="43.81" cy="32.97" r=".35" />
            <circle cx="41.81" cy="32.97" r=".35" />
            <circle cx="44.81" cy="30.97" r=".35" />
            <circle cx="42.81" cy="30.97" r=".35" />
            <circle cx="40.81" cy="30.97" r=".35" />
            <circle cx="43.81" cy="28.97" r=".35" />
            <circle cx="41.81" cy="28.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dy)`}>
            <circle cx="43.81" cy="36.97" r=".35" />
            <circle cx="41.81" cy="36.97" r=".35" />
            <circle cx="44.81" cy="34.97" r=".35" />
            <circle cx="42.81" cy="34.97" r=".35" />
            <circle cx="40.81" cy="34.97" r=".35" />
            <circle cx="43.81" cy="32.97" r=".35" />
            <circle cx="41.81" cy="32.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dz)`}>
            <circle cx="43.81" cy="40.97" r=".35" />
            <circle cx="41.81" cy="40.97" r=".35" />
            <circle cx="44.81" cy="38.97" r=".35" />
            <circle cx="42.81" cy="38.97" r=".35" />
            <circle cx="40.81" cy="38.97" r=".35" />
            <circle cx="43.81" cy="36.97" r=".35" />
            <circle cx="41.81" cy="36.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dA)`}>
            <circle cx="43.81" cy="44.97" r=".35" />
            <circle cx="41.81" cy="44.97" r=".35" />
            <circle cx="44.81" cy="42.97" r=".35" />
            <circle cx="42.81" cy="42.97" r=".35" />
            <circle cx="40.81" cy="42.97" r=".35" />
            <circle cx="43.81" cy="40.97" r=".35" />
            <circle cx="41.81" cy="40.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dB)`}>
            <circle cx="43.81" cy="48.97" r=".35" />
            <circle cx="41.81" cy="48.97" r=".35" />
            <circle cx="44.81" cy="46.97" r=".35" />
            <circle cx="42.81" cy="46.97" r=".35" />
            <circle cx="40.81" cy="46.97" r=".35" />
            <circle cx="43.81" cy="44.97" r=".35" />
            <circle cx="41.81" cy="44.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dC)`}>
            <circle cx="43.81" cy="52.97" r=".35" />
            <circle cx="41.81" cy="52.97" r=".35" />
            <circle cx="44.81" cy="50.97" r=".35" />
            <circle cx="42.81" cy="50.97" r=".35" />
            <circle cx="40.81" cy="50.97" r=".35" />
            <circle cx="43.81" cy="48.97" r=".35" />
            <circle cx="41.81" cy="48.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dD)`}>
            <circle cx="43.81" cy="56.97" r=".35" />
            <circle cx="41.81" cy="56.97" r=".35" />
            <circle cx="44.81" cy="54.97" r=".35" />
            <circle cx="42.81" cy="54.97" r=".35" />
            <circle cx="40.81" cy="54.97" r=".35" />
            <circle cx="43.81" cy="52.97" r=".35" />
            <circle cx="41.81" cy="52.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dE)`}>
            <circle cx="43.81" cy="60.97" r=".35" />
            <circle cx="41.81" cy="60.97" r=".35" />
            <circle cx="44.81" cy="58.97" r=".35" />
            <circle cx="42.81" cy="58.97" r=".35" />
            <circle cx="40.81" cy="58.97" r=".35" />
            <circle cx="43.81" cy="56.97" r=".35" />
            <circle cx="41.81" cy="56.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dF)`}>
            <circle cx="43.81" cy="64.97" r=".35" />
            <circle cx="41.81" cy="64.97" r=".35" />
            <circle cx="44.81" cy="62.97" r=".35" />
            <circle cx="42.81" cy="62.97" r=".35" />
            <circle cx="40.81" cy="62.97" r=".35" />
            <circle cx="43.81" cy="60.97" r=".35" />
            <circle cx="41.81" cy="60.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dG)`}>
            <circle cx="43.81" cy="68.97" r=".35" />
            <circle cx="41.81" cy="68.97" r=".35" />
            <circle cx="44.81" cy="66.97" r=".35" />
            <circle cx="42.81" cy="66.97" r=".35" />
            <circle cx="40.81" cy="66.97" r=".35" />
            <circle cx="43.81" cy="64.97" r=".35" />
            <circle cx="41.81" cy="64.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dH)`}>
            <circle cx="43.81" cy="72.97" r=".35" />
            <circle cx="41.81" cy="72.97" r=".35" />
            <circle cx="44.81" cy="70.97" r=".35" />
            <circle cx="42.81" cy="70.97" r=".35" />
            <circle cx="40.81" cy="70.97" r=".35" />
            <circle cx="43.81" cy="68.97" r=".35" />
            <circle cx="41.81" cy="68.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dI)`}>
            <circle cx="43.81" cy="76.97" r=".35" />
            <circle cx="41.81" cy="76.97" r=".35" />
            <circle cx="44.81" cy="74.97" r=".35" />
            <circle cx="42.81" cy="74.97" r=".35" />
            <circle cx="40.81" cy="74.97" r=".35" />
            <circle cx="43.81" cy="72.97" r=".35" />
            <circle cx="41.81" cy="72.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dJ)`}>
            <circle cx="43.81" cy="80.97" r=".35" />
            <circle cx="41.81" cy="80.97" r=".35" />
            <circle cx="44.81" cy="78.97" r=".35" />
            <circle cx="42.81" cy="78.97" r=".35" />
            <circle cx="40.81" cy="78.97" r=".35" />
            <circle cx="43.81" cy="76.97" r=".35" />
            <circle cx="41.81" cy="76.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dK)`}>
            <circle cx="43.81" cy="84.97" r=".35" />
            <circle cx="41.81" cy="84.97" r=".35" />
            <circle cx="44.81" cy="82.97" r=".35" />
            <circle cx="42.81" cy="82.97" r=".35" />
            <circle cx="40.81" cy="82.97" r=".35" />
            <circle cx="43.81" cy="80.97" r=".35" />
            <circle cx="41.81" cy="80.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dL)`}>
            <circle cx="43.81" cy="88.97" r=".35" />
            <circle cx="41.81" cy="88.97" r=".35" />
            <circle cx="44.81" cy="86.97" r=".35" />
            <circle cx="42.81" cy="86.97" r=".35" />
            <circle cx="40.81" cy="86.97" r=".35" />
            <circle cx="43.81" cy="84.97" r=".35" />
            <circle cx="41.81" cy="84.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dM)`}>
            <circle cx="43.81" cy="92.97" r=".35" />
            <circle cx="41.81" cy="92.97" r=".35" />
            <circle cx="44.81" cy="90.97" r=".35" />
            <circle cx="42.81" cy="90.97" r=".35" />
            <circle cx="40.81" cy="90.97" r=".35" />
            <circle cx="43.81" cy="88.97" r=".35" />
            <circle cx="41.81" cy="88.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dN)`}>
            <circle cx="43.81" cy="96.97" r=".35" />
            <circle cx="41.81" cy="96.97" r=".35" />
            <circle cx="44.81" cy="94.97" r=".35" />
            <circle cx="42.81" cy="94.97" r=".35" />
            <circle cx="40.81" cy="94.97" r=".35" />
            <circle cx="43.81" cy="92.97" r=".35" />
            <circle cx="41.81" cy="92.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dO)`}>
            <circle cx="43.81" cy="100.97" r=".35" />
            <circle cx="41.81" cy="100.97" r=".35" />
            <circle cx="44.81" cy="98.97" r=".35" />
            <circle cx="42.81" cy="98.97" r=".35" />
            <circle cx="40.81" cy="98.97" r=".35" />
            <circle cx="43.81" cy="96.97" r=".35" />
            <circle cx="41.81" cy="96.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dP)`}>
            <circle cx="43.81" cy="104.97" r=".35" />
            <circle cx="41.81" cy="104.97" r=".35" />
            <circle cx="44.81" cy="102.97" r=".35" />
            <circle cx="42.81" cy="102.97" r=".35" />
            <circle cx="40.81" cy="102.97" r=".35" />
            <circle cx="43.81" cy="100.97" r=".35" />
            <circle cx="41.81" cy="100.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dQ)`}>
            <circle cx="43.81" cy="108.97" r=".35" />
            <circle cx="41.81" cy="108.97" r=".35" />
            <circle cx="44.81" cy="106.97" r=".35" />
            <circle cx="42.81" cy="106.97" r=".35" />
            <circle cx="40.81" cy="106.97" r=".35" />
            <circle cx="43.81" cy="104.97" r=".35" />
            <circle cx="41.81" cy="104.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dR)`}>
            <circle cx="39.81" cy="32.97" r=".35" />
            <circle cx="37.81" cy="32.97" r=".35" />
            <circle cx="40.81" cy="30.97" r=".35" />
            <circle cx="38.81" cy="30.97" r=".35" />
            <circle cx="36.81" cy="30.97" r=".35" />
            <circle cx="39.81" cy="28.97" r=".35" />
            <circle cx="37.81" cy="28.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dS)`}>
            <circle cx="39.81" cy="36.97" r=".35" />
            <circle cx="37.81" cy="36.97" r=".35" />
            <circle cx="40.81" cy="34.97" r=".35" />
            <circle cx="38.81" cy="34.97" r=".35" />
            <circle cx="36.81" cy="34.97" r=".35" />
            <circle cx="39.81" cy="32.97" r=".35" />
            <circle cx="37.81" cy="32.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dT)`}>
            <circle cx="39.81" cy="40.97" r=".35" />
            <circle cx="37.81" cy="40.97" r=".35" />
            <circle cx="40.81" cy="38.97" r=".35" />
            <circle cx="38.81" cy="38.97" r=".35" />
            <circle cx="36.81" cy="38.97" r=".35" />
            <circle cx="39.81" cy="36.97" r=".35" />
            <circle cx="37.81" cy="36.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dU)`}>
            <circle cx="39.81" cy="44.97" r=".35" />
            <circle cx="37.81" cy="44.97" r=".35" />
            <circle cx="40.81" cy="42.97" r=".35" />
            <circle cx="38.81" cy="42.97" r=".35" />
            <circle cx="36.81" cy="42.97" r=".35" />
            <circle cx="39.81" cy="40.97" r=".35" />
            <circle cx="37.81" cy="40.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dV)`}>
            <circle cx="39.81" cy="48.97" r=".35" />
            <circle cx="37.81" cy="48.97" r=".35" />
            <circle cx="40.81" cy="46.97" r=".35" />
            <circle cx="38.81" cy="46.97" r=".35" />
            <circle cx="36.81" cy="46.97" r=".35" />
            <circle cx="39.81" cy="44.97" r=".35" />
            <circle cx="37.81" cy="44.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dW)`}>
            <circle cx="39.81" cy="52.97" r=".35" />
            <circle cx="37.81" cy="52.97" r=".35" />
            <circle cx="40.81" cy="50.97" r=".35" />
            <circle cx="38.81" cy="50.97" r=".35" />
            <circle cx="36.81" cy="50.97" r=".35" />
            <circle cx="39.81" cy="48.97" r=".35" />
            <circle cx="37.81" cy="48.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dX)`}>
            <circle cx="39.81" cy="56.97" r=".35" />
            <circle cx="37.81" cy="56.97" r=".35" />
            <circle cx="40.81" cy="54.97" r=".35" />
            <circle cx="38.81" cy="54.97" r=".35" />
            <circle cx="36.81" cy="54.97" r=".35" />
            <circle cx="39.81" cy="52.97" r=".35" />
            <circle cx="37.81" cy="52.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dY)`}>
            <circle cx="39.81" cy="60.97" r=".35" />
            <circle cx="37.81" cy="60.97" r=".35" />
            <circle cx="40.81" cy="58.97" r=".35" />
            <circle cx="38.81" cy="58.97" r=".35" />
            <circle cx="36.81" cy="58.97" r=".35" />
            <circle cx="39.81" cy="56.97" r=".35" />
            <circle cx="37.81" cy="56.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dZ)`}>
            <circle cx="39.81" cy="64.97" r=".35" />
            <circle cx="37.81" cy="64.97" r=".35" />
            <circle cx="40.81" cy="62.97" r=".35" />
            <circle cx="38.81" cy="62.97" r=".35" />
            <circle cx="36.81" cy="62.97" r=".35" />
            <circle cx="39.81" cy="60.97" r=".35" />
            <circle cx="37.81" cy="60.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-d0)`}>
            <circle cx="39.81" cy="68.97" r=".35" />
            <circle cx="37.81" cy="68.97" r=".35" />
            <circle cx="40.81" cy="66.97" r=".35" />
            <circle cx="38.81" cy="66.97" r=".35" />
            <circle cx="36.81" cy="66.97" r=".35" />
            <circle cx="39.81" cy="64.97" r=".35" />
            <circle cx="37.81" cy="64.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-d1)`}>
            <circle cx="39.81" cy="72.97" r=".35" />
            <circle cx="37.81" cy="72.97" r=".35" />
            <circle cx="40.81" cy="70.97" r=".35" />
            <circle cx="38.81" cy="70.97" r=".35" />
            <circle cx="36.81" cy="70.97" r=".35" />
            <circle cx="39.81" cy="68.97" r=".35" />
            <circle cx="37.81" cy="68.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-d2)`}>
            <circle cx="39.81" cy="76.97" r=".35" />
            <circle cx="37.81" cy="76.97" r=".35" />
            <circle cx="40.81" cy="74.97" r=".35" />
            <circle cx="38.81" cy="74.97" r=".35" />
            <circle cx="36.81" cy="74.97" r=".35" />
            <circle cx="39.81" cy="72.97" r=".35" />
            <circle cx="37.81" cy="72.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-d3)`}>
            <circle cx="39.81" cy="80.97" r=".35" />
            <circle cx="37.81" cy="80.97" r=".35" />
            <circle cx="40.81" cy="78.97" r=".35" />
            <circle cx="38.81" cy="78.97" r=".35" />
            <circle cx="36.81" cy="78.97" r=".35" />
            <circle cx="39.81" cy="76.97" r=".35" />
            <circle cx="37.81" cy="76.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-d4)`}>
            <circle cx="39.81" cy="84.97" r=".35" />
            <circle cx="37.81" cy="84.97" r=".35" />
            <circle cx="40.81" cy="82.97" r=".35" />
            <circle cx="38.81" cy="82.97" r=".35" />
            <circle cx="36.81" cy="82.97" r=".35" />
            <circle cx="39.81" cy="80.97" r=".35" />
            <circle cx="37.81" cy="80.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-d5)`}>
            <circle cx="39.81" cy="88.97" r=".35" />
            <circle cx="37.81" cy="88.97" r=".35" />
            <circle cx="40.81" cy="86.97" r=".35" />
            <circle cx="38.81" cy="86.97" r=".35" />
            <circle cx="36.81" cy="86.97" r=".35" />
            <circle cx="39.81" cy="84.97" r=".35" />
            <circle cx="37.81" cy="84.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-d6)`}>
            <circle cx="39.81" cy="92.97" r=".35" />
            <circle cx="37.81" cy="92.97" r=".35" />
            <circle cx="40.81" cy="90.97" r=".35" />
            <circle cx="38.81" cy="90.97" r=".35" />
            <circle cx="36.81" cy="90.97" r=".35" />
            <circle cx="39.81" cy="88.97" r=".35" />
            <circle cx="37.81" cy="88.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-d7)`}>
            <circle cx="39.81" cy="96.97" r=".35" />
            <circle cx="37.81" cy="96.97" r=".35" />
            <circle cx="40.81" cy="94.97" r=".35" />
            <circle cx="38.81" cy="94.97" r=".35" />
            <circle cx="36.81" cy="94.97" r=".35" />
            <circle cx="39.81" cy="92.97" r=".35" />
            <circle cx="37.81" cy="92.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-d8)`}>
            <circle cx="39.81" cy="100.97" r=".35" />
            <circle cx="37.81" cy="100.97" r=".35" />
            <circle cx="40.81" cy="98.97" r=".35" />
            <circle cx="38.81" cy="98.97" r=".35" />
            <circle cx="36.81" cy="98.97" r=".35" />
            <circle cx="39.81" cy="96.97" r=".35" />
            <circle cx="37.81" cy="96.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-d9)`}>
            <circle cx="39.81" cy="104.97" r=".35" />
            <circle cx="37.81" cy="104.97" r=".35" />
            <circle cx="40.81" cy="102.97" r=".35" />
            <circle cx="38.81" cy="102.97" r=".35" />
            <circle cx="36.81" cy="102.97" r=".35" />
            <circle cx="39.81" cy="100.97" r=".35" />
            <circle cx="37.81" cy="100.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ea)`}>
            <circle cx="39.81" cy="108.97" r=".35" />
            <circle cx="37.81" cy="108.97" r=".35" />
            <circle cx="40.81" cy="106.97" r=".35" />
            <circle cx="38.81" cy="106.97" r=".35" />
            <circle cx="36.81" cy="106.97" r=".35" />
            <circle cx="39.81" cy="104.97" r=".35" />
            <circle cx="37.81" cy="104.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bj)`}>
            <circle cx="71.81" cy="40.97" r=".35" />
            <circle cx="69.81" cy="40.97" r=".35" />
            <circle cx="72.81" cy="38.97" r=".35" />
            <circle cx="70.81" cy="38.97" r=".35" />
            <circle cx="68.81" cy="38.97" r=".35" />
            <circle cx="71.81" cy="36.97" r=".35" />
            <circle cx="69.81" cy="36.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bk)`}>
            <circle cx="71.81" cy="44.97" r=".35" />
            <circle cx="69.81" cy="44.97" r=".35" />
            <circle cx="72.81" cy="42.97" r=".35" />
            <circle cx="70.81" cy="42.97" r=".35" />
            <circle cx="68.81" cy="42.97" r=".35" />
            <circle cx="71.81" cy="40.97" r=".35" />
            <circle cx="69.81" cy="40.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bD)`}>
            <circle cx="67.81" cy="40.97" r=".35" />
            <circle cx="65.81" cy="40.97" r=".35" />
            <circle cx="68.81" cy="38.97" r=".35" />
            <circle cx="66.81" cy="38.97" r=".35" />
            <circle cx="64.81" cy="38.97" r=".35" />
            <circle cx="67.81" cy="36.97" r=".35" />
            <circle cx="65.81" cy="36.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bE)`}>
            <circle cx="67.81" cy="44.97" r=".35" />
            <circle cx="65.81" cy="44.97" r=".35" />
            <circle cx="68.81" cy="42.97" r=".35" />
            <circle cx="66.81" cy="42.97" r=".35" />
            <circle cx="64.81" cy="42.97" r=".35" />
            <circle cx="67.81" cy="40.97" r=".35" />
            <circle cx="65.81" cy="40.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bX)`}>
            <circle cx="63.81" cy="40.97" r=".35" />
            <circle cx="61.81" cy="40.97" r=".35" />
            <circle cx="64.81" cy="38.97" r=".35" />
            <circle cx="62.81" cy="38.97" r=".35" />
            <circle cx="60.81" cy="38.97" r=".35" />
            <circle cx="63.81" cy="36.97" r=".35" />
            <circle cx="61.81" cy="36.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bY)`}>
            <circle cx="63.81" cy="44.97" r=".35" />
            <circle cx="61.81" cy="44.97" r=".35" />
            <circle cx="64.81" cy="42.97" r=".35" />
            <circle cx="62.81" cy="42.97" r=".35" />
            <circle cx="60.81" cy="42.97" r=".35" />
            <circle cx="63.81" cy="40.97" r=".35" />
            <circle cx="61.81" cy="40.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ch)`}>
            <circle cx="59.81" cy="40.97" r=".35" />
            <circle cx="57.81" cy="40.97" r=".35" />
            <circle cx="60.81" cy="38.97" r=".35" />
            <circle cx="58.81" cy="38.97" r=".35" />
            <circle cx="56.81" cy="38.97" r=".35" />
            <circle cx="59.81" cy="36.97" r=".35" />
            <circle cx="57.81" cy="36.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ci)`}>
            <circle cx="59.81" cy="44.97" r=".35" />
            <circle cx="57.81" cy="44.97" r=".35" />
            <circle cx="60.81" cy="42.97" r=".35" />
            <circle cx="58.81" cy="42.97" r=".35" />
            <circle cx="56.81" cy="42.97" r=".35" />
            <circle cx="59.81" cy="40.97" r=".35" />
            <circle cx="57.81" cy="40.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cB)`}>
            <circle cx="55.81" cy="40.97" r=".35" />
            <circle cx="53.81" cy="40.97" r=".35" />
            <circle cx="56.81" cy="38.97" r=".35" />
            <circle cx="54.81" cy="38.97" r=".35" />
            <circle cx="52.81" cy="38.97" r=".35" />
            <circle cx="55.81" cy="36.97" r=".35" />
            <circle cx="53.81" cy="36.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cC)`}>
            <circle cx="55.81" cy="44.97" r=".35" />
            <circle cx="53.81" cy="44.97" r=".35" />
            <circle cx="56.81" cy="42.97" r=".35" />
            <circle cx="54.81" cy="42.97" r=".35" />
            <circle cx="52.81" cy="42.97" r=".35" />
            <circle cx="55.81" cy="40.97" r=".35" />
            <circle cx="53.81" cy="40.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cV)`}>
            <circle cx="51.81" cy="40.97" r=".35" />
            <circle cx="49.81" cy="40.97" r=".35" />
            <circle cx="52.81" cy="38.97" r=".35" />
            <circle cx="50.81" cy="38.97" r=".35" />
            <circle cx="48.81" cy="38.97" r=".35" />
            <circle cx="51.81" cy="36.97" r=".35" />
            <circle cx="49.81" cy="36.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cW)`}>
            <circle cx="51.81" cy="44.97" r=".35" />
            <circle cx="49.81" cy="44.97" r=".35" />
            <circle cx="52.81" cy="42.97" r=".35" />
            <circle cx="50.81" cy="42.97" r=".35" />
            <circle cx="48.81" cy="42.97" r=".35" />
            <circle cx="51.81" cy="40.97" r=".35" />
            <circle cx="49.81" cy="40.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-df)`}>
            <circle cx="47.81" cy="40.97" r=".35" />
            <circle cx="45.81" cy="40.97" r=".35" />
            <circle cx="48.81" cy="38.97" r=".35" />
            <circle cx="46.81" cy="38.97" r=".35" />
            <circle cx="44.81" cy="38.97" r=".35" />
            <circle cx="47.81" cy="36.97" r=".35" />
            <circle cx="45.81" cy="36.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dg)`}>
            <circle cx="47.81" cy="44.97" r=".35" />
            <circle cx="45.81" cy="44.97" r=".35" />
            <circle cx="48.81" cy="42.97" r=".35" />
            <circle cx="46.81" cy="42.97" r=".35" />
            <circle cx="44.81" cy="42.97" r=".35" />
            <circle cx="47.81" cy="40.97" r=".35" />
            <circle cx="45.81" cy="40.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aM)`}>
            <circle cx="79.81" cy="68.97" r=".35" />
            <circle cx="77.81" cy="68.97" r=".35" />
            <circle cx="80.81" cy="66.97" r=".35" />
            <circle cx="78.81" cy="66.97" r=".35" />
            <circle cx="76.81" cy="66.97" r=".35" />
            <circle cx="79.81" cy="64.97" r=".35" />
            <circle cx="77.81" cy="64.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a6)`}>
            <circle cx="75.81" cy="68.97" r=".35" />
            <circle cx="73.81" cy="68.97" r=".35" />
            <circle cx="76.81" cy="66.97" r=".35" />
            <circle cx="74.81" cy="66.97" r=".35" />
            <circle cx="72.81" cy="66.97" r=".35" />
            <circle cx="75.81" cy="64.97" r=".35" />
            <circle cx="73.81" cy="64.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bq)`}>
            <circle cx="71.81" cy="68.97" r=".35" />
            <circle cx="69.81" cy="68.97" r=".35" />
            <circle cx="72.81" cy="66.97" r=".35" />
            <circle cx="70.81" cy="66.97" r=".35" />
            <circle cx="68.81" cy="66.97" r=".35" />
            <circle cx="71.81" cy="64.97" r=".35" />
            <circle cx="69.81" cy="64.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bK)`}>
            <circle cx="67.81" cy="68.97" r=".35" />
            <circle cx="65.81" cy="68.97" r=".35" />
            <circle cx="68.81" cy="66.97" r=".35" />
            <circle cx="66.81" cy="66.97" r=".35" />
            <circle cx="64.81" cy="66.97" r=".35" />
            <circle cx="67.81" cy="64.97" r=".35" />
            <circle cx="65.81" cy="64.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b4)`}>
            <circle cx="63.81" cy="68.97" r=".35" />
            <circle cx="61.81" cy="68.97" r=".35" />
            <circle cx="64.81" cy="66.97" r=".35" />
            <circle cx="62.81" cy="66.97" r=".35" />
            <circle cx="60.81" cy="66.97" r=".35" />
            <circle cx="63.81" cy="64.97" r=".35" />
            <circle cx="61.81" cy="64.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-co)`}>
            <circle cx="59.81" cy="68.97" r=".35" />
            <circle cx="57.81" cy="68.97" r=".35" />
            <circle cx="60.81" cy="66.97" r=".35" />
            <circle cx="58.81" cy="66.97" r=".35" />
            <circle cx="56.81" cy="66.97" r=".35" />
            <circle cx="59.81" cy="64.97" r=".35" />
            <circle cx="57.81" cy="64.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cI)`}>
            <circle cx="55.81" cy="68.97" r=".35" />
            <circle cx="53.81" cy="68.97" r=".35" />
            <circle cx="56.81" cy="66.97" r=".35" />
            <circle cx="54.81" cy="66.97" r=".35" />
            <circle cx="52.81" cy="66.97" r=".35" />
            <circle cx="55.81" cy="64.97" r=".35" />
            <circle cx="53.81" cy="64.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-c2)`}>
            <circle cx="51.81" cy="68.97" r=".35" />
            <circle cx="49.81" cy="68.97" r=".35" />
            <circle cx="52.81" cy="66.97" r=".35" />
            <circle cx="50.81" cy="66.97" r=".35" />
            <circle cx="48.81" cy="66.97" r=".35" />
            <circle cx="51.81" cy="64.97" r=".35" />
            <circle cx="49.81" cy="64.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dm)`}>
            <circle cx="47.81" cy="68.97" r=".35" />
            <circle cx="45.81" cy="68.97" r=".35" />
            <circle cx="48.81" cy="66.97" r=".35" />
            <circle cx="46.81" cy="66.97" r=".35" />
            <circle cx="44.81" cy="66.97" r=".35" />
            <circle cx="47.81" cy="64.97" r=".35" />
            <circle cx="45.81" cy="64.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-M)`}>
            <circle cx="91.81" cy="100.97" r=".35" />
            <circle cx="89.81" cy="100.97" r=".35" />
            <circle cx="92.81" cy="98.97" r=".35" />
            <circle cx="90.81" cy="98.97" r=".35" />
            <circle cx="88.81" cy="98.97" r=".35" />
            <circle cx="91.81" cy="96.97" r=".35" />
            <circle cx="89.81" cy="96.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ag)`}>
            <circle cx="87.81" cy="100.97" r=".35" />
            <circle cx="85.81" cy="100.97" r=".35" />
            <circle cx="88.81" cy="98.97" r=".35" />
            <circle cx="86.81" cy="98.97" r=".35" />
            <circle cx="84.81" cy="98.97" r=".35" />
            <circle cx="87.81" cy="96.97" r=".35" />
            <circle cx="85.81" cy="96.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aA)`}>
            <circle cx="83.81" cy="100.97" r=".35" />
            <circle cx="81.81" cy="100.97" r=".35" />
            <circle cx="84.81" cy="98.97" r=".35" />
            <circle cx="82.81" cy="98.97" r=".35" />
            <circle cx="80.81" cy="98.97" r=".35" />
            <circle cx="83.81" cy="96.97" r=".35" />
            <circle cx="81.81" cy="96.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aU)`}>
            <circle cx="79.81" cy="100.97" r=".35" />
            <circle cx="77.81" cy="100.97" r=".35" />
            <circle cx="80.81" cy="98.97" r=".35" />
            <circle cx="78.81" cy="98.97" r=".35" />
            <circle cx="76.81" cy="98.97" r=".35" />
            <circle cx="79.81" cy="96.97" r=".35" />
            <circle cx="77.81" cy="96.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-be)`}>
            <circle cx="75.81" cy="100.97" r=".35" />
            <circle cx="73.81" cy="100.97" r=".35" />
            <circle cx="76.81" cy="98.97" r=".35" />
            <circle cx="74.81" cy="98.97" r=".35" />
            <circle cx="72.81" cy="98.97" r=".35" />
            <circle cx="75.81" cy="96.97" r=".35" />
            <circle cx="73.81" cy="96.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-by)`}>
            <circle cx="71.81" cy="100.97" r=".35" />
            <circle cx="69.81" cy="100.97" r=".35" />
            <circle cx="72.81" cy="98.97" r=".35" />
            <circle cx="70.81" cy="98.97" r=".35" />
            <circle cx="68.81" cy="98.97" r=".35" />
            <circle cx="71.81" cy="96.97" r=".35" />
            <circle cx="69.81" cy="96.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-K)`}>
            <circle cx="91.81" cy="92.97" r=".35" />
            <circle cx="89.81" cy="92.97" r=".35" />
            <circle cx="92.81" cy="90.97" r=".35" />
            <circle cx="90.81" cy="90.97" r=".35" />
            <circle cx="88.81" cy="90.97" r=".35" />
            <circle cx="91.81" cy="88.97" r=".35" />
            <circle cx="89.81" cy="88.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ae)`}>
            <circle cx="87.81" cy="92.97" r=".35" />
            <circle cx="85.81" cy="92.97" r=".35" />
            <circle cx="88.81" cy="90.97" r=".35" />
            <circle cx="86.81" cy="90.97" r=".35" />
            <circle cx="84.81" cy="90.97" r=".35" />
            <circle cx="87.81" cy="88.97" r=".35" />
            <circle cx="85.81" cy="88.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ay)`}>
            <circle cx="83.81" cy="92.97" r=".35" />
            <circle cx="81.81" cy="92.97" r=".35" />
            <circle cx="84.81" cy="90.97" r=".35" />
            <circle cx="82.81" cy="90.97" r=".35" />
            <circle cx="80.81" cy="90.97" r=".35" />
            <circle cx="83.81" cy="88.97" r=".35" />
            <circle cx="81.81" cy="88.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aS)`}>
            <circle cx="79.81" cy="92.97" r=".35" />
            <circle cx="77.81" cy="92.97" r=".35" />
            <circle cx="80.81" cy="90.97" r=".35" />
            <circle cx="78.81" cy="90.97" r=".35" />
            <circle cx="76.81" cy="90.97" r=".35" />
            <circle cx="79.81" cy="88.97" r=".35" />
            <circle cx="77.81" cy="88.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bc)`}>
            <circle cx="75.81" cy="92.97" r=".35" />
            <circle cx="73.81" cy="92.97" r=".35" />
            <circle cx="76.81" cy="90.97" r=".35" />
            <circle cx="74.81" cy="90.97" r=".35" />
            <circle cx="72.81" cy="90.97" r=".35" />
            <circle cx="75.81" cy="88.97" r=".35" />
            <circle cx="73.81" cy="88.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bw)`}>
            <circle cx="71.81" cy="92.97" r=".35" />
            <circle cx="69.81" cy="92.97" r=".35" />
            <circle cx="72.81" cy="90.97" r=".35" />
            <circle cx="70.81" cy="90.97" r=".35" />
            <circle cx="68.81" cy="90.97" r=".35" />
            <circle cx="71.81" cy="88.97" r=".35" />
            <circle cx="69.81" cy="88.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-I)`}>
            <circle cx="91.81" cy="84.97" r=".35" />
            <circle cx="89.81" cy="84.97" r=".35" />
            <circle cx="92.81" cy="82.97" r=".35" />
            <circle cx="90.81" cy="82.97" r=".35" />
            <circle cx="88.81" cy="82.97" r=".35" />
            <circle cx="91.81" cy="80.97" r=".35" />
            <circle cx="89.81" cy="80.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ac)`}>
            <circle cx="87.81" cy="84.97" r=".35" />
            <circle cx="85.81" cy="84.97" r=".35" />
            <circle cx="88.81" cy="82.97" r=".35" />
            <circle cx="86.81" cy="82.97" r=".35" />
            <circle cx="84.81" cy="82.97" r=".35" />
            <circle cx="87.81" cy="80.97" r=".35" />
            <circle cx="85.81" cy="80.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aw)`}>
            <circle cx="83.81" cy="84.97" r=".35" />
            <circle cx="81.81" cy="84.97" r=".35" />
            <circle cx="84.81" cy="82.97" r=".35" />
            <circle cx="82.81" cy="82.97" r=".35" />
            <circle cx="80.81" cy="82.97" r=".35" />
            <circle cx="83.81" cy="80.97" r=".35" />
            <circle cx="81.81" cy="80.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aQ)`}>
            <circle cx="79.81" cy="84.97" r=".35" />
            <circle cx="77.81" cy="84.97" r=".35" />
            <circle cx="80.81" cy="82.97" r=".35" />
            <circle cx="78.81" cy="82.97" r=".35" />
            <circle cx="76.81" cy="82.97" r=".35" />
            <circle cx="79.81" cy="80.97" r=".35" />
            <circle cx="77.81" cy="80.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ba)`}>
            <circle cx="75.81" cy="84.97" r=".35" />
            <circle cx="73.81" cy="84.97" r=".35" />
            <circle cx="76.81" cy="82.97" r=".35" />
            <circle cx="74.81" cy="82.97" r=".35" />
            <circle cx="72.81" cy="82.97" r=".35" />
            <circle cx="75.81" cy="80.97" r=".35" />
            <circle cx="73.81" cy="80.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bu)`}>
            <circle cx="71.81" cy="84.97" r=".35" />
            <circle cx="69.81" cy="84.97" r=".35" />
            <circle cx="72.81" cy="82.97" r=".35" />
            <circle cx="70.81" cy="82.97" r=".35" />
            <circle cx="68.81" cy="82.97" r=".35" />
            <circle cx="71.81" cy="80.97" r=".35" />
            <circle cx="69.81" cy="80.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-G)`}>
            <circle cx="91.81" cy="76.97" r=".35" />
            <circle cx="89.81" cy="76.97" r=".35" />
            <circle cx="92.81" cy="74.97" r=".35" />
            <circle cx="90.81" cy="74.97" r=".35" />
            <circle cx="88.81" cy="74.97" r=".35" />
            <circle cx="91.81" cy="72.97" r=".35" />
            <circle cx="89.81" cy="72.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-H)`}>
            <circle cx="91.81" cy="80.97" r=".35" />
            <circle cx="89.81" cy="80.97" r=".35" />
            <circle cx="92.81" cy="78.97" r=".35" />
            <circle cx="90.81" cy="78.97" r=".35" />
            <circle cx="88.81" cy="78.97" r=".35" />
            <circle cx="91.81" cy="76.97" r=".35" />
            <circle cx="89.81" cy="76.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aa)`}>
            <circle cx="87.81" cy="76.97" r=".35" />
            <circle cx="85.81" cy="76.97" r=".35" />
            <circle cx="88.81" cy="74.97" r=".35" />
            <circle cx="86.81" cy="74.97" r=".35" />
            <circle cx="84.81" cy="74.97" r=".35" />
            <circle cx="87.81" cy="72.97" r=".35" />
            <circle cx="85.81" cy="72.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ab)`}>
            <circle cx="87.81" cy="80.97" r=".35" />
            <circle cx="85.81" cy="80.97" r=".35" />
            <circle cx="88.81" cy="78.97" r=".35" />
            <circle cx="86.81" cy="78.97" r=".35" />
            <circle cx="84.81" cy="78.97" r=".35" />
            <circle cx="87.81" cy="76.97" r=".35" />
            <circle cx="85.81" cy="76.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-au)`}>
            <circle cx="83.81" cy="76.97" r=".35" />
            <circle cx="81.81" cy="76.97" r=".35" />
            <circle cx="84.81" cy="74.97" r=".35" />
            <circle cx="82.81" cy="74.97" r=".35" />
            <circle cx="80.81" cy="74.97" r=".35" />
            <circle cx="83.81" cy="72.97" r=".35" />
            <circle cx="81.81" cy="72.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-av)`}>
            <circle cx="83.81" cy="80.97" r=".35" />
            <circle cx="81.81" cy="80.97" r=".35" />
            <circle cx="84.81" cy="78.97" r=".35" />
            <circle cx="82.81" cy="78.97" r=".35" />
            <circle cx="80.81" cy="78.97" r=".35" />
            <circle cx="83.81" cy="76.97" r=".35" />
            <circle cx="81.81" cy="76.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aO)`}>
            <circle cx="79.81" cy="76.97" r=".35" />
            <circle cx="77.81" cy="76.97" r=".35" />
            <circle cx="80.81" cy="74.97" r=".35" />
            <circle cx="78.81" cy="74.97" r=".35" />
            <circle cx="76.81" cy="74.97" r=".35" />
            <circle cx="79.81" cy="72.97" r=".35" />
            <circle cx="77.81" cy="72.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aP)`}>
            <circle cx="79.81" cy="80.97" r=".35" />
            <circle cx="77.81" cy="80.97" r=".35" />
            <circle cx="80.81" cy="78.97" r=".35" />
            <circle cx="78.81" cy="78.97" r=".35" />
            <circle cx="76.81" cy="78.97" r=".35" />
            <circle cx="79.81" cy="76.97" r=".35" />
            <circle cx="77.81" cy="76.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a8)`}>
            <circle cx="75.81" cy="76.97" r=".35" />
            <circle cx="73.81" cy="76.97" r=".35" />
            <circle cx="76.81" cy="74.97" r=".35" />
            <circle cx="74.81" cy="74.97" r=".35" />
            <circle cx="72.81" cy="74.97" r=".35" />
            <circle cx="75.81" cy="72.97" r=".35" />
            <circle cx="73.81" cy="72.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a9)`}>
            <circle cx="75.81" cy="80.97" r=".35" />
            <circle cx="73.81" cy="80.97" r=".35" />
            <circle cx="76.81" cy="78.97" r=".35" />
            <circle cx="74.81" cy="78.97" r=".35" />
            <circle cx="72.81" cy="78.97" r=".35" />
            <circle cx="75.81" cy="76.97" r=".35" />
            <circle cx="73.81" cy="76.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bs)`}>
            <circle cx="71.81" cy="76.97" r=".35" />
            <circle cx="69.81" cy="76.97" r=".35" />
            <circle cx="72.81" cy="74.97" r=".35" />
            <circle cx="70.81" cy="74.97" r=".35" />
            <circle cx="68.81" cy="74.97" r=".35" />
            <circle cx="71.81" cy="72.97" r=".35" />
            <circle cx="69.81" cy="72.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bt)`}>
            <circle cx="71.81" cy="80.97" r=".35" />
            <circle cx="69.81" cy="80.97" r=".35" />
            <circle cx="72.81" cy="78.97" r=".35" />
            <circle cx="70.81" cy="78.97" r=".35" />
            <circle cx="68.81" cy="78.97" r=".35" />
            <circle cx="71.81" cy="76.97" r=".35" />
            <circle cx="69.81" cy="76.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-C)`}>
            <circle cx="91.81" cy="60.97" r=".35" />
            <circle cx="89.81" cy="60.97" r=".35" />
            <circle cx="92.81" cy="58.97" r=".35" />
            <circle cx="90.81" cy="58.97" r=".35" />
            <circle cx="88.81" cy="58.97" r=".35" />
            <circle cx="91.81" cy="56.97" r=".35" />
            <circle cx="89.81" cy="56.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-W)`}>
            <circle cx="87.81" cy="60.97" r=".35" />
            <circle cx="85.81" cy="60.97" r=".35" />
            <circle cx="88.81" cy="58.97" r=".35" />
            <circle cx="86.81" cy="58.97" r=".35" />
            <circle cx="84.81" cy="58.97" r=".35" />
            <circle cx="87.81" cy="56.97" r=".35" />
            <circle cx="85.81" cy="56.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aq)`}>
            <circle cx="83.81" cy="60.97" r=".35" />
            <circle cx="81.81" cy="60.97" r=".35" />
            <circle cx="84.81" cy="58.97" r=".35" />
            <circle cx="82.81" cy="58.97" r=".35" />
            <circle cx="80.81" cy="58.97" r=".35" />
            <circle cx="83.81" cy="56.97" r=".35" />
            <circle cx="81.81" cy="56.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aK)`}>
            <circle cx="79.81" cy="60.97" r=".35" />
            <circle cx="77.81" cy="60.97" r=".35" />
            <circle cx="80.81" cy="58.97" r=".35" />
            <circle cx="78.81" cy="58.97" r=".35" />
            <circle cx="76.81" cy="58.97" r=".35" />
            <circle cx="79.81" cy="56.97" r=".35" />
            <circle cx="77.81" cy="56.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a4)`}>
            <circle cx="75.81" cy="60.97" r=".35" />
            <circle cx="73.81" cy="60.97" r=".35" />
            <circle cx="76.81" cy="58.97" r=".35" />
            <circle cx="74.81" cy="58.97" r=".35" />
            <circle cx="72.81" cy="58.97" r=".35" />
            <circle cx="75.81" cy="56.97" r=".35" />
            <circle cx="73.81" cy="56.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bo)`}>
            <circle cx="71.81" cy="60.97" r=".35" />
            <circle cx="69.81" cy="60.97" r=".35" />
            <circle cx="72.81" cy="58.97" r=".35" />
            <circle cx="70.81" cy="58.97" r=".35" />
            <circle cx="68.81" cy="58.97" r=".35" />
            <circle cx="71.81" cy="56.97" r=".35" />
            <circle cx="69.81" cy="56.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bI)`}>
            <circle cx="67.81" cy="60.97" r=".35" />
            <circle cx="65.81" cy="60.97" r=".35" />
            <circle cx="68.81" cy="58.97" r=".35" />
            <circle cx="66.81" cy="58.97" r=".35" />
            <circle cx="64.81" cy="58.97" r=".35" />
            <circle cx="67.81" cy="56.97" r=".35" />
            <circle cx="65.81" cy="56.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b2)`}>
            <circle cx="63.81" cy="60.97" r=".35" />
            <circle cx="61.81" cy="60.97" r=".35" />
            <circle cx="64.81" cy="58.97" r=".35" />
            <circle cx="62.81" cy="58.97" r=".35" />
            <circle cx="60.81" cy="58.97" r=".35" />
            <circle cx="63.81" cy="56.97" r=".35" />
            <circle cx="61.81" cy="56.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cm)`}>
            <circle cx="59.81" cy="60.97" r=".35" />
            <circle cx="57.81" cy="60.97" r=".35" />
            <circle cx="60.81" cy="58.97" r=".35" />
            <circle cx="58.81" cy="58.97" r=".35" />
            <circle cx="56.81" cy="58.97" r=".35" />
            <circle cx="59.81" cy="56.97" r=".35" />
            <circle cx="57.81" cy="56.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cG)`}>
            <circle cx="55.81" cy="60.97" r=".35" />
            <circle cx="53.81" cy="60.97" r=".35" />
            <circle cx="56.81" cy="58.97" r=".35" />
            <circle cx="54.81" cy="58.97" r=".35" />
            <circle cx="52.81" cy="58.97" r=".35" />
            <circle cx="55.81" cy="56.97" r=".35" />
            <circle cx="53.81" cy="56.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-c0)`}>
            <circle cx="51.81" cy="60.97" r=".35" />
            <circle cx="49.81" cy="60.97" r=".35" />
            <circle cx="52.81" cy="58.97" r=".35" />
            <circle cx="50.81" cy="58.97" r=".35" />
            <circle cx="48.81" cy="58.97" r=".35" />
            <circle cx="51.81" cy="56.97" r=".35" />
            <circle cx="49.81" cy="56.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dk)`}>
            <circle cx="47.81" cy="60.97" r=".35" />
            <circle cx="45.81" cy="60.97" r=".35" />
            <circle cx="48.81" cy="58.97" r=".35" />
            <circle cx="46.81" cy="58.97" r=".35" />
            <circle cx="44.81" cy="58.97" r=".35" />
            <circle cx="47.81" cy="56.97" r=".35" />
            <circle cx="45.81" cy="56.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-A)`}>
            <circle cx="91.81" cy="52.97" r=".35" />
            <circle cx="89.81" cy="52.97" r=".35" />
            <circle cx="92.81" cy="50.97" r=".35" />
            <circle cx="90.81" cy="50.97" r=".35" />
            <circle cx="88.81" cy="50.97" r=".35" />
            <circle cx="91.81" cy="48.97" r=".35" />
            <circle cx="89.81" cy="48.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-B)`}>
            <circle cx="91.81" cy="56.97" r=".35" />
            <circle cx="89.81" cy="56.97" r=".35" />
            <circle cx="92.81" cy="54.97" r=".35" />
            <circle cx="90.81" cy="54.97" r=".35" />
            <circle cx="88.81" cy="54.97" r=".35" />
            <circle cx="91.81" cy="52.97" r=".35" />
            <circle cx="89.81" cy="52.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-U)`}>
            <circle cx="87.81" cy="52.97" r=".35" />
            <circle cx="85.81" cy="52.97" r=".35" />
            <circle cx="88.81" cy="50.97" r=".35" />
            <circle cx="86.81" cy="50.97" r=".35" />
            <circle cx="84.81" cy="50.97" r=".35" />
            <circle cx="87.81" cy="48.97" r=".35" />
            <circle cx="85.81" cy="48.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-V)`}>
            <circle cx="87.81" cy="56.97" r=".35" />
            <circle cx="85.81" cy="56.97" r=".35" />
            <circle cx="88.81" cy="54.97" r=".35" />
            <circle cx="86.81" cy="54.97" r=".35" />
            <circle cx="84.81" cy="54.97" r=".35" />
            <circle cx="87.81" cy="52.97" r=".35" />
            <circle cx="85.81" cy="52.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ao)`}>
            <circle cx="83.81" cy="52.97" r=".35" />
            <circle cx="81.81" cy="52.97" r=".35" />
            <circle cx="84.81" cy="50.97" r=".35" />
            <circle cx="82.81" cy="50.97" r=".35" />
            <circle cx="80.81" cy="50.97" r=".35" />
            <circle cx="83.81" cy="48.97" r=".35" />
            <circle cx="81.81" cy="48.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ap)`}>
            <circle cx="83.81" cy="56.97" r=".35" />
            <circle cx="81.81" cy="56.97" r=".35" />
            <circle cx="84.81" cy="54.97" r=".35" />
            <circle cx="82.81" cy="54.97" r=".35" />
            <circle cx="80.81" cy="54.97" r=".35" />
            <circle cx="83.81" cy="52.97" r=".35" />
            <circle cx="81.81" cy="52.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aI)`}>
            <circle cx="79.81" cy="52.97" r=".35" />
            <circle cx="77.81" cy="52.97" r=".35" />
            <circle cx="80.81" cy="50.97" r=".35" />
            <circle cx="78.81" cy="50.97" r=".35" />
            <circle cx="76.81" cy="50.97" r=".35" />
            <circle cx="79.81" cy="48.97" r=".35" />
            <circle cx="77.81" cy="48.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aJ)`}>
            <circle cx="79.81" cy="56.97" r=".35" />
            <circle cx="77.81" cy="56.97" r=".35" />
            <circle cx="80.81" cy="54.97" r=".35" />
            <circle cx="78.81" cy="54.97" r=".35" />
            <circle cx="76.81" cy="54.97" r=".35" />
            <circle cx="79.81" cy="52.97" r=".35" />
            <circle cx="77.81" cy="52.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a2)`}>
            <circle cx="75.81" cy="52.97" r=".35" />
            <circle cx="73.81" cy="52.97" r=".35" />
            <circle cx="76.81" cy="50.97" r=".35" />
            <circle cx="74.81" cy="50.97" r=".35" />
            <circle cx="72.81" cy="50.97" r=".35" />
            <circle cx="75.81" cy="48.97" r=".35" />
            <circle cx="73.81" cy="48.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a3)`}>
            <circle cx="75.81" cy="56.97" r=".35" />
            <circle cx="73.81" cy="56.97" r=".35" />
            <circle cx="76.81" cy="54.97" r=".35" />
            <circle cx="74.81" cy="54.97" r=".35" />
            <circle cx="72.81" cy="54.97" r=".35" />
            <circle cx="75.81" cy="52.97" r=".35" />
            <circle cx="73.81" cy="52.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bm)`}>
            <circle cx="71.81" cy="52.97" r=".35" />
            <circle cx="69.81" cy="52.97" r=".35" />
            <circle cx="72.81" cy="50.97" r=".35" />
            <circle cx="70.81" cy="50.97" r=".35" />
            <circle cx="68.81" cy="50.97" r=".35" />
            <circle cx="71.81" cy="48.97" r=".35" />
            <circle cx="69.81" cy="48.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bn)`}>
            <circle cx="71.81" cy="56.97" r=".35" />
            <circle cx="69.81" cy="56.97" r=".35" />
            <circle cx="72.81" cy="54.97" r=".35" />
            <circle cx="70.81" cy="54.97" r=".35" />
            <circle cx="68.81" cy="54.97" r=".35" />
            <circle cx="71.81" cy="52.97" r=".35" />
            <circle cx="69.81" cy="52.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bG)`}>
            <circle cx="67.81" cy="52.97" r=".35" />
            <circle cx="65.81" cy="52.97" r=".35" />
            <circle cx="68.81" cy="50.97" r=".35" />
            <circle cx="66.81" cy="50.97" r=".35" />
            <circle cx="64.81" cy="50.97" r=".35" />
            <circle cx="67.81" cy="48.97" r=".35" />
            <circle cx="65.81" cy="48.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bH)`}>
            <circle cx="67.81" cy="56.97" r=".35" />
            <circle cx="65.81" cy="56.97" r=".35" />
            <circle cx="68.81" cy="54.97" r=".35" />
            <circle cx="66.81" cy="54.97" r=".35" />
            <circle cx="64.81" cy="54.97" r=".35" />
            <circle cx="67.81" cy="52.97" r=".35" />
            <circle cx="65.81" cy="52.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b0)`}>
            <circle cx="63.81" cy="52.97" r=".35" />
            <circle cx="61.81" cy="52.97" r=".35" />
            <circle cx="64.81" cy="50.97" r=".35" />
            <circle cx="62.81" cy="50.97" r=".35" />
            <circle cx="60.81" cy="50.97" r=".35" />
            <circle cx="63.81" cy="48.97" r=".35" />
            <circle cx="61.81" cy="48.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b1)`}>
            <circle cx="63.81" cy="56.97" r=".35" />
            <circle cx="61.81" cy="56.97" r=".35" />
            <circle cx="64.81" cy="54.97" r=".35" />
            <circle cx="62.81" cy="54.97" r=".35" />
            <circle cx="60.81" cy="54.97" r=".35" />
            <circle cx="63.81" cy="52.97" r=".35" />
            <circle cx="61.81" cy="52.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ck)`}>
            <circle cx="59.81" cy="52.97" r=".35" />
            <circle cx="57.81" cy="52.97" r=".35" />
            <circle cx="60.81" cy="50.97" r=".35" />
            <circle cx="58.81" cy="50.97" r=".35" />
            <circle cx="56.81" cy="50.97" r=".35" />
            <circle cx="59.81" cy="48.97" r=".35" />
            <circle cx="57.81" cy="48.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cl)`}>
            <circle cx="59.81" cy="56.97" r=".35" />
            <circle cx="57.81" cy="56.97" r=".35" />
            <circle cx="60.81" cy="54.97" r=".35" />
            <circle cx="58.81" cy="54.97" r=".35" />
            <circle cx="56.81" cy="54.97" r=".35" />
            <circle cx="59.81" cy="52.97" r=".35" />
            <circle cx="57.81" cy="52.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cE)`}>
            <circle cx="55.81" cy="52.97" r=".35" />
            <circle cx="53.81" cy="52.97" r=".35" />
            <circle cx="56.81" cy="50.97" r=".35" />
            <circle cx="54.81" cy="50.97" r=".35" />
            <circle cx="52.81" cy="50.97" r=".35" />
            <circle cx="55.81" cy="48.97" r=".35" />
            <circle cx="53.81" cy="48.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cF)`}>
            <circle cx="55.81" cy="56.97" r=".35" />
            <circle cx="53.81" cy="56.97" r=".35" />
            <circle cx="56.81" cy="54.97" r=".35" />
            <circle cx="54.81" cy="54.97" r=".35" />
            <circle cx="52.81" cy="54.97" r=".35" />
            <circle cx="55.81" cy="52.97" r=".35" />
            <circle cx="53.81" cy="52.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cY)`}>
            <circle cx="51.81" cy="52.97" r=".35" />
            <circle cx="49.81" cy="52.97" r=".35" />
            <circle cx="52.81" cy="50.97" r=".35" />
            <circle cx="50.81" cy="50.97" r=".35" />
            <circle cx="48.81" cy="50.97" r=".35" />
            <circle cx="51.81" cy="48.97" r=".35" />
            <circle cx="49.81" cy="48.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cZ)`}>
            <circle cx="51.81" cy="56.97" r=".35" />
            <circle cx="49.81" cy="56.97" r=".35" />
            <circle cx="52.81" cy="54.97" r=".35" />
            <circle cx="50.81" cy="54.97" r=".35" />
            <circle cx="48.81" cy="54.97" r=".35" />
            <circle cx="51.81" cy="52.97" r=".35" />
            <circle cx="49.81" cy="52.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-di)`}>
            <circle cx="47.81" cy="52.97" r=".35" />
            <circle cx="45.81" cy="52.97" r=".35" />
            <circle cx="48.81" cy="50.97" r=".35" />
            <circle cx="46.81" cy="50.97" r=".35" />
            <circle cx="44.81" cy="50.97" r=".35" />
            <circle cx="47.81" cy="48.97" r=".35" />
            <circle cx="45.81" cy="48.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dj)`}>
            <circle cx="47.81" cy="56.97" r=".35" />
            <circle cx="45.81" cy="56.97" r=".35" />
            <circle cx="48.81" cy="54.97" r=".35" />
            <circle cx="46.81" cy="54.97" r=".35" />
            <circle cx="44.81" cy="54.97" r=".35" />
            <circle cx="47.81" cy="52.97" r=".35" />
            <circle cx="45.81" cy="52.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-z)`}>
            <circle cx="91.81" cy="48.97" r=".35" />
            <circle cx="89.81" cy="48.97" r=".35" />
            <circle cx="92.81" cy="46.97" r=".35" />
            <circle cx="90.81" cy="46.97" r=".35" />
            <circle cx="88.81" cy="46.97" r=".35" />
            <circle cx="91.81" cy="44.97" r=".35" />
            <circle cx="89.81" cy="44.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-T)`}>
            <circle cx="87.81" cy="48.97" r=".35" />
            <circle cx="85.81" cy="48.97" r=".35" />
            <circle cx="88.81" cy="46.97" r=".35" />
            <circle cx="86.81" cy="46.97" r=".35" />
            <circle cx="84.81" cy="46.97" r=".35" />
            <circle cx="87.81" cy="44.97" r=".35" />
            <circle cx="85.81" cy="44.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-an)`}>
            <circle cx="83.81" cy="48.97" r=".35" />
            <circle cx="81.81" cy="48.97" r=".35" />
            <circle cx="84.81" cy="46.97" r=".35" />
            <circle cx="82.81" cy="46.97" r=".35" />
            <circle cx="80.81" cy="46.97" r=".35" />
            <circle cx="83.81" cy="44.97" r=".35" />
            <circle cx="81.81" cy="44.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aH)`}>
            <circle cx="79.81" cy="48.97" r=".35" />
            <circle cx="77.81" cy="48.97" r=".35" />
            <circle cx="80.81" cy="46.97" r=".35" />
            <circle cx="78.81" cy="46.97" r=".35" />
            <circle cx="76.81" cy="46.97" r=".35" />
            <circle cx="79.81" cy="44.97" r=".35" />
            <circle cx="77.81" cy="44.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a1)`}>
            <circle cx="75.81" cy="48.97" r=".35" />
            <circle cx="73.81" cy="48.97" r=".35" />
            <circle cx="76.81" cy="46.97" r=".35" />
            <circle cx="74.81" cy="46.97" r=".35" />
            <circle cx="72.81" cy="46.97" r=".35" />
            <circle cx="75.81" cy="44.97" r=".35" />
            <circle cx="73.81" cy="44.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bl)`}>
            <circle cx="71.81" cy="48.97" r=".35" />
            <circle cx="69.81" cy="48.97" r=".35" />
            <circle cx="72.81" cy="46.97" r=".35" />
            <circle cx="70.81" cy="46.97" r=".35" />
            <circle cx="68.81" cy="46.97" r=".35" />
            <circle cx="71.81" cy="44.97" r=".35" />
            <circle cx="69.81" cy="44.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bF)`}>
            <circle cx="67.81" cy="48.97" r=".35" />
            <circle cx="65.81" cy="48.97" r=".35" />
            <circle cx="68.81" cy="46.97" r=".35" />
            <circle cx="66.81" cy="46.97" r=".35" />
            <circle cx="64.81" cy="46.97" r=".35" />
            <circle cx="67.81" cy="44.97" r=".35" />
            <circle cx="65.81" cy="44.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bZ)`}>
            <circle cx="63.81" cy="48.97" r=".35" />
            <circle cx="61.81" cy="48.97" r=".35" />
            <circle cx="64.81" cy="46.97" r=".35" />
            <circle cx="62.81" cy="46.97" r=".35" />
            <circle cx="60.81" cy="46.97" r=".35" />
            <circle cx="63.81" cy="44.97" r=".35" />
            <circle cx="61.81" cy="44.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cj)`}>
            <circle cx="59.81" cy="48.97" r=".35" />
            <circle cx="57.81" cy="48.97" r=".35" />
            <circle cx="60.81" cy="46.97" r=".35" />
            <circle cx="58.81" cy="46.97" r=".35" />
            <circle cx="56.81" cy="46.97" r=".35" />
            <circle cx="59.81" cy="44.97" r=".35" />
            <circle cx="57.81" cy="44.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cD)`}>
            <circle cx="55.81" cy="48.97" r=".35" />
            <circle cx="53.81" cy="48.97" r=".35" />
            <circle cx="56.81" cy="46.97" r=".35" />
            <circle cx="54.81" cy="46.97" r=".35" />
            <circle cx="52.81" cy="46.97" r=".35" />
            <circle cx="55.81" cy="44.97" r=".35" />
            <circle cx="53.81" cy="44.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cX)`}>
            <circle cx="51.81" cy="48.97" r=".35" />
            <circle cx="49.81" cy="48.97" r=".35" />
            <circle cx="52.81" cy="46.97" r=".35" />
            <circle cx="50.81" cy="46.97" r=".35" />
            <circle cx="48.81" cy="46.97" r=".35" />
            <circle cx="51.81" cy="44.97" r=".35" />
            <circle cx="49.81" cy="44.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dh)`}>
            <circle cx="47.81" cy="48.97" r=".35" />
            <circle cx="45.81" cy="48.97" r=".35" />
            <circle cx="48.81" cy="46.97" r=".35" />
            <circle cx="46.81" cy="46.97" r=".35" />
            <circle cx="44.81" cy="46.97" r=".35" />
            <circle cx="47.81" cy="44.97" r=".35" />
            <circle cx="45.81" cy="44.97" r=".35" />
          </g>
        </g>
        <g clipPath={`url(#${id}-eb)`} fill="#feca1e">
          <g clipPath={`url(#${id}-k)`}>
            <circle cx="95.81" cy="68.97" r=".35" />
            <circle cx="93.81" cy="68.97" r=".35" />
            <circle cx="96.81" cy="66.97" r=".35" />
            <circle cx="94.81" cy="66.97" r=".35" />
            <circle cx="92.81" cy="66.97" r=".35" />
            <circle cx="95.81" cy="64.97" r=".35" />
            <circle cx="93.81" cy="64.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-l)`}>
            <circle cx="95.81" cy="72.97" r=".35" />
            <circle cx="93.81" cy="72.97" r=".35" />
            <circle cx="96.81" cy="70.97" r=".35" />
            <circle cx="94.81" cy="70.97" r=".35" />
            <circle cx="92.81" cy="70.97" r=".35" />
            <circle cx="95.81" cy="68.97" r=".35" />
            <circle cx="93.81" cy="68.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-m)`}>
            <circle cx="95.81" cy="76.97" r=".35" />
            <circle cx="93.81" cy="76.97" r=".35" />
            <circle cx="96.81" cy="74.97" r=".35" />
            <circle cx="94.81" cy="74.97" r=".35" />
            <circle cx="92.81" cy="74.97" r=".35" />
            <circle cx="95.81" cy="72.97" r=".35" />
            <circle cx="93.81" cy="72.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-n)`}>
            <circle cx="95.81" cy="80.97" r=".35" />
            <circle cx="93.81" cy="80.97" r=".35" />
            <circle cx="96.81" cy="78.97" r=".35" />
            <circle cx="94.81" cy="78.97" r=".35" />
            <circle cx="92.81" cy="78.97" r=".35" />
            <circle cx="95.81" cy="76.97" r=".35" />
            <circle cx="93.81" cy="76.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-o)`}>
            <circle cx="95.81" cy="84.97" r=".35" />
            <circle cx="93.81" cy="84.97" r=".35" />
            <circle cx="96.81" cy="82.97" r=".35" />
            <circle cx="94.81" cy="82.97" r=".35" />
            <circle cx="92.81" cy="82.97" r=".35" />
            <circle cx="95.81" cy="80.97" r=".35" />
            <circle cx="93.81" cy="80.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-p)`}>
            <circle cx="95.81" cy="88.97" r=".35" />
            <circle cx="93.81" cy="88.97" r=".35" />
            <circle cx="96.81" cy="86.97" r=".35" />
            <circle cx="94.81" cy="86.97" r=".35" />
            <circle cx="92.81" cy="86.97" r=".35" />
            <circle cx="95.81" cy="84.97" r=".35" />
            <circle cx="93.81" cy="84.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-q)`}>
            <circle cx="95.81" cy="92.97" r=".35" />
            <circle cx="93.81" cy="92.97" r=".35" />
            <circle cx="96.81" cy="90.97" r=".35" />
            <circle cx="94.81" cy="90.97" r=".35" />
            <circle cx="92.81" cy="90.97" r=".35" />
            <circle cx="95.81" cy="88.97" r=".35" />
            <circle cx="93.81" cy="88.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-r)`}>
            <circle cx="95.81" cy="96.97" r=".35" />
            <circle cx="93.81" cy="96.97" r=".35" />
            <circle cx="96.81" cy="94.97" r=".35" />
            <circle cx="94.81" cy="94.97" r=".35" />
            <circle cx="92.81" cy="94.97" r=".35" />
            <circle cx="95.81" cy="92.97" r=".35" />
            <circle cx="93.81" cy="92.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-s)`}>
            <circle cx="95.81" cy="100.97" r=".35" />
            <circle cx="93.81" cy="100.97" r=".35" />
            <circle cx="96.81" cy="98.97" r=".35" />
            <circle cx="94.81" cy="98.97" r=".35" />
            <circle cx="92.81" cy="98.97" r=".35" />
            <circle cx="95.81" cy="96.97" r=".35" />
            <circle cx="93.81" cy="96.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-t)`}>
            <circle cx="95.81" cy="104.97" r=".35" />
            <circle cx="93.81" cy="104.97" r=".35" />
            <circle cx="96.81" cy="102.97" r=".35" />
            <circle cx="94.81" cy="102.97" r=".35" />
            <circle cx="92.81" cy="102.97" r=".35" />
            <circle cx="95.81" cy="100.97" r=".35" />
            <circle cx="93.81" cy="100.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-u)`}>
            <circle cx="95.81" cy="108.97" r=".35" />
            <circle cx="93.81" cy="108.97" r=".35" />
            <circle cx="96.81" cy="106.97" r=".35" />
            <circle cx="94.81" cy="106.97" r=".35" />
            <circle cx="92.81" cy="106.97" r=".35" />
            <circle cx="95.81" cy="104.97" r=".35" />
            <circle cx="93.81" cy="104.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-E)`}>
            <circle cx="91.81" cy="68.97" r=".35" />
            <circle cx="89.81" cy="68.97" r=".35" />
            <circle cx="92.81" cy="66.97" r=".35" />
            <circle cx="90.81" cy="66.97" r=".35" />
            <circle cx="88.81" cy="66.97" r=".35" />
            <circle cx="91.81" cy="64.97" r=".35" />
            <circle cx="89.81" cy="64.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-F)`}>
            <circle cx="91.81" cy="72.97" r=".35" />
            <circle cx="89.81" cy="72.97" r=".35" />
            <circle cx="92.81" cy="70.97" r=".35" />
            <circle cx="90.81" cy="70.97" r=".35" />
            <circle cx="88.81" cy="70.97" r=".35" />
            <circle cx="91.81" cy="68.97" r=".35" />
            <circle cx="89.81" cy="68.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-G)`}>
            <circle cx="91.81" cy="76.97" r=".35" />
            <circle cx="89.81" cy="76.97" r=".35" />
            <circle cx="92.81" cy="74.97" r=".35" />
            <circle cx="90.81" cy="74.97" r=".35" />
            <circle cx="88.81" cy="74.97" r=".35" />
            <circle cx="91.81" cy="72.97" r=".35" />
            <circle cx="89.81" cy="72.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-H)`}>
            <circle cx="91.81" cy="80.97" r=".35" />
            <circle cx="89.81" cy="80.97" r=".35" />
            <circle cx="92.81" cy="78.97" r=".35" />
            <circle cx="90.81" cy="78.97" r=".35" />
            <circle cx="88.81" cy="78.97" r=".35" />
            <circle cx="91.81" cy="76.97" r=".35" />
            <circle cx="89.81" cy="76.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-I)`}>
            <circle cx="91.81" cy="84.97" r=".35" />
            <circle cx="89.81" cy="84.97" r=".35" />
            <circle cx="92.81" cy="82.97" r=".35" />
            <circle cx="90.81" cy="82.97" r=".35" />
            <circle cx="88.81" cy="82.97" r=".35" />
            <circle cx="91.81" cy="80.97" r=".35" />
            <circle cx="89.81" cy="80.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-J)`}>
            <circle cx="91.81" cy="88.97" r=".35" />
            <circle cx="89.81" cy="88.97" r=".35" />
            <circle cx="92.81" cy="86.97" r=".35" />
            <circle cx="90.81" cy="86.97" r=".35" />
            <circle cx="88.81" cy="86.97" r=".35" />
            <circle cx="91.81" cy="84.97" r=".35" />
            <circle cx="89.81" cy="84.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-K)`}>
            <circle cx="91.81" cy="92.97" r=".35" />
            <circle cx="89.81" cy="92.97" r=".35" />
            <circle cx="92.81" cy="90.97" r=".35" />
            <circle cx="90.81" cy="90.97" r=".35" />
            <circle cx="88.81" cy="90.97" r=".35" />
            <circle cx="91.81" cy="88.97" r=".35" />
            <circle cx="89.81" cy="88.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-L)`}>
            <circle cx="91.81" cy="96.97" r=".35" />
            <circle cx="89.81" cy="96.97" r=".35" />
            <circle cx="92.81" cy="94.97" r=".35" />
            <circle cx="90.81" cy="94.97" r=".35" />
            <circle cx="88.81" cy="94.97" r=".35" />
            <circle cx="91.81" cy="92.97" r=".35" />
            <circle cx="89.81" cy="92.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-M)`}>
            <circle cx="91.81" cy="100.97" r=".35" />
            <circle cx="89.81" cy="100.97" r=".35" />
            <circle cx="92.81" cy="98.97" r=".35" />
            <circle cx="90.81" cy="98.97" r=".35" />
            <circle cx="88.81" cy="98.97" r=".35" />
            <circle cx="91.81" cy="96.97" r=".35" />
            <circle cx="89.81" cy="96.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-N)`}>
            <circle cx="91.81" cy="104.97" r=".35" />
            <circle cx="89.81" cy="104.97" r=".35" />
            <circle cx="92.81" cy="102.97" r=".35" />
            <circle cx="90.81" cy="102.97" r=".35" />
            <circle cx="88.81" cy="102.97" r=".35" />
            <circle cx="91.81" cy="100.97" r=".35" />
            <circle cx="89.81" cy="100.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-O)`}>
            <circle cx="91.81" cy="108.97" r=".35" />
            <circle cx="89.81" cy="108.97" r=".35" />
            <circle cx="92.81" cy="106.97" r=".35" />
            <circle cx="90.81" cy="106.97" r=".35" />
            <circle cx="88.81" cy="106.97" r=".35" />
            <circle cx="91.81" cy="104.97" r=".35" />
            <circle cx="89.81" cy="104.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-Y)`}>
            <circle cx="87.81" cy="68.97" r=".35" />
            <circle cx="85.81" cy="68.97" r=".35" />
            <circle cx="88.81" cy="66.97" r=".35" />
            <circle cx="86.81" cy="66.97" r=".35" />
            <circle cx="84.81" cy="66.97" r=".35" />
            <circle cx="87.81" cy="64.97" r=".35" />
            <circle cx="85.81" cy="64.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-Z)`}>
            <circle cx="87.81" cy="72.97" r=".35" />
            <circle cx="85.81" cy="72.97" r=".35" />
            <circle cx="88.81" cy="70.97" r=".35" />
            <circle cx="86.81" cy="70.97" r=".35" />
            <circle cx="84.81" cy="70.97" r=".35" />
            <circle cx="87.81" cy="68.97" r=".35" />
            <circle cx="85.81" cy="68.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aa)`}>
            <circle cx="87.81" cy="76.97" r=".35" />
            <circle cx="85.81" cy="76.97" r=".35" />
            <circle cx="88.81" cy="74.97" r=".35" />
            <circle cx="86.81" cy="74.97" r=".35" />
            <circle cx="84.81" cy="74.97" r=".35" />
            <circle cx="87.81" cy="72.97" r=".35" />
            <circle cx="85.81" cy="72.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ab)`}>
            <circle cx="87.81" cy="80.97" r=".35" />
            <circle cx="85.81" cy="80.97" r=".35" />
            <circle cx="88.81" cy="78.97" r=".35" />
            <circle cx="86.81" cy="78.97" r=".35" />
            <circle cx="84.81" cy="78.97" r=".35" />
            <circle cx="87.81" cy="76.97" r=".35" />
            <circle cx="85.81" cy="76.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ac)`}>
            <circle cx="87.81" cy="84.97" r=".35" />
            <circle cx="85.81" cy="84.97" r=".35" />
            <circle cx="88.81" cy="82.97" r=".35" />
            <circle cx="86.81" cy="82.97" r=".35" />
            <circle cx="84.81" cy="82.97" r=".35" />
            <circle cx="87.81" cy="80.97" r=".35" />
            <circle cx="85.81" cy="80.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ad)`}>
            <circle cx="87.81" cy="88.97" r=".35" />
            <circle cx="85.81" cy="88.97" r=".35" />
            <circle cx="88.81" cy="86.97" r=".35" />
            <circle cx="86.81" cy="86.97" r=".35" />
            <circle cx="84.81" cy="86.97" r=".35" />
            <circle cx="87.81" cy="84.97" r=".35" />
            <circle cx="85.81" cy="84.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ae)`}>
            <circle cx="87.81" cy="92.97" r=".35" />
            <circle cx="85.81" cy="92.97" r=".35" />
            <circle cx="88.81" cy="90.97" r=".35" />
            <circle cx="86.81" cy="90.97" r=".35" />
            <circle cx="84.81" cy="90.97" r=".35" />
            <circle cx="87.81" cy="88.97" r=".35" />
            <circle cx="85.81" cy="88.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-af)`}>
            <circle cx="87.81" cy="96.97" r=".35" />
            <circle cx="85.81" cy="96.97" r=".35" />
            <circle cx="88.81" cy="94.97" r=".35" />
            <circle cx="86.81" cy="94.97" r=".35" />
            <circle cx="84.81" cy="94.97" r=".35" />
            <circle cx="87.81" cy="92.97" r=".35" />
            <circle cx="85.81" cy="92.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ag)`}>
            <circle cx="87.81" cy="100.97" r=".35" />
            <circle cx="85.81" cy="100.97" r=".35" />
            <circle cx="88.81" cy="98.97" r=".35" />
            <circle cx="86.81" cy="98.97" r=".35" />
            <circle cx="84.81" cy="98.97" r=".35" />
            <circle cx="87.81" cy="96.97" r=".35" />
            <circle cx="85.81" cy="96.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ah)`}>
            <circle cx="87.81" cy="104.97" r=".35" />
            <circle cx="85.81" cy="104.97" r=".35" />
            <circle cx="88.81" cy="102.97" r=".35" />
            <circle cx="86.81" cy="102.97" r=".35" />
            <circle cx="84.81" cy="102.97" r=".35" />
            <circle cx="87.81" cy="100.97" r=".35" />
            <circle cx="85.81" cy="100.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ai)`}>
            <circle cx="87.81" cy="108.97" r=".35" />
            <circle cx="85.81" cy="108.97" r=".35" />
            <circle cx="88.81" cy="106.97" r=".35" />
            <circle cx="86.81" cy="106.97" r=".35" />
            <circle cx="84.81" cy="106.97" r=".35" />
            <circle cx="87.81" cy="104.97" r=".35" />
            <circle cx="85.81" cy="104.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-as)`}>
            <circle cx="83.81" cy="68.97" r=".35" />
            <circle cx="81.81" cy="68.97" r=".35" />
            <circle cx="84.81" cy="66.97" r=".35" />
            <circle cx="82.81" cy="66.97" r=".35" />
            <circle cx="80.81" cy="66.97" r=".35" />
            <circle cx="83.81" cy="64.97" r=".35" />
            <circle cx="81.81" cy="64.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-at)`}>
            <circle cx="83.81" cy="72.97" r=".35" />
            <circle cx="81.81" cy="72.97" r=".35" />
            <circle cx="84.81" cy="70.97" r=".35" />
            <circle cx="82.81" cy="70.97" r=".35" />
            <circle cx="80.81" cy="70.97" r=".35" />
            <circle cx="83.81" cy="68.97" r=".35" />
            <circle cx="81.81" cy="68.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-au)`}>
            <circle cx="83.81" cy="76.97" r=".35" />
            <circle cx="81.81" cy="76.97" r=".35" />
            <circle cx="84.81" cy="74.97" r=".35" />
            <circle cx="82.81" cy="74.97" r=".35" />
            <circle cx="80.81" cy="74.97" r=".35" />
            <circle cx="83.81" cy="72.97" r=".35" />
            <circle cx="81.81" cy="72.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-av)`}>
            <circle cx="83.81" cy="80.97" r=".35" />
            <circle cx="81.81" cy="80.97" r=".35" />
            <circle cx="84.81" cy="78.97" r=".35" />
            <circle cx="82.81" cy="78.97" r=".35" />
            <circle cx="80.81" cy="78.97" r=".35" />
            <circle cx="83.81" cy="76.97" r=".35" />
            <circle cx="81.81" cy="76.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aw)`}>
            <circle cx="83.81" cy="84.97" r=".35" />
            <circle cx="81.81" cy="84.97" r=".35" />
            <circle cx="84.81" cy="82.97" r=".35" />
            <circle cx="82.81" cy="82.97" r=".35" />
            <circle cx="80.81" cy="82.97" r=".35" />
            <circle cx="83.81" cy="80.97" r=".35" />
            <circle cx="81.81" cy="80.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ax)`}>
            <circle cx="83.81" cy="88.97" r=".35" />
            <circle cx="81.81" cy="88.97" r=".35" />
            <circle cx="84.81" cy="86.97" r=".35" />
            <circle cx="82.81" cy="86.97" r=".35" />
            <circle cx="80.81" cy="86.97" r=".35" />
            <circle cx="83.81" cy="84.97" r=".35" />
            <circle cx="81.81" cy="84.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ay)`}>
            <circle cx="83.81" cy="92.97" r=".35" />
            <circle cx="81.81" cy="92.97" r=".35" />
            <circle cx="84.81" cy="90.97" r=".35" />
            <circle cx="82.81" cy="90.97" r=".35" />
            <circle cx="80.81" cy="90.97" r=".35" />
            <circle cx="83.81" cy="88.97" r=".35" />
            <circle cx="81.81" cy="88.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-az)`}>
            <circle cx="83.81" cy="96.97" r=".35" />
            <circle cx="81.81" cy="96.97" r=".35" />
            <circle cx="84.81" cy="94.97" r=".35" />
            <circle cx="82.81" cy="94.97" r=".35" />
            <circle cx="80.81" cy="94.97" r=".35" />
            <circle cx="83.81" cy="92.97" r=".35" />
            <circle cx="81.81" cy="92.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aA)`}>
            <circle cx="83.81" cy="100.97" r=".35" />
            <circle cx="81.81" cy="100.97" r=".35" />
            <circle cx="84.81" cy="98.97" r=".35" />
            <circle cx="82.81" cy="98.97" r=".35" />
            <circle cx="80.81" cy="98.97" r=".35" />
            <circle cx="83.81" cy="96.97" r=".35" />
            <circle cx="81.81" cy="96.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aB)`}>
            <circle cx="83.81" cy="104.97" r=".35" />
            <circle cx="81.81" cy="104.97" r=".35" />
            <circle cx="84.81" cy="102.97" r=".35" />
            <circle cx="82.81" cy="102.97" r=".35" />
            <circle cx="80.81" cy="102.97" r=".35" />
            <circle cx="83.81" cy="100.97" r=".35" />
            <circle cx="81.81" cy="100.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aC)`}>
            <circle cx="83.81" cy="108.97" r=".35" />
            <circle cx="81.81" cy="108.97" r=".35" />
            <circle cx="84.81" cy="106.97" r=".35" />
            <circle cx="82.81" cy="106.97" r=".35" />
            <circle cx="80.81" cy="106.97" r=".35" />
            <circle cx="83.81" cy="104.97" r=".35" />
            <circle cx="81.81" cy="104.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aM)`}>
            <circle cx="79.81" cy="68.97" r=".35" />
            <circle cx="77.81" cy="68.97" r=".35" />
            <circle cx="80.81" cy="66.97" r=".35" />
            <circle cx="78.81" cy="66.97" r=".35" />
            <circle cx="76.81" cy="66.97" r=".35" />
            <circle cx="79.81" cy="64.97" r=".35" />
            <circle cx="77.81" cy="64.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aN)`}>
            <circle cx="79.81" cy="72.97" r=".35" />
            <circle cx="77.81" cy="72.97" r=".35" />
            <circle cx="80.81" cy="70.97" r=".35" />
            <circle cx="78.81" cy="70.97" r=".35" />
            <circle cx="76.81" cy="70.97" r=".35" />
            <circle cx="79.81" cy="68.97" r=".35" />
            <circle cx="77.81" cy="68.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aO)`}>
            <circle cx="79.81" cy="76.97" r=".35" />
            <circle cx="77.81" cy="76.97" r=".35" />
            <circle cx="80.81" cy="74.97" r=".35" />
            <circle cx="78.81" cy="74.97" r=".35" />
            <circle cx="76.81" cy="74.97" r=".35" />
            <circle cx="79.81" cy="72.97" r=".35" />
            <circle cx="77.81" cy="72.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aP)`}>
            <circle cx="79.81" cy="80.97" r=".35" />
            <circle cx="77.81" cy="80.97" r=".35" />
            <circle cx="80.81" cy="78.97" r=".35" />
            <circle cx="78.81" cy="78.97" r=".35" />
            <circle cx="76.81" cy="78.97" r=".35" />
            <circle cx="79.81" cy="76.97" r=".35" />
            <circle cx="77.81" cy="76.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aQ)`}>
            <circle cx="79.81" cy="84.97" r=".35" />
            <circle cx="77.81" cy="84.97" r=".35" />
            <circle cx="80.81" cy="82.97" r=".35" />
            <circle cx="78.81" cy="82.97" r=".35" />
            <circle cx="76.81" cy="82.97" r=".35" />
            <circle cx="79.81" cy="80.97" r=".35" />
            <circle cx="77.81" cy="80.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aR)`}>
            <circle cx="79.81" cy="88.97" r=".35" />
            <circle cx="77.81" cy="88.97" r=".35" />
            <circle cx="80.81" cy="86.97" r=".35" />
            <circle cx="78.81" cy="86.97" r=".35" />
            <circle cx="76.81" cy="86.97" r=".35" />
            <circle cx="79.81" cy="84.97" r=".35" />
            <circle cx="77.81" cy="84.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aS)`}>
            <circle cx="79.81" cy="92.97" r=".35" />
            <circle cx="77.81" cy="92.97" r=".35" />
            <circle cx="80.81" cy="90.97" r=".35" />
            <circle cx="78.81" cy="90.97" r=".35" />
            <circle cx="76.81" cy="90.97" r=".35" />
            <circle cx="79.81" cy="88.97" r=".35" />
            <circle cx="77.81" cy="88.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aT)`}>
            <circle cx="79.81" cy="96.97" r=".35" />
            <circle cx="77.81" cy="96.97" r=".35" />
            <circle cx="80.81" cy="94.97" r=".35" />
            <circle cx="78.81" cy="94.97" r=".35" />
            <circle cx="76.81" cy="94.97" r=".35" />
            <circle cx="79.81" cy="92.97" r=".35" />
            <circle cx="77.81" cy="92.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aU)`}>
            <circle cx="79.81" cy="100.97" r=".35" />
            <circle cx="77.81" cy="100.97" r=".35" />
            <circle cx="80.81" cy="98.97" r=".35" />
            <circle cx="78.81" cy="98.97" r=".35" />
            <circle cx="76.81" cy="98.97" r=".35" />
            <circle cx="79.81" cy="96.97" r=".35" />
            <circle cx="77.81" cy="96.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aV)`}>
            <circle cx="79.81" cy="104.97" r=".35" />
            <circle cx="77.81" cy="104.97" r=".35" />
            <circle cx="80.81" cy="102.97" r=".35" />
            <circle cx="78.81" cy="102.97" r=".35" />
            <circle cx="76.81" cy="102.97" r=".35" />
            <circle cx="79.81" cy="100.97" r=".35" />
            <circle cx="77.81" cy="100.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-aW)`}>
            <circle cx="79.81" cy="108.97" r=".35" />
            <circle cx="77.81" cy="108.97" r=".35" />
            <circle cx="80.81" cy="106.97" r=".35" />
            <circle cx="78.81" cy="106.97" r=".35" />
            <circle cx="76.81" cy="106.97" r=".35" />
            <circle cx="79.81" cy="104.97" r=".35" />
            <circle cx="77.81" cy="104.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a6)`}>
            <circle cx="75.81" cy="68.97" r=".35" />
            <circle cx="73.81" cy="68.97" r=".35" />
            <circle cx="76.81" cy="66.97" r=".35" />
            <circle cx="74.81" cy="66.97" r=".35" />
            <circle cx="72.81" cy="66.97" r=".35" />
            <circle cx="75.81" cy="64.97" r=".35" />
            <circle cx="73.81" cy="64.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a7)`}>
            <circle cx="75.81" cy="72.97" r=".35" />
            <circle cx="73.81" cy="72.97" r=".35" />
            <circle cx="76.81" cy="70.97" r=".35" />
            <circle cx="74.81" cy="70.97" r=".35" />
            <circle cx="72.81" cy="70.97" r=".35" />
            <circle cx="75.81" cy="68.97" r=".35" />
            <circle cx="73.81" cy="68.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a8)`}>
            <circle cx="75.81" cy="76.97" r=".35" />
            <circle cx="73.81" cy="76.97" r=".35" />
            <circle cx="76.81" cy="74.97" r=".35" />
            <circle cx="74.81" cy="74.97" r=".35" />
            <circle cx="72.81" cy="74.97" r=".35" />
            <circle cx="75.81" cy="72.97" r=".35" />
            <circle cx="73.81" cy="72.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-a9)`}>
            <circle cx="75.81" cy="80.97" r=".35" />
            <circle cx="73.81" cy="80.97" r=".35" />
            <circle cx="76.81" cy="78.97" r=".35" />
            <circle cx="74.81" cy="78.97" r=".35" />
            <circle cx="72.81" cy="78.97" r=".35" />
            <circle cx="75.81" cy="76.97" r=".35" />
            <circle cx="73.81" cy="76.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ba)`}>
            <circle cx="75.81" cy="84.97" r=".35" />
            <circle cx="73.81" cy="84.97" r=".35" />
            <circle cx="76.81" cy="82.97" r=".35" />
            <circle cx="74.81" cy="82.97" r=".35" />
            <circle cx="72.81" cy="82.97" r=".35" />
            <circle cx="75.81" cy="80.97" r=".35" />
            <circle cx="73.81" cy="80.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bb)`}>
            <circle cx="75.81" cy="88.97" r=".35" />
            <circle cx="73.81" cy="88.97" r=".35" />
            <circle cx="76.81" cy="86.97" r=".35" />
            <circle cx="74.81" cy="86.97" r=".35" />
            <circle cx="72.81" cy="86.97" r=".35" />
            <circle cx="75.81" cy="84.97" r=".35" />
            <circle cx="73.81" cy="84.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bc)`}>
            <circle cx="75.81" cy="92.97" r=".35" />
            <circle cx="73.81" cy="92.97" r=".35" />
            <circle cx="76.81" cy="90.97" r=".35" />
            <circle cx="74.81" cy="90.97" r=".35" />
            <circle cx="72.81" cy="90.97" r=".35" />
            <circle cx="75.81" cy="88.97" r=".35" />
            <circle cx="73.81" cy="88.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bd)`}>
            <circle cx="75.81" cy="96.97" r=".35" />
            <circle cx="73.81" cy="96.97" r=".35" />
            <circle cx="76.81" cy="94.97" r=".35" />
            <circle cx="74.81" cy="94.97" r=".35" />
            <circle cx="72.81" cy="94.97" r=".35" />
            <circle cx="75.81" cy="92.97" r=".35" />
            <circle cx="73.81" cy="92.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-be)`}>
            <circle cx="75.81" cy="100.97" r=".35" />
            <circle cx="73.81" cy="100.97" r=".35" />
            <circle cx="76.81" cy="98.97" r=".35" />
            <circle cx="74.81" cy="98.97" r=".35" />
            <circle cx="72.81" cy="98.97" r=".35" />
            <circle cx="75.81" cy="96.97" r=".35" />
            <circle cx="73.81" cy="96.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bf)`}>
            <circle cx="75.81" cy="104.97" r=".35" />
            <circle cx="73.81" cy="104.97" r=".35" />
            <circle cx="76.81" cy="102.97" r=".35" />
            <circle cx="74.81" cy="102.97" r=".35" />
            <circle cx="72.81" cy="102.97" r=".35" />
            <circle cx="75.81" cy="100.97" r=".35" />
            <circle cx="73.81" cy="100.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bg)`}>
            <circle cx="75.81" cy="108.97" r=".35" />
            <circle cx="73.81" cy="108.97" r=".35" />
            <circle cx="76.81" cy="106.97" r=".35" />
            <circle cx="74.81" cy="106.97" r=".35" />
            <circle cx="72.81" cy="106.97" r=".35" />
            <circle cx="75.81" cy="104.97" r=".35" />
            <circle cx="73.81" cy="104.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bq)`}>
            <circle cx="71.81" cy="68.97" r=".35" />
            <circle cx="69.81" cy="68.97" r=".35" />
            <circle cx="72.81" cy="66.97" r=".35" />
            <circle cx="70.81" cy="66.97" r=".35" />
            <circle cx="68.81" cy="66.97" r=".35" />
            <circle cx="71.81" cy="64.97" r=".35" />
            <circle cx="69.81" cy="64.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-br)`}>
            <circle cx="71.81" cy="72.97" r=".35" />
            <circle cx="69.81" cy="72.97" r=".35" />
            <circle cx="72.81" cy="70.97" r=".35" />
            <circle cx="70.81" cy="70.97" r=".35" />
            <circle cx="68.81" cy="70.97" r=".35" />
            <circle cx="71.81" cy="68.97" r=".35" />
            <circle cx="69.81" cy="68.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bs)`}>
            <circle cx="71.81" cy="76.97" r=".35" />
            <circle cx="69.81" cy="76.97" r=".35" />
            <circle cx="72.81" cy="74.97" r=".35" />
            <circle cx="70.81" cy="74.97" r=".35" />
            <circle cx="68.81" cy="74.97" r=".35" />
            <circle cx="71.81" cy="72.97" r=".35" />
            <circle cx="69.81" cy="72.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bt)`}>
            <circle cx="71.81" cy="80.97" r=".35" />
            <circle cx="69.81" cy="80.97" r=".35" />
            <circle cx="72.81" cy="78.97" r=".35" />
            <circle cx="70.81" cy="78.97" r=".35" />
            <circle cx="68.81" cy="78.97" r=".35" />
            <circle cx="71.81" cy="76.97" r=".35" />
            <circle cx="69.81" cy="76.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bu)`}>
            <circle cx="71.81" cy="84.97" r=".35" />
            <circle cx="69.81" cy="84.97" r=".35" />
            <circle cx="72.81" cy="82.97" r=".35" />
            <circle cx="70.81" cy="82.97" r=".35" />
            <circle cx="68.81" cy="82.97" r=".35" />
            <circle cx="71.81" cy="80.97" r=".35" />
            <circle cx="69.81" cy="80.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bv)`}>
            <circle cx="71.81" cy="88.97" r=".35" />
            <circle cx="69.81" cy="88.97" r=".35" />
            <circle cx="72.81" cy="86.97" r=".35" />
            <circle cx="70.81" cy="86.97" r=".35" />
            <circle cx="68.81" cy="86.97" r=".35" />
            <circle cx="71.81" cy="84.97" r=".35" />
            <circle cx="69.81" cy="84.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bw)`}>
            <circle cx="71.81" cy="92.97" r=".35" />
            <circle cx="69.81" cy="92.97" r=".35" />
            <circle cx="72.81" cy="90.97" r=".35" />
            <circle cx="70.81" cy="90.97" r=".35" />
            <circle cx="68.81" cy="90.97" r=".35" />
            <circle cx="71.81" cy="88.97" r=".35" />
            <circle cx="69.81" cy="88.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bx)`}>
            <circle cx="71.81" cy="96.97" r=".35" />
            <circle cx="69.81" cy="96.97" r=".35" />
            <circle cx="72.81" cy="94.97" r=".35" />
            <circle cx="70.81" cy="94.97" r=".35" />
            <circle cx="68.81" cy="94.97" r=".35" />
            <circle cx="71.81" cy="92.97" r=".35" />
            <circle cx="69.81" cy="92.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-by)`}>
            <circle cx="71.81" cy="100.97" r=".35" />
            <circle cx="69.81" cy="100.97" r=".35" />
            <circle cx="72.81" cy="98.97" r=".35" />
            <circle cx="70.81" cy="98.97" r=".35" />
            <circle cx="68.81" cy="98.97" r=".35" />
            <circle cx="71.81" cy="96.97" r=".35" />
            <circle cx="69.81" cy="96.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bz)`}>
            <circle cx="71.81" cy="104.97" r=".35" />
            <circle cx="69.81" cy="104.97" r=".35" />
            <circle cx="72.81" cy="102.97" r=".35" />
            <circle cx="70.81" cy="102.97" r=".35" />
            <circle cx="68.81" cy="102.97" r=".35" />
            <circle cx="71.81" cy="100.97" r=".35" />
            <circle cx="69.81" cy="100.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bA)`}>
            <circle cx="71.81" cy="108.97" r=".35" />
            <circle cx="69.81" cy="108.97" r=".35" />
            <circle cx="72.81" cy="106.97" r=".35" />
            <circle cx="70.81" cy="106.97" r=".35" />
            <circle cx="68.81" cy="106.97" r=".35" />
            <circle cx="71.81" cy="104.97" r=".35" />
            <circle cx="69.81" cy="104.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bK)`}>
            <circle cx="67.81" cy="68.97" r=".35" />
            <circle cx="65.81" cy="68.97" r=".35" />
            <circle cx="68.81" cy="66.97" r=".35" />
            <circle cx="66.81" cy="66.97" r=".35" />
            <circle cx="64.81" cy="66.97" r=".35" />
            <circle cx="67.81" cy="64.97" r=".35" />
            <circle cx="65.81" cy="64.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bL)`}>
            <circle cx="67.81" cy="72.97" r=".35" />
            <circle cx="65.81" cy="72.97" r=".35" />
            <circle cx="68.81" cy="70.97" r=".35" />
            <circle cx="66.81" cy="70.97" r=".35" />
            <circle cx="64.81" cy="70.97" r=".35" />
            <circle cx="67.81" cy="68.97" r=".35" />
            <circle cx="65.81" cy="68.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bM)`}>
            <circle cx="67.81" cy="76.97" r=".35" />
            <circle cx="65.81" cy="76.97" r=".35" />
            <circle cx="68.81" cy="74.97" r=".35" />
            <circle cx="66.81" cy="74.97" r=".35" />
            <circle cx="64.81" cy="74.97" r=".35" />
            <circle cx="67.81" cy="72.97" r=".35" />
            <circle cx="65.81" cy="72.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bN)`}>
            <circle cx="67.81" cy="80.97" r=".35" />
            <circle cx="65.81" cy="80.97" r=".35" />
            <circle cx="68.81" cy="78.97" r=".35" />
            <circle cx="66.81" cy="78.97" r=".35" />
            <circle cx="64.81" cy="78.97" r=".35" />
            <circle cx="67.81" cy="76.97" r=".35" />
            <circle cx="65.81" cy="76.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bO)`}>
            <circle cx="67.81" cy="84.97" r=".35" />
            <circle cx="65.81" cy="84.97" r=".35" />
            <circle cx="68.81" cy="82.97" r=".35" />
            <circle cx="66.81" cy="82.97" r=".35" />
            <circle cx="64.81" cy="82.97" r=".35" />
            <circle cx="67.81" cy="80.97" r=".35" />
            <circle cx="65.81" cy="80.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bP)`}>
            <circle cx="67.81" cy="88.97" r=".35" />
            <circle cx="65.81" cy="88.97" r=".35" />
            <circle cx="68.81" cy="86.97" r=".35" />
            <circle cx="66.81" cy="86.97" r=".35" />
            <circle cx="64.81" cy="86.97" r=".35" />
            <circle cx="67.81" cy="84.97" r=".35" />
            <circle cx="65.81" cy="84.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bQ)`}>
            <circle cx="67.81" cy="92.97" r=".35" />
            <circle cx="65.81" cy="92.97" r=".35" />
            <circle cx="68.81" cy="90.97" r=".35" />
            <circle cx="66.81" cy="90.97" r=".35" />
            <circle cx="64.81" cy="90.97" r=".35" />
            <circle cx="67.81" cy="88.97" r=".35" />
            <circle cx="65.81" cy="88.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bR)`}>
            <circle cx="67.81" cy="96.97" r=".35" />
            <circle cx="65.81" cy="96.97" r=".35" />
            <circle cx="68.81" cy="94.97" r=".35" />
            <circle cx="66.81" cy="94.97" r=".35" />
            <circle cx="64.81" cy="94.97" r=".35" />
            <circle cx="67.81" cy="92.97" r=".35" />
            <circle cx="65.81" cy="92.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bS)`}>
            <circle cx="67.81" cy="100.97" r=".35" />
            <circle cx="65.81" cy="100.97" r=".35" />
            <circle cx="68.81" cy="98.97" r=".35" />
            <circle cx="66.81" cy="98.97" r=".35" />
            <circle cx="64.81" cy="98.97" r=".35" />
            <circle cx="67.81" cy="96.97" r=".35" />
            <circle cx="65.81" cy="96.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bT)`}>
            <circle cx="67.81" cy="104.97" r=".35" />
            <circle cx="65.81" cy="104.97" r=".35" />
            <circle cx="68.81" cy="102.97" r=".35" />
            <circle cx="66.81" cy="102.97" r=".35" />
            <circle cx="64.81" cy="102.97" r=".35" />
            <circle cx="67.81" cy="100.97" r=".35" />
            <circle cx="65.81" cy="100.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-bU)`}>
            <circle cx="67.81" cy="108.97" r=".35" />
            <circle cx="65.81" cy="108.97" r=".35" />
            <circle cx="68.81" cy="106.97" r=".35" />
            <circle cx="66.81" cy="106.97" r=".35" />
            <circle cx="64.81" cy="106.97" r=".35" />
            <circle cx="67.81" cy="104.97" r=".35" />
            <circle cx="65.81" cy="104.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b4)`}>
            <circle cx="63.81" cy="68.97" r=".35" />
            <circle cx="61.81" cy="68.97" r=".35" />
            <circle cx="64.81" cy="66.97" r=".35" />
            <circle cx="62.81" cy="66.97" r=".35" />
            <circle cx="60.81" cy="66.97" r=".35" />
            <circle cx="63.81" cy="64.97" r=".35" />
            <circle cx="61.81" cy="64.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b5)`}>
            <circle cx="63.81" cy="72.97" r=".35" />
            <circle cx="61.81" cy="72.97" r=".35" />
            <circle cx="64.81" cy="70.97" r=".35" />
            <circle cx="62.81" cy="70.97" r=".35" />
            <circle cx="60.81" cy="70.97" r=".35" />
            <circle cx="63.81" cy="68.97" r=".35" />
            <circle cx="61.81" cy="68.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b6)`}>
            <circle cx="63.81" cy="76.97" r=".35" />
            <circle cx="61.81" cy="76.97" r=".35" />
            <circle cx="64.81" cy="74.97" r=".35" />
            <circle cx="62.81" cy="74.97" r=".35" />
            <circle cx="60.81" cy="74.97" r=".35" />
            <circle cx="63.81" cy="72.97" r=".35" />
            <circle cx="61.81" cy="72.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b7)`}>
            <circle cx="63.81" cy="80.97" r=".35" />
            <circle cx="61.81" cy="80.97" r=".35" />
            <circle cx="64.81" cy="78.97" r=".35" />
            <circle cx="62.81" cy="78.97" r=".35" />
            <circle cx="60.81" cy="78.97" r=".35" />
            <circle cx="63.81" cy="76.97" r=".35" />
            <circle cx="61.81" cy="76.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b8)`}>
            <circle cx="63.81" cy="84.97" r=".35" />
            <circle cx="61.81" cy="84.97" r=".35" />
            <circle cx="64.81" cy="82.97" r=".35" />
            <circle cx="62.81" cy="82.97" r=".35" />
            <circle cx="60.81" cy="82.97" r=".35" />
            <circle cx="63.81" cy="80.97" r=".35" />
            <circle cx="61.81" cy="80.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-b9)`}>
            <circle cx="63.81" cy="88.97" r=".35" />
            <circle cx="61.81" cy="88.97" r=".35" />
            <circle cx="64.81" cy="86.97" r=".35" />
            <circle cx="62.81" cy="86.97" r=".35" />
            <circle cx="60.81" cy="86.97" r=".35" />
            <circle cx="63.81" cy="84.97" r=".35" />
            <circle cx="61.81" cy="84.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ca)`}>
            <circle cx="63.81" cy="92.97" r=".35" />
            <circle cx="61.81" cy="92.97" r=".35" />
            <circle cx="64.81" cy="90.97" r=".35" />
            <circle cx="62.81" cy="90.97" r=".35" />
            <circle cx="60.81" cy="90.97" r=".35" />
            <circle cx="63.81" cy="88.97" r=".35" />
            <circle cx="61.81" cy="88.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cb)`}>
            <circle cx="63.81" cy="96.97" r=".35" />
            <circle cx="61.81" cy="96.97" r=".35" />
            <circle cx="64.81" cy="94.97" r=".35" />
            <circle cx="62.81" cy="94.97" r=".35" />
            <circle cx="60.81" cy="94.97" r=".35" />
            <circle cx="63.81" cy="92.97" r=".35" />
            <circle cx="61.81" cy="92.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cc)`}>
            <circle cx="63.81" cy="100.97" r=".35" />
            <circle cx="61.81" cy="100.97" r=".35" />
            <circle cx="64.81" cy="98.97" r=".35" />
            <circle cx="62.81" cy="98.97" r=".35" />
            <circle cx="60.81" cy="98.97" r=".35" />
            <circle cx="63.81" cy="96.97" r=".35" />
            <circle cx="61.81" cy="96.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cd)`}>
            <circle cx="63.81" cy="104.97" r=".35" />
            <circle cx="61.81" cy="104.97" r=".35" />
            <circle cx="64.81" cy="102.97" r=".35" />
            <circle cx="62.81" cy="102.97" r=".35" />
            <circle cx="60.81" cy="102.97" r=".35" />
            <circle cx="63.81" cy="100.97" r=".35" />
            <circle cx="61.81" cy="100.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ce)`}>
            <circle cx="63.81" cy="108.97" r=".35" />
            <circle cx="61.81" cy="108.97" r=".35" />
            <circle cx="64.81" cy="106.97" r=".35" />
            <circle cx="62.81" cy="106.97" r=".35" />
            <circle cx="60.81" cy="106.97" r=".35" />
            <circle cx="63.81" cy="104.97" r=".35" />
            <circle cx="61.81" cy="104.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-co)`}>
            <circle cx="59.81" cy="68.97" r=".35" />
            <circle cx="57.81" cy="68.97" r=".35" />
            <circle cx="60.81" cy="66.97" r=".35" />
            <circle cx="58.81" cy="66.97" r=".35" />
            <circle cx="56.81" cy="66.97" r=".35" />
            <circle cx="59.81" cy="64.97" r=".35" />
            <circle cx="57.81" cy="64.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cp)`}>
            <circle cx="59.81" cy="72.97" r=".35" />
            <circle cx="57.81" cy="72.97" r=".35" />
            <circle cx="60.81" cy="70.97" r=".35" />
            <circle cx="58.81" cy="70.97" r=".35" />
            <circle cx="56.81" cy="70.97" r=".35" />
            <circle cx="59.81" cy="68.97" r=".35" />
            <circle cx="57.81" cy="68.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cq)`}>
            <circle cx="59.81" cy="76.97" r=".35" />
            <circle cx="57.81" cy="76.97" r=".35" />
            <circle cx="60.81" cy="74.97" r=".35" />
            <circle cx="58.81" cy="74.97" r=".35" />
            <circle cx="56.81" cy="74.97" r=".35" />
            <circle cx="59.81" cy="72.97" r=".35" />
            <circle cx="57.81" cy="72.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cr)`}>
            <circle cx="59.81" cy="80.97" r=".35" />
            <circle cx="57.81" cy="80.97" r=".35" />
            <circle cx="60.81" cy="78.97" r=".35" />
            <circle cx="58.81" cy="78.97" r=".35" />
            <circle cx="56.81" cy="78.97" r=".35" />
            <circle cx="59.81" cy="76.97" r=".35" />
            <circle cx="57.81" cy="76.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cs)`}>
            <circle cx="59.81" cy="84.97" r=".35" />
            <circle cx="57.81" cy="84.97" r=".35" />
            <circle cx="60.81" cy="82.97" r=".35" />
            <circle cx="58.81" cy="82.97" r=".35" />
            <circle cx="56.81" cy="82.97" r=".35" />
            <circle cx="59.81" cy="80.97" r=".35" />
            <circle cx="57.81" cy="80.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ct)`}>
            <circle cx="59.81" cy="88.97" r=".35" />
            <circle cx="57.81" cy="88.97" r=".35" />
            <circle cx="60.81" cy="86.97" r=".35" />
            <circle cx="58.81" cy="86.97" r=".35" />
            <circle cx="56.81" cy="86.97" r=".35" />
            <circle cx="59.81" cy="84.97" r=".35" />
            <circle cx="57.81" cy="84.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cu)`}>
            <circle cx="59.81" cy="92.97" r=".35" />
            <circle cx="57.81" cy="92.97" r=".35" />
            <circle cx="60.81" cy="90.97" r=".35" />
            <circle cx="58.81" cy="90.97" r=".35" />
            <circle cx="56.81" cy="90.97" r=".35" />
            <circle cx="59.81" cy="88.97" r=".35" />
            <circle cx="57.81" cy="88.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cv)`}>
            <circle cx="59.81" cy="96.97" r=".35" />
            <circle cx="57.81" cy="96.97" r=".35" />
            <circle cx="60.81" cy="94.97" r=".35" />
            <circle cx="58.81" cy="94.97" r=".35" />
            <circle cx="56.81" cy="94.97" r=".35" />
            <circle cx="59.81" cy="92.97" r=".35" />
            <circle cx="57.81" cy="92.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cw)`}>
            <circle cx="59.81" cy="100.97" r=".35" />
            <circle cx="57.81" cy="100.97" r=".35" />
            <circle cx="60.81" cy="98.97" r=".35" />
            <circle cx="58.81" cy="98.97" r=".35" />
            <circle cx="56.81" cy="98.97" r=".35" />
            <circle cx="59.81" cy="96.97" r=".35" />
            <circle cx="57.81" cy="96.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cx)`}>
            <circle cx="59.81" cy="104.97" r=".35" />
            <circle cx="57.81" cy="104.97" r=".35" />
            <circle cx="60.81" cy="102.97" r=".35" />
            <circle cx="58.81" cy="102.97" r=".35" />
            <circle cx="56.81" cy="102.97" r=".35" />
            <circle cx="59.81" cy="100.97" r=".35" />
            <circle cx="57.81" cy="100.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cy)`}>
            <circle cx="59.81" cy="108.97" r=".35" />
            <circle cx="57.81" cy="108.97" r=".35" />
            <circle cx="60.81" cy="106.97" r=".35" />
            <circle cx="58.81" cy="106.97" r=".35" />
            <circle cx="56.81" cy="106.97" r=".35" />
            <circle cx="59.81" cy="104.97" r=".35" />
            <circle cx="57.81" cy="104.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cI)`}>
            <circle cx="55.81" cy="68.97" r=".35" />
            <circle cx="53.81" cy="68.97" r=".35" />
            <circle cx="56.81" cy="66.97" r=".35" />
            <circle cx="54.81" cy="66.97" r=".35" />
            <circle cx="52.81" cy="66.97" r=".35" />
            <circle cx="55.81" cy="64.97" r=".35" />
            <circle cx="53.81" cy="64.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cJ)`}>
            <circle cx="55.81" cy="72.97" r=".35" />
            <circle cx="53.81" cy="72.97" r=".35" />
            <circle cx="56.81" cy="70.97" r=".35" />
            <circle cx="54.81" cy="70.97" r=".35" />
            <circle cx="52.81" cy="70.97" r=".35" />
            <circle cx="55.81" cy="68.97" r=".35" />
            <circle cx="53.81" cy="68.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cK)`}>
            <circle cx="55.81" cy="76.97" r=".35" />
            <circle cx="53.81" cy="76.97" r=".35" />
            <circle cx="56.81" cy="74.97" r=".35" />
            <circle cx="54.81" cy="74.97" r=".35" />
            <circle cx="52.81" cy="74.97" r=".35" />
            <circle cx="55.81" cy="72.97" r=".35" />
            <circle cx="53.81" cy="72.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cL)`}>
            <circle cx="55.81" cy="80.97" r=".35" />
            <circle cx="53.81" cy="80.97" r=".35" />
            <circle cx="56.81" cy="78.97" r=".35" />
            <circle cx="54.81" cy="78.97" r=".35" />
            <circle cx="52.81" cy="78.97" r=".35" />
            <circle cx="55.81" cy="76.97" r=".35" />
            <circle cx="53.81" cy="76.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cM)`}>
            <circle cx="55.81" cy="84.97" r=".35" />
            <circle cx="53.81" cy="84.97" r=".35" />
            <circle cx="56.81" cy="82.97" r=".35" />
            <circle cx="54.81" cy="82.97" r=".35" />
            <circle cx="52.81" cy="82.97" r=".35" />
            <circle cx="55.81" cy="80.97" r=".35" />
            <circle cx="53.81" cy="80.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cN)`}>
            <circle cx="55.81" cy="88.97" r=".35" />
            <circle cx="53.81" cy="88.97" r=".35" />
            <circle cx="56.81" cy="86.97" r=".35" />
            <circle cx="54.81" cy="86.97" r=".35" />
            <circle cx="52.81" cy="86.97" r=".35" />
            <circle cx="55.81" cy="84.97" r=".35" />
            <circle cx="53.81" cy="84.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cO)`}>
            <circle cx="55.81" cy="92.97" r=".35" />
            <circle cx="53.81" cy="92.97" r=".35" />
            <circle cx="56.81" cy="90.97" r=".35" />
            <circle cx="54.81" cy="90.97" r=".35" />
            <circle cx="52.81" cy="90.97" r=".35" />
            <circle cx="55.81" cy="88.97" r=".35" />
            <circle cx="53.81" cy="88.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cP)`}>
            <circle cx="55.81" cy="96.97" r=".35" />
            <circle cx="53.81" cy="96.97" r=".35" />
            <circle cx="56.81" cy="94.97" r=".35" />
            <circle cx="54.81" cy="94.97" r=".35" />
            <circle cx="52.81" cy="94.97" r=".35" />
            <circle cx="55.81" cy="92.97" r=".35" />
            <circle cx="53.81" cy="92.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cQ)`}>
            <circle cx="55.81" cy="100.97" r=".35" />
            <circle cx="53.81" cy="100.97" r=".35" />
            <circle cx="56.81" cy="98.97" r=".35" />
            <circle cx="54.81" cy="98.97" r=".35" />
            <circle cx="52.81" cy="98.97" r=".35" />
            <circle cx="55.81" cy="96.97" r=".35" />
            <circle cx="53.81" cy="96.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cR)`}>
            <circle cx="55.81" cy="104.97" r=".35" />
            <circle cx="53.81" cy="104.97" r=".35" />
            <circle cx="56.81" cy="102.97" r=".35" />
            <circle cx="54.81" cy="102.97" r=".35" />
            <circle cx="52.81" cy="102.97" r=".35" />
            <circle cx="55.81" cy="100.97" r=".35" />
            <circle cx="53.81" cy="100.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-cS)`}>
            <circle cx="55.81" cy="108.97" r=".35" />
            <circle cx="53.81" cy="108.97" r=".35" />
            <circle cx="56.81" cy="106.97" r=".35" />
            <circle cx="54.81" cy="106.97" r=".35" />
            <circle cx="52.81" cy="106.97" r=".35" />
            <circle cx="55.81" cy="104.97" r=".35" />
            <circle cx="53.81" cy="104.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-c2)`}>
            <circle cx="51.81" cy="68.97" r=".35" />
            <circle cx="49.81" cy="68.97" r=".35" />
            <circle cx="52.81" cy="66.97" r=".35" />
            <circle cx="50.81" cy="66.97" r=".35" />
            <circle cx="48.81" cy="66.97" r=".35" />
            <circle cx="51.81" cy="64.97" r=".35" />
            <circle cx="49.81" cy="64.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-c3)`}>
            <circle cx="51.81" cy="72.97" r=".35" />
            <circle cx="49.81" cy="72.97" r=".35" />
            <circle cx="52.81" cy="70.97" r=".35" />
            <circle cx="50.81" cy="70.97" r=".35" />
            <circle cx="48.81" cy="70.97" r=".35" />
            <circle cx="51.81" cy="68.97" r=".35" />
            <circle cx="49.81" cy="68.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-c4)`}>
            <circle cx="51.81" cy="76.97" r=".35" />
            <circle cx="49.81" cy="76.97" r=".35" />
            <circle cx="52.81" cy="74.97" r=".35" />
            <circle cx="50.81" cy="74.97" r=".35" />
            <circle cx="48.81" cy="74.97" r=".35" />
            <circle cx="51.81" cy="72.97" r=".35" />
            <circle cx="49.81" cy="72.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-c5)`}>
            <circle cx="51.81" cy="80.97" r=".35" />
            <circle cx="49.81" cy="80.97" r=".35" />
            <circle cx="52.81" cy="78.97" r=".35" />
            <circle cx="50.81" cy="78.97" r=".35" />
            <circle cx="48.81" cy="78.97" r=".35" />
            <circle cx="51.81" cy="76.97" r=".35" />
            <circle cx="49.81" cy="76.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-c6)`}>
            <circle cx="51.81" cy="84.97" r=".35" />
            <circle cx="49.81" cy="84.97" r=".35" />
            <circle cx="52.81" cy="82.97" r=".35" />
            <circle cx="50.81" cy="82.97" r=".35" />
            <circle cx="48.81" cy="82.97" r=".35" />
            <circle cx="51.81" cy="80.97" r=".35" />
            <circle cx="49.81" cy="80.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-c7)`}>
            <circle cx="51.81" cy="88.97" r=".35" />
            <circle cx="49.81" cy="88.97" r=".35" />
            <circle cx="52.81" cy="86.97" r=".35" />
            <circle cx="50.81" cy="86.97" r=".35" />
            <circle cx="48.81" cy="86.97" r=".35" />
            <circle cx="51.81" cy="84.97" r=".35" />
            <circle cx="49.81" cy="84.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-c8)`}>
            <circle cx="51.81" cy="92.97" r=".35" />
            <circle cx="49.81" cy="92.97" r=".35" />
            <circle cx="52.81" cy="90.97" r=".35" />
            <circle cx="50.81" cy="90.97" r=".35" />
            <circle cx="48.81" cy="90.97" r=".35" />
            <circle cx="51.81" cy="88.97" r=".35" />
            <circle cx="49.81" cy="88.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-c9)`}>
            <circle cx="51.81" cy="96.97" r=".35" />
            <circle cx="49.81" cy="96.97" r=".35" />
            <circle cx="52.81" cy="94.97" r=".35" />
            <circle cx="50.81" cy="94.97" r=".35" />
            <circle cx="48.81" cy="94.97" r=".35" />
            <circle cx="51.81" cy="92.97" r=".35" />
            <circle cx="49.81" cy="92.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-da)`}>
            <circle cx="51.81" cy="100.97" r=".35" />
            <circle cx="49.81" cy="100.97" r=".35" />
            <circle cx="52.81" cy="98.97" r=".35" />
            <circle cx="50.81" cy="98.97" r=".35" />
            <circle cx="48.81" cy="98.97" r=".35" />
            <circle cx="51.81" cy="96.97" r=".35" />
            <circle cx="49.81" cy="96.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-db)`}>
            <circle cx="51.81" cy="104.97" r=".35" />
            <circle cx="49.81" cy="104.97" r=".35" />
            <circle cx="52.81" cy="102.97" r=".35" />
            <circle cx="50.81" cy="102.97" r=".35" />
            <circle cx="48.81" cy="102.97" r=".35" />
            <circle cx="51.81" cy="100.97" r=".35" />
            <circle cx="49.81" cy="100.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dc)`}>
            <circle cx="51.81" cy="108.97" r=".35" />
            <circle cx="49.81" cy="108.97" r=".35" />
            <circle cx="52.81" cy="106.97" r=".35" />
            <circle cx="50.81" cy="106.97" r=".35" />
            <circle cx="48.81" cy="106.97" r=".35" />
            <circle cx="51.81" cy="104.97" r=".35" />
            <circle cx="49.81" cy="104.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dm)`}>
            <circle cx="47.81" cy="68.97" r=".35" />
            <circle cx="45.81" cy="68.97" r=".35" />
            <circle cx="48.81" cy="66.97" r=".35" />
            <circle cx="46.81" cy="66.97" r=".35" />
            <circle cx="44.81" cy="66.97" r=".35" />
            <circle cx="47.81" cy="64.97" r=".35" />
            <circle cx="45.81" cy="64.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dn)`}>
            <circle cx="47.81" cy="72.97" r=".35" />
            <circle cx="45.81" cy="72.97" r=".35" />
            <circle cx="48.81" cy="70.97" r=".35" />
            <circle cx="46.81" cy="70.97" r=".35" />
            <circle cx="44.81" cy="70.97" r=".35" />
            <circle cx="47.81" cy="68.97" r=".35" />
            <circle cx="45.81" cy="68.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-do)`}>
            <circle cx="47.81" cy="76.97" r=".35" />
            <circle cx="45.81" cy="76.97" r=".35" />
            <circle cx="48.81" cy="74.97" r=".35" />
            <circle cx="46.81" cy="74.97" r=".35" />
            <circle cx="44.81" cy="74.97" r=".35" />
            <circle cx="47.81" cy="72.97" r=".35" />
            <circle cx="45.81" cy="72.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dp)`}>
            <circle cx="47.81" cy="80.97" r=".35" />
            <circle cx="45.81" cy="80.97" r=".35" />
            <circle cx="48.81" cy="78.97" r=".35" />
            <circle cx="46.81" cy="78.97" r=".35" />
            <circle cx="44.81" cy="78.97" r=".35" />
            <circle cx="47.81" cy="76.97" r=".35" />
            <circle cx="45.81" cy="76.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dq)`}>
            <circle cx="47.81" cy="84.97" r=".35" />
            <circle cx="45.81" cy="84.97" r=".35" />
            <circle cx="48.81" cy="82.97" r=".35" />
            <circle cx="46.81" cy="82.97" r=".35" />
            <circle cx="44.81" cy="82.97" r=".35" />
            <circle cx="47.81" cy="80.97" r=".35" />
            <circle cx="45.81" cy="80.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dr)`}>
            <circle cx="47.81" cy="88.97" r=".35" />
            <circle cx="45.81" cy="88.97" r=".35" />
            <circle cx="48.81" cy="86.97" r=".35" />
            <circle cx="46.81" cy="86.97" r=".35" />
            <circle cx="44.81" cy="86.97" r=".35" />
            <circle cx="47.81" cy="84.97" r=".35" />
            <circle cx="45.81" cy="84.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ds)`}>
            <circle cx="47.81" cy="92.97" r=".35" />
            <circle cx="45.81" cy="92.97" r=".35" />
            <circle cx="48.81" cy="90.97" r=".35" />
            <circle cx="46.81" cy="90.97" r=".35" />
            <circle cx="44.81" cy="90.97" r=".35" />
            <circle cx="47.81" cy="88.97" r=".35" />
            <circle cx="45.81" cy="88.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dt)`}>
            <circle cx="47.81" cy="96.97" r=".35" />
            <circle cx="45.81" cy="96.97" r=".35" />
            <circle cx="48.81" cy="94.97" r=".35" />
            <circle cx="46.81" cy="94.97" r=".35" />
            <circle cx="44.81" cy="94.97" r=".35" />
            <circle cx="47.81" cy="92.97" r=".35" />
            <circle cx="45.81" cy="92.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-du)`}>
            <circle cx="47.81" cy="100.97" r=".35" />
            <circle cx="45.81" cy="100.97" r=".35" />
            <circle cx="48.81" cy="98.97" r=".35" />
            <circle cx="46.81" cy="98.97" r=".35" />
            <circle cx="44.81" cy="98.97" r=".35" />
            <circle cx="47.81" cy="96.97" r=".35" />
            <circle cx="45.81" cy="96.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dv)`}>
            <circle cx="47.81" cy="104.97" r=".35" />
            <circle cx="45.81" cy="104.97" r=".35" />
            <circle cx="48.81" cy="102.97" r=".35" />
            <circle cx="46.81" cy="102.97" r=".35" />
            <circle cx="44.81" cy="102.97" r=".35" />
            <circle cx="47.81" cy="100.97" r=".35" />
            <circle cx="45.81" cy="100.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dw)`}>
            <circle cx="47.81" cy="108.97" r=".35" />
            <circle cx="45.81" cy="108.97" r=".35" />
            <circle cx="48.81" cy="106.97" r=".35" />
            <circle cx="46.81" cy="106.97" r=".35" />
            <circle cx="44.81" cy="106.97" r=".35" />
            <circle cx="47.81" cy="104.97" r=".35" />
            <circle cx="45.81" cy="104.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dG)`}>
            <circle cx="43.81" cy="68.97" r=".35" />
            <circle cx="41.81" cy="68.97" r=".35" />
            <circle cx="44.81" cy="66.97" r=".35" />
            <circle cx="42.81" cy="66.97" r=".35" />
            <circle cx="40.81" cy="66.97" r=".35" />
            <circle cx="43.81" cy="64.97" r=".35" />
            <circle cx="41.81" cy="64.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dH)`}>
            <circle cx="43.81" cy="72.97" r=".35" />
            <circle cx="41.81" cy="72.97" r=".35" />
            <circle cx="44.81" cy="70.97" r=".35" />
            <circle cx="42.81" cy="70.97" r=".35" />
            <circle cx="40.81" cy="70.97" r=".35" />
            <circle cx="43.81" cy="68.97" r=".35" />
            <circle cx="41.81" cy="68.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dI)`}>
            <circle cx="43.81" cy="76.97" r=".35" />
            <circle cx="41.81" cy="76.97" r=".35" />
            <circle cx="44.81" cy="74.97" r=".35" />
            <circle cx="42.81" cy="74.97" r=".35" />
            <circle cx="40.81" cy="74.97" r=".35" />
            <circle cx="43.81" cy="72.97" r=".35" />
            <circle cx="41.81" cy="72.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dJ)`}>
            <circle cx="43.81" cy="80.97" r=".35" />
            <circle cx="41.81" cy="80.97" r=".35" />
            <circle cx="44.81" cy="78.97" r=".35" />
            <circle cx="42.81" cy="78.97" r=".35" />
            <circle cx="40.81" cy="78.97" r=".35" />
            <circle cx="43.81" cy="76.97" r=".35" />
            <circle cx="41.81" cy="76.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dK)`}>
            <circle cx="43.81" cy="84.97" r=".35" />
            <circle cx="41.81" cy="84.97" r=".35" />
            <circle cx="44.81" cy="82.97" r=".35" />
            <circle cx="42.81" cy="82.97" r=".35" />
            <circle cx="40.81" cy="82.97" r=".35" />
            <circle cx="43.81" cy="80.97" r=".35" />
            <circle cx="41.81" cy="80.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dL)`}>
            <circle cx="43.81" cy="88.97" r=".35" />
            <circle cx="41.81" cy="88.97" r=".35" />
            <circle cx="44.81" cy="86.97" r=".35" />
            <circle cx="42.81" cy="86.97" r=".35" />
            <circle cx="40.81" cy="86.97" r=".35" />
            <circle cx="43.81" cy="84.97" r=".35" />
            <circle cx="41.81" cy="84.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dM)`}>
            <circle cx="43.81" cy="92.97" r=".35" />
            <circle cx="41.81" cy="92.97" r=".35" />
            <circle cx="44.81" cy="90.97" r=".35" />
            <circle cx="42.81" cy="90.97" r=".35" />
            <circle cx="40.81" cy="90.97" r=".35" />
            <circle cx="43.81" cy="88.97" r=".35" />
            <circle cx="41.81" cy="88.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dN)`}>
            <circle cx="43.81" cy="96.97" r=".35" />
            <circle cx="41.81" cy="96.97" r=".35" />
            <circle cx="44.81" cy="94.97" r=".35" />
            <circle cx="42.81" cy="94.97" r=".35" />
            <circle cx="40.81" cy="94.97" r=".35" />
            <circle cx="43.81" cy="92.97" r=".35" />
            <circle cx="41.81" cy="92.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dO)`}>
            <circle cx="43.81" cy="100.97" r=".35" />
            <circle cx="41.81" cy="100.97" r=".35" />
            <circle cx="44.81" cy="98.97" r=".35" />
            <circle cx="42.81" cy="98.97" r=".35" />
            <circle cx="40.81" cy="98.97" r=".35" />
            <circle cx="43.81" cy="96.97" r=".35" />
            <circle cx="41.81" cy="96.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dP)`}>
            <circle cx="43.81" cy="104.97" r=".35" />
            <circle cx="41.81" cy="104.97" r=".35" />
            <circle cx="44.81" cy="102.97" r=".35" />
            <circle cx="42.81" cy="102.97" r=".35" />
            <circle cx="40.81" cy="102.97" r=".35" />
            <circle cx="43.81" cy="100.97" r=".35" />
            <circle cx="41.81" cy="100.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-dQ)`}>
            <circle cx="43.81" cy="108.97" r=".35" />
            <circle cx="41.81" cy="108.97" r=".35" />
            <circle cx="44.81" cy="106.97" r=".35" />
            <circle cx="42.81" cy="106.97" r=".35" />
            <circle cx="40.81" cy="106.97" r=".35" />
            <circle cx="43.81" cy="104.97" r=".35" />
            <circle cx="41.81" cy="104.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-d0)`}>
            <circle cx="39.81" cy="68.97" r=".35" />
            <circle cx="37.81" cy="68.97" r=".35" />
            <circle cx="40.81" cy="66.97" r=".35" />
            <circle cx="38.81" cy="66.97" r=".35" />
            <circle cx="36.81" cy="66.97" r=".35" />
            <circle cx="39.81" cy="64.97" r=".35" />
            <circle cx="37.81" cy="64.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-d1)`}>
            <circle cx="39.81" cy="72.97" r=".35" />
            <circle cx="37.81" cy="72.97" r=".35" />
            <circle cx="40.81" cy="70.97" r=".35" />
            <circle cx="38.81" cy="70.97" r=".35" />
            <circle cx="36.81" cy="70.97" r=".35" />
            <circle cx="39.81" cy="68.97" r=".35" />
            <circle cx="37.81" cy="68.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-d2)`}>
            <circle cx="39.81" cy="76.97" r=".35" />
            <circle cx="37.81" cy="76.97" r=".35" />
            <circle cx="40.81" cy="74.97" r=".35" />
            <circle cx="38.81" cy="74.97" r=".35" />
            <circle cx="36.81" cy="74.97" r=".35" />
            <circle cx="39.81" cy="72.97" r=".35" />
            <circle cx="37.81" cy="72.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-d3)`}>
            <circle cx="39.81" cy="80.97" r=".35" />
            <circle cx="37.81" cy="80.97" r=".35" />
            <circle cx="40.81" cy="78.97" r=".35" />
            <circle cx="38.81" cy="78.97" r=".35" />
            <circle cx="36.81" cy="78.97" r=".35" />
            <circle cx="39.81" cy="76.97" r=".35" />
            <circle cx="37.81" cy="76.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-d4)`}>
            <circle cx="39.81" cy="84.97" r=".35" />
            <circle cx="37.81" cy="84.97" r=".35" />
            <circle cx="40.81" cy="82.97" r=".35" />
            <circle cx="38.81" cy="82.97" r=".35" />
            <circle cx="36.81" cy="82.97" r=".35" />
            <circle cx="39.81" cy="80.97" r=".35" />
            <circle cx="37.81" cy="80.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-d5)`}>
            <circle cx="39.81" cy="88.97" r=".35" />
            <circle cx="37.81" cy="88.97" r=".35" />
            <circle cx="40.81" cy="86.97" r=".35" />
            <circle cx="38.81" cy="86.97" r=".35" />
            <circle cx="36.81" cy="86.97" r=".35" />
            <circle cx="39.81" cy="84.97" r=".35" />
            <circle cx="37.81" cy="84.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-d6)`}>
            <circle cx="39.81" cy="92.97" r=".35" />
            <circle cx="37.81" cy="92.97" r=".35" />
            <circle cx="40.81" cy="90.97" r=".35" />
            <circle cx="38.81" cy="90.97" r=".35" />
            <circle cx="36.81" cy="90.97" r=".35" />
            <circle cx="39.81" cy="88.97" r=".35" />
            <circle cx="37.81" cy="88.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-d7)`}>
            <circle cx="39.81" cy="96.97" r=".35" />
            <circle cx="37.81" cy="96.97" r=".35" />
            <circle cx="40.81" cy="94.97" r=".35" />
            <circle cx="38.81" cy="94.97" r=".35" />
            <circle cx="36.81" cy="94.97" r=".35" />
            <circle cx="39.81" cy="92.97" r=".35" />
            <circle cx="37.81" cy="92.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-d8)`}>
            <circle cx="39.81" cy="100.97" r=".35" />
            <circle cx="37.81" cy="100.97" r=".35" />
            <circle cx="40.81" cy="98.97" r=".35" />
            <circle cx="38.81" cy="98.97" r=".35" />
            <circle cx="36.81" cy="98.97" r=".35" />
            <circle cx="39.81" cy="96.97" r=".35" />
            <circle cx="37.81" cy="96.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-d9)`}>
            <circle cx="39.81" cy="104.97" r=".35" />
            <circle cx="37.81" cy="104.97" r=".35" />
            <circle cx="40.81" cy="102.97" r=".35" />
            <circle cx="38.81" cy="102.97" r=".35" />
            <circle cx="36.81" cy="102.97" r=".35" />
            <circle cx="39.81" cy="100.97" r=".35" />
            <circle cx="37.81" cy="100.97" r=".35" />
          </g>
          <g clipPath={`url(#${id}-ea)`}>
            <circle cx="39.81" cy="108.97" r=".35" />
            <circle cx="37.81" cy="108.97" r=".35" />
            <circle cx="40.81" cy="106.97" r=".35" />
            <circle cx="38.81" cy="106.97" r=".35" />
            <circle cx="36.81" cy="106.97" r=".35" />
            <circle cx="39.81" cy="104.97" r=".35" />
            <circle cx="37.81" cy="104.97" r=".35" />
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
        xmlnsXlink="http://www.w3.org/1999/xlink"
        aria-labelledby={`${id}-title ${id}-description`}
        data-testid="default"
      >
        <title id={`${id}-title`}>Document Illustration</title>
        <desc id={`${id}-description`}>
          Illustration of a document in purple
        </desc>
        <circle cx="70" cy="70" fill="#10004c" r="70" />
        <path
          d="m39.89 32.2v74.51-38.71a60.13 60.13 0 0 0 6.46 12.3v-5.3h19.83v23.6a60.29 60.29 0 0 0 30.2 8.07v-74.47zm6.46 7h25v2.1h-25zm0 28.3v-2.1h34.46v2.1zm43.17 31.81h-19.31v-2.1h19.31zm0-7.85h-19.31v-2.1h19.31zm0-7.16h-19.31v-2.1h19.31zm0-7.16h-19.31v-2.14h19.31zm0-16.21h-43.17v-2.1h43.17zm0-6.55h-43.17v-2.1h43.17zm0-6.55h-43.17v-2.1h43.17z"
          fill="#f8f7f4"
        />
        <g fill="#10004c">
          <path d="m46.35 39.18h25.03v2.1h-25.03z" />
          <path d="m46.35 45.73h43.16v2.1h-43.16z" />
          <path d="m46.35 52.28h43.16v2.1h-43.16z" />
          <path d="m46.35 58.83h43.16v2.1h-43.16z" />
          <path d="m46.35 65.38h34.45v2.1h-34.45z" />
          <path d="m70.21 75.04h19.3v2.1h-19.3z" />
          <path d="m70.21 82.2h19.3v2.1h-19.3z" />
          <path d="m70.21 89.36h19.3v2.1h-19.3z" />
          <path d="m70.21 97.21h19.3v2.1h-19.3z" />
        </g>
        <path
          d="m51.53 83.69a3.67 3.67 0 0 1 3.65 3.69 3.62 3.62 0 0 1 -.83 2.31q.93.9 1.92 1.77v-2h6.62v6.54h-.81c1.33.92 2.69 1.8 4.1 2.61v-23.61h-19.83v5.3c1 1.4 2 2.75 3.06 4.06a3.66 3.66 0 0 1 2.12-.67z"
          fill="#b7b3c9"
        />
        <path
          d="m66.18 99.31h-19.83v-19a60.21 60.21 0 0 1 -6.46-12.31v38.68h56.49a60.29 60.29 0 0 1 -30.2-8.07z"
          fill="#e7e6ed"
        />
        <path d="m46.35 99.31h19.83z" fill="#2870b5" />
        <path
          d="m66.18 99.31v-.67c-1.41-.81-2.77-1.69-4.1-2.61h-5.81v-4.54q-1-.87-1.92-1.77a3.68 3.68 0 0 1 -5.69-4.67 3.77 3.77 0 0 1 .75-.69c-1.07-1.31-2.1-2.66-3.06-4.06v19z"
          fill="#8780a5"
        />
        <path
          d="m51.53 83.69a3.66 3.66 0 0 0 -2.12.67 62.6 62.6 0 0 0 4.94 5.36 3.67 3.67 0 0 0 -2.82-6z"
          fill="#6f6693"
        />
        <path
          d="m49.41 84.36a3.69 3.69 0 0 0 3.59 6.45 4.09 4.09 0 0 0 .64-.45 3.77 3.77 0 0 0 .75-.69 61 61 0 0 1 -4.98-5.31z"
          fill="#281a5e"
        />
        <path
          d="m62.89 89.41h-6.62v2.08a59 59 0 0 0 5.81 4.51h.81z"
          fill="#6f6693"
        />
        <path d="m56.27 96h5.81a59.26 59.26 0 0 1 -5.81-4.54z" fill="#281a5e" />
        <path d="m59.58 77.65 3.83 6.65h-7.67z" fill="#281a5e" />
      </svg>
    );
  }
};

DocumentCircleIllustration.defaultProps = {
  height: '14rem',
  width: '14.4rem',
  id: 'document-circle-illustration',
};

export default memo(DocumentCircleIllustration);
export {DocumentCircleIllustration as PureDocumentCircleIllustration};
