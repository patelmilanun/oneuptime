import { history } from '../store';

// This is an array of the available first key characters for the shortcut
const initKeys: $TSFixMe = ['f', 'c', 'p', 's', 'o'];

/**
 * @description creates keybinding for side nav
 * @param {object} event keyboard event
 * @param {array} route individual route in the application
 * @param {string} path actual path to navigate to
 * @param {array} keys array of keys typed in
 * @param {function} resetKeys function to reset the keys array
 */

const keyBind: Function = (
    event: $TSFixMe,
    route: $TSFixMe,
    path: $TSFixMe,
    keys: $TSFixMe,
    resetKeys: $TSFixMe
): void => {
    let shortcut: $TSFixMe = [];
    // Ensure the target is always body and not inside any other element (input, textarea, etc)
    if (route.shortcut && event.target.localName === 'body' && event.key) {
        shortcut = route.shortcut.split('+');
        keys.push(event.key.toLowerCase());

        if (keys.length === 1 && !initKeys.includes(keys[0])) {
            resetKeys();
        }
        if (keys.length === 2) {
            if (keys[0] === shortcut[0] && keys[1] === shortcut[1]) {
                resetKeys();
                return history.push(path);
            }
            resetKeys();
        }
    }
};

export const navKeyBind: Function = (route: $TSFixMe, path: $TSFixMe): void => {
    const keys: $TSFixMe = [];
    const resetKeys: Function = (): void => {
        return [];
    };
    /*
     * Reasons to use keydown
     * 1 --> gives the user impression that they can press and hold two keys simultaneously
     * 2 --> accommodate users that don't like pressing and holding two keys simultaneously (which is the actual behaviour, (^-^))
     */
    window.addEventListener('keydown', (e: $TSFixMe) => {
        return keyBind(e, route, path, keys, resetKeys);
    });
};

export const cleanBind: Function = (route: $TSFixMe, path: $TSFixMe): void => {
    const keys: $TSFixMe = [];
    const resetKeys: Function = (): void => {
        return [];
    };
    window.removeEventListener('keydown', (e: $TSFixMe) => {
        return keyBind(e, route, path, keys, resetKeys);
    });
};