import { useState, MouseEvent, KeyboardEvent } from 'react';

type Anchor = 'right';

interface State {
  right: boolean;
}

interface UseDrawerProps {
  initialState?: State;
}

const useDrawer = ({ initialState = { right: false } }: UseDrawerProps) => {
  const [state, setState] = useState<State>(initialState);

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: KeyboardEvent | MouseEvent,
  ): void => {
    if (
      event.type === 'keydown' &&
      ((event as KeyboardEvent).key === 'Tab' ||
        (event as KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const drawerProps = (anchor: Anchor) => ({
    anchor,
    open: state[anchor],
    onClose: toggleDrawer(anchor, false),
  });

  return { toggleDrawer, drawerProps };
};

export default useDrawer;
