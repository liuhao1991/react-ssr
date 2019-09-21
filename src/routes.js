import Home from './pages/Home';
import About from './pages/About';

function getSomeData() {
  return Promise.resolve('1');
}

export default [
  {
    path: '/',
    exact: true,
    component: Home,
    loadData: () => getSomeData()
  }, {
    path: '/about',
    component: About,
    loadData: () => getSomeData()
  }
]