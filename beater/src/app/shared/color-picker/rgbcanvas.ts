import Color from 'color';

export class RGBCanvas {
  private static isApproximate(test1: number, test2: number, test3: number, col1: number, col2: number, col3: number, prev3: number, accuracy: number): boolean {
    if (test1 == col1) {
      if (test2 == col2) {
        if (test3 == col3) return true;
        else if (Math.abs(test3 - col3) <= accuracy) {
          return true;
        }
      }
    }
    return false;
  }

  static findColorPos(colour: string, img: ImageData, accuracy: number): [number, number] | null {
    const nRGB: number[] = Color(colour).array();
    if (nRGB.length >= 3) {
      const imageData: Uint8ClampedArray = img.data;
      for (let pixel = 0; pixel < img.width * img.height; pixel++) {
        const pixelRGB: number = 4 * pixel;
        let find = Color(colour);
        let next = Color.rgb(imageData[pixelRGB], imageData[pixelRGB + 1], imageData[pixelRGB + 2]);
        if (Math.abs(find.red() - next.red()) < accuracy && Math.abs(find.green() - next.green()) < accuracy && Math.abs(find.blue() - next.blue()) < accuracy) {
          const targetHeight: number = Math.trunc(pixel / img.width);
          return [pixel - img.width * targetHeight, targetHeight];
        }
      }
    }
    return null;
  }
}
