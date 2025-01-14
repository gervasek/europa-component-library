/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import parse from 'html-react-parser';
import demoLink from '@ecl/eu-specs-list/demo/data--link';
import UnorderedList from '../src/UnorderedList';
import UnorderedListItem from '../src/UnorderedListItem';

export default () => {
  function listContent(items) {
    return items.map(item => {
      if (item.nested) {
        return (
          <UnorderedListItem key={item.label}>
            {parse(item.label)}
            <UnorderedList>{listContent(item.nested)}</UnorderedList>
          </UnorderedListItem>
        );
      }

      return (
        <UnorderedListItem key={item.label}>
          {parse(item.label)}
        </UnorderedListItem>
      );
    });
  }

  return (
    <UnorderedList variant="divider">
      {listContent(demoLink.items)}
    </UnorderedList>
  );
};
