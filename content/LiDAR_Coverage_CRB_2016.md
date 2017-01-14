<h2>LiDAR Coverage within the Columbia River Basin 2016</h2>
<p><strong>Date Compiled</strong>: June 2016</br>
<strong>Sources</strong>: United States Interagency Elevation Inventory, Idaho LiDAR Consortium, Open Topography</br>
<strong>Created by</strong>: Arielle A. Gervasi, South Fork Research, Inc.</p>

<h3>The Geodatabase</h3>

<p><strong>Title</strong>: LiDAR_Coverage_CRB_2016</br>
<strong>Contents</strong>: Three polygon shapefiles obtained from the above sources containing a collection of polygons representing the extent of LiDAR rasters available for the Columbia River Basin. Attribute tables contain metadata regarding the downloadable LiDAR rasters. One shapefile containing a polygon extent of the Columbia River Basin.</br>
<strong>Extent</strong>: The coverage should be nearly complete for all of the U.S., due to the Interagency Elevation layer; however, this collection best covers the extent of LiDAR within the Columbia River Basin, after searching various online repositories that have unique LiDAR data coverage within the Basin.</br>
<strong>Projection</strong>: All data projected into North America Albers Equal Area Conic. </p>

<h4>US_Elevation_Inventory_Topo Layer</h4>

<p>Source: United States Interagency Elevation Inventory.</br>
Extent: Covers most LiDAR rasters available within the U.S. Note that there are some polygons in this layer which reference data not collected by LiDAR.</br>
Relevant Fields:</p>
<ul>
	<li><strong>Name</strong>: Name of the dataset. Corresponds to the name on the Inventory website.</li>
	<li><strong>Data_Type</strong>: View whether the raster available for download was collected using LiDAR (LiDAR-Bathy, LiDAR-Topo, LiDAR-Topobathy) or other means (Other Bathy Surveys, NOAA Hydro Surveys, IfSAR).</li>
	<li><strong>ProjectStatus</strong>: View whether the LiDAR collection is complete or incomplete.</li>	
	<li><strong>Restrictions</strong>: View whether the dataset is available publicly, for purchase, or restricted.</li>
	<li><strong>Products_Available</strong>: View the products available for download.</li>
	<li><strong>Point_Spacing/Point_Spacing_Number</strong>: The resolution of the data in meters. Point_Spacing_Number has the same information, but in numeric form for easier data analysis.</li>
	<li><strong>Data Access</strong>: See the section "How to Download LiDAR Data" below for how to download data from the United States Interagency Elevation Inventory website.</li>
</ul>

<p>These other sources were also explored, but found to have no unique data that did not already exist in the US Elevation Inventory:</p>
<ul>
	<li>[DOGAMI Lidar Data Viewer](http://www.oregongeology.org/dogamilidarviewer/), Oregon Department of Geology and Mineral Industries. Covers most of Oregon.</li>
	<li>[The National Map](http://viewer.nationalmap.gov/basic/), USGS.</li>
</ul>

<h4>ID_LiDAR_Consortium Layer</h4>

<p>Source: Idaho LiDAR Consortium.</br>
Extent: Covers LiDAR rasters available for the state of Idaho. There is a good deal of overlap between this layer and the US Elevation Inventory layer; however there is also some unique data in this layer.</br>
Relevant Fields: </p>
<ul>
	<li><strong>Name</strong>: Name of the dataset. Corresponds to Location on the Consortium website.</li>
	<li><strong>Raster_Resolution/PointSpacingNumber</strong>: The resolution of the data in meters. PointSpacingNumber has the same information, but in numeric form for easier data analysis. Most of this data I collected from the US Elevation Inventory layer, but for any unique layers not in the Inventory, I used information from the metadata linked on the data's download page on the Consortium website.</li>
	<li><strong>Source</strong>: Shortlink that leads directly to the data download page on the Consortium's webpage. Only added for polygons with unique data.</li>	
</ul>

<h4>Greys_River_WY Layer</h4>

<p>Source: Open Topography.</br>
Extent: Covers unique LiDAR data collected for Grey's River in Wyoming.</br>
Relevant Fields:</p>
<ul>
	<li><strong>Name</strong>: Name of the dataset. Corresponds to the name on the Open Topography website.</li>
	<li><strong>Raster_Resolution/PointSpacingNumber</strong>: The resolution of the data in meters. PointSpacingNumber has the same information, but in numeric form for easier data analysis. Found this information in the metadata on the Open Topography website.</li>
	<li><strong>Source_Raster</strong>: Shortlink that leads directly to the data download page.</li>	
</ul>
	
<hr>	

<h3>How to Download LiDAR Data</h3>	

<h4>From the United States Interagency Elevation Inventory website</h4>
<ul>
1. Follow this [link](http://www.coast.noaa.gov/inventory/) to the Inventory website or from the USDA's Geospatial Data Gateway [website](http://gdg.sc.egov.usda.gov), click United States Elevation Inventory on the bottom left corner. </br>
2. Under DATA TYPE on the right hand side, toggle off all data types except Topographic Lidar, Topobathy Shoreline Lidar, and Bathymetric Lidar to see only LiDAR data on the map. </br>
3. Zoom to your area of interest and click on a polygon; this will outline the polygon in blue.</br>
4. The name of the dataset will appear in the upper left hand corner under Identify, Basemap, and Share. </br>
5. Select whether you want the Topographic or Bathymetric dataset.</br>
6. Click the drop down arrow next to the name of the dataset. The data in the drop down should match the attribute data from the shapefile in the geodatabase. </br>
7. Click the link next to DATA ACCESS to be taken to the website where the LiDAR data products may be downloaded.
</ul>
	
<h4>From the Idaho LiDAR Consortium website</h4>

<ul>
1. Follow this [link](http://www.idaholidar.org/data/data-map/) to the Consortium's website and data map. </br>
2. To select the dataset of interest, you may either zoom in and select it using the Data Map, or you can scroll down to select within the list. </br>
3. If you selected a polygon using the map, a pop-up menu will appear on the left side of the map; select the link next to "Link" to navigate to the download page. </br>
4. If you scrolled down to the list, the datasets are listed in descending order by year. Select the dataset name to navigate to the download page.</br>
5. The data is available as a KML file download from the link next to "Download KML."
</ul>

<h4>From the Open Topography website</h4>

<ul>
1. Follow this [link](http://opentopo.sdsc.edu/lidar?format=sd) to Open Topography's Raster data portal and view their collection of high resolution datasets collected with airborne LiDAR. </br>
2. To select the dataset of interest, scroll down and select the name of the dataset to navigate to the download page.</br>
3. Data can be downloaded by either selecting Raster Bulk Download, or by choosing a more specific area or dataset using the options below the map and then clicking "Submit."</br>
</ul>

