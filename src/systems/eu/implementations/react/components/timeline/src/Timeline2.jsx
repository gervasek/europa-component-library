/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from '@ecl/eu-react-component-button';

import TimelineItem from './Timeline2Item';

const Timeline = ({
  items,
  toggleCollapsed,
  toggleExpanded,
  button,
  className,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-timeline2');

  // Calculate collapse threshold
  const threshold =
    items.length > 12
      ? Math.min(Math.floor(items.length * 0.2), 7)
      : items.length;
  const hidenItemsLength = items.length - threshold - 2;

  const toggleLabelCollapsed = toggleCollapsed
    ? toggleCollapsed.replace('%d', hidenItemsLength)
    : button.label;
  const toggleLabelExpanded = toggleExpanded
    ? toggleExpanded.replace('%d', hidenItemsLength)
    : button.label;
  const showAllButton = (
    <li className="ecl-timeline2__item ecl-timeline2__item--toggle">
      <Button
        {...button}
        label={toggleLabelCollapsed}
        className={classnames(button.className, 'ecl-timeline2__toggle')}
        data-ecl-timeline-button
        data-ecl-label-collapsed={toggleLabelCollapsed}
        data-ecl-label-expanded={toggleLabelExpanded}
      />
    </li>
  );

  return (
    <ol {...props} className={classNames} data-ecl-timeline>
      {items.map(
        ({ id: itemId, content: itemContent, ...itemProps }, index) => (
          <Fragment key={itemId}>
            <TimelineItem
              {...itemProps}
              className={classnames({
                [`ecl-timeline2__item--collapsed`]:
                  index >= threshold && index < items.length - 2,
              })}
            >
              {itemContent}
            </TimelineItem>

            {threshold < items.length &&
              index === items.length - 3 &&
              showAllButton}
          </Fragment>
        )
      )}
    </ol>
  );
};

Timeline.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      content: PropTypes.node,
    })
  ),
  toggleCollapsed: PropTypes.string,
  toggleExpanded: PropTypes.string,
  button: PropTypes.shape(Button.propTypes),
  className: PropTypes.string,
};

Timeline.defaultProps = {
  items: [],
  toggleCollapsed: '',
  toggleExpanded: '',
  button: {},
  className: '',
};

export default Timeline;
