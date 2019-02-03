Service uses Mongoose for Schema relations with MongoDB.

Api's are created in nodeJs and are exposed using express.

<h2>Routings are as mentioned below.</h2>



List all the ESG details: <b></b>
		
      GET: http://localhost:1010/apis/v1.0/stateless/esg/details
      
Get ESG Details by StockName:

      GET: http://localhost:1010/apis/v1.0/stateless/esg/details/{stock_name}

List all the Graph Details data:

      http://localhost:1010/apis/v1.0/stateless/graph/details
      
Get Graph Details data by Stock_Name:
      
      http://localhost:1010/apis/v1.0/stateless/graph/details/{stock_name}
