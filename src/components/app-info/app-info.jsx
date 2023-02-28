import './app-info.css';

const AppInfo = ({ employeesCount, employeesRiseCount }) => {
  return (
    <div className="app-info">
      <h1>Accounting of employees in the company</h1>
      <h2>Total employees: {employeesCount} </h2>
      <h2>Bonus will get: {employeesRiseCount} </h2>
    </div>
  );
};

export default AppInfo;
