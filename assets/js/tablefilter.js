/* Custom filtering function which will search data in column four between two values */

$.fn.dataTable.ext.search.push(
    function( settings, data, dataIndex ) {
		alert("HI push");
		//slct_source slct_technology slct_industry slct_geography slct_company slct_company_head_count slct_institute
		
		var geography =$('#slct_geography').val();
		//console.log("slct_geography : "+geography);
		var company =$('#slct_company').val();
		//console.log("slct_company : "+company);
		//console.log("company_head_count val: "+$('#slct_company_head_count').val());
		var industry =$('#slct_industry').val();
		var institute =$('#slct_institute').val();
		var source =$('#slct_source').val();
		var technology =$('#slct_technology').val();
		var company_head_count = parseInt( $('#slct_company_head_count').val(), 10 );
		
		//console.log("company_head_count : "+company_head_count);
		
		var geographyFromTbl =data[5];
		//console.log("geographyFromTbl value : "+geographyFromTbl);
		var companyFromTbl =data[6];
		var company_head_countFromTbl = parseFloat( data[7] ) || 0; // use data for the age column
		var industryFromTbl =data[8];
		var instituteFromTbl =data[9];
		var sourceFromTbl =data[10];
		console.log("gph V: "+geographyFromTbl.toUpperCase()+"gph Vu: "+geography.toUpperCase()+"indexOf value : "+geographyFromTbl.toUpperCase().indexOf(geography.toUpperCase()));
		
		console.log("geography Condition : "+(geographyFromTbl.toUpperCase().indexOf(geography.toUpperCase()) > -1));
		console.log("geography toUpperCase  Condition : "+geography.toUpperCase());
		console.log("geographyFromTbl toUpperCase  Condition : "+geographyFromTbl.toUpperCase());
		console.log("geography index : "+geographyFromTbl.toUpperCase().indexOf(geography.toUpperCase()));
		console.log("companyFromTbl Condition : "+(companyFromTbl.toUpperCase().indexOf(company.toUpperCase()) > -1));
		console.log("industryFromTbl Condition : "+(industryFromTbl.toUpperCase().indexOf(industry.toUpperCase()) > -1));
		console.log("instituteFromTbl Condition : "+(instituteFromTbl.toUpperCase().indexOf(institute.toUpperCase()) > -1));
		console.log("sourceFromTbl Condition : "+(sourceFromTbl.toUpperCase().indexOf(source.toUpperCase()) > -1));
		console.log("company_head_count Condition : "+( isNaN( company_head_count ) || company_head_countFromTbl >= company_head_count ));
		
		//console.log("geography Condition : "+(geographyFromTbl.toUpperCase().indexOf(geography.toUpperCase()) > -1));
		
		//console.log("company_head_count Condition : "+(isNaN( company_head_count ) && company_head_countFromTbl > company_head_count));
		//if (isNaN( company_head_count ) || company_head_countFromTbl >= company_head_count )
		 // console.log("geography Condition : "+(geographyFromTbl.toUpperCase().indexOf(geography.toUpperCase()) > -1));
	     // console.log("company Condition : "+(companyFromTbl.toUpperCase().indexOf(company.toUpperCase()) > -1));
	    //console.log("industry Condition : "+(industryFromTbl.toUpperCase().indexOf(industry.toUpperCase()) > -1));
	    //console.log("institute Condition : "+(instituteFromTbl.toUpperCase().indexOf(institute.toUpperCase()) > -1));
	    //console.log("source Condition : "+(sourceFromTbl.toUpperCase().indexOf(source.toUpperCase()) > -1));
		//console.log("company_head_count Condition : "+ (isNaN( company_head_count ) || company_head_countFromTbl > company_head_count ));
		
		//console.log("Final Condition : "+((geographyFromTbl.toUpperCase().indexOf(geography.toUpperCase()) > -1 || companyFromTbl.toUpperCase().indexOf(company.toUpperCase()) > -1 || industryFromTbl.toUpperCase().indexOf(industry.toUpperCase()) > -1 || instituteFromTbl.toUpperCase().indexOf(institute.toUpperCase()) > -1 || sourceFromTbl.toUpperCase().indexOf(source.toUpperCase()) > -1))||(isNaN( company_head_count ) || company_head_countFromTbl > company_head_count ));
		
		//console.log("AND : "+(geographyFromTbl.toUpperCase().indexOf(geography.toUpperCase()) > -1 && companyFromTbl.toUpperCase().indexOf(company.toUpperCase()) > -1));
		//console.log("OR : "+(geographyFromTbl.toUpperCase().indexOf(geography.toUpperCase()) > -1 || companyFromTbl.toUpperCase().indexOf(company.toUpperCase()) > -1));
		/*
        if (geographyFromTbl.toUpperCase().indexOf(geography.toUpperCase()) > -1 
		    && companyFromTbl.toUpperCase().indexOf(company.toUpperCase()) > -1
			&& industryFromTbl.toUpperCase().indexOf(industry.toUpperCase()) > -1
			&& instituteFromTbl.toUpperCase().indexOf(institute.toUpperCase()) > -1
			&& sourceFromTbl.toUpperCase().indexOf(source.toUpperCase()) > -1
			&&( isNaN( company_head_count ) || company_head_countFromTbl > company_head_count )
			)
		*/
		//if(isNaN( company_head_count ) || company_head_countFromTbl > company_head_count )
			if (geographyFromTbl.toUpperCase().indexOf(geography.toUpperCase()) > -1 
		    && companyFromTbl.toUpperCase().indexOf(company.toUpperCase()) > -1
			&& industryFromTbl.toUpperCase().indexOf(industry.toUpperCase()) > -1
			&& instituteFromTbl.toUpperCase().indexOf(institute.toUpperCase()) > -1
			&& sourceFromTbl.toUpperCase().indexOf(source.toUpperCase()) > -1
			&&( isNaN( company_head_count ) || company_head_countFromTbl >= company_head_count )
			)
			{
				return true;
            
			
        }else{
			//alert("false   data[3] : "+data[3]+"   age : "+age);
          
		  return false;
		  
		}
    }
);
 
$(document).ready(function() {
    //$('#example').DataTable();
	
	//slct_source slct_technology slct_industry slct_geography slct_company slct_company_head_count slct_institute
	$('#slct_source,#slct_technology,#slct_industry,#slct_geography,#slct_company,#slct_company_head_count,#slct_institute').on('change', function (){
		//alert("Key Up");
		var table = $('#example').DataTable();
		console.log("slct_company_head_count change : ");
		table.draw();
      // Your stuff...
    });
	
} );