$(document).ready(function() {
    const tablebody = $("#tbody");

    // Fetch data from the API
    function fetchContactData(){
        $.ajax({
            url: '/api/contact-data',
            method: 'GET',
            success: function(response) {
                // Clear existing rows in the table
                tablebody.empty();
    
                // Append new rows based on the API response
                response.data.forEach(item => {
                    let tr = `<tr>
                        <td>${item.name}</td>
                        <td>${item.email}</td>
                        <td>${item.subject}</td>
                        <td>${item.message}</td>
                        <td><span class='btn btn-danger delete' data-id='${item._id}'>Delete</span></td>
                    </tr>`;
                    tablebody.append(tr);
                });
    
                // Initialize DataTables after data is loaded
                $('#myTable').DataTable();

                $(".delete").on("click", function() {
                    let id = $(this).data('id');
                    $.ajax({
                        method: 'GET',
                        url: `/api/deleteContact?id=${id}`,
                        success: function(response){
                            console.log(response);
                            swal("Success", "Contact Details Delete Successfully", 'success'); 
                            fetchContactData();
                        },
                        error: function(error){
                            swal("Error", 'There is some Error', 'error');
                        }
                    })
                });

            },
            error: function(error) {
                console.log(error);
            }
        });
    }

    fetchContactData();



});
