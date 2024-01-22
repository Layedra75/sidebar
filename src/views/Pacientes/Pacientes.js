import React, { useRef, useEffect } from 'react';
import $ from 'jquery';
import 'datatables.net-bs5';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyTable = () => {
  const tableRef = useRef(null);

  useEffect(() => {
    const table = $(tableRef.current).DataTable({
      responsive: true,
      data: [
        { name: 'John Doe', position: 'Manager', office: 'New York', age: '35', startDate: '2018/01/01' },
        { name: 'Jane Doe', position: 'Developer', office: 'Chicago', age: '28', startDate: '2019/03/01' },
        // More rows...
      ],
      columns: [
        { title: 'Name', data: 'name' },
        { title: 'Position', data: 'position' },
        { title: 'Office', data: 'office' },
        { title: 'Age', data: 'age' },
        { title: 'Start Date', data: 'startDate' },
      ],
    });

    return () => {
      table.destroy();
    };
  }, []);

  return (
    <div className="card shadow">
      <div className="card-body">
        <h5 className="card-title bg-light p-2 mb-4 text-center">Employee Data</h5>
        <div className="table-responsive bg-white">
          <table className="table table-bordered table-striped" ref={tableRef}>
            <thead>
              <tr>
                <th className="text-nowrap">Name</th>
                <th className="text-nowrap">Position</th>
                <th className="text-nowrap">Office</th>
                <th className="text-nowrap">Age</th>
                <th className="text-nowrap">Start Date</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyTable;