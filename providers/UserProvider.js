import React, { Component, createContext } from 'react';
import { auth, createUserProfileDocument } from '../firebase';

export const UserContext = createContext({ user: null });

class UserProvider extends Component {
  state = {
    user: {
      uid: 'wO4hrjNUBMZxlrY8qFGP',
      displayName: 'Marcos Javier',
      email: 'marcos.riganti@gmail.com',
      photoURL:
        'https://media.licdn.com/dms/image/C4E03AQFpRhhp8id_oQ/profile-displayphoto-shrink_200_200/0?e=1571270400&v=beta&t=n8sdo18MLxrGrANeIE3fcJ9N1VzwK_3pF-do_DFOKc0',
    },
  };
  componentDidMount = async () => {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      console.log('>> unsubscribeFromAuth', user);
      //   if (user != null) {

      //Temp
      createUserProfileDocument(this.state.user).then(userResponse => {
        console.log('We are authenticated now!', userResponse);
        this.setState({ user: userResponse });
      });
      // createUserProfileDocument().then(user => {
      //   console.log(' >> createUserProfileDocument return ');

      // });
      //   }
    });
  };
  componentWillUnmount = () => {
    this.unsubscribeFromAuth();
  };
  render() {
    const { user } = this.state;
    const { children } = this.props;
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
  }
}

export default UserProvider;
