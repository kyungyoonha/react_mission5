import { data as menuItemsStructure } from "../menuItems.json";

export const getMenuItemsFromPath = (path) => {
    if (path === "/" || !path) {
        return menuItemsStructure;
    }
    // /page3/intro3 => ['', page3, intro3]
    const pathSplit = path.split("/");
    let menuItems = menuItemsStructure;
    for (var i = 1; i < pathSplit.length; i++) {
        let pathItem = pathSplit[i];
        menuItems = menuItems.filter((item) => item.url === "/" + pathItem)[0];
    }
    return menuItems;
};

export const makeRandomId = () => {
    var text = "";
    var possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
};
