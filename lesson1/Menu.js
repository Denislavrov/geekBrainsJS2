class Menu {
    constructor(id, className, items) {
        this.id = id;
        this.className = className;
        this.items = items;
    }

    render() {
        let result = `<ul class="${this.className}" id="${this.id}">`;
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] instanceof MenuItem || this.items[i] instanceof SubMenu) {
                result += this.items[i].render();
            }
        }
        result += '</ul>';
        return result;
    }

    remove() {
        return document.querySelector(`#menu`).remove();
    }
}

class SubMenu extends Menu {
    constructor(id, className, href, subTitle, classNameItem, activeLi, items) {
        super(id, className, items);
        this.href = href;
        this.subTitle = subTitle;
        this.classNameItem = classNameItem;
        this.activeLi = activeLi;

    }

    render() {
        return `<li class="${this.activeLi}"><a href="${this.href}" class="${this.classNameItem}">${this.subTitle}</a>${super.render()}</li>`
    }

}
