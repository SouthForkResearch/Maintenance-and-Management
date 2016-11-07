<h2>Prep Data for RBT, Inventory and Hydro Model runs</h2>
<ol type = "1">
	<li>Update CHaMP Workbench Database</li>
		<ol type = "a">
			<li>Ensure that the Workbench has all the Visits which are uploaded to AWS. Get the latest version of the All Measurements database from champmonitoring.org or aemonitoring.org prior to running any visits through RBT.</li>
			<li>Go to champmonitoring.org or aemonitoring.org</li>
				<ol type = "i">
					<li>Login</li>
					<li>Go to <strong>Data Exports</strong> tab</li>
					<li>Download the All Measurements db</li>
					<li>Rename the db (example: CHaMP_All_Measurements_yyyymmdd.mdb)</li>
				</ol>
			<li>Create New Workbench database</li>
				<ol type = "i">
					<li>Archive the previous CHaMP workbench database.</li>
					<li><strong>Menu:</strong> File</li>
					<li><strong>Tool:</strong> Create New Workbench Database....</li>
					<li>Choose new name in the format below.</li>
						<ul>
							<li>CHaMP_Workbench_OZ_yyyymmdd_v##.mdb</li>
							<li>CHaMP_Workbench_AL_yyyymmdd_v##.mdb</li>
							<li>AEM_Workbench_AL_yyyymmdd_v##.mdb</li>
						</ul>
					<li>Any new visits should be loaded now</li>
				</ol>
			<li>In the CHaMP Workbench</li>
				<ol type = "i">
					<li><strong>Menu:</strong> Data</li>
					<li><strong>Tool:</strong> Import CHaMP Watershed, Site, and Visit Data from CHaMP Exports</li>
						<ul>
							<li>Choose new database: CHaMP_All_Measurements_yyyymmdd.mdb.</li>
							<li>Uncheck all boxes.</li>
							<li>Click OK.</li>
						</ul>
				</ol>
		</ol>
</br>
<hr>
</br>
	<li>Refresh data from AWS</li>
		<ol type = "a">
			<li>Sync Data</li>
				<ol type = "i">
					<li>Go to <strong>AWS_Batch</strong> folder</li>
					<li>Double Click the file below depending on which computer you are on:</li>
						<ul>
							<li>DownloadVisits_Osprey.bat</li>
							<li>DownloadVisits_Albatross.bat</li>
						</ul>
					<li>A command prompt window will open</li>
						<ul>
							<li>Press any key to continue</li>
							<li>Visits will be synced.  Any data that has changed since previous sync will be updated in the <strong>\Incoming_Data\AWS_Visits</strong> folder.</li>
							<li>This will take a few minutes.</li>
							<li>When it is finished it will have another <strong>Press any key</strong> message. So hit the <strong>Enter</strong> key.</li>
						</ul>
				</ol>
			<li>Archive previous versions of data.</li>
				<ol type = "i">
					<li>Zip the <strong>InputOutputMetrics</strong> or <strong>InputOutputValidaton</strong> folder depending on what you have run.</li>
					<li>Zip the Visit_Data folder.</li>
						<ul>
							<li>These may take an hour.</li>
						</ul>
					<li>Add a date to the zipped file (InputOutput....yyyymmdd.zip).</li>
					<li>Delete the contents in the <strong>Visit_Data</strong>, <strong>InputOutputMetrics</strong>, <strong>InputOutputValidation</strong> and <strong>RBTTemp</strong> folders.</li>
					<li>Move the zipped data to the <strong>\CHaMP\Runs\</strong> folder</li>
				</ol>
		</ol>
</br>
<hr>
</br>
	<li>Unzip updated data into new <strong>\Processing\Visit_Data</strong> folder.</li>
		<ol type = "a">
			
			<li>Open CHaMP Workbench</li>
			<li><strong>Menu:</strong> Data</li>
				<ol type = "i">
					<li><strong>Tool:</strong> Choose Unpack Monitoring Data Zip Archives....</li>
						<ul>
							<li><strong>Folder Paths Tab:</strong></li>
								<ul>
									<li>Top Level Folder: <strong>\Incoming_Data\AWS_Visits</strong></li>
									<li>Unpack to a different location</li>
									<li>Output: <strong>\Processing\Visit_Data</strong></li>
								</ul>
							<li><strong>Topo Data Tab:</strong></li>
								<ul>
									<li>Leave Defaults</li>
								</ul>
							<li><strong>Hydraulic Model Data Tab:</strong></li>
								<ul>
									<li>Uncheck both boxes</li>
								</ul>
							<li>Click OK</li>
						</ul>
					<li>This could take up to an hour.</li>
					<li>When process is complete the bottom left of the dialog box will say <strong>Process Complete</strong></li>
					<li>Close Dialog box</li>
				</ol>
		</ol>
	<li>Continue to the tools.</li>
</ol>