let alisverisListesi=[];
let urunSayisi=Number(prompt("ALışveriş listenizde kaç ürün olacak"));
for(i=0;i<urunSayisi;i++){
    let urunler = prompt("Alışveriş listenize ne eklemek istersiniz;");
    alisverisListesi.push(urunler);
}
console.log(alisverisListesi);
