<h2>Run CHaMP Data Export Tool (aka Harold)</h2>

<p>This tool takes the expected feature classes from a CHaMP Survey Geodatabase and exports them to shapefiles. It also takes all expected rasters and exports them to tiff files. It will not include any feature classes or rasters which are copies and have a slightly different name than the original data.</p>

<ol type = "1">
	<li>We recommend that you process the data one year at a time.</li>
	<li>Copy the year folder you wish to run to a Visit_DataForHarold folder.</li>
	<li>In the Windows Start Menu.
		<ol type = "i">
			<li>Type: <strong>cmd</strong> to open a command window.</li>
			<li>Type or copy from another source the path to the tool. </br>
				(<strong>Example:</strong> python D:\Tools\CHaMP_Survey_Data_Export_Tool\BatchExport.py D:\CHaMP\Processing\Visit_DataForHarold D:\SurveyDataExportFiles\CHaMP D:\SurveyDataExportFiles\BatchLog.txt D:\VisitRunLists\DET_CHaMP_AL_yyyymmdd.csv)</li>
			<li>Parts of tool path (example):
				<ol type = "a">
					<li><strong>Tool path:</strong> python D:\Tools\CHaMP_Survey_Data_Export_Tool\BatchExport.py</li>
					<li><strong>Input Data folder:</strong> D:\CHaMP\Processing\Visit_Data\</li>
					<li><strong>Output folder:</strong> D:\SurveyDataExportFiles\CHaMP\</li>
					<li><strong>Batch Log file path:</strong> D:\SurveyDataExportFiles\BatchLog.txt</li>
					<li><strong>List of Visits to run:</strong> D:\VisitRunLists\DET_CHaMP_AL_yyyymmdd.csv</li>
				</ol></li>
			<li>Hit Enter</li>
		</ol></li>

	<li>The data will be located in the \year\watershed\site name\Visit_xxxx\Topo\GISLayers\ </li>

	<li>Load data to AWS
		<ol type = "i">
			<li>Double Click on the CHaMP_Upload_SurveyExport.bat file.</li>
			<li>The script will show a prompt when it is finished.</li>
		</ol></li>
</ol>
