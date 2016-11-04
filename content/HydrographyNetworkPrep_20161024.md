
<h1>HYDROGRAPHY GIS LAYER CREATION AND MAINTENANCE</h1>


<h2>BACKGROUND OF TASK:</h2>
<p>When using GIS data, there are often different pieces of the same file needed for different reasons. This causes issues when creating and maintaining data and may create multiple versions of the same dataset. A better option is to use the greatest extent and then use field values to shrink the extent to the needs of specific users. For example, the hydrography line network for creating valley bottom based on the perennial network is larger than the fish extent based on intrinsic potential.</p>

<h2>FIELDS ADDED TO HYDROGRAPHY LAYER:</h2>

<p>These hydrography files were based on the NHD 1 to 24k 931v220 or greater hydrography. Because the complete hydrography file is not the extent needed for the current analysis and we do not want to maintain multiple hydrography files, fields were added to the original hydrography to allow the ability to query out a subset of data which will run with the GNAT or other modeling tools.</p>

<h2>Field Definitions:</h2>
<p>Below is a list of fields added to the NHD 1 to 24k Hydrography layer and their definitions.</p>
<ul>
	<li><u>GNIS_ID:</u> The official Geographic Names Information System feature id field from the NHD 1 to 24K file.</li>
	<li><u>GNIS_Name:</u> The official Geographic Names Information System feature name field from the NHD 1 to 24K file.</li>
	<li><u>FType:</u> The type of stream based on the NHD designations (3 number code).</li>
	<li><u>FCode:</u> The code for stream type based on the NHD designations (6 number code).</li>
	<li><u>CRBType:</u> This field (CRB Trib/CRB Main) denotes whether the watershed has been designated a Tributary watershed or Mainstem watershed.</li>
	<li><u>EP_Extent:</u> This field (Yes/No) is the extent used to create the network for the Expert Panel. This network has been fully connected to allow the GNAT tools to run and is based on the combined fish extent for Steelhead and Chinook.</li>
	<li><u>PerNtwrk:</u> This field (Yes/No) is based on perennial streams (FCodes 46006) from the original NHD 1 to 24k network.</li>
		<ul type='a'>
			<li>This network is fully connected to allow the GNAT tools to run.</li>
			<li>It includes line segments where SO100Add, AddSegs, AddFrame and EP_Extent have a value of <strong>Yes</strong>.</li>
		</ul>
	<li><u>STHD_IP:</u> This field contains either <strong>Steelhead</strong> or <strong>is null</strong> and is populated based on a value of greater than zero in the <u>STHDRATE</u> field from the ICB (Intrinsic Potential) GIS shapefile.</li>
	<li><u>CHNK_IP:</u> This field contains either <strong>Chinook</strong> or <strong>is null</strong> and is populated based on a value of greater than zero in the <u>CHNRATE</u> field from the ICB (Intrinsic Potential) GIS shapefile.</li>
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

<h2>DETAILS OF TASK:</h2>

<p>Note: Use the Geomorphic Network and Analysis Toolbox.</p>
<ul type = '1'>
	<li>Clip the NHD 1 to 24K shapefile or feature class to the watershed you will be working on. Smaller areas will run through the cleaning tools faster.</li>
	<li>You can use the ModelBuilder tool EP_FieldAdds_20160729 to perform tasks <strong>a</strong> through <strong>l</strong> below.</li>
		<ul type='a'>
			<li>Project the new feature class if it is in a Geographic projection and make sure the Z and M values are disabled.</li>
			<li>All the fields will be populated with <strong>No</strong> except the <u>STHD_IP</u> and <u>CHNK_IP</u> fields which will be left blank.</li>
			<li>Adds field <u>PerNtwrk</u> (Text, 10).</li>
			<li>Adds field <u>OrigCon</u> (Text, 10).</li>
			<li>Adds field <u>AddSegs</u> (Text, 10).</li>
			<li>Adds field <u>Braid</u> (Text, 10).</li>
			<li>Adds field <u>AddFrame</u> (Text, 10.)</li>
			<li>Adds field <u>EP_Extent</u> (Text, 10.)</li>
			<li>Adds field <u>STHD_IP</u> (Text, 10).</li>
			<li>Adds field <u>CHNK_IP</u> (Text, 10).</li>
			<li>Adds field <u>AddSO100</u> (Text, 10).</li>
			<li>Add ICB data</li>
				<ul type='i'>
					<li>Use Spatial Join at <strong>Closest</strong> within 50 m.</li>
					<li>Select all records where <u>STHDRATE</u> is greater than 0 and populate the <u>STHD_IP</u> field with <strong>Steelhead</strong>. Repeat with <u>CHINRATE</u> and <u>CHNK_IP</u>.</li>
				</ul>
		</ul>
	<li>**Note:  Because of the differences in location of the lines between the 1 to 100 and 1 to 24 k NHD network (ICB is on the 1 to 100K), you may need to do a lot of manual editing. Below is an alternative to using the record selection step <strong>l</strong> above.</li>
		<ul type='a'>
			<li>Add and display the intrinsic potential gis file based on the <u>STHDRATE</u> or <u>CHINRATE</u>.</li>
			<li>Select line features by <u>GNIS_Name</u> where the stream/river is primarily <strong>Steelhead</strong> or <strong>Chinook</strong>.</li>
			<li>Update the <u>STHD_IP</u> and <u>CHNK_IP</u> to either <strong>Steelhead</strong> or <strong>Chinook</strong> for the selected features.</u></li>
			<li>Once you have finished, you can change any portions of any streams to <strong>blank</strong>.</li>
		</ul>
	<li>Check connectivity for each species.</li>
	<li>You should have full connectivity by <u>STHD_IP</u> or <u>CHNK_IP</u> downstream of the upstream most segment for each species.</li>
	<li>Because of the difference between the 1 to 24k Network and the 1 to 100K network, the <u>AU_CHIN</u> and <u>AU_STHD</u> fields will not fully match.</li> 
		<ul type='a'>
			<li>Update these fields. All stream segments within an area should have a value in these 2 fields where appropriate.</li>
			<li>You can use Symbology to check and Editor to update</li>
		</ul>
	<li>Check entire for network connectivity for GNAT tools.</li>
		<ul type='a'>
			<li>Run Check Network Connectivity tool.</li>
			<li>If you need a fully connected network, use the <u>IsCon</u> field where values = 1.</li>
			<li>Add field <u>OrigCon</u> (Text, 10).</li>
			<li>Populate field with <strong>Yes</strong> where first run IsCon field = 1.</li>
		</ul>
	<li>Start Editing and use Explode Multipart Feature tool in the Advanced Editing toolbar to make sure all lines are Single Part features.</li>
	<li>Create Perennial Network extent designation.</li>
		<ul type='a'>
			<li>Update the <u>PerNtwrk</u> field with <strong>Yes</strong> based on the <u>FCode</u> value of <strong>46006</strong>.</li>
			<li>Update the <u>PerNtwrk</u> field with <strong>Yes</strong> where <u>EP_Extent</u> is <strong>Yes</strong>.</li>
			<li>Check network for connectivity.</li>
			<li>The Perennial network based on the <u>EP_Extent</u> and the <strong>46006</strong> <u>FCode</u> should be fully connected.</li>
			<li>Update <u>PerNtwrk</u> field to <strong>Yes</strong> to segments where the <u>FCode</u> does not equal <strong>46006</strong> to achieve complete connectivity.</li>
			<li>** Please Note: if an area of hydrography which contains FCodes 46006 (perennial stream) cannot be reasonably connected to the rest of the network, they are given a value of <strong>No</strong>.</li>
		</ul>
	<li>Add segments where the NHD Plus 1 to 100 has a Stream Order greater than 1.</li>
		<ul type='a'>
			<li>Display the NHD Plus gis file based on Stream Order greater than 1.</li>
			<li>Update the <u>SO100Add</u> field to <strong>Yes</strong> anywhere <u>PerNtwrk</u> equals <strong>No</strong> but the Stream Order is greater than 1.</li>
			<li>Keep checking the connectivity until you have a fully connected network based on the <u>SO100Add</u> and <u>PerNtwrk</u> fields.</li>
			<li>Once you have completed this step, select all records where <u>SO100Add</u> equals <strong>Yes</strong> and update the associated <u>PerNtwrk</u> records to <strong>Yes</strong>.</li>
			<li>This field will allow a user to decide how large a network extent they wish to use.</li>
		</ul>
	<li>Connecting disconnected segments within the network</li>
		<ul type='a'>
			<li>The <u>AddSegs</u> field allows you to denote when a line segment has been digitized by the user and was not included in the original hydrography.</li>
			<li>Use this field where there are streams which are not connected in the original hydrography file, but are visually connected based on imagery.</li>
			<li>You can also remove disconnected segments from the network by changing the <u>PerNtwrk</u> value to <strong>No</strong>.</li>
			<li>Digitized segments should have a value of <strong>Yes</strong> for <u>AddSegs</u> field.</li>
			<li>Keep checking the connectivity until you have a fully connected network based on the <u>PerNtwrk</u> and <u>AddSegs</u> fields.</li>
			<li>Once you have completed this step, select all records where <u>AddSegs</u> equals <strong>Yes</strong> and update the associated <u>PerNtwrk</u> records to <strong>Yes</strong>.</li>
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
			<li>Once braids are designated, you need to make sure that if braids are removed from the network that there is still connectivity.</li>
			<li>Keep checking the connectivity until you have a fully connected network based on the <u>PerNtwrk</u> equal to <strong>Yes</strong> and <u>Braid</u> equal to <strong>No</strong>.</li>
			<li>Segments with a GNIS Name should not be labeled as a braid if there are other segments in that section which do not have a name.</li> 
			<li>Manually review segments where <u>Braids</u> is <strong>Yes</strong> and update to <strong>No</strong> as needed to maintain connectivity.</li>
		</ul>
	<li>Add Frame</li>
		<ul type='a'>
			<li>The Frame is the target area for the CHaMP project and is a subset of a watershed's streams</li>
			<li>If there is a frame which overlaps the watershed, use a Spatial Join to add the attributes.</li>
			<li>Display all records where the <u>Target_yyyy</u> field contains a value of <strong>Target</strong>.</li>
			<li>Updated the <u>AddFrame</u> field to be <strong>Yes</strong> if there are line segments where <u>PerNtwrk</u> equals <strong>No</strong>, but the <u>Target_yyyy</u> equals <strong>Target</strong>.</li>
			<li>Keep checking the connectivity until you have a fully connected network based on the <u>PerNtwrk</u> equal to <strong>Yes</strong> and <u>AddFrame</u> equal to <strong>Yes</strong>.</li>
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
			<li>Only 3 line segments can meet when using the Stream Order tool.</li>
			<li>Open the Find Crossing Network Lines tool.</li>
				<ul type='i'>
					<li>Set your Workspace to your Working folder.</li> 
					<li>Name your output polygon, (e.g. Entiat_Cross).</li>
					<li>Set your Scratch workspace to your Scratch.gdb.</li>
				</ul>
			<li>Start Editing you hydrography gis file.</li>
			<li>Open the Attribute Table for the shapefile you created and zoom to each feature.</li>
			<li>Move one or more lines 1 meter from junction where more than 3 lines meet.</li>
			<li>Choose a line(s) without a <u>GNIS_Name</u>.</li>
		</ul>
	<li>Check the connectivity for your Perennial Network one last time. If it is fully connected you have finished.</li>
</ul>
