import { Container } from './containers/list.jsx';

FlowRouter.route('/', {
  action() {
    ReactLayout.render(Container)
  },
});
