import Color from 'color';

export class stdColours {
  private static shifts: number[] = [64, 128, 191];

  private static reverse = (arr: any) => ({
    [Symbol.iterator]() {
      let i = arr.length;
      return {
        next: () => ({
          value: arr[--i],
          done: i < 0,
        }),
      };
    },
  });

  *[Symbol.iterator]() {
    let shift: number;
    yield Color.rgb(255, 0, 0).string();
    for (shift of stdColours.shifts) yield Color.rgb(255, shift, 0).string();
    yield Color.rgb(255, 255, 0).string();
    yield Color.rgb(255, 255, 255).string();
    for (shift of stdColours.reverse(stdColours.shifts)) yield Color.rgb(shift, 255, 0).string();
    yield Color.rgb(0, 255, 0).string();
    for (shift of stdColours.shifts) yield Color.rgb(0, 255, shift).string();
    yield Color.rgb(0, 255, 255).string();
    for (shift of stdColours.reverse(stdColours.shifts)) yield Color.rgb(0, shift, 255).string();
    yield Color.rgb(0, 0, 255).string();
    for (shift of stdColours.shifts) yield Color.rgb(shift, 0, 255).string();
    yield Color.rgb(255, 0, 255).string();
    for (shift of stdColours.reverse(stdColours.shifts)) yield Color.rgb(255, 0, shift).string();
  }
}
