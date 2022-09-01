import 'react-native';
import React from 'react';
import renderer, {act} from 'react-test-renderer';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import MainScreen from '../index';
import {store} from '../../../redux/store';

// it('MainScreen renders correctly', async () => {
//   await act(async () =>
//     renderer.create(
//       <NavigationContainer>
//         <Provider store={store}>
//           <MainScreen
//             route={{
//               params: {
//                 stack: 'Airing',
//                 status: 'airing',
//               },
//             }}
//           />
//         </Provider>
//       </NavigationContainer>,
//     ),
//   );
// });

// describe('<MainScreen />', () => {
//   it('has 1 child', () => {
//     const tree = renderer
//       .create(
//         <NavigationContainer>
//           <Provider store={store}>
//             <MainScreen
//               route={{
//                 params: {
//                   stack: 'Airing',
//                   status: 'airing',
//                 },
//               }}
//             />
//           </Provider>
//           ,
//         </NavigationContainer>,
//       )
//       .toJSON();
//     expect(tree.children.length).toBe(1);
//   });
// });
