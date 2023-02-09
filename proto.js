const Plane ={name:"FighterPlane", runway :"shorter" , speed:120};
const Plane1  ={ name:"CargoPlane1", runway : "longer", speed:150};
Object.setPrototypeOf(Plane,Plane1)
console.log(Plane.name);
console.log(Plane.runway);
console.log(Plane.speed);
console.log(Plane1.name);
