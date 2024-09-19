import React from 'react';
import { Helmet } from 'react-helmet';
/**
 * Wrapper on meta data of page
 *
 * @param needHelmetWrapper - component needs helmet wrapper
 * @param metaComponent - meta data component
 *
 * @returns jsx
 */
export const MetaWrapper = ({ needHelmetWrapper = false, metaComponent }) => needHelmetWrapper ? React.createElement(Helmet, null, metaComponent) : metaComponent;