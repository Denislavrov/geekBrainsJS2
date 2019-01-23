'use strict';


window.onload = () => {
    let gallery = document.querySelector('#gallery');
    fetch('galleryjson.json')
        .then(result => {
            console.log(result);
            return result.json();
        })
        .then(data => {
            console.log(data);
            for(let i = 0; i < data.length; i++) {
                const image = new ImgaeTable(data[i].src, data[i].alt, 'img__small', data[i].srcMax);
                gallery.appendChild(image._createImage());
                const modal = new Modal('modal__bg', 'modal', 'modal__img', data[i].srcMax, '#gallery');
                modal._click();
                }
        })
        .catch(errors => console.log(errors));
};


class ImgaeTable {
    constructor(srcImg, altImg, classImg, dataImg) {
        this.srcImg = srcImg;
        this.altImg = altImg;
        this.classImg = classImg;
        this.dataImg = dataImg;
    }

    _createImage() {
        const image = new Image();
        image.classList.add(this.classImg);
        image.src = this.srcImg;
        image.setAttribute('alt', this.altImg);
        image.setAttribute('data-big', this.dataImg);
        return image;
    }
}

class Modal {
    constructor(classBg, classModal, classModalImg, bigSrc, gallery) {
        this.classBg = classBg;
        this.classModal = classModal;
        this.classModalImg = classModalImg;
        this.bigSrc = bigSrc;
        this.gallery = gallery;
    }

    _createModal() {
        const modalBG = document.createElement('DIV');
        modalBG.classList.add(this.classBg);
        const modal = document.createElement('DIV');
        modal.classList.add(this.classModal);
        const modalImg = new Image();
        modalImg.classList.add(this.classModalImg);
        modalImg.src = this.bigSrc;
        modal.appendChild(modalImg);
        modal.appendChild(this._createClose('modal__close'));
        modalBG.appendChild(modal);

        return modalBG;
    }

    _click() {
        document.querySelector(this.gallery).addEventListener('click', event => this._callModal(event));
    }

    _callModal(event) {
        const clickToImg = event.target;
        if (clickToImg.tagName !== 'IMG') {
            return;
        }
        document.querySelector(this.gallery).appendChild(this._createModal());
    }

    _createClose(btnClass,) {
        const close = document.createElement('BUTTON');
        close.classList.add(btnClass);
        close.innerHTML = '\t&#215;';
        close.addEventListener('click', () => {
            document.querySelector('.modal__bg').remove();
        });
        return close;
    }

}
