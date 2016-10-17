

<h1>How to Run RBT and Associated tools Locally using Data from AWS</h1>

<h2>General Notes</h2>
<ol>
	<li>If you are running a lot of visits via Batch runs, make sure you set your computer HD to not sleep.</li>
	<li>RBT creates one folder in the RBTTempFolder for every visit run.</li>
	<li>Estimating time to completion:</li>
		<ul>
			<li>Running a visit can take anywhere between 3 and 90 minutes depending on how complicated the visit is</li>
		</ul>
	<li>When you are finished running a set of data, you should delete all files in the RBT Temp Folder as these files can take a lot of space in you HD up to 1.5 GB per folder.</li>
	<li>You need to ensure you have enough space on your HD to run the visits you are planning.</li>
	<li>Windows Updates will also halt progress.</li>
	<li>You cannot access the Workbench.mdb while RBT is running.</li>
	<li>Running visits with GCD and metrics calculations increases the time it takes to complete.</li>
	<li>In order for a visit to be available on AWS is must pass the RBT Orthogonal engine on champmonitoring.org.</li>
</ol>

<hr>

<h2>Prep Data</h2>
<ol type = "A">
	<li style="font-size:125%">Update CHaMP Workbench Database</li>
		<ol type = "1">
			<li>If you running this during the season and want to process visits for the current year, you need to ensure that the Workbench has all the Visits which are uploaded to AWS.</li>
			<li>Go to champmonitoring.org or aemmonitoring.org</li>
				<ol type = "a">
					<li>Login</li>
					<li>Go to Data Exports tab</li>
					<li>Download the All Measurements db</li>
					<li>Rename the db like CHaMP_All_Measurements_yyyymmdd.mdb</li>
				</ol>
			<li>In the CHaMP Workbench</li>
				<ol type = "a">
					<li>Menu: Data</li>
					<li>Tool: Import CHaMP Watershed....</li>
						<ul>
							<li>Choose new database</li>
							<li>Uncheck all boxes</li>
							<li>Click OK</li>
						</ul>
				</ol>
			<li>Create New Workbench database</li>
				<ol type = "a">
					<li>Menu: File</li>
					<li>Tool: Create New Workbench Database....</li>
					<li>Choose new name in the format below</li>
						<ul>
							<li>CHaMP_Workbench_OZ_yyyymmdd_v##.mdb</li>
							<li>AEM_Workbench_AL_yyyymmdd_v##.mdb</li>
						</ul>
					<li>Any new visits should be loaded now</li>
				</ol>
		</ol>
</br>
<hr>
</br>
	<li style="font-size:125%">Refresh data from AWS</li>
		<ol type = "1">
			<li>Sync Data</li>
				<ol type = "a">
					<li>Go to AWS_Batch folder</li>
					<li>Double Click:</li>
						<ul>
							<li>DownloadVisits_Osprey.bat or</li>
							<li>DownloadVisits_Albatross.bat depending on computer</li>
						</ul>
					<li>A command prompt window will open</li>
						<ul>
							<li>Press any key to continue</li>
							<li>Visits will be synced.  Any data that has changed since previous sync will be updated in the \Incoming_Data\AWS_Visits folder.</li>
							<li>This will take a few minutes.</li>
							<li>When it is finished it will have another Press any key message. So hit the Enter key.</li>
						</ul>
				</ol>
			<li>Archive previous versions of data.</li>
				<ol type = "a">
					<li>Zip the InputOutputMetrics or InputOutputValidaton folder. This may take an hour.</li>
						<ul>
							<li>Once per month zip the entire Processing folder.</li>
							<li>Add a date (Processing_yyyymmdd.zip).</li>
							<li>Delete the unzipped Processing folder.</li>
						</ul>
					<li>Add a date (InputOutput....yyymmdd.zip).</li>
					<li>Delete the unzipped Data in the VisitData and InputOutputMetrics or InputOutputValidation folder.</li>
					<li>Move the zipped data to the \CHaMP\Runs\ folder</li>
				</ol>
			<li>Create new folders on local machine for new data if needed</li>
				<ol type = "a">
					<li>Folder: \Processing\Visit_Data</li>
					<li>Folder: \Processing\InputOutputValidation</li>
					<li>Folder: \Processing\InputOutputMetrics</li>
					<li>Folder: \Processing\HydroPrep</li>
				</ol>
		</ol>
</br>
<hr>
</br>
	<li style="font-size:125%">Unzip updated data into new \Processing\Visit_Data folder.</li>
		<ol type = "1">
			<li>Archive the previous CHaMP workbench databases.</li>			
			<li>Open CHaMP Workbench</li>
			<li>Create a new Workbench database.</li>
				<ol type = "a">
					<li>Workbench_OZ_yyyymmdd.mdb</li>
					<li>Workbench_AL_yyyymmdd.mdb</li>
				</ol>
			<li>Menu: Data</li>
				<ol type = "a">
					<li>Tool: Choose Unpack Monitoring Data Zip Archives....</li>
						<ol type = "i">
							<li>Folder Paths Tab:</li>
								<ul>
									<li>Top Level Folder: \Incoming_Data\AWS_Visits</li>
									<li>Unpack to a different location</li>
									<li>Output: \Processing\Visit_Data</li>
								</ul>
							<li>Topo Data Tab:</li>
								<ul>
									<li>Leave Defaults</li>
								</ul>
							<li>Hydraulic Model Data Tab:</li>
								<ul>
									<li>Uncheck both boxes</li>
								</ul>
							<li>Click OK</li>
						</ol>
					<li>This could take up to an hour.</li>
					<li>When process is complete the bottom left of the dialog box will say “Process Complete”</li>
					<li>Close Dialog box</li>
				</ol>
		</ol>
</br>
<hr>
</br>
	<li style="font-size:125%">Run Inventory Tool</li>
		<ol type = "1">
			<li>This tool is located in the \Tools\DataInventoryTool folder.</li>
			<li>In the Windows Start Menu</li>
			<li>Type: cmd to open a command window.</li>
				<ul>
					<li>In command prompt window.</li>
					<li>Type:  python D:\Tools\DataInventoryTool\Batch.py D:\CHaMP\Processing\Visit_Data\ D:\InventoryResults\Inventory_OZ_yyyymmdd.csv</li>
					<li>Python Script to Run Source folder  Output Folder\*yyyymmdd.csv</li>
					<li>Hit Enter</li>
				</ul>
			<li>This can take a few hours</li>
		</ol>
</ol>
</br>
<hr>
</br>

<h2>Run RBT</h2>
<ol type = "A">
	<li style="font-size:125%">Compile list of Visits to Run</li>
		<ol type = "1">
			<li>Prep list of visits to run</li>
				<ol type = "a">
					<li>You can run by year and\or watershed for all visits</li>
					<li>Or you can prepare a .csv file for a specific set of data.</li>
				</ol>
			<li>If you only need to run a subset of visits follow one of the two procedures below to get a list of visits, otherwise select all visits and run RBT.</li>
				<ol type = "a">			
					<li>Download either the Metric_Engine_Status.mdb from Data Exports</li>
					<li>Go to the Reports menu option, Select Metric Engine Status, then RBT Orthogonal tab. On the upper right of that page select download data.</li>
				</ol>
			<li>Compile List from Metric_Engine_Status.mdb.</li>
				<ol type = "a">
					<li>In the Metric_Engine_Status.mdb, open the VisitEngines table.</li>
					<li>Under RBT_Status field, Select Completed Successfully</li>
					<li>Sort RBT_LastRequested field in Descending order and Select the VisitIDs from the date of the last run.</li>
					<li>Copy the list of Visit Ids to a text editor.</li>
					<li>Add a comma after each number except for the last one.</li>
					<li>Save the file as a *.csv.</li>
				</ol>
			<li>Compile List from Metric Engine Status Report.</li>
				<ol type = "a">
					<li>Open the downloaded METRICSSTATUS_yyyy_ORTHOGONAL.csv file.</li>
					<li>Set a filter on the top row.</li>
					<li>Select Completed Successfully under the Status field.</li>
					<li>Sort LastRequested field in Descending order and Select the VisitIDs from the date of the last run.</li>
					<li>Copy the list of Visit Ids to a text editor.</li>
					<li>Add a comma after each number except for the last one.</li>
					<li>Save the file as a *.csv.</li>
				</ol>					
		</ol>
	<li style="font-size:125%">Run RBT Validation</li>
		<ol type = "1">
			<li>The data output folder is: \Processing\InputOutputValidation\</li>
			<li>Clean out RBT_Temp folder</li>
			<li>Menu: Tools</li>
				<ol type = "a">
					<li>Tool: Build the input files</li>
						<ol type = "i">
							<li>Add Validation to Batch Name</li>
						</ol>
					<li>Site and Visit Tab: Uncheck GCD</li>
					<li>Under RBT Config tab</li>
						<ol type = "i">
							<li>RBT Mode: Validate Data</li>
						</ol>
					<li>Change Detection tab</li>
						<ol type = "i">
							<li>Uncheck all</li>
						</ol>
					<li>Click OK</li>
				</ol>
			<li>May take several minutes</li>
			<li>Select input files</li>
			<li>Run input files</li>
		</ol>
</br>
<hr>
</br>
	<li style="font-size:125%">Run RBT Metrics</li>
		<ol type = "1">
			<li>Input output folder: \Processing\InputOutputMetrics\</li>
			<li>Clean out RBT_Temp folder</li>
			<li>Menu: Tools</li>
				<ol type = "a">
					<li>Tool: Build the input files</li>
						<ol type = "i">
							<li>Add Metrics to Batch Name</li>
						</ol>
					<li>Site and Visit Tab: Check GCD</li>
					<li>Under RBT Config tab</li>
						<ol type = "i">
							<li>RBT Mode: Calculate Metrics</li>
						</ol>
					<li>Change Detection tab</li>
						<ol type = "i">
							<li>Check all</li>
						</ol>
					<li>Click OK</li>
				</ol>
			<li>May take several minutes</li>
			<li>Select input files</li>
			<li>Run input files</li>
		</ol>
</ol>
</br>
<hr>
</br>
<h2>Harold</h2>

</br>
<hr>
</br>
<h2>HydroPrep</h2>
<ol type = "A">
	<li style="font-size:125%">Create folder: \HydroPrep\InputOutputHydroPrep\</li>
</br>
	<li style="font-size:125%">Select record you wish to run HydroPrep on in the CHaMP Workbench window.</li>
</br>
	<li style="font-size:125%">Menu: Tools</li>
		<ol type = "1">
			<li>Tool: Delft 3D</li>
			<li>Menu: Hydraulic Model Preparation</li>
			<li>Build Input File</li>
				<ol type = "a">
					<li>Batch Name: Update the Batch Name with Hydro</li>
					<li>Parent Folder: \Processing\Visit_Data\</li>
					<li>Output Folder: \Processing\InputOutputHydroPrep\</li>
					<li>Temp Folder: \RBT_Temp\</li>
					<li>Click OK</li>
				</ol>
			<li>When the tool finishes move onto Step 4.</li>
		</ol>
</br>
	<li style="font-size:125%">Menu: Tools</li>
		<ol type = "1">
			<li>Tool: Delft 3D</li>
			<li>Menu: Hydraulic Model Preparation</li>
			<li>Select Batches to Run</li>
				<ol type = "a">
					<li>Check the box for the run you wish to process</li>
				</ol>
			<li>When the tool finishes move onto Step 5.</li>
		</ol>
</br>
	<li style="font-size:125%">Menu: Tools</li>
		<ol type = "1">
			<li>Tool: Delft 3D</li>
			<li>Menu: Hydraulic Model Preparation</li>
			<li>Tool:Run Selected Batches</li>
				<ol type = "a">
					<li>Make sure the Hydro prep path points to the tool</li>
					<li>Change Window Style to “Normal” if you want to follow the progress of the tool.</li>
					<li>Click OK</li>
				</ol>
			<li>Sync data to AWS.</li>
		</ol>
</ol>
</br>
<hr>
</br>

<h2>Sync Data to AWS</h2>
<ol type = "A">
	<li style="font-size:125%">Update Output file name structure to match AWS</li>
		<ol type = "a">
			<li>Open a CMD window</li>
			<li>At the prompt type: python D:\Tools\RenameRBTMetricsResults.py D:\CHaMP\Processing\InputOutputMetrics\</li>
			<li>Hit Enter</li>
			<li>The script will show a prompt when it is complete</li>
		</ol>
</br>
	<li style="font-size:125%">Upload data to AWS</li>
		<ol type = "a">
			<li>In the AWS_Batch folder</li>
			<li>Double click on Upload_RBTMetrics.bat</li>
			<li>A cmd window will open</li>
			<li>Hit Enter</li>
			<li>You will see a line of code and a flashing cursor for a few minutes then you will see file paths added to the screen until the script is done</li>
			<li>When it is finished, close the window.</li>
		</ol>


</br>
	<li style="font-size:125%">Check AWS for uploaded data</li>
		<ol type = "a">
			<li>Log in to AWS at: https://nar.signin.aws.amazon.com/console</li>
			<li>Under the Amazon Web Services main page, under Storage and Content Delivery. Select the S3 option</li>
			<li>You should see a list of Buckets for CHaMP and AEM.</li>
			<li>Select either champdata or aemdata.</li>
			<li>Select the QA folder and you will see a list of years.</li>
			<li>The data from here is the same as your local storage (Year/Watershed/SiteID/VisitID/)</li>
			<li>Once you in the visit id folder you will see 2 folders, Hydro and RBT.</li>
			<li>h.	In the RBT folder the outputs from the rBT run should be present.</li>
		</ol>
</ol>
</br>
<hr>
</br>
		
<h2>Troubleshooting</h2>
<ol type = "A">
	<li style="font-size:125%">Not all Visits load to created RBT File</li>
		<ol type = "1">
			<li>Visit has an issue that prevents it to load</li>
				<ol type = "a">
					<li>Run visit through CHaMP toolbar to see where the error is.</li>
					<li>Repair and retry</li>
				</ol>
			<li>Visit is not in the All_Measurements database</li>
				<ol type = "a">
					<li>Download a new database from CHaMP monitoring or AEM monitoring</li>
				</ol>
		</ol>
</br>
	<li style="font-size:125%">In Workbench Log table, visit did not process correctly.</li>
		<ol type = "1">
			<li>Check the Log.xml file for the visit</li>
			<li>If it was a software issue, like an ESRI license problem. Rerun the visit.</li>
			<li>When loading data to AWS, if when you click on the Upload_RBTMetrics.bat file and the cmd window opens then closes right away. Check you file path</li>
		</ol>
</ol>
