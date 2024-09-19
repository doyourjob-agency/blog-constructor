interface DateTimeFormatter {
    longDate: Intl.DateTimeFormat;
    shortDate: Intl.DateTimeFormat;
    longMonthDay: Intl.DateTimeFormat;
    shortMonthDay: Intl.DateTimeFormat;
    longDateTime: Intl.DateTimeFormat;
    shortDateTime: Intl.DateTimeFormat;
    shortTime: Intl.DateTimeFormat;
    nanoTime: Intl.DateTimeFormat;
    year: Intl.DateTimeFormat;
}
export declare const format: (date: string | number, formatCode: keyof DateTimeFormatter, localeCode?: string) => string;
export {};
