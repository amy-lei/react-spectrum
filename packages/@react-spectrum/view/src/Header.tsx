/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import {classNames, filterDOMProps, useSlotProps, useStyleProps} from '@react-spectrum/utils';
import {DOMProps, ViewStyleProps} from '@react-types/shared';
import {HTMLElement} from 'react-dom';
import React, {ReactElement, RefObject} from 'react';

export interface HeaderProps extends DOMProps, ViewStyleProps {
  children: ReactElement | ReactElement[]
}


export const Header = React.forwardRef((props: HeaderProps, ref: RefObject<HTMLElement>) => {
  props = useSlotProps(props, 'header');
  let {
    children,
    ...otherProps
  } = props;
  let {styleProps} = useStyleProps(otherProps);

  return (
    <header {...filterDOMProps(otherProps)} {...styleProps} className={classNames({}, styleProps.className)} ref={ref}>
      {children}
    </header>
  );
});