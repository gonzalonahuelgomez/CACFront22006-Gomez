for(let i = 11; i > 8; i--){
  document.write(`<p class="bold-marginTop">La tabla del ${i}:</p>`)
  for(let j = 1; j < 10; j++){
    document.write(`<p>${i} x ${j} = ${i*j}<p>`)
  }
}
