
<h1>HYDROGRAPHY GIS LAYER CREATION AND MAINTENANCE</h1>


<h2>BACKGROUND OF TASK</h2>
<p>When using GIS data, there are often subsets of the original data needed for different reasons. This causes problems when creating and maintaining data because it creates multiple versions of the same dataset. Subsequent updates to one dataset will not be reflected in other data subsets. A better option is to maintain the greatest extent of the features and then use field values to shrink the extent to the needs of specific users.</p>

<p>This document lists the steps to create a single dataset based on the NHD 1 to 24k version 931v220 or greater hydrography. Fields were added to a copy of the original hydrography to allow the ability to query out a subset of data which will run with the GNAT or other modeling tools.</p>

<h2>FIELDS ADDED TO HYDROGRAPHY LAYER</h2>

<h2>Field Definitions:</h2>
<p>Below is a list of fields added to the NHD 1 to 24k Hydrography layer and their definitions.</p>
<ul>
	<li><u>GNIS_ID:</u> The official Geographic Names Information System feature id field from the NHD 1 to 24k file.</li>
	<li><u>GNIS_Name:</u> The official Geographic Names Information System feature name field from the NHD 1 to 24k file.</li>
	<li><u>FType:</u> The type of stream based on the NHD designations (3 number code).</li>
	<li><u>FCode:</u> The code for stream type based on the NHD designations (6 number code).</li>
	<li><u>CRBType:</u> This field (CRB Trib/CRB Main) denotes whether the watershed has been designated a Tributary watershed or Mainstem watershed.</li>
	<li><u>EP_Extent:</u> This field (Yes/No) is the extent used to create the network for the Expert Panel. This network has been fully connected to allow the GNAT tools to run and is based on the combined fish extent for Steelhead and Chinook.</li>
	<li><u>PerNtwrk:</u> This field (Yes/No) is based on perennial streams (FCodes 46006) from the original NHD 1 to 24k network. This network is fully connected to allow the GNAT tools to run. It includes line segments where SO100Add, AddSegs, AddFrame and EP_Extent have a value of <strong>Yes</strong>.</li>
	<li><u>STHD_IP:</u> This field (Steelhead/null) is populated based on a value of greater than zero in the <u>STHDRATE</u> field from the ICB (Intrinsic Potential) GIS shapefile.</li>
	<li><u>CHNK_IP:</u> This field (Chinook/null) is populated based on a value of greater than zero in the <u>CHNRATE</u> field from the ICB (Intrinsic Potential) GIS shapefile.</li>
	<li><u>Orig_Con:</u> This field (Yes/No) denotes the original connectivity of the features prior to any editing and is based on an initial run of the Check Network Connectivity tool.</li>
	<li><u>Braid:</u> This field (Yes/No) denotes braids in the network based on running the GNAT Find Braids in Stream Network tool.</li>
		<ul type='a'>			
			<li>A value of <strong>Yes</strong> means that the segment is a braid of the main river channel. You can remove braids to facilitate processing via the GNAT tools.</li>
		</ul>  
	<li><u>SO100Add:</u> This field (Yes/No) denotes streams which were added because they had a stream order value greater than 1 in the NHD 1 to 100K Version of hydrography beyond the initial perennial network extent from NHD 1 to 24k.</li>
	<li><u>AddSegs:</u> This field (Yes/No) denotes segments which have been added to produce connectivity in the working subset of the original network based on the following formula and on imagery review.</li>
		<ul type='a'>
			<li>These segments will be digitized by user.</li>     
			<li>The line must be digitized from upstream to downstream.</li>
		</ul> 
	<li><u>AddFrame:</u> This field (Yes/No) denotes segments added because they fell under <strong>Target</strong> in the 2014 year of the frames beyond the perennial network from NHD 1 to 24k.</li>
</ul>

<hr>

<h2>ACQUIRING THE DATA</h2>

<p>Download the data from the USGS NHD data portal.</p>
<ul type= = '1'>
	<li>Website: nhd.usgs.gov/data.html</li>
	<li>Select option 3: <strong>Go to NHD Extracts by State</strong>.</li>
	<li>Select the <strong>HighResolution</strong> folder.</li>
	<li>Select the <strong>Shape</strong> folder.</li>
	<li>Select the data by State code.</li>
		<ul type='a'>
			<li>Washington - 53</li>
			<li>Oregon -41</li>
			<li>Idaho - 16</li>
		</ul>
	<li>Check the <strong>Last Modified</strong> date of the data you will be downloading. If it is more recent than your last download, get a new set of data. Otherwise, you can use the one you have.</li>
	<li>Click on the zip file and save. This will take several minutes to download.</li>
	<li>Unzip the file and add the NHDFlowline shapefile to ArcGIS.</li>
	<li>Clip the extent you wish to work with. <strong>Please Note:</strong> We recommend using a HUC 4 or 6 watershed to clip the hydrography depending on line density. If you try to work with a larger area, the time it takes to run the tools with increase dramatically.</li>
	<li>Project the clipped network to UTM.</li>
</ul>
<hr>

<h2>PREPPING THE DATA</h2>

<p><strong>Tools used:</strong>
	<ul type='a'>
		<li>Geomorphic Network and Analysis Toolbox</li>
		<li>Stream Network Management Tools toolset</li>
		<li>Utilities toolset</li>
	</ul>
</p>

<p><strong>Processing Steps:</strong></p>

<ul type = '1'>
	<li>Clip the NHD 1 to 24k shapefile or feature class to the watershed you will be working on. Smaller areas will run through the cleaning tools faster.</li>
	<li>Use the ModelBuilder tool EP_FieldAdds_20160729 to perform the steps in this section or you can do them manually. All the fields will be populated with <strong>No</strong> except the <u>STHD_IP</u> and <u>CHNK_IP</u> fields which will be left blank by the aforementioned tool. If you do not use the tool, you need to do this manually.</li>
		<ul type='a'>
			<li>Project the new feature class if it is in a Geographic projection and make sure the Z and M values are disabled.</li>
			<li>Add field <u>PerNtwrk</u> (Text, 10).</li>
			<li>Add field <u>OrigCon</u> (Text, 10).</li>
			<li>Add field <u>AddSegs</u> (Text, 10).</li>
			<li>Add field <u>Braid</u> (Text, 10).</li>
			<li>Add field <u>AddFrame</u> (Text, 10.)</li>
			<li>Add field <u>EP_Extent</u> (Text, 10.)</li>
			<li>Add field <u>STHD_IP</u> (Text, 10).</li>
			<li>Add field <u>CHNK_IP</u> (Text, 10).</li>
			<li>Add field <u>AddSO100</u> (Text, 10).</li>
			<li>Add ICB data</li>
				<ul type='i'>
					<li>Use Spatial Join at <strong>Closest</strong> within 50 m.</li>
				</ul>
		</ul>
	<li>Start Editing and use Explode Multipart Feature tool in the Advanced Editing toolbar to make sure all lines are Single Part features.</li>
	<li>Add species to STHD_IP and CHNK_IP.</li>
		<ul type='a'>
			<li>Because of the differences in location of the lines between the ICB based NHDPlus 1 to 100k and NHD 1 to 24k network, you will need to do a lot of manual editing. Use one of the 2 methods below to clean up the join.</li>
					<ul type='i'>
						<li>Select all records where <u>STHDRATE</u> is greater than 0 and populate the <u>STHD_IP</u> field with <strong>Steelhead</strong>. Repeat with <u>CHINRATE</u> and <u>CHNK_IP</u>.</li>
						<li>Manually change each segment with the incorrect value.</li>
					</ul>
			<li>OR</li>
					<ul type='i'>
						<li>Add and display the intrinsic potential gis file based on the <u>CHINRATE</u> greater than 0.</li>
						<li>Select line features of your working network by <u>GNIS_Name</u> where the stream/river is primarily <strong>Chinook</strong>.</li>
						<li>Update the <u>CHNK_IP</u> to <strong>Chinook</strong> for the selected features.</u></li>
						<li>Once you have finished the named streams, you can change the segments of any streams beyond the Chinook extent back to <strong>blank (null)</strong>.</li>
						<li>Select remaining streams which fall in the Chinook extent but do not have a <u>GNIS_Name</u> and update the <u>CHNK_IP</u> field.</li>
						<li>Check the connectivity for the Chinook lines.</li>
						<li>Repeat until you have full Connectivity where <u>CHNK_IP</u> equals Chinook. If all segments have an IsCon field value of 1, the network is fully connected.</li>
					</ul>
			<li>Repeat the above steps for Steelhead. Note, you can usually select all of the records where <u>CHNK_IP</u> equals Chinook and populate the <u>STHD_IP</u> with Steelhead because the Steelhead extent is generally larger than the Chinook extent.</li>

		</ul>
	<li>Update the <u>EP_Extent</u> field.</li>
		<ul type='a'>
			<li>Select all records where <u>CHNK_IP</u> and <u>STHD_IP</u> are not null.</li>
			<li>Populate field with <strong>Yes</strong></li>
		</ul>
	<li>Update the <u>AU_CHIN</u> and <u>AU_STHD</u> fields.</li> 
		<ul type='a'>
			<li>Display the intrinsic potential gis file based on the <u>AU_CHIN</u> or <u>AU_STHD</u> field.</li>
			<li>This data is based on catchment polygons. All line segments within a catchment area should have the same AU_CHIN or AU_STHD value.</li>
			<li>Update all segments with appropriate data.</li>
		</ul>
	<li>Update the <u>OrigCon</u> field.</li>
		<ul type='a'>
			<li>Check entire for network connectivity for GNAT tools by running the Check Network Connectivity tool.</li>
			<li>If you need a fully connected network, use the <u>IsCon</u> field where values = 1.</li>
			<li>Add field <u>OrigCon</u> (Text, 10).</li>
			<li>Populate field with <strong>Yes</strong> where first run IsCon field = 1.</li>
		</ul>
	<li>Update the <u>PerNtwrk</u> field</li>
		<ul type='a'>
			<li>Create the initial Perennial Network extent designation.</li>
				<ul type='i'>
					<li>Update the <u>PerNtwrk</u> field with <strong>Yes</strong> where <u>FCode</u> equals <strong>46006</strong> (perennial stream).</li>
					<li>Update the <u>PerNtwrk</u> field with <strong>Yes</strong> where <u>EP_Extent</u> is <strong>Yes</strong>.</li>
					<li>Check network for connectivity.</li>
					<li>The Perennial network based on the <u>EP_Extent</u> and the <strong>46006</strong> <u>FCode</u> should be fully connected.</li>
					<li>Update <u>PerNtwrk</u> field to <strong>Yes</strong> to segments where the <u>FCode</u> does not equal <strong>46006</strong> to achieve complete connectivity.</li>
				</ul>
			<li>Update PerNtwrk based on SO100Add field</li>
				<ul type='i'>
					<li>Because NHD does not contain Stream Order, we will use NHD Plus to include streamsStream Order greater than 1.
					<li>Display the NHD Plus gis file based on Stream Order greater than 1.</li>
					<li>Update the <u>SO100Add</u> field to <strong>Yes</strong> anywhere <u>PerNtwrk</u> equals <strong>No</strong> but the Stream Order is greater than 1.</li>
					<li>Keep checking the connectivity until you have a fully connected network based on the <u>SO100Add</u> and <u>PerNtwrk</u> fields.</li>
					<li>Once you have completed this step, select all records where <u>SO100Add</u> equals <strong>Yes</strong> and update the associated <u>PerNtwrk</u> records to <strong>Yes</strong>.</li>
				</ul>
			<li>Update PerNtwrk based on Frame field</li>
				<ul type='a'>
					<li>The Frame is the target area for the CHaMP project and is a subset of a watershed's streams</li>
					<li>If there is a frame which overlaps the watershed, use a Spatial Join to add the attributes.</li>
					<li>Display all records where the <u>Target_yyyy</u> field contains a value of <strong>Target</strong>.</li>
					<li>Updated the <u>AddFrame</u> field to be <strong>Yes</strong> if there are line segments where <u>PerNtwrk</u> equals <strong>No</strong>, but the <u>Target_yyyy</u> equals <strong>Target</strong>.</li>
					<li>Keep checking the connectivity until you have a fully connected network based on the <u>PerNtwrk</u> equal to <strong>Yes</strong> and <u>AddFrame</u> equal to <strong>Yes</strong>.</li>
				</ul>
			<li>Connecting disconnected segments within the PerNtwrk</li>
				<ul type='a'>
					<li>There are areas of the NHD hydrography where gaps in the lines occur. Sometimes reviewing imagery shows that the streams are connected.</li>
					<li>The <u>AddSegs</u> field allows you to denote when a line segment was digitized during the network prep process and was not included in the original hydrography.</li>
					<li>Review gaps using high resolution imagery and digitize segments where possible.</li>
					<li>Digitized segments should have a value of <strong>Yes</strong> for <u>AddSegs</u> field.</li>
					<li>Keep checking the connectivity until you have a fully connected network based on the <u>PerNtwrk</u> and <u>AddSegs</u> fields.</li>
					<li>Once you have completed this step, select all records where <u>AddSegs</u> equals <strong>Yes</strong> and update the associated <u>PerNtwrk</u> records to <strong>Yes</strong>.</li>
					<li><strong>Please Note:</strong> if an line or group of lines where the FCode equals 46006 cannot be reasonably connected to the rest of the network based on imagery review, update the <u>PerNtwrk</u> to be <strong>No</strong>.</li>
				</ul>
		</ul>
	<li>Check network for braids</li>
		<ul type='a'>
			<li>Run Find Braids In Stream Network tool</li>
			<li>Open the Attribute Table</li>
			<li>Using the Select by Attributes tool</li>
				<ul type='i'>
					<li>"IsBraided" = 1 AND "GNIS_Name" = ' '</li>
				</ul>
			<li>Update the <u>Braid</u> field to be <strong>Yes</strong> where the above formula is true.</li>
			<li>Once braids are designated, Check to make sure if braid are removed from either the Perennial or Fish Extent network, there is still be full connectivity.</li>
				<ul type='i'>
					<li>Select lines where <u>PerNtwrk</u> equal to <strong>Yes</strong> and <u>Braid</u> equal to <strong>No</strong>.</li>
					<li>Check connectivity.</li>
					<li>Manually update until full connectivity is achieved.</li>
				</ul>
			<li>Segments with a GNIS Name should not be labeled as a braid if there are adjacent segments in the Braid which do not have a name.</li> 
			<li>Braids where neither segment has a name should be updated so one of the segments is labeled <strong>No</strong>.</li>
			<li>Continue until you can extract a Perennial and/or Fish Extent network with no braids.</li>
		</ul>
	<li>Check for Dangles on Fish Extent and Perennial Extent</li>
		<ul type='a'>
			<li>Dangles are tiny tributary line segments which received a <u>PerNtwrk</u> equals <strong>Yes</strong> designation in error.</li>
			<li>These segments are usually connectors between a main stream line and a tributary.</li>
			<li>Open the Find Dangles and Remove Duplicates tool.</li>
				<ul type='i'>
					<li>Set your Maximum Dangle Length to 100.</li>
					<li>Set your Workspace to your Working folder.</li> 
					<li>Set your Scratch workspace to you Scratch folder.</li>
				</ul>
			<li>An <u>IsDang</u> field will be added and dangles will be designated with a <strong>1</strong>.</li>
			<li>Update the <u>PerNtwrk</u> to a <strong>No</strong> for line segments where this is appropriate.</li>
			<li>Please note that some very small tributaries will be less than 100 m long but will still be valid line segments.</li>
		</ul>
	<li>Check the perennial network for junction segments where more than 3 lines intersect.</li>
		<ul type='a'>
			<li>Only 3 line segments can meet at a junction when running the Stream Order tool, so junctions with 4 or more segments must be corrected.</li>
			<li>Open the Find Crossing Network Lines tool.</li>
				<ul type='i'>
					<li>Set your Workspace to your Working folder.</li> 
					<li>Name your output polygon, (e.g. Entiat_Cross).</li>
					<li>Set your Scratch workspace to your Scratch.gdb.</li>
					<li>Run the tool</li>
				</ul>
			<li>Start Editing the working network.</li>
			<li>Open the Attribute Table for the shapefile you created with the tool and zoom to each feature. In the Display Window the feature will be a small 1 meter radius polygon.</li>
			<li>Move one or more lines 1 meter from junction where more than 3 lines meet this is just outide the polygon.</li>
			<li>Choose a line(s) without a <u>GNIS_Name</u> whenever possible.</li>
		</ul>
	<li>Check the connectivity for your Perennial Network one last time. If it is fully connected you have finished.</li>
</ul>
