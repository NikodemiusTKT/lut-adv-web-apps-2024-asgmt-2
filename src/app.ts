console.log("Hello World!");

type TVehicle = {
  model: string;
  color: string;
  year: number;
  power: number;
};

const Vehicle: TVehicle = {
  model: "Boring generic vehicle",
  color: "Red",
  year: 1993,
  power: 60,
};

console.log(Vehicle);

interface IVehicle {
  model: string;
  color: string;
  year: number;
  power: number;
}

interface ICar extends IVehicle {
  bodyType: string;
  wheelCount: number;
}
interface IBoat extends IVehicle {
  draft: number;
}
interface IPlane extends IVehicle {
  wingSpan: number;
}

const Car: ICar = {
  model: "Ford focus",
  color: "Green",
  year: 2016,
  power: 150,
  bodyType: "Hatchback",
  wheelCount: 4,
};

const Plane: IPlane = {
  model: "Boeing 777",
  color: "White",
  year: 2020,
  power: 170000,
  wingSpan: 65,
};

const Boat: IBoat = {
  model: "Bella",
  color: "Black",
  year: 2022,
  power: 100,
  draft: 0.42,
};

const vehicles: Array<IVehicle> = [Car, Plane, Boat];
console.log(vehicles);
