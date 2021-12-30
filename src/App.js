import { Button, DatePicker } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

const App = () => {
  return (
    <>
      <Button type="primary">PRESS ME</Button>
      <DatePicker placeholder="select date" />
    </>
  );
};

export default App;
