import React from 'react';
import ReactDOM from 'react-dom';

import { composeWithTracker } from 'react-komposer';
import { ListItems } from '../../collections/list-items.js';
import { List } from '../components/list.jsx';

const composer = (props, onData) => {
  const subscription = Meteor.subscribe('list-items');

  if (subscription.ready()) {
    const listItems = ListItems.find().fetch();
    onData(null, { listItems });
  }
};

export const Container = composeWithTracker(composer)(List);

