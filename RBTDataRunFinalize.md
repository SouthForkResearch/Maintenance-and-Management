<h2>Procedured after RBT Metrics or Validation has been run.</h2>
<ol type = "1">
	<li>Copy the <u>Workbench</u> database to a computer that has Access.</li>
	<li>Open the <u>Workbench</u> and the <i>LogFiles</i> table.</li>
	<li>Review the <i>Status</i> field.
		<ol type = "a">
			<li>If all visits have <strong>Success</strong>, load the data to AWS.</li>
			<li>If any visits have <strong>Validation Fail</strong> or <strong>Code Fail</strong>, review the LogMessages table.</li>
			<li>You should still load the RBT Metrics to AWS even if some visits failed, however if all of your visits failed, you do not need to try to load the metrics.</li>
			<li>Visits which fail, should be reviewed and repaired or sent back to the crew to repair.</li>
		</ol></li>
	<li>Log the RBT run in the Google Doc.
		<ol type = "a">
			<li>In the the Google Drive, Open the document <strong>Computer Processing Status</strong>.</li>
			<li>Fill out the next line in the document similar to previous runs.</li>
			<li>If the run did not complete (e.g. the computer restarted), Type <strong>No</strong> in the Completed Successfully field.</li>
			<li>If the run did complete (e.g. All the visits ran and some passed), Type <strong>Yes</strong> in the Completed Successfully field.</li>
		</ol></li>
	<li>Go to the <strong>SyncDatatoAWS</strong> document.</li>
</ol>
