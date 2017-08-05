import React from 'react';
import ReactDOM from 'react-dom';

import Root from 'setup/Root';
import registerServiceWorker from 'setup/registerServiceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));

registerServiceWorker();
