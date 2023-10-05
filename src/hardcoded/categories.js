const {Category} = require("../db");
const categories = [
  {id:1, name: "Productos exclusivos" },
  {id:2, name: "Cordones" },
  {id:4, name: "Hormas" },
  {id:3, name: "Plantillas" },
  {id:5, name: "Taloneras" },
  {id:6, name: "Cepillos" },
  {id:7,name: "Productos para limpieza" },
  {id:10,name: "Productos para el cuidado" },
  {id:8, name: "Calzadores" },
  {id:9,name: "Productos para zapatos formales" },
];

const createCategories = async () => {
  const promises = categories.map((cat) => Category.create({ name: cat.name.toLowerCase() }));
  await Promise.all(promises);
};

module.exports = {
  createCategories,
};