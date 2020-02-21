import React, {FC, memo} from 'react';
import './CategoryBubble.scss';

type CategoryBubbleProps = {
  /** The label of the category. */
  label: string;
  /** The color of the bubble. */
  color: string;
};

const CategoryBubble: FC<CategoryBubbleProps> = ({
  label,
  color,
}: CategoryBubbleProps) => (
  <div className="uic--category-bubble" style={{backgroundColor: color}}>
    {label}
  </div>
);

export default memo(CategoryBubble);
