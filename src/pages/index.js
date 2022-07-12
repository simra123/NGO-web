import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Template Id",
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: "Username",
    selector: (row) => row.username,
  },
  {
    name: "Create By",
    selector: (row) => row.createdBy,
  },
  {
    name: "Template",
    selector: (row) => row.template,
  },
  {
    name: "Status",
    selector: (row) => row.status,
  },
  {
    name: "Created date and time",
    selector: (row) => row.time,
  },
  {
    name: "Action",
    selector: (row) => row.action,
  },
];

const data = [
  {
    id: 1,
    username: "Beetlejuice",
    createdBy: "1988",
    template: "Dear customer your otp code is 310983",
    status: true,
    time: "12 july 2022",
  },
  {
    id: 1,
    username: "Beetlejuice",
    createdBy: "1988",
    template: "Dear customer your otp code is 310983",
    status: true,
    time: "12 july 2022",
  },
  {
    id: 1,
    username: "Beetlejuice",
    createdBy: "1988",
    template: "Dear customer your otp code is 310983",
    status: true,
    time: "12 july 2022",
  },
  {
    id: 1,
    username: "Beetlejuice",
    createdBy: "1988",
    template: "Dear customer your otp code is 310983",
    status: true,
    time: "12 july 2022",
  },
  {
    id: 1,
    username: "Beetlejuice",
    createdBy: "1988",
    template: "Dear customer your otp code is 310983",
    status: true,
    time: "12 july 2022",
  },
  {
    id: 1,
    username: "Beetlejuice",
    createdBy: "1988",
    template: "Dear customer your otp code is 310983",
    status: true,
    time: "12 july 2022",
  },
  {
    id: 1,
    username: "Beetlejuice",
    createdBy: "1988",
    template: "Dear customer your otp code is 310983",
    status: true,
    time: "12 july 2022",
  },
  {
    id: 1,
    username: "Beetlejuice",
    createdBy: "1988",
    template: "Dear customer your otp code is 310983",
    status: "ihoieh",
    time: "12 july 2022",
  },
  {
    id: 1,
    username: "Beetlejuice",
    createdBy: "1988",
    template: "Dear customer your otp code is 310983",
    status: "ihoieh",
    time: "12 july 2022",
  },
  {
    id: 1,
    username: "Beetlejuice",
    createdBy: "1988",
    template: "Dear customer your otp code is 310983",
    status: "ihoieh",
    time: "12 july 2022",
  },
  {
    id: 1,
    username: "Beetlejuice",
    createdBy: "1988",
    template: "Dear customer your otp code is 310983",
    status: "ihoieh",
    time: "12 july 2022",
  },
  {
    id: 1,
    username: "Beetlejuice",
    createdBy: "1988",
    template: "Dear customer your otp code is 310983",
    status: "ihoieh",
    time: "12 july 2022",
  },
];
const MyComponent = () => {
  return (
    <DataTable
      columns={columns}
      data={data}
      title="Templates"
      responsive
      hover
      pagination
      scopedSlots={{
        status: (item) => <td>{console.log(item, "titem")}</td>,
      }}
      highlightOnHover
    />
  );
};
export default MyComponent;
