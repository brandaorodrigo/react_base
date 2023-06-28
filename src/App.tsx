import React, { createContext } from 'react';

import Config from './Config';
import Router from './Router';

const AppContext = createContext({} as any);

const App: React.FC = () => {
    return (
        <AppContext.Provider value={{}}>
            <Config>
                <Router />
            </Config>
        </AppContext.Provider>
    );
};

export default App;
