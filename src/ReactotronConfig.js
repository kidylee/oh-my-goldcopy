import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';

// then add it to the plugin list
Reactotron.configure({ name: 'Oh My Gold Copy!' })
  .use(reactotronRedux()) //  <- here i am!
  .connect(); //Don't forget about me!

export default Reactotron;
