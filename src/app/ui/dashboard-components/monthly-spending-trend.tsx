import { PieChart, Pie, Cell } from 'recharts';

// Your data - just an array with name and value
const data = [
  { name: 'Food', value: 400 },
  { name: 'Transport', value: 300 },
  { name: 'Shopping', value: 300 },
  { name: 'Bills', value: 200 },
];

// Colors for each slice
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function MonthlySpendingTreand(){

    return(
      <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}        // center X position
        cy={200}        // center Y position  
        outerRadius={80} // how big the pie is
        fill="#8884d8"
        dataKey="value" // which field has the numbers
        paddingAngle={5} // THIS IS THE MAGIC - adds gaps!
      >
        {/* This colors each slice */}
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>

    )
}