function reversed_strings(str) {
    var spl = str.split('');
    if (spl.length % 2 === 0) {
      let length = spl.length;
          for (let i = 0; i <= length/2; i++ ) {
            let holder = spl[i];
            spl[i] = spl[length - i];
            spl[length - i] = holder;
          }
    } else {
       let length = spl.length - 1;
          for (let i = 0; i <= length/2; i++ ) {
             let holder = spl[i];
             spl[i] = spl[length - i];
             spl[length - i] = holder;
          }
        }
    return spl.join('');
}