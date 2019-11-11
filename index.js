// element : section Car
let newCarOwner = document.getElementById("carOwner");
let newCarName = document.getElementById("carName");

// element : section Sports Car
let newCarColor = document.getElementById("carColor");
let newCarPrize = document.getElementById("carPrize");
let newCarEngine = document.getElementById("carEngine");

// ======= Class : Car
class Car {
  constructor(owner = "Unknown Owner", name = "Unknown Name") {
    this.owner = owner;
    this.name = name;
  }

  drive() {
    return `The ${this.name} car owned by drives on the road`;
  }

  getOwner() {
    return this.owner;
  }

  getName() {
    return this.name;
  }
}

function createCar() {
  event.preventDefault();
  const newCar = new Car(newCarOwner.value, newCarName.value);
  document.getElementById("newCar").innerText = `
  Add new Car Succces.
  Owner     : ${newCar.getOwner()}
  Car Name  : ${newCar.getName()}
  `;
}

addCar.onclick = createCar;

// ======= Class : SportsCar
class SportsCar extends Car {
  constructor({ owner, name, color, price, engine }) {
    super(owner, name);
    this.color = color;
    this.price = price;
    this.engine = engine;
  }

  getColor() {
    return this.color;
  }

  getPrice() {
    const formattedPrice = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigites: 0
    }).format(this.price);
    return formattedPrice;
  }

  getEngine() {
    return this.engine;
  }
}

function createSportsCar() {
  event.preventDefault();
  const newSportsCar = new SportsCar({
    owner: newCarOwner.value,
    name: newCarName.value,
    color: newCarColor.value,
    price: newCarPrize.value,
    engine: newCarEngine.value
  });
  document.getElementById("newSportsCar").innerText = `
  Add new Sport Car Succces.
  Owner     : ${newSportsCar.getOwner()}
  Car Name  : ${newSportsCar.getName()}
  Color     : ${newSportsCar.getColor()}
  Prize     : ${newSportsCar.getPrice()}
  Engine    : ${newSportsCar.getEngine()}
  `;
}

addSportsCar.onclick = createSportsCar;

// element : section stopwatch
let eStartTime = document.getElementById("startTime");
let eStopTime = document.getElementById("stopTime");

// ======= Class : Stopwatch
class Stopwatch {
  constructor(start, stop) {
    this.start = start;
    this.stop = stop;
  }
  setStart(startTime) {
    this.start = startTime;
  }

  setStop(stopTime) {
    this.start = stopTime;
  }

  getStart() {
    return this.start;
  }
  getStop() {
    return this.stop;
  }
  getDuration() {
    const duration = this.stop - this.start;
    return `${duration} ms`;
    // console.log(this.start);
    // console.log(this.stop);
    // console.log(duration);
  }
}
let setStartTimeFull;
let setStopTimeFull;
let setStartTime;
let setStopTime;

function getStartTime() {
  event.preventDefault();

  let d = new Date();
  setStartTimeFull = d;
  setStartTime = d.toLocaleTimeString();
  document.getElementById("startTime").innerText = setStartTime;
  return setStartTime;
}

function getStopTime() {
  event.preventDefault();

  let d = new Date();
  setStopTimeFull = d;
  setStopTime = d.toLocaleTimeString();
  document.getElementById("stopTime").innerText = setStopTime;
  return setStopTime;
}

function getStopwatchDuration() {
  event.preventDefault();
  const newStopwatch = new Stopwatch(setStartTimeFull, setStopTimeFull);
  newStopwatch.getDuration();
  document.getElementById(
    "durationTime"
  ).innerText = newStopwatch.getDuration();
}

startStopwatch.onclick = getStartTime;
stopStopwatch.onclick = getStopTime;
stopwatchDuration.onclick = getStopwatchDuration;
