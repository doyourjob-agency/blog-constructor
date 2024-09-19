import { useMemo } from 'react';
import { getCustomItems } from '@gravity-ui/page-constructor';
import componentMap from '../constructor/blocksMap';
export const useExtendedComponentMap = (custom) => useMemo(() => (Object.assign(Object.assign({}, custom), { blocks: Object.assign(Object.assign({}, componentMap.blocks), getCustomItems(['blocks'], custom)), headers: Object.assign(Object.assign({}, componentMap.headers), getCustomItems(['headers'], custom)) })), [custom]);