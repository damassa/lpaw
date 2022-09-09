export let CANVAS: any = document.querySelector('canvas');
CANVAS.width = window.innerWidth * 0.8;
CANVAS.height = window.innerHeight * 0.9;
export let CTX = CANVAS.getContext('2d');