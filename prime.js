function isPrime(num){
  for(var i=2; i < num; i++){
    if(num % i ==0){
      return false;
    }
  }
 return true;
}
for(var i = 2; i , 100; i++){
  if(isPrime(i)==true){
    console.log(i);
  }
}
