var s=[
"http://freesatoshisfh.us/btx/?r=171qx3sSpjmeVfnSo5Lq8nJ66TvSVCR8cW",
"http://freebitcoin.win/ref/18881",
"http://coinpot.win/ref/9839",
"http://conocoin.com/?r=r=12JcRdFJnZy9LQXuw8TZ3qj2vYGAegWDtP",
"http://freebitcoinfree.xyz/?r=r=12JcRdFJnZy9LQXuw8TZ3qj2vYGAegWDtP",
"http://hubbitcoin.info/?r=r=12JcRdFJnZy9LQXuw8TZ3qj2vYGAegWDtP",
"http://www.boxfaucet.net/?r=r=12JcRdFJnZy9LQXuw8TZ3qj2vYGAegWDtP",
"http://kingmaxbitcoin.com/?r=r=12JcRdFJnZy9LQXuw8TZ3qj2vYGAegWDtP",
"http://10-24.club/?r=r=12JcRdFJnZy9LQXuw8TZ3qj2vYGAegWDtP",
"http://in-palmer.ru/?r=r=12JcRdFJnZy9LQXuw8TZ3qj2vYGAegWDtP",
"http://profit-seeking.ru/?r=r=12JcRdFJnZy9LQXuw8TZ3qj2vYGAegWDtP",
"http://www.bitcoinearnings.club/?r=r=12JcRdFJnZy9LQXuw8TZ3qj2vYGAegWDtP",
"http://orange-stripes.com/?r=r=12JcRdFJnZy9LQXuw8TZ3qj2vYGAegWDtP",
"http://bitcoland.net/?r=r=12JcRdFJnZy9LQXuw8TZ3qj2vYGAegWDtP",
"http://manycoins.ru/?r=r=12JcRdFJnZy9LQXuw8TZ3qj2vYGAegWDtP",
"http://www.getbitcoin.xyz/?r=r=12JcRdFJnZy9LQXuw8TZ3qj2vYGAegWDtP",
"http://coin.themetheme.net/?r=r=12JcRdFJnZy9LQXuw8TZ3qj2vYGAegWDtP",
"http://bitcoinwin.top/?r=r=12JcRdFJnZy9LQXuw8TZ3qj2vYGAegWDtP",
"http://www.fallbitcoin.info/?r=r=12JcRdFJnZy9LQXuw8TZ3qj2vYGAegWDtP",
"http://satoshik.xyz/?r=r=12JcRdFJnZy9LQXuw8TZ3qj2vYGAegWDtP",
"http://faucet.bitcoinbarry.com/?r=r=12JcRdFJnZy9LQXuw8TZ3qj2vYGAegWDtP",
"http://olgafaucet.ru/?r=r=12JcRdFJnZy9LQXuw8TZ3qj2vYGAegWDtP",
"http://bitcedo.com/?r=r=12JcRdFJnZy9LQXuw8TZ3qj2vYGAegWDtP",
"http://megafaucetbox.xyz/?r=r=12JcRdFJnZy9LQXuw8TZ3qj2vYGAegWDtP",
"http://mangobtc.ru/?r=r=12JcRdFJnZy9LQXuw8TZ3qj2vYGAegWDtP",
"http://bananbtc.ru/?r=r=12JcRdFJnZy9LQXuw8TZ3qj2vYGAegWDtP",
"http://ananascoin.ru/?r=r=12JcRdFJnZy9LQXuw8TZ3qj2vYGAegWDtP",
"http://www.boxfaucet.com/?r=r=12JcRdFJnZy9LQXuw8TZ3qj2vYGAegWDtP",
"http://colorbtc.xyz/?r=r=12JcRdFJnZy9LQXuw8TZ3qj2vYGAegWDtP",

];
var adr,i,x=0,c=s.length;
function address() {
adr=prompt('Enter your bitcoin address:');
s=s.map(function(x){
  return x.indexOf("a=") != -1 ? x + adr : x; 
});
}
function next(){
x+=1;
if (x>c-1)
  {
  x=0;
  }
changeSrc();
}
function prev(){
x-=1;
if (x<=0)
  {
  x=c-1;
  }
changeSrc();
}
function jumpTo() {
i=prompt("Enter a number to skip to that faucet.");
x=0;
while (i!=x) {
  if (x>c-2) {
  break;
  }
  x+=1;
}
changeSrc();
}
function newTab() {
var win=window.open(document.getElementById("fm").src, '_blank');
win.focus();
}
function changeSrc() {
document.getElementById("fm").src=s[x];
}