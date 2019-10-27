import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Home from '../components/ui/Home';
import Preview from '../components/ui/Preview';

const AppNavigator = createSwitchNavigator(
    {
        Home: {
            screen: Home,
        },
        Preview: {
            screen: Preview,
        },
    },
);

export default createAppContainer(AppNavigator);
