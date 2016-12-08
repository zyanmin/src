import './index.html';
import './index.css';
import dva from 'dva';

// 1. Initialize
const app = dva({
  initialState: {
    products: [
      { name: 'dva', id: 1 },
      { name: 'antd', id: 2 },
      { name: '12', id: 3 },
      { name: '121', id: 4 },
      { name: 'an121td', id: 5 },
    ],
  },
});

// 2. Plugins
//app.use({});

// 3. Model
//app.model(require('./models/example'));
//app.model(require('./models/layout'));
app.model(require('./models/products'));
// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
