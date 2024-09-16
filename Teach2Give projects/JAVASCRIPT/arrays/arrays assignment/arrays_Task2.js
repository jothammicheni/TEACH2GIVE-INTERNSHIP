const availableFoods = [
    {id: "qwe234dfh", name: "Burger", image:"🍔🍔", price: 234},
    {id: "qwe2356dxh", name: "pizza", image:"🍕🍕", price: 400},
    {id: "qwe2456yh", name: "meat", image:"🍖🍖", price: 500},
    {id: "qwe2785yh", name: "chicken", image:"🍗🍗", price: 1200},
];

const itemsAbove450 = availableFoods.filter(item => item.price > 450);
const totalBill = itemsAbove450.reduce((acc, item) => acc + item.price, 0);
console.log(`My total bill for items above 450 is ${totalBill}`);
