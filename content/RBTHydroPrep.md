<h2>HydroPrep</h2>
<ol type = "1">
	<li>Create folder: \HydroPrep\InputOutputHydroPrep\</li>

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
		<ol type = "1">
			<li><strong>Menu:</strong> Tools</li>
			<li><strong>Tool:</strong> Delft 3D</li>
			<li><strong>Menu:</strong> Hydraulic Model Preparation</li>
			<li>Build Input File</li>
				<ol type = "a">
					<li><strong>Batch Name:</strong> Update the Batch Name with Hydro</li>
					<li><strong>Parent Folder:</strong> \Processing\Visit_Data</li>
					<li><strong>Output Folder:</strong> \Processing\InputOutputHydroPrep</li>
					<li><strong>Temp Folder:</strong> \RBT_Temp</li>
					<li>Click OK</li>
				</ol>
			<li>When the tool finishes move onto Step 4.</li>
		</ol>

	<li><u>Set up the Run:</u></li>
		<ol type = "1">
			<li><strong>Menu:</strong> Tools</li>
			<li><strong>Tool:</strong> Delft 3D</li>
			<li><strong>Menu:</strong> Hydraulic Model Preparation</li>
			<li>Select Batch to Run</li>
				<ol type = "a">
					<li>Check the box for the run you wish to process</li>
				</ol>
			<li>When the tool finishes move onto Step 5.</li>
		</ol>

	<li><u>Menu:</u>  Tools</li>
		<ol type = "1">
			<li><strong>Tool:</strong> Delft 3D</li>
			<li><strong>Menu:</strong> Hydraulic Model Preparation</li>
			<li><strong>Tool:</strong> Run Selected Batches</li>
				<ol type = "a">
					<li>Make sure the Hydro prep path points to the tool</li>
					<li>Change Window Style to <strong>Normal</strong> if you want to follow the progress of the tool.</li>
					<li>Click OK</li>
				</ol>
		</ol>
	<li>Sync data to AWS.</li>
</ol>