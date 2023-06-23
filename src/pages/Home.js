import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toppingsRetriever } from "../redux/pizza/actions";
import { Table } from "antd";

const Home = () => {
  const dispatch = useDispatch();

  const { toppingsRanked } = useSelector(({ pizza }) => pizza);

  const columns = [
    {
      title: 'Rank',
      dataIndex: 'rank',
      key: 'rank',
      align: 'center',
      render: (id, record, index)=><div>{++index}</div>
    },
    {
      title: 'Pizza Toppings',
      dataIndex: 'toppings',
      align: 'center',
    },
    {
      title: 'Count',
      dataIndex: 'count',
      align: 'center',
    },
  ];

  useEffect(() => {
    dispatch(toppingsRetriever());
  }, [dispatch]);

  return (
    <div style={{background: '#FFFFFC', height: '100vh'}}>
      <h1 
      className="d-flex justify-content-center py-3 text-white" 
      style={{background: 'linear-gradient(to right, #246A73 30%, #368F8B 50%, #F3DFC1)'}}>
        Pizza Toppings Ranked
      </h1>
      <div className="d-flex justify-content-center mt-2">
        <div className="col-6" style={{border: '0.4px solid #d3d3d3'}}>
          <Table 
          dataSource={toppingsRanked.slice(0,20)} 
          columns={columns} 
          pagination={false}
          scroll={{
            y: '79vh',
            scrollToFirstRowOnChange: true,
          }}
          size="small" 
          align="center" 
          />
        </div>
      </div>
    </div>
  );
  }
  
export default Home;