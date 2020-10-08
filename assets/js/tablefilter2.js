/* Custom filtering function which will search data in column four between two values */

$.fn.dataTable.ext.search.push(
    function( settings, data, dataIndex ) {
		
		//slct_source slct_technology slct_industry slct_geography slct_company slct_company_head_count slct_institute
		
		var geography =$('#slct_geography').val();
		var company =$('#slct_company').val();
		var company_head_count = parseInt( $('#company_head_count').val(), 10 );
		var industry =$('#slct_industry').val();
		var institute =$('#slct_institute').val();
		var source =$('#slct_source').val();
		var technology =$('#slct_technology').val();
		var company_head_count = parseInt( $('#slct_company_head_count').val(), 10 );
		
		console.log("company_head_count : "+company_head_count);
		
		var geographyFromTbl =data[5];
		var companyFromTbl =data[6];
		var company_head_countFromTbl = parseFloat( data[7] ) || 0; // use data for the age column
		var industryFromTbl =data[8];
		var instituteFromTbl =data[9];
		var sourceFromTbl =data[10];
		console.log("company_head_countFromTbl : "+isNaN( company_head_count ) && company_head_countFromTbl >= company_head_count);
		/*
        if (geographyFromTbl.toUpperCase().indexOf(geography.toUpperCase()) > -1 
		    && companyFromTbl.toUpperCase().indexOf(company.toUpperCase()) > -1
			&& industryFromTbl.toUpperCase().indexOf(industry.toUpperCase()) > -1
			&& instituteFromTbl.toUpperCase().indexOf(institute.toUpperCase()) > -1
			&& sourceFromTbl.toUpperCase().indexOf(source.toUpperCase()) > -1
			&&( isNaN( company_head_count ) || company_head_countFromTbl >= company_head_count )
			)
		*/
		if (isNaN( company_head_count ) || company_head_countFromTbl >= company_head_count )
        {
			//alert("true   data[3] : "+data[3]+"   age : "+age);
            return true;
			
        }else{
			//alert("false   data[3] : "+data[3]+"   age : "+age);
          return false;
		  
		}
    }
);
 
$(document).ready(function() {
    
	//Geography Company Industry Institute Source
	$('#geography,#company,#industry,#institute,#source,#company_head_count').keyup( function() {
		//alert("Key Up");
		var table = $('#example').DataTable();
		table.draw();
		
    } );
	
	//$('#example').DataTable();
	
	$("#slct_company_head_count").on('change', function (){
		//alert("Key Up");
		var table = $('#example').DataTable();
		console.log("slct_company_head_count change : ");
		table.draw();
      // Your stuff...
    });
	
} );