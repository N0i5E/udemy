let json = '{"id":2}';



try {
    let user = JSON.parse(json);
    console.log(user);

    if (!user.name) {
        throw new Error("В этих данных нет имени");
    }
} catch(error) {
    console.log(error);
    // console.log(`Мы получили ошибку: ${error.name}`);
} finally {
     console.log("А я выполнюсь всегда");
}

console.log("А я буду работать дальше");


// function sum(n) {
//     return n ? (n + sum(n - 1)) : 0;
//   }
  
//   var n = +prompt('Введите n?', 100);
  
//   var start = new Date();
  
//   try {
//     var result = sum(n);
//   } catch (e) {
//     result = 0;
//   } finally {
//     var diff = new Date() - start;
//   }
  
//   alert( result ? result : 'была ошибка' );
//   alert( "Выполнение заняло " + diff );

  let x = "5";
  console.log(typeof(x));

  x = Number(x);
  typeof(x);
  console.log(typeof(x));
  

