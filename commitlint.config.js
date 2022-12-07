module.exports = {
	plugins: ["commitlint-plugin-jira-rules"],
	extends: ["jira"],
	rules: {
		"jira-task-id-max-length": [2, "always", 10],
		"jira-task-id-empty": [2, "always"],
		"jira-task-id-min-length": [2, "always", 3],
		"jira-task-id-case": [2, "always", "lowercase"],
		"jira-task-id-separator": [2, "always", "-"],
		"jira-commit-message-separator": [2, "always", ":"]
	}
};
