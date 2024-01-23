// import BasicTable from "./BasicTable";
import TableComponent from "./Table/Table";
import { DATA } from "./Table/data";

const columns = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Age",
    accessor: "age",
  },
  {
    Header: "Email",
    accessor: "email",
  },
];

const App = () => {
  return (
    <>
      <TableComponent data={DATA} columns={columns} heading="Table Heading" showPagination></TableComponent>
      {/* <BasicTable /> */}
    </>
  );
};


export default App;
