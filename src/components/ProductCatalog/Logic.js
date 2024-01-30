export const transformData = (products, stock, prices) => {
  const data = products.map((prod) => ({
    ...prod,
    stock: stock.find((st) => st.product_id === prod.id)?.stock,
    price: prices.find((pr) => pr.product_id === prod.id)?.price,
    image: `http://localhost:3000/images/${prod.model.replaceAll(
      " ",
      "-"
    )}.jpg`,
  }));
  const groupData = [];
  data.forEach((d) => {
    const found = groupData.find((gd) => gd.model === d.model);
    if (!found) {
      groupData.push({ model: d.model, children: [d] });
    } else {
      found.children.push(d);
    }
  });
  return groupData;
};
