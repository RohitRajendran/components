/** @module DoubleDonutLegend */
import React, {FC} from 'react';
import {DoubleDonutCategories, DoubleDonutItems} from './DoubleDonut';

type DoubleDonutLegendProps = {
  /** The currently seleccted donut category. (If one is selected) */
  selectedDonutCategory?: string | null;
  /** The possible items within the double donut. */
  items: DoubleDonutItems;
  /** The double donut categories. */
  categories: DoubleDonutCategories;
  /** The keys of all double donut categories. */
  categoryKeys: string[];
  /** Click handler that selects a category. */
  onClick: (arg: string) => void;
};

/** Renders the legend which accompanies the double donut. */
const DoubleDonutLegend: FC<DoubleDonutLegendProps> = ({
  selectedDonutCategory,
  items,
  categories,
  categoryKeys,
  onClick,
}) => (
  <aside className="uic--double-donut__legend">
    {categoryKeys.map((categoryName: string) => {
      const category = categories[categoryName];

      return (
        <button
          className="uic--button-unstyled uic--d-flex uic--flex-column"
          onClick={(): void => onClick(categoryName)}
          key={`uic--double-donut__legend--${categoryName}`}
        >
          <div
            style={{color: category.color}}
            className="uic--double-donut__category-container"
          >
            <div className="uic--double-donut__category uic--d-flex uic--justify-content-between uic--align-items-center">
              <span>{categoryName}</span>
              <span>{category.value}%</span>
            </div>

            {selectedDonutCategory === categoryName && (
              <div className="uic--double-donut__subcategory-container">
                {category.items.map((item: string) => {
                  const displayName =
                    item === categoryName || item.indexOf(categoryName) < 0
                      ? item
                      : item.substring(0, item.indexOf(categoryName));
                  return (
                    <div key={`uic--double-donut__legend--${item}`}>
                      {displayName} {items[item].value}%
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </button>
      );
    })}
  </aside>
);

export default DoubleDonutLegend;
