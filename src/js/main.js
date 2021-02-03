import '@style/main'
import {Application} from '@js/components/application'

ReactDOM.render(<Application />, document.getElementById('root'))

if (module?.hot) {
    module.hot.accept()
}
