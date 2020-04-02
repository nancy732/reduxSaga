import React from "react";
import { useTable } from "react-table";
export default function Table() {
  const data = React.useMemo(
    () => [
      {
        col1: "",
        col2: "",
        col3: ""
      },
      {
        col1: "",
        col2: "",
        col3: ""
      },
      {
        col1: "",
        col2: "",
        col3: ""
      }


    ],
    []
  );
  const columns = React.useMemo(
    () => [
      {
        Header: "Column 1",
        accessor: "col1" // accessor is the "key" in the data
      },
      {
        Header: "Column 2",
        accessor: "col2"
      },
      {
        Header: "Column 3",
        accessor: "col3"
      }
    ],
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data });

  return (
    <table {...getTableProps()} style={{ border: "solid 2px blue" }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: "solid 2px red",
                  background: "aliceblue",
                  color: "black",
                  fontWeight: "bold"
                }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: "10px",
                      border: "solid 1px gray",
                      background: "papayawhip"
                    }}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
