<h2>Sync Data from AWS</h2>
<p>This process allows users to sync a select set of data from AWS to a local computer.</p> 
<ol type = "1">
	<li>Create the output folder (Example: D:/CHaMP/ChannelUnits/) where you want to output to go.</li>
	<li>Prep the visit data you wish to run.</li>
	<li>There is an Excel workbook to assist with formatting of the code: <u>Results_PullScript_AWS.xlsx</u>.</li>
		<ol type = "a">
			<li>Below are the components of the script and examples.</li>
				<ol type = "i">
					<li><strong>AWS Server:</strong> aws s3 sync</li>
					<li><strong>Folder where data is stored on AWS:</strong>  s3://champdata/QA/2011/Asotin/ASW00001-CC-F1P2BR/VISIT_213/Topo/GISLayers</li>
					<li><strong>Folder where data will be stored locally:</strong> "D:/CHaMP/ChannelUnits/2011/Asotin/ASW00001-CC-F1P2BR/VISIT_213/Topo/GISLayers"</li>
					<li><strong>Qualifiers:</strong> --exclude "*" --include "*Channel_Units.*"</li>
				</ol></br>
			<li>Copy the appropriate information to each column in the workbook and adjust as needed. To cut down on run time, we recommend processing one watershed at a time.</li>
			<li>The first 6 columns contain the data that refers to the location of the data.</li>
				<ol type = "i">
					<li>Column A: <strong>Visit_ID</strong></li>
					<li>Column B: <strong>Watershed</strong> </br> (There <strong>CANNOT</strong> be any spaces in the Watershed name (Example: Walla Walla must be WallaWalla)).</li>
					<li>Column C: <strong>SiteName</strong> </br> (There <strong>CANNOT</strong> be any spaces in the SiteName (Example: ASW00001-CC-F1 P2BR must be ASW00001-CC-F1P2BR)).</li>
					<li>Column D: <strong>VisitYear</strong></li>
					<li>Column E: <strong>Source</strong> </br>  (<u>champdata</u> or <u>aemdata</u>)</li>
					<li>Column F: <strong>OtherCode</strong> </br> (This example code excludes all data except where the name is Channel_Units.  <u>--exclude "*" --include "*Channel_Units.*"</u>)</li>
				</ol></br>
			<li>The seventh column is the concatenation of the other columns. Please note that some folders are hard coded into the formula because they are the same for each visit pulled (Topo/GISLayers).</li>
				<ol type = "i">
					<li><strong>Concatenation Formula:</strong> </br> =CONCATENATE("aws s3 sync s3://",E2,"/QA/",D2,"/",B2,"/",C2,"/VISIT_",A2,"/Topo/GISLayers ""D:/CHaMP/ChannelUnits/",D2,"/",B2,"/",C2,"/VISIT_",A2,"/Topo/GISLayers""",F2) </li>
				</ol>
			</br>
		</ol>
	<li>Copy the Concatenated code to a text file.</li>
	<li>Replace the .txt at the end of the file name to .bat.</li>
	<li>To run the script, Double Click on the .bat name</li>	
</ol>
