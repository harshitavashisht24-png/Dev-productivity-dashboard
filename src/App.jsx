import data from "./data/data.json";
import getInsights from "./utils/logic";

function App() {
  const insights = getInsights(data);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Developer Productivity Dashboard</h1>

      <h2>Developer: {data.developer}</h2>

      <div style={{ marginTop: "20px" }}>
        <h3>Metrics</h3>

        <p style={{ color: data.cycle_time > 4 ? "red" : "green" }}>
          Cycle Time: {data.cycle_time}
        </p>

        <p style={{ color: data.lead_time > 5 ? "red" : "green" }}>
          Lead Time: {data.lead_time}
        </p>

        <p style={{ color: data.bug_rate > 0.3 ? "red" : "green" }}>
          Bug Rate: {data.bug_rate}
        </p>

        <p style={{ color: data.deployment_frequency < 5 ? "red" : "green" }}>
          Deployment Frequency: {data.deployment_frequency}
        </p>

        <p style={{ color: data.pr_throughput < 10 ? "red" : "green" }}>
          PR Throughput: {data.pr_throughput}
        </p>
      </div>

      <div style={{ marginTop: "30px" }}>
        <h3>Insights & Suggestions</h3>

        {insights.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px"
            }}
          >
            <p><b>Insight:</b> {item.message}</p>
            <p><b>Suggestion:</b> {item.suggestion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;