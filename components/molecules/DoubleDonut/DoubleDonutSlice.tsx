import {interpolate} from 'd3-interpolate';
import {select as d3Select} from 'd3-selection';
import {arc} from 'd3-shape';
import {transition as d3Transition} from 'd3-transition';
import React, {createRef, PureComponent} from 'react';

// Issue Reference: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/16176
d3Select.prototype.transition = d3Transition;

type DoubleDonutSliceAngle = {
  /** The start angle of the slice. */
  startAngle: number;
  /** The end angle of the slice. */
  endAngle: number;
};

type DoubleDonutSliceProps = {
  /** The category name. */
  categoryName: string;
  /** The color of the donut slice. */
  fill: string;
  /** The start/end angle radius. */
  angleData: DoubleDonutSliceAngle;
  /** The inner radius. */
  innerRadius: number;
  /** The outer radius. */
  outerRadius: number;
  /** The opacity of the donut slice. */
  opacity: number;
  /** Handler which passes back when the slice is clicked. */
  onClick?: () => void;
};

type DoubleDonutSliceState = {
  /** The opacity of the donut slice. */
  opacity: number;
  /** The start/end angle radius. */
  angleData: DoubleDonutSliceAngle;
  /** The path mapping for the SVG. */
  pathD: string;
};

/** Renders each slice within the double donut. */
class DoubleDonutSlice extends PureComponent<
  DoubleDonutSliceProps,
  DoubleDonutSliceState
> {
  private arcGenerator: Function;
  private sliceNode: React.RefObject<HTMLInputElement | SVGElement>;

  /** @inheritdoc */
  constructor(props: DoubleDonutSliceProps) {
    super(props);

    this.arcGenerator = arc()
      .innerRadius(props.innerRadius)
      .outerRadius(props.outerRadius);

    this.state = {
      opacity: props.opacity || 1,
      angleData: props.angleData,
      pathD: this.arcGenerator(props.angleData),
    };

    this.sliceNode = createRef();
  }

  /**
   * React lifecycle method
   * @param {object} props - new props
   * @returns {undefined}
   */
  componentDidUpdate(): void {
    if (this.sliceNode && this.sliceNode.current) {
      d3Select(this.sliceNode.current)
        .transition()
        .duration(250)
        // Typing as any is probably not advised here but it will do for now.
        .attrTween('d', (): any => {
          const copy = {...this.state.angleData};
          const interpolateStartAngle = interpolate(
            this.state.angleData.startAngle,
            this.props.angleData.startAngle,
          );
          const interpolateEndAngle = interpolate(
            this.state.angleData.endAngle,
            this.props.angleData.endAngle,
          );
          return (t: number): void => {
            copy.startAngle = interpolateStartAngle(t);
            copy.endAngle = interpolateEndAngle(t);
            return this.arcGenerator(copy);
          };
        })
        .attrTween('opacity', (): any => {
          const interpolateOpacity: Function = interpolate(
            this.state.opacity,
            this.props.opacity || 1,
          );
          return (t: number): Function => {
            return interpolateOpacity(t);
          };
        })
        .on('end', () => {
          this.setState({
            angleData: this.props.angleData,
            pathD: this.arcGenerator(this.props.angleData),
            opacity: this.props.opacity,
          });
        });
    }
  }

  /** @inheritdoc */
  render(): JSX.Element {
    const {fill, onClick, categoryName} = this.props;
    const {pathD} = this.state;

    return (
      <path
        data-testid={`uic--double-donut__slice--${categoryName}`}
        fill={fill}
        d={pathD}
        // React doesn't gracefully handle assigning refs to an SVG element hence why this is neccersary.
        ref={
          this.sliceNode as
            | string
            | ((instance: SVGPathElement | null) => void)
            | React.RefObject<SVGPathElement>
            | null
            | undefined
        }
        onClick={(e: React.MouseEvent): void => {
          e.preventDefault();
          onClick && onClick();
        }}
      />
    );
  }
}

export default DoubleDonutSlice;
