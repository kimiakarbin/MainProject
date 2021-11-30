import { Steps, Divider, Button } from "antd";
import International_Sourcing_and_Supply_Chain_Forum from "../../Assets/Image/International_Sourcing_and_Supply_Chain_Forum.webp";

const Body8 = () => {
  const { Step } = Steps;
  return (
    <div className="Body8">
      <div className="ll">
        <div>
          <h1>Trade Shows</h1>
          <h3>List of the trade shows Made-In-China.com will take part in.</h3>
        </div>
        <Button className="oo" type="primary">
          View More
        </Button>
      </div>

      <div className="kk">
        <img
          className="ii"
          src={International_Sourcing_and_Supply_Chain_Forum}
        />
        <Steps className="jj" direction="vertical">
          <Step> dfndmn</Step>
          <Step title="" description="This is a description.">
            <img
              className="ii"
              src={International_Sourcing_and_Supply_Chain_Forum}
            />
          </Step>
          <Step title="Step 3" description="This is a description." />
        </Steps>
      </div>
    </div>
  );
};

export default Body8;
