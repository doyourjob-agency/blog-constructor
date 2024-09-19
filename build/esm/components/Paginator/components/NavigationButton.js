import React from 'react';
import { Keyset, i18n } from '../../../i18n';
import { block } from '../../../utils/cn';
import { ArrowType } from '../types';
import '../Paginator.css';
const b = block('paginator');
export const NavigationButton = ({ arrowType, disabled }) => disabled ? null : (React.createElement("div", { className: b('icon') }, arrowType === ArrowType.Prev ? i18n(Keyset.ButtonBegin) : i18n(Keyset.ButtonFarther)));