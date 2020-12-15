function onGet(r) {
    console.log(r);
}
$.get('../json/gallery.json',onGet);