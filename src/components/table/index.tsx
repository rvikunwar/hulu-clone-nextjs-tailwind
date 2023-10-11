import React, { ReactNode } from "react";

function Table({ columns, rows }: { columns: ReactNode[]; rows: any[] }) {
  return (
    <table className="w-full text-white bg-[#364153] rounded-md">
      <thead>
        <tr className="border-b cursor-pointer">
          {columns.map((item, index) => (
            <th className="text-left px-4 py-2 font-thin" key={index}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((item, rowIndex) => (
          <tr
            key={rowIndex}
            className={`cursor-pointer ${
              rowIndex % 2 === 1 ? 'bg-[#1A202C]' : ''
            }`}>
            {Object.keys(item).map((key, colIndex) => (
              <td className="text-left px-4 py-2 font-thin text-sm" key={colIndex}>{item[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
