module.exports = function multiply(first, second) {
  let line = [], args = [[]], result = [];
  let one = first.split(''),
      two = second.split('');
  let i = 0;
  two.forEach((top) => {
    one.forEach((bottom) => {
      line.push(top * bottom);
    });
    args[i] = Array(i).fill(0);
    args[i].push(...line);
    line.length = 0;
    i++;
  })
  let sizeX = args.length,
      sizeY = args[sizeX - 1].length,
      sumLine = 0;
  for (let i = sizeY - 1; i >= 0; i--) {
    for (let j = sizeX - 1; j >= 0; j--) {
      if (args[j][i] == undefined) {
        args[j][i] = 0;
      }
      sumLine += args[j][i];
    }
    result.unshift(sumLine);
    sumLine = 0;
  }
  result.reverse();
  let solut = result.map((item, i) => {
    if (i === result.length - 1) return item;
    if ((item + '').length == 1) {
      return item;
    }
    result[i + 1] += +((item + '').substr(0, (item + '').length - 1));
    return +((item + '').charAt(((item + '').length - 1)));
  })
  return solut.reverse()
              .join('');
}
