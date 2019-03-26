/** @module Ranking */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ArrowEllipsisIcon from '~components/atoms/icons/ArrowEllipsisIcon/ArrowEllipsisIcon';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import {dsmColors as colors} from '~constants/js/colors';

import './Ranking.scss';

const grid = 8;
const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle,
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 250
});


/** Renders a list which allows  */
class Ranking extends Component {
  /** @inheritdoc */
  constructor(props) {
    super(props);

    this.state = {
      items: props.items,
    };

    this.changeOrder = this.changeOrder.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  /** Adjusts the order of the array.
   * @param {integer} fromIndex - The original index of the item.
   * @param {integer} toIndex - The new placement of the item.
   * @returns {undefined}
   */
  changeOrder(fromIndex, toIndex) {
    const clonedArray = this.state.items;
    const element = clonedArray[fromIndex];

    clonedArray.splice(fromIndex, 1);
    clonedArray.splice(toIndex, 0, element);

    // Binds the cloned array to state with the updated indexes.
    this.setState({
      items: clonedArray,
    });

    if (this.props.onChange) {
      this.props.onChange(this.props.name, clonedArray);
    }
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    this.changeOrder(
      result.source.index,
      result.destination.index
    );

  }

  /** @inheritdoc */
  render() {
    const {items} = this.props;

    return (
      <div className="ranking-list">
        <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
          <ol
          {...provided.droppableProps}
          ref={provided.innerRef}>
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
              <li
                className="uic--position-relative"
                key={index}
                tabIndex={index + 1}
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <div className="ranking-controls">
                  <div
                    className="up uic--position-absolute uic--w-100"
                    onClick={() => this.changeOrder(index, index - 1)}
                    onKeyUp={() => this.changeOrder(index, index - 1)}
                    role="button"
                    tabIndex={index + 1}
                  >
                    <ArrowEllipsisIcon
                      height="24"
                      width="24"
                      fill={colors.royal}
                    />
                  </div>
                  <div
                    className="down uic--position-absolute uic--w-100"
                    onClick={() => this.changeOrder(index, index + 1)}
                    onKeyDown={() => this.changeOrder(index, index + 1)}
                    role="button"
                    tabIndex={index + 1}
                  >
                    <ArrowEllipsisIcon
                      height="24"
                      width="24"
                      fill={colors.royal}
                    />
                  </div>
                </div>

                <span className="uic--d-flex uic--justify-content-between">
                  <span className="index uic--position-absolute">
                    {index + 1}
                  </span>
                  <label>{item.label}</label>

                  {item.secondaryLabel && (
                    <span className="label-value-secondary">
                      {item.secondaryLabel}
                    </span>
                  )}
                </span>
              </li>
                )}
              </Draggable>
            ))}
          </ol>
          )}
          </Droppable>
        </DragDropContext>
      </div>
    );
  }
}

Ranking.propTypes = {
  /** The name of the ranking list. */
  name: PropTypes.string.isRequired,
  /** The items to appear in the ranking list. */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      /** The option label. */
      label: PropTypes.string.isRequired,
      /** The secondary label to appear to the right of the item. *I*/
      secondaryLabel: PropTypes.string,
    })
  ).isRequired,
  /** Handler which passes back the name, and the re-ordered array on change. */
  onChange: PropTypes.func,
};

export default Ranking;
