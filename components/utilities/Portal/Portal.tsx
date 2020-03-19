/** @module Portal */
import React, {FC} from 'react';
import {createPortal} from 'react-dom';
import {usePortal} from './Portal.hooks';

type PortalProps = {
  /* Child components that will get appended to the portal. */
  children: React.ReactNode;
  /** Class names that should append to the portal container. */
  className?: string;
};

/** Creates a React portal. */
const Portal: FC<PortalProps> = ({children, className}) => {
  const target = usePortal(className);

  return target ? createPortal(children, target) : null;
};

export default Portal;
