function getInsights(data) {
  let insights = [];

  if (data.cycle_time > 4) {
    insights.push({
      message: "Tasks are taking longer than expected",
      suggestion: "Break tasks into smaller pieces"
    });
  }

  if (data.lead_time > 5) {
    insights.push({
      message: "Code is taking longer to reach production",
      suggestion: "Improve CI/CD pipeline"
    });
  }

  if (data.bug_rate > 0.3) {
    insights.push({
      message: "High number of bugs detected",
      suggestion: "Improve testing before release"
    });
  }

  if (data.deployment_frequency < 5) {
    insights.push({
      message: "Deployments are infrequent",
      suggestion: "Automate deployment process"
    });
  }

  if (data.pr_throughput < 10) {
    insights.push({
      message: "Low number of PRs merged",
      suggestion: "Reduce PR review delays"
    });
  }

  return insights;
}

export default getInsights;