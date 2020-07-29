import App from './App'

if(module.hot) {
  module.hot.accept(error => {
    if(error) {
      console.log('HMR出现BUG')
    }
  })
}