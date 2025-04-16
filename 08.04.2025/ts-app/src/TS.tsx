export default function TS() {
  // class NamedValue<T,S> {
  //   private _value: T | undefined;
  //   private _value1: S | undefined;

  //   constructor(private name: string) {}

  //   public getValue(): T | undefined {
  //     return this._value;
  //   }
  //   public setValue(value: T) {
  //     this._value = value;
  //   }

  //   public toString(): string {
  //     return `${this.name}: ${this._value}`;
  //   }
  // }
  // const namedVal = new NamedValue<number>("MY Value");
  // const namedVal1 = new NamedValue<string>("MY Value");
  // namedVal.setValue(5);

  // console.log(namedVal.toString());

  // abstract class Animal {
  //   public abstract id: number;
  //   public abstract name: string;
  // }

  // class Cat extends Animal {
  //   constructor(readonly id: number, readonly name: string) {
  //     super();
  //     console.log(`Id is ${id}, name is ${name}`);
  //   }
  // }

  // interface Shape {
  //   getArea: () => number;
  //   // get: () => number;
  // }

  // class Rectangle implements Shape {
  //   public constructor(
  //     protected readonly width: number,
  //     protected readonly height: number
  //   ) {}
  //   public getArea(): number {
  //     return this.width * this.height;
  //   }
  //   // public get(): number {
  //   //   return 5;
  //   // }

  //   public toString(): string {
  //     return `Rectangle[width=${this.width}, height=${this.height}]`;
  //   }
  // }
  // class Square extends Rectangle {
  //   public constructor(width: number) {
  //     super(width, width);
  //   }

  //   // this toString replaces the toString from Rectangle
  //   public override toString(): string {
  //     return `Square[width=${this.width}]`;
  //   }
  // }

  // const rectangle = new Rectangle(20, 40);
  // const square = new Square(20);

  // console.log(rectangle.toString());
  // console.log(square.toString());

  // class Human {
  //   protected id: number;
  //   protected name: string;

  //   constructor(id: number, name: string) {
  //     this.id = id;
  //     this.name = name;
  //   }
  // }
  // class Person extends Human {
  //   run: number;

  //   constructor(id: number, name: string, run: number) {
  //     super(id, name);
  //     this.run = run;
  //   }
  // }

  // const person = new Person(1, "Laman", 1900);

  // function FullName(name: string = "test", surname?: string) {
  //   console.log(name + " " + surname);
  // }

  // FullName("Test");

  //   function printStatusCode(code: string | number) {
  //     console.log(`My status code is ${code}.`);
  //   }
  //   printStatusCode(404);
  //   printStatusCode("404");
  //   enum StatusCodes {
  //     NotFound = 404,
  //     Success = 200,
  //     Accepted = 202,
  //     BadRequest = 400,
  //   }

  //   console.log(StatusCodes.Success);

  //   enum CardinalDirections {
  //     North = 1,
  //     East,
  //     South,
  //     West,
  //   }

  //   const currentDirection = CardinalDirections.North;
  //   // logs 0
  //   console.log(currentDirection);

  //   enum WeekDays {
  //     Monday = 1,
  //     Tuesday,
  //     Wednesday,
  //     Thursday,
  //     Friday,
  //     Saturday,
  //     Sunday,
  //   }

  //   //   const currentDay = WeekDays.Wednesday;

  //   //   console.log(currentDay);
  //   console.log(WeekDays);

  //   interface Rectangle {
  //     width: number;
  //     height: number;
  //   }
  //   interface ColoredRectangle extends Rectangle {
  //     color: string;
  //   }

  //   const rectangle: ColoredRectangle = {
  //     width: 10,
  //     height: 20,
  //     color: "Blue",
  //   };

  //   console.log(rectangle);
  return <div>TS</div>;
}
