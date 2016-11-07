<h2>Run Inventory Tool</h2>
<ol type = "1">
	<li>This tool is located in the <strong>\Tools\DataInventoryTool\</strong> folder.</li>
	<li>In the Windows Start Menu.</li>
	<li>Type: <strong>cmd</strong> to open a command window.</li>
		<ol type = "a">
			<li>In command prompt window.</li>
			<li>Type the path to the tool. (example: python D:\Tools\DataInventoryTool\Batch.py D:\CHaMP\Processing\Visit_Data\ D:\InventoryResults\Inventory_OZ_yyyymmdd.csv)</li>
				<ul>
					<li>Parts of tool path (example):
					<li>Tool path: python D:\Tools\DataInventoryTool\Batch.py </li>
					<li>Input data path: D:\CHaMP\Processing\Visit_Data\</li>
					<li>Output csv file path: D:\InventoryResults\Inventory_OZ_yyyymmdd.csv</li>
				</ul>
			<li>Click Enter</li>
			<li>This can take a few hours</li>
		</ol>
	<li>Once the tool is finished follow the steps below to.</li>
		<ol type = "a">
			<li>Open the <strong>csv</strong> file in Excel.</li>
			<li>If the cell value is <strong>TRUE</strong> the feature class or raster is present.</li>
			<li>If the cell value is <strong>FALSE</strong> the feature class or raster is NOT present.</li>
			<li>In the <strong>Home</strong> menu.</li>
				<ul>
					<li>Choose the <strong>Conditional Formatting</strong> tool.</li>
					<li>Choose <strong>New Rule</strong>.</li>
					<li>Choose <strong>Format only cells that contain</strong>.</li>
					<li>Cell Value equal to FALSE.</li>
					<li>Format: Fill: Pick a color</li>
				</ul>
		</ol>
	<li>Completeness Level Designation</li>
		<ol type = "a">
			<li><strong>Complete v1</strong></li>
				<ul>
					<li>All rasters and feature classes are present.</li>
					<li>Run through RBT Validation.</li> 
				</ul>
			<li><strong>Complete v2</strong></li>
				<ul>
					<li>Missing the Survey Evaluation rasters.</li>
					<li>Missing the Water_Depth raster.</li> 
					<li>Repair to Complete v1.</li>
				</ul>
			<li><strong>Complete v3</strong></li>
				<ul>
					<li>Missing both required feature classes and rasters.</li> 
					<li>Repair to Complete v1.</li>
				</ul>
		</ol>
</ol>

