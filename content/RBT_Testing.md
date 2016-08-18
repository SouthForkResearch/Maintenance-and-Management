---
title: RBT Testing Procedures
---

This document outlines the SFR RBT testing procedures for each new version of the RBT before it is cleared for release. Once it is approved for release, it may be distributed to the public and sent to production on cm.org.

## Criteria for RBT Version

List of rules for requiring a new RBT Version

* Common exception that affects a large number of visits
* New exception or error that affects previously clean data.
* Erroneous metric calculation or method
* Incorrect metric results
* Other issue (xml file, RBT crash, etc).

RBT candidate release could address several issues in one new version. Refer to RBT change log.

`QUESTION Does a release failed in SFR testing indicate a new version number?`

##Testing Procedure

It is assumed the NAR will have their own set of RBT testing and requirements before issuing a release candidate to SFR. Perhaps capture some of those here for reference. Some duplication of effort is not necessarily bad in this case.

### Level 1: Targeted Test

`Lead: KW`

Test the RBT version against a subset of visits that target the issue, exception, or metric in question.

The goal of this testing is to ensure that the problem is fixed. THIS STEP IS TO BE REPEATED UNTIL THE RBT VERSION PASSES ALL THREE LEVELS. For example, if RBT passes level one, but fails level 2, then the next version must test against level 1 again. 

If no specific error or issue is addressed in the RBT version, this step may be skipped.

**Pass conditions**

* Original Problem(s) are resolved.
* Reasonable sanity check of metric value results for the targeted metric(s) or topo data component(s)
* No change in expected validation results.
* No new Exception messages.

### Level 2: Beta Test

`Lead: JO to run, KW to provide the list of visits.`

Once it is confirmed that the RBT version has passed level 1 (i.e. fixed the original problem), then run RBT against a standard set of visits that cover a range of visits to ensure that RBT runs smoothly in different situations, and that the fix does not cause new unexpected exceptions to existing methods.

**Pass conditions**

* Reasonable sanity check of metric value results 
* No change in expected validation results.
* No new Exception messages.

`TODO: Those visits to be listed here with their inclusion rationale.`

We do not have a long history of running these visits, so the goal will be to check that the visits 1) ran successfully (i.e. no exceptions, correct validation, etc.) 2) quick sanity check of metric results (make sure values are within correct ranges). 

**Pass conditions**

* Reasonable sanity check of metric value results.
* No change in expected validation results.
* No new Exception messages.

### Level 3: Metric Test

`Lead: JO`

Metric Testing is conducted on the set of Historical Metric Validation visits. These visits have been cleaned to a very stable condition as to avoid the need for future changes due to evolving RBT requirements. This provides us with a stable set of metric results that each version of RBT can be compared to. 

Each version of RBT will be run against this set of metric validation visits

**Pass conditions**

* No or little (within a defined threshold) variation in metric value results.
* No change in expected validation results.
* No new Exception messages.

### Release Instructions

`SFR` Results of each level/run for each version of rbt will be archived. A short report for the targeted testing (visitID's, selection criteria, method of verification, etc) should be included as well (and sent to NAR)


`NAR` Once the RBT has passed all release requirements, NAR is informed of the results and releases RBT to public/cm.org. 

### Testing Environment

* Systems other than Desktop version of Windows 10 are not tested, includes
	* Servers
	* AWS
* ArcGIS version 10.1 sp1 
	* Advanced Level License
	* Spatial Analyst
	* 3D Analyst
* 64 bit System Architecture.
* Python 2.7.2 (ships with arcgis 10.1) 32 bit
* Processing Time is not currently analyized, though visits that take ***exceptionally long*** may trigger a request to provide a new version of rbt.
* Input/Output files are generated and batched through the current version of the Workbench at the time of testing. 
	

