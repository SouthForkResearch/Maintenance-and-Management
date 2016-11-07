<h2>Run RBT Metrics</h2>
<ol type = "1">
	<li><u>Prep Visit list</u> to run</li>
		<ol type = "a">
			<li>You can run a single visit using one of the ways below.</li>
				<ul>
					<li>Type a Visit ID number in the Visit ID box.</li>
					<li>Select a visit in the Workbench window.</li>
				</ul>
			<li>You can run by year and/or watershed for all visits.</li>
				<ul>
					<li>Select a year in the Field Season box to show all visits for that year in Workbench list.</li>
					<li>Select a watershed in the Watersheds box to show all visits for that watershed in the Workbench list.</li>
					<li>Select the first visit in the Workbench window, Hold the Shift key and Click the last visit in the Workbench window.</li>
				</ul>
			<li>You can run specific set of data from a csv file.</li>
				<ul>
					<li>Prep a csv visit list by using a text editor and type a list of comma separated visit numbers.</li>
					<li><strong>Edit</strong> menu</li>
					<li><strong>Tool:</strong> Filter Visits from CSV file.</li>
					<li>A dialog box will open, Select the csv file list.</li>
					<li>The CHaMP Workbench will have a smaller selection of visits.</li>
					<li>Select the first visit in the Workbench window, Hold the Shift key and Click the last visit in the Workbench window.</li>
				</ul>
		</ol>
	<li><u>Set the Options</u> for the running the tool.</li>
		<ol type = "a">
			<li><strong>Menu:</strong> Tools</li>
			<li><strong>Tool:</strong> Options</li>
			<li>A dialog box will open</li>
				<ul>
					<li>On the <strong>Folders</strong> tab:</li>
					<li><strong>Monitoring data:</strong> D:\CHaMP\Processing\Visit_Data</li>
					<li><strong>Input output folder:</strong> D:\CHaMP\Processing\InputOutputMetrics</li>
					<li><strong>Temp workspace:</strong> D:\CHaMP\Processing\RBT_Temp</li>
				</ul>
		</ol>
	<li><u>Set up the Run:</u></li>
		<ol type = "a">
			<li><strong>Menu:</strong> Tools</li>
			<li><strong>RBT:</strong> Build the input files</li>
				<ol type = "i">
					<li>Add Validation to Batch Name</li>
					<li>Check the Parent folder and Output folder to make sure they are pointing to the correct locations.</li>
					<li><strong>Site and Visit Tab:</strong> Check <strong>Perform change detection when in metrics calculation mode</strong>.</li>
					<li>Under <strong>RBT Config</strong> tab, Set the RBT Configuration parameter.</li>
						<ol type = "i">
							<li><strong>RBT Mode:</strong> Calculate Metrics</li>
						</ol>
					<li><strong>Change Detection</strong> tab</li>
						<ol type = "i">
							<li>Check all</li>
						</ol>
					<li>Click OK</li>
				</ol>
			<li>May take several minutes</li>
			<li>When the tool is finished a dialog box will open.</li>
			<li>If any visits from your list fail, they will appear in the dialog box.</li>
		</ol>
	<li><u>Run RBT:</u></li> 
		<ol type = "a">
			<li><strong>Menu:</strong> Tools</li>
				<ol type = "i">
					<li><strong>RBT:</strong> Select Batches to Run....</li>
						<ul>
							<li>A dialog box will open.</li>
							<li>Select the Batch you want to run.</li>
							<li>Click OK.</li>
						</ul>
				</ol>
			<li><strong>Menu:</strong> Tools</li>
				<ol type = "a">
					<li><strong>RBT:</strong> Run Selected Batches....</li>
						<ol type = "i">
							<li>A dialog box will open.</li>
							<li>Check Metrics results.</li>
							<li><strong>Window style:</strong> Normal.</li>
						</ol>
				</ol>
			<li>Command windows will open for each visit run, then close when the tool is complete.</li>
			<li>When the tool is done, the command windows will stop opening.</li>
		</ol>
	<li><u>Review Results</u>
		<ol type = "a">
			<li>Open the Workbench database</li>
			<li>Open the <strong>LogFiles</strong> table.</li>
				<ol type = "i">
					<li>The Status field will contain one of the following.</li>
						<ul>
							<li><strong>Success</strong> The visit has passed metrics successfully.</li>
							<li><strong>Validation Fail</strong> The visit failed metrics.</li>
							<li><strong>Code Fail</strong> The visit failed for a non-metrics reason. This could be a program failure or a new issue with the visit data.</li>
						</ul>
					<li>Create a list of the visits which were successful. These visits can be run through RBT Metrics.</li>
					<li>Create a list of visits which failed metrics and their LogIDs.</li>
					<li>Create a list of visits which failed for non-metrics reasons and their LogIDs</li>
					<li>For the errors open the LogMessages table.</li>		
				</ol>	
			<li>Open the <strong>LogMessages</strong> table.</li>
				<ol type = "i">
					<li>This table will have the reasons for the failures in the <strong>LogMessage</strong> field.</li>
					<li>The <strong>LogSeverity</strong> field contains:</li>
						<ul>
							<li><strong>info</strong> General information about the run.</li>
							<li><strong>error</strong> Gives a message about what feature class or raster caused the failure.</li>
							<li><strong>warning</strong> Gives a message about which feature classes or rasters have non-failure issues.</li>
						</ul>
				</ol>
			<li>Errors need to be repaired and RBT Metrics re-run before loading the results to AWS.</li>
		</ol>
</ol>