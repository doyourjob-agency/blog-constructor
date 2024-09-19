export declare enum Keyset {
    Title = "title",
    TitleBreadcrumbs = "title_breadcrumbs",
    TitleSuggest = "title_suggest",
    ActionShare = "action_share",
    ContextReadingTime = "context_reading_time",
    ActionTryAgain = "action_try_again",
    ActionLoadMore = "action_load_more",
    ErrorTitle = "error_title",
    PostLoadError = "post_load_error",
    TitleEmptyContainer = "title_empty_container",
    ContextEmptyContainer = "context_empty_container",
    ButtonBegin = "button_begin",
    ButtonFarther = "button_farther",
    Search = "search_placeholder",
    AllTags = "label_all_tags",
    ActionSavedOnly = "action_saved_only",
    AllServices = "label_all_services",
    PromptSignInOnLike = "prompt_sign_in_on_like",
    SignIn = "Sign In",
    Save = "save",
    ClearAction = "clear_action"
}
export declare const i18n: (key: Keyset, params?: import("@gravity-ui/i18n").Params | undefined) => string;
