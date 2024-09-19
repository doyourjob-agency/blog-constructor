import React from 'react';
import { ToggleLikeCallbackType } from '../models/common';
export interface LikesContextProps {
    toggleLike?: ToggleLikeCallbackType;
    hasLikes?: boolean;
    isSignedInUser?: boolean;
    requireSignIn?: React.MouseEventHandler;
}
export declare const LikesContext: React.Context<LikesContextProps>;
