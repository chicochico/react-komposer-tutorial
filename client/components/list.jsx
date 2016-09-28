import React from 'react';

const renderIfData = (listItems) => {
  if (listItems && listItems.length > 0) {
    return listItems.map((topic) => {
      return <li key={topic._id}>{topic.title}</li>;
    });
  } else {
    return <p>No list items yet!</p>;
  }
};

export const List = ({ listItems }) => (
  <ol>
    {renderIfData(listItems)}
  </ol>
);
