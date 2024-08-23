/**
 * Represents a figure in 2 dimensions
 */
export interface Figure2D {
  /** Calculate the area of the figure */
  getArea(): number;
  /** Calculate the perimeter of the figure */
  getPerimeter(): number;
}

export class Rectangle implements Figure2D {
  constructor(
    public readonly width: number,
    public readonly height: number,
  ) {}
  getArea(): number {
    return this.width * this.height;
  }
  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

/**
 * Construct an instance using `create` static method
 */
export class Triangle implements Figure2D {
  public readonly isRight: boolean;

  private constructor(public readonly sides: [number, number, number]) {
    const sum: number = this.sides
      .map((side) => side ** 2)
      .reduce((acc, el) => acc + el);
    const max: number = Math.max(...this.sides) ** 2 * 2;
    this.isRight = sum === max;
  }
  /**
   * @param sides tuple of sides in unspecified units
   * @returns an instance of `Triangle` if sides are valid, otherwise `null`
   */
  static create(sides: [number, number, number]): Triangle | null {
    if (
      sides[0] + sides[1] <= sides[2] ||
      sides[0] + sides[2] <= sides[1] ||
      sides[1] + sides[2] <= sides[0]
    ) {
      return null;
    }
    const triangle: Triangle = new Triangle(sides);
    return triangle;
  }
  getArea(): number {
    const sp = this.getPerimeter() / 2.0;
    const a = sp - this.sides[0];
    const b = sp - this.sides[1];
    const c = sp - this.sides[2];
    return Math.sqrt(sp * a * b * c);
  }
  getPerimeter(): number {
    return this.sides[0] + this.sides[1] + this.sides[2];
  }
}

export class Circle implements Figure2D {
  /**
   * @param radius radius of the circle in unspecified units
   */
  constructor(public readonly radius: number) {}

  getArea(): number {
    return this.radius ** 2 * Math.PI;
  }

  getPerimeter(): number {
    return this.radius * 2 * Math.PI;
  }
}
