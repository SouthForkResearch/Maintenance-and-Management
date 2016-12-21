<h2>Sync Data for RBT and Hydro Model runs to AWS</h2>
<ol type = "1">
	<li><u>Update Output file name</u> structure to match AWS.</li>
		<ol type = "a">
			<li>This tool is located in the <strong>\Tools\</strong> folder.</li>
			<li>In the Windows Start Menu.</li>
			<li>Type: <strong>cmd</strong> to open a command window.</li>
			<li>Type the path to the tool. (example: python D:\Tools\RenameRBTMetricsResults.py D:\CHaMP\Processing\InputOutputMetrics\)</li>
				<ol type = "i">
									
					<li>Parts of tool path (example):
					<li><strong>Tool path:</strong> python D:\Tools\RenameRBTMetricResults.py</li>
					<li><strong>Output folder:</strong> D:\CHaMP\Processing\InputOutputMetrics\</li>
				</ol>
			<li>Click Enter</li>
			<li>The script will show a prompt when it is complete</li>
		</ol>
	<li><u>Upload data to AWS</u></li>
		<ol type = "a">
			<li>In the <strong>AWS_Batch</strong> folder</li>
			<li>Double click on the appropriate tool</li>
				<ul>
					<li>Upload_RBTMetrics_CHaMP.bat</li>
					<li>Upload_RBTMetrics_AEM.bat</li>
					<li>Upload_HydroPrepRasters_CHaMP.bat</li>
					<li>Upload_HydroPrepRasters_AEM.bat</li>
				</ul>
			<li>A <strong>cmd</strong> window will open</li>
				<ul>
					<li>Hit Enter</li>
					<li>You will see a line of code and a flashing cursor for a few minutes then you will see file paths added to the screen until the script is finished.</li>
				</ul>
			<li>When it is finished you will see a command prompt, close the window.</li>
		</ol>
	<li><u>Check data on AWS</u></li>
		<ol type = "a">
			<li>Log in to AWS at: https://nar.signin.aws.amazon.com/console</li>
			<li>Under the Amazon Web Services main page, under Storage and Content Delivery. Select the S3 option</li>
			<li>You should see a list of Buckets for CHaMP and AEM.</li>
			<li>Select either <strong>champdata</strong> or <strong>aemdata</strong></li>
			<li>Select the <strong>QA</strong> folder and you will see a list of years.</li>
			<li>The data from here is the same as your local storage (Year/Watershed/SiteID/VisitID/</li>
			<li>Once you in the visit id folder you will see the results folders.</li>
				<ol type = "i">
					<li>In the <strong>RBT</strong> folder the outputs from the RBT run should be present.</li>
						<ul>
							<li>Log.xml</li>
							<li>Results.xml</li>
							<li>rbt_input.xml</li>
						</ul>
					<li>In the <strong>Hydro\Results\Sxxxxx\</strong> folder the outputs from the HydroPrep run should be present.</li>
				</ol>
		</ol>
</ol>
