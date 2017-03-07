<h2>Prep Data for RBT, Inventory and Hydro Model runs</h2>
<ol type = "1">
	<li>Update CHaMP Workbench Database
		<ol type = "a">
			<li>Ensure that the Workbench has all the Visits which are uploaded to AWS. Get the latest version of the All Measurements database from champmonitoring.org or aemonitoring.org prior to running any visits through RBT. If you are running RBT outside of the survey season, you can update the db monthly.</li>
			<li>Go to champmonitoring.org or aemonitoring.org
				<ol type = "i">
					<li>Login</li>
					<li>Go to <strong>Data Exports</strong> tab</li>
					<li>Download the All Measurements db and save to the <u>D:\Measurements_db\</u> folder.</li>
					<li>Rename the db (example: CHaMP_All_Measurements_yyyymmdd.mdb)</li>
				</ol>
			<li>Create New Workbench database
				<ol type = "i">
					<li>Archive the previous CHaMP workbench database.</li>
					<li><strong>Menu:</strong> File</li>
					<li><strong>Tool:</strong> Create New Workbench Database in the <u>D:\Workbench\</u> folder </li>
					<li>Choose new name in the format below (v## stands for the version number of the database.
						<ul>
							<li>CHaMP_Workbench_OZ_yyyymmdd_v##.mdb</li>
							<li>CHaMP_Workbench_AL_yyyymmdd_v##.mdb</li>
							<li>AEM_Workbench_AL_yyyymmdd_v##.mdb</li>
						</ul>
					<li>Any new visits should be loaded now</li>
				</ol>
			<li>In the CHaMP Workbench
				<ol type = "i">
					<li><strong>Menu:</strong> Data</li>
					<li><strong>Tool:</strong> Import CHaMP Watershed, Site, and Visit Data from CHaMP Exports
						<ul>
							<li>Navigate to the current measurements database: <i>CHaMP_All_Measurements_yyyymmdd.mdb</i>.</li>
							<li>Uncheck all boxes.</li>
							<li>Click OK.</li>
						</ul>
				</ol>
		</ol>
</br>
<hr>
</br>
	<li>Refresh data from AWS
		<ol type = "a">
			<li>Sync Data</li>
				<ol type = "i">
					<li>Go to <strong>D:\Tools\AWS_Batch</strong> folder</li>
					<li>Double Click the file below depending on which computer you are on and which files you want to download.
						<ul>
							<li><i>DownloadVisits_Osprey.bat</i> - Downloads orthogonal survey gdb.</li>
							<li><i>DownloadVisits_CrewVersion_Osprey.bat</i> - Downloads original crew survey gdb.</li>
							<li><i>DownloadVisits_Albatross.bat</i> - Downloads orthogonal survey gdb.</li>
							<li><i>DownloadVisits_CrewVersion_Albatross.bat</i> - Downloads original crew survey gdb.</li>
							<li><i>DownloadVisits_AEM.bat</i> - Downloads orthogonal survey gdb.</li>
							<li><i>DownloadVisits_CrewVersion_AEM.bat</i> - Downloads original crew survey gdb.</li>
						</ul>
					<li>A command prompt window will open
						<ul>
							<li><strong>Press any key</strong>  to continue</li>
							<li>Visits will be synced.  Any data that has changed since previous sync will be updated in the <strong>\Processing\Incoming_Data\AWS_Visits\</strong> folder.</li>
							<li>This will take a few minutes.</li>
							<li>When it is finished it will have another <strong>Press any key</strong> message. So hit the <strong>Enter</strong> key.</li>
						</ul>
				</ol>
			<li>Archive previous versions of data.
				<ol type = "i">
					<li>Navigate to the the <strong>CHaMP\Processing\</strong> folder or the <strong>AEM\Processing\</strong> folder.</li>
					<li>Zip the <strong>InputOutputMetrics</strong> or <strong>InputOutputValidaton</strong> folder depending on what you have run.</li>
					<li>If you want to archive the previously downloaded <strong>Visit_Data</strong>, zip the folder.
						<ul>
							<li>These may take an hour.</li>
						</ul>
					<li>Add a date to the zipped file (InputOutput....yyyymmdd.zip).</li>
					<li>Delete the contents in the <strong>Visit_Data</strong>, <strong>InputOutputMetrics</strong>, <strong>InputOutputValidation</strong> and <strong>RBTTemp</strong> folders.</li>
					<li>Move the zipped data to the <strong>\CHaMP\Runs\</strong> or <strong>AEM\Runs\</strong> folder</li>
				</ol>
		</ol>
</br>
<hr>
</br>
	<li>Unzip updated data into new <strong>\Processing\Visit_Data\</strong> folder.
		<ol type = "a">
			<li>Open CHaMP Workbench</li>
			<li><strong>Menu:</strong> Data
				<ol type = "i">
					<li><strong>Tool:</strong> Choose Unpack Monitoring Data Zip Archives....</li>
						<ul>
							<li><strong>Folder Paths Tab:</strong>
								<ul>
									<li>Top Level Folder: <strong>\Incoming_Data\AWS_Visits\</strong></li>
									<li>Unpack to a different location</li>
									<li>Output: <strong>\Processing\Visit_Data\</strong></li>
								</ul>
							<li><strong>Topo Data Tab:</strong>
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
	<li>Go to the <strong>RBTMetrics</strong> or <strong>RBTValidation</strong> document.</li>
</ol>