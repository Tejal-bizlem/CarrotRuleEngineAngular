/* Custom filtering function which will search data in column four between two values */
/*
$.fn.dataTable.ext.search.push(
    function( settings, data, dataIndex ) {
        var min = parseInt( $('#min').val(), 10 );
        var max = parseInt( $('#max').val(), 10 );
		
		var office_name =$('#ofic_name').val();
		
        var age = parseFloat( data[3] ) || 0; // use data for the age column
		
 
        if ( ( isNaN( min ) && isNaN( max ) ) ||
             ( isNaN( min ) && age <= max ) ||
             ( min <= age   && isNaN( max ) ) ||
             ( min <= age   && age <= max ) )
        {
			//alert("true   data[3] : "+data[3]+"   age : "+age);
            return true;
			
        }else{
			//alert("false   data[3] : "+data[3]+"   age : "+age);
          return false;
		  
		}
    }
);
//geography industry company company_head_count institute technology source
*/

$.fn.dataTable.ext.search.push(
    function( settings, data, dataIndex ) {
		alert(" dataTable function called ");
        //var min = parseInt( $('#min').val(), 10 );
        //var max = parseInt( $('#max').val(), 10 );
		
		//var office_name =$('#ofic_name').val();
		//var name =$('#name').val();
		
		// Geography Company Industry Institute Source
		
		var geography =$('#geography').val();
		var company =$('#company').val();
		//var company_head_count =$('#company_head_count').val();
		var company_head_count = parseInt( $('#company_head_count').val(), 10 );
		var industry =$('#industry').val();
		var institute =$('#institute').val();
		var source =$('#source').val();
		
		//var company_head_count =$('#company_head_count').val();
		//var technology =$('#technology').val();
		
		
		var geographyFromTbl =data[5];
		var companyFromTbl =data[6];
		//var company_head_countFromTbl =data[6];
		var company_head_countFromTbl = parseFloat( data[7] ) || 0; // use data for the age column
		var industryFromTbl =data[8];
		var instituteFromTbl =data[9];
		var sourceFromTbl =data[10];
		//var technologyFromTbl =data[5];
		//var company_head_countFromTbl =data[3];
		
		
       // var age = parseFloat( data[3] ) || 0; // use data for the age column
		
		//var office =data[2];
		//var name_og =data[0];
		
		//alert("office : "+office);
		//
		//toUpperCase().indexOf(filter) > -1
        console.log("company_head_countFromTbl : "+isNaN( company_head_count ) && company_head_countFromTbl >= company_head_count);
        if (geographyFromTbl.toUpperCase().indexOf(geography.toUpperCase()) > -1 
		    && companyFromTbl.toUpperCase().indexOf(company.toUpperCase()) > -1
			&& industryFromTbl.toUpperCase().indexOf(industry.toUpperCase()) > -1
			&& instituteFromTbl.toUpperCase().indexOf(institute.toUpperCase()) > -1
			&& sourceFromTbl.toUpperCase().indexOf(source.toUpperCase()) > -1
			&&( isNaN( company_head_count ) || company_head_countFromTbl >= company_head_count )
			)
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
	
	
   // alert(" alt 1");
    // Event listener to the two range filtering inputs to redraw on input
	/*
    $('#min, #max').keyup( function() {
		//alert(" alt 2");
        table.draw();
		//alert(" alt 4");
    } );
	
	
	$('#ofic_name,#name').keyup( function() {
		//alert(" alt 2");
        table.draw();
		//alert(" alt 4");
    } );
	*/
	/*
	$('#ofic_name').change(function() { 
	     alert(" ofic_name");
		 alert(" $(this).val() : "+$(this).val());
        $("#example td.col1:contains('" + $(this).val() + "')").parent().show();
		alert($("#example td.col1:contains('" + $(this).val() + "')").parent().show());
        $("#table td.col1:not(:contains('" + $(this).val() + "'))").parent().hide();
    });
	*/
	
} );