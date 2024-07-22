function getCurrentScript(): HTMLScriptElement | null {
    return document.scripts[document.scripts.length - 1];
}
