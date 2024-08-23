# Figure lib JS

Example library for calculating areas of figures in TypeScript

# How to use

Library offers 3 figure classes

- `Rectangle`
- `Triangle`
  - use `create` builder method to construct an instance
- `Circle`

Calculate the perimeter and the area of the figures by calling methonds on the `Figure2D` interface they implement

## Example

```typescript
import { Triangle, Circle } from "figure-lib-js";

const triangle = Triangle.create([3, 4, 5]);
console.log(triangle.isRight); // true

const circle = new Circle(3);
console.log(circle.getArea());
```

# How to build

```bash
npm install
npm run build
```
