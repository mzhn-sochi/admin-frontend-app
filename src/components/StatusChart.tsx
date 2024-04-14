"use client";
import { PieChart, Pie, Cell } from "recharts";

const productSales = [
  {
    name: "Jan",
    product1: 3000,
    product2: 2400,
  },
  {
    name: "Feb",
    product1: 3000,
    product2: 2210,
  },
  {
    name: "Mar",
    product1: 2000,
    product2: 2290,
  },
  {
    name: "Apr",
    product1: 2780,
    product2: 2000,
  },
  {
    name: "May",
    product1: 1890,
    product2: 2181,
  },
  {
    name: "Jun",
    product1: 8390,
    product2: 2000,
  },
];
const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#0088FE",
  "#00C49F",
  "#FFBB28",
];

export default function StatusChart() {
  return (
    <PieChart width={500} height={400}>
      <Pie
        data={productSales}
        dataKey="product1"
        label
        outerRadius={80}
        fill="#8884d8"
      >
        {productSales.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
        ))}
      </Pie>
    </PieChart>
  );
}
