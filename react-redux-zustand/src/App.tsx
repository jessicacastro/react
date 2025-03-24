import { Player } from './pages/Player';
import './styles/global.css';

export const App = () => {
  return (
    <Player />

    // <ReduxProvider store={store}>
    //   <PlayerWithRedux />
    // </ReduxProvider>
  );
}