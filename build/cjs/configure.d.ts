import { Lang } from './models/locale';
export interface ProjectConfigParams {
    lang: Lang;
}
export declare const configure: ({ lang }: ProjectConfigParams) => void;
