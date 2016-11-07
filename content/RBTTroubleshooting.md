<h2>RBT Troubleshooting</h2>
	<ol type = "1">
		<li>Not all Visits load to created RBT File</li>
			<ol type = "a">
				<li>Visit has an issue that prevents it to load</li>
					<ol type = "i">
						<li>Run visit through CHaMP toolbar to see where the error is.</li>
						<li>Repair the visit according to the <strong>CHaMP_Repair_Process_yyyy_Visits</strong> document and retry</li>
					</ol>
				<li>Visit is not in the All_Measurements database</li>
					<ol type = "i">
						<li>Download a new database from CHaMP monitoring or AEM monitoring</li>
					</ol>
				<li>Visits are not stored in the correct folder structure.</li>
					<ol type = "i">
						<li>The path should be: CHaMP\Processing\Visit_Data\yyyy\watershed\site name\Visit_####\Topo\</li>
					</ol>
			</ol>
</br>
		<li>In Workbench Log table, visit did not process correctly.</li>
			<ol type = "a">
				<li>Check the Log.xml file for the visit</li>
				<li>If it was a software issue, like an ESRI license problem. Rerun the visit.</li>
				<li>When loading data to AWS, if when you click on the Upload_RBTMetrics.bat file and the cmd window opens then closes right away. Check you file path and correct if necessary.</li>
			</ol>
	</ol>
