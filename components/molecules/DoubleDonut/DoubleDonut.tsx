/** @module DoubleDonut */
import classNames from 'classnames';
import React, {Component, createRef} from 'react';
import Donut1 from '../../../assets/icons/donuts/donut_1.png';
import Donut2 from '../../../assets/icons/donuts/donut_2.png';
import Donut3 from '../../../assets/icons/donuts/donut_3.png';
import {
  isDocumentDefined,
  isWindowDefined,
} from '../../utilities/DetectBrowser/DetectBrowser';
import './DoubleDonut.scss';
import DoubleDonutLegend from './DoubleDonutLegend';
import AssetDonutSlice from './DoubleDonutSlice';

export type DoubleDonutItems = {
  /** The name of the item that will appear within a category.  */
  [key: string]: {
    /** The combined value for any gfiven category should not exceed 100 */
    value: number;
    /** The hexidecimal color value of the item. For example '#000'. */
    color: string;
  };
};

export type DoubleDonutCategories = {
  /** The category name. */
  [key: string]: {
    /** An array of 'items' to appear in this category. These strings should match one of the items within the 'items' prop. */
    items: string[];
    /** The hexidecimal color value of the item. For example '#000'. */
    color: string;
    /** The value between 0 and 100. Combined all categories should equal 100. */
    value: number;
  };
};

type DoubleDonutProps = {
  /* Additional class names to apply to the container. */
  className?: string;
  /** Additional style properties to apply to the container. */
  style?: React.CSSProperties;
  /** The items and their values that should be featured within the double donut.  */
  items: DoubleDonutItems;
  /** The category values for each slice in the double donut. */
  categories: DoubleDonutCategories;
  /** Passes back the currently selected category. */
  onChange?: (arg: string | null) => string | null;
  /** Determines if the category legend should be displayed or not. */
  hideLegend?: boolean;
  /** The height of the donut. Defaults to 30rem. */
  height?: string;
  /** The width of the donut. Defaults to 30rem. */
  width?: string;
  /** The accessability label for the donut. */
  title: string;
};

type DoubleDonutState = {
  /** The currently selected category. */
  selectedCategory: string | null;
  /** The currently selected hover category. */
  selectedHoverCategory: string | null;
  /** True|False depending on if the easter egg is displaying or not. */
  easterEgg: boolean;
  /** Keeps track of how many clicks have been made. 6+ are required to display the easter egg. */
  easterEggCounter: number;
};

/** DoubleDonut Component */
class DoubleDonut extends Component<DoubleDonutProps, DoubleDonutState> {
  public static defaultProps = {
    height: '30rem',
    width: '30rem',
  };

  private contentNode: React.RefObject<HTMLInputElement>;
  private legendNode: React.RefObject<HTMLInputElement>;

  /** @inheritdoc */
  constructor(props: DoubleDonutProps) {
    super(props);
    this.contentNode = createRef();
    this.legendNode = createRef();
    this.selectCategory = this.selectCategory.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleCenterClick = this.handleCenterClick.bind(this);
    this.dismissEasterEgg = this.dismissEasterEgg.bind(this);

    this.state = {
      selectedCategory: null,
      selectedHoverCategory: null,
      easterEgg: false,
      easterEggCounter: 0,
    };
  }

  /** @inheritdoc */
  componentDidMount(): void {
    if (isWindowDefined() && isDocumentDefined()) {
      document.addEventListener('mousedown', this.handleClickOutside);
    }
  }

  /** @inheritdoc */
  componentWillUnmount(): void {
    if (isWindowDefined() && isDocumentDefined()) {
      document.removeEventListener('mousedown', this.handleClickOutside);
    }
  }

  /**
   * Unselects a category on outside click.
   * @param event - Click event.
   */
  handleClickOutside(event: MouseEvent): void {
    if (
      this.state.selectedCategory &&
      this.contentNode &&
      this.contentNode.current &&
      !this.contentNode.current.contains(event.target as Node) &&
      this.state.selectedCategory &&
      this.legendNode &&
      this.legendNode.current &&
      !this.legendNode.current.contains(event.target as Node)
    ) {
      this.selectCategory(null);
    }
  }

  /**
   * Selects a category.
   * @param categoryName - Selected category name.
   */
  selectCategory(categoryName: string | null): void {
    const categorySelection =
      this.state.selectedCategory &&
      this.state.selectedCategory === categoryName
        ? null
        : categoryName;
    this.setState({
      selectedCategory: categorySelection,
    });

    if (this.props.onChange) {
      this.props.onChange(categorySelection);
    }
  }

  /**
   * Creates angle data for each slice.
   * @param catValue - Category value
   * @param angleStart - Start of the angle
   */
  calculateAngleData(
    catValue: number,
    angleStart: number,
  ): {
    startAngle: number;
    endAngle: number;
  } {
    const angle = ((catValue && catValue / 100) || 0) * 2 * Math.PI;
    const endAngle = angleStart + angle;

    return {
      startAngle: angleStart,
      endAngle,
    };
  }

  /**
   * Calculates opacity for a slice.
   * @param categoryName - name of current category
   * @param selectedCategory - value of selected category
   * @param selectedHoverCategory - value of selected hover category
   */
  calculateOpacity(
    categoryName: string | null,
    selectedCategory: string | null,
    selectedHoverCategory: string | null,
  ): number {
    if (selectedCategory === categoryName) {
      return 1;
    } else if (selectedHoverCategory === categoryName) {
      return 1;
    } else if (selectedCategory && selectedCategory !== categoryName) {
      return 0.05;
    } else if (
      selectedHoverCategory &&
      selectedHoverCategory !== categoryName
    ) {
      return 0.1;
    } else {
      return 1;
    }
  }

  /** Handles the center click of the donut. */
  handleCenterClick(): void {
    this.setState({easterEggCounter: this.state.easterEggCounter + 1});

    if (this.state.easterEggCounter >= 6) {
      this.setState({easterEgg: true});

      setTimeout(() => this.dismissEasterEgg(), 5000);
    }
  }

  /** Dismisses the easter egg when clicked. */
  dismissEasterEgg(): void {
    this.setState({easterEgg: false, easterEggCounter: 0});
  }

  /** @inheritdoc */
  render(): JSX.Element {
    const {
      categories,
      className,
      height,
      hideLegend,
      items,
      style,
      title,
      width,
    } = this.props;
    const {easterEgg, selectedCategory, selectedHoverCategory} = this.state;

    const categoryKeys = Object.keys(categories);

    const viewPortWidth = 300;
    const viewPortHeight = 300;
    let catAngleStart = 0;
    let subCatAngleStart = 0;

    // Gets a random number between 1 and 3 for the easter egg.
    const donut = Math.floor(Math.random() * 3) + 1;

    const containerClasses = classNames(
      {
        'uic--double-donut': true,
        'uic--d-flex': true,
        'uic--flex-direction-row': true,
        'uic--position-relative': true,
        'uic--align-items-center': true,
      },
      className,
    );

    return (
      <div className={containerClasses} style={style}>
        {easterEgg ? (
          <button
            className="uic--button-unstyled"
            onClick={this.dismissEasterEgg}
            style={{cursor: 'pointer'}}
          >
            <img
              alt="Donut"
              src={donut === 2 ? Donut2 : donut === 3 ? Donut3 : Donut1}
              style={{height, width}}
              data-testid="easter-egg"
            />
          </button>
        ) : (
          <div ref={this.contentNode}>
            <svg
              style={{
                width,
                height,
              }}
              preserveAspectRatio="xMidYMid meet"
              viewBox={`0 0 ${viewPortWidth} ${viewPortHeight}`}
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <title>{title}</title>
              <g
                transform={`translate(${viewPortWidth / 2}, ${
                  viewPortWidth / 2
                })`}
                onMouseLeave={(e: React.MouseEvent): void => {
                  e.preventDefault();
                  this.setState({selectedHoverCategory: null});
                }}
                data-testid="uic--double-donut__wrapper"
              >
                <g
                  onClick={this.handleCenterClick}
                  data-testid="easter-egg-click"
                >
                  <circle cy="0" r="10" fill="transparent" />
                </g>
                {categoryKeys.map((categoryName) => {
                  const angleData = this.calculateAngleData(
                    categories[categoryName].value,
                    catAngleStart,
                  );
                  catAngleStart = angleData.endAngle;

                  const catGroupRef = createRef();

                  return (
                    <g
                      key={`uic--double-donut__slice--${categoryName}`}
                      ref={
                        catGroupRef as
                          | string
                          | ((instance: SVGPathElement | null) => void)
                          | React.RefObject<SVGPathElement>
                          | null
                          | undefined
                      }
                      data-testid={`uic--double-donut__container--${categoryName}`}
                      onMouseEnter={(e: React.MouseEvent): void => {
                        e.preventDefault();
                        this.setState({selectedHoverCategory: categoryName});
                      }}
                    >
                      <AssetDonutSlice
                        categoryName={categoryName}
                        fill={categories[categoryName].color}
                        innerRadius={109}
                        outerRadius={150}
                        angleData={angleData}
                        onClick={(): void => this.selectCategory(categoryName)}
                        opacity={this.calculateOpacity(
                          categoryName,
                          selectedCategory,
                          selectedHoverCategory,
                        )}
                      />
                      {categories[categoryName].items.map((item) => {
                        // Subcategory Donut
                        const subCatAngleData = this.calculateAngleData(
                          items[item].value,
                          subCatAngleStart,
                        );
                        subCatAngleStart = subCatAngleData.endAngle;

                        return (
                          <AssetDonutSlice
                            categoryName={`subcategory-${item}`}
                            key={`uic--double-donut__slice--${item}`}
                            fill={items[item].color}
                            innerRadius={70}
                            outerRadius={110}
                            angleData={subCatAngleData}
                            onClick={(): void =>
                              this.selectCategory(categoryName)
                            }
                            opacity={this.calculateOpacity(
                              categoryName,
                              selectedCategory,
                              selectedHoverCategory,
                            )}
                          />
                        );
                      })}
                    </g>
                  );
                })}
                <g />
              </g>
            </svg>
          </div>
        )}

        {!hideLegend && (
          <div ref={this.legendNode}>
            <DoubleDonutLegend
              selectedDonutCategory={selectedCategory}
              items={items}
              categoryKeys={categoryKeys}
              categories={categories}
              onClick={this.selectCategory}
            />
          </div>
        )}
      </div>
    );
  }
}

export default DoubleDonut;
