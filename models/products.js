/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-12-07 16:27:59
 * @version $Id$
 */

import dva from 'dva';

export default {
  namespace: 'products',
  state: [],
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },
};