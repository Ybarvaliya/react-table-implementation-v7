// Table.tsx
import { Column, usePagination, useSortBy, useTable } from "react-table";

interface TableComponentProps {
  data: T[];
  columns: Column[];
  heading: string;
  showPagination: boolean;
}

const TableComponent = ({
  data,
  columns,
  heading,
  showPagination = false,
}: TableComponentProps) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    state: { pageIndex },
    pageCount,
    gotoPage,
  }: any = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 5, pageIndex: 2 },
    },
    useSortBy,
    usePagination
  );

  return (
    <div>
      <h2 className="">{heading}</h2>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((hg: any) => (
            <tr {...hg.getHeaderGroupProps()}>
              {hg.headers.map((column: any) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  {column.isSorted && (
                    <span>{column.isSortedDesc ? " V" : " A"}</span>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row: any) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id}>
                {row.cells.map((cell: any) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Pagination */}
      {showPagination && (
        <div>
          <button disabled={pageIndex === 0} onClick={() => gotoPage(0)}>
            First
          </button>{" "}
          <button disabled={!canPreviousPage} onClick={previousPage}>
            {"<"}
          </button>
          <span>
            {" "}
            {pageIndex + 1} of {pageCount}{" "}
          </span>
          <button disabled={!canNextPage} onClick={nextPage}>
            {">"}
          </button>{" "}
          <button
            disabled={pageIndex === pageCount - 1}
            onClick={() => gotoPage(pageCount - 1)}
          >
            Last
          </button>
        </div>
      )}
    </div>
  );
};

export default TableComponent;
