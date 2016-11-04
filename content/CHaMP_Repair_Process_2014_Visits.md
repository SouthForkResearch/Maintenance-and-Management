<h2>CHaMP 2014 Visit Repair Process for Required Updates</h2>
<p>Date: November 4, 2016</br>
Toolbar version: 6.0.19.0.</br>
Created by: Jean M. Olson, South Fork Research, Inc.</p>


<h3>Introduction</h3>

<p>As the CHaMP project grows, updates to the data requirements necessitate changes to the tools. Previous surveys need to be brought up to current standards in order to facilitate metrics generation and continued use. The repairs listed below are for the 2014 surveys and will bring the survey up to the standards of the 2016 CHaMP toolbar version 6.0.19.0 and RBT Engine version 5.0.18.0. The repair process below is ordered to facilitate ease and lessen the chance of encountering errors. Please make sure you have the latest version of the CHaMP toolbar. Also, you should create a ReadME Text document listing the repairs you performed for each survey. Please note that these instructions assume a familiarity with ArcGIS and it's included Toolboxes.</p>

<h3>Getting CHaMP data to Repair</h3>

<h4>Survey Data</h4>
<ul>
	<li>Login to www.champmonitoring.org.</li>
	<li>Choose the watershed where your visit occurs from the Watershed dropdown menu.</li>
	<li>Once the page has fully loaded, Click on the <strong>Field Support</strong> tab, then the <strong>Data Check In</strong> tab.</li>
	<li>Type the visit id number in the <strong>Visit ID</strong> field and hit Enter.</li>
	<li>On the left side of the record you will see a <strong>Blue Cloud with a Down Arrow</strong>. Double Click on the cloud.</li>
	<li>In the dialog box that opens, use the drop down menu; Select <strong>Topographic Data</strong>.</li>
	<li>Click on the <Strong>Blue Box with the White Arrow</strong> on the right side of the dialog box for the following:</li>
		<ul>
			<li>TIN</li>
			<li>Wetted-Surface TIN</li>
			<li>Survey Geodatabase (corrected) if present otherwise Survey Geodatabase (notcorrected)</li>
		</ul>
	<li>Another dialog box will open, Save each file. They will go to your Downloads folder.</li>
</ul>

<h4>Channel Unit CSV</h4>
<ul>
	<li>Open the CHaMP Workbench.</li>
	<li>Choose the <strong>Tools</strong> menu, then <strong>Options</strong>.</li>
	<li>Select the <strong>Folders</strong> tab and make sure the parameters are set to something similar to the following folders:</li>
		<ul>
			<li>Monitoring data: C:\CHaMP\MonitoringData</li>
			<li>Input output folder: C:\CHaMP\InputOutputFiles</li>
			<li>Temp workspace: C:\CHaMP\RBTTempFolder</li>
		</ul>
	<li>Click OK to return to the main dialog box.</li>
	<li>Type the Visit ID number in the <strong>Visit ID</strong> box and hit Enter.</li>
	<li>Right Click on the selected visit and Choose the menu option, <strong>Generate Channel Unit CSV file</strong>.</li>
	<li>The file will be created in <strong>MonitoringData</strong> folder in the following folder structure:</li>
		<ul>
			<li>Year</li>
			<li>Watershed</li>
			<li>Site ID</li>
			<li>Visit_xxxx</li>
			<li>Topo</li>
		</ul>
	<li>In your <strong>Downloads</strong> folder, you will unzip the file you downloaded from champmonitoring.org and move them into the Topo folder for your visit.</li>
</ul>
			
<hr>	

<h3>Open the Survey in Workflow Manager</h3>	

<p>Open the visit in the Workflow Manager to start the repair process and run the Validate Data tool.</p>


<h4>WaterExtent/Bankfull Updates</h4>
<ul>
	<li>If the WaterExtent and Bankfull feature classes are present, follow the steps below. Otherwise, create them as you process the visit through the toolbar.</li>
	<li>Check both feature classes to make sure they are NOT multi-part features and explode them if necessary.</li>
	<li>If after exploding, you get very small polygons outside the primary polygon. These may be artifacts of the survey point density and are not real. Based on your review of the DEM, you can remove them.</li>
	<li>Check Attribute Table for the ExtentType field.</li>
		<ul>
			<li>Add field: ExtentType (Text, 10) to existing feature classes.</li>
			<li>Add value Channel to the field for the primary channel. Leave any other records blank.</li>
		</ul>
	<li>Edit the Bankfull feature so the WaterExtent is fully inside it.</li>
		<ul>
			<li>Note: Surveys initially processed using CHaMP Toolbar version 6.0.19.0 or newer will not have this issue.</li>
			<li>Once WaterExtent is fully within Bankfull, the error message will disappear from the Validate Data window.</li>
		</ul>
	<li>Remove any tiny triangles in both features using the Editor. These tiny donuts are not real and are usually less than 10 cm across.</li>
	<li>If either the WaterExtent or Bankfull feature classes are disconnected or do not extend the length of the DEM. Please stop editing and contact CHaMP GIS Support staff.</li>
</ul>

<h4>Centerline/BankfullCL</h4>
<ul>
	<li>Start Editing lines.</li>
	<li>Straighten top and bottom end of each line by removing vertices so Cross Sections in these areas be appropriate.</li>
	<li>Stop editing and save.</li>
</ul>

<h4>Channel_Units</h4>
<ul>
	<li>Channel Unit polygons should not overlap or have small gaps.</li>
	<li>Channel Unit polygons should start and stop based on the Channel Unit Markers.</li>
	<li>You will see a warning in the Validation window if overlapping occurs. The warning denotes which channel unit polygons overlap by number.</li>
	<li>The other 2 issues must be checked visually.</li>
	<li>Start Editing and repair.</li>
</ul>

<h4>WIslands/BIslands</h4>
<ul>
	<li>Open Attribute Table.</li>
	<li>Add fields: Qualifying (Numeric, Short) and IsValid (Numeric, Short) if they do not exist.</li>
</ul>

<hr>

<h3>Repairs based on Errors in the Validate Data window or Missing feature classes or rasters</h3>

<p>Please note that once you start creating missing feature classes and rasters, you will need to be vigilant about cleaning out your temporary workspace regularly using the Clean Temporary Workspace tool under the Advanced menu in the CHaMP toolbar. Otherwise, some the tools may crash ArcMap. Also, you should be continuously running the Validate Data tool to check for new errors or warnings which need to be addressed.</p>

<h4>DEM and Detrended DEM</h4>
<ul>
	<li>Recreate the DEM if one of the following is true.</li>
		<ul>
			<li>One or more bankfull or top of bank points do not exist on the DEM raster. This is a Warning only and may not be fully corrected by re-running the tool. If this message does not disappear once the DEM has been recreated, then move on.</li>
			<li>One or more EdgeOfWater_Points which do not reside on the DEM data extent. This is an Error and must be corrected.</li>
				<ul>
					<li>If this message does not disappear once the DEM has been recreated you have 2 options.</li>
					<li>If the offending point(s) is less than 20 cm from the DEM, move it onto the DEM. You will also need to move any corresponding Breaklines.</li>
					<li>If the offending point(s) is more than 20 cm from the DEM, copy it to a new feature class called EdgeofWater_Points_remove. Then delete the points from the original EdgeofWater_points feature class.</li>
					<li>If you have moved any Breakline vertices, Run the Update Z Values for Breakline Vertices tool.</li>
				</ul
			<li>There is an DEM raster error in the Validate Data window.</li>
				<ul>
					<li>The raster is required to be divisible with corner coordinates on whole meters and is not. (Note, this sometimes occurs when you recreate the DEM, if that is the case, re-run the tool again and it should clear up.)</li>
					<li>The raster is not orthogonal.</li>
				</ul>
		</ul>
	<li>If you recreated the DEM, you must recreate the Detrended DEM and the Stream Surface rasters.</li>
	<li>If the newly created DEM or Detrended DEM does not align with the rest of the data, stop repair immediately and contact CHaMP GIS Support staff. This is rare, however, it occassionally happens.</li>
</ul>

<h4>Thalweg</h4>
<ul>
	<li>Create if missing from geodatabase.</li>
	<li>Repair as needed based on the Validate Data window error message.</li>
	<li>Check the Thalweg in and out points to make sure they fall on the DEM and Water_Depth rasters.</li>
	<li>The red vertex (point) on the Thalweg line should be on the <strong>in</strong> point. If this is not the case, contact GIS Support staff.</li>
	<li>The Thalweg cannot pass outside the WaterExtent or off the WSEDEM.</li>
</ul>

<h4>Breaklines</h4>
<ul>
	<li>If you have moved any Topo or Edge of Water points, you may need to move the ends of any Breaklines which
		fall on those points.</li>
	<li>Make sure Breakline vertices fell on original points. If they did, move the line until it snaps to the relocated point.</li>
	<li>Make sure hard Breaklines do not cross.  If they do, either edit out a section or move the line and point. If Breaklines have crossed, you will need to remove any vertices created by ArcMap where the cross occurred.</li>
	<li>Run the Update Z Values for Breakline Vertices tool if you edit any Breaklines.</li>
</ul>

<h4>WaterExtent</h4>
<ul>
	<li>Create if missing from geodatabase.</li>
</ul>

<h4>WIslands</h4>
<ul>
	<li>Create if missing from geodatabase.</li>
</ul>

<h4>Centerline</h4>
<ul>
	<li>Create if missing from geodatabase.</li>
	<li>Straighten ends of newly created lines by removing vertices so Cross Sections in these areas are appropriate.</li>
</ul>

<h4>WettedXS</h4>
<ul>
	<li>Create if missing from geodatabase.</li>
	<li>Review cross sections for ones that are not valid but should be.</li>
		<ul>
			<li>Cross sections at the top and bottom should be perpendicular to the WaterExtent polygon.</li>
			<li>Cross sections should span the whole channel. If a cross section spans less than the full channel because of the angle of the extent polygon, mark it as Invalid.</li>
			<li>Cross sections should not parallel the Centerline because of bends in the Centerline. Mark as Invalid.</li>
		</ul>
</ul>

<h4>Stream Surfaces</h4>
<ul>
	<li>Run Create Stream Surface tool if Water Depth raster is missing.</li>
	<li>You will need to run this tool if you have recreated the DEM.</li>
	<li>If you receive and error while trying to run this tool, please contact CHaMP GIS support staff.</li>
</ul>

<h4>Bankfull Extents</h4>
<ul>
	<li>Create if missing from geodatabase.</li>
	<li>Edit as needed.</li>
</ul>

<h4>BIslands</h4>
<ul>
	<li>Create if missing from geodatabase.</li>
</ul>

<h4>BankfullCL</h4>
<ul>
	<li>Create if missing from geodatabase.</li>
	<li>Straighten ends of newly created lines by removing vertices so Cross Sections in these areas are appropriate.</li>
</ul>

<h4>BankfullXS</h4>
<ul>
	<li>Create if features are missing from geodatabase.</li>
	<li>Review cross sections for ones that are not valid but should be.</li>
		<ul>
			<li>Cross sections at the top and bottom should be perpendicular to the direction of the channel polygon.</li>
			<li>Cross sections should span the whole channel. If a cross section spans less than the full channel because of the angle of the extent polygon, mark it as Invalid.</li>
			<li>Cross sections should not parallel the channel because of bends it the centerline. Mark as invalid.</li>
		</ul>
</ul>
<h4>Survey Evaluation rasters</h4>
<ul>
	<li>Run each tool in order.</li>
	<li>Clean out the temporary workspace before running the Create 3D Point Quality Raster and the Create Survey Error Raster tool.</li>
</ul>

<hr>

<h3>Other Common Errors or Warnings based on Validate Data tool</h3>

<h4>Thalweg</h4>
<ul>
	<li>Thalweg passes over a gap in the WaterExtent because of a Dam or a high spot in the DEM.</li>
	<li>If the Thalweg passes over a island you can edit the Thalweg so it goes around the island.</li>
	<li>If the WaterExtent has a gap because of a dam and you cannot move the line around it, you can add a small polygon over the area where the 
		Thalweg crosses a gap surrounding the Thalweg line in both the WaterExtent and Bankfull features.This is a last resort only and should be discussed with your supervisor or CHaMP GIS support staff.</li>
</ul>

<h4>Missing Breakline Topo Points</h4>
<ul>
	<li>If breaklines do not have points associated with them, follow the steps below.</li>
	<li>Select the breaklines which do not have points.</li>
	<li>Export them to a new features class: BreaklinesforPoints</li>
	<li>Use the Feature Vertices to Points tool to Output Feature Class: 
		<ul>
			<li>Input Features: BreaklinesforPoints</li>
			<li>Output Feature Class: Topo_Points_New</li>
			<li>Point Type (optional: <strong>All</strong>.</li>
		</ul>
	<li>Append Topo_Points_New to Topo_Points.</li>
</ul>

<h4>Topo Points</h4>
<ul>
	<li>The <strong>in</strong> point should be at the top of the survey and the <strong>out</strong> point at the bottom.</li>
	<li>Both points need to fall within the following feature classes or rasters.</li>
		<ul>
			<li>WaterExtent feature class</li>
			<li>DEM raster</li>
			<li>Water_Depth raster</li>
		</ul>
	<li>If they do not, edit the WaterExtent so they do and then recreate the rasters.</li>
</ul>

<h4>Current Warnings to ignore. These cannot be currently repaired.</h4>
<ul>
	<li>Channel unit polygons extent outside the wetted extent main channel.</li>
	<li>The desired number of bankfull points (20) has not been met.</li>
</ul>

<hr>

<h3>Reload repaired data to champmonitoring.org</h3>
<ul>
	<li>Once the survey is repaired, Run the <strong>Publish Final Geodatabase</strong> tool.</li>
	<li>Check <strong>Republish Survey</strong> option.</li>
	<li>Make sure the most recent WSETIN file is selected to be zipped.</li>
	<li>This will create a new zip file in the Topo folder.</li>
	<li>Extract the zip file.</li>
	<li>Compare the name of the Survey Geodatabase (not corrected) zip file matches <strong>EXACTLY</strong> with what is on champmonitoring.org. If it does not, the files will <strong>NOT</strong> load correctly.</li>
	<li>If it does not, rename the survey geodatabase zip file to match what is on champmonitoring.org.</li>
	<li>Select the four files in the folder and zip into a new file.</li>
		<ul>
			<li>publish.xml</li>
			<li>Survey geodatabase zip file</li>
			<li>TIN zip file</li>
			<li>WSETIN zip file</li>
		</ul>
	<li>Upload new zip file to champmonitoring.org</li>
	<li>In the <strong>Topographic Data</strong> dialog box, the Last Modified dates next to each of the 4 files you uploaded should change to the current date.</li>
</ul>