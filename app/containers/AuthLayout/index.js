import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import Component from './AuthLayout';

export default compose(withRouter)(Component);
