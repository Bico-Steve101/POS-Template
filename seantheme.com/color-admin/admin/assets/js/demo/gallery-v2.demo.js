import PhotoSwipeLightbox from '../../plugins/photoswipe/dist/photoswipe-lightbox.esm.js';const lightbox=new PhotoSwipeLightbox({gallery:'#gallery',children:'a',pswpModule:()=>import('../../plugins/photoswipe/dist/photoswipe.esm.js')});lightbox.init();