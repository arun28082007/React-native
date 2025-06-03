import * as React from 'react';
import { FAB, Portal, PaperProvider } from 'react-native-paper';
import { View } from 'react-native';

const MyComponent = () => {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;
  
  return (
    <PaperProvider>
    
      <Portal>
        <FAB.Group
          open={open}
          visible
          icon={open ? 'google' : 'plus'}
          actions={[
            {
              icon: 'plus', 
              onPress: () => console.log('Pressed add') 
            },
            {
              icon: 'star',
              label: 'Star',
              onPress: () => console.log('Pressed star'),
            },
            {
              icon: 'email',
              label: 'Email',
              onPress: () => console.log('Pressed email'),
            },
            
            {
              icon: 'bell',
              label: 'Remind',
              onPress: () => console.log('Pressed notifications'),
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
            console.log("onPress button ")
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </PaperProvider>
    
  );
};

export default MyComponent;