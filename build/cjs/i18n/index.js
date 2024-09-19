"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.i18 = exports.Keyset = exports.i18n = void 0;
const i18n_1 = require("@gravity-ui/i18n");
const locale_1 = require("../models/locale");
const KEYSET_NAME = 'blog';
exports.i18n = new i18n_1.I18N();
var Keyset;
(function (Keyset) {
    Keyset["Title"] = "title";
    Keyset["TitleBreadcrumbs"] = "title_breadcrumbs";
    Keyset["TitleSuggest"] = "title_suggest";
    Keyset["ActionShare"] = "action_share";
    Keyset["ContextReadingTime"] = "context_reading_time";
    Keyset["ActionTryAgain"] = "action_try_again";
    Keyset["ActionLoadMore"] = "action_load_more";
    Keyset["ErrorTitle"] = "error_title";
    Keyset["PostLoadError"] = "post_load_error";
    Keyset["TitleEmptyContainer"] = "title_empty_container";
    Keyset["ContextEmptyContainer"] = "context_empty_container";
    Keyset["ButtonBegin"] = "button_begin";
    Keyset["ButtonFarther"] = "button_farther";
    Keyset["Search"] = "search_placeholder";
    Keyset["AllTags"] = "label_all_tags";
    Keyset["ActionSavedOnly"] = "action_saved_only";
    Keyset["AllServices"] = "label_all_services";
    Keyset["PromptSignInOnLike"] = "prompt_sign_in_on_like";
    Keyset["SignIn"] = "Sign In";
})(Keyset = exports.Keyset || (exports.Keyset = {}));
exports.i18n.registerKeyset(locale_1.Lang.En, KEYSET_NAME, {
    [Keyset.Title]: 'Blog',
    [Keyset.TitleBreadcrumbs]: 'Blog',
    [Keyset.TitleSuggest]: 'See also',
    [Keyset.ActionShare]: 'Share',
    [Keyset.ActionTryAgain]: 'Try again',
    [Keyset.ActionLoadMore]: 'See more',
    [Keyset.ErrorTitle]: 'Error',
    [Keyset.PostLoadError]: "Posts didn't load",
    [Keyset.TitleEmptyContainer]: "Looks like we haven't written about that yet",
    [Keyset.ContextEmptyContainer]: 'Try different spellings or other keywords',
    [Keyset.ButtonBegin]: 'Back to top',
    [Keyset.ButtonFarther]: 'Load more',
    [Keyset.Search]: 'Search',
    [Keyset.AllTags]: 'All topics',
    [Keyset.ActionSavedOnly]: 'Saved',
    [Keyset.AllServices]: 'All Services',
    [Keyset.PromptSignInOnLike]: 'Sign in to save this post',
    [Keyset.ContextReadingTime]: [
        '{{count}} min to read',
        '{{count}} mins to read',
        '{{count}} mins to read',
    ],
    [Keyset.SignIn]: 'Sign In',
});
exports.i18n.registerKeyset(locale_1.Lang.Ru, KEYSET_NAME, {
    [Keyset.Title]: 'Блог',
    [Keyset.TitleBreadcrumbs]: 'Блог',
    [Keyset.TitleSuggest]: 'Читать также',
    [Keyset.ActionShare]: 'Поделиться',
    [Keyset.ActionTryAgain]: 'Попробуйте ещё раз',
    [Keyset.ActionLoadMore]: 'Показать ещё',
    [Keyset.ErrorTitle]: 'Произошла ошибка',
    [Keyset.PostLoadError]: 'Посты не загрузились',
    [Keyset.TitleEmptyContainer]: 'Возможно, мы об этом ещё не написали',
    [Keyset.ContextEmptyContainer]: 'Пожалуйста, проверьте правильность написания или попробуйте другие ключевые слова',
    [Keyset.ButtonBegin]: 'В начало',
    [Keyset.ButtonFarther]: 'Дальше',
    [Keyset.Search]: 'Поиск',
    [Keyset.AllTags]: 'Все темы',
    [Keyset.ActionSavedOnly]: 'Сохранённые',
    [Keyset.AllServices]: 'Все сервисы',
    [Keyset.PromptSignInOnLike]: 'Войдите, чтобы сохранить пост',
    [Keyset.ContextReadingTime]: [
        '{{count}} минута чтения',
        '{{count}} минуты чтения',
        '{{count}} минут чтения',
    ],
    [Keyset.SignIn]: 'Войти',
});
exports.i18 = exports.i18n.keyset(KEYSET_NAME);