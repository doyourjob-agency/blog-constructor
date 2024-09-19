import { BlockType } from '../models/common';
type BlockConfig = {
    [x in BlockType]: Object;
};
type GenerateConfig = (config: BlockConfig) => {
    [x in BlockType]: BlockConfig;
};
export declare const generateConfig: GenerateConfig;
export {};
