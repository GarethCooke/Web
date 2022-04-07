

export class stdColours {
  private static shifts: number[] = [64, 128, 191];
  private Color = require('color');

  private static reverse = arr => ({
    [Symbol.iterator]() {
      let i = arr.length;
      return {
        next: () => ({
          value: arr[--i],
          done: i < 0
        })
      }
    }
  });

  *[Symbol.iterator]() {
    let shift: number;
    yield this.Color.rgb(255, 0, 0); for (shift of stdColours.shifts)
      yield this.Color.rgb(255, shift, 0);
    yield this.Color.rgb(255, 255, 0); yield this.Color.rgb(255, 255, 255);
    for (shift of stdColours.reverse(stdColours.shifts))
      yield this.Color.rgb(shift, 255, 0); yield this.Color.rgb(0, 255, 0);
    for (shift of stdColours.shifts)
      yield this.Color.rgb(0, 255, shift); yield this.Color.rgb(0, 255, 255);
    for (shift of stdColours.reverse(stdColours.shifts))
      yield this.Color.rgb(0, shift, 255); yield this.Color.rgb(0, 0, 255);
    for (shift of stdColours.shifts)
      yield this.Color.rgb(shift, 0, 255); yield this.Color.rgb(255, 0, 255);
    for (shift of stdColours.reverse(stdColours.shifts))
      yield this.Color.rgb(255, 0, shift);
  }
}
