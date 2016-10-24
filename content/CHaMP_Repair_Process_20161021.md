<h2>Current CHaMP Visit Repair Process for 2016 Toolbar</h2>
	<p>Date: October 24, 2016</p>

<h3>Repairs to do before you run the Validate Data tool.</h3>

	<h4>2011 Visit only Feature Class Renaming</h4>
		<ul>
			<li>Water_Extent should be WaterExtent.</li>
			<li>Habitat_Units should be Channel_Units.</li>
			<li>Missing Channel_Units_Field feature class, Copy Channel_Units and rename to Channel_Units_Field.</li>
			<li>Breaklines</li>
				<ul>
					<li>There is a Soft_Breaklines and Hard_Breaklines feature classes but not a Breaklines feature class.</li>
					<li>Copy Hard_Breaklines and rename to Breaklines.</li>
					<li>Add field LineType (Text, 4).</li>
					<li>Populate LineType field with <u>HARD</u>.</li>
					<li>Append Soft_Breaklines to Breaklines feature class.</li>
					<li>Populate LineType field with <u>SOFT</u>, where field is null after Append.</li>
				</ul>
		</ul>

	<h4>Control_Points</h4>
		<ul>
			<li>If Visit is from survey year 2011, Open Attribute Table.</li>
			<li>Add field Type (Text, 10).</li>
			<li>Populate field with one of the following values.</li>
				<ul>
					<li><u>Control</u> for code <strong>cp</strong></li>
					<li><u>Benchmark</u> for code <strong>bm</strong></li>
					<li><u>Backsight</u> for code <strong>bs</strong></li>
				</ul>
		</ul>

	<h4>Stream Features</h4>
		<ul>
			<li>If Visit is from survey year 2011 or 2012, Open Attribute Table.</li>
			<li>Check table for the following fields and add if they are not present:</li>
				<ul>
					<li>VDE (dbl)</li>
					<li>HDE (dbl)</li>
					<li>POINT_QUALITY  (dbl)</li>
					<li>STATION (Text, Default)</li>
					<li>Description (Text, 10)</li>
				</ul>
		</ul>
	
	<h4>SurveyInfo Table Updates</h4>
		<ul>
			<li>Note: This issue should be automatically repaired now, but it is good to check.</li>
			<li>Open the Attribute table and review field headings.</li>
			<li>If field Organziation is present.</li>
				<ul>		
					<li>Add new field Organization (Text, 30).</li>
					<li>Copy any information to the new field.</li>
					<li>Delete field Organziation.</li>
				</ul>
			<li>Add the field FinalWSETIN <Text, 50).</li>
			<li>Start Editing the table.</li>
				<ul>
					<li>If there is not a record, Click in the SiteID field to add one.</li>
					<li>Add the Site name to the SiteID field.</li>
					<li>Add Watershed name if it is missing</li>
				</ul>
			<li>Stop Editing and Save</li>
		</ul>

	<h4>WaterExtent/Bankfull Updates</h4>
		<ul>
			<li>If the feature classes already exist and visit is Pre-2014, Check Attribute Table for ExtentType field.</li>
				<ul>
					<li>Add field ExtentType field to the feature classes if they exist.</li>
					<li>Add value Channel to the field for the primary channel.</li>
					<li>Check feature classes to make sure they are NOT multi-part features and explode them if necessary.</li>
				</ul>
			<li>Edit the Bankfull feature so the WaterExtent is fully inside it.</li>
				<ul>
					<li>Note: From the 2016 toolbar moving forward, this issue should not occur.</li>
					<li>Prior years will still need the repair though.</li>
				</ul>
			<li>Remove tiny triangles in both features using the Editor.</li>
			<li>If the WaterExtent was obviously not created using the Slider tool and does not follow the channel like it should.</li>
				<ul>
					<li>This is most likely to occur with 2011 surveys.</li>
					<li>Rename WaterExtent to WaterExtent_orig.</li>
					<li>Recreate the WaterExtent.</li>
					<li>If you have recreated WaterExtent you may need to recreate the Channel_Units.</li>		
				</ul>
		</ul>

	<h4>Centerline/BankfullCL</h4>
		<ul>
			<li>If the feature classes already exist and visit is Pre-2014, Open Attribute Table and check for the field Channel.</li>
			<li>Add the field Channel if not present (Text, 50).</li>
			<li>Add value Main or Side to the Channel fields for line segments as appropriate.</li>
			<li>Start Editing lines.</li>
			<li>Straighten ends of lines so Cross Sections at top and bottom of site will be appropriate.</li>
		</ul>

	<h4>Channel_Units</h4>
		<ul>
			<li>Channel Unit polygons should not overlap or have small gaps.</li>
			<li>You will see a warning in the Validation window if overlapping occurs. The warning denotes which channel unit polygons overlap by number.</li>
			<li>Start Editing and repair.</li>
		</ul>


	<h4>WIslands/BIslands</h4>
		<ul>
			<li>If Visit is from survey year 2011, Open Attribute Table.</li>
			<li>Add IsQualifying and IsValid fields if they do not exist.</li>
		</ul>

<hr>

<h3>Repairs to perform once you have opened the visit in Workflow Manager.</h3>

	<h4>DEM and Detrended DEM</h4>
		<ul>
			<li>Recreate the DEM if one of the following is true.</li>
			<li>If there are tb, bf or EdgeOfWater_Points which do not fall on the DEM.</li>
			<li>There is an DEM raster error in the Validate Data window.</li>
			<li>If you recreated the DEM, you must recreate the Detrended DEM.</li>
		</ul>

	<h4>Topo Points</h4>
		<ul>
			<li>Check Topo Points for and in and out points.</li>
			<li>If the in or out point is not present, rename the two wg points closest to the
				top and the bottom  of the survey.</li>
			<li>The in point needs to be at the top of the DEM and the out point at the bottom.</li>
		</ul>

	<h4>Thalweg</h4>
		<ul>
			<li>Create if missing</li>
			<li>Check the Thalweg in and out points to make sure they fall on the DEM and Water_Depth rasters.</li>
			<li>The red vertex (point) on the Thalweg line should be on the in.</li>
		</ul>

	<h4>WaterExtent and Bankfull Extents</h4>
		<ul>
			<li>Create if missing</li>
		</ul>

	<h4>Islands</h4>
		<ul>
			<li>Create if missing.</li>
		</ul>

	<h4>Centerlines</h4>
		<ul>
			<li>Review Centerline to see if there are or should be Islands.</li>  
			<li>Early years (2011 to 2013) likely do not have a Centerline/BankfullCL with correct side channel centerlines.</li>
			<li>You can tell if there are multiple channels by looking at the Channel_Units on champmonitoring.org under
					the Visit/Measurements/Auxiliary Data/Channel Unit.</li>
			<li>If Qualifying Islands are present, then re-run Centerline and BankfullCL.</li>
			<li>Straighten ends of newly created lines so Cross Sections at top and bottom of site will be appropriate.</li>
		</ul>

	<h4>Cross Sections</h4>
		<ul>
			<li>Run tool if features are missing from geodatabase.</li>
			<li>Review cross sections for ones that are not valid but should be.</li>
			<li>Review cross sections at each end of the site, any cross section which does not reach most of the way
				 	across the channel should be designated as invalid.</li>
		</ul>

	<h4>Stream Surfaces</h4>
		<ul>
			<li>Run Create Stream Surface tool if Water Depth raster is missing.</li>
			<li>You will need to run this tool if you have recreated the DEM.</li>
		</ul>

	<h4>Survey Evaluation rasters</h4>
		<ul>
			<li>Run each tool in order.</li>
			<li>Surveys done pre-2014 will not be able to run the Create 3D Point Quality Raster.</li>
		</ul>

<hr>

<h3>Common Errors based on Validate Data tool</h3>

	<h4>Edge of Water Points</h4>
		<ul>
			<li>Early DEMs may not include all of the EOW points, you see an error where EOW does not fall on the DEM.</li>
			<li>Recreate the DEM.</li>
			<li>If recreating the DEM does not fix this problem, you will need to either remove the points from the EOW feature
				class or if it is less than 10 cm from the DEM, then move it onto the DEM.</li>
		</ul>	

	<h4>Breaklines</h4>
		<ul>
			<li>If you have moved any points in, out, tb, bf, or EOW, you may need to move the ends of any Breaklines which
				fall on those points.</li>
			<li>Make sure Breakline vertices fall on points.  If not, move the line until it does.</li>
			<li>Make sure hard Breaklines do not cross.  If they do, either edit out a section or move the line and point.</li>
			<li>If Breaklines have crossed, you will need to remove any vertices created by ArcMap where the cross occurred.</li>
			<li>Run the Update Z Values for Breakline Vertices tool if you edit any Breaklines.</li>
		</ul>

	<h4>In/Out Points</h4>
		<ul>
			<li>These points need to fall within the following feature classes or rasters.</li>
				<ul>
					<li>WaterExtent</li>
					<li>DEM raster</li>
					<li>Water_Depth raster</li>
				</ul>
		</ul>

	<h4>Thalweg</h4>
		<ul>
			<li>Thalweg passes over a gap in the WaterExtent because of a Dam or a high spot.</li>
			<li>If the Thalweg passes over a island you can edit the Thalweg so it goes around the island.</li>
			<li>If the WaterExtent has a gap because of a dam, you can add a small polygon over the area where the 
				Thalweg crosses a gap surrounding the Thalweg line in both the WaterExtent and Bankfull features.</li>
		</ul>

	<h4>Missing Topo Points</h4>
		<ul>
			<li>If breaklines do not have points associated with them, follow the steps below.</li>
			<li>Select the breaklines which do not have points.</li>
			<li>Export them to a new features class: BreaklinesforPoints</li>
			<li>Use the Feature Vertices to Points tool to Output Feature Class: Topo_Points_New, Point Type <strong>All</strong>.</li>
			<li>Append Topo_Points_New to Topo_Points.</li>
		</ul>

	<h4>DEM</h4>
		<ul>
			<li>The raster is required to be divisible with corner coordinates on whole meters and is not.</li>
			<li>The raster is not orthogonal.</li>
			<li>Recreate the DEM.</li>
		</ul>

