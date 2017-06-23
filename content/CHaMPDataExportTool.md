<h2>Run CHaMP Data Export Tool (aka Harold)</h2>

<p>This tool takes the expected feature classes from a CHaMP Survey Geodatabase and exports them to shapefiles. It also takes all expected rasters and exports them to tiff files. It will not include any feature classes or rasters which are copies and have a slightly different name than the original data.</p>

	Notes: 
	Process one year of data at a time.
	
	Steps:
	
	1. Copy the year folder to run to c:\Visit_DataForHarold folder.
	2. In the Windows Start Menu Type: <strong>cmd</strong> to open a command window.
	3. Type `python`, the path to the tool, the input data folder path and name, the output folder path and name, the batch log file path, and the list of visits to run (optional). For example 
	
	`python "C:\GIS\Tools\CHaMP_Survey_Data_Export_Tool\BatchExport.py" C:\CHaMP\Processing\Visit_DataForHarold C:\SurveyDataExportFiles\CHaMP C:\SurveyDataExportFiles\BatchLog.txt C:\VisitRunLists\DET_CHaMP_AL_yyyymmdd.csv)'
	
	Where:	Tool path: C:\Tools\CHaMP_Survey_Data_Export_Tool\BatchExport.py</li>
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
